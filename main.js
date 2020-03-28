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
    ],
    answers: [
        {
            categories: [3, 0, 0, 0],
            questions: [
                [1, 1, 3, 3, 2, 2, 1, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0],
                [1, 3, 1, 3, 2, 2, 2, 2, 4, 2, 4, 3, 4, 4, 3, 4, 2, 2, 2, 4, 3, 3, 2, 2, 2, 2, 2],
                [1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1],
                [1, 0, 1, 0, 0, 1, 1],
                [2, 2, 3, 3, 2, 3, 2, 2, 3, 4, 4]
            ]
        },
        {
            categories: [3, 1, 0, 1],
            questions: [
                [2, 1, 1, 1, 2, 2, 1, 2, 3, 2, 2, 3, 3, 2, 2, 1, 2],
                [3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 3, 3, 3, 3, 3, 4, 3, 3, 2],
                [1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1],
                [0, 0, 1, 1, 1, 1, 1],
                [3, 4, 2, 3, 2, 2, 3, 3, 4, 3, 3]
            ]
        },
        {
            categories: [0, 1, 2, 1],
            questions: [
                [2, 2, 2, 2, 2, 2, 1, 1, 3, 3, 1, 3, 2, 2, 2, 2, 2],
                [3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 3, 3, 0],
                [0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
                [0, 0, 1, 0, 1, 1, 1],
                [2, 3, 3, 2, 3, 3, 3, 3, 3, 2, 0]
            ]
        },
        {
            categories: [3, 0, 2, 1],
            questions: [
                [2, 3, 2, 2, 2, 3, 2, 2, 2, 2, 1, 2, 3, 2, 2, 2, 2],
                [2, 3, 3, 4, 3, 3, 3, 3, 4, 4, 4, 4, 3, 2, 3, 3, 4, 4, 3, 4, 2, 3, 3, 3, 3, 4, 2],
                [1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1],
                [0, 0, 1, 0, 1, 1, 1],
                [2, 3, 4, 2, 3, 2, 2, 4, 4, 2, 3]
            ]
        },
        {
            categories: [0, 1, 3, 1],
            questions: [
                [1, 2, 2, 1, 2, 2, 1, 0, 3, 2, 2, 3, 3, 2, 1, 1, 1],
                [0, 3, 2, 2, 2, 3, 3, 3, 2, 4, 4, 4, 3, 2, 3, 3, 3, 2, 2, 2, 3, 3, 0, 0, 3, 4, 3],
                [0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
                [0, 0, 1, 1, 0, 1, 1],
                [1, 4, 3, 1, 1, 2, 2, 3, 3, 1, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [2, 2, 3, 1, 3, 2, 3, 2, 2, 2, 1, 3, 3, 3, 2, 2, 2],
                [3, 4, 1, 2, 2, 3, 2, 3, 4, 4, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 3, 3, 2],
                [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
                [1, 0, 1, 1, 0, 1, 1],
                [0, 3, 3, 4, 2, 3, 3, 3, 3, 1, 4]
            ]
        },
        {
            categories: [3, 1, 0, 2],
            questions: [
                [2, 2, 3, 1, 3, 2, 2, 2, 3, 3, 2, 1, 1, 2, 3, 3, 2],
                [3, 4, 3, 3, 1, 3, 2, 2, 3, 2, 2, 2, 2, 3, 1, 3, 3, 3, 2, 2, 1, 2, 3, 2, 1, 1, 1],
                [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0],
                [0, 1, 0, 1, 0, 0, 0],
                [3, 3, 2, 3, 4, 3, 4, 4, 3, 4, 4]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [2, 1, 2, 1, 2, 2, 1, 1, 3, 2, 2, 3, 2, 2, 2, 2, 2],
                [3, 2, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 3, 2, 2, 3, 4, 2, 2, 3, 3, 2, 2],
                [0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 1, 1],
                [2, 4, 4, 2, 3, 3, 4, 3, 3, 4, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [2, 1, 1, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 3, 1, 3],
                [3, 4, 2, 2, 2, 3, 3, 3, 4, 1, 1, 1, 2, 3, 3, 4, 4, 3, 0, 4, 4, 4, 0, 0, 3, 3, 0],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
                [0, 1, 1, 1, 1, 1, 1],
                [2, 4, 3, 3, 2, 3, 3, 3, 2, 3, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [3, 3, 3, 1, 2, 2, 1, 1, 3, 3, 1, 3, 3, 2, 1, 1, 1],
                [3, 2, -1, 0, 0, 3, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 4, 0],
                [0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
                [0, 0, 1, 1, 0, 1, 1],
                [0, 3, 3, 0, 2, 3, 0, 4, 4, 4, 4]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [3, 1, 2, 2, 3, 2, 2, 1, 3, 3, 2, 2, 1, 2, 3, 2, 3],
                [3, 3, 3, 3, 2, 2, 3, 3, 4, 3, 3, 0, 3, 4, 2, 3, 3, 2, 3, 3, 0, 3, 3, 4, 3, 3, 2],
                [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
                [0, 1, 1, 1, 1, 0, 1],
                [0, 3, 3, 3, 3, 4, 2, 3, 2, 1, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [1, 2, 2, 2, 3, 3, 0, 0, 2, 2, 2, 3, 3, 2, 3, 2, 2],
                [3, 4, 3, 3, 3, 3, 3, 4, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 2, 2, 3, 3, 3],
                [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                [0, 0, 1, 0, 1, 1, 0],
                [2, 4, 4, 4, 3, 4, 3, 3, 3, 3, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [1, 2, 3, 1, 3, 3, 2, 2, 3, 2, 3, 3, 3, 3, 3, 1, 2],
                [3, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 0, 4, 3, 0, 3, 3, 3, 3, 3, 3, 0, 3, 2],
                [0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
                [0, 0, 1, 0, 1, 1, 1],
                [2, 4, 2, 3, 4, 3, 4, 3, 4, 2, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [1, 1, 2, 1, 2, 2, 1, 1, 3, 2, 2, 3, 3, 3, 2, 1, 1],
                [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2],
                [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
                [0, 0, 1, 0, 1, 0, 0],
                [3, 2, 2, 2, 3, 3, 3, 2, 2, 4, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [0, 2, 1, 2, 1, 3, 2, 3, 3, 1, 2, 2, 2, 1, 2, 2, 1],
                [3, 3, 3, 2, 2, 0, 2, 3, 0, 2, 3, 2, 0, 3, 2, 3, 2, 3, 2, 2, 3, 2, 2, 0, 2, 3, 2],
                [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1],
                [0, 1, 1, 0, 1, 1, 0],
                [2, 4, 2, 3, 3, 3, 3, 3, 3, 4, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [1, 2, 2, 2, 3, 2, 1, 1, 3, 2, 2, 3, 2, 3, 3, 2, 3],
                [3, 3, 4, 2, 2, 3, 3, 2, 3, 4, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 0, 3, 3, 0, 3, 2],
                [1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0],
                [1, 0, 1, 1, 0, 0, 1],
                [2, 3, 3, 3, 3, 3, 3, 4, 3, 2, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [1, 2, 1, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1],
                [3, 2, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 3, 2],
                [1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
                [0, 1, 1, 0, 0, 1, 1],
                [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
            ]
        },
        {
            categories: [3, 2, 3, 2],
            questions: [
                [1, 3, 2, 1, 3, 3, 1, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2],
                [3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 3, 3, 3, 2, 3, 3, 3, 2, 3, 3, 3],
                [1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1],
                [0, 0, 1, 1, 0, 1, 0],
                [2, 4, 3, 3, 4, 4, 3, 3, 3, 2, 2]
            ]
        },
        {
            categories: [3, 2, 0, 3],
            questions: [
                [2, 2, 1, 1, 1, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                [3, 3, 0, 3, 0, 0, 0, 3, 0, 3, 3, 0, 3, 3, 0, 3, 3, 0, 0, 3, 0, 0, 3, 2, 3, 3, 2],
                [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 1],
                [3, 3, 0, 3, 0, 0, 0, 3, 3, 0, 3]
            ]
        },
        {
            categories: [0, 0, 0, 3],
            questions: [
                [1, 2, 2, 1, 2, 3, 0, 1, 2, 1, 2, 3, 3, 3, 3, 1, 1],
                [2, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 3, 3, 2, 3, 2, 2, 2, 2, 2, 2, 3, 2],
                [1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 1, 1, 0, 1, 1, 1],
                [1, 3, 3, 2, 2, 4, 2, 3, 4, 4, 4]
            ]
        },
        {
            categories: [1, 0, 2, 3],
            questions: [
                [1, 1, 2, 0, 3, 2, 1, 2, 3, 2, 0, 3, 1, 3, 0, 1, 0],
                [3, 3, 0, 3, 3, 3, 2, 3, 4, 3, 0, 3, 2, 2, 3, 3, 3, 3, 0, 0, 4, 3, 0, 0, 0, 3, 3],
                [1, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                [1, 1, 1, 0, 1, 0, 1],
                [3, 2, 2, 4, 2, -1, 2, 2, 3, 2, 2]
            ]
        },
        {
            categories: [2, 2, 0, 3],
            questions: [
                [3, 3, 3, 2, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2],
                [0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 0, 0, 1, 1],
                [3, 3, 4, 4, 4, 4, 3, 3, 4, 2, 4]
            ]
        },
        {
            categories: [1, 2, 1, 3],
            questions: [
                [3, 3, 2, 1, 3, 3, 1, 1, 3, 3, 2, 2, 2, 3, 2, 2, 1],
                [2, 2, 2, 3, 2, 2, 3, 2, 2, 3, 3, 3, 2, 2, 2, 3, 3, 2, 3, 3, 3, 3, 2, 2, 2, 3, 2],
                [1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1],
                [0, 0, 0, 1, 0, 0, 1],
                [3, 2, 3, 3, 2, 3, 3, 3, 2, 3, 3]
            ]
        },
        {
            categories: [3, 1, 3, 3],
            questions: [
                [1, 1, 1, 1, 3, 3, 0, 2, 3, 3, 2, 3, 3, 3, 3, 2, 3],
                [3, 3, 3, 3, 2, 2, 3, 3, 4, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 3, 2],
                [1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1],
                [0, 1, 0, 0, 0, 1, 1],
                [2, 3, 2, 3, 3, 3, 4, 3, 2, 2, 3]
            ]
        },
        {
            categories: [2, 0, 1, 3],
            questions: [
                [2, 1, 1, 3, 2, 2, 1, 1, 2, 3, 1, 2, 2, 2, 2, 1, 1],
                [3, 3, 2, 3, 2, 2, 3, 3, 4, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                [0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1],
                [1, 0, 1, 0, 0, 1, 1],
                [2, 3, 2, 3, 3, 3, 3, 3, 3, 2, 2]
            ]
        },
        {
            categories: [0, 0, 0, 3],
            questions: [
                [1, 2, 2, 1, 1, 1, 1, 1, 3, 2, 2, 1, 2, 2, 2, 2, 1],
                [3, 3, 3, 3, 1, 2, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 3, 0],
                [1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 1, 1, 1, 1],
                [2, 3, 3, 3, 2, 2, 3, 3, 3, 2, 2]
            ]
        },
        {
            categories: [2, 2, 0, 3],
            questions: [
                [2, 2, 3, 2, 3, 3, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                [2, 4, 3, 2, 2, 2, 2, 2, 2, 3, 3, 2, 3, 4, 2, 4, 4, 3, 2, 3, 2, 2, -1, 2, 2, 2, 2],
                [1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1],
                [0, 0, 0, 0, 0, 0, 1],
                [1, 3, 3, 2, 3, 4, 4, 4, 4, 2, 3]
            ]
        },
        {
            categories: [3, 2, 3, 3],
            questions: [
                [2, 3, 1, 1, 2, 2, 0, 0, 2, 2, 1, 3, 2, 2, 2, 1, 2],
                [2, 3, 4, 3, 3, 4, 2, 3, 4, 3, 2, 3, 3, 3, 3, 4, 2, 2, 3, 3, 2, 2, 2, 2, 2, 3, 2],
                [0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1],
                [0, 1, 1, 0, 0, 1, 1],
                [3, 3, 3, 3, 4, 3, 2, 3, 4, 2, 3]
            ]
        },
        {
            categories: [3, 2, 3, 3],
            questions: [
                [2, 2, 1, 2, 3, 2, 1, 1, 2, 2, 1, 3, 2, 2, 3, 3, 2],
                [3, 3, 4, 2, 2, 3, 3, 2, 2, 3, 3, 2, 3, 3, 2, 3, 0, 1, 2, 3, 3, 2, 3, 2, 2, 3, 2],
                [0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
                [0, 0, 1, 1, 0, 1, 1],
                [0, 3, 3, 2, 2, 0, 3, 3, 3, 1, 0]
            ]
        },
        {
            categories: [2, 1, 1, 3],
            questions: [
                [1, 1, 1, 2, 2, 2, 3, 2, 3, 3, 3, 3, 3, 3, 3, 2, 2],
                [3, 3, 3, 3, 3, 2, 2, 3, 2, 3, 3, 4, 3, 3, 2, 3, 3, 2, 3, 3, 3, 2, 2, 2, 2, 3, 2],
                [0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1],
                [0, 0, 1, 1, 1, 1, 1],
                [2, 4, 3, 3, 4, 4, 3, 3, 4, 3, 2]
            ]
        },
        {
            categories: [1, 0, 0, 3],
            questions: [
                [3, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                [3, 3, 3, 3, 2, 2, 2, 2, 2, 3, 3, 3, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 2],
                [0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1],
                [0, 0, 0, 1, 1, 1, 1],
                [3, 4, 4, 4, 3, 3, 4, 4, 4, 4, 4]
            ]
        },
        {
            categories: [3, 2, 0, 3],
            questions: [
                [2, 3, 2, 0, 3, 3, 1, 1, 3, 2, 0, 3, 3, 3, 3, 2, 3],
                [2, 3, 0, 3, 3, 3, 3, 2, 1, 4, 4, 3, 3, 4, 3, 3, 2, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2],
                [0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
                [1, 1, 1, 1, 0, 1, 1],
                [2, 4, 4, 3, 3, 4, 4, 3, 3, 4, 4]
            ]
        },
        {
            categories: [1, 0, 0, 3],
            questions: [
                [2, 2, 3, 1, 2, 3, 1, 1, 3, 3, 2, 2, 2, 3, 3, 2, 3],
                [3, 4, 3, 2, 2, 2, 2, 3, 4, 3, 3, 3, 3, 3, 3, 4, 2, 3, 3, 3, 3, 2, 2, 3, 2, 3, 2],
                [1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 1],
                [1, 0, 1, 1, 1, 1, 1],
                [4, 2, 3, 4, 4, 4, 3, 3, 3, 2, 3]
            ]
        },
        {
            categories: [1, 1, 1, 3],
            questions: [
                [2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 3, 3, 3, 3, 1, 2],
                [3, 3, 3, 2, 3, 3, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 3, 2, 3, 3, 0, 3, 2, 3, 2],
                [1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 1, 1],
                [3, 4, 4, 4, 2, 2, 3, 4, 4, 2, 3]
            ]
        }
    ]
};

// select div to fill with visualization
const main_svg = d3.select("svg#karobau_viz");

// create circles for selecting categories
main_svg.append(() => create_category_selection());
// question 1
main_svg.append(() => create_sentiment_scale(data.questions[0], accumulate_answers(0), 300, 0));

function create_category_selection(pos_x = 0, pos_y = 0) {
    const size_bigcircle = 200;
    const scale_bigcircle = d3.scaleBand()
        .domain(d3.range(data.categories.length))
        .range([0, size_bigcircle * data.categories.length])
        .padding(0.1);

    // create root group
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`);

    // create origin for big circles
    const bigcircle = root.selectAll("g").data(data.categories).join("g")
        .attr("transform", (d, i) => `translate(${scale_bigcircle.paddingOuter() * scale_bigcircle.step()}, ${scale_bigcircle(i)})`);

    // create big circles
    let radius_bigcircle = scale_bigcircle.bandwidth() / 2;
    bigcircle.append("circle")
        .attr("cx", radius_bigcircle)
        .attr("cy", radius_bigcircle)
        .attr("r", radius_bigcircle)
        .attr("class", "bigcircle");

    // add label
    bigcircle.append("text")
        .text(d => d.category)
        .attr("x", radius_bigcircle)
        .attr("text-anchor", "middle");

    const radius_smallcircle = radius_bigcircle / 3;

    // create origins for small circles
    const smallcircle = bigcircle.selectAll("g.smallcircle").data(d => d.values).join("g")
        .attr("transform", (d, i, a) => `translate(${radius_bigcircle + Math.cos(2 * Math.PI * i / a.length) * radius_bigcircle * 0.6}, ${radius_bigcircle + Math.sin(2 * Math.PI * i / a.length) * radius_bigcircle * 0.6})`)
        .attr("class", "smallcircle");

    // create small circles
    smallcircle.append("circle")
        .attr("r", radius_smallcircle)
        .attr("class", "smallcircle enabled");

    // add label
    smallcircle.append("text")
        .text(d => d)
        .attr("y", -10)
        .attr("text-anchor", "middle");

    return root.node();
}

function create_sentiment_scale(question, answers, pos_x = 0, pos_y = 0) {
    // create root group
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`);

    // text label for question
    root.append("text")
        .text(question.question)
        .attr("dy", "1em");

    // create root for bars
    const root_bars = root.append("g")
        .attr("transform", "translate(0, 40)");

    const bar = root_bars.selectAll("g").data(d3.zip(question.subquestions, answers)).join("g")
        .attr("transform", `transform(0, 0)`);

    // text label
    bar.append("text")
        .text(d => d[0]);


    // create root for legend
    const root_legend = root.append("g")
        .attr("transform", "translate(400,0)");
    return root.node();
}

function accumulate_answers(i) {
    // get answers of question i
    let answers = data.answers.map(d => d.questions[i]);
    // transpose, list of answers per person => list of answers per subquestion
    let answers_transposed = d3.transpose(answers);
    // array [0, 1, ..., length - 1]
    let values = d3.range(data.questions[i].values.length);
    // count answers
    return answers_transposed.map(subquestion => values.map(v => subquestion.filter(i => i === v).length));
}