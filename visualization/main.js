/**
 * data structure containing survey questions and their answers
 */
const data = {
    categories: [
        {
            category: "Unternehmensgröße",
            values: ["11 - 50 Mitarbeiter", "51 - 250 Mitarbeiter", "251 - 500 Mitarbeiter", "> 500 Mitarbeiter"]
        }, {
            category: "Wertschöpfungsebene",
            values: ["Engineering-Dienstleister", "Komponenten- und Anlagenlieferant", "Produzierendes Unternehmen"]
        }, {
            category: "Zuliefererebene",
            values: ["(First) Tier-1", "(Second) Tier-2", "(Third) Tier-3", "OEM"]
        }, {
            category: "Stellung innerhalb des Unternehmens",
            values: ["Fertigungsleitung", "Geschäftsführung", "Ingenieur", "Management"]
        }
    ],
    questions: [
        {
            question: "Inwieweit sehen Sie den Karosseriebau von folgenden Megatrends beeinflusst?",
            type: "sentiment",
            values: ["Nicht betroffen", "Wenig", "Stark", "Sehr stark"],
            subquestions: ["Demografischer Wandel", "Fachkräftemangel", "Wissensverlust durch\nMitarbeiterwechsel", "Arbeitsplatzergonomie", "IT-Sicherheit (Cyber Security)", "Automatisierte Datenverarbeitung", "Verkauf eigener Produktionsdaten", "Ankauf relevanter Daten für\neigene Produkte und Anlagen", "Kostendruck durch\ninternationale Wettbewerber", "Internationale Zulieferketten", "Auftragsfertigung von\nBaugruppen und Karossen", "Steigende Produktvielfalt erfordert\nAnlagenflexibilität", "Verkürzung der Produktionszyklen", "Volumenflexibilität aufgrund\nschwankender Nachfrage", "Energieeffizienz", "Rohstoffverknappung", "Abfallvermeidung"]
        }, {
            question: "Wie weit sehen Sie folgende Technologien bereits heute\nim Karosseriebau (ihres Unternehmens oder Kundens) implementiert?",
            type: "sentiment",
            values: ["Nicht bekannt", "Nicht relevant", "Nicht vorhanden", "Teilweise vorhanden", "Vollständig vorhanden"],
            subquestions: ["Fahrerlose Transportsysteme", "Produktnachverfolgbarkeit durch eind.\ndigitale Kennzeichnung jedes Bauteils", "Produktlokalisierung", "Schutzzaunloser Robotereinsatz", "Ortsflexible Roboter", "Intuitive (Roboter-)Programmierung\nund standardisierte Schnittstellen", "Mensch-Roboter-Kooperation", "Griff in die (ungeordnete) Kiste", "Inbetriebnahme auf Basis\nvon offline Bahnplanung", "Flexible Greifer", "Flexible Spannvorrichtungen", "Flexible Behälter", "Skalierbare Produktionsanlagen", "Rekonfigurierbare Produktionsanlagen\nzur Anpassung auf neue Varianten", "Autonome\nMaschine-Maschine-Interaktion", "Lokale Auswertung\nvon Maschinendaten", "Auswertung in übergeordneten\nNetzwerken/Systemen (u.a. Cloud)", "Datenauswertung durch\nexterne Dienstleister/Dritte", "Condition Monitoring", "Predictive Maintenance", "Echtzeit-Simulation von Prozessen", "Digitaler Zwilling", "Einsatz von Wearables\nzur Instandhaltung", "Einsatz von AR/VR", "Mustererkennung von Maschinendaten", "Mustererkennung in der\nBildverarbeitung", "Autonome Produktionssteuerung\ndurch KI"]
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
            question: "Welche weitere Unterstützung benötigt Ihr Unternehmen,\num den Zukunftsthemen des Karosseriebaus erfolgreich begegnen zu können?",
            type: "sentiment",
            values: ["Nicht bekannt", "Nicht relevant", "Weniger wichtig", "Wichtig", "Sehr wichtig"],
            subquestions: ["Änderung gesetzlicher\nRahmenbedingungen", "Mehr IT-Fachkräfte", "Mehr sonstige Fachkräfte", "Kundenübergreifende\nStandardisierung", "Marktübersicht durch Benchmarking\nvorhandener Technologien", "Nutzenübersicht unterschiedlicher\nTechnologien", "Mehr F&E im eigenen Unternehmen", "Forschungskooperationen", "Wissens-/Erfahrungsaustausch\nmit Branchenmitgliedern", "Änderung im Führungsverhalten", "Weiterbildungsangebote von\nTechnologieanbietern"]
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

let active_question = 0;

// select div to fill with visualization
const main_svg = d3.select("svg#karobau_viz");

// create circles for selecting categories
// TODO: use either a loop or d3.js
main_svg.append(() => create_category_selection());
// question 1
main_svg.append(() => create_sentiment_scale(475, 50));
// tabs to switch between questions
main_svg.append(() => create_tabs(475, 0));

update_question();
// set correct height
main_svg.attr("height", main_svg.node().getBBox().height);

/**
 * @summary This function creates circles for selecting the categories of survey participants.
 * @param pos_x{number}
 * @param pos_y{number}
 * @returns {SVGGElement} a svg group element containing the circles
 */
function create_category_selection(pos_x = 0, pos_y = 0) {
    const size_bigcircle = 220;
    const scale_bigcircle = d3.scaleBand()
        .domain(d3.range(data.categories.length))
        .range([0, size_bigcircle * data.categories.length])
        .padding(0.15);

    // create root group
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`);

    // create a d3 hierarchy for each category
    const category_hierarchies = data.categories.map((c, i) => d3.hierarchy({
            name: c.category,
            children: d3.zip(c.values, accumulate_categories(i)).map(d => ({name: d[0], value: d[1]}))
        })
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value)
    );
    // create pack layout (general settings)
    const pack_layout = d3.pack()
        .size([scale_bigcircle.bandwidth(), scale_bigcircle.bandwidth()])
        .padding(5);
    // calculate circle positions and radii
    category_hierarchies.forEach(pack_layout);

    const bigcircle = root.selectAll("g").data(category_hierarchies).join("g")
        .attr("transform", (d, i) => `translate(0, ${scale_bigcircle(i)})`);
    // add category label
    bigcircle.append("text")
        .text(d => d.data.name)
        .attr("x", 20)
        .attr("y", "-0.4em");
    // draw the big circle
    bigcircle.selectAll("circle.bigcircle").data(d => [d]).join("circle")
        .attr("class", "bigcircle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.r);

    // draw the smaller circles
    // the big circle has depth 0, each child (and therefore the smaller ones) has depth 1 in the hierarchy
    bigcircle.selectAll("circle.smallcircle").data(d => d.descendants().filter(x => x.depth === 1)).join("circle")
        .attr("class", "smallcircle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.r)
        .attr("fill", (d, i) => d3.schemeCategory10[i]);

    // create origins for legend, using the same data as for the smaller circles
    const legend = bigcircle.selectAll("g.legend").data(d => d.descendants().filter(x => x.depth === 1)).join("g")
        .attr("class", "legend")
        .attr("transform", (d, i, a) => `translate(${scale_bigcircle.bandwidth() + 25}, ${scale_bigcircle.bandwidth() / 2 - 15 * a.length + 10})`);

    // add small colored square
    legend.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("y", (d, i) => 30 * i)
        .style("fill", (d, i) => d3.schemeCategory10[i]);

    // add label
    legend.append("text")
        .text(d => d.data.name)
        .attr("x", 15)
        .attr("y", (d, i) => 30 * i + 5)
        .attr("dominant-baseline", "central");

    return root.node();
}

/**
 * @summary This function creates a stacked bar chart to visualize sentiment across different subquestions.
 * @param pos_x
 * @param pos_y
 * @returns {SVGGElement}
 */
function create_sentiment_scale(pos_x = 0, pos_y = 0) {
    // create root group
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`)
        .attr("id", "question");

    // text label for question
    root.append("text")
        .attr("dominant-baseline", "hanging")
        .attr("id", "question_label");

    // create root for bars
    root.append("g")
        .attr("transform", "translate(0, 40)")
        .attr("id", "bar_root");

    // create root for legend
    root.append("g")
        .attr("transform", "translate(600, 40)")
        .attr("id", "legend_root");

    return root.node();
}

/**
 * @summary This function accumulates and counts the answers per question
 * @param i index of question in {@link data}
 * @returns {number[][]} two-dimensional array, for each subquestion an array with the number of answers per answer option
 */
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

function accumulate_categories(i) {
    // get list of subcategory answers for category i
    let answers = data.answers.map(d => d.categories[i]);
    // array [0, 1, ..., length - 1]
    let values = d3.range(data.categories[i].values.length);
    // count subcategories
    return values.map(v => answers.filter(i => i === v).length);
}

/**
 * @summary This function creates a svg text element, splitting the given text at newline characters.
 * @param str{string}
 * @returns {SVGTextElement}
 */
function create_text(str) {
    // text contains newline chars, return text with tspan for each separate line
    const text = d3.create("svg:text");
    // create tspan
    text.selectAll("tspan").data(str.split("\n")).join("tspan")
        .text(d => d)
        .attr("dy", (d, i) => i > 0 ? "1.2em" : null)
        .attr("x", 0);
    return text.node();
}

function update_text(selection, new_str) {
    // update text
    selection.selectAll("tspan").data(new_str.split("\n")).join("tspan")
        .text(d => d)
        .attr("dy", (d, i) => i > 0 ? "1.2em" : null)
        .attr("x", 0);
}

function create_tabs(pos_x = 0, pos_y = 0) {
    const width_tabs = 600, height_tab = 40;
    const num_questions = data.questions.length;
    const scale_tab = d3.scaleBand()
        .domain(d3.range(num_questions))
        .rangeRound([0, width_tabs]);
    // create root element
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`)
        .attr("id", "tabs");
    // create tab
    const tab = root.selectAll("g").data(d3.range(num_questions).map(i => `Frage ${i + 1}`)).join("g")
        .on("click", function (d, i) {
            // don't do anything if click on active tab
            if (i === active_question)
                return;
            active_question = i;
            // redraw tabs with new colors
            update_tabs();
            // redraw question
            if (active_question === 0 || active_question === 1 || active_question === 4)
                update_question();
            // set correct height
            main_svg.attr("height", main_svg.node().getBBox().height);
        });
    // create a colored rectangle
    tab.append("rect")
        .attr("x", (d, i) => scale_tab(i))
        .attr("width", scale_tab.bandwidth())
        .attr("height", height_tab)
        .attr("class", (d, i) => i === active_question ? "tab active" : "tab inactive");
    // add text
    tab.append("text")
        .text(d => d)
        .attr("x", (d, i) => scale_tab.bandwidth() / 2 + scale_tab(i))
        .attr("y", height_tab / 2)
        .attr("dominant-baseline", "middle")
        .attr("text-anchor", "middle");
    return root.node();
}

function update_tabs() {
    const root = main_svg.select("g#tabs");
    // recolor rectangles
    root.selectAll("rect.tab")
        .attr("class", (d, i) => i === active_question ? "tab active" : "tab inactive");
}

function update_categories() {

}

function update_question() {
    const height_bar = 40, width_bar = 300;

    const question = data.questions[active_question], answers = accumulate_answers(active_question);
    const local_data = d3.zip(question.subquestions, answers);
    const num_questions = local_data.length, num_values = question.values.length;

    const scale_bar = d3.scaleBand()
        .domain(d3.range(num_questions))
        .rangeRound([0, height_bar * num_questions])
        .paddingInner(0.08);
    const scale_color = d3.scaleLinear()
        .domain([0, num_values - 1])
        .range(["blue", "red"])
        .interpolate(d3.interpolateRgb);
    const scale_legend = d3.scaleBand()
        .domain(d3.range(num_values))
        .range([0, 30 * num_values]);

    // select root group
    const root = main_svg.select("g#question");

    // update text label for question
    update_text(root.select("text#question_label"), question.question);

    // select root for bars
    const root_bars = root.select("g#bar_root");
    // update bars
    root_bars.selectAll("g.bar_origin").data(local_data, d => `${active_question}_${d[0]}`).join(
        function (enter) {
            // the enter selection contains all new elements
            // first create the origins
            const bars = enter.append("g")
                .attr("transform", (d, i) => `translate(0, ${scale_bar(i)})`)
                .attr("class", "bar_origin");

            // text label
            bars.append(d => create_text(d[0]))
                .attr("dominant-baseline", "hanging");

            // create single bar with multiple colored rectangles
            const bar = bars.append("g")
                .attr("transform", "translate(250,0)");
            bar.selectAll("rect").data(function (d) {
                let values = d[1];
                let num_answers = d3.sum(values);
                let start_x = d3.cumsum(values.map(v => v * width_bar / num_answers)).map(Math.round);
                // Float64Array to Array and prepend 0
                start_x = [].slice.call(start_x);
                start_x.unshift(0);
                let bar_width = d3.range(values.length).map(i => start_x[i + 1] - start_x[i]);
                return d3.zip(values, start_x.slice(0, -1), bar_width);
            }).join("rect")
                .attr("height", scale_bar.bandwidth())
                .attr("width", d => d[2])
                .attr("x", d => d[1])
                .style("fill", (d, i) => scale_color(i));
            return bars;
        }
    );

    // select root for legend
    const root_legend = root.select("g#legend_root");
    // update legend
    root_legend.selectAll("g.legend_origin").data(question.values).join(
        function (enter) {
            // the enter selection contains all new elements
            // first create origins
            const labels = enter.append("g")
                .attr("transform", (d, i) => `translate(0, ${scale_legend(i)})`)
                .attr("class", "legend_origin");

            // small square for color reference
            labels.append("rect")
                .attr("width", 10)
                .attr("height", 10)
                .style("fill", (d, i) => scale_color(i));

            // text with answer value
            labels.append("text")
                .text(d => d)
                .attr("x", 15)
                .attr("y", "0.6em");
            return labels;
        },
        function (update) {
            // update color of square
            update.select("rect")
                .style("fill", (d, i) => scale_color(i));
            // update label text
            update.select("text")
                .text(d => d);
            return update;
        }
    )
}