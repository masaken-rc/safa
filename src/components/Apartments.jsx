"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, BedDouble, Bath, Coffee, Utensils, ArrowUpRight, Check, Armchair, Info, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Romanesco } from "next/font/google";
import { CONTACT_INFO } from "@/constants";

// JALL Images
const jallImages = Array.from({ length: 11 }, (_, i) => `/images/JALL/${i + 1}.jpeg`);

// Helper to distribute images
const getImages = (startIndex, count) => {
  return Array.from({ length: count }, (_, i) => jallImages[(startIndex + i) % jallImages.length]);
};

// ✅ Improved WhatsApp message (stronger + contextual)
const buildWhatsAppUrl = (apt, location) => {
  const message = `السلام عليكم، أنا مهتم بـ ${apt.title} في ${location}، ممكن التفاصيل والأسعار الحالية؟`;
  return `${CONTACT_INFO.whatsappUrl}?text=${encodeURIComponent(message)}`;
};

// Apartment Data (unchanged structure + enhancements)
const apartmentsData = {
  safa: [
    {
      id: "s1",
      title: "استوديو فاخر",
      desc: "تصميم عصري يجمع بين الخصوصية والراحة المثالية للأفراد",
      badge: "جاهز للسكن",
      features: [
        { icon: BedDouble, text: "غرفة نوم" },
        { icon: Coffee, text: "ركن كوفي" },
        { icon: Armchair, text: "صالة" },
        { icon: Bath, text: "حمام مستقل" },
      ],
      price: { monthly: "3,500 - 3,800", yearly: "36,000 - 45,600", isRange: true },
      images: getImages(0, 4),
      isPopular: false,
    },
    {
      id: "s2",
      title: "وحدة بغرفة وصالة",
      desc: "مساحة رحبة وإضاءة طبيعية، مثالية لبداية حياة هادئة 👨‍👩\u200d👧",
      badge: "الأكثر طلباً",
      features: [
        { icon: BedDouble, text: "غرفة نوم" },
        { icon: Armchair, text: "صالة" },
        { icon: Utensils, text: "مطبخ متكامل" },
        { icon: Bath, text: "حمام مستقل" },
      ],
      price: { monthly: "3,300 - 3,500", yearly: "36,000 - 42,000", isRange: true },
      images: getImages(4, 4),
      isPopular: true,
    },
    {
      id: "s3",
      title: "وحدة غرفتين وصالة",
      desc: "الخيار الأمثل للعائلات الباحثة عن الرفاهية والمساحة",
      badge: "مساحة أكبر 👨\u200d👩\u200d👧",
      features: [
        { icon: BedDouble, text: "غرفتين نوم" },
        { icon: Armchair, text: "صالة" },
        { icon: Utensils, text: "مطبخ متكامل" },
        { icon: Bath, text: "حمام مستقل" },
      ],
      price: { monthly: 4500, yearly: 54000, isRange: false },
      images: getImages(8, 4),
      isPopular: false,
    },
  ],
  nuzha: [
    {
      id: "n1",
      title: "وحدة بغرفة وصالة",
      desc: "سعر مناسب وتجهيزات سكنية",
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
      title: "وحدة بغرفة وصالة",
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
      title: "وحدة غرفتين وصالة",
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
    }, 5000);
    return () => clearInterval(timer);
  }, [images]);

  const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="h-52 md:h-64 lg:h-56 overflow-hidden relative bg-gray-100 group/slider">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-10 pointer-events-none" />
      
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index]}
            alt={title}
            fill
            priority={index === 0}
            className="object-cover transition-transform duration-[5000ms] group-hover/slider:scale-110"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button 
        onClick={(e) => { e.preventDefault(); prevSlide(); }}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white md:opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white/40"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button 
        onClick={(e) => { e.preventDefault(); nextSlide(); }}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white md:opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-white/40"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* ✅ Dots Indicator */}
      <div className="absolute bottom-3 left-0 right-0 z-20 overflow-x-auto no-scrollbar"> 
        <div className="flex justify-center gap-2 px-4 min-w-max"> 
          {images.map((_, i) => ( 
            <button 
              key={i} 
              onClick={(e) => { e.preventDefault(); setIndex(i); }} 
              className={`transition-all duration-300 rounded-full ${ 
                i === index 
                  ? "w-6 bg-white" 
                  : "w-2 bg-white/50 hover:bg-white/80" 
              } h-2 shrink-0`} 
            /> 
          ))} 
        </div> 
      </div>
    </div>
  );
}

export default function Apartments({ activeTab, setActiveTab }) {

  return (
    <section id="apartments" className="py-20 md:py-24 relative font-[family-name:var(--font-ibm-plex)] bg-white overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-[#b8860b]/5 rounded-full blur-[100px]" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-[#b8860b]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#b8860b]/10 text-[#b8860b] text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            <span>وحدات سكنية فاخرة</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 tracking-tight"
          >
            اختر <span className="text-[#b8860b]">وجهتك المثالية</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            نقدم لك خيارات متنوعة من الشقق  المفروشة بتصاميم عصرية في أرقى أحياء جدة
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400"
          >
            <div className="flex -space-x-2 rtl:space-x-reverse">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                  <Image src={`/images/JALL/${i}.jpeg`} alt="user" width={32} height={32} className="object-cover" />
                </div>
              ))}
            </div>
            <span className="font-medium text-[#1a1a1a] mr-2">+50 مستأجر سعيد</span>
          </motion.div>
        </div>

        {/* Tabs - Enhanced with LayoutId */}
        <div className="flex justify-center mb-16">
          <div className="relative inline-flex bg-gray-100/80 backdrop-blur-sm p-1.5 rounded-2xl border border-gray-200/50 shadow-inner">
            <button 
              onClick={() => setActiveTab("safa")} 
              className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10 ${
                activeTab === "safa" ? "text-white" : "text-gray-500 hover:text-[#1a1a1a]"
              }`}
            >
              {activeTab === "safa" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#b8860b] rounded-xl shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">حي الصفا</span>
            </button>

            <button 
              onClick={() => setActiveTab("nuzha")} 
              className={`relative px-8 py-3 rounded-xl text-sm font-bold transition-all duration-300 z-10 ${
                activeTab === "nuzha" ? "text-white" : "text-gray-500 hover:text-[#1a1a1a]"
              }`}
            >
              {activeTab === "nuzha" && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#b8860b] rounded-xl shadow-lg"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                حي النزهة
                <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded uppercase tracking-wider">قريباً</span>
              </span>
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {apartmentsData[activeTab].map((apt, index) => {
              const isComingSoonTab = activeTab === "nuzha";

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  key={apt.id} 
                  className="group relative bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-[#b8860b]/10 transition-all duration-500 overflow-hidden flex flex-col"
                >
                  {/* Badge */}
                  {apt.badge && (
                    <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
                      <div className="bg-black/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg border border-white/10 flex items-center gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        {apt.badge}
                      </div>
                      {apt.isPopular && (
                        <div className="bg-[#b8860b] text-white text-[11px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                          <Star className="w-3 h-3 fill-current" />
                          الأكثر طلباً
                        </div>
                      )}
                    </div>
                  )}

                  <ImageSlider images={apt.images} title={apt.title} />

                  <div className="p-5 md:p-7 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-3 md:mb-4">
                      <h3 className="font-bold text-lg md:text-xl text-[#1a1a1a] group-hover:text-[#b8860b] transition-colors">
                        {apt.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[#b8860b]">
                        <Star className="w-3.5 h-3.5 md:w-4 h-4 fill-current" />
                        <span className="text-xs md:text-sm font-bold">4.9</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-500 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed line-clamp-2">
                      {apt.desc}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-2 gap-y-2.5 md:gap-y-4 gap-x-2 mb-5 md:mb-8 bg-gray-50/50 rounded-2xl p-3 md:p-4 border border-gray-100">
                      {apt.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 md:gap-2.5 text-gray-600">
                          <div className="p-1 md:p-1.5 rounded-lg bg-white shadow-sm border border-gray-100">
                            <f.icon className="w-3 md:w-3.5 h-3 md:h-3.5 text-[#b8860b]" />
                          </div>
                          <span className="text-[10px] md:text-[11px] font-medium">{f.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Pricing */}
                    <div className="mt-auto">
                      <div className="flex items-baseline justify-between mb-4 md:mb-6">
                        <div className="flex flex-col">
                          <span className="text-[10px] md:text-xs text-gray-400 mb-0.5 md:mb-1">يبدأ من</span>
                          <div className="flex items-baseline gap-1">
                            <span className="text-xl md:text-2xl font-black text-[#1a1a1a]">
                              {typeof apt.price.monthly === 'number'
                                ? apt.price.monthly.toLocaleString()
                                : apt.price.monthly.split('-')[0].trim()}
                            </span>
                            <span className="text-[10px] md:text-xs font-bold text-gray-400">ريال / شهري</span>
                          </div>
                        </div>
                        {!isComingSoonTab && (
                          <div className="px-2 py-0.5 md:px-2.5 md:py-1 rounded-md bg-red-50 text-red-500 text-[9px] md:text-[10px] font-bold border border-red-100 animate-pulse">
                            وحدات محدودة
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      {!isComingSoonTab ? (
                        <motion.a
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          href={buildWhatsAppUrl(apt, activeTab === "safa" ? "حي الصفا" : "حي النزهة")}
                          target="_blank"
                          className="w-full flex items-center justify-center gap-2 bg-[#1a1a1a] text-white py-3 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-[#b8860b] transition-all duration-300 shadow-xl shadow-black/5 hover:shadow-[#b8860b]/20 group/btn"
                        >
                          احجز الآن عبر واتساب
                          <ArrowUpRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        </motion.a>
                      ) : (
                        <div className="w-full bg-gray-100 text-gray-400 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-center text-sm md:text-base border border-dashed border-gray-300">
                          سيتم الافتتاح قريباً
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ✅ Enhanced Coming Soon / CTA Section */}
        {activeTab === "nuzha" && (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-20 relative overflow-hidden rounded-[2.5rem] bg-[#1a1a1a] p-8 md:p-16 text-center group"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#b8860b]/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#b8860b]/10 rounded-full blur-[80px]" />
            
            <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[#b8860b] text-sm font-bold mb-6">
                <Info className="w-4 h-4" />
                قريباً في حي النزهة
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                كن أول من يحصل على <span className="text-[#b8860b]">أفضل العروض</span> عند الافتتاح
              </h3>
              <p className="text-gray-400 mb-10 text-lg">
                سجل اهتمامك الآن وسنقوم بإخطارك فور توفر الوحدات في حي النزهة بأفضل الأسعار التنافسية.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CONTACT_INFO.whatsappUrl}
                target="_blank"
                className="inline-flex items-center gap-3 bg-[#b8860b] text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-[#a67a0a] transition-all shadow-2xl shadow-[#b8860b]/20"
              >
                سجل اهتمامك الآن
                <ArrowUpRight className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
}
