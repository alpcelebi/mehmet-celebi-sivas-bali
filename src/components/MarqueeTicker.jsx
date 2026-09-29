import React from "react";
import { Sparkles } from "lucide-react";

export const MarqueeTicker = ({ reverse = false, className = "" }) => {
  const items = [
    "%100 SAF SİVAS YAYLA BALI",
    "ZARA & İMRANLI YAYLALARI (2000M+)",
    "SIFIR ŞEKER & SIFIR KATKI",
    "35 YILLIK MEHMET ÇELEBİ GÜVENCESİ",
    "YÜKSEK PROLİN & ENZİM DEĞERİ",
    "ISIL İŞLEMSİZ DOĞAL HAM BAL",
    "DOĞRUDAN ÜRETİCİDEN ARACISIZ",
    "HAKİKİ KARAKOVAN & SÜZME ÇİÇEK BALI",
  ];

  const repeated = [...items, ...items, ...items];

  return (
    <div
      className={`py-3.5 sm:py-4 overflow-hidden select-none border-y border-amber-300/40 dark:border-amber-600/30 bg-amber-400/10 dark:bg-amber-500/5 backdrop-blur-sm ${className}`}
    >
      <div
        className={`vibe-marquee-track flex items-center gap-8 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {repeated.map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 flex-shrink-0">
            <span className="font-mono text-xs sm:text-sm uppercase tracking-widest font-bold text-amber-900 dark:text-amber-300">
              {text}
            </span>
            <span className="w-2 h-2 rounded-full bg-amber-500 flex-shrink-0"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
