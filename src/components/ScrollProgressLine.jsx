"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressLine() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [path, setPath] = useState("");
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

  useEffect(() => {
    const updateDimensionsAndPath = () => {
      const hero = document.getElementById("hero");
      const apartments = document.getElementById("apartments");
      const location = document.getElementById("location");
      const footer = document.getElementById("footer");

      if (!hero || !apartments || !location || !footer) return;

      const docHeight = document.documentElement.scrollHeight;
      const winWidth = window.innerWidth;
      
      setDimensions({ width: winWidth, height: docHeight });

      const getBottom = (el) => el.offsetTop + el.offsetHeight;
      const heroTop = hero.offsetTop;
      const heroBottom = getBottom(hero);
      const aptsBottom = getBottom(apartments);
      const locBottom = getBottom(location);
      const footBottom = getBottom(footer);

      // Use 2px padding to ensure it's visible but hugs the edge tightly
      const pad = 2;
      const w = winWidth - pad;
      const l = pad;

      // Perimeter Tracing Path Construction
      // This path alternates sides by traversing the bottom boundary of each section
      
      // 1. Hero: Start Top-Left -> Top-Right -> Bottom-Right -> Bottom-Left
      //    (Line travels down the RIGHT side of Hero)
      const heroPath = `M ${l} ${heroTop + pad} L ${w} ${heroTop + pad} L ${w} ${heroBottom} L ${l} ${heroBottom}`;

      // 2. Apartments: From Hero Bottom-Left -> Apartments Bottom-Left -> Apartments Bottom-Right
      //    (Line travels down the LEFT side of Apartments)
      //    Note: We are already at ${l} ${heroBottom} which is approx Top-Left of Apartments
      const aptsPath = `L ${l} ${aptsBottom} L ${w} ${aptsBottom}`;

      // 3. Location: From Apartments Bottom-Right -> Location Bottom-Right -> Location Bottom-Left
      //    (Line travels down the RIGHT side of Location)
      const locPath = `L ${w} ${locBottom} L ${l} ${locBottom}`;

      // 4. Footer: From Location Bottom-Left -> Footer Bottom-Left -> Footer Bottom-Right
      //    (Line travels down the LEFT side of Footer)
      const footPath = `L ${l} ${footBottom} L ${w} ${footBottom}`;

      const d = `${heroPath} ${aptsPath} ${locPath} ${footPath}`;

      setPath(d);
    };

    // Initial calculation
    updateDimensionsAndPath();

    // Listeners
    window.addEventListener("resize", updateDimensionsAndPath);
    const observer = new ResizeObserver(updateDimensionsAndPath);
    observer.observe(document.body);

    // Delay for image loading/layout shifts
    const timer = setTimeout(updateDimensionsAndPath, 1000);

    return () => {
      window.removeEventListener("resize", updateDimensionsAndPath);
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full pointer-events-none z-[9999]" style={{ height: dimensions.height }}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#b8860b" />
            <stop offset="50%" stopColor="#ffd700" />
            <stop offset="100%" stopColor="#b8860b" />
          </linearGradient>
        </defs>
        <motion.path
          d={path}
          fill="none"
          stroke="url(#goldGradient)"
          strokeWidth="6"
          strokeLinecap="square"
          strokeLinejoin="miter"
          filter="url(#glow)"
          style={{ pathLength }}
        />
      </svg>
    </div>
  );
}
