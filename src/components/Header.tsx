import Link from 'next/link';

export default function Header() {
  return (
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
           <Link href="#hero" className="text-gray-700 hover:text-red-600">Home</Link>
           <Link href="#proof" className="text-gray-700 hover:text-red-600">Klien Kami</Link>
           <Link href="#benefits" className="text-gray-700 hover:text-red-600">Kenapa Kami</Link>
           <Link href="#catalog" className="text-gray-700 hover:text-red-600">Solusi Otomasi</Link>
           <Link href="/stock" className="text-gray-700 hover:text-red-600">Stok Mesin</Link>
           <Link href="#authority" className="text-gray-700 hover:text-red-600">Proyek Kami</Link>
           <Link href="#cta" className="text-gray-700 hover:text-red-600">Konsultasi Gratis</Link>
         </nav>
        <a
          href="https://wa.me/628170968855?text=Saya%20tertarik%20dengan%20layanan%20PT.%20Asai%20Metal"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Hubungi Kami
        </a>
      </div>
    </header>
  );
}