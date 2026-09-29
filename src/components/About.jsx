import React from "react";
import { Heart, MapPin, Quote } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Card3DTilt } from "./Card3DTilt";
import { SITE_CONFIG } from "../data/siteConfig";

export const About = () => {
  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Story with 3D Tilt */}
          <div className="lg:col-span-5 relative">
            <Card3DTilt maxTilt={11} scale={1.03}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Image Frame */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-300/70 dark:border-amber-500/30 bg-slate-900 group">
                  <img
                    src="https://images.unsplash.com/photo-1641822888635-97d60ecd9acd?auto=format&fit=crop&w=900&q=80"
                    alt="Mehmet Çelebi Doğal Arıcılık Sivas Kovan Başında"
                    className="w-full h-[480px] object-cover group-hover:scale-108 transition-transform duration-700"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-transparent pointer-events-none" />

                  {/* Location Tag */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-3d text-slate-800 dark:text-slate-100 flex items-center gap-3 shadow-lg">
                    <div className="p-2.5 rounded-xl bg-amber-500 text-white flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="vibe-badge text-amber-600 dark:text-amber-400 font-bold">
                        ARILIK BÖLGESİ
                      </p>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">
                        Sivas Zara & İmranlı Yaylaları (2100m)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative Experience Badge with Space Mono */}
                <div className="absolute -top-6 -right-4 sm:-right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-white p-5 rounded-3xl shadow-honey flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-3xl font-black leading-none">35+</span>
                  <span className="vibe-badge mt-1 opacity-90">
                    YIL TECRÜBE
                  </span>
                </div>

              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Mehmet Çelebi's Narrative */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700/60 text-amber-900 dark:text-amber-300 vibe-badge">
              <Heart className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>GELENEKSEL & DÜRÜST ARICILIK</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              "Kendi Soframıza Koymadığımız Balı, <br />
              <span className="text-amber-600 dark:text-amber-400 font-serif italic">
                Asla Kavanoza Koymayız."
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              <p>
                Ben <strong>Mehmet ÇELEBİ</strong>. Sivas’ın o sert rüzgarlı ama bir o kadar bereketli yaylalarında, babamdan devraldığım arıcılık mesleğini 35 yılı aşkın süredir ilk günkü aşkla ve doğrulukla sürdürüyorum.
              </p>
              <p>
                Bizim arılarımız fabrikalardan, egzoz dumanından ve ilaçlı tarım arazilerinden uzakta; Sivas’ın 2.000 metreyi aşan dağlarında geven, kekik, dağ nanesi ve yüzlerce yabani dağ çiçeğinin saf nektarıyla beslenir.
              </p>
              <p>
                Bizim için bal sadece bir tatlı değil, bir <strong className="text-amber-700 dark:text-amber-400 font-semibold">şifa vesilesidir</strong>. Bu yüzden peteğe şeker şerbeti döküp miktar artırmayı kendimize haram sayarız.
              </p>
            </div>

            {/* Quote Card with 3D Glass */}
            <div className="p-6 sm:p-7 rounded-3xl glass-3d border-l-4 border-amber-500 shadow-sm relative">
              <Quote className="w-8 h-8 text-amber-400/40 absolute top-4 right-4" />
              <p className="text-sm sm:text-base italic text-slate-700 dark:text-slate-200">
                "Balda hile yapan hem insanlığa hem arının kutsal emeğine ihanet eder. Sivas balımızın her kaşığında çocukluğumuzun yayla kokusu ve anamizin duası vardır."
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    Mehmet ÇELEBİ
                  </h4>
                  <p className="vibe-badge text-amber-600 dark:text-amber-400">
                    SİVASLI ARICI & ÜRETİCİ
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <a
                href={SITE_CONFIG.createWhatsAppLink("Mehmet Çelebi ile İletişim")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-3d-honey hover:scale-105 active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5 fill-white" />
                <span>Mehmet Bey ile WhatsApp'tan Konuşun</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
