import React from "react";
import { Star, CheckCircle } from "lucide-react";
import { Card3DTilt } from "./Card3DTilt";
import { TESTIMONIALS } from "../data/productsData";

export const Testimonials = () => {
  return (
    <section className="py-24 border-t border-amber-200/50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700/60 text-amber-900 dark:text-amber-300 vibe-badge">
            GERÇEK MÜŞTERİ YORUMLARI
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sofrasına Sağlık Katanlar Anlatıyor
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300">
            Türkiye'nin dört bir yanından Mehmet ÇELEBİ balını tercih eden binlerce müşterimizin samimi görüşleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <Card3DTilt key={idx} maxTilt={8} scale={1.02} className="h-full">
              <div className="h-full p-8 rounded-3xl glass-3d shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                      <CheckCircle className="w-3 h-3" />
                      Doğrulanmış Alıcı
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-amber-100 dark:border-slate-700/60 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {t.city}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="vibe-badge text-amber-600 dark:text-amber-400 font-medium">
                      {t.product}
                    </span>
                  </div>
                </div>
              </div>
            </Card3DTilt>
          ))}
        </div>

      </div>
    </section>
  );
};
