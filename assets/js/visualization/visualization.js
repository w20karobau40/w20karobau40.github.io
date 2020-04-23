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
            subquestions: ["Demografischer Wandel", "Fachkräftemangel", "Wissensverlust durch\nMitarbeiterwechsel", "Arbeitsplatzergonomie", "IT-Sicherheit (Cyber Security)", "Automatisierte Datenverarbeitung", "Verkauf eigener Produktionsdaten", "Ankauf relevanter Daten für\neigene Produkte und Anlagen", "Kostendruck durch\ninternationale Wettbewerber", "Internationale Zulieferketten", "Auftragsfertigung von\nBaugruppen und Karossen", "Steigende Produktvielfalt erfordert\nAnlagenflexibilität", "Verkürzung der Produktionszyklen", "Volumenflexibilität aufgrund\nschwankender Nachfrage", "Energieeffizienz", "Rohstoffverknappung", "Abfallvermeidung"],
            positive: [2, 3],
            neutral: [],
            negative: [0, 1]
        }, {
            question: "Wie weit sehen Sie folgende Technologien bereits heute\nim Karosseriebau (ihres Unternehmens oder Kundens) implementiert?",
            type: "sentiment",
            values: ["Nicht bekannt", "Nicht relevant", "Nicht vorhanden", "Teilweise vorhanden", "Vollständig vorhanden"],
            subquestions: ["Fahrerlose Transportsysteme", "Produktnachverfolgbarkeit durch eind.\ndigitale Kennzeichnung jedes Bauteils", "Produktlokalisierung", "Schutzzaunloser Robotereinsatz", "Ortsflexible Roboter", "Intuitive (Roboter-)Programmierung\nund standardisierte Schnittstellen", "Mensch-Roboter-Kooperation", "Griff in die (ungeordnete) Kiste", "Inbetriebnahme auf Basis\nvon offline Bahnplanung", "Flexible Greifer", "Flexible Spannvorrichtungen", "Flexible Behälter", "Skalierbare Produktionsanlagen", "Rekonfigurierbare Produktionsanlagen\nzur Anpassung auf neue Varianten", "Autonome\nMaschine-Maschine-Interaktion", "Lokale Auswertung\nvon Maschinendaten", "Auswertung in übergeordneten\nNetzwerken/Systemen (u.a. Cloud)", "Datenauswertung durch\nexterne Dienstleister/Dritte", "Condition Monitoring", "Predictive Maintenance", "Echtzeit-Simulation von Prozessen", "Digitaler Zwilling", "Einsatz von Wearables\nzur Instandhaltung", "Einsatz von AR/VR", "Mustererkennung von Maschinendaten", "Mustererkennung in der\nBildverarbeitung", "Autonome Produktionssteuerung\ndurch KI"],
            positive: [4],
            neutral: [3],
            negative: [2]
        }, {
            question: "Technologien und Zukunftstrends für den Karosseriebau",
            type: "yesno",
            values: ["quoted", "not quoted"],
            subquestions: ["Künstliche Intelligenz für\nautonome Prozessregelung", "Digitaler Zwilling der Anlage", "AR / VR (Einsatz in\nInstandhaltung / Montagefolge)", "Einsatz von Wearables\n(Tragbare Sensor- und Endgeräte)", "Durchgängige Nachverfolgung\njedes Bauteils (z. B. RFID)", "Fahrerlose Transportsysteme\nfür Bauteile", "Big Data Speicherung und Auswertung", "Intuitive (Roboter-)Programmierung\nund standardisierte Schnittstellen", "Predictive Maintenance", "Automatisierte Produktionsplanung", "Cloud Technologien"]
        }, {
            question: "Welche Unterstützungsangebote nutzen Sie bereits,\num Technologien für den Karosserie der Zukunft erfolgreich zu meistern?",
            type: "yesno",
            values: ["quoted", "not quoted"],
            subquestions: ["Forschungskooperationen", "Branchenübergreifender\nErfahrungsaustausch", "Öffentliche Förderung\nvon F&E Aufwänden", "Austausch mit Branchenmitgliedern\nauf Konferenzen und Workshops", "Regelmäßige Weiterbildungen", "Unterstützung durch\nexternes Beratungsunternehmen", "Software-Dienstleister\nzur Datenauswertung"]
        }, {
            question: "Welche weitere Unterstützung benötigt Ihr Unternehmen,\num den Zukunftsthemen des Karosseriebaus erfolgreich begegnen zu können?",
            type: "sentiment",
            values: ["Nicht bekannt", "Nicht relevant", "Weniger wichtig", "Wichtig", "Sehr wichtig"],
            subquestions: ["Änderung gesetzlicher\nRahmenbedingungen", "Mehr IT-Fachkräfte", "Mehr sonstige Fachkräfte", "Kundenübergreifende\nStandardisierung", "Marktübersicht durch Benchmarking\nvorhandener Technologien", "Nutzenübersicht unterschiedlicher\nTechnologien", "Mehr F&E im eigenen Unternehmen", "Forschungskooperationen", "Wissens-/Erfahrungsaustausch\nmit Branchenmitgliedern", "Änderung im Führungsverhalten", "Weiterbildungsangebote von\nTechnologieanbietern"],
            positive: [3, 4],
            neutral: [],
            negative: [2]
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

// global variable keeping track which question should be displayed
let active_question = 0;

// global array keeping track which categories of participants are currently active
// for each category there is an array of active incides, an empty array shall be equivalent to an array containing all possible indices
let active_categories = data.categories.map(() => []);

const viewBox_width = 1240;
let y_categories = 0, y_question = 50;
let height_categories = 0, height_question = 0;
// create svg to fill with visualization
const main_svg = d3.select("div#karobau_viz").append("svg")
    // .attr("height", 850)
    .attr("width", "100%")
    .attr("viewBox", `0 0 ${viewBox_width} 850`)
    .attr("preserveAspectRatio", "xMidYMin meet")
    .attr("id", "karobau_viz_svg")
    // TODO: remove border, just for debugging purposes
    .style("border", "black 1px solid");

// create circles for selecting categories
const structure_categories = main_svg.append(() => create_category_selection(0, y_categories));
// basic structure for sentiment questions
const structure_sentiment = main_svg.append(() => create_sentiment_scale(475, y_question)).attr("display", "none");
// basic structure for yes/no questions
const structure_yesno = main_svg.append(() => create_yesno_scale(475, y_question)).attr("display", "none");
// tabs to switch between questions
main_svg.append(() => create_tabs(475, 0));

update_categories();
update_question();

/**
 * @summary This function creates circles for selecting the categories of survey participants.
 * @param pos_x{number}
 * @param pos_y{number}
 * @returns {SVGGElement} a svg group element containing the circles
 */
function create_category_selection(pos_x = 0, pos_y = 0) {
    // create root group
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`)
        .attr("id", "category_selection");

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
        .attr("id", "question_sentiment");

    // text label for question
    root.append("text")
        .attr("dominant-baseline", "hanging")
        .attr("class", "question_label");

    // create root for bars
    root.append("g")
        .attr("transform", "translate(0, 40)")
        .attr("class", "bar_root");

    // create root for legend
    root.append("g")
        .attr("transform", "translate(600, 40)")
        .attr("class", "legend_root");

    return root.node();
}

function create_yesno_scale(pos_x = 0, pos_y = 0) {
    // create root group
    const root = d3.create("svg:g")
        .attr("transform", `translate(${pos_x}, ${pos_y})`)
        .attr("id", "question_yesno");

    // text label for question
    root.append("text")
        .attr("dominant-baseline", "hanging")
        .attr("class", "question_label");

    // create root for bars
    const root_bars = root.append("g")
        .attr("transform", "translate(0, 40)")
        .attr("class", "bar_root");

    // create axis
    root_bars.append("g")
        .attr("class", "axis");

    // create axis label
    root_bars.append("text")
        .text("Zustimmung in Prozent")
        .attr("class", "axis_label")
        .attr("dominant-baseline", "hanging")
        .attr("text-anchor", "middle");

    return root.node();
}

/**
 * @summary This function accumulates and counts the answers per question
 * @param i index of question in {@link data}
 * @returns {number[][]} two-dimensional array, for each subquestion an array with the number of answers per answer option
 */
function accumulate_answers(i) {
    const question = data.questions[i];
    // select valid answers based on categories and given question index
    let answers = data.answers
        // filter answers, only allow those where all subcategories are active
        .filter(d => d.categories.every((sub_cat, cat) => is_active(cat, sub_cat)))
        // get answers of question i
        .map(d => d.questions[i]);
    // transpose, list of answers per person => list of answers per subquestion
    let answers_transposed = d3.transpose(answers);
    // array [0, 1, ..., length - 1]
    let values = d3.range(question.values.length);
    if (question.type === "sentiment")
        // count answers as well as sum positive, neutral and negative answers
        return answers_transposed
            .map(subquestion => values.map(v => subquestion.filter(i => i === v).length))
            .map(a => ({
                answers: question.negative.map((d, i) => ({value: a[d], index: i, type: -1}))
                    .concat(question.neutral.map((d, i) => ({value: a[d], index: i, type: 0})))
                    .concat(question.positive.map((d, i) => ({value: a[d], index: i, type: 1}))),
                sum_negative: d3.sum(question.negative, j => a[j]),
                sum_neutral: d3.sum(question.neutral, j => a[j]),
                sum_positive: d3.sum(question.positive, j => a[j])
            }));
    else
        // count answers
        return answers_transposed.map(subquestion => values.map(v => subquestion.filter(i => i === v).length));
}

function accumulate_categories(i) {
    // select subcategory answers based on given category index and other active subcategories
    let other_categories = d3.range(data.categories.length).filter(j => j !== i);
    let answers = data.answers
        // filter by other active subcategories
        .filter(d => other_categories.every(o => is_active(o, d.categories[o])))
        // get list of subcategory answers for category i
        .map(d => d.categories[i]);
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
            update_question();
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
    const size_bigcircle = 220;
    const scale_bigcircle = d3.scaleBand()
        .domain(d3.range(data.categories.length))
        .range([0, size_bigcircle * data.categories.length])
        .padding(0.15);

    const colors_enabled = d3.schemeCategory10, colors_disabled = d3.schemeCategory10.map(c => {
        const d = d3.hsl(c);
        d.s = 0.2;
        return d;
    });

    // calculate required height for viewBox calculation
    // this is essentially the y coordinate of the bottom of the last big circle
    height_categories = scale_bigcircle.range()[1] - scale_bigcircle.step() * scale_bigcircle.paddingOuter();

    // select root group
    const root = main_svg.select("g#category_selection");

    // create a d3 hierarchy for each category
    const category_hierarchies = data.categories.map((c, i) => d3.hierarchy({
            name: c.category,
            children: d3.zip(c.values, accumulate_categories(i)).map((d, j) => ({
                name: d[0],
                value: d[1],
                category: i,
                subcategory: j
            })).filter(d => d.value > 0),
            category: i
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

    const bigcircle_origin = root.selectAll("g.bigcircle_origin").data(category_hierarchies).join("g")
        .attr("transform", (d, i) => `translate(0, ${scale_bigcircle(i)})`)
        .attr("class", "bigcircle_origin");

    // category label
    bigcircle_origin.selectAll("text.category_label").data(d => [d.data.name]).join("text")
        .text(d => d)
        .attr("x", 20)
        .attr("y", "-0.4em")
        .attr("class", "category_label");

    // draw the big circle
    bigcircle_origin.selectAll("circle.bigcircle").data(d => [d]).join("circle")
        .attr("class", "bigcircle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", d => d.r)
        .on("click", function (d) {
            // reenable all subcategories
            active_categories[d.data.category] = [];
            // redraw category selection
            update_categories();
            // redraw question
            update_question();
        });

    // draw the smaller circles
    // the big circle has depth 0, each child (and therefore the smaller ones) has depth 1 in the hierarchy
    bigcircle_origin
        .selectAll("circle.smallcircle")
        .data(d => d.descendants().filter(x => x.depth === 1), d => `${d.data.category}_${d.data.subcategory}`)
        .join(enter => enter.append("circle")
                .attr("class", "smallcircle")
                .attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .attr("fill", (d, i) => is_active(d.data.category, d.data.subcategory) ? colors_enabled[i] : colors_disabled[i])
                .on("click", function (d) {
                    let category = d.data.category, subcategory = d.data.subcategory;
                    // handling changing categories
                    let index = active_categories[category].indexOf(subcategory);
                    if (index > -1) {
                        // category.subcategory is currently active, remove from array
                        active_categories[category].splice(index, 1);
                    } else {
                        // category.subcategory is currently inactive, add to array
                        active_categories[category].push(subcategory);
                    }
                    // redraw category selection
                    update_categories();
                    // redraw question
                    update_question();
                })
                .call(e => e.transition().attr("r", d => d.r)
                ),
            update => update
                .call(u => u.transition()
                    .attr("r", d => d.r)
                    .attr("cx", d => d.x)
                    .attr("cy", d => d.y)
                    .attr("fill", (d, i) => is_active(d.data.category, d.data.subcategory) ? colors_enabled[i] : colors_disabled[i])
                ),
            exit => exit.call(e => e.transition().attr("r", 0).remove())
        );

    // origins for legend, using the same data as for the smaller circles
    bigcircle_origin.selectAll("g.legend").data(d => d.descendants().filter(x => x.depth === 1), d => `${d.data.category}_${d.data.subcategory}`).join(
        function (enter) {
            const origin = enter.append("g")
                .attr("class", "legend")
                .attr("transform", (d, i, a) => `translate(${scale_bigcircle.bandwidth() + 25}, ${scale_bigcircle.bandwidth() / 2 - 15 * a.length + 10 + 30 * i})`);

            // add small colored square
            origin.append("rect")
                .attr("width", 10)
                .attr("height", 10)
                .style("fill", (d, i) => colors_enabled[i]);

            // add label
            origin.append("text")
                .text(d => d.data.name)
                .attr("x", 15)
                .attr("y", 5)
                .attr("dominant-baseline", "central");
            return origin;
        }, function (update) {
            // all data is sorted by size of subcategory
            // therefore position and color is subject to change
            // update color immediately
            update.select("rect").style("fill", (d, i) => colors_enabled[i]);
            // animate label to new position
            update.transition()
                .attr("transform", (d, i, a) => `translate(${scale_bigcircle.bandwidth() + 25}, ${scale_bigcircle.bandwidth() / 2 - 15 * a.length + 10 + 30 * i})`);
            return update;
        }
    );

    return root.node();
}

function update_question() {
    if (data.questions[active_question].type === "sentiment") {
        structure_sentiment.attr("display", null);
        structure_yesno.attr("display", "none");
        update_sentiment_scale();
    } else {
        structure_sentiment.attr("display", "none");
        structure_yesno.attr("display", null);
        update_yesno_scale();
    }
    set_svg_size();
}

function update_sentiment_scale() {
    const height_bar = 40, width_bar = 300;

    const question = data.questions[active_question], answers = accumulate_answers(active_question);
    const local_data = d3.zip(question.subquestions, answers);
    const num_questions = local_data.length, num_values = question.values.length;

    // colors
    const color_very_negative = "#ff800e", color_slightly_negative = "#ffbc79", color_neutral = "#cfcfcf",
        color_slightly_positive = "#a2c8ec", color_very_positive = "#5f9ed1";
    const color_interpolator_negative = d3.interpolateRgb(color_very_negative, color_slightly_negative);
    const colors_negative = question.negative.length === 1 ? [color_interpolator_negative(1 / 3)] : question.negative.map((d, i, a) => color_interpolator_negative(i / a.length));
    const color_interpolator_positive = d3.interpolateRgb(color_slightly_positive, color_very_positive);
    const colors_positive = question.positive.length === 1 ? [color_interpolator_positive(2 / 3)]
        : question.positive.map((d, i, a) => color_interpolator_positive(i / a.length));
    const colors = colors_negative.concat(question.neutral.map(() => color_neutral)).concat(colors_positive);

    // calculation for centering the bars on the neutral subbars
    const num_left = d3.max(answers, a => a.sum_negative + a.sum_neutral / 2),
        num_right = d3.max(answers, a => a.sum_positive + a.sum_neutral / 2);
    // assumption for now: all bars have same scale, so they might differ in length based on non-standard answers
    const scale_bar_horizontal = d3.scaleLinear()
        .domain([0, num_left + num_right])
        .rangeRound([0, width_bar]);

    const scale_bar_vertical = d3.scaleBand()
        .domain(d3.range(num_questions))
        .rangeRound([0, height_bar * num_questions])
        .paddingInner(0.08);
    const scale_legend = d3.scaleBand()
        .domain(d3.range(num_values))
        .range([0, 30 * num_values]);

    // calculate required height for viewBox calculation
    // this is essentially the y coordinate of the bottom of the last bar
    height_question = scale_bar_vertical.range()[1] - scale_bar_vertical.step() * scale_bar_vertical.paddingOuter();

    // update text label for question
    update_text(structure_sentiment.select("text.question_label"), question.question);

    // select root for bars
    const root_bars = structure_sentiment.select("g.bar_root");
    // update bar containers
    const bar_container = root_bars.selectAll("g.bar_container").data(local_data, d => `${active_question}_${d[0]}`).join("g")
        .attr("class", "bar_container")
        .attr("transform", (d, i) => `translate(0, ${scale_bar_vertical(i)})`);

    // update individual bars
    const bar_origin = bar_container.selectAll("g.bar_origin").data(d => [d[1]]).join("g")
        .attr("class", "bar_origin")
        .attr("transform", "translate(250,0)");

    bar_origin.selectAll("rect").data(function (answ) {
        let offset = num_left - answ.sum_negative - answ.sum_neutral / 2;
        // calculate position of left edge of rect
        // the first bar should start at the calculated offset value
        let start_x = d3.cumsum([offset].concat(answ.answers.map(d => d.value))).map(scale_bar_horizontal);
        let bar_width = [].slice.call(start_x)
            .map((d, i, a) => a[i + 1] - d).slice(0, -1);
        return d3.zip(start_x, bar_width, colors);
    }).join(enter => enter.append("rect")
            .attr("height", scale_bar_vertical.bandwidth())
            .attr("width", d => d[1])
            .attr("x", d => d[0])
            .style("fill", d => d[2])
        , update => update.call(u => u.transition()
            .attr("width", d => d[1])
            .attr("x", d => d[0]))
    );

    // update text label
    bar_container.selectAll("text").data(d => [d[0]]).join("text")
        .attr("dominant-baseline", "central")
        .attr("y", scale_bar_vertical.bandwidth() / 2)
        .selectAll("tspan").data(d => d.split("\n")).join("tspan")
        .text(d => d)
        .attr("dy", (d, i, a) => i > 0 ? "1.2em" : a.length > 1 ? `-${(a.length - 1) * 0.6}em` : null)
        .attr("x", 0);


    // select root for legend
    const root_legend = structure_sentiment.select("g.legend_root");
    // update legend
    root_legend.selectAll("g.legend_origin").data(
        question.negative.concat(question.neutral).concat(question.positive).map(i => question.values[i])
    ).join(
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
                .style("fill", (d, i) => colors[i]);

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
                .style("fill", (d, i) => colors[i]);
            // update label text
            update.select("text")
                .text(d => d);
            return update;
        }
    )
}

function update_yesno_scale() {
    const height_bar = 40, width_bar = 300;

    const question = data.questions[active_question], answers = accumulate_answers(active_question);
    const local_data = d3.zip(question.subquestions, answers);
    const num_questions = local_data.length, num_answers = d3.max(answers, d => d[0] + d[1]);

    const scale_bar_horizontal = d3.scaleLinear()
        .domain([0, d3.max(answers, d => d[0]) * 100 / num_answers])
        .rangeRound([0, width_bar]);

    const scale_bar_vertical = d3.scaleBand()
        .domain(d3.range(num_questions))
        .rangeRound([0, height_bar * num_questions])
        .paddingInner(0.08);

    // calculate required height for viewBox calculation
    // this is the bottom of the axis label
    height_question = scale_bar_vertical.range()[1] + 30;

    // update text label for question
    update_text(structure_yesno.select("text.question_label"), question.question);

    // select root for bars
    const root_bars = structure_yesno.select("g.bar_root");
    // update bar containers
    const bar_container = root_bars.selectAll("g.bar_container").data(local_data, d => `${active_question}_${d[0]}`).join("g")
        .attr("class", "bar_container")
        .attr("transform", (d, i) => `translate(0, ${scale_bar_vertical(i)})`);

    // update individual bars
    bar_container.selectAll("rect.bar_yesno").data(d => [d[1][0] * 100 / num_answers]).join(enter => enter.append("rect")
            .attr("height", scale_bar_vertical.bandwidth())
            .attr("width", d => scale_bar_horizontal(d))
            .attr("x", 250)
            .attr("class", "bar_yesno")
        , update => update.transition()
            .attr("width", d => scale_bar_horizontal(d))
    );

    // update bar label
    bar_container.selectAll("text.bar_yesno_label").data(d => {
        const p = d[1][0] * 100 / num_answers;
        return [[p, scale_bar_horizontal(p) >= 30]];
    }).join(enter => enter.append("text")
            .attr("x", d => 250 + scale_bar_horizontal(d[0]) + (d[1] ? -10 : 10))
            .attr("y", scale_bar_vertical.bandwidth() / 2)
            .attr("class", "bar_yesno_label")
            .attr("dominant-baseline", "central")
            .attr("text-anchor", d => d[1] ? "end" : "start")
            .text(d => Math.round(d[0]))
        , update => update.transition()
            .attr("x", d => 250 + scale_bar_horizontal(d[0]) + (d[1] ? -10 : 10))
            .attr("text-anchor", d => d[1] ? "end" : "start")
            .text(d => Math.round(d[0]))
    );

    // update text label
    bar_container.selectAll("text.subquestion").data(d => [d[0]]).join("text")
        .attr("dominant-baseline", "central")
        .attr("y", scale_bar_vertical.bandwidth() / 2)
        .attr("class", "subquestion")
        .selectAll("tspan").data(d => d.split("\n")).join("tspan")
        .text(d => d)
        .attr("dy", (d, i, a) => i > 0 ? "1.2em" : a.length > 1 ? `-${(a.length - 1) * 0.6}em` : null)
        .attr("x", 0);

    // update axis
    root_bars.select("g.axis")
        .attr("transform", `translate(250, ${scale_bar_vertical.range()[1]})`)
        .transition()
        .call(d3.axisBottom(scale_bar_horizontal));

    // update axis label
    root_bars.select("text.axis_label")
        .attr("x", 250 + width_bar / 2)
        .attr("y", scale_bar_vertical.range()[1] + 30);
}

function is_active(category, subcategory) {
    return active_categories[category].length === 0 || active_categories[category].indexOf(subcategory) > -1;
}

function set_svg_size() {
    const required_height = Math.max(y_question + height_question, y_categories + height_categories);
    main_svg
        .attr("viewBox", `0 0 ${viewBox_width} ${required_height}`);
}
