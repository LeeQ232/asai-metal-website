'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-3 py-2 md:px-4 md:py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
          <img
            src="/logo-asai.jpg"
            alt="PT. ASAI METAL Logo"
            className="h-6 w-auto mr-1 md:h-8 md:mr-2"
          />
          <span className="text-red-600 font-bold text-sm md:text-lg lg:text-xl">PT. ASAI METAL</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link href="#hero" className="text-gray-700 hover:text-red-600 transition-colors">Home</Link>
          <Link href="#proof" className="text-gray-700 hover:text-red-600 transition-colors">Klien Kami</Link>
          <Link href="#benefits" className="text-gray-700 hover:text-red-600 transition-colors">Kenapa Kami</Link>
          <Link href="#catalog" className="text-gray-700 hover:text-red-600 transition-colors">Solusi Otomasi</Link>
          <Link href="/stock" className="text-gray-700 hover:text-red-600 transition-colors">Stok Mesin</Link>
          <Link href="#authority" className="text-gray-700 hover:text-red-600 transition-colors">Proyek Kami</Link>
          <Link href="#cta" className="text-gray-700 hover:text-red-600 transition-colors">Konsultasi Gratis</Link>
        </nav>

        {/* Desktop Contact Button */}
        <a
          href="https://wa.me/628170968855?text=Saya%20tertarik%20dengan%20layanan%20PT.%20Asai%20Metal"
          className="hidden lg:block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
        >
          Hubungi Kami
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-1.5 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle mobile menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center">
            <span className={`block w-4 h-0.5 bg-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-0.5'}`}></span>
            <span className={`block w-4 h-0.5 bg-gray-700 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-4 h-0.5 bg-gray-700 transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-0.5'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <span className="text-white font-bold text-base">Menu</span>
          <button
            onClick={closeMobileMenu}
            className="text-white text-xl hover:text-red-400 transition-colors"
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav>
          <ul>
            <li><Link href="#hero" className="block py-2.5 border-b border-gray-700 text-sm" onClick={closeMobileMenu}>Home</Link></li>
            <li><Link href="#proof" className="block py-2.5 border-b border-gray-700 text-sm" onClick={closeMobileMenu}>Klien Kami</Link></li>
            <li><Link href="#benefits" className="block py-2.5 border-b border-gray-700 text-sm" onClick={closeMobileMenu}>Kenapa Kami</Link></li>
            <li><Link href="#catalog" className="block py-2.5 border-b border-gray-700 text-sm" onClick={closeMobileMenu}>Solusi Otomasi</Link></li>
            <li><Link href="/stock" className="block py-2.5 border-b border-gray-700 text-sm" onClick={closeMobileMenu}>Stok Mesin</Link></li>
            <li><Link href="#authority" className="block py-2.5 border-b border-gray-700 text-sm" onClick={closeMobileMenu}>Proyek Kami</Link></li>
            <li><Link href="#cta" className="block py-2.5 border-b border-gray-700 text-sm" onClick={closeMobileMenu}>Konsultasi Gratis</Link></li>
          </ul>
        </nav>

        <div className="mt-6 pt-6 border-t border-gray-700">
          <a
            href="https://wa.me/628170968855?text=Saya%20tertarik%20dengan%20layanan%20PT.%20Asai%20Metal"
            className="block w-full bg-red-600 text-white text-center py-2.5 rounded-lg hover:bg-red-700 transition-colors text-sm"
            onClick={closeMobileMenu}
          >
            Hubungi Kami via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}