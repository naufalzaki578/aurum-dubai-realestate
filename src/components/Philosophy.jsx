import React from 'react';
import { Landmark, Gem, Award, Shield } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="filosofi" className="py-32 px-6 md:px-16 bg-[#E3E1DC] text-[#121212] relative z-20">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          {/* Left Title */}
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-[#374336] font-bold block mb-4">
              Visi & Filosofi
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08] font-bold tracking-tight">
              Di Balik <br />
              <span className="text-[#374336] italic font-serif">Cakrawala.</span>
            </h2>
            <div className="mt-8 h-1 w-20 bg-[#374336]"></div>

            <div className="mt-12 space-y-6 text-sm text-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#374336]/10 flex items-center justify-center text-[#374336]">
                  <Landmark size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#121212]">Otoritas Properti Dubai (RERA)</h4>
                  <p className="text-xs text-gray-600">Terdaftar & tersertifikasi secara resmi di DLD (Dubai Land Department)</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#374336]/10 flex items-center justify-center text-[#374336]">
                  <Gem size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-[#121212]">Kualitas Material Tak Tertandingi</h4>
                  <p className="text-xs text-gray-600">Batu marmer Italia, kayu jati Burma, dan teknologi bioclimatic terkini</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="text-xl sm:text-2xl font-light leading-relaxed text-[#1e1e1e]">
              <p className="mb-8">
                Dari pesisir keemasan Palm Jumeirah hingga puncak megah Pegunungan Hatta, kami bukan sekadar membangun properti — kami mengukir warisan.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
                AURUM mendefinisikan ulang gaya hidup elit Dubai dengan memadukan kehangatan tradisi Arab klasik bersama kecanggihan teknologi masa depan. Setiap kediaman dirancang sebagai karya seni pribadi yang tak lekang oleh waktu bagi investor visioner dari seluruh dunia.
              </p>
            </div>

            <div className="h-px w-full bg-black/15 my-12"></div>

            {/* Metadata Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-xs uppercase tracking-widest font-semibold text-gray-800">
              <div>
                <div className="text-[10px] text-gray-500 font-normal">Tahun Didirikan</div>
                <div className="text-base font-bold text-[#121212] mt-1 font-display">Est. 2025</div>
              </div>
              <div>
                <div className="text-[10px] text-gray-500 font-normal">Kantor Pusat</div>
                <div className="text-base font-bold text-[#121212] mt-1 font-display">Dubai / Abu Dhabi</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-[10px] text-gray-500 font-normal">Segmentasi Klien</div>
                <div className="text-base font-bold text-[#121212] mt-1 font-display">UHNW & Family Office</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
