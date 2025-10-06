import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function CTA() {
  return (
    <section id="cta" className="bg-gradient-to-r from-red-600 to-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold mb-8" style={{fontFamily: 'Mulish, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '36px', fontWeight: '600', lineHeight: '1.3', color: '#2D3748'}}>Siap bikin pabrik Anda lebih modern & efisien?</h3>
        <p className="text-xl mb-8" style={{fontFamily: 'Mulish, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '1.6', color: '#2D3748'}}>Hubungi kami sekarang untuk konsultasi gratis.</p>
        <p className="text-lg mb-8" style={{fontFamily: 'Mulish, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '1.6', color: '#2D3748'}}>Biarkan kami tunjukkan bagaimana lini produksi Anda bisa bekerja lebih baik dari sebelumnya.</p>
        <a
          href={generateWhatsAppLink(generateWhatsAppMessage('cta_final'), 'cta_main')}
          className="px-10 py-5 rounded-lg text-xl transition"
          style={{
            fontFamily: 'Mulish, Roboto, Helvetica Neue, Arial, sans-serif',
            fontSize: '18px',
            fontWeight: '600',
            textTransform: 'uppercase',
            backgroundColor: '#DC2626',
            color: '#FFFFFF'
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          Mulai Konsultasi Gratis Automasi Pabrik Anda
        </a>
      </div>
    </section>
  );
}