import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE_CONFIG } from "../data/siteConfig";

export const FloatingWhatsApp = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 8000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Tooltip Message */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 pr-4 rounded-2xl bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 shadow-2xl border border-amber-200 dark:border-slate-700 text-xs font-semibold animate-bounce">
          <span>👋 Mehmet Bey'e fiyat ve sipariş sorun</span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 ml-1"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={SITE_CONFIG.createWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile Fiyat ve Sipariş Bilgisi Al"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-xl hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Glow Ping Effect */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-40 group-hover:opacity-75 animate-ping -z-10" />

        <WhatsAppIcon className="w-8 h-8 fill-white" />

        <span className="sr-only">WhatsApp Sipariş Hattı</span>
      </a>
    </div>
  );
};
