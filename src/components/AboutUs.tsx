'use client';

import { ImageContainer } from '@/components/ui/image-container';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section className="py-20" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text animate-shimmer"
        >
          Über Uns
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <video
              src="/videos/jok-cosmetics-reel.mp4"
              className="rounded-2xl w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-6">Willkommen bei JOK Cosmetics</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Jok Cosmetics steht für höchste Qualität und Professionalität im Bereich 
              Permanent Make-up und Wimpernverlängerung. Mit modernster Technik 
              und jahrelanger Erfahrung sorgen wir für Ihr perfektes Aussehen.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h4 className="text-4xl font-bold text-gold mb-2">3+</h4>
                <p className="text-gray-600">Jahre Erfahrung</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h4 className="text-4xl font-bold text-gold mb-2">100+</h4>
                <p className="text-gray-600">Zufriedene Kunden</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h4 className="text-4xl font-bold text-gold mb-2">100%</h4>
                <p className="text-gray-600">Qualitätsgarantie</p>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-lg">
                <h4 className="text-4xl font-bold text-gold mb-2">5 ⭐</h4>
                <p className="text-gray-600">Bewertungen</p>
              </div>
            </div>

            <div className="mt-8">
              <a 
                href="https://api.whatsapp.com/message/KC7WPZJIZW3DO1?autoload=1&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-green-500 hover:bg-green-600 text-white font-medium rounded-full transition-colors duration-200"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Kontakt
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
