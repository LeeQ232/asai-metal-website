import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-red-600 to-white text-gray-800 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6 text-center">
        <h1 className="font-bold mb-8 text-black max-w-5xl mx-auto">
          Transformasikan Pabrik Anda Dengan Otomasi Tanpa Batas.
        </h1>
        <p className="mb-8 text-black max-w-4xl mx-auto text-xl">
          Mesin, robot, sistem — semua bisa kami buat & integrasikan, sesuai budget dan kebutuhan Anda.
        </p>
        <p className="mb-12 text-black max-w-3xl mx-auto text-lg">
          Anda cukup bilang apa yang Anda mau, kami yang wujudkan.
        </p>
        <a
          href={generateWhatsAppLink(generateWhatsAppMessage('hero_consultation'), 'hero_cta')}
          className="btn-responsive bg-red-600 text-white hover:bg-red-700 transition-colors inline-block text-center font-bold uppercase shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsultasi Gratis Automasi Pabrik Anda
        </a>
      </div>
    </section>
  );
}