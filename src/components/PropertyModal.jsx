import React, { useState } from 'react';
import { X, MapPin, CheckCircle2, Calendar, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export default function PropertyModal({ residence, currency, onClose, onBookViewing }) {
  if (!residence) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const formatPrice = () => {
    if (currency === 'USD') {
      return `$${(residence.priceUSD / 1000000).toFixed(2)} Juta USD`;
    }
    if (currency === 'IDR') {
      return `Rp ${(residence.priceIDR / 1000000000).toFixed(1)} Miliar`;
    }
    return `AED ${(residence.priceAED / 1000000).toFixed(1)} Juta`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#161616] text-[#E3E1DC] border border-white/10 rounded-2xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121212]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-[#374336] text-[#E3E1DC] font-semibold">
              {residence.categoryLabel}
            </span>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <MapPin size={12} className="text-[#C9A86A]" />
              <span>{residence.subtitle}</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup Modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Main Gallery Display */}
          <div className="space-y-3">
            <div className="w-full h-72 sm:h-96 rounded-xl overflow-hidden bg-black relative">
              <img
                src={residence.gallery[activeImageIndex] || residence.coverImage}
                alt={residence.title}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded text-xs text-white">
                Foto {activeImageIndex + 1} dari {residence.gallery.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {residence.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#C9A86A] scale-105'
                      : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Title & Price Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="font-display text-xs text-[#C9A86A] uppercase tracking-widest">
                Unit Eksklusif #{residence.number}
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white mt-1">
                {residence.title}
              </h2>
              <p className="text-sm text-gray-400 mt-2 italic">"{residence.tagline}"</p>
            </div>

            <div className="bg-[#1f1f1f] p-4 rounded-xl border border-white/5 sm:text-right">
              <div className="text-[10px] uppercase tracking-widest text-gray-400">Harga Estimasi</div>
              <div className="text-2xl sm:text-3xl font-bold text-[#C9A86A] font-display mt-0.5">
                {formatPrice()}
              </div>
              <div className="text-[10px] text-gray-400 mt-1 flex items-center gap-1 sm:justify-end">
                <ShieldCheck size={12} className="text-[#C9A86A]" />
                <span>100% Hak Milik Permanen (Freehold)</span>
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-bold mb-4">
              Spesifikasi Teknis
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#1c1c1c] p-4 rounded-lg border border-white/5">
                <span className="text-gray-400 block mb-1">Luas Tanah</span>
                <span className="font-bold text-white text-sm">{residence.specs.luasTanah}</span>
              </div>
              <div className="bg-[#1c1c1c] p-4 rounded-lg border border-white/5">
                <span className="text-gray-400 block mb-1">Luas Bangunan</span>
                <span className="font-bold text-white text-sm">{residence.specs.luasBangunan}</span>
              </div>
              <div className="bg-[#1c1c1c] p-4 rounded-lg border border-white/5">
                <span className="text-gray-400 block mb-1">Kamar Tidur</span>
                <span className="font-bold text-white text-sm">{residence.specs.kamarTidur}</span>
              </div>
              <div className="bg-[#1c1c1c] p-4 rounded-lg border border-white/5">
                <span className="text-gray-400 block mb-1">Kamar Mandi</span>
                <span className="font-bold text-white text-sm">{residence.specs.kamarMandi}</span>
              </div>
              <div className="bg-[#1c1c1c] p-4 rounded-lg border border-white/5">
                <span className="text-gray-400 block mb-1">Kapasitas Garasi</span>
                <span className="font-bold text-white text-sm">{residence.specs.parkir}</span>
              </div>
              <div className="bg-[#1c1c1c] p-4 rounded-lg border border-white/5">
                <span className="text-gray-400 block mb-1">Status Proyek</span>
                <span className="font-bold text-[#C9A86A] text-sm">{residence.specs.status}</span>
              </div>
            </div>
          </div>

          {/* Description & Amenities */}
          <div className="grid sm:grid-cols-12 gap-8 pt-4">
            <div className="sm:col-span-6 space-y-3">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-bold">
                Deskripsi Arsitektur
              </h4>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {residence.description}
              </p>
            </div>

            <div className="sm:col-span-6 space-y-3">
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#C9A86A] font-bold">
                Fasilitas & Keunggulan
              </h4>
              <ul className="space-y-2.5">
                {residence.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs text-gray-300">
                    <CheckCircle2 size={15} className="text-[#C9A86A] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#121212] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => alert(`Brosur rahasia ${residence.title} sedang disiapkan untuk email Anda.`)}
            className="w-full sm:w-auto text-xs text-gray-400 hover:text-white flex items-center justify-center gap-2 py-2.5 px-4 rounded border border-white/10 hover:border-white/30 transition-colors"
          >
            <FileText size={14} />
            <span>Unduh Brosur Privat (PDF)</span>
          </button>

          <button
            onClick={() => onBookViewing(residence)}
            className="w-full sm:w-auto btn-gold px-6 py-3 text-xs flex items-center justify-center gap-2 cursor-pointer rounded-sm"
          >
            <Calendar size={14} />
            <span>Jadwalkan Kunjungan Pribadi (Viewing)</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
