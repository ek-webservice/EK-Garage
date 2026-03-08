export function Team() {
  const teamMembers = [
    {
      name: "Michael Schneider",
      position: "Inhaber & Meistertechniker",
      description: "Mit über 20 Jahren Kfz-Erfahrung gründete Michael EK Garage, um Premium-Service in die Gemeinde zu bringen. ASE-Meisterzertifiziert mit Fachwissen in allen Fahrzeugsystemen.",
      image: "https://images.unsplash.com/photo-1642339876183-5a8483586f65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbW90aXZlJTIwc2VydmljZSUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MzAwMjEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "David Müller",
      position: "Leitender Kfz-Techniker",
      description: "David ist spezialisiert auf Diagnosen und elektrische Systeme. Mit 15 Jahren Erfahrung und mehreren Zertifizierungen ist er ein Experte bei der Lösung komplexer Kfz-Probleme.",
      image: "https://images.unsplash.com/photo-1735494630962-15f841f111fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBtZWNoYW5pYyUyMHdvcmtpbmd8ZW58MXx8fHwxNzczMDAyMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Sarah Weber",
      position: "Serviceberaterin",
      description: "Sarah ist Ihre erste Anlaufstelle bei EK Garage. Sie sorgt für klare Kommunikation und koordiniert alle Service-Termine, damit sich jeder Kunde wertgeschätzt und informiert fühlt.",
      image: "https://images.unsplash.com/photo-1771340012378-3c86cb649193?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhdXRvbW90aXZlJTIwdGVjaG5pY2lhbnxlbnwxfHx8fDE3NzMwMDIxMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Thomas Fischer",
      position: "Kfz-Techniker",
      description: "Thomas bringt 10 Jahre praktische Erfahrung in Bremsensystemen, Fahrwerk und allgemeinen Reparaturen mit. Seine Liebe zum Detail stellt sicher, dass jede Arbeit beim ersten Mal richtig erledigt wird.",
      image: "https://images.unsplash.com/photo-1765202663853-5072b1464dd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWNoYW5pYyUyMHRlYW18ZW58MXx8fHwxNzczMDAyMTM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1675034743126-0f250a5fee51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhdXRvJTIwcmVwYWlyJTIwZ2FyYWdlJTIwd29ya3Nob3B8ZW58MXx8fHwxNzczMDAyMTM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="EK Garage Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Unser Team</h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Lernen Sie die zertifizierten Profis kennen, die sich Ihren Kfz-Bedürfnissen widmen
          </p>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Fachwissen, dem Sie vertrauen können
            </h2>
            <p className="text-gray-400 text-lg">
              Unser Team zertifizierter Techniker bringt jahrzehntelange kombinierte Erfahrung 
              und eine echte Leidenschaft für Kfz-Exzellenz mit. Jedes Mitglied engagiert sich 
              für kontinuierliche Weiterbildung und bleibt auf dem neuesten Stand der neuesten 
              Technologien und Techniken in der Kfz-Industrie.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-zinc-900 rounded-lg overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="relative h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-500 font-medium mb-4">{member.position}</p>
                  <p className="text-gray-400">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Was unser Team auszeichnet
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-black p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  Kontinuierliche Weiterbildung
                </h3>
                <p className="text-gray-400">
                  Unsere Techniker nehmen an regelmäßigen Schulungsprogrammen teil, um auf 
                  dem neuesten Stand der neuesten Kfz-Technologien, Diagnosetechniken und 
                  Reparaturmethoden zu bleiben.
                </p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  ASE-Zertifizierungen
                </h3>
                <p className="text-gray-400">
                  Mehrere Teammitglieder besitzen ASE (Automotive Service Excellence) 
                  Zertifizierungen, die ihr Engagement für professionelle Standards und 
                  Fachwissen demonstrieren.
                </p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  Kundenorientierter Ansatz
                </h3>
                <p className="text-gray-400">
                  Wir glauben an transparente Kommunikation und den Aufbau langfristiger 
                  Beziehungen. Jedes Teammitglied widmet sich der Sicherstellung Ihrer 
                  vollständigen Zufriedenheit.
                </p>
              </div>

              <div className="bg-black p-6 rounded-lg border border-white/10">
                <h3 className="text-xl font-semibold mb-3 text-blue-500">
                  Liebe zum Detail
                </h3>
                <p className="text-gray-400">
                  Von der ersten Inspektion bis zur finalen Qualitätskontrolle nähert sich 
                  unser Team jeder Arbeit mit akribischer Liebe zum Detail und beruflichem 
                  Stolz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Interesse an unserem Team beizutreten?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Wir suchen immer nach talentierten, leidenschaftlichen Kfz-Profis, die sich 
              der EK Garage Familie anschließen möchten. Wenn Sie sich für Exzellenz und 
              Kundenzufriedenheit einsetzen, würden wir uns freuen, von Ihnen zu hören.
            </p>
            <a
              href="mailto:karriere@ekgarage.de"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Senden Sie uns Ihren Lebenslauf
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
