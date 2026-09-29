import React from "react";
import { Sparkles } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Card3DTilt } from "./Card3DTilt";
import { SITE_CONFIG } from "../data/siteConfig";

export const HarvestJourney = () => {
  const steps = [
    {
      num: "01",
      tag: "RAKIM & COĞRAFYA",
      title: "2.150 Metre El Değmemiş Sivas Yaylaları",
      desc: "Kovanlarımız sanayiden, tarım zehirlerinden ve şehir kirliliğinden tamamen uzakta; Zara ve İmranlı’nın dondurucu kışından sonra uyanan bereketli dağlarında konuşlandırılır.",
      metric: "2.150m Rakım",
    },
    {
      num: "02",
      tag: "NEKTAR KAYNAĞI",
      title: "Geven, Dağ Kekiği ve 200+ Yabani Çiçek",
      desc: "Balımızın o kadifemsi kıvamı ve boğazı yakmayan aroması, Sivas Geveni ve yabani dağ kekiğinin birleşiminden doğar. Doğanın en saf şifa reçetesi.",
      metric: "920+ Prolin",
    },
    {
      num: "03",
      tag: "DÜRÜST ARICILIK",
      title: "Sıfır Şeker Şerbeti, Sıfır Yapay Katkı",
      desc: "Petek doldurma döneminde arılara asla şeker şerbeti veya mısır şurubu verilmez. Mehmet Çelebi güvencesiyle arının kendi hakkı arıya bırakılır, hasat edilen her damla %100 saf arı emeğidir.",
      metric: "%100 Katkısız",
    },
    {
      num: "04",
      tag: "CANLI ENZİMLER",
      title: "Isıl İşlemsiz Çiğ (Ham) Bal Felsefesi",
      desc: "Bal berrak kalsın diye kaynatılmaz veya endüstriyel filtrelerden geçirilmez. İçerisindeki canlı enzimler, polen taneleri ve vitaminler ilk günkü gibi korunur.",
      metric: "Ham & Çiğ Bal",
    },
    {
      num: "05",
      tag: "GÜVENLİ TESLİMAT",
      title: "Kırılmaya Karşı Garantili Özel Ambalaj",
      desc: "Hava kanallı özel koruma tüpleri ile ambalajlanan cam kavanozlarımız, Türkiye'nin 81 iline doğrudan Mehmet Çelebi elinden güvenle ulaştırılır.",
      metric: "1-3 Gün Kargo",
    },
  ];

  return (
    <section className="py-24 lg:py-32 relative border-t border-amber-200/50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Sticky Story Header & 3D Tilt Visual */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700/60 text-amber-900 dark:text-amber-300 vibe-badge">
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>ÜRETİM VE HASAT SÜRECİ</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.15]">
              Kovandan Sofraya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 font-serif italic">
                Saf Şifanın Yolculuğu
              </span>
            </h2>

            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Mehmet ÇELEBİ’nin 35 yılı aşkın geleneksel tecrübesiyle; arıya ve doğaya saygı duyarak ürettiğimiz hakiki Sivas balının hikayesini keşfedin.
            </p>

            {/* Sticky 3D Tilt Visual Card */}
            <Card3DTilt maxTilt={10} scale={1.03}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-amber-300/80 dark:border-amber-500/40 group">
                <img
                  src="https://images.unsplash.com/photo-1623018697148-8350cf18e64e?auto=format&fit=crop&w=800&q=80"
                  alt="Doğal Bal Peteği"
                  className="w-full h-64 sm:h-72 object-cover group-hover:scale-108 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <span className="vibe-badge text-amber-300">ZARA • SİVAS</span>
                  <span className="vibe-badge bg-white/20 px-2.5 py-1 rounded-full backdrop-blur-sm">
                    %100 SAF NEKTAR
                  </span>
                </div>
              </div>
            </Card3DTilt>

            <div className="pt-2">
              <a
                href={SITE_CONFIG.createWhatsAppLink("Üretim Süreci & Sipariş")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-3d-honey hover:scale-105 active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Mehmet Bey'den Bilgi Alın</span>
              </a>
            </div>

          </div>

          {/* Right Column: Scrolling Cards (Vibebevvy Scroll Stream with 3D Glass) */}
          <div className="lg:col-span-7 space-y-6">
            {steps.map((item, index) => (
              <Card3DTilt key={index} maxTilt={6} scale={1.015}>
                <div className="group relative p-8 sm:p-10 rounded-3xl glass-3d shadow-md hover:shadow-2xl hover:border-amber-400 dark:hover:border-amber-500/60 transition-all duration-300">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-3xl sm:text-4xl font-extrabold text-amber-500/40 dark:text-amber-400/30 group-hover:text-amber-500 transition-colors">
                        {item.num}
                      </span>
                      <span className="vibe-badge text-amber-600 dark:text-amber-400 font-bold">
                        {item.tag}
                      </span>
                    </div>
                    <span className="vibe-badge bg-amber-100/70 dark:bg-slate-700/80 text-amber-800 dark:text-amber-300 px-3 py-1 rounded-xl border border-amber-200/60 dark:border-slate-600">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </Card3DTilt>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
