import React, { useState } from "react";
import { Phone, MapPin, Send, Clock, HeartHandshake } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Card3DTilt } from "./Card3DTilt";
import { SITE_CONFIG } from "../data/siteConfig";

export const Contact = () => {
  const [customName, setCustomName] = useState("");
  const [customProduct, setCustomProduct] = useState("Sivas Yayla Çiçek Balı (850g)");
  const [customNote, setCustomNote] = useState("");

  const handleCustomWhatsAppSubmit = (e) => {
    e.preventDefault();
    let text = `Merhaba Mehmet Bey, ben ${customName || "bir ziyaretçi"}.`;
    if (customProduct) {
      text += ` Sitenizden "${customProduct}" hakkında güncel fiyat ve sipariş bilgisi almak istiyorum.`;
    }
    if (customNote) {
      text += ` Ek Notum / Şehirim: ${customNote}`;
    }
    const targetUrl = `https://wa.me/${SITE_CONFIG.phoneRaw}?text=${encodeURIComponent(text)}`;
    window.open(targetUrl, "_blank");
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative border-t border-amber-200/50 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-700/60 text-amber-900 dark:text-amber-300 vibe-badge">
            <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>DOĞRUDAN İLETİŞİM & SİPARİŞ HATTI</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mehmet ÇELEBİ İle <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 font-serif italic">
              Birebir İletişime Geçin
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Sorularınız, güncel bal fiyatları, toptan talepleriniz veya hemen sipariş vermek için bizi dilediğiniz zaman arayabilir veya WhatsApp üzerinden mesaj atabilirsiniz.
          </p>
        </div>

        {/* 2 Columns: Contact Info & Interactive WhatsApp Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Direct Details with 3D Tilt */}
          <div className="lg:col-span-5">
            <Card3DTilt maxTilt={7} scale={1.02} className="h-full">
              <div className="h-full flex flex-col justify-between space-y-6 p-8 sm:p-10 rounded-3xl glass-3d shadow-xl">
                
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    İletişim Bilgileri
                  </h3>
                  
                  <div className="space-y-5">
                    {/* Phone & WhatsApp */}
                    <a
                      href={`https://wa.me/${SITE_CONFIG.phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 p-4 rounded-2xl glass-3d hover:border-amber-400 transition-all group"
                    >
                      <div className="p-3 rounded-xl bg-[#25D366] text-white group-hover:scale-110 transition-transform">
                        <WhatsAppIcon className="w-6 h-6 fill-white" />
                      </div>
                      <div>
                        <span className="vibe-badge text-slate-400">
                          WHATSAPP SİPARİŞ HATTI
                        </span>
                        <p className="text-lg font-bold text-slate-900 dark:text-white font-mono">
                          {SITE_CONFIG.phone}
                        </p>
                        <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                          Haftanın 7 günü 08:00 - 22:00
                        </span>
                      </div>
                    </a>

                    {/* Production Address */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl glass-3d">
                      <div className="p-3 rounded-xl bg-amber-500 text-white">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="vibe-badge text-slate-400">
                          ARILIK & YAYLA BÖLGESİ
                        </span>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          {SITE_CONFIG.productionLocation}
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {SITE_CONFIG.address}
                        </p>
                      </div>
                    </div>

                    {/* Fast Delivery info */}
                    <div className="flex items-start gap-4 p-4 rounded-2xl glass-3d">
                      <div className="p-3 rounded-xl bg-amber-500 text-white">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="vibe-badge text-slate-400">
                          KARGO SÜRESİ
                        </span>
                        <p className="text-sm font-bold text-slate-900 dark:text-white">
                          Aynı Gün / Ertesi Gün Çıkış
                        </p>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Tüm Türkiye'ye 1-3 iş gününde adrese teslim.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Button */}
                <div className="pt-6 border-t border-amber-200/40 dark:border-slate-800">
                  <a
                    href={SITE_CONFIG.createWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-3d-honey hover:scale-105 active:scale-95 transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5 fill-white" />
                    <span>Doğrudan WhatsApp'ta Bilgi Alın</span>
                  </a>
                </div>

              </div>
            </Card3DTilt>
          </div>

          {/* Right Column: Custom Message / Pre-fill WhatsApp Generator */}
          <div className="lg:col-span-7">
            <Card3DTilt maxTilt={6} scale={1.015} className="h-full">
              <div className="h-full p-8 sm:p-10 rounded-3xl glass-3d shadow-xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-amber-600 dark:text-amber-400 vibe-badge mb-2">
                    <HeartHandshake className="w-4 h-4" />
                    <span>HIZLI SİPARİŞ & BİLGİ TALEBİ</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                    Mehmet Bey'den Fiyat & Sipariş Bilgisi Alın
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 mb-6">
                    İstediğiniz ürünü ve notunuzu yazarak tek tıkla doğrudan Mehmet Çelebi'nin resmi WhatsApp hattına bağlanabilirsiniz.
                  </p>

                  <form onSubmit={handleCustomWhatsAppSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-mono">
                        Adınız Soyadınız
                      </label>
                      <input
                        type="text"
                        value={customName}
                        onChange={(e) => setCustomName(e.target.value)}
                        placeholder="Örn: Ahmet Yılmaz"
                        className="w-full px-4 py-3.5 rounded-2xl border border-amber-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-mono">
                        İlgilendiğiniz Bal Çeşidi
                      </label>
                      <select
                        value={customProduct}
                        onChange={(e) => setCustomProduct(e.target.value)}
                        className="w-full px-4 py-3.5 rounded-2xl border border-amber-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/80 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                      >
                        <option value="Sivas Yayla Çiçek Balı (850g)">Sivas Yayla Çiçek Balı (850g Cam Kavanoz)</option>
                        <option value="Sivas Yayla Çiçek Balı (1500g Aile Boyu)">Sivas Yayla Çiçek Balı (1500g Aile Boyu)</option>
                        <option value="Hakiki Sivas Karakovan Balı">Hakiki Sivas Karakovan Balı</option>
                        <option value="Sivas Doğal Çerçeve Petek Balı">Sivas Doğal Çerçeve Petek Balı</option>
                        <option value="Toplu Alım / Teneke Bal">Toplu Sipariş / Teneke Bal Talebi</option>
                        <option value="Genel Bilgi">Genel Bilgi Almak İstiyorum</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5 uppercase font-mono">
                        Ek Notunuz veya Teslimat Şehriniz (İsteğe Bağlı)
                      </label>
                      <textarea
                        rows={3}
                        value={customNote}
                        onChange={(e) => setCustomNote(e.target.value)}
                        placeholder="Örn: Ankara Çankaya'ya kargo ile 2 adet 850g çiçek balı fiyatı ve sipariş bilgisi istiyorum..."
                        className="w-full px-4 py-3.5 rounded-2xl border border-amber-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/80 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-2xl text-base font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-3d-honey hover:scale-102 active:scale-98 transition-all"
                    >
                      <WhatsAppIcon className="w-5 h-5 fill-white" />
                      <span>Fiyat ve Sipariş İçin WhatsApp Mesajı Gönder</span>
                    </button>
                  </form>
                </div>

                <div className="mt-6 pt-4 border-t border-amber-100 dark:border-slate-800 text-center text-xs text-slate-400">
                  🔒 Mesajınız doğrudan Mehmet Çelebi'nin 0544 119 40 66 numaralı resmi WhatsApp hattına iletilecektir.
                </div>

              </div>
            </Card3DTilt>
          </div>

        </div>

      </div>
    </section>
  );
};
