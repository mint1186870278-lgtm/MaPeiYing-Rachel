export async function POST(request) {
  try {
    // Check if API key is available
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "dummy_key_for_build" || apiKey.trim() === "") {
      console.error("RESEND_API_KEY is not configured");
      return Response.json(
        { error: "Email service not configured. Please check environment variables." },
        { status: 500 }
      );
    }

    // Dynamic import to avoid build-time execution
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey.trim());
    
    const { name, email, message } = await request.json();

    // Validate input
    if (!email || !message) {
      return Response.json(
        { error: "Email and message are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return Response.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Escape HTML to prevent XSS
    const escapeHtml = (text) => {
      const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      };
      return text.replace(/[&<>"']/g, m => map[m]);
    };

    try {
      const data = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "mint1186870278@gmail.com",
        subject: `New message from ${name || email}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #333;">New Contact Form Message</h2>
            <p><strong>From:</strong> ${escapeHtml(email)}</p>
            ${name ? `<p><strong>Name:</strong> ${escapeHtml(name)}</p>` : ''}
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
          </div>
        `,
      });

      // Log the full response for debugging
      console.log("Resend API response:", JSON.stringify(data, null, 2));

      // Check for Resend API errors
      if (data.error) {
        console.error("Resend API error:", JSON.stringify(data.error, null, 2));
        const errorMessage = data.error.message || JSON.stringify(data.error);
        return Response.json(
          { error: `Resend API error: ${errorMessage}` },
          { status: 500 }
        );
      }

      // If no error, consider it successful (Resend returns { id: "..." } on success)
      // But we'll be more lenient and accept any response without an error
      return Response.json({ success: true, data });
    } catch (resendError) {
      console.error("Resend send error:", resendError);
      throw resendError;
    }
  } catch (error) {
    console.error("Email send error:", error);
    console.error("Error stack:", error.stack);
    const errorMessage = error.message || "Unknown error occurred";
    const errorDetails = error.response?.data || error.cause || {};
    
    return Response.json(
      { 
        error: `Failed to send email: ${errorMessage}`,
        details: process.env.NODE_ENV === 'development' ? errorDetails : undefined
      },
      { status: 500 }
    );
  }
}
