import {Award, Heart, Shield, Zap} from "lucide-react";

export function About() {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Zuverlässigkeit",
      description: "Wir stehen zu unserer Arbeit mit Qualitätsgarantien und ehrlichem Service, auf den Sie zählen können.",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Fachkundige Arbeit",
      description: "Unsere zertifizierten Techniker bringen Fachwissen und Präzision in jeden Service ein.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Moderne Technologie",
      description: "Wir investieren in die neueste Diagnose- und Reparaturausrüstung, um Sie besser zu bedienen.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Kundenzufriedenheit",
      description: "Ihre Zufriedenheit ist unsere Priorität. Wir gehen die Extrameile, um Ihre Erwartungen zu übertreffen.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1735494630962-15f841f111fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBtZWNoYW5pYyUyMHdvcmtpbmd8ZW58MXx8fHwxNzczMDAyMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Luxus-Auto Mechaniker bei der Arbeit"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Über EK Garage</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Ihr vertrauenswürdiger Partner für Premium Kfz-Service seit 2010
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-gray-400 mb-4">
                EK Garage wurde 2010 mit einer einfachen Mission gegründet: Premium-Kfz-Service 
                anzubieten, dem Kunden wirklich vertrauen können. Was als kleine Werkstatt begann, 
                hat sich zu einem Full-Service-Betrieb entwickelt, aber unser Engagement für 
                Qualität ist nie gewichen.
              </p>
              <p className="text-gray-400 mb-4">
                Im Laufe der Jahre haben wir unseren Ruf auf Fachwissen, Ehrlichkeit und 
                außergewöhnlichem Kundenservice aufgebaut. Jedes Fahrzeug, das unsere Werkstatt 
                betritt, erhält die gleiche akribische Aufmerksamkeit für Details, ob es sich 
                um einen routinemäßigen Ölwechsel oder eine komplexe Motorreparatur handelt.
              </p>
              <p className="text-gray-400">
                Heute sind wir stolz darauf, unsere Gemeinschaft mit modernster Ausrüstung, 
                zertifizierten Technikern und einem Engagement für Kfz-Exzellenz zu bedienen, 
                das uns auszeichnet.
              </p>
            </div>
            <div className="relative h-[450px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1771340742493-52fbd5476ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBtYWludGVuYW5jZSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcyOTYwOTIzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Auto-Wartungsservice"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Werte</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Die Prinzipien, die alles leiten, was wir tun
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-zinc-900 p-6 rounded-lg border border-white/10 hover:border-blue-500/50 transition-all"
              >
                <div className="text-blue-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Image Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1662079043272-5feaaadf63a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBkaWFnbm9zdGljJTIwZXF1aXBtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzMwMDIxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Auto-Diagnoseausrüstung"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Modernste Einrichtungen
              </h2>
              <p className="text-gray-400 mb-4">
                Unsere moderne Werkstatt ist mit der neuesten Diagnose- und Reparaturtechnologie 
                ausgestattet, die es uns ermöglicht, alle Marken und Modelle mit Präzision und 
                Effizienz zu warten.
              </p>
              <p className="text-gray-400 mb-4">
                Wir investieren kontinuierlich in fortschrittliche Ausrüstung und Schulungen, 
                um sicherzustellen, dass unser Team über die Werkzeuge verfügt, die es braucht, 
                um außergewöhnliche Ergebnisse zu liefern. Von computergestützter Diagnose bis 
                hin zu spezialisierter Reparaturausrüstung haben wir alles, was erforderlich ist, 
                um Ihr Fahrzeug in Bestform zu halten.
              </p>
              <p className="text-gray-400">
                Unsere Einrichtungen kombinieren modernste Technologie mit einem sauberen, 
                organisierten Arbeitsbereich, der unser Engagement für Professionalität und 
                Qualität widerspiegelt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Warum Kunden EK Garage vertrauen
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Wir haben unseren Ruf durch die konsequente Bereitstellung von Qualitätsservice, 
              ehrlicher Kommunikation und echter Fürsorge für unsere Kunden und ihre Fahrzeuge 
              verdient. Wenn Sie EK Garage wählen, wählen Sie einen Partner, der Ihr Auto wie 
              sein eigenes behandelt.
            </p>
            <div className="grid sm:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">15+</div>
                <div className="text-gray-400">Jahre Erfahrung</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">5.000+</div>
                <div className="text-gray-400">Gewartete Fahrzeuge</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-500 mb-2">98%</div>
                <div className="text-gray-400">Kundenzufriedenheit</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
