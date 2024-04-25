import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

export async function POST(
  req: { method: string; body: { subject: string; to: string; html: string } },
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: { error?: string; message?: string }): any; new (): any };
      end: { (arg0: string): void; new (): any };
    };
    setHeader: (arg0: string, arg1: string[]) => void;
  }
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return NextResponse.rewrite(new URL('/405'));
  }
  const { subject, to, html } = req.body;
  console.log(subject);
  const transporter = nodemailer.createTransport({
    host: process.env.HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  } as SMTPTransport.Options);

  try {
    await transporter.verify();
    await transporter.sendMail({
      from: process.env.EMAIL,
      to: to,
      subject: subject,
      html: html,
    });
    return new NextResponse(
      JSON.stringify({ message: 'Email sent successfully.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Send Email Error:', error);
    return new NextResponse(
      JSON.stringify({
        error: 'Failed to send email.',
      }),
      { status: 500 }
    );
  }
}
