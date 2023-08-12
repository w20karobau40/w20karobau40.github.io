/**
 * data structure containing survey questions and their answers
 */
export const categories = [
    {
        category: "Company size",
        values: ["< 10 employees", "11 - 50 employees", "51 - 250 employees", "251 - 500 employees", "> 500 employees"]
    }, {
        category: "Value chain level",
        values: ["Manufacturing company", "Component and plant supplier", "Engineering service provider"]
    }, {
        category: "Supplier level",
        values: ["OEM", "(First) Tier-1", "(Second) Tier-2", "(Third) Tier-3"]
    }, {
        category: "Position within the company",
        values: ["Executive", "Management", "Production Management", "Engineer", "Foreman", "Plant Operator"]
    }
];
export const questions = [
    {
        question: "The current upheaval in the industry is caused and influenced by general megatrends,\nwhich affect individual sectors and trades to varying degrees.\n\nTo what extent do you see the following technologies already implemented in the body shop today?",
        type: "sentiment",
        values: ["Very Strong", "Strong", "Little", "Not Affected"],
        subquestions: ["Demographic change", "Shortage of skilled workers", "Loss of knowledge due to staff turnover", "Workplace ergonomics", "IT security (cyber security)", "Automated data processing", "Sale of own production data", "Purchase of relevant data for\nown products and plants", "Cost pressure due to\ninternational competitors", "International Supply Chains", "Contract Manufacturing of\nAssemblies and Bodies", "Increasing Product Variety\nRequires Plant Flexibility", "Shortening Production Cycles", "Volume Flexibility Due to\nFluctuating Demand", "Energy Efficiency", "Shortage of Raw Materials", "Waste Avoidance"],
        positive: [1, 0],
        neutral: [],
        negative: [3, 2],
        categories: [
            {name: "Work 4.0", values: [0, 1, 2, 3]},
            {name: "Digital transformation", values: [4, 5, 6, 7]},
            {name: "Globalisation", values: [8, 9, 10]},
            {name: "Diversification", values: [11, 12, 13]},
            {name: "Environment and resources", values: [14, 15, 16]}
        ],
        label: "Megatrends"
    }, {
        question: "Technologien entwickeln sich kontinuierlich. Technische Neuerungen bieten enorme Chancen\nzur Erhöhungder Wertschöpfung und Verbesserung von Anlagenfähigkeiten.\n\nBitte bewerten Sie den derzeitigen Implementierungsstatus für\nfolgende Hardware-Technologien im automobilen Karosseriebau Ihres Unternehmens bzw. bei Ihren Kunden.",
        type: "sentiment",
        values: ["Completely present", "Partly present", "Not present", "Not relevant", "Not known"],
        subquestions: ["Fahrerlose Transportsysteme", "Produktnachverfolgbarkeit durch eind.\ndigitale Kennzeichnung jedes Bauteils", "Produktlokalisierung", "Schutzzaunloser Robotereinsatz", "Ortsflexible Roboter", "Intuitive (Roboter-)Programmierung\nund standardisierte Schnittstellen", "Mensch-Roboter-Kooperation", "Griff in die (ungeordnete) Kiste", "Inbetriebnahme auf Basis\nvon offline Bahnplanung", "Flexible Greifer", "Flexible Spannvorrichtungen", "Flexible Behälter", "Skalierbare Produktionsanlagen", "Rekonfigurierbare Produktionsanlagen\nzur Anpassung auf neue Varianten", "Autonome\nMaschine-Maschine-Interaktion", "Lokale Auswertung\nvon Maschinendaten", "Auswertung in übergeordneten\nNetzwerken/Systemen (u.a. Cloud)", "Datenauswertung durch\nexterne Dienstleister/Dritte", "Condition Monitoring", "Predictive Maintenance", "Echtzeit-Simulation von Prozessen", "Digitaler Zwilling", "Einsatz von Wearables\nzur Instandhaltung", "Einsatz von AR/VR", "Mustererkennung von Maschinendaten", "Mustererkennung in der\nBildverarbeitung", "Autonome Produktionssteuerung\ndurch KI"],
        positive: [0],
        neutral: [1],
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
        question: "Die Vielzahl technologischer Möglichkeiten erfordert Priorisierung.\n\nWählen Sie aus den unten genannten Technologien bitte die 3 relevantesten für den Karosseriebau der Zukunft.",
        type: "yesno",
        values: ["not quoted", "quoted"],
        subquestions: ["Künstliche Intelligenz für\nautonome Prozessregelung", "Digitaler Zwilling der Anlage", "AR / VR (Einsatz in\nInstandhaltung / Montagefolge)", "Einsatz von Wearables\n(Tragbare Sensor- und Endgeräte)", "Durchgängige Nachverfolgung\njedes Bauteils (z. B. RFID)", "Fahrerlose Transportsysteme\nfür Bauteile", "Big Data Speicherung und Auswertung", "Intuitive (Roboter-)Programmierung\nund standardisierte Schnittstellen", "Predictive Maintenance", "Automatisierte Produktionsplanung", "Cloud Technologien"],
        label: "Zukünftige\nTechnologien"
    }, {
        question: "Es bestehen diverse Angebote für Unternehmen,\num sich in der Vielfalt technologischer Möglichkeiten orientieren zu können.\n\nWelche Unterstützungsangebote nutzen Sie bereits, um Technologien\nfür den Karosseriebau der Zukunft erfolgreich zu meistern?",
        type: "yesno",
        values: ["not quoted", "quoted"],
        subquestions: ["Forschungskooperationen", "Branchenübergreifender\nErfahrungsaustausch", "Öffentliche Förderung\nvon F&E Aufwänden", "Austausch mit Branchenmitgliedern\nauf Konferenzen und Workshops", "Regelmäßige Weiterbildungen", "Unterstützung durch\nexternes Beratungsunternehmen", "Software-Dienstleister\nzur Datenauswertung"],
        label: "Verwendete\nUnterstützung"
    }, {
        question: "Neben den bestehenden Angebote interessieren wir uns für weitere Unterstützungsmöglichkeiten,\ndie Sie benötigen, um den Zukunftsthemen des Karosseriebaus erfolgreich zu begegnen.\n\nWelche weitere Untersützung benötigt Ihr Unternehmen,\num den Zukunftsthemen des Karosseriebaus erfolgreich begegnen zu können?",
        type: "sentiment",
        values: ["Very important", "Important", "Less important", "Not relevant", "Not known"],
        subquestions: ["Änderung gesetzlicher\nRahmenbedingungen", "Mehr IT-Fachkräfte", "Mehr sonstige Fachkräfte", "Kundenübergreifende\nStandardisierung", "Marktübersicht durch Benchmarking\nvorhandener Technologien", "Nutzenübersicht unterschiedlicher\nTechnologien", "Mehr F&E im eigenen Unternehmen", "Forschungskooperationen", "Wissens-/Erfahrungsaustausch\nmit Branchenmitgliedern", "Änderung im Führungsverhalten", "Weiterbildungsangebote von\nTechnologieanbietern"],
        positive: [1, 0],
        neutral: [],
        negative: [2],
        label: "Benötigte\nUnterstützung"
    }
];
