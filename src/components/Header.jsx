"use client";
import Link from "next/link";
import { CONTACT_INFO } from "@/constants";
import { useEffect, useState } from "react";

export default function Header() {
  const [overHero, setOverHero] = useState(true);

  useEffect(() => {
    const update = () => {
      const hero = document.getElementById("hero");
      if (!hero) { setOverHero(false); return; }
      const threshold = hero.offsetHeight - 80;
      setOverHero(window.scrollY < threshold);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 font-[family-name:var(--font-ibm-plex)] transition-all duration-300 ${
      overHero
        ? "bg-transparent border-b border-transparent shadow-none"
        : "bg-white/85 backdrop-blur-md border-b border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.04)]"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <div className={`text-xl md:text-2xl font-bold tracking-wide ${overHero ? "text-white" : "text-[#1b1b1b]"}`}>
          مساكن <span className="text-[#b8860b]">الصفا 1</span>
        </div>

        <nav className={`hidden md:flex items-center gap-10 text-sm md:text-base font-medium tracking-wide ${overHero ? "text-white" : "text-[#1b1b1b]"}`}>
          <Link
            href="#"
            className="relative hover:text-[#b8860b] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-[#b8860b] after:transition-all after:duration-300 hover:after:w-full"
          >
            الرئيسية
          </Link>
          <Link
            href="#apartments"
            className="relative hover:text-[#b8860b] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-[#b8860b] after:transition-all after:duration-300 hover:after:w-full"
          >
            الوحدات
          </Link>
          <Link
            href="#location"
            className="relative hover:text-[#b8860b] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-[#b8860b] after:transition-all after:duration-300 hover:after:w-full"
          >
            الموقع
          </Link>
          <Link
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            className="relative hover:text-[#b8860b] transition-colors duration-300 after:content-[''] after:absolute after:-bottom-1 after:right-0 after:h-[2px] after:w-0 after:bg-[#b8860b] after:transition-all after:duration-300 hover:after:w-full"
          >
            تواصل معنا
          </Link>
        </nav>

        <a
          href={CONTACT_INFO.whatsappUrl}
          target="_blank"
          className={`hidden md:inline-flex items-center justify-center px-6 py-2 text-sm md:text-base font-bold tracking-wide rounded-full transition-all duration-300 ${
            overHero
              ? "border border-white/60 text-white hover:bg-white hover:text-[#1b1b1b]"
              : "border border-[#1b1b1b] text-[#1b1b1b] hover:bg-[#b8860b] hover:border-[#b8860b] hover:text-white"
          }`}
        >
          واتساب
        </a>
      </div>
    </header>
  );
}
