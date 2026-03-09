export function Imprint() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Impressum</h1>
          <p className="text-gray-400">Rechtliche Informationen und Unternehmensdetails</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="text-gray-400 space-y-2">
                <p><strong className="text-white">Firmenname:</strong> EK Garage GmbH</p>
                <p><strong className="text-white">Anschrift:</strong> Autostraße 123, 12345 Motorstadt, Deutschland</p>
                <p><strong className="text-white">Telefon:</strong> +49 (0) 123 456789</p>
                <p><strong className="text-white">E-Mail:</strong> info@ekgarage.de</p>
              </div>
            </div>

            {/* Management */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Vertreten durch</h2>
              <div className="text-gray-400">
                <p><strong className="text-white">Geschäftsführer:</strong> Michael Schneider</p>
              </div>
            </div>

            {/* Business Registration */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Registereintrag</h2>
              <div className="text-gray-400 space-y-2">
                <p><strong className="text-white">Handelsregister:</strong> HRB 123456</p>
                <p><strong className="text-white">Registergericht:</strong> Amtsgericht Motorstadt</p>
                <p><strong className="text-white">Umsatzsteuer-ID:</strong> DE123456789</p>
              </div>
            </div>

            {/* Responsible for Content */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <div className="text-gray-400">
                <p>Michael Schneider</p>
                <p>EK Garage GmbH</p>
                <p>Autostraße 123</p>
                <p>12345 Motorstadt</p>
                <p>Deutschland</p>
              </div>
            </div>

            {/* Professional Association */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <div className="text-gray-400 space-y-2">
                <p><strong className="text-white">Berufsbezeichnung:</strong> Kfz-Meisterbetrieb</p>
                <p><strong className="text-white">Zuständige Kammer:</strong> Handwerkskammer Motorstadt</p>
                <p><strong className="text-white">Verliehen in:</strong> Deutschland</p>
              </div>
            </div>

            {/* Website Design */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Website Design & Entwicklung</h2>
              <div className="text-gray-400">
                <p>Diese Website wurde entwickelt von <strong className="text-blue-500">EK-Webservice</strong></p>
                <p>Professionelle Web-Lösungen für Unternehmen</p>
                <p className="mt-2">
                  <a href="https://ek-webservice.de" className="text-blue-500 hover:text-blue-400">www.ek-webservice.com</a>
                </p>
              </div>
            </div>

            {/* Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Haftungsausschluss</h2>
              <div className="text-gray-400 space-y-4">
                <div>
                  <h3 className="text-white font-semibold mb-2">Haftung für Inhalte</h3>
                  <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die 
                    Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch 
                    keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG 
                    für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
                    Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, 
                    übermittelte oder gespeicherte fremde Informationen zu überwachen.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Haftung für Links</h3>
                  <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte 
                    wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch 
                    keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der 
                    jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Urheberrecht</h3>
                  <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </div>
            </div>

            {/* EU Dispute Resolution */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Streitschlichtung</h2>
              <div className="text-gray-400">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 ml-1">
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p className="mt-2">
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
              <p className="text-gray-400 mb-4">
                Wenn Sie Fragen zu diesem Impressum oder unseren Dienstleistungen haben, 
                kontaktieren Sie uns gerne:
              </p>
              <div className="text-gray-400 space-y-2">
                <p><strong className="text-white">E-Mail:</strong> info@ekgarage.de</p>
                <p><strong className="text-white">Telefon:</strong> +49 (0) 123 456789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
