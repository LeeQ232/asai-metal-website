export default function Proof() {
  const logos = Array.from({ length: 14 }, (_, i) => `/logos/${i + 1}.png`);
  // Duplicate logos for seamless scrolling
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section id="proof" className="bg-gradient-to-br from-gray-900 via-gray-800 to-black py-24 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-purple-900/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h3 className="text-4xl font-bold mb-2 text-white" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '36px', fontWeight: '800', lineHeight: '1.3'}}>Kepercayaan dibangun dari hasil</h3>
          <p className="text-lg mb-4 text-gray-300" style={{fontFamily: 'Montserrat, Roboto, Helvetica Neue, Arial, sans-serif', fontSize: '17px', fontWeight: '400', lineHeight: '1.6'}}>Inilah perusahaan-perusahaan yang sudah bekerja bersama kami</p>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
        </div>

        {/* Animated Logo Carousel */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient Overlays for Smooth Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Scrolling Container */}
          <div className="flex logo-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${index}-${logo}`}
                className="flex-shrink-0 mx-6 group"
              >
                <div className="relative bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 min-w-[160px] h-24 flex items-center justify-center">
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

                  {/* Logo */}
                  <img
                    src={logo}
                    alt={`Company Logo ${(index % 14) + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-300 group-hover:scale-105 filter brightness-90 group-hover:brightness-100"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-full shadow-lg">
            <div className="flex -space-x-2 mr-4">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-3 h-3 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
            <span className="font-semibold text-lg">15+ Perusahaan Terpercaya</span>
          </div>
        </div>
      </div>
    </section>
  );
}