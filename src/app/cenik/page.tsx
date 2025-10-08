import Navbar from "@/app/components/Navbar";

export default function CenikPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        {/* Nadpis stránky */}
        <section className="text-center py-16 md:py-24">
          <h1 className="ff-serif text-4xl md:text-5xl text-rose-600 font-semibold">
            CENÍK
          </h1>
          <p className="mt-3 tracking-wide uppercase text-sm text-neutral-600">
            Permanentní make-up · Laminace · Lashlifting
          </p>
        </section>

        {/* Obsah ceníku */}
        <section className="container mx-auto px-4 pb-24 max-w-3xl">
          {/* Kategorie: Microblading */}
          <h2 className="text-2xl text-rose-600 font-semibold mt-12 mb-6 text-center">
            MICROBLADING
          </h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Vláskování</span>
              <span className="font-semibold">3 490 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Microshading — Pudrové obočí</span>
              <span className="font-semibold">3 490 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Kombinované obočí</span>
              <span className="font-semibold">3 690 Kč</span>
            </li>
          </ul>

          {/* Kategorie: Rty */}
          <h2 className="text-2xl text-rose-600 font-semibold mt-12 mb-6 text-center">
            RTY
          </h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Aquarelle lips — Stínování rtů</span>
              <span className="font-semibold">3 490 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Kontura rtů</span>
              <span className="font-semibold">1 790 Kč</span>
            </li>
          </ul>

          {/* Kategorie: Oční linky */}
          <h2 className="text-2xl text-rose-600 font-semibold mt-12 mb-6 text-center">
            OČNÍ LINKY
          </h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Meziřasová oční linka</span>
              <span className="font-semibold">2 100 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Plná oční linka</span>
              <span className="font-semibold">2 700 Kč</span>
            </li>
          </ul>

          {/* Kategorie: Laminace a lashlifting */}
          <h2 className="text-2xl text-rose-600 font-semibold mt-12 mb-6 text-center">
            LAMINACE A LASHLIFTING
          </h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Laminace obočí — Lifting</span>
              <span className="font-semibold">700 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Lashlifting — Natočení řas</span>
              <span className="font-semibold">550 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Laminace + Lashlift</span>
              <span className="font-semibold">1 100 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Trhání a barvení obočí</span>
              <span className="font-semibold">249 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Barvení řas</span>
              <span className="font-semibold">200 Kč</span>
            </li>
          </ul>

          {/* Kategorie: Korekce */}
          <h2 className="text-2xl text-rose-600 font-semibold mt-12 mb-6 text-center">
            KOREKCE
          </h2>
          <ul className="space-y-4 text-neutral-700">
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Korekce obočí i rtů — do 2 měsíců</span>
              <span className="font-semibold">500 Kč</span>
            </li>
            <li className="flex justify-between border-b border-neutral-200 pb-2">
              <span>Korekce obočí i rtů — od 2 měsíců</span>
              <span className="font-semibold">800 Kč</span>
            </li>
          </ul>
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
