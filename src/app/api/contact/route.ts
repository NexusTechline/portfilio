import { NextResponse } from "next/server";
import { Resend } from "resend";
import type React from "react";
import ContactFormEmail from "../../../emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const data = await resend.emails.send({
      from: "Your Portfolio <onboarding@resend.dev>",
      to: process.env.EMAIL_TO as string,
      subject: "New Contact Form Submission",
      react: ContactFormEmail({ name, email, message }) as React.ReactElement,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Error sending email" },
      { status: 500 }
    );
  }
}
