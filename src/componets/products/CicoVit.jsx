import { motion } from "framer-motion";

const CicoVitPage = () => {
  return (
    <section className="bg-gradient-to-br from-white via-yellow-50 to-green-100 py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12"
        >
          Cico-Vit Capsules
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
              src="/cico_vit2.jpg" 
              alt="Cico-Vit Capsules"
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
              Multivitamin & Multimineral Supplement
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Cico-Vit Capsules provide countless health benefits in a single
              dose. Enriched with natural iron, calcium, and vitamins, it helps
              boost stamina, repair tissues, and strengthen the immune system.
            </p>

            {/* Key Benefits */}
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                Key Benefits
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Anti-oxidant that fights free radicals damaging effect</li>
                <li>Improves physical & mental stamina</li>
                <li>Enhances metabolic processes</li>
                <li>Repairs wear & tear tissues</li>
                <li>Boosts immune system</li>
                <li>Helps in Iron & Calcium deficiency</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CicoVitPage;
