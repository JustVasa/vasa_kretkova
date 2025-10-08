import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, hp } = await req.json();

    // Honeypot: pokud je vyplněn, vyhoď (bot)
    if (hp) return NextResponse.json({ ok: true });

    if (!name || !email || !message) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    // SMTP transporter (Seznam, Gmail apod.)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,           // např. "smtp.seznam.cz"
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true,                          // 465 = true, 587 = false + tls
      auth: {
        user: process.env.SMTP_USER,         // celý e-mail, např. "kretkova.natalie@seznam.cz"
        pass: process.env.SMTP_PASS,         // heslo / app password
      },
      tls: {
        // u některých poskytovatelů může být vhodné:
        rejectUnauthorized: true,
      },
    });

    const to = "kretkova.natalie@seznam.cz";
    const subject = `Nová rezervace od ${name}`;
    const text = [
      `Jméno a příjmení: ${name}`,
      `E-mail: ${email}`,
      "",
      "Zpráva:",
      message,
    ].join("\n");

    await transporter.sendMail({
      from: `"Rezervace web" <${process.env.SMTP_USER}>`,
      to,
      replyTo: email,
      subject,
      text,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return new NextResponse("Email send failed", { status: 500 });
  }
}
