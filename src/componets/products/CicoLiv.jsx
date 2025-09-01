import { motion } from "framer-motion";

const CicoLivPage = () => {
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
          Cico-Liv Tablets
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
              src="/cico_liv2.jpg" // Save your uploaded image in public folder with this name
              alt="Cico-Liv Tablets"
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
              Liver Health Supplement
            </h2>
            <p className="text-gray-600 text-[15px] leading-relaxed mb-6">
              Cico-Liv Tablets are formulated with natural ingredients to
              support liver health, detoxification, and overall well-being. It
              is recommended in conditions like hepatitis, fatty liver, and
              alcohol-induced liver damage.
            </p>

            {/* Ingredients */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Key Ingredients
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Katuki (Picrorhiza Kurroa)</li>
                <li>Kalmegh (Andrographis paniculata)</li>
                <li>Bhumyamalaki (Phyllanthus niruri)</li>
                <li>Haritaki (Terminalia chebula)</li>
                <li>Bhringraj (Eclipta Alba)</li>
              </ul>
            </div>

            {/* Indications */}
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Indications
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                <li>Hepatitis (A, B, C)</li>
                <li>NAFLD & NASH</li>
                <li>Cholelithiasis</li>
                <li>Alcoholic liver disease</li>
                <li>Pre-cirrhotic condition</li>
                <li>Drug-induced hepatotoxicity</li>
                <li>Liver cell damage due to radiation therapy</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CicoLivPage;
