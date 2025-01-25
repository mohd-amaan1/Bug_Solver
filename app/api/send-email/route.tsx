import { Resend } from "resend";
const resend = new Resend(process.env.RESEND_API_KEY);
import welcomeTemplate from "@/emails/welcomeTemplate";
import { NextResponse } from "next/server";

export async function POST() {
    await resend.emails.send({
        from: '',
        to: 'amaan0aka@gmail.com',
        subject: 'Next App',
        html: '<p>Congrats on sending your <strong>first email</strong>!</p>'

    })
    return NextResponse.json({});
}