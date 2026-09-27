import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import ResidenceStack from './components/ResidenceStack';
import PrivateOffice from './components/PrivateOffice';
import Footer from './components/Footer';
import PropertyModal from './components/PropertyModal';
import VipModal from './components/VipModal';

export default function App() {
  const [currency, setCurrency] = useState('AED');
  const [selectedResidence, setSelectedResidence] = useState(null);
  const [vipModalOpen, setVipModalOpen] = useState(false);
  const [vipTargetProperty, setVipTargetProperty] = useState(null);

  const handleOpenVip = (property = null) => {
    setVipTargetProperty(property);
    setVipModalOpen(true);
  };

  const handleBookViewing = (property) => {
    setSelectedResidence(null);
    handleOpenVip(property);
  };

  return (
    <div className="relative min-h-screen bg-[#E3E1DC] text-[#121212] selection:bg-[#C9A86A] selection:text-black">
      {/* Noise Texture Overlay for Rich Film Grain Feel */}
      <div className="noise-overlay" aria-hidden="true"></div>

      {/* Navigation */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        onOpenVip={() => handleOpenVip(null)}
      />

      {/* Hero Section */}
      <main>
        <Hero onOpenVip={() => handleOpenVip(null)} />

        {/* Narrative / Philosophy Section */}
        <Philosophy />

        {/* Stacking Cards Showcase Section */}
        <ResidenceStack
          currency={currency}
          onSelectResidence={(res) => setSelectedResidence(res)}
        />

        {/* Private Office & Investment Advantages */}
        <PrivateOffice onOpenVip={() => handleOpenVip(null)} />
      </main>

      {/* Footer with VIP Access Reveal */}
      <Footer onOpenVip={() => handleOpenVip(null)} />

      {/* Property Detail Modal */}
      {selectedResidence && (
        <PropertyModal
          residence={selectedResidence}
          currency={currency}
          onClose={() => setSelectedResidence(null)}
          onBookViewing={handleBookViewing}
        />
      )}

      {/* VIP Access Consultation Modal */}
      <VipModal
        isOpen={vipModalOpen}
        onClose={() => setVipModalOpen(false)}
        preselectedProperty={vipTargetProperty}
      />
    </div>
  );
}
