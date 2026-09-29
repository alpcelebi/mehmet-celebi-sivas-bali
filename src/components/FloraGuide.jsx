import React from "react";
import { Flower2, ShieldCheck, Microscope } from "lucide-react";
import { Card3DTilt } from "./Card3DTilt";

export const FloraGuide = () => {
  const plants = [
    {
      name: "Sivas Geveni (Astragalus)",
      desc: "Balımızın ana gövdesini ve hafif tatlı, kadifemsi dokusunu oluşturan Sivas dağlarının kral nektar kaynağıdır.",
      benefit: "Yüksek bağışıklık desteği"
    },
    {
      name: "Yabani Dağ Kekiği",
      desc: "Yüksek kayalıklarda yetişen yabani kekik, balımıza karakteristik ferahlatıcı kokusunu ve antiseptik gücünü katar.",
      benefit: "Solunum yolu ferahlığı"
    },
    {
      name: "Çoban Çökerten & Dağ Çiçekleri",
      desc: "Temmuz ve Ağustos aylarında açan 200'ü aşkın kır çiçeği, balımızın çok katmanlı zengin lezzet profilini oluşturur.",
      benefit: "Doğal mineral ve vitamin deposu"
    },
    {
      name: "Yabani Korunga & Fiğ",
      desc: "Yaylaların saf nektar deposu; balın açık amber rengini ve yüksek polen çeşitliliğini besler.",
      benefit: "Enzim zenginliği"
    }
  ];

  return (
    <section id="flora" className="py-24 border-t border-amber-200/50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700/60 text-amber-900 dark:text-amber-300 vibe-badge">
            <Flower2 className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>SİVAS YAYLASININ BİNBİR ÇİÇEĞİ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Neden Sivas Balı Farklıdır?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Sivas, Türkiye'nin en yüksek ortalama rakımına sahip illerinden biridir. Nem oranı düşüktür, sanayi kirliliği yoktur ve gece-gündüz sıcaklık farkı çiçeklerin nektar özünü en kaliteli seviyeye ulaştırır.
          </p>
        </div>

        {/* Plant Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plants.map((p, idx) => (
            <Card3DTilt key={idx} maxTilt={8} scale={1.02} className="h-full">
              <div className="h-full p-6 rounded-3xl glass-3d hover:border-amber-400 transition-all flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
                    <Flower2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {p.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <span className="inline-block text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-md">
                  ✓ {p.benefit}
                </span>
              </div>
            </Card3DTilt>
          ))}
        </div>

        {/* Quality Banner & Truth About Crystallization with 3D Glare */}
        <Card3DTilt maxTilt={5} scale={1.01}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 text-white shadow-3d-honey relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold tracking-wide">
                <Microscope className="w-4 h-4" />
                <span>BİLİNÇLİ TÜKETİCİ REHBERİ</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Gerçek Bal Kristalleşir mi?
              </h3>
              <p className="text-sm sm:text-base text-amber-50 leading-relaxed font-normal">
                Evet! Isıl işlem görmemiş, enzim ve poleni filtre edilmemiş ham çiçek balları serin ortamda doğal olarak kremleşir ya da kristalleşir. Bu durum, balın katkısız ve canlı olduğunun en net biyolojik kanıtıdır. 
              </p>
              <p className="text-xs sm:text-sm text-amber-100 italic">
                * Sanayi balları kristalleşmesin diye 70-80°C'de kaynatılır ve bütün şifalı enzimlerini kaybeder. Biz Mehmet ÇELEBİ olarak balımızın doğallığına dokunmuyoruz.
              </p>
            </div>

            <div className="space-y-3 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <h4 className="text-lg font-bold flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-200" />
                <span>Mehmet ÇELEBİ Kalite Değerleri</span>
              </h4>
              <ul className="space-y-2 text-sm text-amber-50">
                <li className="flex items-center justify-between pb-1.5 border-b border-white/10">
                  <span>Prolin Değeri:</span>
                  <span className="font-bold text-white font-mono">920+ mg/kg (Standart: 300)</span>
                </li>
                <li className="flex items-center justify-between pb-1.5 border-b border-white/10">
                  <span>HMF Değeri:</span>
                  <span className="font-bold text-white">Düşük & Isıl İşlemsiz</span>
                </li>
                <li className="flex items-center justify-between pb-1.5 border-b border-white/10">
                  <span>Şeker / Nişasta:</span>
                  <span className="font-bold text-emerald-300 font-mono">%0 (Sıfır Katkı)</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Üretim Rakımı:</span>
                  <span className="font-bold text-white font-mono">2.000 - 2.200 m</span>
                </li>
              </ul>
            </div>
          </div>
        </Card3DTilt>

      </div>
    </section>
  );
};
