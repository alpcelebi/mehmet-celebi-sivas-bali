import React from "react";
import { Mountain, Flame, ShieldAlert, Sparkles, Truck, HeartHandshake, CheckCircle } from "lucide-react";

export const Features = () => {
  const features = [
    {
      num: "01",
      badge: "YAYLA FLORASI",
      icon: Mountain,
      title: "2000m+ Yüksek Rakım Florası",
      description: "Sivas'ın yaylalarında sanayi ve tarım ilaçlarından kilometrelerce uzakta yetişen kekik, geven ve yüzlerce endemik dağ çiçeğinin nektarı.",
      color: "from-amber-500 to-amber-600",
    },
    {
      num: "02",
      badge: "SAF & DOĞAL",
      icon: ShieldAlert,
      title: "Sıfır Şeker & Sıfır Katkı",
      description: "Arılarımıza petek doldurma döneminde asla yapay şeker şerbeti verilmez. Her damlası arıların çiçeklerden bizzat topladığı saf baldır.",
      color: "from-emerald-500 to-green-600",
    },
    {
      num: "03",
      badge: "HAM BAL",
      icon: Sparkles,
      title: "Isıl İşlemsiz Çiğ Bal",
      description: "Balımız berraklaşsın diye yüksek ısıya maruz bırakılmaz ve ultra filtre edilmez. Enzimleri, poleni ve şifalı vitaminleri olduğu gibi korunur.",
      color: "from-amber-600 to-yellow-600",
    },
    {
      num: "04",
      badge: "ARACISIZ",
      icon: HeartHandshake,
      title: "Doğrudan Mehmet ÇELEBİ'den",
      description: "Aracı, komisyoncu veya toptancı yok. Mehmet ÇELEBİ arılığından çıkar, özenle kavanozlanır ve sofranıza doğrudan ulaşır.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      num: "05",
      badge: "GARANTİLİ",
      icon: Truck,
      title: "Özel Korumalı Havalı Kargo",
      description: "Özel hava yastıklı darbe emici tüpler ile paketlenir. Kargo aşamasında oluşabilecek her türlü hasar anında Mehmet Bey'in güvencesindedir.",
      color: "from-purple-500 to-violet-600",
    },
    {
      num: "06",
      badge: "ANALİZLİ",
      icon: CheckCircle,
      title: "Güvenilir & Şeffaf Değerler",
      description: "Yüksek prolin değeri ve düşük HMF oranıyla Türk Gıda Kodeksi standartlarının çok üzerinde gerçek yayla balı kalitesi.",
      color: "from-rose-500 to-amber-600",
    },
  ];

  return (
    <section id="features" className="py-24 bg-amber-50/40 dark:bg-slate-900/60 border-y border-amber-200/50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/60 text-amber-900 dark:text-amber-300 vibe-badge">
            GELENEKSEL ARICILIK İLKELERİ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Sahte Ballardan Uzak, <br />
            <span className="text-amber-600 dark:text-amber-400 font-serif italic">
              Gerçek Arıcılık ve Hakiki Lezzet
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Sivas’ın sert kışları ve serin yaylaları, çiçeklerin nektarını en yoğun ve şifalı şekilde saklamasını sağlar. Biz sadece arının ürettiğine saygı duyuyoruz.
          </p>
        </div>

        {/* Feature Cards Grid with Vibebevvy aesthetics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-white dark:bg-slate-800/90 border border-amber-200/50 dark:border-slate-700/70 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="vibe-badge text-slate-400 dark:text-slate-500 font-bold">
                      {item.num} • {item.badge}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
