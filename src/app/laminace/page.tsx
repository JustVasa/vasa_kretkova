import Navbar from "@/app/components/Navbar";
import Image from "next/image";

export default function LaminacePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        {/* Nadpis stránky */}
        <section className="text-center py-16 md:py-24">
          <h1 className="ff-serif text-4xl md:text-5xl text-rose-600 font-semibold">
            Laminace obočí & Lashlift
          </h1>
        </section>

        {/* Galerie obrázků */}
        <section className="container mx-auto px-4 pb-24 max-w-6xl">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[7, 8, 9, 10, 11, 12].map((num) => (
              <div
                key={num}
                className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src={`/images/foto0${num}.png`}
                  alt={`Laminace obočí a lashlift — foto ${num}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
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
