import EmailTemplate from '@/components/Contact/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);


export async function POST(formData: { fullName: string; email: string; subject: string }) {
  try {
    const data = await resend.emails.send({
      from: `${formData.fullName} <${formData.email}>`,
      to: ['goronjicmarko24@gmail.com'],
      subject: formData.subject,
      react: EmailTemplate({
        fullName: formData.fullName,
        email: formData.email,
        subject: formData.subject,
      }) as React.ReactElement,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}