import { motion } from "framer-motion";
import { Pill, HeartPulse, Leaf, ShoppingBag } from "lucide-react";

const products = [
  {
    name: "Cico-Vit 30 Capsules",
    category: "Multivitamin",
    mrp: "₹300",
    icon: <Pill className="w-8 h-8 text-blue-600" />,
    description: "Doctor-recommended energy and immunity booster.",
  },
  {
    name: "Cico-Liv 60 Tablets",
    category: "Liver Care",
    mrp: "₹200",
    icon: <HeartPulse className="w-8 h-8 text-green-600" />,
    description: "Liver health supplement for detox and digestion.",
  },
  {
    name: "Herbal Products (Nov 2025)",
    category: "Herbal Wellness",
    mrp: "Coming Soon",
    icon: <Leaf className="w-8 h-8 text-emerald-600" />,
    description: "Natural formulations to support immunity and wellness.",
  },
  {
    name: "FMCG Range (Nov 2025)",
    category: "Health & Daily Use",
    mrp: "Coming Soon",
    icon: <ShoppingBag className="w-8 h-8 text-purple-600" />,
    description: "Fast-moving products like tonics, balms, and wellness drinks.",
  },
];

const ProductsSection = () => {
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
          Our Products
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-left hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center mb10">{product.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{product.category}</p>
              <p className="text-sm font-medium text-blue-600 mb-2">{product.mrp}</p>
              <p className="text-gray-600 text-[15px] leading-relaxed">{product.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
