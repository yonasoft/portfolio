import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export const POST = async (req: any, res: any) => {
  const { email, subject, message } = await req.json();

  const toEmails: string[] = [
    email,
    "chenkevin1119@gmail.com",
    "yonasoft7@gmail.com",
  ];

  try {
    console.log("Sending email...", email, subject, message);
    const data = await resend.emails.send({
      from: fromEmail as string,
      to: toEmails,
      subject: subject,
      text: `Sent From: ${email}\n 
      Thank you for reaching out! \n
      Subject: ${subject} \n
      Message: ${message}`,
    });
    const resp = NextResponse.json(data);
    console.log(resp);
    return resp;
  } catch (error) {
    const e = NextResponse.json({ error });
    console.log(e);
    return e;
  }
};
