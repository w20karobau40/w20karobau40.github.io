/**
 * data structure containing survey questions and their answers
 */
export const categories = [{
    category: "Company size",
    values: ["< 10 employees", "11 - 50 employees", "51 - 250 employees", "251 - 500 employees", "> 500 employees"]
}, {
    category: "Value chain level",
    values: ["Manufacturing company", "Component and plant supplier", "Engineering service provider"]
}, {
    category: "Supplier level", values: ["OEM", "(First) Tier-1", "(Second) Tier-2", "(Third) Tier-3"]
}, {
    category: "Position within the company",
    values: ["Executive", "Management", "Production Management", "Engineer", "Foreman", "Plant Operator"]
}];
export const questions = [{
    question: "The current upheaval in the industry is caused and influenced by general megatrends,\nwhich affect individual sectors and trades to varying degrees.\n\nTo what extent do you see the following technologies already implemented in the body shop today?",
    type: "sentiment",
    values: ["Very Strong", "Strong", "Little", "Not Affected"],
    subquestions: ["Demographic change", "Shortage of skilled workers", "Loss of knowledge due to\nemployee turnover", "Workplace ergonomics", "Cyber Security", "Automated data processing", "Sale of own production data", "Purchase of relevant data for\nown products and plants", "Cost pressure from\ninternational competitors", "International supply chains", "Contract manufacturing of\nsub assemblies and whole body", "Increasing product diversity\nrequires plant flexibility", "Shortening of production cycles", "Flexibility in production volume\ndue to fluctuating demand", "Energy efficiency", "Shortage of raw materials", "Waste prevention"],
    positive: [1, 0],
    neutral: [],
    negative: [3, 2],
    categories: [{name: "Work 4.0", values: [0, 1, 2, 3]}, {
        name: "Digital transformation",
        values: [4, 5, 6, 7]
    }, {name: "Globalisation", values: [8, 9, 10]}, {
        name: "Diversification",
        values: [11, 12, 13]
    }, {name: "Environment and resources", values: [14, 15, 16]}],
    label: "Megatrends"
}, {
    question: "Technologies are continuously evolving. Technical innovations offer enormous opportunities to increase\nvalue creation and improve plant capabilities.\n\nPlease rate the current implementation status for the following hardware technologies\nin your company's or your customers' automotive body shop.",
    type: "sentiment",
    values: ["Completely present", "Partly present", "Not present", "Not relevant", "Not known"],
    subquestions: ["Automated guided vehicles", "Product traceability through unique\ndigital id of each component", "Product localization", "Robots without protective fence", "Mobile Robots", "Intuitive (robot) programmierung\nand standardized interfaces", "Human-robot cooperation", "Bin picking (unsorted bins)", "Commissioning based on\noffline path planning", "Flexible grippers", "Flexible jigs/clamps", "Flexible containers/bins", "Scalable production plants", "Reconfigurable production lines\nto adapt to new variants", "Autonomous\nmachine-machine interaction", "Local evaluation of machine data", "Evaluation in higher-level networks/\nsystems (including ERP, cloud)", "Data evaluation by external\nservice providers/third parties", "Condition Monitoring", "Predictive Maintenance", "Real-time simulation of processes", "Digital twin", "Use of wearables for maintenance", "Use of AR/VR", "Pattern recognition of machine data", "Pattern recognition in\nimage processing", "Autonomous production control using AI"],
    positive: [0],
    neutral: [1],
    negative: [2],
    categories: [{name: "Logistics", values: [0, 1, 2]}, {
        name: "Robotics",
        values: [3, 4, 5, 6, 7, 8]
    }, {
        name: "Flexibility (production of several products on one line)",
        values: [9, 10, 11, 12, 13]
    }, {
        name: "Digitization and IIoT",
        values: [14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
    }, {name: "Artificial Intelligence", values: [24, 25, 26]}],
    label: "Implementation\nstatus"
}, {
    question: "The multitude of technological possibilities requires prioritization.\n\nFrom the technologies listed below, please select the 3 most relevant for the body shop of the future.",
    type: "yesno",
    values: ["not quoted", "quoted"],
    subquestions: ["Artificial intelligence for\nautonomous process control", "Digital twin of the entire plant", "AR / VR (use in maintenance /\nassembly sequencing)", "Use of wearables (portable sensor\nand terminal devices)", "End-to-end tracking of each\ncomponent (e.g. RFID)", "Automated guided vehicles\nfor components", "Big Data storage and analysis", "Intuitive (robot) programming and\nstandardized interfaces", "Predictive Maintenance", "Automated production planning", "Cloud technologies"],
    label: "Technologies and\nfuture trends"
}, {
    question: "There are various offers for companies to orient themselves in the variety of technological possibilities.\n\nPlease indicate which ones you already use.",
    type: "yesno",
    values: ["not quoted", "quoted"],
    subquestions: ["R&D cooperation", "Cross-industry exchange of experience", "Public funding of R&D efforts", "Exchange with industry members at\nconferences and workshops", "Regular training courses", "Support from external\nconsulting companies", "Software service providers\nfor data evaluation"],
    label: "Support needs"
}, {
    question: "\n\nWhat other support options does your company need in order to successfully address the future issues of automotive body shop?",
    type: "sentiment",
    values: ["Very important", "Important", "Less important", "Not relevant", "Not known"],
    subquestions: ["Change in legal framework conditions", "More IT specialists", "More other specialists", "Standardization across customers", "Market overview through benchmarking\nof existing technologies", "Overview of benefits of\ndifferent technologies", "More R&D in own company", "R&D cooperation", "Exchange of knowledge/experience\nwith industry members", "Change in management /\nleadership behavior", "More offers from technology providers"],
    positive: [1, 0],
    neutral: [],
    negative: [2],
    label: "Support needs"
}];
