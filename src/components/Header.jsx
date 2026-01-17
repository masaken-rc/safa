import Link from "next/link";
import { CONTACT_INFO } from "@/constants";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5 shadow-[0_8px_24px_rgba(0,0,0,0.04)] font-[family-name:var(--font-ibm-plex)]">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        <div className="text-xl md:text-2xl font-bold tracking-wide text-[#1b1b1b]">
          مساكن <span className="text-[#b8860b]">الصفا 1</span>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm md:text-base font-medium tracking-wide text-[#1b1b1b]">
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
            الشقق
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
          className="hidden md:inline-flex items-center justify-center px-6 py-2 text-sm md:text-base font-bold tracking-wide border border-[#1b1b1b] text-[#1b1b1b] rounded-full hover:bg-[#b8860b] hover:border-[#b8860b] hover:text-white transition-all duration-300"
        >
          واتساب
        </a>
      </div>
    </header>
  );
}
