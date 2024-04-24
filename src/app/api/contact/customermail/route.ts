import { sendEmail } from '@/app/utils/mail.utils';

export async function POST() {
  const sender = {
    name: 'Schwarz Architekten',
    address: 'sa-kontaktformular@outlook.com',
  };

  const receipient = {
    name: 'Carlo',
    address: 'carlo_ettisberger@hotmail.com',
  };

  try {
    const result = await sendEmail({
      sender,
      receipient,
      subject: 'Welcome',
      message: 'helloo',
    });
    return Response.json({
      accepted: result.accepted,
    });
  } catch (error) {
    return Response.json(
      {
        message: 'Unable to send message',
      },
      { status: 500 }
    );
  }
}
