import Navbar from "@/app/components/Navbar";

export default function KontaktPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50 flex items-center">
        <section className="container mx-auto px-4 py-16 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          {/* Mapa vlevo */}
          <div className="w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps?q=Klegova%2080%20Ostrava&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
            ></iframe>
          </div>

          {/* Kontakt vpravo */}
          <div className="text-center md:text-left">
            <h1 className="ff-serif text-4xl md:text-5xl text-rose-600 font-semibold mb-6">
              KONTAKT
            </h1>
            <p className="text-neutral-600 text-lg mb-8">
              Těším se na vaši návštěvu 
            </p>

            <div className="space-y-6 text-neutral-700 text-base">
              <div>
                <h2 className="text-rose-500 uppercase tracking-widest text-sm mb-1">
                  Jméno
                </h2>
                <p className="font-medium">Natálie Kretková</p>
              </div>

              <div>
                <h2 className="text-rose-500 uppercase tracking-widest text-sm mb-1">
                  Adresa
                </h2>
                <p>Klegova 80, Ostrava</p>
              </div>

              <div>
                <h2 className="text-rose-500 uppercase tracking-widest text-sm mb-1">
                  Telefonní číslo
                </h2>
                <a
                  href="tel:+420722666036"
                  className="text-rose-600 hover:underline font-medium"
                >
                  +420 722 666 036
                </a>
              </div>

              <div>
                <h2 className="text-rose-500 uppercase tracking-widest text-sm mb-1">
                  E-mail
                </h2>
                <a
                  href="mailto:kretkova.natalie@seznam.cz"
                  className="text-rose-600 hover:underline font-medium break-words"
                >
                  kretkova.natalie@seznam.cz
                </a>
              </div>
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
