import { motion } from "framer-motion";
import {
  UserPlus,
  Briefcase,
  Map,
  Flower2,
  BadgePercent,
  Truck,
  Megaphone,
  Tag,
} from "lucide-react";

const invited = [
  { icon: <UserPlus className="w-6 h-6 text-blue-600" />, text: "Doctors who want their own branded medicines" },
  { icon: <Briefcase className="w-6 h-6 text-green-600" />, text: "Chemists who want fast-selling products" },
  { icon: <Map className="w-6 h-6 text-orange-500" />, text: "Stockists interested in district-level supply rights" },
  { icon: <Flower2 className="w-6 h-6 text-purple-600" />, text: "Healthcare entrepreneurs in Herbal/FMCG" },
];

const benefits = [
  { icon: <Tag className="w-6 h-6 text-blue-600" />, text: "Private branding" },
  { icon: <BadgePercent className="w-6 h-6 text-green-600" />, text: "Margins & MOQs tailored to you" },
  { icon: <Truck className="w-6 h-6 text-orange-500" />, text: "Logistics & supply from Nashik warehouse" },
  { icon: <Megaphone className="w-6 h-6 text-purple-600" />, text: "Promotional help for product push" },
];

const PartnerWithUsSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-16 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb20 text-3xl md:text-4xl font-bold text-gray-800"
        >
          🤝 Partner With Us
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 text-left">
          {/* Who We Invite */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 mb20"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb20">We Invite:</h3>
            <ul className="space-y-6 ">
              {invited.map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="pt-1">{item.icon}</div>
                  <p className="text-gray-700 text-base">{item.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-gray-700 mb20">Benefits:</h3>
            <ul className="space-y-6">
              {benefits.map((item, index) => (
                <li key={index} className="flex gap-4 items-start">
                  <div className="pt-1">{item.icon}</div>
                  <p className="text-gray-700 text-base">{item.text}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-6">
          <motion.a
            href="#partner-form"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-blue-600 text-white px-7 py-3 text-lg rounded-full shadow hover:bg-blue-700 transition"
          >
            Become a Partner
          </motion.a>
          <motion.a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-green-600 text-white px-7 py-3 text-lg rounded-full shadow hover:bg-green-700 transition"
          >
            Talk on WhatsApp
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default PartnerWithUsSection;
