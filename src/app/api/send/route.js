import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
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
    return Response.json({ error }, { status: 500 });
  }
}
