"use client";
import { motion } from "framer-motion";

export default function DecorativeBelt() {
  return (
    <div className="w-full h-24 bg-transparent relative overflow-hidden flex items-center justify-center">
      
      {/* Background Pattern - Fine Geometric Lines */}
      <motion.div 
        className="absolute inset-0 w-full h-full opacity-60"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M20 0 L40 20 L20 40 L0 20 Z' stroke='%23b8860b' stroke-width='0.5' /%3E%3Cpath d='M20 5 L35 20 L20 35 L5 20 Z' stroke='%23b8860b' stroke-width='0.2' opacity='0.5' /%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '30px 30px'
        }}
        animate={{ backgroundPositionX: ["0px", "30px"] }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity
        }}
      />

      {/* Center Highlight Line */}
      <div className="absolute w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#b8860b] to-transparent opacity-40 top-1/2 -translate-y-1/2"></div>
      
    </div>
  );
}
