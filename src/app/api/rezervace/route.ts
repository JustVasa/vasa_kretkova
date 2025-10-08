import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message, hp } = await req.json();

    if (hp) return NextResponse.json({ ok: true }); // honeypot

    if (!name || !email || !message) {
      return new NextResponse("Missing fields", { status: 400 });
    }

    const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

    // ✅ Guard: pokud ještě nemáš SMTP, vrátíme 202, aby nezpůsobil 500 na Vercelu
    if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
      console.warn("[rezervace] SMTP env vars missing — skipping send");
      return NextResponse.json(
        {
          ok: true,
          note:
            "E-mail zatím neodeslán (chybí SMTP). Až doplníš SMTP env proměnné ve Vercelu, začne se posílat.",
        },
        { status: 202 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });

    await transporter.sendMail({
      from: `"Rezervace web" <${SMTP_USER}>`,
      to: "kretkova.natalie@seznam.cz",
      replyTo: email,
      subject: `Nová rezervace od ${name}`,
      text: `Jméno a příjmení: ${name}\nE-mail: ${email}\n\nZpráva:\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("MAIL ERROR:", err);
    return new NextResponse("Email send failed", { status: 500 });
  }
}
