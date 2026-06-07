"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface CertificatesProps {
  dict: {
    title: string;
    accent: string;
  };
}

// Data sertifikat dengan thumbnail & PDF
const certificates = [
  { 
    id: 1, 
    title: "Network Security Essentials", 
    issuer: "Cisco",
    thumbnail: "/images/certificate/network-security.jpg",
    pdf: "/images/certificate/584541_499270_691_print.pdf"
  },
  { 
    id: 2, 
    title: "CCNA: Introduction to Networks", 
    issuer: "Cisco",
    thumbnail: "/images/certificate/ccna-intro.jpg",
    pdf: "/images/certificate/CCNA-_Introduction_to_Networks_certificate_mronal-afendi04-gmail-com_6f32a772-1d43-4e65-8c44-dba78baf01c7.pdf"
  },
  { 
    id: 3, 
    title: "CCNA: Switching, Routing & Wireless Essentials", 
    issuer: "Cisco",
    thumbnail: "/images/certificate/ccna-switching.jpg",
    pdf: "/images/certificate/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_mronal-afendi04-gmail-com_8c645379-d351-45d6-9668-13df239bb806.pdf"
  },
  { 
    id: 4, 
    title: "Professional Certificate", 
    issuer: "CLMS",
    thumbnail: "/images/certificate/clms-cert.jpg",
    pdf: "/images/certificate/clmsCertificate.pdf"
  },
  { 
    id: 5, 
    title: "Additional Certification", 
    issuer: "Professional",
    thumbnail: "/images/certificate/professional-cert.jpg",
    pdf: "/images/certificate/doc.pdf"
  },
];

export default function Certificates({ dict }: CertificatesProps) {
  return (
    <section id="certificates" className="scroll-mt-14 py-8 md:py-12 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Badge Judul */}
        <div className="text-center mb-12 md:mb-16">
          <h3 className="text-4xl md:text-5xl font-black tracking-tight text-brand-text">
            {dict.title} <span className="text-brand-mint">{dict.accent}</span>.
          </h3>
        </div>

        {/* Grid Sertifikat dengan Thumbnail */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 group">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Card Sertifikat */}
              <div className="relative bg-white border border-brand-text/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group-hover:opacity-60 hover:!opacity-100">
                
                {/* Thumbnail Image - Clickable */}
                <a 
                  href={cert.pdf} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block relative aspect-[4/3] overflow-hidden bg-brand-text/5 cursor-pointer group/img"
                >
                  <img 
                    src={cert.thumbnail} 
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-110"
                  />
                  
                  {/* Overlay saat hover */}
                  <div className="absolute inset-0 bg-brand-text/0 group-hover/img:bg-brand-text/10 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 bg-white/90 p-3 rounded-full">
                      <ExternalLink className="w-6 h-6 text-brand-text" />
                    </div>
                  </div>
                </a>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-black text-brand-text mb-2 line-clamp-2 min-h-[56px]">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-brand-text/60 font-semibold mb-4">
                    {cert.issuer}
                  </p>

                  {/* Button View Certificate */}
                  <a
                    href={cert.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-text text-white text-sm font-bold rounded-xl hover:bg-brand-purple transition-colors duration-300 w-full justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-brand-mint/0 hover:border-brand-mint/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}