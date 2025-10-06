'use client';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-50 to-white text-gray-800 py-8 md:py-12 lg:py-16 border-t border-gray-200">
      <div className="container mx-auto px-4">
        {/* Company Identity */}
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-red-600 mb-3 md:mb-4">
            PT. ASAI METAL
          </h3>
        </div>

        {/* Head Office Address */}
        <div className="text-center mb-6 md:mb-8">
          <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
            Head Office:
          </h4>
          <p className="text-gray-700 mb-3 text-sm md:text-base">
            Jl. Raya Curug KM. 1 RT/RW. 07/02<br/>
            Kadujaya - Curug, Tangerang, Banten 15810<br/>
            Indonesia
          </p>
          <a
            href="https://maps.app.goo.gl/mWojTi78JF8nS5bK8"
            className="inline-block text-red-600 hover:text-red-700 font-medium transition-colors text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lihat di Google Maps →
          </a>
        </div>

        {/* Contact Information */}
        <div className="text-center mb-6 md:mb-8">
          <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
            Contact Information
          </h4>
          <div className="space-y-2">
            <p className="text-gray-700 text-sm md:text-base">
              Email: <a
                href="mailto:asaimetal@asaimetal.com"
                className="text-red-600 hover:text-red-700 font-medium transition-colors"
              >
                asaimetal@asaimetal.com
              </a>
            </p>
            <div className="text-gray-700 text-sm md:text-base">
              Phone:
              <a
                href="tel:+622159893652"
                className="text-red-600 hover:text-red-700 font-medium transition-colors mx-2"
              >
                +62 21 59893652
              </a>
              |
              <a
                href="tel:+62215988125"
                className="text-red-600 hover:text-red-700 font-medium transition-colors mx-2"
              >
                +62 21 5988125
              </a>
            </div>
          </div>
        </div>

        {/* Social Media / Follow Us */}
        <div className="text-center mb-8 md:mb-12">
          <h4 className="text-base md:text-lg font-semibold text-gray-800 mb-3 md:mb-4">
            Ikuti Kami
          </h4>
          <div className="flex justify-center space-x-4 md:space-x-6">
            <a
              href="https://www.youtube.com/@WebsiteAsai"
              className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 rounded-full transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Legal / Copyright */}
        <div className="text-center border-t border-gray-300 pt-6 md:pt-8">
          <p className="text-gray-600 mb-3 text-sm md:text-base">
            © 2025 PT. Asai Metal. Semua hak dilindungi.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-xs md:text-sm">
            <span className="text-red-600 hover:text-red-700 cursor-pointer transition-colors">
              Syarat & Ketentuan
            </span>
            <span className="text-gray-400 hidden md:block">|</span>
            <span className="text-red-600 hover:text-red-700 cursor-pointer transition-colors">
              Kebijakan Privasi
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}