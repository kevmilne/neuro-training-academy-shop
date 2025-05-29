
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-green-500/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Shield className="h-8 w-8 text-green-400" />
              <div>
                <h3 className="text-xl font-bold text-white">Neuro Training Ltd</h3>
                <p className="text-xs text-green-400">Offensive Security Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Leading provider of advanced offensive security training, specializing in 
              mainframe penetration testing and cyber threat intelligence.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <Mail className="h-5 w-5" />
              <Phone className="h-5 w-5" />
              <MapPin className="h-5 w-5" />
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Training</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#courses" className="hover:text-green-400 transition-colors">Mainframe Penetration Testing</a></li>
              <li><a href="#courses" className="hover:text-green-400 transition-colors">Cyber Threat Intelligence</a></li>
              <li><a href="#courses" className="hover:text-green-400 transition-colors">APT Analysis</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Corporate Training</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Neuro Training Ltd. All rights reserved. | 
            <span className="text-green-400"> Advancing Cybersecurity Through Education</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
