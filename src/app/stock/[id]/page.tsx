import { notFound } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import { machines } from '@/data/machines';

const generateWhatsAppMessage = (machine: any) => {
  let message = `Saya tertarik dengan mesin ${machine.brand || ''} ${machine.type || ''}`;

  const details = [];

  if (machine.type) details.push(`Jenis Mesin: ${machine.type}`);
  if (machine.brand) details.push(`Brand: ${machine.brand}`);
  if (machine.capacity) details.push(`Kapasitas: ${machine.capacity}`);
  if (machine.year) details.push(`Tahun: ${machine.year}`);
  if (machine.country) details.push(`Made in: ${machine.country}`);
  if (machine.tableSize) details.push(`Ukuran Meja: ${machine.tableSize}`);

  const specsEntries = Object.entries(machine.specs).filter(([key, value]) => value);
  if (specsEntries.length > 0) {
    const specsText = specsEntries.map(([key, value]) => `${key}: ${value}`).join(', ');
    details.push(`Spesifikasi Lainnya: ${specsText}`);
  }

  if (details.length > 0) {
    message += ` dengan spesifikasi:\n${details.join('\n')}`;
  }

  return encodeURIComponent(message);
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function MachineDetail({ params }: PageProps) {
  const { id } = await params;
  const machine = machines.find(m => m.id === parseInt(id));

  if (!machine) {
    notFound();
  }

  return (
    <>
      <Head>
        <title>{machine.brand} {machine.type} - PT. Asai Metal</title>
        <meta name="description" content={`Detail mesin ${machine.brand} ${machine.type} tahun ${machine.year} dari ${machine.country}. Request quote sekarang!`} />
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
            href={`https://wa.me/628170968855?text=${generateWhatsAppMessage(machine)}`}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Hubungi Kami
          </a>
        </div>
      </header>

      <section className="pt-20 py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <div className="relative">
                <img
                  src={machine.image || `https://via.placeholder.com/600x400?text=${machine.brand || 'Machine'}`}
                  alt={`${machine.brand} ${machine.type}`}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                />
              </div>
              {machine.images && machine.images.length > 0 && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold mb-4 text-gray-800">Gallery</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {machine.images.map((img, index) => (
                      <div key={index} className="relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                        <img
                          src={img}
                          alt={`View ${index + 1}`}
                          className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-medium">
                            Gallery Image {index + 1}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {machine.videos && Array.isArray(machine.videos) && machine.videos.length > 0 && (
                <div className="mt-4">
                  <h4 className="text-lg font-semibold mb-2">Videos</h4>
                  <div className="grid grid-cols-1 gap-4">
                    {machine.videos.map((video, index) => (
                      <video key={index} controls className="w-full rounded">
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="animate-fade-in-right">
              <h2 className="text-4xl font-bold text-red-600 mb-4 animate-slide-in-scale">
                {machine.brand || 'Unknown'} {machine.type} {machine.capacity ? `(${machine.capacity})` : ''}
              </h2>
              <table className="w-full mb-6 border-collapse border border-gray-300">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 p-2 font-semibold">Brand</td>
                    <td className="border border-gray-300 p-2">{machine.brand || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">Type</td>
                    <td className="border border-gray-300 p-2">{machine.type}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 p-2 font-semibold">Year</td>
                    <td className="border border-gray-300 p-2">{machine.year || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">Country</td>
                    <td className="border border-gray-300 p-2">{machine.country || 'N/A'}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 p-2 font-semibold">Table Size</td>
                    <td className="border border-gray-300 p-2">{machine.tableSize || 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">Capacity</td>
                    <td className="border border-gray-300 p-2">{machine.capacity || 'N/A'}</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="border border-gray-300 p-2 font-semibold">Specifications</td>
                    <td className="border border-gray-300 p-2">{Object.keys(machine.specs).length > 0 ? Object.entries(machine.specs).map(([k, v]) => `${k}: ${v}`).join(', ') : 'N/A'}</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2 font-semibold">Quantity</td>
                    <td className="border border-gray-300 p-2">{machine.qty} {machine.unit}</td>
                  </tr>
                </tbody>
              </table>
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-4">Description</h3>
                <p className="text-lg">
                  Mesin {machine.brand} {machine.type} berkualitas tinggi dari {machine.country}, tahun {machine.year}.
                  Siap digunakan dengan garansi dan dukungan penuh dari PT. Asai Metal.
                </p>
              </div>
              <div className="flex gap-4">
                <a
                  href={`https://wa.me/628170968855?text=${generateWhatsAppMessage(machine)}`}
                  className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 btn-modern transition-all duration-300 animate-pulse-glow"
                >
                  Request Quote
                </a>
                <Link href="/custom" className="bg-gray-600 text-white px-6 py-3 rounded hover:bg-gray-700 btn-modern transition-all duration-300">
                  Custom Solution
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">&copy; 2025 PT. Asai Metal. Semua hak dilindungi.</p>
          <p className="mb-4">
            Kontak: <a href="https://wa.me/628170968855" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">+628170968855</a> | <a href="https://wa.me/6287888411183" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">+6287888411183</a>
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

export async function generateStaticParams() {
  return machines.map((machine) => ({
    id: machine.id.toString(),
  }));
}