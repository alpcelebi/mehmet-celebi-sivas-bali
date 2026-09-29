import React, { useState } from "react";
import { Star, ShieldCheck, Check, Sparkles, Scale } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Card3DTilt } from "./Card3DTilt";
import { PRODUCTS } from "../data/productsData";
import { SITE_CONFIG } from "../data/siteConfig";

export const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "Tüm Ürünler" },
    { id: "Süzme Bal", name: "Süzme Çiçek Balı" },
    { id: "Özel Petek", name: "Karakovan Balı" },
    { id: "Petek Bal", name: "Çerçeve Petek" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? PRODUCTS
    : PRODUCTS.filter((item) => item.category === selectedCategory);

  return (
    <section id="products" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-600/60 text-amber-900 dark:text-amber-300 vibe-badge shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>%100 DOĞAL & KATKISIZ YAYLA MAHSULÜ</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mehmet ÇELEBİ <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 font-serif italic">
              Doğal Sivas Balı Çeşitleri
            </span>
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Sivas yaylalarımızın taze mahsul çiçek ve karakovan balları için güncel sezon fiyatı ve doğrudan sipariş vermek için aşağıdaki butonlara tıklayabilirsiniz.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-3d-honey scale-105"
                    : "glass-3d text-slate-700 dark:text-slate-300 hover:bg-amber-100/60 dark:hover:bg-slate-800"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards 3D Tilt Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => {
            const whatsappUrl = SITE_CONFIG.createWhatsAppLink(product.name);

            return (
              <Card3DTilt key={product.id} maxTilt={9} scale={1.02} className="h-full">
                <div className="h-full flex flex-col justify-between rounded-3xl glass-3d shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-200/60 dark:border-amber-500/25">
                  
                  {/* Product Image Box */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
                      loading="lazy"
                    />
                    
                    {/* Dark subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60" />

                    {/* Tag Badge */}
                    {product.tag && (
                      <div className="absolute top-3 left-3 bg-amber-500 text-white vibe-badge px-3 py-1 rounded-full shadow-md">
                        {product.tag}
                      </div>
                    )}

                    {/* Weight Badge */}
                    <div className="absolute bottom-3 left-3 bg-slate-900/85 backdrop-blur-sm text-white text-xs font-semibold px-2.5 py-1 rounded-lg flex items-center gap-1.5">
                      <Scale className="w-3.5 h-3.5 text-amber-400" />
                      <span>{product.weight}</span>
                    </div>

                    {/* Proline Badge */}
                    <div className="absolute bottom-3 right-3 bg-emerald-700/90 backdrop-blur-sm text-white font-mono text-[11px] font-bold px-2 py-1 rounded-lg">
                      {product.proline}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1.5">
                        <span className="vibe-badge text-amber-600 dark:text-amber-400 font-bold">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1 text-amber-500 font-mono">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span className="font-bold text-slate-800 dark:text-slate-200">
                            {product.rating}
                          </span>
                          <span className="text-slate-400">({product.reviewsCount})</span>
                        </div>
                      </div>

                      {/* Product Title */}
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-1">
                        {product.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Features List */}
                      <div className="mt-3 space-y-1.5">
                        {product.features.slice(0, 3).map((feat, i) => (
                          <div key={i} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                            <Check className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp Action: Fiyat ve Sipariş Bilgisi İçin Tıklayın */}
                    <div className="pt-4 border-t border-amber-100 dark:border-slate-700/80 space-y-2.5">
                      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                        <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                          Güncel Sezon Mahsulü
                        </span>
                        <span className="vibe-badge text-amber-600 dark:text-amber-400">
                          SAF ŞİFA
                        </span>
                      </div>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2.5 px-3 py-3.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] shadow-md hover:shadow-lg transition-all transform active:scale-95 text-center group/btn"
                      >
                        <WhatsAppIcon className="w-5 h-5 fill-white flex-shrink-0 group-hover/btn:scale-110 transition-transform" />
                        <span className="leading-tight">Fiyat ve Sipariş Bilgisi İçin Tıklayın</span>
                      </a>
                    </div>

                  </div>
                </div>
              </Card3DTilt>
            );
          })}
        </div>

        {/* Bottom Assurance Note */}
        <div className="mt-14 max-w-2xl mx-auto p-5 rounded-2xl glass-3d shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-amber-600 dark:text-amber-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Toptan veya Özel Teneke Siparişi mi Vermek İstiyorsunuz?
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Toplu alımlar ve özel analiz raporu talepleri için doğrudan Mehmet Bey'e WhatsApp'tan ulaşabilirsiniz.
              </p>
            </div>
          </div>
          <a
            href={SITE_CONFIG.createWhatsAppLink("Toplu Sipariş / Teneke")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-all shadow-sm hover:scale-105"
          >
            <WhatsAppIcon className="w-4 h-4 fill-white" />
            <span>Fiyat Bilgisi Al</span>
          </a>
        </div>

      </div>
    </section>
  );
};
