export async function POST(request) {
  try {
    // Check if API key is available
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "dummy_key_for_build") {
      return Response.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Dynamic import to avoid build-time execution
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Rachel <mint1186870278@gmail.com>",
      to: "mint1186870278@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <p><strong>Email:</strong> ${email}</p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
