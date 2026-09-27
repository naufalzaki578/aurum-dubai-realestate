import React from 'react';
import { ArrowUp, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onOpenVip }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="kontak" className="relative bg-[#111] text-white pt-24 pb-16 px-6 md:px-16 overflow-hidden">
      {/* Background Graphic / Image Overlay */}
      <img
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c6b6980-54e4-4d8c-9ff6-e09b844d7b01_3840w.webp"
        alt="Dubai skyline"
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />

      <div className="relative z-10 max-w-[1600px] mx-auto flex flex-col justify-between min-h-[70vh]">
        {/* Top VIP Invitation */}
        <div className="text-center my-auto py-12">
          <div className="text-xs uppercase tracking-[0.4em] text-gray-400 mb-4 font-semibold">
            Investasi Masa Depan Anda Dimulai Di Sini
          </div>
          <button
            onClick={onOpenVip}
            className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[7.5vw] leading-none text-[#E3E1DC] hover:text-[#C9A86A] transition-colors tracking-tight font-bold cursor-pointer inline-block"
          >
            AKSES VIP
          </button>
          <div className="mt-6 text-sm text-gray-400 tracking-wider">
            Hubungi meja konsinyasi privat kami: <span className="text-[#C9A86A] font-semibold">vip@aurum.ae</span>
          </div>
        </div>

        {/* Middle Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-t border-b border-white/10 text-xs text-gray-400">
          <div>
            <div className="font-display text-white text-lg font-bold tracking-widest mb-3">
              AURUM
            </div>
            <p className="leading-relaxed font-light">
              Pengembang properti terdepan di Dubai untuk hunian ultra-mewah, private estate, dan arsitektur landmark bernilai tinggi.
            </p>
          </div>

          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-3">Kantor Pusat</div>
            <div className="flex items-start gap-2">
              <MapPin size={14} className="text-[#C9A86A] shrink-0 mt-0.5" />
              <span>DIFC Gate Precinct 4, Level 15, Dubai, Uni Emirat Arab</span>
            </div>
          </div>

          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-3">Layanan Portofolio</div>
            <ul className="space-y-1.5">
              <li>Akuisisi Properti Mewah Dubai</li>
              <li>Fasilitasi Golden Visa UEA 10 Tahun</li>
              <li>Manajemen Properti Trophy Asset</li>
              <li>Konsultasi Pajak & Struktur Kepemilikan</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold uppercase tracking-wider mb-3">Tautan Resmi</div>
            <div className="flex flex-col gap-2">
              <a href="#" className="hover:text-[#C9A86A] transition-colors">Instagram @aurum.dubai</a>
              <a href="#" className="hover:text-[#C9A86A] transition-colors">LinkedIn Private Client Group</a>
              <a href="#" className="hover:text-[#C9A86A] transition-colors">Katalog Portofolio 2025 (PDF)</a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500 gap-4">
          <div>
            © 2025 AURUM DEVELOPMENTS DUBAI. Hak Cipta Dilindungi Undang-Undang. Terdaftar di RERA & DLD.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-300">Kebijakan Privasi</a>
            <a href="#" className="hover:text-gray-300">Ketentuan Layanan</a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#C9A86A] transition-colors ml-4 cursor-pointer"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
