"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";
import { CONTACT_INFO } from "@/constants";

export default function Footer() {
  const phoneDisplay = "+966 50 884 7996";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#1b1b1b] text-white pt-24 pb-8 relative overflow-hidden">
      {/* Paint Brush Effect Divider - Top */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-[#f9f9f9]"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundImage: "radial-gradient(circle at 2px 2px, #b8860b 1px, transparent 0)",
            backgroundSize: "40px 40px" 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="text-2xl font-bold tracking-wide">
              مساكن <span className="text-[#b8860b]">الرفاهية</span>
            </div>
            <p className="text-gray-400 leading-relaxed text-sm">
              نقدم تجربة سكنية استثنائية تجمع بين الفخامة والراحة في أرقى أحياء جدة. خيارك الأول للإقامة المتميزة.
            </p>
            <div className="flex gap-4">
              <a
                href={CONTACT_INFO.tiktokUrl}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b8860b] hover:text-white transition-all duration-300"
                aria-label="TikTok"
              >
                <span className="text-[10px] font-bold tracking-wide">TikTok</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b8860b] hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b8860b] hover:text-white transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#b8860b] hover:text-white transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#b8860b]">روابط سريعة</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-[#b8860b] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link href="#apartments" className="hover:text-[#b8860b] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                  الوحدات والأسعار
                </Link>
              </li>
              <li>
                <Link href="#location" className="hover:text-[#b8860b] transition-colors duration-300 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b8860b]" />
                  مواقعنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#b8860b]">تواصل معنا</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#b8860b] shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phoneLocal}`}
                  className="audiowide-regular hover:text-white transition-colors"
                  dir="ltr"
                >
                  {phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#b8860b] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 text-[#b8860b] shrink-0 flex items-center justify-center">
                  <span className="text-[10px] font-bold">TT</span>
                </div>
                <a
                  href={CONTACT_INFO.tiktokUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TikTok: @shmokhalrfahya
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b8860b] shrink-0" />
                <span>جدة، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Call to Action */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#b8860b]">احجز وحدتك</h3>
            <p className="text-gray-400 text-sm mb-6">
              تواصل معنا مباشرة عبر الواتساب للاستفسار عن العروض والوحدات المتاحة.
            </p>
            <a 
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-[#b8860b] text-white text-sm font-bold rounded-lg hover:bg-[#8b6508] transition-all duration-300"
            >
              تواصل عبر واتساب
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 text-center md:text-right">
            © {new Date().getFullYear()} مساكن الرفاهية. جميع الحقوق محفوظة.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#b8860b] transition-colors duration-300"
          >
            العودة للأعلى
            <div className="w-8 h-8 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-[#b8860b]">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
