import { motion } from "framer-motion";
import { MapPin, Warehouse, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">📞 Contact Us</h2>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-400 mt-1" />
            <p>
              <strong>CICOL INDIA PRIVATE LIMITED</strong><br />
              Plot No-1366, Gandhi Ghat Road, Nai Sarai, Ramgarh Cantt – Jharkhand – 829122
            </p>
          </div>

          <div className="flex items-start gap-3">
            <Warehouse className="w-5 h-5 text-green-400 mt-1" />
            <p>Head Warehouse: Nashik, Maharashtra</p>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-yellow-400 mt-1" />
            <p>+91-XXXXXXXXXX (Phone & WhatsApp)</p>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-red-400 mt-1" />
            <p>info@cicolindia.com</p>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-purple-400 mt-1" />
            <p>Mon–Sat | 9:30 AM – 6:30 PM</p>
          </div>
        </motion.div>

        {/* Quick Links / CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-bold">💬 Quick Access</h2>

          <div className="flex items-center gap-3">
            <Send className="w-5 h-5 text-blue-400" />
            <a href="#inquiry-form" className="hover:underline cwhite">
              Inquiry Form
            </a>
          </div>

          <div className="flex items-center gap-3">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cwhite"
            >
              WhatsApp Chat
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} CICOL India Pvt. Ltd. — All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterSection;
