"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, BedDouble, Bath, Coffee, Utensils, ArrowUpRight, Check, Armchair } from "lucide-react";
import { Romanesco } from "next/font/google";

// JALL Images
const jallImages = [
  "aaron-huber-G7sE2S4Lab4-unsplash.jpg",
  "cat-han-VgyN_CWXQVM-unsplash.jpg",
  "chastity-cortijo-6TY_WrJTwSI-unsplash.jpg",
  "lisha-riabinina-qifUgNsrWmU-unsplash.jpg",
  "lotus-design-n-print-oCw5_evbWyI-unsplash.jpg",
  "mark-champs-Id2IIl1jOB0-unsplash.jpg",
  "naomi-hebert-MP0bgaS_d1c-unsplash.jpg",
  "point3d-commercial-imaging-ltd-5BV56SdvLmo-unsplash.jpg",
  "point3d-commercial-imaging-ltd-oxeCZrodz78-unsplash.jpg",
  "reisetopia-aI6Su7Mu9Ro-unsplash.jpg",

].map(img => `/images/JALL/${img}`);

// Helper to distribute images
const getImages = (startIndex, count) => {
  return Array.from({ length: count }, (_, i) => jallImages[(startIndex + i) % jallImages.length]);
};

// Apartment Data
const apartmentsData = {
  safa: [
    {
      id: "s1",
      title: "استوديو فاخر",
      desc: "مثالي للأفراد، تصميم عصري ومريح",
      features: [
        { icon: BedDouble, text: "غرفة نوم" },
        { icon: Coffee, text: "ركن كوفي" },
         { icon: Armchair, text: "صالة" },
        { icon: Bath, text: "حمام مستقل" },
      ],
      price: { monthly: 2000, yearly: 22000 },
      images: getImages(0, 4),
      isPopular: false,
    },
    {
      id: "s2",
      title: "شقة بغرفة وصالة",
      desc: "مساحة إضافية للمعيشة والراحة",
      features: [
        { icon: BedDouble, text: "غرفة نوم" },
         { icon: Armchair, text: "صالة" },
        { icon: Utensils, text: "مطبخ متكامل" },
        { icon: Bath, text: "حمام مستقل" },
      ],
      price: { monthly: 3000, yearly: 30000 },
      images: getImages(4, 4),
      isPopular: true,
    },
    {
      id: "s3",
      title: "شقة غرفتين وصالة",
      desc: "للعائلات الصغيرة، رفاهية متكاملة",
      features: [
        { icon: BedDouble, text: "غرفتين نوم" },
         { icon: Armchair, text: "صالة" },
        { icon: Utensils, text: "مطبخ متكامل" },
        { icon: Bath, text: "حمام مستقل" },
      ],
      price: { monthly: 4000, yearly: 40000 },
      images: getImages(8, 4),
      isPopular: false,
    },
  ],
  nuzha: [
    {
      id: "n1",
      title: "غرفة وصالة",
      desc: "سعر مناسب وتجهيزات فندقية",
      features: [
        { icon: BedDouble, text: "غرفة نوم" },
         { icon: Armchair, text: "صالة" },
        { icon: Coffee, text: "ركن كوفي" },
        { icon: Bath, text: "حمام فاخر" },
      ],
      price: { monthly: 0, yearly: 0 },
      images: getImages(2, 4),
      isPopular: false,
    },
    {
      id: "n2",
      title: "سويت بغرفة وصالة",
      desc: "تصميم مفتوح وإضاءة طبيعية",
      features: [
        { icon: BedDouble, text: "غرفة نوم" },
         { icon: Armchair, text: "صالة" },
        { icon: Utensils, text: "مطبخ" },
        { icon: Bath, text: "حمام واسع" },
      ],
      price: { monthly: 0, yearly: 0 },
      images: getImages(6, 4),
      isPopular: true,
    },
    {
      id: "n3",
      title: "غرفتين وصالة",
      desc: "أقصى درجات الفخامة والخصوصية",
      features: [
        { icon: BedDouble, text: "غرفتين " },
         { icon: BedDouble, text: "صالة" },
        { icon: Utensils, text: "مطبخ مجهز" },
        { icon: Bath, text: "حمامين" },
      ],
      price: { monthly: 0, yearly: 0 },
      images: getImages(10, 4),
      isPopular: false,
    },
  ],
};

function ImageSlider({ images, title }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="h-64 overflow-hidden relative bg-gray-100">
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10 pointer-events-none" />
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-[3000ms]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function Apartments() {
  const [activeTab, setActiveTab] = useState("safa");

  return (
    <section id="apartments" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-light text-[#1b1b1b] mb-4"
          >
            اختر <span className="font-bold text-[#b8860b]">وجهتك المثالية</span>
          </motion.h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            تصفح خياراتنا المتنوعة في أرقى أحياء جدة، حيث تلتقي الفخامة بالموقع الاستراتيجي
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("safa")}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "safa" ? "text-white" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {activeTab === "safa" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#b8860b] rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> حي الصفا
              </span>
            </button>
            <button
              onClick={() => setActiveTab("nuzha")}
              className={`relative px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "nuzha" ? "text-white" : "text-gray-400 hover:text-gray-700"
              }`}
            >
              {activeTab === "nuzha" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#b8860b] rounded-full shadow-lg"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <MapPin className="w-4 h-4" /> حي النزهة
                <span className="text-[11px] px-2 py-0.5 rounded-full bg-gray-200 text-gray-600">
                  قريباً
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Content Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {apartmentsData[activeTab].map((apt) => {
              const isComingSoonTab = activeTab === "nuzha";

              return (
                <div 
                  key={apt.id} 
                  className={`group relative bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#b8860b]/10 transition-all duration-500 flex flex-col ${
                    apt.isPopular && !isComingSoonTab ? "ring-2 ring-[#b8860b]" : ""
                  }`}
                >
                  {apt.isPopular && !isComingSoonTab && (
                    <div className="absolute top-4 right-4 z-20 bg-[#b8860b] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      الأكثر طلباً
                    </div>
                  )}

                  {isComingSoonTab ? (
                    <>
                      <div className="opacity-0 pointer-events-none">
                        <ImageSlider images={apt.images} title={apt.title} />

                        <div className="p-6 flex flex-col flex-grow">
                          <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">{apt.title}</h3>
                          <p className="text-sm text-gray-500 mb-6">{apt.desc}</p>

                          <div className="space-y-3 mb-8">
                            {apt.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                                <div className="w-8 h-8 rounded-full bg-[#f9f9f9] flex items-center justify-center text-[#b8860b]">
                                  <feature.icon className="w-4 h-4" />
                                </div>
                                {feature.text}
                              </div>
                            ))}
                          </div>

                          <div className="mt-auto pt-6 border-t border-gray-100">
                            <div className="flex flex-col gap-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-600 font-medium">التكلفة الشهرية المكافئة:</span>
                          <div className="flex items-center gap-1">
                            <span className="text-xl font-bold text-[#1b1b1b] audiowide-regular">
                              {apt.price.monthly.toLocaleString("en-US")}
                            </span>
                            <span className="text-xs text-gray-500">ريال</span>
                          </div>
                              </div>
                              
                              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                                <span className="text-sm text-gray-600 font-medium">قيمة العقد السنوي:</span>
                          <div className="flex items-center gap-1">
                            <span className="text-lg font-bold text-[#b8860b] audiowide-regular">
                              {(apt.price.monthly * 12).toLocaleString("en-US")}
                            </span>
                            <span className="text-xs text-gray-500">ريال</span>
                          </div>
                              </div>

                              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                                <span className="text-sm text-gray-600 font-medium">مدة العقد:</span>
                                <span className="text-sm font-bold text-[#1b1b1b]">12 شهر</span>
                              </div>
                            </div>

                            <div className="w-full flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-sm">
                              <span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center bg-white/80">
                        <span className="text-xl md:text-2xl font-bold text-gray-500 tracking-wide">
                          قريباً
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <ImageSlider images={apt.images} title={apt.title} />

                      <div className="p-6 flex flex-col flex-grow">
                        <h3 className="text-xl font-bold text-[#1b1b1b] mb-2">{apt.title}</h3>
                        <p className="text-sm text-gray-500 mb-6">{apt.desc}</p>

                        <div className="space-y-3 mb-8">
                          {apt.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 text-gray-700 text-sm">
                              <div className="w-8 h-8 rounded-full bg-[#f9f9f9] flex items-center justify-center text-[#b8860b]">
                                <feature.icon className="w-4 h-4" />
                              </div>
                              {feature.text}
                            </div>
                          ))}
                        </div>

                        <div className="mt-auto pt-6 border-t border-gray-100">
                          <div className="flex flex-col gap-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600 font-medium">التكلفة الشهرية المكافئة:</span>
                              <div className="flex items-center gap-1">
                                <span className="text-xl font-bold text-[#1b1b1b] audiowide-regular">
                                  {apt.price.monthly.toLocaleString()}
                                </span>
                                <span className="text-xs text-gray-500">ريال</span>
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                              <span className="text-sm text-gray-600 font-medium">قيمة العقد السنوي:</span>
                              <div className="flex items-center gap-1">
                                <span className="text-lg font-bold text-[#b8860b] audiowide-regular">
                                  {(apt.price.monthly * 12).toLocaleString()}
                                </span>
                                <span className="text-xs text-gray-500">ريال</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                              <span className="text-sm text-gray-600 font-medium">مدة العقد:</span>
                              <span className="text-sm font-bold text-[#1b1b1b]">12 شهر</span>
                            </div>
                          </div>

                          <a 
                            href={`https://wa.me/966509996115?text=أنا مهتم بـ ${apt.title}`} 
                            target="_blank"
                            className="w-full flex items-center justify-center gap-2 py-3 bg-[#1b1b1b] text-white rounded-lg hover:bg-[#b8860b] transition-colors duration-300 font-medium text-sm"
                          >
                            <span>احجز الآن</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
