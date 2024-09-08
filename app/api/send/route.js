import { NextResponse } from "next/server";
import { Resend } from "resend";
import AppointmentConfirmationEmail from "@/emails/email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const response = await req.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: [response.data.email],
      subject: "Appointment Booking Confirmation",
      react: AppointmentConfirmationEmail({ response }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
