import { motion } from "framer-motion";

const specialties = [
  {
    title: "Herbal Products",
    description:
      "Our herbal product line is rooted in traditional Indian medicine, offering natural remedies to support immunity, digestion, pain relief, and overall wellness. Blended with scientifically validated ingredients, our herbal range is crafted for effectiveness without side effects. We're launching a full line of syrups, balms, and tonics to promote holistic health across all age groups.",
    image: "/ayurveda2.jpg", // Add your herbal image path
  },
  {
    title: "Allopathic Products",
    description:
      "Our allopathic formulations are created under strict quality protocols and are recommended by healthcare professionals across India. These include multivitamin capsules and liver care tablets that are fully packaged and market-ready. CICOL ensures doctor-trusted solutions backed by proper certifications and an efficient distribution model.",
    image: "/Allopathic.jpeg", // Add your allopathic image path
  },
  {
    title: "FMCG Range",
    description:
      "We're introducing a Fast-Moving Consumer Goods (FMCG) segment including wellness drinks, over-the-counter pain relief, and immunity boosters. Our FMCG line aims to serve everyday health needs with quality, affordability, and mass-market appeal—making CICOL a one-stop solution for pharma and wellness products.",
    image: "/fmcg.jpg", // Add your FMCG image path
  },
];

const OurSpecialtySection = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto text-center space-y-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb20"
        >
          Our Specialty
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {specialties.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <div className="w-full h-[200px] bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialtySection;
