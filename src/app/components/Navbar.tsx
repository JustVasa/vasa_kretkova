"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const NAV = [
  { href: "/", label: "Úvod" },
  { href: "/oboci", label: "Obočí" },
  { href: "/rty", label: "Rty" },
  { href: "/cenik", label: "Ceník" },
  { href: "/rezervace", label: "Rezervace" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/laminace", label: "Laminace obočí & Lashlift" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const btnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // zavření při navigaci mimo nebo resize na desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function toggleMenu(e?: React.SyntheticEvent) {
    e?.preventDefault();
    e?.stopPropagation();
    setOpen((v) => !v);
  }

  return (
    <header
      className={`sticky top-0 z-[100] bg-white/80 backdrop-blur border-b transition-all duration-300 ${
        scrolled ? "py-1 border-neutral-200" : "py-3 border-transparent"
      }`}
    >
      {/* Logo nahoře uprostřed */}
      <div className="container mx-auto px-4 relative flex items-center justify-center">
        <Link href="/" className="block">
          <Image
            src="/images/logo.png"
            alt="Makeup Studio logo"
            width={240}
            height={110}
            className={`mx-auto object-contain transition-all duration-300 ${
              scrolled ? "h-12" : "h-16"
            }`}
            priority
          />
        </Link>

        {/* Burger napravo (jen mobil) */}
        <button
          ref={btnRef}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onPointerUp={toggleMenu}              // spolehlivější než onClick na iOS
          className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-[110]
                     inline-flex flex-col items-center justify-center gap-1.5
                     p-3 rounded-lg active:scale-95 select-none"
          style={{ touchAction: "manipulation" }} // zrychlí click na mobilech
        >
          <span className="block h-0.5 w-6 bg-neutral-900" />
          <span className="block h-0.5 w-6 bg-neutral-900" />
          <span className="block h-0.5 w-6 bg-neutral-900" />
        </button>
      </div>

      {/* Navigace pod logem */}
      <div
        className={`border-t border-neutral-200 transition-all duration-300 ${
          scrolled ? "pt-1 pb-2" : "pt-3 pb-4"
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Desktop menu */}
          <nav className="hidden md:flex items-center justify-center gap-8">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="tracking-[0.2em] uppercase text-sm text-neutral-800 hover:text-rose-600 relative group"
              >
                {item.label}
                <span className="absolute left-1/2 -bottom-1 h-px w-0 bg-rose-400 transition-all group-hover:w-full group-hover:left-0" />
              </Link>
            ))}
          </nav>

          {/* Mobile sheet (plně klikatelné, velká plocha) */}
          <div
            id="mobile-nav"
            className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300
                        ${open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <nav className="mt-2 border-t border-neutral-200 bg-white rounded-b-2xl shadow-md">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-4 px-6 text-base text-neutral-900 border-b border-neutral-100 last:border-none text-center"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
