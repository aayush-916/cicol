import { motion } from "framer-motion";

const InquiryFormSection = () => {
  return (
    <div className="cen" id="inquiry-form">

    
    <section className="md:w-[1000px] bg-white py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-3xl mx-auto text-center space-y-12">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb20"
        >
          📌 Franchise / Inquiry Form
        </motion.h2>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-50 to-purple-100 p-8 rounded-2xl shadow-lg space-y-6 text-left"
        >
          {/* Name */}
          <div>
            <label className="block font-medium text-gray-700 mt10">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium text-gray-700 mt10">Phone Number</label>
            <input
              type="tel"
              placeholder="10-digit number"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* City & District */}
          <div>
            <label className="block font-medium text-gray-700 mt10">City & District</label>
            <input
              type="text"
              placeholder="City / District"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Type Dropdown */}
          <div>
            <label className="block font-medium text-gray-700 mt10">Type</label>
            <select
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            >
              <option value="">Select</option>
              <option value="Doctor">Doctor</option>
              <option value="Chemist">Chemist</option>
              <option value="Distributor">Distributor</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="block font-medium text-gray-700 mt10">Message</label>
            <textarea
              placeholder="Write your message here..."
              rows="4"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg shadow hover:bg-blue-700 transition"
            >
              Submit Inquiry
            </button>
          </div>
        </motion.form>
      </div>
    </section>
    </div>
  );
};

export default InquiryFormSection;
