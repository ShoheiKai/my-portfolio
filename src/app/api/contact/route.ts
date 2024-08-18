import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const { email, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // 587 ポートでは SSL/TLS は無効
        auth: {
            user: process.env.GMAIL_HOST_USER,
            pass: process.env.GMAIL_HOST_USER_PASSWORD,
        },
    });

    const toHostMailData = {
        from: email,
        to: "○○○@gmail.com", // 送信先
        subject: `【お問合せ】${name}様より`, // タイトル
        text: `${message} Send from ${email}`,
        html: `
        <p>【名前】</p>
        <p>${name}</p>
        <p>【メッセージ内容】</p>
        <p>${message}</p>
        <p>【メールアドレス】</p>
        <p>${email}</p>
        `,
    };

    try {
        await transporter.sendMail(toHostMailData);
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }
}
