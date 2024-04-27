import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const getFormattedDate = () => {
  const date = new Date();
  const options = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Zurich',
  };
  return new Intl.DateTimeFormat('de-CH', options).format(date);
};

const currentDate = getFormattedDate();

export async function POST(request, response) {
  try {
    const { to, subject, message, firstname, surname, phone, email, date } =
      await request.json();

    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: process.env.NODE_ENV === 'production',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOption = {
      from: process.env.EMAIL,
      to: 'carlo_ettisberger@hotmail.com',
      subject: subject,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Email Template</title>
      </head>
      <body style="font-family: 'Helvetica Neue', Arial, sans-serif; margin: 0; padding: 0; color: #333; background-color: #fff;">
          <table style="width: 100%; max-width: 800px; margin: 40px auto; border-collapse: collapse;">
            <h1>Neue Anfrage</h1>
            <div>
            <p><strong>Name: </strong>${surname}</p>
            <p><strong>Vorname: </strong>${firstname}</p>
            <p><strong>Telefonnummer: </strong>${phone}</p>
            <p><strong>Mail: </strong>${to}</p>
            <p><strong>Nachricht: </strong>${message}</p>
            <p><strong>Datum: </strong>${currentDate}</p>
            </div>
          </table>
      </body>
      </html>
      
    `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json({ message: 'email sent cool' }, { status: 202 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed fucker' }, { status: 500 });
  }
}
