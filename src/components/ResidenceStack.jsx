import React, { useState } from 'react';
import { RESIDENCES } from '../data/residences';
import { ArrowUpRight, MapPin, Maximize2, BedDouble, Bath, Car } from 'lucide-react';

export default function ResidenceStack({ currency, onSelectResidence }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Semua Koleksi' },
    { id: 'beachfront', label: 'Tepi Pantai (Palm)' },
    { id: 'downtown', label: 'Pusat Kota (Sky Penthouse)' },
    { id: 'mountain', label: 'Puncak Pegunungan (Hatta)' },
  ];

  const filtered = activeCategory === 'all'
    ? RESIDENCES
    : RESIDENCES.filter((r) => r.category === activeCategory);

  const formatPrice = (item) => {
    if (currency === 'USD') {
      return `$${(item.priceUSD / 1000000).toFixed(2)} Juta USD`;
    }
    if (currency === 'IDR') {
      return `Rp ${(item.priceIDR / 1000000000).toFixed(1)} Miliar`;
    }
    return `AED ${(item.priceAED / 1000000).toFixed(1)} Juta`;
  };

  return (
    <section id="koleksi" className="stack-section px-4 sm:px-8">
      {/* Section Header */}
      <div className="text-center mb-16 max-w-4xl mx-auto pt-10">
        <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86A] font-semibold block mb-3">
          Destinasi Ikonik
        </span>
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#E3E1DC]">
          PORTOFOLIO
        </h2>
        <p className="mt-4 text-sm sm:text-base text-gray-400 font-light max-w-xl mx-auto">
          Koleksi mahakarya residensial pribadi terbatas dengan tingkat privasi dan kemewahan tertinggi di Dubai.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#C9A86A] text-[#121212] font-bold shadow-lg scale-105'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Container */}
      <div className="max-w-[1400px] mx-auto space-y-12">
        {filtered.map((item, index) => (
          <div key={item.id} className="card-item">
            <div className="card-inner group rounded-xl">
              <div className="grid lg:grid-cols-12 h-full">
                {/* Left Content Column */}
                <div className="lg:col-span-6 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#181818] z-10 border-b lg:border-b-0 lg:border-r border-white/10">
                  <div>
                    {/* Number & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-display text-5xl sm:text-6xl font-bold text-[#E3E1DC] opacity-25">
                        {item.number}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded bg-[#374336] text-[#E3E1DC] font-semibold">
                        {item.categoryLabel}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-white tracking-tight group-hover:text-[#C9A86A] transition-colors">
                      {item.title}
                    </h3>

                    <div className="flex items-center gap-1.5 text-xs text-gray-400 mt-2 tracking-wider">
                      <MapPin size={13} className="text-[#C9A86A]" />
                      <span>{item.subtitle}</span>
                    </div>

                    <p className="text-sm text-[#C9A86A] font-medium mt-4 italic">
                      "{item.tagline}"
                    </p>

                    <p className="text-xs sm:text-sm text-gray-400 font-light mt-4 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Quick Specs Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-6 pt-6 border-t border-white/10 text-xs text-gray-300">
                      <div className="flex items-center gap-2">
                        <Maximize2 size={14} className="text-[#C9A86A]" />
                        <span>{item.specs.luasBangunan.split(' ')[0]} m²</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BedDouble size={14} className="text-[#C9A86A]" />
                        <span>{item.specs.kamarTidur.split(' ')[0]} Kamar</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Car size={14} className="text-[#C9A86A]" />
                        <span>{item.specs.parkir.split(' ')[0]} Parkir</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-gray-500">Mulai Dari</div>
                      <div className="text-xl sm:text-2xl font-bold text-white font-display">
                        {formatPrice(item)}
                      </div>
                    </div>

                    <button
                      onClick={() => onSelectResidence(item)}
                      className="btn-gold px-6 py-3 text-xs flex items-center justify-center gap-2 cursor-pointer rounded-sm"
                    >
                      <span>Lihat Spesifikasi Unit</span>
                      <ArrowUpRight size={14} />
                    </button>
                  </div>
                </div>

                {/* Right Image Column */}
                <div className="lg:col-span-6 relative overflow-hidden bg-black min-h-[350px] lg:min-h-full">
                  <img
                    src={item.coverImage}
                    alt={item.title}
                    className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent lg:hidden"></div>
                  
                  {/* Floating Action Button */}
                  <div className="absolute top-6 right-6">
                    <button
                      onClick={() => onSelectResidence(item)}
                      className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white hover:bg-[#C9A86A] hover:text-black transition-colors"
                      title="Lihat Galeri Foto"
                    >
                      <ArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
