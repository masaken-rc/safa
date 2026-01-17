"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Navigation, Clock, ShieldCheck } from "lucide-react";

// Locations Data
const locationsData = {
  safa: {
    name: "فرع الصفا",
    address: "4362 سهل بن رافع الخزرجى، حي الصفا، جدة 23453",
    description: "يتميز موقعنا في حي الصفا بقربه من أهم المعالم الحيوية والخدمات في جدة. سهولة الوصول إلى الطرق الرئيسية والمطار والمراكز التجارية.",
    mapUrl: "https://maps.google.com/maps?q=4362+Sahl+Ibn+Rafi+Al+Khazraji+As+Safa+Jeddah&t=&z=15&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/bDXhAUNsJfCztoe58",
    access: "15 دقيقة من المطار • 10 دقائق من وسط المدينة",
    features: "منطقة سكنية متكاملة الخدمات توفر لك الهدوء والخصوصية"
  },
  nuzha: {
    name: "فرع النزهة",
    address: "حي النزهة، جدة",
    description: "موقع استراتيجي في حي النزهة الراقي، قريب من العرب مول ومطار الملك عبد العزيز. مثالي لمن يبحث عن الفخامة والقرب من الخدمات الترفيهية.",
    mapUrl: "https://maps.google.com/maps?q=Al+Nuzhah+District+Jeddah&t=&z=14&ie=UTF8&iwloc=&output=embed",
    googleMapsLink: "https://maps.app.goo.gl/1EfZfCwzU68wA2be6",
    access: "5 دقائق من العرب مول • 10 دقائق من المطار",
    features: "حي حديث وراقي، قريب من المطاعم والكافيهات العالمية"
  }
};

export default function Location() {
  const [activeLocation, setActiveLocation] = useState("safa");

  return (
    <section id="location" className="py-24 bg-[#f9f9f9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 mb-6 border border-[#c5a059] text-[#c5a059] rounded-full text-sm font-medium tracking-wide">
            الموقع
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-[#1b1b1b]">
            مواقعنا <span className="font-bold text-[#c5a059]">في جدة</span>
          </h2>
        </div>

        {/* Location Tabs */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-white p-1 rounded-full shadow-md border border-gray-100">
            <button
              onClick={() => setActiveLocation("safa")}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeLocation === "safa" ? "text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeLocation === "safa" && (
                <motion.div
                  layoutId="activeLocationTab"
                  className="absolute inset-0 bg-[#c5a059] rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> حي الصفا
              </span>
            </button>
            <button
              onClick={() => setActiveLocation("nuzha")}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeLocation === "nuzha" ? "text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeLocation === "nuzha" && (
                <motion.div
                  layoutId="activeLocationTab"
                  className="absolute inset-0 bg-[#c5a059] rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> حي النزهة
              </span>
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text Content */}
            <div>
              <h3 className="text-3xl font-light text-[#1b1b1b] mb-6">
                {locationsData[activeLocation].name}
              </h3>

              <p className="text-lg text-[#555] leading-relaxed mb-10">
                {locationsData[activeLocation].description}
              </p>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#b8860b] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b1b1b]">العنوان</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {locationsData[activeLocation].address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#b8860b] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b1b1b]">سهولة الوصول</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {locationsData[activeLocation].access}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#b8860b] shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1b1b1b]">مميزات الموقع</h4>
                    <p className="text-sm text-gray-500 mt-1">
                      {locationsData[activeLocation].features}
                    </p>
                  </div>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={locationsData[activeLocation].googleMapsLink}
                target="_blank"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1b1b1b] text-white text-base font-medium tracking-wide hover:bg-[#b8860b] transition-colors duration-300 rounded-lg shadow-xl shadow-[#1b1b1b]/10"
              >
                <Navigation className="w-5 h-5" />
                <span>فتح في خرائط جوجل</span>
              </motion.a>
            </div>

            {/* Map Visual */}
            <motion.div
              className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src={locationsData[activeLocation].mapUrl}
                className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              >
              </iframe>
              
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/50 hidden sm:block">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#1b1b1b]">مساكن الرفاهية - {locationsData[activeLocation].name}</p>
                    <p className="text-xs text-gray-500">نحن بانتظار زيارتك</p>
                  </div>
                  <div className="w-10 h-10 bg-[#b8860b] rounded-full flex items-center justify-center text-white">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
