import { Link } from "react-router";
import { ArrowRight, Shield, Award, Users, Wrench, Gauge, Droplet, Wind } from "lucide-react";

export function Home() {
  const services = [
    {
      icon: <Gauge className="w-8 h-8" />,
      title: "Fahrzeugdiagnose",
      description: "Modernste Computerdiagnose für präzise Problemerkennung",
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Allgemeine Reparaturen",
      description: "Umfassende Reparaturleistungen für alle Fahrzeugtypen",
    },
    {
      icon: <Droplet className="w-8 h-8" />,
      title: "Ölwechsel",
      description: "Schneller und professioneller Ölwechsel-Service",
    },
    {
      icon: <Wind className="w-8 h-8" />,
      title: "Klimaanlagen-Service",
      description: "Reparatur und Wartung von Klimaanlagen",
    },
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: "Zuverlässigkeit",
      description: "Vertrauenswürdiger Service mit garantierter Qualitätsarbeit",
    },
    {
      icon: <Award className="w-12 h-12 text-blue-500" />,
      title: "Fachwissen",
      description: "Zertifizierte Techniker mit jahrelanger Erfahrung",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "Kundenfokus",
      description: "Bestrebt, Kundenerwartungen zu übertreffen",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] lg:h-[800px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1675034743126-0f250a5fee51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvJTIwcmVwYWlyJTIwZ2FyYWdlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzczMDAyMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Moderne Autowerkstatt"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Kfz-Service, dem Sie vertrauen können
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Fachkundige Techniker, modernste Technologie und ehrlicher Service. 
              Erleben Sie den Unterschied bei EK Garage, wo Ihr Fahrzeug die 
              Premium-Pflege erhält, die es verdient.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Leistungen ansehen
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Willkommen bei EK Garage
              </h2>
              <p className="text-gray-400 mb-4">
                Seit 2010 ist EK Garage die vertrauenswürdige Wahl für Kfz-Service 
                und Reparaturen in unserer Region. Wir kombinieren traditionelles 
                Handwerk mit moderner Technologie, um außergewöhnliche Ergebnisse zu liefern.
              </p>
              <p className="text-gray-400 mb-6">
                Unser Team zertifizierter Techniker verpflichtet sich zu höchsten 
                Qualitäts- und Kundenservice-Standards. Ob routinemäßige Wartung oder 
                komplexe Reparaturen – wir behandeln jedes Fahrzeug mit der Sorgfalt 
                und Aufmerksamkeit, die es verdient.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors font-medium"
              >
                Mehr über uns erfahren
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1753281797108-9d294df6504e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnYXJhZ2UlMjBpbnRlcmlvciUyMGVxdWlwbWVudHxlbnwxfHx8fDE3NzMwMDIxMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Moderne Werkstattausstattung"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Leistungen</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Umfassende Kfz-Lösungen, maßgeschneidert auf Ihre Bedürfnisse
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="text-blue-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Alle Leistungen ansehen
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Warum EK Garage</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Erleben Sie den Unterschied, den Qualität, Fachwissen und Engagement ausmachen
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500/10 rounded-full mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1765202663853-5072b1464dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWNoYW5pYyUyMHRlYW18ZW58MXx8fHwxNzczMDAyMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professionelles Mechaniker-Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lernen Sie unser Expertenteam kennen
              </h2>
              <p className="text-gray-400 mb-4">
                Unsere zertifizierten Techniker bringen jahrzehntelange kombinierte 
                Erfahrung in jede Arbeit ein. Jedes Teammitglied engagiert sich für 
                kontinuierliche Weiterbildung und bleibt auf dem neuesten Stand der 
                Kfz-Technologien.
              </p>
              <p className="text-gray-400 mb-6">
                Von routinemäßiger Wartung bis hin zu komplexen Diagnosen – unser Team 
                verfügt über das Fachwissen und die Hingabe, Ihr Fahrzeug in bestem 
                Zustand zu halten.
              </p>
              <Link
                to="/team"
                className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors font-medium"
              >
                Team kennenlernen
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bereit für Premium-Service?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Vereinbaren Sie noch heute einen Termin und entdecken Sie, warum Kunden 
            EK Garage für alle ihre Kfz-Bedürfnisse vertrauen.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            Jetzt kontaktieren
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
