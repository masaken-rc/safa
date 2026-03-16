"use client";

import { motion, animate } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Star, MapPin, Wifi } from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT_INFO } from "@/constants";

function Counter({ value, suffix = "", duration = 1.6 }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    const controls = animate(0, value, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.floor(v)),
    });
    return () => controls.stop();
  }, [value, duration]);
  return <span className="audiowide-regular">{display}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center font-[family-name:var(--font-ibm-plex)]">
      
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
          src="/images/3.png"
          alt="Luxury Hotel Facade"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </motion.div>

      {/* Triangle Overlay - Right Angled, Transparent, Divides Screen */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none bg-white/5"
        style={{ clipPath: "polygon(100% 0, 100% 100%, 0% 100%)" }}
      />

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center lg:text-right text-white pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center lg:grid lg:grid-cols-2 lg:gap-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-white/10 backdrop-blur-md border border-white/20 text-[#b8860b] rounded-full text-sm font-medium tracking-wide lg:justify-self-start lg:px-3 lg:py-1.5"
          >
            <Star className="w-4 h-4 fill-current" />
            <span className="text-white">تجربة سكنية فاخرة</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] mb-4 drop-shadow-[0_15px_35px_rgba(0,0,0,0.6)] lg:justify-self-start">
            وحدات سكنية مفروشة <br />
            <span className="text-[#b8860b]">
              للإيجار الشهري
            </span>
          </h1>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "7rem", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[2px] md:h-[3px] mb-8 rounded-full bg-gradient-to-l from-[#b8860b] via-[#ffd700] to-transparent lg:justify-self-start"
          />

          {/* Description */}
          <p className="text-base md:text-lg text-gray-200 leading-relaxed max-w-xl mb-10 lg:justify-self-start">
            اكتشف معنى الراحة الحقيقية في وحداتنا السكنية المصممة بعناية لتناسب ذوقك الرفيع. مواقع استراتيجية في قلب جدة، وخدمات سكنية متكاملة.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-3 w-full justify-center lg:justify-end">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#apartments"
              className="group flex items-center justify-center gap-3 px-8 py-4 lg:px-4 lg:py-2 bg-[#b8860b] text-white text-base lg:text-xs font-bold rounded-xl shadow-lg hover:bg-[#8b6508] transition-all duration-300"
            >
              <span>استعرض الوحدات</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CONTACT_INFO.whatsappUrl}
              target="_blank"
              className="flex items-center justify-center px-8 py-4 lg:px-4 lg:py-2 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white text-base lg:text-xs font-bold rounded-xl hover:bg-white hover:text-[#1b1b1b] transition-all duration-300"
            >
              تواصل معنا
            </motion.a>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:pt-0 lg:border-0 lg:max-w-xl lg:justify-self-start flex justify-center lg:justify-start gap-10 md:gap-16">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white"><Counter value={50} suffix="+" /></p>
              <p className="text-sm md:text-base text-gray-300 mt-1">وحدة سكنية</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white"><Counter value={24} suffix="/7" /></p>
              <p className="text-sm md:text-base text-gray-300 mt-1">خدمة سكان</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white"><Counter value={100} suffix="%" /></p>
              <p className="text-sm md:text-base text-gray-300 mt-1">رضا العملاء</p>
            </div>
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
            <p className="font-semibold">خدمات سكنية متكاملة</p>
            <p className="text-[11px] text-gray-200/80">إنترنت عالي السرعة ونظافة دورية</p>
          </div>
        </motion.div>
      </div>

      {/* Paint Brush Effect Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[60px] md:h-[100px] fill-gray-50"
          style={{ transform: "scaleY(-1)" }}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>
    </section>
  );
}
