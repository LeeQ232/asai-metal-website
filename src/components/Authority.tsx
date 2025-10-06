import { generateWhatsAppLink, generateWhatsAppMessage } from '@/utils/whatsapp';

export default function Authority() {
  return (
    <section id="authority" className="bg-gradient-to-br from-black via-gray-900 to-purple-900 py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '48px', fontWeight: '800', lineHeight: '1.1'}}>
            Dipandu Oleh Tim Ahli Dengan 10+ Tahun Pengalaman
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
            Kami dipercaya perusahaan di Indonesia & Singapura. Bedanya? Kalau Anda kerja sama dengan kami, Anda nggak cuma beli mesin. Anda masuk ke ekosistem yang akan selalu jaga kelancaran pabrik Anda.
          </p>
        </div>

        {/* SEO Keywords */}
        <div className="text-center mb-16">
          <h3 className="text-red-400 font-bold text-xl mb-4" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
            Jasa Otomasi Pabrik Indonesia • Integrator Robot Industri Fanuc, ABB, Yaskawa, KUKA • Konversi Mesin Manual ke Otomatis
          </h3>
        </div>

        {/* 2x3 Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Row 1 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 aspect-video">
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/FUKUI TANDEM LINE WA _ 087888411183 (FAJAR).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  FUKUI TANDEM LINE
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Tandem Line Press Otomatis – Fukui
                </p>
                <p className="text-gray-300 text-sm" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Uptime 24/7 • Zero Manual Handling
                </p>
                <a
                  href={generateWhatsAppLink(generateWhatsAppMessage('video_fukui_tandem'), 'video_fukui_tandem')}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <div>
                <h4 className="text-white font-bold text-lg" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                   FUKUI TANDEM LINE
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 aspect-video">
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/ROBOT ARM TRANSFER.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  ROBOT ARM TRANSFER
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Robot Arm Transfer Otomatis
                </p>
                <p className="text-gray-300 text-sm" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Produksi lebih cepat 35%
                </p>
                <a
                  href={generateWhatsAppLink(generateWhatsAppMessage('video_robot_arm'), 'video_robot_arm')}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <div>
                <h4 className="text-white font-bold text-lg" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                   ROBOT ARM TRANSFER
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 aspect-video">
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/ROBOT HANDLING FOR DIE CASTING MACHINE.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  ROBOT HANDLING FOR DIE CASTING MACHINE
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Robot Handling untuk Die Casting
                </p>
                <p className="text-gray-300 text-sm" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Presisi tinggi • Konsistensi output
                </p>
                <a
                  href={generateWhatsAppLink(generateWhatsAppMessage('video_die_casting'), 'video_die_casting')}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <div>
                <h4 className="text-white font-bold text-lg" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                   ROBOT HANDLING FOR DIE CASTING
                </h4>
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 aspect-video">
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/videos/KOMATSU TANDEM LINE DENGAN ROBOT HANDLING YASKAWA WA _ 087888411183(FAJAR).mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  KOMATSU TANDEM LINE + YASKAWA ROBOT HANDLING
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Komatsu Tandem + Robot Yaskawa
                </p>
                <p className="text-gray-300 text-sm" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Efisiensi meningkat 40%
                </p>
                <a
                  href={generateWhatsAppLink(generateWhatsAppMessage('video_komatsu_yaskawa'), 'video_komatsu_yaskawa')}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <div>
                <h4 className="text-white font-bold text-lg" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                   KOMATSU TANDEM + YASKAWA
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 aspect-video">
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/Video for slideshow 1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Video for slideshow 1
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Robot Integrasi Press Line
                </p>
                <p className="text-gray-300 text-sm" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Fully automated pick & place
                </p>
                <a
                  href={generateWhatsAppLink(generateWhatsAppMessage('video_press_line'), 'video_press_line')}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <div>
                <h4 className="text-white font-bold text-lg" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                   ROBOT INTEGRASI PRESS LINE
                </h4>
              </div>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-red-500/30 transition-all duration-500 aspect-video">
            <video
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              autoPlay
              muted
              loop
              playsInline
              
              preload="metadata"
            >
              <source src="/videos/MESIN INJECTION PLASTIC UBE 2500T.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-center items-center p-6">
              <div className="text-center">
                <h4 className="text-white font-bold text-xl mb-2" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  MESIN INJECTION PLASTIC UBE 2500T
                </h4>
                <p className="text-red-400 font-semibold text-sm mb-3" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Injection Plastic UBE 2500T
                </p>
                <p className="text-gray-300 text-sm" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                  Output maksimal • Kualitas konsisten
                </p>
                <a
                  href={generateWhatsAppLink(generateWhatsAppMessage('video_injection_ube'), 'video_injection_ube')}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium inline-block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ▶ Tonton Proyek
                </a>
              </div>
            </div>

            {/* Default overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
              <div>
                <h4 className="text-white font-bold text-lg" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
                   MESIN INJECTION PLASTIC UBE 2500T
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="text-center mb-12">
          <div className="bg-gradient-to-r from-red-600/10 to-red-700/10 rounded-2xl p-8 border border-red-500/20 max-w-4xl mx-auto">
            <blockquote className="text-white text-xl italic mb-4" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
              "Dengan Asai Metal, produksi kami naik 30% tanpa harus beli mesin baru."
            </blockquote>
            <cite className="text-red-400 font-semibold text-lg" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif'}}>
              — Chemco Manager
            </cite>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={generateWhatsAppLink(generateWhatsAppMessage('cta_final'), 'authority_main_cta')}
            className="inline-block px-12 py-6 rounded-xl text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            style={{
              fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif',
              fontSize: '18px',
              fontWeight: '700',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #DC2626 0%, #FB4E4E 100%)',
              color: '#FFFFFF',
              boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)'
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasi Gratis Automasi Pabrik Anda
          </a>
        </div>
      </div>
    </section>
  );
}