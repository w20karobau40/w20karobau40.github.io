const data = {
    categories: [
        {
            category: "Unternehmensgröße",
            values: ["11 - 50 Mitarbeiter", "51 - 250 Mitarbeiter", "251 - 500 Mitarbeiter", "> 500 Mitarbeiter"]
        }, {
            category: "Wertschöpfungsebene",
            values: ["Engineering-Dienstleister", "Komponenten- und Anlagenlieferant", "Produzierendes Unternehmen (Automobilhersteller + Zulieferer)"]
        }, {
            category: "Zuliefererebene",
            values: ["(First) Tier-1", "(Second) Tier-2", "(Third) Tier-3", "OEM"]
        }, {
            category: "Stellung innerhalb des Unternehmens",
            values: ["Fertigungsleitung", "Geschäftsführung", "Ingenieur ( Konstruktion, Planung, Realisierung)", "Management"]
        }
    ],
    questions: [
        {
            question: "Inwieweit sehen Sie den Karosseriebau von folgenden Megatrends beeinflusst?",
            type: "sentiment",
            values: ["Nicht betroffen", "Wenig", "Stark", "Sehr stark"],
            subquestions: ["Demografischer Wandel", "Fachkräftemangel", "Wissensverlust durch Mitarbeiterwechsel", "Arbeitsplatzergonomie", "IT-Sicherheit (Cyber Security)", "Automatisierte Datenverarbeitung", "Verkauf eigener Produktionsdaten", "Ankauf relevanter Daten für eigene Produkte und Anlagen", "Kostendruck durch internationale Wettbewerber", "Internationale Zulieferketten", "Auftragsfertigung von Baugruppen und Karossen", "Steigende Produktvielfalt erfordert Anlagenflexibilität (Geometrie, Technologien, etc.)", "Verkürzung der Produktionszyklen (Verkürzte Dauer zum nächsten Generationenwechsel)", "Volumenflexibilität aufgrund schwankender Nachfrage", "Energieeffizienz", "Rohstoffverknappung", "Abfallvermeidung"]
        }, {
            question: "Wie weit sehen Sie folgende Technologien bereits heute im Karosseriebau (ihres Unternehmens oder Kundens) implementiert?",
            type: "sentiment",
            values: ["Nicht bekannt", "Nicht relevant", "Nicht vorhanden", "Teilweise vorhanden", "Vollständig vorhanden"],
            subquestions: ["Fahrerlose Transportsysteme", "Produktnachverfolgbarkeit durch eindeutige digitale Kennzeichnung jedes Bauteils", "Produktlokalisierung", "Schutzzaunloser Robotereinsatz", "Ortsflexible Roboter", "Intuitive (Roboter-)Programmierung und standardisierte Schnittstellen", "Mensch-Roboter-Kooperation", "Griff in die (ungeordnete) Kiste", "Inbetriebnahme auf Basis von offline Bahnplanung", "Flexible Greifer", "Flexible Spannvorrichtungen", "Flexible Behälter", "Skalierbare Produktionsanlagen", "Rekonfigurierbare Produktionsanlagen zur Anpassung bestehender Anlagen auf neue Varianten/Materialien", "Autonome Maschine-Maschine-Interaktion", "Lokale Auswertung von Maschinendaten", "Auswertung in übergeordneten Netzwerken/Systemen (u.a. Cloud)", "Datenauswertung durch externe Dienstleister/Dritte", "Condition Monitoring", "Predictive Maintenance", "Echtzeit-Simulation von Prozessen", "Digitaler Zwilling (Abbildung von Daten und Beeinflussung von Prozessen in Echtzeit)", "Einsatz von Wearables zur Instandhaltung (Tragbare Sensor- und Endgeräte)", "Einsatz von AR/VR", "Mustererkennung von Maschinendaten", "Mustererkennung in der Bildverarbeitung (für Griff in die Kiste, oder zur Qualitätssicherung)", "Autonome Produktionssteuerung durch KI"]
        }, {
            question: "Technologien und Zukunftstrends für den Karosseriebau",
            type: "yesno",
            values: ["quoted", "not quoted"],
            subquestions: ["Künstliche Intelligenz für autonome Prozessregelung", "Digitaler Zwilling der Anlage (Abbildung von Daten und Beeinflussung von Prozessen in Echtzeit)", "AR / VR (Einsatz in Instandhaltung / Montagefolge)", "Einsatz von Wearables (Tragbare Sensor- und Endgeräte)", "Durchgängige Nachverfolgung jedes Bauteils (z. B. RFID)", "Fahrerlose Transportsysteme für Bauteile", "Big Data Speicherung und Auswertung", "Intuitive (Roboter-)Programmierung und standardisierte Schnittstellen", "Predictive Maintenance", "Automatisierte Produktionsplanung", "Cloud Technologien"]
        }, {
            question: "Welche Unterstützungsangebote nutzen Sie bereits, um Technologien für den Karosserie der Zukunft erfolgreich zu meistern?",
            type: "yesno",
            values: ["quoted", "not quoted"],
            subquestions: ["Forschungskooperationen", "Branchenübergreifender Erfahrungsaustausch", "Öffentliche Förderung von F&E Aufwänden", "Austausch mit Branchenmitgliedern auf Konferenzen und Workshops", "Regelmäßige Weiterbildungen", "Unterstützung durch externes Beratungsunternehmen", "Software-Dienstleister zur Datenauswertung"]
        }, {
            question: "Welche weitere Unterstützung benötigt Ihr Unternehmen, um den Zukunftsthemen des Karosseriebaus erfolgreich begegnen zu können?",
            type: "sentiment",
            values: ["Nicht bekannt", "Nicht relevant", "Weniger wichtig", "Wichtig", "Sehr wichtig"],
            subquestions: ["Änderung gesetzlicher Rahmenbedingungen", "Mehr IT-Fachkräfte", "Mehr sonstige Fachkräfte", "Kundenübergreifende Standardisierung", "Marktübersicht durch Benchmarking vorhandener Technologien", "Nutzenübersicht unterschiedlicher Technologien", "Mehr F&E im eigenen Unternehmen", "Forschungskooperationen", "Wissens-/Erfahrungsaustausch mit Branchenmitgliedern", "Änderung im Führungsverhalten", "Weiterbildungsangebote von Technologieanbietern"]
        }
    ]
};