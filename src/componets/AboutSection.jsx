import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text */}
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            About CICOL India Pvt. Ltd.
          </h2>
          <p className="text-gray-700 leading-relaxed text-[18px] about_text">
            CICOL INDIA PRIVATE LIMITED is a government-registered pharmaceutical marketing company
            dedicated to improving healthcare access across India. Our approach combines doctor-patient-focused
            strategies with a powerful stockist and distribution network. We currently specialize in
            doctor-recommended allopathic products such as multivitamin capsules and liver care tablets—
            formulated to meet daily wellness needs. With our nationwide expansion plans, we’re also launching
            a range of herbal and FMCG wellness products by November. Our operations are powered through our
            central warehouse in Nashik, Maharashtra, with regional centers like Ramgarh in Jharkhand that
            ensure seamless delivery and support. At CICOL, we prioritize reliable pharma partnerships,
            region-specific branding, and scalable supply chains—enabling doctors, chemists, and distributors
            to grow together with us.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <img
            src="/aboutpic2.jpg" // Replace with actual image
            alt="About CICOL"
            className="w-full max-w-[480px] aspect-[4/3] object-cover mx-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
