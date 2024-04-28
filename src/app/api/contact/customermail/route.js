import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request, response) {
  try {
    const { to, subject, message, firstname, surname, phone } =
      await request.json();

    let transporter = nodemailer.createTransport({
      host: process.env.HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOption = {
      from: `"Schwarz Architekten" <${process.env.EMAIL}>`,
      to: to,
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
              <tr>
                  <td style="padding: 20px; text-align: center;">
                      <a href="https://www.schwarz-architekten.com/" style="display: inline-block; margin-bottom: 20px;">
                          <img src="https://i.ibb.co/PhpnTHP/SA-logo-pngreal.png" alt="SA-logo-pngreal" style="height: 30px; width: auto; border: 0;">
                      </a>
                      
                  </td>
              </tr>
              <tr>
                  <td style="padding: 20px 30px; line-height: 1.6; text-align: justify; border-top: 0.5px solid #000; border-bottom: 0.5px solid #000;">
                  <h4 style="margin: 0; color: #000;">Guten Tag ${firstname} ${surname}</h4>
                      <p>Wir haben Ihre Anfrage erhalten und werden uns schnellstmöglich bei Ihnen melden.</p>
                      <p>Vielen Dank für Ihr Interesse an unseren Architekturdienstleistungen. Jedes Projekt ist uns wichtig, und wir verstehen, dass hinter jeder Anfrage eine Vision und Erwartung steht. Unser Team prüft gerade die Details Ihrer Anfrage, um sicherzustellen, dass wir alle notwendigen Informationen haben, um Ihnen einen umfassenden und detaillierten Vorschlag zu unterbreiten.</p>
                      <p>Sollten Sie in der Zwischenzeit zusätzliche Informationen zur Verfügung stellen wollen oder weitere Fragen haben, zögern Sie bitte nicht, uns direkt zu kontaktieren. Sie können uns jederzeit per E-Mail unter info@schwarz-architekten.com oder telefonisch unter +41 (0) 44 389 10 60 erreichen.</p>
                      <br>
                      <div style="padding: 0 20px">
                      <p><strong>Ihr persönliches Anliegen:</strong></p>
                      <p>${message}</p>
                      </div>
                      <br>
                      <p>Wir schätzen Ihr Vertrauen in unser Unternehmen und streben danach, Ihre Erwartungen zu übertreffen. Einer unserer Mitarbeiter wird sich innerhalb der nächsten 48 Stunden mit Ihnen in Verbindung setzen, um die nächsten Schritte zu besprechen.</p>
                  </td>
              </tr>
              <tr>
             
                  <td style="padding: 20px 30px; text-align: right;">
                  <div style="width: 100%; text-align: left;">
                      <p>Mit freundlichen Grüssen,</p>
                      <h3 style="margin: 5px 0;">Dietrich Schwarz Architekten AG</h3>
                      </div>
                      <a href="https://www.schwarz-architekten.com/" style="display: inline-block; margin-top: 10px;">
                          <img src="https://i.ibb.co/PhpnTHP/SA-logo-pngreal.png" alt="SA-logo-pngreal" style="height: 15px; width: auto; border: 0;">
                      </a>
                      <p style="font-size: 12px;">Seestrasse 224</p>
                      <p style="font-size: 12px;">8004 Zürich</p>
                      <p style="font-size: 12px;">+41 (0) 44 389 10 60</p>
                      <p style="font-size: 12px;">info@schwarz-architekten.com</p>
                  </td>
              </tr>
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
