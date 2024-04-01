import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export const POST = async (req: any, res: any) => {
  const { email, subject, message } = await req.json();

  const receiver = "chenkevin1119@gmail.com";
  const toEmails: string[] = [email, receiver];

  try {
    console.log("Sending email...", email, subject, message);
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: toEmails,
      subject: subject,
      text: `Sent From: ${email} to ${receiver}\n 
      Thank you for reaching out! \n
      Subject: ${subject} \n
      Message: ${message}`,
    });
    const resp = NextResponse.json(data);
    return resp;
  } catch (error) {
    const e = NextResponse.json({ error });
    return e;
  }
};
