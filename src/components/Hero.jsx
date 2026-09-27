import React from 'react';
import { ArrowDown, ArrowRight, Compass, ShieldCheck, TrendingUp } from 'lucide-react';

export default function Hero({ onOpenVip }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121212]">
      {/* Background Image with Darkening Vignette */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/482e7b6a-168c-4d0d-b35d-0e2ff4014577_3840w.webp"
          alt="Dubai Ultra Luxury Real Estate"
          className="w-full h-full object-cover brightness-[0.65] contrast-[1.1] scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/60"></div>
        <div className="absolute inset-0 bg-radial-vignette opacity-70"></div>
      </div>

      {/* Main Content with mix-blend effect */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-white pt-24 pb-28">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-black/40 backdrop-blur-md text-[11px] uppercase tracking-[0.3em] text-[#C9A86A] mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A86A] animate-ping"></span>
          <span>Pengembangan Ultra-Mewah Dubai</span>
        </div>

        {/* Hero Title */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] font-bold tracking-tight leading-[0.95] uppercase mb-8">
          <span className="block text-[#E3E1DC]">VISI GURUN</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E3E1DC] via-[#C9A86A] to-[#E3E1DC]">
            DESERT VISION
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 font-light leading-relaxed mb-12">
          Mahakarya arsitektur yang mendefinisikan ulang kemewahan di Uni Emirat Arab. Menyatukan kemurnian desain modern dengan prestise kepemilikan aset kelas dunia.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#koleksi"
            className="w-full sm:w-auto px-8 py-4 btn-gold text-xs flex items-center justify-center gap-3 cursor-pointer shadow-2xl"
          >
            <span>JELAJAHI KOLEKSI</span>
            <ArrowRight size={14} />
          </a>

          <button
            onClick={onOpenVip}
            className="w-full sm:w-auto px-8 py-4 btn-outline-gold text-xs flex items-center justify-center gap-2 bg-black/30 backdrop-blur-md cursor-pointer uppercase tracking-widest"
          >
            <span>KONSULTASI VIP DESK</span>
          </button>
        </div>

        {/* Highlight Stats Badges */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-20 pt-10 border-t border-white/10 max-w-4xl mx-auto">
          <div className="text-left md:text-center">
            <div className="flex items-center gap-2 text-[#C9A86A] text-xs font-semibold uppercase tracking-wider mb-1 md:justify-center">
              <TrendingUp size={14} />
              <span>Portofolio Aktif</span>
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">AED 4.2B+</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Nilai aset kelolaan 2025</div>
          </div>

          <div className="text-left md:text-center">
            <div className="flex items-center gap-2 text-[#C9A86A] text-xs font-semibold uppercase tracking-wider mb-1 md:justify-center">
              <ShieldCheck size={14} />
              <span>100% Hak Milik</span>
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">FREEHOLD</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Permanen untuk investor global</div>
          </div>

          <div className="text-left md:text-center col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-[#C9A86A] text-xs font-semibold uppercase tracking-wider mb-1 md:justify-center">
              <Compass size={14} />
              <span>Pajak Properti</span>
            </div>
            <div className="font-display text-2xl sm:text-3xl font-bold text-white">0% TAX</div>
            <div className="text-[11px] text-gray-400 mt-0.5">Bebas pajak dividen & warisan</div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#filosofi"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
      >
        <span className="text-[9px] uppercase tracking-[0.25em]">Gulir ke Bawah</span>
        <ArrowDown size={14} className="animate-bounce" />
      </a>
    </section>
  );
}
