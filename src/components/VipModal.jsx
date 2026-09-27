import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, Send, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

export default function VipModal({ isOpen, onClose, preselectedProperty }) {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    whatsapp: '',
    email: '',
    budget: 'AED 30M - 50M (~Rp 130M - 215M)',
    meetingType: 'Virtual Private Suite (Zoom / Google Meet)',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedProperty) {
      setFormData((prev) => ({
        ...prev,
        notes: `Tertarik khusus dengan unit: ${preselectedProperty.title} (${preselectedProperty.subtitle})`,
      }));
    }
  }, [preselectedProperty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl bg-[#181818] text-[#E3E1DC] border border-[#C9A86A]/40 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-[#121212]">
          <div className="flex items-center gap-2">
            <Sparkles size={16} className="text-[#C9A86A]" />
            <h3 className="font-display text-sm uppercase tracking-widest text-white">
              AURUM VIP PRIVATE ACCESS
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#C9A86A]/10 border border-[#C9A86A] flex items-center justify-center text-[#C9A86A] mx-auto animate-bounce">
                <CheckCircle size={32} />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">
                PERMOHONAN DITERIMA
              </h4>
              <p className="text-sm text-gray-300 font-light leading-relaxed max-w-md mx-auto">
                Terima kasih, <strong>{formData.fullName}</strong>. Senior Portfolio Director dari AURUM Dubai akan menghubungi Anda melalui WhatsApp / Email dalam waktu maksimal 2 jam.
              </p>

              <div className="p-4 bg-[#1f1f1f] rounded-lg border border-white/5 text-xs text-gray-400 text-left space-y-1">
                <div><strong>Preferensi:</strong> {preselectedProperty?.title || 'Konsultasi Portofolio Umum'}</div>
                <div><strong>Metode Pertemuan:</strong> {formData.meetingType}</div>
                <div><strong>Kerahasiaan:</strong> Dilindungi Perjanjian Non-Disclosure Agreement (NDA)</div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/971501234567?text=Halo%20AURUM%20Dubai,%20saya%20${encodeURIComponent(formData.fullName)}%20ingin%20berkonsultasi%20mengenai%20properti%20ultra-mewah.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold flex-1 py-3 text-xs flex items-center justify-center gap-2 rounded-sm"
                >
                  <PhoneCall size={14} />
                  <span>Hubungi WhatsApp Concierge Sekarang</span>
                </a>
                <button
                  onClick={handleReset}
                  className="py-3 px-6 text-xs border border-white/20 rounded-sm hover:bg-white/10 transition-colors"
                >
                  Tutup
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-xs text-gray-400 font-light mb-6">
                Silakan isi data berikut untuk menerima ringkasan portofolio tertutup (*off-market listings*) atau menjadwalkan private viewing.
              </div>

              {/* Nama Lengkap */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Alexander Wijaya"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#121212] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A86A] transition-colors"
                />
              </div>

              {/* WhatsApp & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                    Nomor WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+62 812-xxxx-xxxx"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full bg-[#121212] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A86A] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                    Email Korporat / Pribadi *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="nama@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#121212] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A86A] transition-colors"
                  />
                </div>
              </div>

              {/* Rentang Anggaran */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                  Rencana Alokasi Investasi
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-[#121212] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A86A] transition-colors"
                >
                  <option value="AED 20M - 35M (~Rp 85M - 150M)">AED 20M - 35M (~Rp 85M - 150M)</option>
                  <option value="AED 35M - 60M (~Rp 150M - 260M)">AED 35M - 60M (~Rp 150M - 260M)</option>
                  <option value="AED 60M+ (> Rp 260 Miliar)">AED 60M+ (&gt; Rp 260 Miliar)</option>
                  <option value="Private Trophy Asset Portfolio (> AED 100M)">Private Trophy Asset Portfolio (&gt; AED 100M)</option>
                </select>
              </div>

              {/* Preferensi Konsultasi */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                  Format Pertemuan Pilihan
                </label>
                <select
                  value={formData.meetingType}
                  onChange={(e) => setFormData({ ...formData, meetingType: e.target.value })}
                  className="w-full bg-[#121212] border border-white/15 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A86A] transition-colors"
                >
                  <option value="Virtual Private Suite (Zoom / Google Meet)">Virtual Private Suite (Zoom / Google Meet)</option>
                  <option value="AURUM Headquarters, DIFC Dubai">AURUM Headquarters, DIFC Dubai</option>
                  <option value="Private Lounge Meeting (Jakarta / Bali)">Private Lounge Meeting (Jakarta / Bali)</option>
                </select>
              </div>

              {/* Pesan Tambahan */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-gray-400 mb-1.5 font-medium">
                  Catatan Khusus / Permintaan Khusus
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Misal: Tertarik unit view Burj Khalifa, butuh asistensi Golden Visa, dll."
                  className="w-full bg-[#121212] border border-white/15 rounded-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#C9A86A] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Security info */}
              <div className="flex items-center gap-2 text-[11px] text-gray-500 pt-1">
                <ShieldCheck size={14} className="text-[#C9A86A]" />
                <span>Privasi data Anda dijamin 100% aman dan tidak akan dibagikan ke pihak ketiga.</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-gold py-4 text-xs flex items-center justify-center gap-2 cursor-pointer rounded-sm mt-4 font-bold"
              >
                <span>KIRIMKAN PERMOHONAN AKSES VIP</span>
                <Send size={14} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
