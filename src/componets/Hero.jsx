import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-purple-100 py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug"
          >
            Bringing Quality Allopathic & Herbal Formulations <br />
            <span className="text-blue-600">
              to Doctors, Retailers & Stockists Across India
            </span>
          </motion.h1>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-4">
            <motion.a
              href="#partner"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              className="bg-blue-600 text-white px-7 py-3 text-lg rounded-full shadow hover:bg-blue-700 transition"
            >
              Partner with Us
            </motion.a>
            <motion.a
              href="#products"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="bg-purple-600 text-white px-7 py-3 text-lg rounded-full shadow hover:bg-purple-700 transition"
            >
              Explore Products
            </motion.a>
          </div>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="flex-1"
        >
          <img
            src="/herbal-remedies.jpg"
            alt="Pharma Illustration"
            className="
    w-full
    max-w-[460px]
    aspect-[4/3]
    object-cover
    mx-auto
    rounded-2xl
    shadow-lg
  "
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
