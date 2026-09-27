import React from 'react';
import { INVESTMENT_BENEFITS } from '../data/residences';
import { ShieldCheck, Award, Briefcase, ChevronRight, Lock } from 'lucide-react';

export default function PrivateOffice({ onOpenVip }) {
  return (
    <section id="kantor-privat" className="py-28 px-6 md:px-16 bg-[#161616] text-[#E3E1DC] relative z-20 border-t border-white/5">
      <div className="max-w-[1600px] mx-auto">
        {/* Investment Highlights Header */}
        <div id="keunggulan" className="mb-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-[#C9A86A] font-semibold block mb-2">
                Keistimewaan Strategis
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
                MENGAPA DUBAI?
              </h2>
            </div>
            <p className="text-gray-400 text-sm max-w-md font-light">
              Pusat finansial dan surga investasi properti teraman di dunia dengan perlindungan hukum dan stabilitas nilai mata uang yang dipatok ke USD.
            </p>
          </div>

          {/* 4 Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INVESTMENT_BENEFITS.map((b) => (
              <div
                key={b.number}
                className="bg-[#1c1c1c] p-8 rounded-xl border border-white/5 hover:border-[#C9A86A]/40 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <span className="font-display text-4xl font-bold text-[#C9A86A] opacity-40 group-hover:opacity-100 transition-opacity">
                    {b.number}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-4 mb-2 group-hover:text-[#C9A86A] transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-xs text-gray-400 font-light leading-relaxed">
                    {b.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1 text-[11px] text-[#C9A86A]">
                  <ShieldCheck size={14} />
                  <span>Garansi Regulasi UEA</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Private Office Banner */}
        <div className="bg-gradient-to-r from-[#202020] via-[#1a1a1a] to-[#202020] border border-white/10 rounded-2xl p-8 sm:p-14 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C9A86A]">
                <Lock size={14} />
                <span>Divisi Penasihat Eksklusif</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                AURUM PRIVATE OFFICE
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-2xl">
                Bagi investor perorangan berpenghasilan ultra-tinggi (UHNW) dan Family Office. Kami menyediakan akses ke properti *off-market* rahasia, struktur akuisisi bebas pajak, serta pengurusan langsung Golden Visa UEA dengan kerahasiaan 100%.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-center">
              <button
                onClick={onOpenVip}
                className="btn-gold px-8 py-4 text-xs flex items-center justify-center gap-2 cursor-pointer rounded-sm"
              >
                <span>Jadwalkan Konsultasi Rahasia</span>
                <ChevronRight size={14} />
              </button>
              <div className="text-center text-[10px] text-gray-500 uppercase tracking-widest">
                Kerahasiaan NDA Terjamin Penuh
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
