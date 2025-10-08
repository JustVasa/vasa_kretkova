"use client";

import Navbar from "@/app/components/Navbar";
import { useState } from "react";


export default function RezervacePage() {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      hp: formData.get("website") as string, // honeypot
    };

    try {
      const res = await fetch("/api/rezervace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(await res.text());
      setState("ok");
      form.reset();
    } catch (err: any) {
      setError("Odeslání se nezdařilo. Zkuste to prosím znovu nebo zavolejte.");
      setState("error");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        {/* Nadpis */}
        <section className="text-center py-16 md:py-20">
          <h1 className="ff-serif text-4xl md:text-5xl text-rose-600 font-semibold">
            REZERVACE
          </h1>
        </section>

        {/* Dvoukolejné rozvržení */}
        <section className="container mx-auto px-4 pb-24 max-w-6xl grid md:grid-cols-2 gap-12 items-start">
          {/* Text vlevo */}
          <div className="text-neutral-700 leading-7">
            <p className="mb-5">
              <strong>Vaši rezervaci potvrdím do 24 hodin</strong>
            </p>
            <p className="mb-5">
              Objednat se můžete i na instagramovém profilu{" "}
              <a
                href="https://www.instagram.com/kretkova_pernament"
                target="_blank"
                rel="noreferrer"
                className="text-rose-600 hover:underline"
              >
                @kretkova_pernament
              </a>{" "}
              nebo na tel. čísle dole.
            </p>
            <p className="mb-2">
              <strong>Volejte:</strong> <a href="tel:+420722666036" className="text-rose-600 hover:underline">+420 722 666 036</a>
            </p>

            {state === "ok" && (
              <div className="mt-8 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
                Děkuji, zpráva byla úspěšně odeslána. Ozvu se co nejdříve. 💌
              </div>
            )}
            {state === "error" && (
              <div className="mt-8 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
                {error}
              </div>
            )}
          </div>

          {/* Formulář vpravo */}
          <form onSubmit={onSubmit} className="bg-white/80 backdrop-blur rounded-2xl shadow-lg p-6 md:p-8 border border-neutral-200">
            {/* Honeypot (skryté pole proti spamu) */}
            <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                  Jméno a příjmení
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
                  placeholder="Jan Novák"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
                  placeholder="jan.novak@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-xl border border-neutral-300 px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
                  placeholder="Napište, o jakou službu máte zájem a preferovaný termín…"
                />
              </div>

              <button
                type="submit"
                disabled={state === "sending"}
                className="inline-flex items-center justify-center rounded-xl bg-rose-600 px-6 py-3 text-white font-medium hover:bg-rose-700 disabled:opacity-60"
              >
                {state === "sending" ? "Odesílám…" : "Odeslat rezervaci"}
              </button>
            </div>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-neutral-200 mt-20 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-10 text-sm text-neutral-500 text-center">
          © {new Date().getFullYear()} Kretková Natálie — Permanent Makeup Studio
        </div>
      </footer>
    </>
  );
}
