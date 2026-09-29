import React, { useState, useEffect } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { useTheme } from "../context/ThemeContext";
import { SITE_CONFIG } from "../data/siteConfig";

export const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Ana Sayfa", href: "#hero" },
    { name: "Ürünler", href: "#products" },
    { name: "Neden Biz?", href: "#features" },
    { name: "Hakkımızda", href: "#about" },
    { name: "Sivas Florası", href: "#flora" },
    { name: "İletişim", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3 border-b border-amber-100 dark:border-slate-800"
          : "bg-white/80 dark:bg-slate-950/80 backdrop-blur-sm py-4 border-b border-amber-50 dark:border-slate-800/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-transform duration-200 active:scale-95"
            aria-label="Mehmet ÇELEBİ Sivas Balı Ana Sayfa"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-honey text-slate-950 group-hover:rotate-6 transition-transform">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 2.3l6.5 3.8v7.8L12 19.7l-6.5-3.8V8.1L12 4.3z" />
                <circle cx="12" cy="12" r="3" fill="#ffffff" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-white leading-none">
                Mehmet <span className="text-amber-500 font-extrabold">ÇELEBİ</span>
              </span>
              <span className="text-xs sm:text-xs font-semibold tracking-widest text-amber-600 dark:text-amber-400 uppercase mt-0.5">
                Sivas Balı • Doğal Yayla
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Dark/Light Mode + WhatsApp Call to Action */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-xl text-slate-600 dark:text-slate-300 bg-amber-50 dark:bg-slate-800/80 hover:bg-amber-100 dark:hover:bg-slate-700 transition-all border border-amber-200/50 dark:border-slate-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Temayı Değiştir (Açık/Koyu)"
              title={theme === "dark" ? "Açık Mod'a Geç" : "Koyu Mod'a Geç"}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-amber-400 animate-spin-once" />
              ) : (
                <Moon className="w-5 h-5 text-slate-700" />
              )}
            </button>

            {/* Quick WhatsApp Action (Desktop) */}
            <a
              href={SITE_CONFIG.createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-95"
            >
              <WhatsAppIcon className="w-4 h-4 fill-white" />
              <span>Sipariş Hattı</span>
            </a>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Menüyü Aç/Kapat"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 pb-4 border-t border-amber-100 dark:border-slate-800 animate-fadeIn">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-amber-50 dark:hover:bg-slate-800 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href={SITE_CONFIG.createWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-4 py-3 text-sm font-bold text-white bg-[#25D366] hover:bg-[#20ba5a] rounded-xl shadow-md"
                >
                  <WhatsAppIcon className="w-5 h-5 fill-white" />
                  <span>WhatsApp ile Fiyat & Sipariş</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
