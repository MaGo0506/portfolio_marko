"use server"

import EmailTemplate from '@/components/Contact/EmailTemplate';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, message, subject, phone } = body;
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['goronjicmarko24@gmail.com'],
      subject: subject,
      react: EmailTemplate({
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      }) as React.ReactElement,
    });

    console.log('data', data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
};