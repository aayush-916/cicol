import { motion } from "framer-motion";

const CicoArthoPage = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Cico-Artho Capsules
        </motion.h1>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <img
              src="/artho.jpg" 
              alt="Cico-Artho Capsules"
              className="rounded-2xl shadow-lg w-full max-w-md"
            />
          </motion.div>

          {/* Product Details */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col justify-between"
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Joint Pain & Arthritis Support
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Cico-Artho Capsules are formulated to provide dual-action support 
              for joint pain, inflammation, and cartilage protection. It helps 
              manage osteoarthritis, rheumatoid arthritis, back pain, and other 
              joint-related issues while offering long-term safety and 
              gastro-protection.
            </p>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Key Ingredients
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Nirgundi</li>
                <li>Guggulu</li>
                <li>Bala</li>
                <li>Devadaru</li>
                <li>Dasamoola</li>
                <li>Ashwagandha</li>
              </ul>
            </div>

            {/* Indications */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Indications
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Osteoarthritis</li>
                <li>Rheumatoid arthritis</li>
                <li>Arthralgia (joint pain)</li>
                <li>Back pain</li>
              </ul>
            </div>

            {/* Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Key Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Anti-inflammatory dual action (COX & LOX pathways)</li>
                <li>Inhibits PGE2 synthase for pain relief</li>
                <li>Cartilage protection & joint mobility support</li>
                <li>Gastro-protective action</li>
                <li>Reduces cytokines & prevents cartilage degradation</li>
                <li>Potent antioxidant & immunomodulatory effects</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CicoArthoPage;
