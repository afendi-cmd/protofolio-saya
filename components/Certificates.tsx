"use client";

import { motion } from "framer-motion";
import { FileText, Download } from "lucide-react";

interface CertificatesProps {
  dict: {
    title: string;
    accent: string;
  };
}

// Data sertifikat dengan link PDF
const certificates = [
  { 
    id: 1, 
    title: "Network Security Essentials", 
    issuer: "Cisco",
    file: "/images/certificate/584541_499270_691_print.pdf"
  },
  { 
    id: 2, 
    title: "CCNA: Introduction to Networks", 
    issuer: "Cisco",
    file: "/images/certificate/CCNA-_Introduction_to_Networks_certificate_mronal-afendi04-gmail-com_6f32a772-1d43-4e65-8c44-dba78baf01c7.pdf"
  },
  { 
    id: 3, 
    title: "CCNA: Switching, Routing & Wireless Essentials", 
    issuer: "Cisco",
    file: "/images/certificate/CCNA-_Switching-_Routing-_and_Wireless_Essentials_certificate_mronal-afendi04-gmail-com_8c645379-d351-45d6-9668-13df239bb806.pdf"
  },
  { 
    id: 4, 
    title: "Professional Certificate", 
    issuer: "CLMS",
    file: "/images/certificate/clmsCertificate.pdf"
  },
  { 
    id: 5, 
    title: "Additional Certification", 
    issuer: "Professional",
    file: "/images/certificate/doc.pdf"
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

        {/* Grid Sertifikat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Card Sertifikat */}
              <div className="relative group bg-white border border-brand-text/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                
                {/* Icon Area */}
                <div className="bg-gradient-to-br from-brand-mint/20 to-brand-blue/20 p-8 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/80 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-10 h-10 text-brand-text" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-black text-brand-text mb-2 line-clamp-2 min-h-[56px]">
                    {cert.title}
                  </h4>
                  <p className="text-sm text-brand-text/60 font-semibold mb-4">
                    {cert.issuer}
                  </p>

                  {/* Button Download */}
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-text text-white text-sm font-bold rounded-xl hover:bg-brand-purple transition-colors duration-300 w-full justify-center"
                  >
                    <Download className="w-4 h-4" />
                    View Certificate
                  </a>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-brand-mint/0 group-hover:border-brand-mint/30 rounded-2xl transition-colors duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}