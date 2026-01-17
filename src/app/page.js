import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Apartments from "@/components/Apartments";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import ScrollProgressLine from "@/components/ScrollProgressLine";

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgressLine />
      <Header />
      <Hero />
      <Apartments />
      <Location />
      <Footer />
    </main>
  );
}
