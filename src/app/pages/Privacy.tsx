export function Privacy() {
  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-zinc-900">
        <div className="container mx-auto px-4 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Datenschutzerklärung</h1>
          <p className="text-gray-400">Wie wir Ihre Informationen sammeln, verwenden und schützen</p>
          <p className="text-sm text-gray-500 mt-2">Stand: 8. März 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold mb-4">1. Datenschutz auf einen Blick</h2>
              <div className="text-gray-400 space-y-4">
                <h3 className="text-white font-semibold">Allgemeine Hinweise</h3>
                <p>
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren 
                  personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene 
                  Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                </p>
              </div>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-bold mb-4">2. Datenerfassung auf dieser Website</h2>
              <div className="space-y-4 text-gray-400">
                <div>
                  <h3 className="text-white font-semibold mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                  <p>
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                    Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Wie erfassen wir Ihre Daten?</h3>
                  <p className="mb-2">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                    Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
                  </p>
                  <p>
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der 
                    Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten 
                    (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Wofür nutzen wir Ihre Daten?</h3>
                  <p>
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website 
                    zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                </div>
              </div>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">3. Ihre Rechte</h2>
              <div className="text-gray-400 space-y-2">
                <p>Sie haben jederzeit das Recht:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Auskunft über Ihre bei uns gespeicherten personenbezogenen Daten zu erhalten</li>
                  <li>Berichtigung unrichtiger personenbezogener Daten zu verlangen</li>
                  <li>Löschung Ihrer bei uns gespeicherten Daten zu verlangen</li>
                  <li>Einschränkung der Datenverarbeitung zu verlangen</li>
                  <li>Widerspruch gegen die Verarbeitung Ihrer Daten einzulegen</li>
                  <li>Datenübertragbarkeit zu fordern</li>
                  <li>Sich bei einer Aufsichtsbehörde zu beschweren</li>
                </ul>
              </div>
            </div>

            {/* Hosting */}
            <div>
              <h2 className="text-2xl font-bold mb-4">4. Hosting und Content Delivery Networks (CDN)</h2>
              <div className="text-gray-400">
                <h3 className="text-white font-semibold mb-2">Externes Hosting</h3>
                <p>
                  Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die 
                  personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den 
                  Servern des Hosters gespeichert. Hierbei kann es sich v.a. um IP-Adressen, 
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, 
                  Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, 
                  handeln.
                </p>
              </div>
            </div>

            {/* Contact Forms */}
            <div>
              <h2 className="text-2xl font-bold mb-4">5. Kontaktformular</h2>
              <div className="text-gray-400">
                <p className="mb-2">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben 
                  aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten 
                  zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns 
                  gespeichert.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur 
                  Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen 
                  beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven 
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
              <div className="text-gray-400 space-y-4">
                <p>
                  Unsere Internetseiten verwenden so genannte „Cookies". Cookies sind kleine 
                  Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder 
                  vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft 
                  (permanente Cookies) auf Ihrem Endgerät gespeichert.
                </p>
                <div>
                  <h3 className="text-white font-semibold mb-2">Arten von Cookies</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong className="text-white">Technisch notwendige Cookies:</strong> Für die Funktion der Website erforderlich</li>
                    <li><strong className="text-white">Funktionale Cookies:</strong> Zur Verbesserung der Nutzererfahrung</li>
                    <li><strong className="text-white">Analyse-Cookies:</strong> Zur Auswertung des Nutzerverhaltens</li>
                  </ul>
                </div>
                <p>
                  Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies 
                  informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies 
                  für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der 
                  Cookies beim Schließen des Browsers aktivieren.
                </p>
              </div>
            </div>

            {/* SSL/TLS */}
            <div>
              <h2 className="text-2xl font-bold mb-4">7. SSL- bzw. TLS-Verschlüsselung</h2>
              <div className="text-gray-400">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                  Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine 
                  SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, 
                  dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem 
                  Schloss-Symbol in Ihrer Browserzeile.
                </p>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold mb-4">8. Speicherdauer</h2>
              <div className="text-gray-400">
                <p>
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt 
                  wurde, verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die 
                  Datenverarbeitung entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen 
                  oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, 
                  sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer 
                  personenbezogenen Daten haben.
                </p>
              </div>
            </div>

            {/* Changes to Policy */}
            <div>
              <h2 className="text-2xl font-bold mb-4">9. Änderungen dieser Datenschutzerklärung</h2>
              <div className="text-gray-400">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                  in der Datenschutzerklärung umzusetzen. Für Ihren erneuten Besuch gilt dann die 
                  neue Datenschutzerklärung.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-zinc-900 p-6 rounded-lg border border-white/10">
              <h2 className="text-2xl font-bold mb-4">Kontakt zum Datenschutzbeauftragten</h2>
              <p className="text-gray-400 mb-4">
                Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder 
                wenden Sie sich direkt an die für den Datenschutz verantwortliche Person:
              </p>
              <div className="text-gray-400 space-y-2">
                <p><strong className="text-white">EK Garage GmbH</strong></p>
                <p>Autostraße 123, 12345 Motorstadt, Deutschland</p>
                <p><strong className="text-white">E-Mail:</strong> datenschutz@ekgarage.de</p>
                <p><strong className="text-white">Telefon:</strong> +49 (0) 123 456789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
