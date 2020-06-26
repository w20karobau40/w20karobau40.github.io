/**
 * data structure containing survey questions and their answers
 */
export const categories = [
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
];
export const questions = [
    {
        question: "Der derzeitige Umbruch in der Industrie wird durch allgemeine Megatrends verursacht und beeinflusst,\nwelche unterschiedlich stark auf einzelne Branchen und Gewerke wirken.\nInwieweit sehen Sie den Karosseriebau von folgenden Megatrends beeinflusst?",
        type: "sentiment",
        values: ["Nicht betroffen", "Wenig", "Stark", "Sehr stark"],
        subquestions: ["Demografischer Wandel", "Fachkräftemangel", "Wissensverlust durch\nMitarbeiterwechsel", "Arbeitsplatzergonomie", "IT-Sicherheit (Cyber Security)", "Automatisierte Datenverarbeitung", "Verkauf eigener Produktionsdaten", "Ankauf relevanter Daten für\neigene Produkte und Anlagen", "Kostendruck durch\ninternationale Wettbewerber", "Internationale Zulieferketten", "Auftragsfertigung von\nBaugruppen und Karossen", "Steigende Produktvielfalt erfordert\nAnlagenflexibilität", "Verkürzung der Produktionszyklen", "Volumenflexibilität aufgrund\nschwankender Nachfrage", "Energieeffizienz", "Rohstoffverknappung", "Abfallvermeidung"],
        positive: [2, 3],
        neutral: [],
        negative: [0, 1],
        categories: [
            {name: "Arbeit 4.0", values: [0, 1, 2, 3]},
            {name: "Digitale Transformation", values: [4, 5, 6, 7]},
            {name: "Globalisierung", values: [8, 9, 10]},
            {name: "Diversifizierung", values: [11, 12, 13]},
            {name: "Umwelt und Ressourcen", values: [14, 15, 16]}
        ],
        label: "Megatrends"
    }, {
        question: "Technologien entwickeln sich kontinuierlich. Technische Neuerungen bieten enorme Chancen\nzur Erhöhungder Wertschöpfung und Verbesserung von Anlagenfähigkeiten.\nBitte bewerten Sie den derzeitigen Implementierungsstatus für\nfolgende Hardware-Technologien im automobilen Karosseriebau Ihres Unternehmens bzw. bei Ihren Kunden.",
        type: "sentiment",
        values: ["Nicht bekannt", "Nicht relevant", "Nicht vorhanden", "Teilweise vorhanden", "Vollständig vorhanden"],
        subquestions: ["Fahrerlose Transportsysteme", "Produktnachverfolgbarkeit durch eind.\ndigitale Kennzeichnung jedes Bauteils", "Produktlokalisierung", "Schutzzaunloser Robotereinsatz", "Ortsflexible Roboter", "Intuitive (Roboter-)Programmierung\nund standardisierte Schnittstellen", "Mensch-Roboter-Kooperation", "Griff in die (ungeordnete) Kiste", "Inbetriebnahme auf Basis\nvon offline Bahnplanung", "Flexible Greifer", "Flexible Spannvorrichtungen", "Flexible Behälter", "Skalierbare Produktionsanlagen", "Rekonfigurierbare Produktionsanlagen\nzur Anpassung auf neue Varianten", "Autonome\nMaschine-Maschine-Interaktion", "Lokale Auswertung\nvon Maschinendaten", "Auswertung in übergeordneten\nNetzwerken/Systemen (u.a. Cloud)", "Datenauswertung durch\nexterne Dienstleister/Dritte", "Condition Monitoring", "Predictive Maintenance", "Echtzeit-Simulation von Prozessen", "Digitaler Zwilling", "Einsatz von Wearables\nzur Instandhaltung", "Einsatz von AR/VR", "Mustererkennung von Maschinendaten", "Mustererkennung in der\nBildverarbeitung", "Autonome Produktionssteuerung\ndurch KI"],
        positive: [4],
        neutral: [3],
        negative: [2],
        categories: [
            {name: "Logistik", values: [0, 1, 2]},
            {name: "Robotik", values: [3, 4, 5, 6, 7, 8]},
            {name: "Flexibilität (Fertigung mehrerer Derivate auf einer Anlage)", values: [9, 10, 11, 12, 13]},
            // TODO: typo? IIoT -  IoT ?
            {name: "Digitalisierung und IIoT", values: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23]},
            {name: "Künstliche Intelligenz", values: [24, 25, 26]}
        ],
        label: "Implementierungs-\nstand"
    }, {
        question: "Die Vielzahl technologischer Möglichkeiten erfordert Priorisierung.\nWählen Sie aus den unten genannten Technologien bitte die 3 relevantesten für den Karosseriebau der Zukunft.",
        type: "yesno",
        values: ["quoted", "not quoted"],
        subquestions: ["Künstliche Intelligenz für\nautonome Prozessregelung", "Digitaler Zwilling der Anlage", "AR / VR (Einsatz in\nInstandhaltung / Montagefolge)", "Einsatz von Wearables\n(Tragbare Sensor- und Endgeräte)", "Durchgängige Nachverfolgung\njedes Bauteils (z. B. RFID)", "Fahrerlose Transportsysteme\nfür Bauteile", "Big Data Speicherung und Auswertung", "Intuitive (Roboter-)Programmierung\nund standardisierte Schnittstellen", "Predictive Maintenance", "Automatisierte Produktionsplanung", "Cloud Technologien"],
        label: "Zukünftige\nTechnologien"
    }, {
        question: "Es bestehen diverse Angebote für Unternehmen,\num sich in der Vielfalt technologischer Möglichkeiten orientieren zu können.\nWelche Unterstützungsangebote nutzen Sie bereits, um Technologien\nfür den Karosseriebau der Zukunft erfolgreich zu meistern?",
        type: "yesno",
        values: ["quoted", "not quoted"],
        subquestions: ["Forschungskooperationen", "Branchenübergreifender\nErfahrungsaustausch", "Öffentliche Förderung\nvon F&E Aufwänden", "Austausch mit Branchenmitgliedern\nauf Konferenzen und Workshops", "Regelmäßige Weiterbildungen", "Unterstützung durch\nexternes Beratungsunternehmen", "Software-Dienstleister\nzur Datenauswertung"],
        label: "Verwendete\nUnterstützung"
    }, {
        question: "Neben den bestehenden Angebote interessieren wir uns für weitere Unterstützungsmöglichkeiten,\ndie Sie benötigen, um den Zukunftsthemen des Karosseriebaus erfolgreich zu begegnen.\nWelche weitere Untersützung benötigt Ihr Unternehmen,\num den Zukunftsthemen des Karosseriebaus erfolgreich begegnen zu können?",
        type: "sentiment",
        values: ["Nicht bekannt", "Nicht relevant", "Weniger wichtig", "Wichtig", "Sehr wichtig"],
        subquestions: ["Änderung gesetzlicher\nRahmenbedingungen", "Mehr IT-Fachkräfte", "Mehr sonstige Fachkräfte", "Kundenübergreifende\nStandardisierung", "Marktübersicht durch Benchmarking\nvorhandener Technologien", "Nutzenübersicht unterschiedlicher\nTechnologien", "Mehr F&E im eigenen Unternehmen", "Forschungskooperationen", "Wissens-/Erfahrungsaustausch\nmit Branchenmitgliedern", "Änderung im Führungsverhalten", "Weiterbildungsangebote von\nTechnologieanbietern"],
        positive: [3, 4],
        neutral: [],
        negative: [2],
        label: "Benötigte\nUnterstützung"
    }
];
export const answers = [
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
];
