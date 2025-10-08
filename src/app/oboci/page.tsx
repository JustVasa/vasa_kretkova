import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function ObociPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        {/* Nadpis stránky */}
        <section className="text-center py-16 md:py-24">
          <h1 className="ff-serif text-4xl md:text-5xl text-rose-600 font-semibold">
            NABÍDKA OBOČÍ
          </h1>
          <p className="mt-3 tracking-wide uppercase text-sm text-neutral-600">
            Microblading · Microshading (pudrové obočí)
          </p>
        </section>

        {/* Blok 1 — text vlevo, foto vpravo */}
        <section className="container mx-auto px-4 py-12 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="ff-serif text-3xl  text-rose-600 mb-2">MICROBLADING</h2>
            <p className="text-rose-500 mb-6 uppercase tracking-widest text-xs">
              Chloupkové obočí
            </p>

            <p className="leading-7 text-neutral-700 mb-4">
              <strong>MICROBLADING —</strong> obočí nejdřív na aplikaci řádně
              připravím a potom mu dodám správnou barvu a tvar. Tento styl vláskování se vytváří
              <strong> místo čepelky strojkem</strong>. Tato metoda je velmi šetrná pro vaši kůži
              narozdíl od klasického “vyřezávání”. Na závěr nanáším ještě jednolitou vrstvu
              barviva, která chvilku působí.
            </p>
            <p className="leading-7 text-neutral-700">
              Z toho vznikne vaše <strong>nádherné obočí 😄</strong> Tento permanentní make-up je
              založen na jednotlivém zvýraznění samostatných chloupků, kterým vznikne velmi
              přirozený <strong>3D efekt</strong> napodobující přírodní růst obočí.
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              {/* Nahraj do /public/images/foto03.png */}
              <Image
                src="/images/foto03.png"
                alt="Ukázka Microblading — chloupkové obočí"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* Blok 2 — foto vlevo, text vpravo */}
        <section className="container mx-auto px-4 pb-24 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              {/* Nahraj do /public/images/foto04.png */}
              <Image
                src="/images/foto04.png"
                alt="Ukázka Microshading — pudrové obočí"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="ff-serif text-3xl  text-rose-600 mb-2">MICROSHADING</h2>
            <p className="mb-6 uppercase tracking-widest text-rose-500 text-xs">Pudrové obočí</p>

            <p className="leading-7 text-neutral-700 mb-4">
              MICROSHADING — Pudrové obočí
              je tvořeno mnoha mikrotečkami, které se tetují do prázdných míst mimo chloupky.
              Nevytváří tak zcela jasné kontury, pouze zbarvení.
            </p>
            <p className="leading-7 text-neutral-700">
              Efekt je proto <strong>velmi jemný a přirozený</strong>, ale i přesto jde vidět! 🙂
            </p>
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
