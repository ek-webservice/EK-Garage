import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-white/10">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">EK</span>
              <span className="text-blue-500"> Garage</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Kfz-Service, dem Sie vertrauen können. Fachkundige Techniker, moderne Technologie und ehrlicher Service seit 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Startseite
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Über Uns
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 text-sm">
                Fahrzeuginspektion
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 text-sm">
                Wartungsservice
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 text-sm">
                  Bremsenservice
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 text-sm">
                Reifenservice
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 text-sm">
                Fahrzeugdiagnose
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontaktinformationen</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Phone size={16} className="mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <Mail size={16} className="mt-1 flex-shrink-0" />
                <span>info@ekgarage.com</span>
              </li>
              <li className="flex items-start space-x-2 text-gray-400 text-sm">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>123 Auto Street, Motor City, MC 12345</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2026 EK Garage. Alle Rechte vorbehalten. Website von{" "}
            <span className="text-blue-500 font-medium">EK-Webservice</span>
          </p>
          <div className="flex space-x-6">
            <Link to="/imprint" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Impressum
            </Link>
            <Link to="/privacy" className="text-gray-400 hover:text-blue-500 transition-colors text-sm">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}