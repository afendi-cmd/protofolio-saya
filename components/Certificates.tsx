"use client";

import { motion } from "framer-motion";

interface CertificatesProps {
  dict: {
    title: string;
    accent: string;
  };
}

export default function Certificates({ dict }: CertificatesProps) {
  return (
    <section id="certificates" className="scroll-mt-14 py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Badge Judul */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text">
            {dict.title} <span className="text-brand-mint">{dict.accent}</span>.
          </h3>
        </div>

        {/* Coming Soon Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-center min-h-[400px]"
        >
          <div className="relative">
            
            {/* Glowing Background Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-mint/20 via-brand-mint/30 to-brand-mint/20 blur-3xl rounded-full animate-pulse" />
            
            {/* Main Content */}
            <div className="relative bg-brand-text/5 backdrop-blur-sm border-2 border-brand-mint/30 rounded-3xl px-12 py-16 md:px-20 md:py-20 text-center">
              
              {/* Icon */}
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1
                }}
                className="mb-6"
              >
                <svg 
                  className="w-20 h-20 md:w-24 md:h-24 mx-auto text-brand-mint" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" 
                  />
                </svg>
              </motion.div>

              {/* Text */}
              <h4 className="text-3xl md:text-4xl font-bold text-brand-text mb-3">
                Coming Soon
              </h4>
              <p className="text-brand-text/60 text-lg md:text-xl max-w-md mx-auto">
                Sertifikat sedang dalam proses dan akan segera ditampilkan
              </p>

              {/* Animated Dots */}
              <div className="flex gap-2 justify-center mt-8">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 1, 0.3]
                    }}
                    transition={{ 
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                    className="w-2 h-2 bg-brand-mint rounded-full"
                  />
                ))}
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}