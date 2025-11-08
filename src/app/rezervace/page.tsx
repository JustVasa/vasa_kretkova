"use client";

import Navbar from "@/app/components/Navbar";
import { useState } from "react";

export default function RezervacePage() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = (formData.get("name") ?? "").toString().trim();
    const email = (formData.get("email") ?? "").toString().trim();
    const message = (formData.get("message") ?? "").toString().trim();
    const hp = (formData.get("hp") ?? "").toString();

    if (!name || !email || !message) {
      setError("Vyplňte prosím všechna povinná pole.");
      setState("error");
      return;
    }

    const payload = { name, email, message, hp };

    try {
      const res = await fetch("/api/rezervace", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok && res.status !== 202) {
        throw new Error("Server error");
      }

      setState("sent");
      form.reset();
    } catch {
      // žádný 'any', žádná nevyužitá proměnná
      setError("Odeslání se nezdařilo. Zkuste to prosím znovu nebo zavolejte.");
      setState("error");
    }
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        <section className="text-center py-16 md:py-24">
          <h1 className="ff-serif text-4xl md:text-5xl text-rose-600 font-semibold">
            REZERVACE
          </h1>
          <p className="mt-3 text-neutral-600">
            Vaši rezervaci potvrdím do 24 hodin.
            <br />
            Objednat se můžete i na instagramovém profilu{" "}
            <a
              href="https://www.instagram.com/kretkova_permanent/"
              className="text-rose-600 hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              @kretkova_pernament
            </a>{" "}
            nebo na tel. čísle dole.
          </p>
          <p className="mt-4 text-rose-500 text-lg font-medium">
            Volejte: <a href="tel:+420722666036">+420 722 666 036</a>
          </p>
        </section>

        <section className="container mx-auto px-4 pb-24 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Levá strana – text */}
            <div>
              <h2 className="ff-serif text-2xl text-rose-600 mb-4">Napište mi zprávu</h2>
              <p className="text-neutral-700 leading-relaxed">
                Vyplňte formulář a já se vám ozvu zpět co nejdříve.
              </p>

              {state === "sent" && (
                <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-700">
                  Děkuji, zpráva byla úspěšně odeslána. Ozvu se co nejdříve. 💌
                </div>
              )}
              {state === "error" && (
                <div className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-700">
                  {error}
                </div>
              )}
            </div>

            {/* Pravá strana – formulář */}
            <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-md p-6 space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                  Jméno a příjmení
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                  Zpráva
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-400"
                />
              </div>

              {/* honeypot – skrytý input proti spamu */}
              <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />

              <button
                type="submit"
                disabled={state === "sending"}
                className="w-full bg-rose-500 text-white py-3 rounded-md hover:bg-rose-600 transition-colors disabled:opacity-50"
              >
                {state === "sending" ? "Odesílám..." : state === "sent" ? "Odesláno ✅" : "Odeslat rezervaci"}
              </button>

              {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            </form>
          </div>
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
