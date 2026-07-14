import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helpers/mailer";

export async function POST(request: NextRequest) {
  try {
    const { name, from, message } = await request.json();
    const mailResponse = await sendEmail(name, from, message);
    return NextResponse.json({
      message: "Email sent successfully",
      mailResponse,
    });
  } catch (error: any) {
    return NextResponse.json({
      error: `Failed to send email: ${error.message}`,
    });
  }
}
