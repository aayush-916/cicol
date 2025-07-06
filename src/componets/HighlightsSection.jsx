import { motion } from "framer-motion";
import { BadgeCheck, Boxes, Leaf, Truck, Building2, Tag } from "lucide-react";

const bulletPoints = [
  {
    icon: <BadgeCheck className="w-6 h-6 text-green-600" />,
    text: "Doctor-Prescribed Allopathic Products",
  },
  {
    icon: <Boxes className="w-6 h-6 text-blue-600" />,
    text: "Retailer-Focused Stock Supply System",
  },
  {
    icon: <Leaf className="w-6 h-6 text-emerald-600" />,
    text: "Herbal & FMCG Launching Soon",
  },
  {
    icon: <Truck className="w-6 h-6 text-orange-500" />,
    text: "Nationwide Distribution with District-Level Stockists",
  },
  {
    icon: <Building2 className="w-6 h-6 text-gray-700" />,
    text: "MCA & GST Registered Company",
  },
  {
    icon: <Tag className="w-6 h-6 text-purple-600" />,
    text: "Private Branding/White-Label Support",
  },
];

const HighlightsSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 gap-6">
        {bulletPoints.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            className="flex items-start gap-3"
          >
            {item.icon}
            <p className="text-gray-700 font-medium text-[16px]">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HighlightsSection;
