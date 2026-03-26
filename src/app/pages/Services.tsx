import {useNavigate} from "react-router-dom";
import {Activity, ArrowRight, CircleDot, ClipboardCheck, Droplet, Gauge, Wind, Wrench} from "lucide-react";


export function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <ClipboardCheck className="w-12 h-12" />,
      title: "Fahrzeuginspektion",
      description: "Umfassende Mehrpunkt-Inspektion zur Erkennung potenzieller Probleme, bevor sie zu größeren Schäden werden. Unsere gründliche Prüfung deckt alle kritischen Systeme ab.",
      price: "ab 89€",
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Wartungsservice",
      description: "Regelmäßige Wartungspakete, um Ihr Fahrzeug reibungslos laufen zu lassen. Beinhaltet Flüssigkeitsprüfungen, Filterwechsel und wesentliche Systemüberprüfungen.",
      price: "ab 149€",
    },
    {
      icon: <Droplet className="w-12 h-12" />,
      title: "Ölwechsel",
      description: "Schneller und professioneller Ölwechsel-Service mit hochwertigen Ölen. Wir helfen Ihnen, optimale Motorleistung und Langlebigkeit zu erhalten.",
      price: "ab 69€",
    },
    {
      icon: <CircleDot className="w-12 h-12" />,
      title: "Bremsenservice",
      description: "Kompletter Bremsensystem-Service einschließlich Belag- und Scheibenwechsel, Flüssigkeitswechsel und Sicherheitsinspektionen. Ihre Sicherheit steht an erster Stelle.",
      price: "ab 179€",
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Reifenservice",
      description: "Professionelle Reifenmontage, Rotation, Auswuchtung und Ausrichtung. Wir sorgen für optimale Reifenleistung und Langlebigkeit.",
      price: "ab 49€",
    },
    {
      icon: <Gauge className="w-12 h-12" />,
      title: "Fahrzeugdiagnose",
      description: "Modernste Computerdiagnose zur präzisen Problemerkennung. Unsere hochmoderne Ausrüstung lokalisiert Probleme schnell und effizient.",
      price: "ab 79€",
    },
    {
      icon: <Wind className="w-12 h-12" />,
      title: "Klimaanlagen-Service",
      description: "Reparatur, Befüllung und Wartung von Klimaanlagen. Bleiben Sie das ganze Jahr über komfortabel mit unserem fachkundigen Klimaservice.",
      price: "ab 99€",
    },
    {
      icon: <Wrench className="w-12 h-12" />,
      title: "Allgemeine Reparaturen",
      description: "Umfassende Reparaturleistungen für alle Fahrzeugsysteme. Von kleineren Reparaturen bis hin zu größeren Überholungen – wir erledigen alles mit Fachwissen.",
      price: "auf Anfrage",
    },
  ];

  const handleServiceClick = (serviceName: string) => {
    navigate("/contact", { state: { selectedService: serviceName } });
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1771340012378-3c86cb649193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdXRvbW90aXZlJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NzMwMDIxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Professioneller Kfz-Techniker"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Unsere Leistungen</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Umfassende Kfz-Lösungen, maßgeschneidert auf Ihre Bedürfnisse
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Was wir anbieten</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fachkundige Kfz-Dienstleistungen mit Präzision und Sorgfalt ausgeführt
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-8 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group flex flex-col"
              >
                <div className="text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 flex-grow">{service.description}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-500 text-sm">Preis:</span>
                    <span className="text-blue-500 font-semibold text-lg">{service.price}</span>
                  </div>
                  <button
                    onClick={() => handleServiceClick(service.title)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg transition-colors font-medium inline-flex items-center justify-center"
                  >
                    Jetzt anfragen
                    <ArrowRight className="ml-2" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Premium-Service, jedes Mal
              </h2>
              <p className="text-gray-400 mb-4">
                Bei EK Garage reparieren wir nicht nur Autos – wir bieten umfassende 
                Kfz-Pflege, die Ihr Fahrzeug in Bestform hält. Unsere zertifizierten 
                Techniker verwenden nur Qualitätsteile und bewährte Methoden.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-400">Zertifizierte und erfahrene Techniker</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-400">Modernste Diagnoseausrüstung</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-400">Qualitätsteile und Materialien</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-400">Transparente Preise ohne versteckte Gebühren</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  </div>
                  <span className="text-gray-400">Umfassende Garantie auf alle Arbeiten</span>
                </li>
              </ul>
            </div>
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1642339876183-5a8483586f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwc2VydmljZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzAwMjEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Kfz-Service Profi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Service für Ihr Fahrzeug benötigt?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren oder ein Angebot für unsere Dienstleistungen zu erhalten.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Jetzt kontaktieren
            <ArrowRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}
