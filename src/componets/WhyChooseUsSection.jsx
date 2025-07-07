import { motion } from "framer-motion";
import {
  ThumbsUp,
  MapPin,
  Package,
  Leaf,
  Paintbrush,
  Warehouse,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: <ThumbsUp className="w-7 h-7 text-blue-600" />,
    title: "Doctor-Prescribed Products",
    description: "Focus on prescription-based products that move easily at retail level.",
  },
  {
    icon: <MapPin className="w-7 h-7 text-green-600" />,
    title: "District-wise Stockist Network",
    description: "Efficient regional model ensures deeper distribution and fast access.",
  },
  {
    icon: <Package className="w-7 h-7 text-orange-600" />,
    title: "Market-Ready Allopathic Medicines",
    description: "Fully packaged and compliant products ready for immediate distribution.",
  },
  {
    icon: <Leaf className="w-7 h-7 text-emerald-600" />,
    title: "Allopathic and FMCG Expansion",
    description: "New verticals launching to offer more growth and wellness options.",
  },

  {
    icon: <Warehouse className="w-7 h-7 text-gray-700" />,
    title: "Central Warehousing",
    description: "Nashik-based hub with branch-level logistics across India.",
  },
  {
    icon: <ShieldCheck className="w-7 h-7 text-teal-600" />,
    title: "Govt. Registered Company",
    description: "MCA and GST registered — legal, trusted, and fully verified.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb20"
        >
          Why Choose Us
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-white rounded-2xl shadow p-6 hover:shadow-lg transition"
            >
              <div className="flex items-start gap-3 mb-3">
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
