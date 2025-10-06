'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { machines, Machine } from '@/data/machines';
import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';
import Image from 'next/image';

export default function Stock() {
  const router = useRouter();
  const [filteredMachines, setFilteredMachines] = useState<Machine[]>(machines);
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [brandFilter, setBrandFilter] = useState('');
  const [yearFilter, setYearFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const brands = [...new Set(machines.map(m => m.brand).filter(b => b))];
  const years = [...new Set(machines.map(m => m.year).filter(y => y !== undefined))].sort((a, b) => b - a);
  const countries = [...new Set(machines.map(m => m.country).filter(c => c))];


  useEffect(() => {
    let filtered = machines.filter(machine => {
      const matchesSearch = search === '' ||
        machine.brand.toLowerCase().includes(search.toLowerCase()) ||
        machine.type.toLowerCase().includes(search.toLowerCase()) ||
        machine.capacity.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === '' || machine.type === typeFilter;
      const matchesBrand = brandFilter === '' || machine.brand === brandFilter;
      const matchesYear = yearFilter === '' || machine.year?.toString() === yearFilter;
      const matchesCountry = countryFilter === '' || machine.country === countryFilter;
      const matchesTab = activeTab === 'all' || machine.category === activeTab;

      return matchesSearch && matchesType && matchesBrand && matchesYear && matchesCountry && matchesTab;
    });
    setFilteredMachines(filtered);
  }, [search, typeFilter, brandFilter, yearFilter, countryFilter, activeTab]);

  return (
    <>
      <Head>
        <title>Stok Mesin & Robot - PT. Asai Metal</title>
        <meta name="description" content="Jelajahi stok mesin dan robot terbaru dari PT. Asai Metal. Milling, CNC, Press, Robot, dan lainnya. Request quote sekarang!" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": "Stok Mesin & Robot PT. Asai Metal",
              "description": "Koleksi lengkap mesin industri dan robot otomasi siap pakai",
              "numberOfItems": filteredMachines.length,
              "itemListElement": filteredMachines.slice(0, 10).map((machine, index) => ({
                "@type": "Product",
                "position": index + 1,
                "name": `${machine.brand || ''} ${machine.type || ''}`.trim(),
                "brand": {
                  "@type": "Brand",
                  "name": machine.brand || "Unknown"
                },
                "model": machine.type || "Unknown",
                "manufacturer": {
                  "@type": "Organization",
                  "name": "PT. Asai Metal"
                },
                "productionDate": machine.year ? `${machine.year}-01-01` : undefined,
                "countryOfOrigin": machine.country || undefined,
                "category": machine.category || "Industrial Machine",
                "offers": {
                  "@type": "Offer",
                  "availability": "https://schema.org/InStock",
                  "seller": {
                    "@type": "Organization",
                    "name": "PT. Asai Metal"
                  }
                }
              }))
            })
          }}
        />
      </Head>
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <img
              src="/logo-asai.jpg"
              alt="PT. ASAI METAL Logo"
              className="h-12 w-auto mr-2"
            />
            <span className="text-red-600 font-bold text-xl">PT. ASAI METAL</span>
          </Link>
          <nav className="flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-red-600">Home</Link>
            <Link href="/stock" className="text-gray-700 hover:text-red-600">Stock</Link>
            <Link href="/custom" className="text-gray-700 hover:text-red-600">Custom</Link>
            <Link href="#contact" className="text-gray-700 hover:text-red-600">Contact</Link>
          </nav>
          <a
            href={generateWhatsAppLink(generateWhatsAppMessage('stock_general'), 'header_cta')}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hubungi Kami
          </a>
        </div>
      </header>

      <section className="pt-20 bg-gradient-to-r from-red-600 to-white text-gray-800 py-20 text-center animate-fade-in-up relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="industrial-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="1" fill="currentColor"/>
                <circle cx="15" cy="15" r="1" fill="currentColor"/>
                <line x1="0" y1="10" x2="20" y2="10" stroke="currentColor" strokeWidth="0.5"/>
                <line x1="10" y1="0" x2="10" y2="20" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#industrial-pattern)"/>
          </svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-6 animate-slide-in-scale">Stok Mesin & Robot Tersedia</h2>
          <p className="text-xl animate-fade-in-up animate-delay-200">Temukan mesin berkualitas tinggi untuk kebutuhan pabrik Anda. Semua stok siap dikirim dengan garansi.</p>
        </div>
      </section>

      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 mb-8 p-4 bg-white rounded-lg shadow">
            <input
              type="text"
              placeholder="Cari mesin... (e.g., AIDA 300T)"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 p-2 border rounded"
            />
            <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="p-2 border rounded">
              <option value="">Semua Jenis</option>
              <option value="MILLING">Milling</option>
              <option value="CNC MILL">CNC Mill</option>
              <option value="ROBOT">Robot</option>
              <option value="MEKANIKAL PRESS">Press</option>
              <option value="TRANSFER PRESS">Transfer Press</option>
              <option value="FEEDER">Feeder</option>
              <option value="BUBUT">Lathe</option>
              <option value="SURFACE GRINDING">Surface Grinding</option>
            </select>
            <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className="p-2 border rounded">
              <option value="">Semua Brand</option>
              {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
            </select>
            <select value={yearFilter} onChange={(e) => setYearFilter(e.target.value)} className="p-2 border rounded">
              <option value="">Semua Tahun</option>
              {years.map(year => <option key={year} value={year}>{year}</option>)}
            </select>
            <select value={countryFilter} onChange={(e) => setCountryFilter(e.target.value)} className="p-2 border rounded">
              <option value="">Semua Negara</option>
              {countries.map(country => <option key={country} value={country}>{country}</option>)}
            </select>
            <button
              onClick={() => {
                setSearch('');
                setTypeFilter('');
                setBrandFilter('');
                setYearFilter('');
                setCountryFilter('');
                setActiveTab('all');
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
            >
              Clear All
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['all', 'milling', 'cnc', 'robot', 'press', 'feeder'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded ${activeTab === tab ? 'bg-red-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
              >
                {tab === 'all' ? 'Semua' : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMachines.map((machine, index) => (
              <div
                key={machine.id}
                className={`bg-white p-6 rounded-lg shadow-md hover-lift cursor-pointer relative animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => router.push(`/stock/${machine.id}`)}
              >
                <div className="relative w-full h-40 mb-4 group">
                  <img
                    src={machine.image || `https://via.placeholder.com/300x200?text=${machine.brand || 'Machine'}`}
                    alt={`${machine.brand} ${machine.type}`}
                    className={`w-full h-40 object-contain rounded transition-opacity duration-300 ${machine.videos && Array.isArray(machine.videos) && machine.videos.length > 0 && machine.videos[0] && machine.videos[0].trim() !== '' ? 'group-hover:opacity-0' : ''}`}
                  />
                  {machine.videos && Array.isArray(machine.videos) && machine.videos.length > 0 && machine.videos[0] && machine.videos[0].trim() !== '' && (
                    <video
                      className="absolute inset-0 w-full h-40 object-contain rounded bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      onMouseEnter={async (e) => {
                        try {
                          await e.currentTarget.play();
                        } catch (error) {
                          // Ignore play interruptions
                        }
                      }}
                      onMouseLeave={(e) => {
                        try {
                          e.currentTarget.pause();
                        } catch (error) {
                          // Ignore pause errors
                        }
                      }}
                    >
                      <source src={machine.videos[0]} type="video/mp4" />
                    </video>
                  )}
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-2">
                  {machine.brand || 'Unknown'} {machine.type} {machine.capacity ? `(${machine.capacity})` : ''}
                </h3>
                <p className="mb-1"><strong>Year:</strong> {machine.year || 'N/A'}</p>
                <p className="mb-1"><strong>Country:</strong> {machine.country || 'N/A'}</p>
                <p className="mb-1"><strong>Table Size:</strong> {machine.tableSize || 'N/A'}</p>
                <p className="mb-1"><strong>Specs:</strong> {Object.keys(machine.specs).length > 0 ? Object.entries(machine.specs).map(([k, v]) => `${k}: ${v}`).join(', ') : 'N/A'}</p>
                <p className="mb-4"><strong>Qty:</strong> {machine.qty} {machine.unit}</p>
                <div className="flex gap-2">
                  <a
                    href={generateWhatsAppLink(generateWhatsAppMessage('stock_machine', machine), 'stock_request_quote')}
                    className="bg-green-600 text-white px-4 py-2 rounded flex-1 text-center hover:bg-green-700 btn-modern transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request Quote
                  </a>
                  <button
                    onClick={() => router.push(`/stock/${machine.id}`)}
                    className="bg-red-600 text-white px-4 py-2 rounded flex-1 text-center hover:bg-red-700 btn-modern transition-all duration-300 animate-pulse-glow"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2025 PT. Asai Metal. Semua hak dilindungi.</p>
          <p className="mb-4">
            Kontak: <a href={generateWhatsAppLink(generateWhatsAppMessage('footer_contact'), 'footer_contact')} className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </p>
          <p>
            <span className="text-red-400 mr-4">Syarat & Ketentuan</span> |
            <span className="text-red-400 ml-4">Kebijakan Privasi</span>
          </p>
        </div>
      </footer>
    </>
  );
}