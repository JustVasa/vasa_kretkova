import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function RtyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        {/* Nadpis stránky */}
        <section className="text-center py-16 md:py-24">
          <h1 className="ff-serif text-4xl md:text-5xl text-rose-600 font-semibold">
            NABÍDKA RTŮ
          </h1>
          <p className="mt-3 tracking-wide uppercase text-sm text-neutral-600">
            Aquarelle Lips · Permanent Make-up Rtů
          </p>
        </section>

        {/* Blok 1 — text vlevo, foto vpravo */}
        <section className="container mx-auto px-4 py-12 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="ff-serif text-3xl text-rose-600 mb-2">AQUARELLE LIPS</h2>
            <p className="text-rose-500 mb-6 uppercase tracking-widest text-xs">
              Permanent rtů
            </p>

            <p className="leading-7 text-neutral-700 mb-4">
              <strong>Aquarelle Lips —</strong> tato metoda Vám opticky zvětší rty.
              Jedná se o vybarvení jak kontury, tak samotných rtů, které budete mít
              i po ránu krásně růžové a přirozené.
            </p>
          </div>
        </section>

        {/* Blok 2 — Rty před / po (dvě fotky s popisky) */}
        <section className="container mx-auto px-4 pb-24 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10">
            {/* Foto 05 — Rty před permanentem */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/foto05.png"
                  alt="Rty před permanentem"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-neutral-600 font-medium">Rty před permanentem</p>
            </div>

            {/* Foto 06 — Po permanentu */}
            <div className="flex flex-col items-center">
              <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/foto06.png"
                  alt="Po permanentu"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-4 text-neutral-600 font-medium">Po permanentu</p>
            </div>
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
