"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-[#1b1b1b] text-white pt-16 pb-8 relative overflow-hidden">
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
                  الشقق والأسعار
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
                <span className="audiowide-regular" dir="ltr">+966 509996115</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#b8860b] shrink-0" />
                <span>MSC22@OUTLOOK.SA</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#b8860b] shrink-0" />
                <span>جدة، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Newsletter / Call to Action */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-[#b8860b]">احجز إقامتك</h3>
            <p className="text-gray-400 text-sm mb-6">
              تواصل معنا مباشرة عبر الواتساب للحجز والاستفسار عن العروض المتاحة.
            </p>
            <a 
              href="https://wa.me/966509996115" 
              target="_blank"
              className="inline-flex w-full items-center justify-center gap-2 px-6 py-3 bg-[#b8860b] text-white text-sm font-bold rounded-lg hover:bg-[#8b6508] transition-all duration-300"
            >
              تواصل عبر واتساب
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
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
