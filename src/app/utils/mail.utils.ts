import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';

const transport = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: 'sa-kontaktformular@outlook.com',
    pass: 'vrkPZY7bVHBbpgu',
  },
} as SMTPTransport.Options);

export type SendEmailDto = {
  sender: Mail.Address;
  receipient: Mail.Address;
  subject: string;
  message: string;
};

export const sendEmail = async (dto: SendEmailDto) => {
  const { sender, receipient, subject, message } = dto;

  return await transport.sendMail({
    from: sender,
    to: receipient,
    subject,
    html: message,
    text: message,
  });
};
