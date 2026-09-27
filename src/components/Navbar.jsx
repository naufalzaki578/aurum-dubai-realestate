import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Globe, ChevronDown, Sparkles } from 'lucide-react';

export default function Navbar({ currency, setCurrency, onOpenVip }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currencies = [
    { code: 'AED', label: 'AED (Dirham UEA)', symbol: 'AED' },
    { code: 'USD', label: 'USD (Dolar AS)', symbol: '$' },
    { code: 'IDR', label: 'IDR (Rupiah)', symbol: 'Rp' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-nav py-4 px-6 md:px-12 text-white shadow-2xl'
            : 'py-6 px-6 md:px-12 text-white mix-blend-difference'
        }`}
      >
        <div className="max-w-[1600px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <span className="font-display font-bold text-2xl tracking-[0.25em] text-[#E3E1DC] group-hover:text-[#C9A86A] transition-colors">
              AURUM
            </span>
            <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.3em] text-[#C9A86A] border-l border-white/20 pl-3">
              Dubai Real Estate
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10 text-[11px] uppercase tracking-[0.25em] font-medium text-white/90">
            <a href="#koleksi" className="hover:text-[#C9A86A] transition-colors">
              Koleksi
            </a>
            <a href="#filosofi" className="hover:text-[#C9A86A] transition-colors">
              Filosofi
            </a>
            <a href="#keunggulan" className="hover:text-[#C9A86A] transition-colors">
              Investasi
            </a>
            <a href="#kantor-privat" className="hover:text-[#C9A86A] transition-colors">
              Kantor Privat
            </a>
          </div>

          {/* Actions & VIP CTA */}
          <div className="hidden sm:flex items-center gap-6">
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className="flex items-center gap-1.5 text-xs tracking-wider border border-white/20 px-3 py-1.5 rounded-full hover:border-[#C9A86A] transition-colors bg-black/20"
                title="Pilih Mata Uang"
              >
                <Globe size={13} className="text-[#C9A86A]" />
                <span className="font-semibold">{currency}</span>
                <ChevronDown size={12} className="opacity-60" />
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#181818] border border-white/10 rounded-lg shadow-2xl py-2 z-50 text-xs">
                  {currencies.map((c) => (
                    <button
                      key={c.code}
                      onClick={() => {
                        setCurrency(c.code);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-white/10 transition-colors flex items-center justify-between ${
                        currency === c.code ? 'text-[#C9A86A] font-bold' : 'text-gray-300'
                      }`}
                    >
                      <span>{c.label}</span>
                      <span className="text-[10px] opacity-60">{c.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* VIP Access Button */}
            <button
              onClick={onOpenVip}
              className="btn-gold px-5 py-2 text-[10px] rounded-none flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <Sparkles size={12} />
              <span>Akses VIP</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-[#C9A86A] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#121212] pt-28 px-8 flex flex-col justify-between pb-12 lg:hidden">
          <div className="space-y-6 text-lg font-display uppercase tracking-widest text-[#E3E1DC]">
            <a
              href="#koleksi"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#C9A86A] py-2 border-b border-white/10"
            >
              Koleksi Residensial
            </a>
            <a
              href="#filosofi"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#C9A86A] py-2 border-b border-white/10"
            >
              Filosofi & Visi
            </a>
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#C9A86A] py-2 border-b border-white/10"
            >
              Keunggulan Investasi
            </a>
            <a
              href="#kantor-privat"
              onClick={() => setMobileMenuOpen(false)}
              className="block hover:text-[#C9A86A] py-2 border-b border-white/10"
            >
              Kantor Privat
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex gap-2">
              {['AED', 'USD', 'IDR'].map((c) => (
                <button
                  key={c}
                  onClick={() => setCurrency(c)}
                  className={`flex-1 py-2 text-xs rounded border transition-colors ${
                    currency === c
                      ? 'border-[#C9A86A] text-[#C9A86A] bg-[#C9A86A]/10 font-bold'
                      : 'border-white/20 text-gray-400'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenVip();
              }}
              className="w-full btn-gold py-3 text-center text-xs block cursor-pointer"
            >
              Konsultasi Akses VIP
            </button>
          </div>
        </div>
      )}
    </>
  );
}
