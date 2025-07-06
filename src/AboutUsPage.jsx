import { motion } from "framer-motion";
import { Landmark, Eye, Target } from "lucide-react";

const AboutUsPage = () => {
  return (
    <div className="bg-white min-h-screen py-20 px-4 sm:px-10 lg:px-24">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb20"
        >
          About Us
        </motion.h1>

        {/* Main Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 text-[17px] leading-relaxed text-justify"
        >
          CICOL INDIA PRIVATE LIMITED is a professionally registered pharmaceutical marketing company
          focused on reshaping India’s healthcare distribution system through a doctor-patient-driven
          approach and district-level stockist models. Our core offerings include a range of high-quality,
          doctor-recommended allopathic products like multivitamin capsules and liver care tablets.
          <br /><br />
          With the upcoming launch of our Herbal and FMCG verticals in November 2025, we are committed to
          providing affordable wellness solutions that combine tradition and innovation. Backed by a central
          warehouse in Nashik, Maharashtra, and supported by regional centers like Ramgarh (Jharkhand), CICOL
          ensures fast, region-specific logistics.
          <br /><br />
          We empower doctors, chemists, and distributors with custom white-label branding, seamless supply
          chains, and strong marketing support—making it easier to grow together in a rapidly evolving industry.
        </motion.p>

        {/* Mission + Vision Section */}
        <div className="grid md:grid-cols-2 gap-12 mt20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50 p-6 rounded-2xl shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <Target className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              To empower doctors, chemists, and distributors with reliable partnerships, quality formulations,
              private branding, and end-to-end support — ensuring consistent growth in the healthcare market.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-purple-50 p-6 rounded-2xl shadow text-center"
          >
            <div className="flex justify-center mb-4">
              <Eye className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-700 text-[15px] leading-relaxed">
              To make high-quality, affordable medicines accessible in every Indian district while leading the
              future of herbal and wellness-based healthcare solutions with integrity and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
