export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-[70vh] min-h-[480px]
                 bg-gradient-to-b from-rose-100 via-pink-50 to-white text-center overflow-hidden"
    >
      {/* Text uvnitř hero */}
      <div className="px-6 z-10">
        <h1 className="ff-serif text-5xl md:text-6xl text-rose-600 font-semibold mb-4">
          Kretková Natálie
        </h1>

        <div className="mx-auto h-[2px] w-24 bg-rose-400 mb-6" />

        <p className="text-neutral-700 text-lg md:text-xl max-w-xl mx-auto leading-relaxed">
          Permanent Makeup Artist — přirozená krása, precizní technika, moderní styl.
        </p>
      </div>

      {/* Jemný dekorativní gradientový overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-rose-50/50 via-transparent to-white/60 pointer-events-none z-0" />

      {/* 🔽 Šipka dolů */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-10 h-10 text-rose-500 opacity-80 animate-bounce-slow"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
