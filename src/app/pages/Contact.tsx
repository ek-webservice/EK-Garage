import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  const location = useLocation();
  const selectedService = (location.state as { selectedService?: string })?.selectedService;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: selectedService || "",
    message: "",
  });

  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const serviceOptions = [
    "Fahrzeuginspektion",
    "Wartungsservice",
    "Ölwechsel",
    "Bremsenservice",
    "Reifenservice",
    "Fahrzeugdiagnose",
    "Klimaanlagen-Service",
    "Allgemeine Reparaturen",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Nachricht! Wir melden uns bald bei Ihnen.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1753281797108-9d294df6504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJhZ2UlMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzMwMDIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="EK Garage kontaktieren"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Kontakt</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Kontaktieren Sie unser Team für Service-Anfragen oder Terminvereinbarungen
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Phone */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Telefon</h3>
                    <p className="text-gray-400 text-sm mb-1">+49 (0) 123 456789</p>
                    <p className="text-gray-500 text-xs">Mo-Fr: 8:00 - 18:00 Uhr</p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">E-Mail</h3>
                    <p className="text-gray-400 text-sm mb-1">info@ekgarage.de</p>
                    <p className="text-gray-500 text-xs">Antwort innerhalb von 24 Stunden</p>
                  </div>
                </div>
              </div>

              {/* Location */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Standort</h3>
                    <p className="text-gray-400 text-sm">
                      Autostraße 123<br />
                      12345 Motorstadt<br />
                      Deutschland
                    </p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="text-blue-500" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">Öffnungszeiten</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Montag - Freitag</span>
                        <span className="text-gray-300">8:00 - 18:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Samstag</span>
                        <span className="text-gray-300">9:00 - 16:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Sonntag</span>
                        <span className="text-gray-300">Geschlossen</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900 p-8 rounded-lg border border-white/10">
                <h2 className="text-2xl font-bold mb-6">Senden Sie uns eine Nachricht</h2>
                {selectedService && (
                  <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <p className="text-sm text-blue-400">
                      <strong>Ausgewählte Leistung:</strong> {selectedService}
                    </p>
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Ihr Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        placeholder="Max Mustermann"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        E-Mail-Adresse *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        placeholder="max@beispiel.de"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Telefonnummer
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                        placeholder="+49 (0) 123 456789"
                      />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Gewünschte Leistung *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors text-white"
                      >
                        <option value="">Bitte wählen Sie eine Leistung</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                        <option value="Sonstiges">Sonstiges / Beratung</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Ihre Nachricht *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-black border border-white/10 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors resize-none text-white"
                      placeholder="Beschreiben Sie Ihr Fahrzeug und Ihren Service-Bedarf..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full md:w-auto px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="bg-zinc-800 h-96 rounded-lg flex items-center justify-center border border-white/10">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-blue-500" size={48} />
              <p className="text-gray-400">Kartenstandort</p>
              <p className="text-sm text-gray-500 mt-2">Autostraße 123, 12345 Motorstadt</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
