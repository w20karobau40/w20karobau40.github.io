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
main_svg.append(() => create_sentiment_scale(data.questions[0], accumulate_answers(0), 475, 50))
    .attr("class", "question");
// question 2, but invisible
main_svg.append(() => create_sentiment_scale(data.questions[1], accumulate_answers(1), 475, 50))
    .attr("class", "question")
    .attr("display", "none");
// question 3, but invisible and empty
main_svg.append("g")
    .attr("class", "question")
    .attr("display", "none");
// question 4, but invisible and empty
main_svg.append("g")
    .attr("class", "question")
    .attr("display", "none");
// question 5, but invisible
main_svg.append(() => create_sentiment_scale(data.questions[4], accumulate_answers(4), 475, 50))
    .attr("class", "question")
    .attr("display", "none");
// tabs to switch between questions
main_svg.append(() => create_tabs(475, 0));

/**
 * @summary This function creates circles for selecting the categories of survey participants.
 * @param pos_x{number}
 * @param pos_y{number}
 * @returns {SVGGElement} a svg group element containing the circles
 */
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
        .attr("y", -3)
        .attr("text-anchor", "middle");

    const radius_smallcircle = radius_bigcircle / 3;

    // create origins for small circles
    const smallcircle = bigcircle.selectAll("g.smallcircle").data(d => d.values).join("g")
        .attr("transform", (d, i, a) => `translate(${radius_bigcircle + Math.cos(2 * Math.PI * i / a.length) * radius_bigcircle * 0.6}, ${radius_bigcircle + Math.sin(2 * Math.PI * i / a.length) * radius_bigcircle * 0.6})`)
        .attr("class", "smallcircle");

    // create small circles
    // note: schemeCategory10 has only 10 different colors, there should never be more than 10 subcategories per category
    smallcircle.append("circle")
        .attr("r", radius_smallcircle)
        .attr("class", "smallcircle enabled")
        .style("fill", (d, i) => d3.schemeCategory10[i]);

    // create origins for legend
    const legend = bigcircle.selectAll("g.legend").data(d => d.values).join("g")
        .attr("class", "legend");

    // add small colored square
    legend.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .attr("x", 2 * radius_bigcircle + 10)
        .attr("y", (d, i) => 30 * i + 30)
        .style("fill", (d, i) => d3.schemeCategory10[i]);

    // add label
    legend.append("text")
        .text(d => d)
        .attr("x", 2 * radius_bigcircle + 25)
        .attr("y", (d, i) => 30 * i + 35)
        .attr("dominant-baseline", "central");

    return root.node();
}

/**
 * @summary This function creates a stacked bar chart to visualize sentiment across different subquestions.
 * @param question
 * @param answers
 * @param pos_x
 * @param pos_y
 * @returns {SVGGElement}
 */
function create_sentiment_scale(question, answers, pos_x = 0, pos_y = 0) {
    const height_bar = 40, width_bar = 300;
    const local_data = d3.zip(question.subquestions, answers);
    const num_questions = local_data.length, num_answers = d3.sum(answers[0]);

    const scale_bar = d3.scaleBand()
        .domain(d3.range(num_questions))
        .rangeRound([0, height_bar * num_questions])
        .paddingInner(0.08);
    const scale_color = d3.scaleLinear()
        .domain([0, local_data[0][1].length - 1])
        .range(["blue", "red"])
        .interpolate(d3.interpolateRgb);
    const scale_legend = d3.scaleBand()
        .domain(d3.range(question.values.length))
        .range([0, 30 * question.values.length]);
    // create root group
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`);

    // text label for question
    root.append(() => create_text(question.question))
        .attr("dominant-baseline", "hanging");

    // create root for bars
    const root_bars = root.append("g")
        .attr("transform", "translate(0, 40)");

    // create origins for bars
    const bars = root_bars.selectAll("g").data(local_data).join("g")
        .attr("transform", (d, i) => `translate(0, ${scale_bar(i)})`);

    // text label
    bars.append(d => create_text(d[0]))
        .attr("dominant-baseline", "hanging");

    // create single bar with multiple colored rectangles
    const bar = bars.append("g")
        .attr("transform", "translate(250,0)");
    bar.selectAll("rect").data(function (d) {
        let values = d[1];
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

    // create root for legend
    const root_legend = root.append("g")
        .attr("transform", "translate(600, 40)");

    // create labels for each answer
    const label_legend = root_legend.selectAll("g").data(question.values).join("g")
        .attr("transform", (d, i) => `translate(0, ${scale_legend(i)})`);
    // small square for color reference
    label_legend.append("rect")
        .attr("width", 10)
        .attr("height", 10)
        .style("fill", (d, i) => scale_color(i));
    // text with answer value
    label_legend.append("text")
        .text(d => d)
        .attr("x", 15)
        .attr("y", "0.6em");
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

/**
 * @summary This function creates a svg text element, splitting the given text at newline characters.
 * @param str{string}
 * @returns {SVGTextElement}
 */
function create_text(str) {
    if (str.indexOf('\n') === -1) {
        // text contains no newline chars, therefore return only a single text element
        return d3.create("svg:text")
            .text(str)
            .node();
    }
    // text contains newline chars, return text with tspan for each separate line
    const text = d3.create("svg:text");
    // create tspan
    text.selectAll("tspan").data(str.split("\n")).join("tspan")
        .text(d => d)
        .attr("dy", (d, i) => i > 0 ? "1.2em" : null)
        .attr("x", 0);
    return text.node();
}

function create_tabs(pos_x = 0, pos_y = 0) {
    const width_tabs = 600, height_tab = 40;
    const num_questions = data.questions.length;
    const scale_tab = d3.scaleBand()
        .domain(d3.range(num_questions))
        .rangeRound([0, width_tabs]);
    // create root element
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`);
    // create tab
    const tab = root.selectAll("g").data(d3.range(num_questions).map(i => `Frage ${i + 1}`)).join("g")
        .on("click", function (d, i) {
            // don't do anything if click on active tab
            if (i === active_question)
                return;
            active_question = i;
            // redraw tabs with new colors
            d3.select(this.parentNode).selectAll("g rect")
                .attr("class", (d, i) => i === active_question ? "tab active" : "tab inactive");
            // redraw question
            main_svg.selectAll("g.question")
                .attr("display", (d, i) => i === active_question ? null : "none");
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