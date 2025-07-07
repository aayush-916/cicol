import { motion } from "framer-motion";
import { MapPin, Warehouse, Phone, Mail, Clock, Send, MessageCircle, Globe } from "lucide-react";

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


          <p className="mt10">Registered office address : </p>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-400 mt-1" />
            <p>
              <strong>CICOL INDIA PRIVATE LIMITED</strong><br />
              Murlidhar Ramchandra Raut, HNO 44488,Laxmi Nagar, Ojhar, Niphad, Nashik -422206,Maharashtra
            </p>
            
          </div>

          <p className="mt10">Branch office address : </p>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-400 mt-1" />
            <p>
            Plot No-1366, Gandhi Ghat Road, Nai Sarai, Ramgarh Cantt – Jharkhand – 829122
            </p>
            
          </div>
          <div className="flex items-start gap-3 mt20">
            <Warehouse className="w-5 h-5 text-green-400 mt-1" />
            <p>Warehouse: Nashik, Maharashtra</p>
          </div>
          <p className="mt10">CIN: U46497PN2025PTC241057</p>


          <div className="flex items-start gap-3 mt10">
            <Phone className="w-5 h-5 text-yellow-400 mt-1" />
            <p>+91 7643011913</p>
          </div>
          <div className="flex items-start gap-3 mt10">
            <Globe className="w-5 h-5 text-purple-400 mt-1" />
            <p> Website-www.cicolindia.com</p>
          </div>
          <div className="flex items-start gap-3 mt10">
            <Mail className="w-5 h-5 text-red-400 mt-1" />
            <p>cicolindiapvtltd@gmail.com</p>
          </div>

          <div className="flex items-start gap-3 mt10">
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

          <div className="flex items-center gap-3 mt10">
            <Send className="w-5 h-5 text-blue-400" />
            <a href="#contact" className="hover:underline cwhite">
              Inquiry Form
            </a>
          </div>

          <div className="flex items-center gap-3 mt10">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <a
              href="https://wa.me/917643011913"
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
