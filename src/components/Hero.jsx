"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Star, MapPin, Wifi } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      
      {/* Background Image with Animation */}
      <motion.div 
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          repeatType: "reverse", 
          ease: "linear" 
        }}
        className="absolute inset-0 w-full h-full z-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Dark Overlay */}
        <Image
          src="/images/1.png"
          alt="Luxury Hotel Facade"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Triangle Overlay - Right Angled, Transparent, Divides Screen */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none bg-white/10"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center text-white pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 text-[#b8860b] rounded-full text-sm font-medium tracking-wide"
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-white">تجربة سكنية فاخرة</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] mb-4 drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            شقق مفروشة <br />
            <span className="text-[#b8860b]">
              بمستوى الرفاهية
            </span>
          </h1>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "7rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[2px] md:h-[3px] mb-8 rounded-full bg-gradient-to-l from-[#b8860b] via-[#ffd700] to-transparent"
          />

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl mb-10">
            اكتشف معنى الراحة الحقيقية في شققنا المصممة بعناية لتناسب ذوقك الرفيع. مواقع استراتيجية في قلب جدة، وخدمات فندقية متكاملة.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#apartments"
              className="group flex items-center justify-center gap-3 px-8 py-4 bg-[#b8860b] text-white text-base font-bold rounded-xl shadow-lg hover:bg-[#8b6508] transition-all duration-300"
            >
              <span>استعرض الشقق</span>
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/966509996115"
              target="_blank"
              className="flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-base font-bold rounded-xl hover:bg-white hover:text-[#1b1b1b] transition-all duration-300"
            >
              تواصل معنا
            </motion.a>
          </div>

          {/* Statistics - Simplified for Hero Background */}
          <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 md:gap-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white audiowide-regular">+50</p>
              <p className="text-sm md:text-base text-gray-300 mt-1">شقة فاخرة</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white audiowide-regular">24/7</p>
              <p className="text-sm md:text-base text-gray-300 mt-1">خدمة عملاء</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white audiowide-regular">100%</p>
              <p className="text-sm md:text-base text-gray-300 mt-1">تقييم ممتاز</p>
            </div>
          </div>

        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 absolute top-24 right-10 text-sm"
        >
          <div className="w-8 h-8 rounded-full bg-[#b8860b] text-white flex items-center justify-center">
            <MapPin className="w-4 h-4" />
          </div>
          <div className="text-right">
            <p className="font-semibold">مواقع مميزة في جدة</p>
            <p className="text-[11px] text-gray-200/80">الصفا – النزهة قريباً</p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="hidden md:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 absolute bottom-24 left-10 text-sm"
        >
          <div className="w-8 h-8 rounded-full bg-white/10 text-[#b8860b] flex items-center justify-center">
            <Wifi className="w-4 h-4" />
          </div>
          <div className="text-right">
            <p className="font-semibold">خدمات فندقية متكاملة</p>
            <p className="text-[11px] text-gray-200/80">إنترنت عالي السرعة وتنظيف دوري</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
