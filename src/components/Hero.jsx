import React from "react";
import { ShieldCheck, Award, Sparkles, ChevronDown, CheckCircle2 } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Card3DTilt } from "./Card3DTilt";
import { SITE_CONFIG } from "../data/siteConfig";

export const Hero = () => {
  return (
    <section id="hero" className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* 3D Glowing Ambient Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-amber-500/20 via-amber-400/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10 animate-pulse-subtle" />
      <div className="absolute top-10 right-10 w-80 h-80 bg-amber-400/20 dark:bg-amber-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top 3D Hexagon Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-100/90 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-600/70 text-amber-900 dark:text-amber-300 vibe-badge shadow-sm">
              <span className="inline-block w-2.5 h-2.5 rounded-sm bg-amber-500 rotate-45 animate-spin-slow"></span>
              <span>SİVAS 2.000M YÜKSEK RAKIM YAYLA BALI</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Doğanın En Saf Hali: <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 dark:from-amber-400 dark:via-amber-300 dark:to-amber-500 font-serif italic drop-shadow-sm">
                Mehmet ÇELEBİ
              </span>{" "}
              Sivas Balı
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Zara ve İmranlı’nın el değmemiş yaylalarında; kekik, geven ve yüzlerce yabani kır çiçeğinin nektarıyla bezenmiş, <strong className="text-amber-600 dark:text-amber-400 font-semibold">%100 saf ve katkısız şifa kaynağı</strong>.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 max-w-lg mx-auto lg:mx-0 text-left">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>%100 Doğal & Saf</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Şeker & Katkı Yok</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-500 flex-shrink-0" />
                <span>Yüksek Prolin Değeri</span>
              </div>
            </div>

            {/* Action Buttons with 3D feel */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href={SITE_CONFIG.createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-2xl shadow-3d-honey hover:scale-105 active:scale-95 transition-all transform text-center group"
              >
                <WhatsAppIcon className="w-6 h-6 fill-white group-hover:rotate-12 transition-transform" />
                <span>WhatsApp ile Fiyat & Sipariş Bilgisi Al</span>
              </a>

              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-semibold text-slate-800 dark:text-slate-200 glass-3d hover:bg-amber-100/60 dark:hover:bg-slate-800 rounded-2xl shadow-sm hover:shadow transition-all"
              >
                <span>Ürün Çeşitlerini İncele</span>
                <ChevronDown className="w-4 h-4 text-amber-500" />
              </a>
            </div>

            {/* Assurance Note */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-2 text-xs text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Doğrudan Üreticiden • Kırılmaya Karşı %100 Değişim Garantisi</span>
            </div>
          </div>

          {/* Right Column: Hero 3D Tilt Visual Card */}
          <div className="lg:col-span-5 relative">
            <Card3DTilt maxTilt={12} scale={1.03}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Main Visual Container */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-200/60 dark:border-amber-500/30 bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1613548058193-1cd24c1bebcf?auto=format&fit=crop&w=1000&q=80"
                    alt="Mehmet Çelebi Doğal Sivas Balı"
                    className="w-full h-[400px] sm:h-[480px] object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  
                  {/* Subtle Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Bottom Details */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-3d text-slate-900 dark:text-white shadow-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="vibe-badge text-amber-600 dark:text-amber-400 font-bold">
                          DOĞRUDAN ÜRETİCİDEN
                        </div>
                        <div className="text-base font-bold text-slate-900 dark:text-white">
                          Sivas Çiçek & Karakovan Balı
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="vibe-badge text-slate-500 dark:text-slate-400">RAKIM</div>
                        <div className="font-mono text-base font-extrabold text-amber-600 dark:text-amber-400">
                          2.150 m
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating 3D Badge 1: 35 Yıllık Tecrübe */}
                <div className="absolute -top-5 -left-4 sm:-left-6 glass-3d p-3.5 rounded-2xl shadow-xl flex items-center gap-3 animate-float border border-amber-300 dark:border-amber-600/60">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-white font-mono font-black text-sm shadow-md">
                    35+
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      Yıllık Deneyim
                    </p>
                    <p className="vibe-badge text-amber-600 dark:text-amber-400 font-medium">
                      ATA YADİGÂRI
                    </p>
                  </div>
                </div>

                {/* Floating 3D Badge 2: %100 Katkısız */}
                <div className="absolute -bottom-4 -right-3 sm:-right-5 glass-3d p-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-amber-300 dark:border-amber-600/60">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">
                      %100 Ham Bal
                    </p>
                    <p className="vibe-badge text-slate-500 dark:text-slate-400">
                      ISIL İŞLEMSİZ
                    </p>
                  </div>
                </div>

              </div>
            </Card3DTilt>
          </div>

        </div>
      </div>
    </section>
  );
};
