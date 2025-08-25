import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const certifications = [
  "MCA Registered (CIN: U46497PN2025PTC241057)",
  "GST Registered (GSTIN: 20AAMCC6552C1Z1)",
  "DIN Verified Directors",
  "PAN & TAN Available",
  "WHO-GMP Partners for Manufacturing",
  "Documents available on request for partners",
  "ISO 9001 :  2015 Quality Management Systems",
];

const CertificationsSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb20"
        >
          Certifications & Licenses
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {certifications.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex items-start gap-3"
            >
              <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
              <p className="text-gray-700 text-[16px] font-medium">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
