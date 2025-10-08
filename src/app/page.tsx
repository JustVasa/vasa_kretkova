import Navbar from "./components/Navbar";
import Image from "next/image";

export default function HomePage() {
  return (
    <>
      {/* Navigace */}
      <Navbar />

      {/* HERO */}
      <section
        className="relative flex items-center justify-center h-[70vh] min-h-[480px]
                   bg-gradient-to-b from-rose-100 via-pink-50 to-white text-center"
      >
        <div className="px-6">
          <h1 className="ff-serif text-5xl md:text-6xl text-rose-600 font-semibold mb-4">
            Kretková Natálie
          </h1>
          <div className="mx-auto h-[2px] w-24 bg-rose-400 mb-6" />
          <p className="text-neutral-700 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
            Permanent Makeup Artist — přirozená krása, precizní technika, moderní styl.
          </p>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50/30 via-transparent to-white/60 pointer-events-none" />
      </section>

      {/* ÚVODNÍ SEKCION */}
      <main className="min-h-screen bg-gradient-to-b from-white to-rose-50">
        {/* 1. blok – text vlevo, fotka vpravo */}
        <section className="container mx-auto px-4 py-20 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="ff-serif text-2xl font-semibold text-rose-600 text-neutral-800 mb-6">
              Kdo jsem a co to znamená?
            </h2>
            <p className="leading-7 text-neutral-700 mb-4">
              Jmenuji se <strong>Natálie Kretková</strong> a dělat kosmetičku se zaměřením na
              estetiku byl vždy můj sen! Ten sen jsem si už velmi brzo splnila a dnes mám za sebou
              už přes <strong>dvě sta spokojených zákaznic :-)</strong>
            </p>
            <p className="leading-7 text-neutral-700 mb-4">
              Moje práce je mým největším koníčkem a pracuji samozřejmě jen s nejlepšími a
              nejkvalitnějšími značkami. Vykouzlím vám úsměv na tváři jak při barvení obočí,
              laminaci, lashliftu či permanentním make-upu. Mé klientky jsou taky mými
              “kamarádkami”.
            </p>
            <p className="leading-7 text-neutral-700">
              Děkuji za vaši přízeň a budu se na Vás dále těšit. ❤️
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/foto01.png"
                alt="Natálie Kretková při práci"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. blok – fotka vlevo, text vpravo */}
        <section className="container mx-auto px-4 py-16 max-w-6xl grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-full max-w-sm aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/foto02.png"
                alt="Permanentní make-up — ukázka práce"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="order-1 md:order-2">
            <h2 className="ff-serif text-2xl font-semibold text-rose-600 text-neutral-800 mb-6">
              Co je permanentní make-up?
            </h2>
            <p className="leading-7 text-neutral-700 mb-4">
              Permanentní make-up je kosmetický zákrok, při kterém se pomocí jemné jehly vstřikuje
              barvivo do kůže. Tento zákrok se používá k vyplnění obočí, linkování očí a zvýraznění
              rtů. Barva se vybírá tak, aby co nejlépe odpovídala přirozenému tónu pleti.
            </p>
            <p className="leading-7 text-neutral-700 mb-4">
              Je vhodný pro lidi s řídkým obočím nebo s těžko kreslitelným obočím. Také pro ty,
              kteří chtějí ušetřit čas při nanášení make-upu. Výsledek vydrží obvykle
              <strong> 3 – 4 roky</strong> podle typu pleti a péče.
            </p>
            <p className="leading-7 text-neutral-700 mb-4">
              Při zákroku se používá lokální anestetikum, aby se snížila bolestivost. Po zákroku může
              být kůže podrážděná a oteklá – je důležité chránit místo před sluncem a udržovat ho
              čisté, aby barva nevybledla.
            </p>
            <p className="leading-7 text-neutral-700">
              Permanentní make-up je stále populárnější a mnoho žen si ho oblíbilo. Je to rychlý a
              efektivní způsob, jak zvýraznit svou krásu a ušetřit čas.
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
