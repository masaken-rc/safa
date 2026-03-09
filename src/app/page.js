"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Apartments from "@/components/Apartments";
import Location from "@/components/Location";
import DecorativeBelt from "@/components/DecorativeBelt";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeTab, setActiveTab] = useState("safa");

  return (
    <main className="relative">
      <Header />
      <Hero />
      <Apartments activeTab={activeTab} setActiveTab={setActiveTab} />
      <DecorativeBelt />
      <Location activeLocation={activeTab} setActiveLocation={setActiveTab} />
      <Footer />
    </main>
  );
}
