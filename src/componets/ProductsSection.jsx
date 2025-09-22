import { motion } from "framer-motion";
import {Package, ShoppingBag } from "lucide-react";
import {Link} from 'react-router-dom';

const products = [
  {
    name: "Cico-Vit 30 Capsules",
    category: "Multivitamin",
    mrp: "₹300",
    icon: <img src="/vit2.png" className="w-[200px] h-[150px] text-green-600" />,
    description: "Doctor-recommended energy and immunity booster.",
    link: "/CicoVitPage", 
  },
  {
    name: "Cico-Liv 60 Tablets",
    category: "Liver Care",
    mrp: "₹200",
    icon: <img src="/liv3.png" className="w-[200px] h-[150px] text-green-600" />,
    description: "Liver health supplement for detox and digestion.",
    link: "/CicoLivPage",
  },
  {
    name: "Cico-ZYME Tablets",
    category: "Digestive health",
    mrp: "₹210",
    icon: <img src="/pic4.png" className="w-[200px] h-[150px] text-green-600" />,
    description:
      "Indication-for indigestion and helps in improving digestive health",
    link: "/",
  },
  {
    name: "Cico-CYST Capsules",
    category: "Kidney Care",
    mrp: "₹255",
    icon: <img src="/cyst2.png" className="w-[200px] h-[150px] text-green-600" />,
    description:
      "Kidney Stone, UTI, Urolithiasis ,Crystalluria",
    link: "/",
  },
  {
    name: "Allopathic Products",
    category: "Pharmaceutical",
    mrp: "Coming Soon",
    icon: <Package className="w-[100px] h-[100px] text-blue-600" />,
    description:
      "Doctor-recommended allopathic medicines like multivitamins and liver care tablets launching soon.",
    link: "/",
  },
  {
    name: "FMCG Range",
    category: "Health & Daily Use",
    mrp: "Coming Soon",
    icon: <ShoppingBag className="w-[100px] h-[100px] text-purple-600" />,
    description:
      "Fast-moving products like tonics, balms, and wellness drinks.",
    link: "/",
  },
];

const ProductsSection = () => {
  return (
    <section
      className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-20 px-4 sm:px-10 lg:px-20"
      id="products"
    >
      <div className="max-w-7xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-20"
        >
          Our Products
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full hover:shadow-xl transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="flex justify-center mb-4">{product.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 text-center">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                <p className="text-sm font-medium text-blue-600 mb-2">
                  {product.mrp}
                </p>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Read More Button at the Bottom */}
              <div className="mt-6 flex justify-center">
                <a
                  className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition"
                >
                  <Link to={product.link}>Read More</Link>
                  
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
