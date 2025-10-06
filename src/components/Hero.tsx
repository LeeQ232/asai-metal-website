import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function Hero() {
  return (
    <section id="hero" className="bg-gradient-to-r from-red-600 to-white text-gray-800 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: 'Mulish, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '42px', fontWeight: '600', lineHeight: '1.2', color: '#000000'}}>
          Transformasikan Pabrik Anda Dengan Otomasi Tanpa Batas.
        </h2>
        <p className="text-xl md:text-2xl mb-8" style={{fontFamily: 'Mulish, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '1.6', color: '#000000'}}>Mesin, robot, sistem — semua bisa kami buat & integrasikan, sesuai budget dan kebutuhan Anda.</p>
        <p className="text-lg mb-8" style={{fontFamily: 'Mulish, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '1.6', color: '#000000'}}>
          Anda cukup bilang apa yang Anda mau, kami yang wujudkan.
        </p>
        <a
          href={generateWhatsAppLink(generateWhatsAppMessage('hero_consultation'), 'hero_cta')}
          className="bg-red-600 text-white px-8 py-4 rounded-lg text-xl hover:bg-red-700 transition"
          style={{
            fontFamily: 'Mulish, Roboto, Helvetica Neue, Arial, sans-serif',
            fontSize: '16px',
            fontWeight: '600',
            textTransform: 'uppercase',
            backgroundColor: '#DC2626'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsultasi Gratis Automasi Pabrik Anda
        </a>
      </div>
    </section>
  );
}