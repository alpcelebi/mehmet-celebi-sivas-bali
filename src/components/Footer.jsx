import React from "react";
import { Phone, MapPin, Heart, ShieldCheck, Truck } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { SITE_CONFIG } from "../data/siteConfig";

export const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Trust Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pb-12 mb-12 border-b border-slate-800/80 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">%100 Doğal & Katkısız</h4>
              <p className="text-xs text-slate-400">Şeker şerbeti yok, saf çiçek nektarı</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Garantili Kargo Paketleme</h4>
              <p className="text-xs text-slate-400">Hava kanallı tüpler ile kırılmaya son</p>
            </div>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center flex-shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">35 Yıllık Mehmet ÇELEBİ Güveni</h4>
              <p className="text-xs text-slate-400">Koşulsuz müşteri memnuniyeti</p>
            </div>
          </div>
        </div>

        {/* Main Footer Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.3l6.5 3.8v7.8L12 19.7l-6.5-3.8V8.1L12 4.3z" />
                  <circle cx="12" cy="12" r="3" fill="#ffffff" />
                </svg>
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  Mehmet <span className="text-amber-500">ÇELEBİ</span>
                </span>
                <p className="text-xs text-amber-400/80 font-medium tracking-wider uppercase">
                  Sivas Balı • Doğal Yayla
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Sivas’ın yüksek rakımlı yaylalarından sofranıza geleneksel yöntemlerle, arının doğasına müdahale etmeden üretilen hakiki çiçek ve karakovan balları.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-all shadow-md"
              >
                <WhatsAppIcon className="w-4 h-4 fill-white" />
                <span>WhatsApp: {SITE_CONFIG.phone}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Hızlı Bağlantılar
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-amber-400 transition-colors">
                  Ana Sayfa
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Ürün Çeşitlerimiz
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  Mehmet ÇELEBİ Kimdir?
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-amber-400 transition-colors">
                  Neden Bizim Balımız?
                </a>
              </li>
              <li>
                <a href="#flora" className="hover:text-amber-400 transition-colors">
                  Sivas Yayla Florası
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  İletişim & Sipariş
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              İletişim & Adres
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.productionLocation}, {SITE_CONFIG.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0" />
                <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-white font-medium hover:text-amber-400">
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-5 h-5 fill-[#25D366] flex-shrink-0" />
                <span>WhatsApp Sipariş Hattı: 0544 119 40 66</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>
            © {new Date().getFullYear()} Mehmet ÇELEBİ Sivas Balı. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Sivas Yaylalarından Sofranıza Doğal Şifa</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
