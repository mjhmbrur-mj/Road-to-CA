// BTF: five full mock examinations, 50 MCQs each
const btfMockTests = [
    {
        "id": 1,
        "title": "Mock Test 1",
        "questions": [
            {
                "id": 1001,
                "q": "Under Mendelow's Stakeholder Matrix, how should a business manage stakeholders who possess HIGH power over the organisation but LOW interest in its daily strategies?",
                "options": [
                    "Keep satisfied (ensure their key concerns are met so they do not become dissatisfied and exercise their power)",
                    "Key players (engage closely in every operational decision)",
                    "Minimal effort (ignore their requirements completely)",
                    "Keep informed (send newsletters but disregard their demands)"
                ],
                "answer": 0,
                "explanation": "High power / low interest stakeholders (such as institutional investors or passive regulators) must be kept satisfied to prevent them from intervening actively."
            },
            {
                "id": 1002,
                "q": "What is the correct sequence of the strategic planning hierarchy from broadest overarching purpose to specific operational targets?",
                "options": [
                    "Mission -> Goals -> Strategic Objectives -> Operational Plans and Standards",
                    "Operational Standards -> Plans -> Mission -> Goals",
                    "Plans -> Mission -> Standards -> Goals",
                    "Goals -> Standards -> Mission -> Plans"
                ],
                "answer": 0,
                "explanation": "Mission defines fundamental purpose, goals set broad aspirations, objectives quantify targets (SMART), and plans/standards specify execution."
            },
            {
                "id": 1003,
                "q": "Which concept of sustainability holds that business performance should be measured across three dimensions: People, Planet, and Profit?",
                "options": [
                    "Triple Bottom Line (TBL)",
                    "Porter's Five Forces",
                    "Taylor's Scientific Management",
                    "Maslow's Hierarchy of Needs"
                ],
                "answer": 0,
                "explanation": "Elkington's Triple Bottom Line evaluates social (People), environmental (Planet), and financial (Profit) performance."
            },
            {
                "id": 1004,
                "q": "When a senior manager delegates a task to a subordinate, what happens to authority, responsibility, and accountability?",
                "options": [
                    "Authority is granted to perform the task and the subordinate assumes responsibility, while the manager retains ultimate accountability for the outcome",
                    "The manager transfers 100% of accountability and is no longer answerable if the task fails",
                    "Responsibility is transferred without any authority to act",
                    "Accountability is eliminated entirely across the hierarchy"
                ],
                "answer": 0,
                "explanation": "Delegation transfers authority and operational responsibility, but ultimate accountability always remains with the delegating manager."
            },
            {
                "id": 1005,
                "q": "Under Henry Mintzberg's classification of managerial roles, which category includes acting as a 'figurehead', 'leader', and 'liaison'?",
                "options": [
                    "Interpersonal roles",
                    "Informational roles",
                    "Decisional roles",
                    "Technical accounting roles"
                ],
                "answer": 0,
                "explanation": "Mintzberg grouped managerial roles into Interpersonal (figurehead, leader, liaison), Informational (monitor, disseminator, spokesperson), and Decisional (entrepreneur, disturbance handler, resource allocator, negotiator)."
            },
            {
                "id": 1006,
                "q": "Which organisational structure groups staff by specialist skills (e.g., Marketing, Finance, Production, HR) and works best in stable environments with single or few product lines?",
                "options": [
                    "Functional structure",
                    "Matrix structure",
                    "Virtual network structure",
                    "Entrepreneurial structure"
                ],
                "answer": 0,
                "explanation": "Functional structures pool specialist expertise into departments, achieving economies of scale in stable, single-product environments."
            },
            {
                "id": 1007,
                "q": "What is a major disadvantage of a 'matrix' organisational structure?",
                "options": [
                    "Dual authority/reporting lines can cause role conflict, confusion, slower decision-making, and higher administrative overhead",
                    "Complete lack of communication between functional specialists and project managers",
                    "Inability to handle complex multi-disciplinary projects",
                    "Zero flexibility when responding to customer needs"
                ],
                "answer": 0,
                "explanation": "In a matrix structure, staff report to both a functional manager and a project/product manager, violating unity of command."
            },
            {
                "id": 1008,
                "q": "Which legal business structure gives owners limited liability protection AND separate legal personality, while prohibiting invitations to the general public to subscribe for shares?",
                "options": [
                    "Private limited company (Ltd)",
                    "Sole tradership",
                    "General partnership",
                    "Public limited company (PLC)"
                ],
                "answer": 0,
                "explanation": "A private limited company is a separate legal entity with limited liability whose shares cannot be offered publicly on a stock exchange."
            },
            {
                "id": 1009,
                "q": "In Ansoff's Product-Market Growth Matrix, what strategy is a business pursuing when it launches a brand-new product range into a completely new geographical or customer market?",
                "options": [
                    "Diversification",
                    "Market penetration",
                    "Product development",
                    "Market development"
                ],
                "answer": 0,
                "explanation": "Diversification involves new products in new markets, carrying the highest risk among Ansoff's four growth strategies."
            },
            {
                "id": 1010,
                "q": "What is the primary distinction between 'Business Continuity Planning (BCP)' and 'Disaster Recovery (DR)'?",
                "options": [
                    "BCP focuses on maintaining critical business operations during and after a disruption; DR is a subset focused specifically on restoring IT systems, data, and technical infrastructure",
                    "DR covers HR policies; BCP covers only office stationery",
                    "BCP applies only to banks; DR applies only to farms",
                    "There is no relationship between BCP and DR"
                ],
                "answer": 0,
                "explanation": "BCP ensures overall operational resilience, whereas Disaster Recovery specifically restores technology and data systems after an outage."
            },
            {
                "id": 1011,
                "q": "Which of the following represents the four core tasks of the finance function?",
                "options": [
                    "Recording financial transactions, management accounting (planning/control/decision-making), financial reporting, and treasury management",
                    "Recruitment, factory maintenance, advertising, and shipping",
                    "Product design, quality inspection, retail display, and customer complaints",
                    "Legal litigation, public relations, catering, and security"
                ],
                "answer": 0,
                "explanation": "The finance function handles transaction recording, management accounting, external financial reporting, and treasury/cash management."
            },
            {
                "id": 1012,
                "q": "How does 'management accounting information' differ from 'financial accounting information'?",
                "options": [
                    "Management accounting is forward-looking, flexible in format, detailed, and prepared for internal managers; financial accounting is historical, standardized (IFRS), and prepared primarily for external users",
                    "Management accounting is required by statute to be audited; financial accounting is optional",
                    "Financial accounting contains only non-monetary units; management accounting contains only tax returns",
                    "Both are identical in frequency, format, and target audience"
                ],
                "answer": 0,
                "explanation": "Management accounting supports internal planning and control without statutory format rules, whereas financial accounting follows IFRS/law for external reporting."
            },
            {
                "id": 1013,
                "q": "Which user group primarily uses financial statements to assess an entity's ability to pay interest and repay loan principal on due dates?",
                "options": [
                    "Lenders and creditors (banks and bondholders)",
                    "Trade union shop stewards",
                    "Local environmental campaigners",
                    "Rival marketing interns"
                ],
                "answer": 0,
                "explanation": "Lenders focus on liquidity, solvency, cash flow generation, and interest cover to evaluate default risk."
            },
            {
                "id": 1014,
                "q": "Which of the following is a recognized LIMITATION of historical financial statements in meeting users' needs?",
                "options": [
                    "Backward-looking historical cost basis, exclusion of non-financial/intangible drivers (such as brand value or staff morale), and reliance on subjective accounting estimates",
                    "They contain too much forward-looking strategic data",
                    "They are published every single morning before trading opens",
                    "They eliminate all accounting judgments"
                ],
                "answer": 0,
                "explanation": "Financial statements reflect past transactions, omit many qualitative intangibles, and depend on management estimates."
            },
            {
                "id": 1015,
                "q": "In the CIA triad of information security, what do the three letters stand for?",
                "options": [
                    "Confidentiality, Integrity, and Availability",
                    "Cash, Inventory, and Assets",
                    "Control, Inspection, and Audit",
                    "Cost, Income, and Accounting"
                ],
                "answer": 0,
                "explanation": "Information security aims to protect Confidentiality (authorized access only), Integrity (accuracy/completeness), and Availability (accessible when needed)."
            },
            {
                "id": 1016,
                "q": "What is 'natural capital' in sustainability and corporate reporting?",
                "options": [
                    "The world's stocks of natural assets—including geology, soil, air, water, and all living things—from which businesses and society derive ecosystem services",
                    "Ordinary share capital issued at par value",
                    "Cash held in a company's current bank account",
                    "Retained earnings accumulated over ten years"
                ],
                "answer": 0,
                "explanation": "Natural capital refers to environmental resources and ecosystems that underpin economic activity."
            },
            {
                "id": 1017,
                "q": "Which financial market deals primarily in SHORT-TERM debt instruments (maturities of less than one year), such as Treasury bills, commercial paper, and certificates of deposit?",
                "options": [
                    "The money market",
                    "The equity capital market",
                    "The property mortgage market",
                    "The long-term corporate bond market"
                ],
                "answer": 0,
                "explanation": "Money markets facilitate short-term liquidity borrowing and lending (under 1 year), whereas capital markets provide long-term equity and debt finance."
            },
            {
                "id": 1018,
                "q": "What is the primary distinction between a 'primary capital market' and a 'secondary capital market'?",
                "options": [
                    "Primary market is where new securities are issued to raise fresh capital for companies; secondary market (e.g., Dhaka Stock Exchange trading) is where existing securities are traded between investors",
                    "Primary market trades only bonds; secondary market trades only foreign currency",
                    "Secondary market raises new cash directly for the issuing company; primary market does not",
                    "Primary market is unregulated; secondary market is illegal"
                ],
                "answer": 0,
                "explanation": "Primary issues (IPOs, rights issues) raise funds for the issuer; secondary trading provides liquidity and price discovery for investors."
            },
            {
                "id": 1019,
                "q": "Which source of equity finance is raised by offering existing shareholders the opportunity to buy new shares in proportion to their current shareholding, usually at a discount to market price?",
                "options": [
                    "Rights issue",
                    "Debenture issue",
                    "Factoring",
                    "Bank overdraft"
                ],
                "answer": 0,
                "explanation": "A rights issue preserves existing shareholders' proportional ownership (pre-emption rights) while raising new equity capital."
            },
            {
                "id": 1020,
                "q": "Why is debt finance generally cheaper in terms of cost of capital than equity finance for a profitable company?",
                "options": [
                    "Debt holders face lower risk than ordinary shareholders (priority claim on interest and liquidation assets) AND interest payments are typically tax-deductible",
                    "Debt never has to be repaid",
                    "Dividends on ordinary shares are legally mandatory every month",
                    "Debt holders have unlimited voting control over the board"
                ],
                "answer": 0,
                "explanation": "Lower investor risk plus the tax shield on interest make debt's after-tax cost lower than equity, though excessive gearing increases financial risk."
            },
            {
                "id": 1021,
                "q": "What is 'venture capital'?",
                "options": [
                    "High-risk equity (and sometimes mezzanine) finance provided to early-stage or high-growth unlisted companies with strong expansion potential, often accompanied by strategic mentorship",
                    "Short-term overnight interbank lending",
                    "A government grant that never requires commercial return",
                    "Trade credit offered by raw material suppliers"
                ],
                "answer": 0,
                "explanation": "Venture capitalists invest equity capital in high-growth startups/SMEs in exchange for significant equity stakes and board involvement."
            },
            {
                "id": 1022,
                "q": "Which trade finance instrument is a written undertaking by a bank (on behalf of an importer) guaranteeing payment to an exporter provided stipulated shipping documents are presented in strict compliance?",
                "options": [
                    "Letter of Credit (L/C)",
                    "Operating lease",
                    "Commercial paper",
                    "Rights issue"
                ],
                "answer": 0,
                "explanation": "A Letter of Credit reduces payment/country risk in international trade by substituting the issuing bank's creditworthiness for the importer's."
            },
            {
                "id": 1023,
                "q": "What is a 'green bond' in sustainable business finance?",
                "options": [
                    "A fixed-income debt instrument whose proceeds are ring-fenced exclusively to finance or re-finance eligible environmental or climate-friendly projects (e.g., renewable energy, clean transport)",
                    "Any share certificate printed on green paper",
                    "A short-term overdraft used to pay staff bonuses",
                    "A loan guaranteed by an agricultural pesticide manufacturer"
                ],
                "answer": 0,
                "explanation": "Green bonds dedicate raised debt proceeds specifically to projects delivering measurable environmental benefits."
            },
            {
                "id": 1024,
                "q": "Which statutory body in Bangladesh was established under the Financial Reporting Act 2015 to regulate the financial reporting and auditing profession and set accounting/auditing standards?",
                "options": [
                    "Financial Reporting Council (FRC)",
                    "Bangladesh Telecommunication Regulatory Commission (BTRC)",
                    "National Board of Revenue (NBR)",
                    "Bangladesh Export Processing Zones Authority (BEPZA)"
                ],
                "answer": 0,
                "explanation": "The FRC Bangladesh oversees public interest entities' financial reporting, sets standards, and monitors auditors under the FRA 2015."
            },
            {
                "id": 1025,
                "q": "Which professional body regulates Chartered Accountants in Bangladesh under the Bangladesh Chartered Accountants Order 1973?",
                "options": [
                    "The Institute of Chartered Accountants of Bangladesh (ICAB)",
                    "The Institute of Cost and Management Accountants of Bangladesh (ICMAB)",
                    "The Bar Council of Bangladesh",
                    "The Dhaka Chamber of Commerce"
                ],
                "answer": 0,
                "explanation": "ICAB is the statutory national professional accountancy body regulating Chartered Accountants in Bangladesh."
            },
            {
                "id": 1026,
                "q": "What is the 'agency problem' in corporate governance?",
                "options": [
                    "The conflict of interest arising when directors (agents) manage a company on behalf of shareholders (principals) and may pursue personal perks, short-term bonuses, or empire-building rather than shareholder wealth",
                    "A disagreement between two external advertising agencies",
                    "A shortage of raw materials in a factory",
                    "A delay in shipping goods to overseas agents"
                ],
                "answer": 0,
                "explanation": "Separation of ownership and control creates potential misalignment between managers' self-interest and owners' long-term interests."
            },
            {
                "id": 1027,
                "q": "Which governance perspective argues that directors have a duty to balance the legitimate interests of all groups affected by the company (employees, customers, suppliers, community, environment) rather than shareholders alone?",
                "options": [
                    "Stakeholder theory (pluralist approach)",
                    "Pure shareholder primacy theory",
                    "Transaction cost economics",
                    "Scientific management theory"
                ],
                "answer": 0,
                "explanation": "Stakeholder theory recognizes accountability to a broad network of stakeholders who affect or are affected by corporate decisions."
            },
            {
                "id": 1028,
                "q": "How does a 'market-based (outsider) financial system' (e.g., US/UK) differ from a 'bank-based (insider) financial system' (e.g., Germany/Japan) in terms of corporate governance?",
                "options": [
                    "Market-based systems feature dispersed share ownership, active stock markets, and takeover threats; bank-based systems feature concentrated ownership, close long-term bank/family relationships, and insider board representation",
                    "Market-based systems prohibit public stock exchanges",
                    "Bank-based systems ban all corporate bank loans",
                    "Both systems have identical ownership concentration and governance structures"
                ],
                "answer": 0,
                "explanation": "Market-based systems rely on capital market transparency and external takeovers, whereas bank-based systems rely on direct monitoring by major banks/blockholders."
            },
            {
                "id": 1029,
                "q": "Under the Bangladesh Securities and Exchange Commission (BSEC) Corporate Governance Code 2018, what is the minimum proportion of Independent Directors required on the Board of a listed company?",
                "options": [
                    "At least one-fifth (1/5) of the total number of directors on the company's Board",
                    "At least three-quarters (3/4) of the Board",
                    "Zero — independent directors are optional",
                    "Exactly 100% of the Board"
                ],
                "answer": 0,
                "explanation": "The BSEC Corporate Governance Code 2018 requires at least one-fifth (20%) of total board members to be Independent Directors."
            },
            {
                "id": 1030,
                "q": "Under the BSEC Corporate Governance Code 2018, what is the rule regarding the positions of Chairperson of the Board and Managing Director (MD) / Chief Executive Officer (CEO)?",
                "options": [
                    "The positions of Chairperson of the Board and MD/CEO shall be filled by different individuals (separation of roles)",
                    "The same person must always hold both positions",
                    "The external audit partner must serve as Chairperson",
                    "A listed company does not need a Chairperson"
                ],
                "answer": 0,
                "explanation": "Splitting the Chairperson and CEO roles prevents excessive concentration of power in a single individual."
            },
            {
                "id": 1031,
                "q": "Under the BSEC Corporate Governance Code 2018, who must chair the Audit Committee of a listed company?",
                "options": [
                    "An Independent Director",
                    "The Managing Director / CEO",
                    "The Chief Financial Officer (CFO)",
                    "The external audit engagement partner"
                ],
                "answer": 0,
                "explanation": "The Audit Committee must consist of at least three members including at least one Independent Director, and the Chairperson must be an Independent Director."
            },
            {
                "id": 1032,
                "q": "How does the primary role of 'internal audit' differ from that of 'external audit'?",
                "options": [
                    "Internal audit is an independent appraisal function within the entity evaluating internal controls, risk management, and governance for management/audit committee; external audit is an independent statutory examination expressing an opinion on true and fair financial statements for shareholders",
                    "Internal auditors are appointed by shareholders at the AGM to sign the statutory audit report",
                    "External auditors are full-time employees reporting to the Finance Manager",
                    "Both perform the exact same legal mandate"
                ],
                "answer": 0,
                "explanation": "Internal audit focuses on internal controls, operations, and risk for governance, whereas external audit provides statutory assurance on external financial statements."
            },
            {
                "id": 1033,
                "q": "Which fundamental ethical principle requires a professional accountant to comply with relevant laws and regulations and avoid any conduct that discredits the profession?",
                "options": [
                    "Professional Behavior",
                    "Integrity",
                    "Objectivity",
                    "Confidentiality"
                ],
                "answer": 0,
                "explanation": "Professional Behavior prohibits unlawful acts and conduct that damages the reputation of the accountancy profession."
            },
            {
                "id": 1034,
                "q": "In macroeconomics, what are the four primary macroeconomic policy objectives of a government?",
                "options": [
                    "Sustainable economic growth, low and stable inflation (price stability), low unemployment (full employment), and a healthy balance of payments",
                    "Maximizing corporate monopolies, hyperinflation, high unemployment, and trade deficits",
                    "Eliminating all taxes, fixing all wages, banning imports, and printing unlimited currency",
                    "Increasing interest rates to 50% every year"
                ],
                "answer": 0,
                "explanation": "Governments balance fiscal and monetary policy to achieve growth, price stability, employment, and external balance."
            },
            {
                "id": 1035,
                "q": "If the Price Elasticity of Demand (PED) for a product is -0.4 (inelastic), what happens to total sales revenue if the business increases its selling price by 10%?",
                "options": [
                    "Total revenue increases (because the percentage drop in quantity demanded of 4% is smaller than the 10% price increase)",
                    "Total revenue falls sharply",
                    "Quantity demanded falls by 40%",
                    "Total revenue remains exactly unchanged"
                ],
                "answer": 0,
                "explanation": "When demand is price-inelastic (|PED| < 1), price and total revenue move in the same direction."
            },
            {
                "id": 1036,
                "q": "Which market structure is characterized by a few dominant large firms, high barriers to entry, differentiated or homogeneous products, and strong strategic interdependence (price rigidity / kinked demand curve)?",
                "options": [
                    "Oligopoly",
                    "Perfect competition",
                    "Pure monopoly",
                    "Monopolistic competition"
                ],
                "answer": 0,
                "explanation": "Oligopolies (e.g., telecom operators or major airlines) feature a few interdependent firms that closely watch rivals' pricing and output moves."
            },
            {
                "id": 1037,
                "q": "What is a 'negative externality' in market failure?",
                "options": [
                    "A harmful spillover cost imposed on third parties outside a market transaction (such as factory air/water pollution) not reflected in the producer's private costs",
                    "A discount given to loyal wholesale buyers",
                    "Higher dividend payments to shareholders",
                    "Improved employee productivity from training"
                ],
                "answer": 0,
                "explanation": "Negative externalities cause social cost to exceed private cost, justifying regulation such as pollution taxes, emission caps, or environmental standards."
            },
            {
                "id": 1038,
                "q": "Which form of government intervention directly sets a maximum legal price below the free-market equilibrium price (for example, on essential staple foods or rent)?",
                "options": [
                    "Price ceiling (maximum price), which typically creates excess demand (shortages) and potential black markets",
                    "Price floor (minimum price), which creates excess supply (surpluses)",
                    "Export subsidy",
                    "Import quota"
                ],
                "answer": 0,
                "explanation": "A binding price ceiling below equilibrium increases quantity demanded while reducing quantity supplied, causing shortages."
            },
            {
                "id": 1039,
                "q": "What is the difference between a 'tariff' and an 'import quota' in international trade regulation?",
                "options": [
                    "A tariff is a tax/duty levied on imported goods (raising price and generating government revenue); a quota is a physical quantitative limit on the volume/value of goods that may be imported",
                    "A tariff is a physical limit on units; a quota is an income tax on domestic workers",
                    "Both are subsidies paid to foreign exporters",
                    "Neither affects domestic prices or imports"
                ],
                "answer": 0,
                "explanation": "Tariffs restrict trade via price taxation, while quotas restrict trade via hard volume/value caps."
            },
            {
                "id": 1040,
                "q": "Why do governments regulate competition and prevent abusive monopolies or cartels?",
                "options": [
                    "To protect consumer welfare, prevent artificially high prices and restricted output, encourage innovation, and maintain fair market access",
                    "To help cartels fix higher prices legally",
                    "To eliminate all small businesses",
                    "To stop consumers from comparing prices"
                ],
                "answer": 0,
                "explanation": "Competition law prohibits price-fixing cartels, abuse of dominant position, and anti-competitive mergers."
            },
            {
                "id": 1041,
                "q": "Which mnemonic summarizes the key qualities of good business information (Accurate, Complete, Cost-beneficial, User-targeted, Relevant, Authoritative, Timely, Easy to use)?",
                "options": [
                    "ACCURATE",
                    "SMART",
                    "PESTEL",
                    "SWOT"
                ],
                "answer": 0,
                "explanation": "Good information is Accurate, Complete, Cost-beneficial, User-targeted, Relevant, Authoritative, Timely, and Easy to use."
            },
            {
                "id": 1042,
                "q": "What is the difference between 'data' and 'information'?",
                "options": [
                    "Data are raw, unprocessed facts, figures, or observations; information is data that has been processed, structured, and given context to be meaningful for decision-making",
                    "Data is always written in words; information is always written in numbers",
                    "Information is raw unorganized numbers; data is the final board report",
                    "There is no difference between data and information"
                ],
                "answer": 0,
                "explanation": "Processing, aggregating, and contextualizing raw data transforms it into actionable information."
            },
            {
                "id": 1043,
                "q": "Which of the following represents the classic '3 Vs' (often expanded to 4 or 5 Vs) defining Big Data?",
                "options": [
                    "Volume, Velocity, and Variety (plus Veracity and Value)",
                    "Vision, Values, and Victory",
                    "Valuation, Verification, and Vouching",
                    "Vendors, Vehicles, and Vaults"
                ],
                "answer": 0,
                "explanation": "Big Data is characterized by massive Volume, high Velocity of generation, and wide Variety (structured, semi-structured, unstructured), alongside Veracity and Value."
            },
            {
                "id": 1044,
                "q": "In data analytics, what is the difference between 'descriptive analytics', 'predictive analytics', and 'prescriptive analytics'?",
                "options": [
                    "Descriptive explains what happened; predictive forecasts what is likely to happen; prescriptive recommends optimal actions to take",
                    "Descriptive recommends future actions; predictive summarizes past ledgers; prescriptive deletes old data",
                    "All three mean auditing historical bank statements",
                    "Predictive analytics only looks at last year's tax return"
                ],
                "answer": 0,
                "explanation": "Analytics progresses from hindsight (descriptive) and insight (diagnostic) to foresight (predictive) and optimization (prescriptive)."
            },
            {
                "id": 1045,
                "q": "In a spreadsheet model, what is a major risk when formulas contain 'hard-coded' numbers inside complex cell calculations rather than referencing separate input cells?",
                "options": [
                    "Lack of transparency and high risk of formula errors when assumptions change, because updating an assumption requires editing multiple buried formulas",
                    "Spreadsheets run too fast",
                    "Hard-coded numbers automatically update themselves when inflation changes",
                    "Spreadsheets refuse to save the file"
                ],
                "answer": 0,
                "explanation": "Best-practice spreadsheet modeling separates inputs, calculations, and outputs so assumptions are never hard-coded inside formulas."
            },
            {
                "id": 1046,
                "q": "What is 'distributed ledger technology (DLT) / blockchain' in the digital finance ecosystem?",
                "options": [
                    "A decentralized, shared, append-only digital ledger where transactions are cryptographically linked in blocks and validated across multiple nodes without a central intermediary",
                    "A single paper cash book locked in a manager's drawer",
                    "A type of barcode scanner used in supermarkets",
                    "A traditional manual double-entry journal"
                ],
                "answer": 0,
                "explanation": "Blockchain/DLT provides tamper-evident, chronological, consensus-verified transaction records across distributed participants."
            },
            {
                "id": 1047,
                "q": "How does 'Robotic Process Automation (RP",
                "options": [
                    "' benefit the finance and accounting function? A) Software bots automate repetitive, rule-based tasks (such as invoice data extraction, reconciliations, and report generation) with high speed, 24/7 availability, and reduced clerical error",
                    "Physical robots carry paper files between floors",
                    "RPA replaces strategic board-level ethical judgment",
                    "RPA eliminates the need for internal controls over IT"
                ],
                "answer": 0,
                "explanation": "RPA automates structured, high-volume rules-based workflows, freeing finance staff for analysis and decision support."
            },
            {
                "id": 1048,
                "q": "What is 'phishing' in cyber risk?",
                "options": [
                    "Fraudulent communications (emails, messages, or fake websites) disguised as trustworthy entities to trick users into revealing passwords, credentials, or financial data or installing malware",
                    "Encrypting database backups offline",
                    "Installing antivirus software updates",
                    "Testing network firewall speed"
                ],
                "answer": 0,
                "explanation": "Phishing exploits human trust via deceptive messages to steal login credentials or deploy malicious payloads."
            },
            {
                "id": 1049,
                "q": "What is 'ransomware'?",
                "options": [
                    "Malicious software that encrypts or locks an organisation's critical files/systems and demands a ransom payment to restore access",
                    "A cloud storage service for audit working papers",
                    "A legitimate spreadsheet audit tool",
                    "An automated bank reconciliation macro"
                ],
                "answer": 0,
                "explanation": "Ransomware halts operations by encrypting data/systems, making offline immutable backups and endpoint security critical."
            },
            {
                "id": 1050,
                "q": "What ethical risk arises when businesses use Artificial Intelligence (AI) and machine learning algorithms trained on biased historical data?",
                "options": [
                    "Algorithmic bias and unfair/discriminatory decisions (e.g., in credit scoring, hiring, or insurance pricing) combined with 'black-box' lack of explainability",
                    "AI eliminates all privacy concerns automatically",
                    "AI guarantees 100% ethical outcomes without human oversight",
                    "Historical data never contains bias"
                ],
                "answer": 0,
                "explanation": "AI models trained on biased historical data can perpetuate discrimination and opacity, requiring governance, transparency, and human accountability."
            }
        ]
    },
    {
        "id": 2,
        "title": "Mock Test 2",
        "questions": [
            {
                "id": 2001,
                "q": "Which stakeholder group is classified as an 'internal stakeholder' of a company?",
                "options": [
                    "Employees and executive directors",
                    "External institutional shareholders",
                    "Government tax authorities (NBR)",
                    "Trade suppliers and customers"
                ],
                "answer": 0,
                "explanation": "Internal stakeholders work inside the organisation (employees, managers, executive directors), whereas shareholders, lenders, suppliers, and regulators are connected or external stakeholders."
            },
            {
                "id": 2002,
                "q": "What does the 'SMART' acronym stand for when setting effective business objectives?",
                "options": [
                    "Specific, Measurable, Achievable (Agreed), Relevant (Realistic), and Time-bound",
                    "Simple, Monetary, Annual, Regulated, and Taxed",
                    "Strategic, Market-led, Automated, Rapid, and Technical",
                    "Secret, Minimal, Arbitrary, Rigid, and Temporary"
                ],
                "answer": 0,
                "explanation": "SMART objectives provide clear, quantifiable, realistic, and time-bounded targets for performance measurement."
            },
            {
                "id": 2003,
                "q": "Which business function is responsible for sourcing raw materials, evaluating suppliers, negotiating supply contracts, and managing inbound supply chain reliability?",
                "options": [
                    "Procurement (purchasing)",
                    "Marketing",
                    "Treasury",
                    "Public relations"
                ],
                "answer": 0,
                "explanation": "Procurement acquires required goods and services at optimal quality, price, delivery speed, and supplier reliability."
            },
            {
                "id": 2004,
                "q": "According to Henri Fayol's classical management process, what are the five core functions of management?",
                "options": [
                    "Planning, Organizing, Commanding (Leading), Coordinating, and Controlling",
                    "Auditing, Taxing, Investing, Borrowing, and Merging",
                    "Hiring, Firing, Promoting, Retiring, and Paying",
                    "Advertising, Selling, Shipping, Billing, and Collecting"
                ],
                "answer": 0,
                "explanation": "Fayol defined management as forecasting/planning, organizing, commanding, coordinating, and controlling."
            },
            {
                "id": 2005,
                "q": "In Charles Handy's four types of organisational culture, which culture is symbolized by a 'Greek temple'—relying on formal rules, procedures, job descriptions, and predictable hierarchy?",
                "options": [
                    "Role culture",
                    "Power culture (spider's web)",
                    "Task culture (net)",
                    "Person culture (cluster)"
                ],
                "answer": 0,
                "explanation": "Handy's Role culture (Greek temple) thrives in stable bureaucratic organisations where authority derives from formal position and rules."
            },
            {
                "id": 2006,
                "q": "What is a 'span of control' in organisational design?",
                "options": [
                    "The number of subordinates reporting directly to a single manager or supervisor",
                    "The geographical distance between head office and factory",
                    "The total number of shares issued by a company",
                    "The maximum credit period offered to customers"
                ],
                "answer": 0,
                "explanation": "Wide spans of control produce flatter organisations with fewer management layers, whereas narrow spans produce taller hierarchies."
            },
            {
                "id": 2007,
                "q": "How does a 'mechanistic' organisation differ from an 'organic' organisation (Burns & Stalker)?",
                "options": [
                    "Mechanistic is rigid, hierarchical, centralized, and suited to stable environments; organic is flexible, decentralized, network-based, and suited to rapidly changing environments",
                    "Mechanistic uses agricultural machinery; organic sells only organic food",
                    "Organic organisations have strict rigid rules and tall hierarchies; mechanistic ones have no rules",
                    "Both terms describe identical structures"
                ],
                "answer": 0,
                "explanation": "Burns and Stalker matched mechanistic structures to stable conditions and organic structures to dynamic, innovative conditions."
            },
            {
                "id": 2008,
                "q": "What is a key disadvantage of operating as a 'sole trader' compared to a limited company?",
                "options": [
                    "Unlimited personal liability for business debts and limited ability to raise large amounts of external capital",
                    "Complex statutory filing requirements and mandatory annual public audits",
                    "Loss of direct personal control over daily decisions",
                    "Double taxation on corporate dividends"
                ],
                "answer": 0,
                "explanation": "Sole traders have no legal separation from their business, exposing personal assets to business creditors."
            },
            {
                "id": 2009,
                "q": "In a SWOT analysis used during corporate appraisal, which two elements represent INTERNAL factors and which two represent EXTERNAL factors?",
                "options": [
                    "Strengths and Weaknesses are internal to the business; Opportunities and Threats arise from the external environment",
                    "Strengths and Opportunities are internal; Weaknesses and Threats are external",
                    "Weaknesses and Threats are internal; Strengths and Opportunities are external",
                    "All four elements are purely external"
                ],
                "answer": 0,
                "explanation": "SWOT combines internal resource/capability analysis (Strengths & Weaknesses) with external environmental scanning (Opportunities & Threats)."
            },
            {
                "id": 2010,
                "q": "In the risk management process (TARA framework), what does 'Transfer' (sharing) of risk involve?",
                "options": [
                    "Shifting the financial impact of a risk to a third party—such as taking out insurance, outsourcing a risky activity, or hedging currency exposure",
                    "Closing down the entire business immediately",
                    "Ignoring the risk completely without controls",
                    "Accepting the loss out of petty cash"
                ],
                "answer": 0,
                "explanation": "The TARA risk responses are Transfer (share), Avoid (terminate), Reduce (mitigate/treat), and Accept (tolerate)."
            },
            {
                "id": 2011,
                "q": "Which treasury management activity involves ensuring the business has sufficient cash/liquidity to meet daily obligations while investing temporary cash surpluses safely?",
                "options": [
                    "Working capital and liquidity (cash) management",
                    "Statutory external auditing",
                    "Product packaging design",
                    "Employee recruitment interviews"
                ],
                "answer": 0,
                "explanation": "Treasury manages cash flows, liquidity buffers, short-term investments, debt funding, and financial risk (interest/FX)."
            },
            {
                "id": 2012,
                "q": "What is the difference between 'centralized' and 'decentralized' finance functions in a multi-divisional group?",
                "options": [
                    "Centralized locates finance staff/systems at head office (stronger control, consistency, economies of scale); decentralized places finance teams inside divisions (faster local responsiveness, tailored support)",
                    "Centralized finance functions are illegal for listed companies",
                    "Decentralized finance functions never report to the Group CFO",
                    "Centralized systems cannot use accounting software"
                ],
                "answer": 0,
                "explanation": "Organizations balance head-office standardization/cost efficiency against divisional proximity and operational agility."
            },
            {
                "id": 2013,
                "q": "What is a 'Shared Service Centre (SSC)' in the finance function?",
                "options": [
                    "A dedicated internal unit consolidating routine transactional finance processes (such as accounts payable, payroll, billing) across business units to improve efficiency and standardization",
                    "An external statutory audit firm",
                    "A retail customer call centre",
                    "A commercial bank branch"
                ],
                "answer": 0,
                "explanation": "Finance SSCs centralize standardized high-volume processing while leaving strategic 'business partnering' close to operations."
            },
            {
                "id": 2014,
                "q": "Which financial ratio measures short-term liquidity by excluding inventory from current assets (Current Assets minus Inventory divided by Current Liabilities)?",
                "options": [
                    "Quick ratio (acid-test ratio)",
                    "Return on Capital Employed (ROCE)",
                    "Price-Earnings (P/E) ratio",
                    "Gearing ratio"
                ],
                "answer": 0,
                "explanation": "The quick ratio assesses immediate liquidity without relying on selling inventory."
            },
            {
                "id": 2015,
                "q": "What does 'Return on Capital Employed (ROCE)' measure?",
                "options": [
                    "Operating profit (PBIT) generated as a percentage of total long-term capital invested (Equity + Non-current debt)",
                    "Cash held in petty cash divided by total employees",
                    "Total sales tax collected during the quarter",
                    "Average days taken to pay trade suppliers"
                ],
                "answer": 0,
                "explanation": "ROCE evaluates overall profitability and efficiency in generating operating returns from long-term capital."
            },
            {
                "id": 2016,
                "q": "What is 'factoring' of trade receivables?",
                "options": [
                    "Selling or assigning trade receivable invoices to a third-party factor for immediate cash advance (typically 70–85% of invoice value), often with sales ledger administration and optional credit protection",
                    "Issuing new ordinary shares on the stock exchange",
                    "Taking a 20-year mortgage on freehold land",
                    "Paying suppliers in foreign currency"
                ],
                "answer": 0,
                "explanation": "Factoring accelerates cash inflows from credit sales, with 'non-recourse' factoring also transferring bad debt risk."
            },
            {
                "id": 2017,
                "q": "How does 'invoice discounting' differ from 'factoring'?",
                "options": [
                    "Invoice discounting is confidential (customers are unaware and the company retains ledger administration/collection), whereas factoring is disclosed to customers and managed by the factor",
                    "Invoice discounting is a government grant",
                    "Factoring is completely free with zero fees",
                    "Invoice discounting applies only to fixed assets"
                ],
                "answer": 0,
                "explanation": "Invoice discounting provides confidential working capital finance against receivables without outsourcing credit control."
            },
            {
                "id": 2018,
                "q": "What is a 'convertible bond (convertible loan stock)'?",
                "options": [
                    "A debt security that pays fixed interest and gives the holder the option to convert the bond into a predetermined number of ordinary shares at specified future dates/prices",
                    "A short-term bank overdraft repayable on demand",
                    "An irredeemable preference share with no voting rights",
                    "A trade credit note for damaged goods"
                ],
                "answer": 0,
                "explanation": "Convertibles combine lower-coupon debt features with equity upside potential for investors."
            },
            {
                "id": 2019,
                "q": "Which source of short-term finance is uncommitted and repayable on demand by the bank, making it flexible for daily cash fluctuations but risky if relied upon for long-term assets?",
                "options": [
                    "Bank overdraft",
                    "15-year debenture",
                    "Ordinary share capital",
                    "Venture capital equity"
                ],
                "answer": 0,
                "explanation": "Overdrafts match fluctuating working capital needs well, but because they are repayable on demand, using them to fund long-term assets creates severe refinancing/liquidity risk."
            },
            {
                "id": 2020,
                "q": "What is 'crowdfunding' (equity or peer-to-peer debt crowdfunding)?",
                "options": [
                    "Raising small amounts of capital from a large number of individuals or investors, typically via an online digital platform",
                    "Borrowing exclusively from the central bank",
                    "Issuing bonds only to sovereign wealth funds",
                    "Retaining annual depreciation charges in cash"
                ],
                "answer": 0,
                "explanation": "Crowdfunding pools funds from many retail/angel backers over online platforms for startups, creative projects, or SMEs."
            },
            {
                "id": 2021,
                "q": "Why is 'working capital management' (managing inventory, receivables, payables, and cash) critical for a rapidly growing profitable business?",
                "options": [
                    "Rapid sales growth ties up cash in higher inventory and receivables faster than profits convert to cash, creating the risk of 'overtrading' (liquidity crisis despite high profits)",
                    "Profitable companies never run out of cash",
                    "Working capital only affects non-profit charities",
                    "Suppliers always wait 5 years for payment"
                ],
                "answer": 0,
                "explanation": "Overtrading occurs when rapid expansion outstrips working capital finance, causing acute cash shortages."
            },
            {
                "id": 2022,
                "q": "What is 'Sustainability-Linked Loan (SLL)' in green/sustainable finance?",
                "options": [
                    "A loan whose interest margin/pricing is tied to whether the borrower achieves predetermined Sustainability Performance Targets (SPTs) such as carbon reduction or energy efficiency",
                    "A loan restricted exclusively to coal mining companies",
                    "An interest-free loan with no repayment date",
                    "A short-term credit card advance"
                ],
                "answer": 0,
                "explanation": "Unlike green bonds (which ring-fence proceeds), SLLs incentivize borrower-wide ESG improvements through margin ratchets."
            },
            {
                "id": 2023,
                "q": "Which financial control helps prevent unauthorized disbursements in the finance function?",
                "options": [
                    "Segregation of duties between invoice approval, payment authorization, bank signatory execution, and ledger reconciliation",
                    "Allowing one clerk to create vendors, approve invoices, and sign cheques alone",
                    "Pre-signing blank cheques before holidays",
                    "Skipping bank reconciliations during busy months"
                ],
                "answer": 0,
                "explanation": "Segregation of duties and dual authorization prevent unilateral fraud or error in payments."
            },
            {
                "id": 2024,
                "q": "Why is the accountancy profession regulated through a combination of self-regulation (professional bodies like ICAB) and independent statutory oversight (such as FRC)?",
                "options": [
                    "To protect the public interest, ensure technical competence and ethical standards, maintain public confidence in financial reporting, and prevent perceived self-serving bias",
                    "To prevent qualified accountants from auditing companies",
                    "To fix identical salaries for all accountants",
                    "To eliminate continuing professional development (CPD)"
                ],
                "answer": 0,
                "explanation": "Co-regulation balances specialist technical expertise of professional bodies with independent public-interest oversight."
            },
            {
                "id": 2025,
                "q": "What does 'technical competence' require of a professional accountant?",
                "options": [
                    "Attaining required professional qualifications, keeping knowledge up to date through Continuing Professional Development (CPD), and exercising due care and diligence",
                    "Accepting complex assignments without relevant expertise or supervision",
                    "Relying solely on accounting rules learned 20 years ago",
                    "Ignoring updates to IFRS and auditing standards"
                ],
                "answer": 0,
                "explanation": "Technical competence and due care require ongoing CPD and diligent application of current standards."
            },
            {
                "id": 2026,
                "q": "Which of the following is a classic 'symptom of poor corporate governance'?",
                "options": [
                    "Dominance of the board by a single autocratic individual (CEO/Founder), weak or non-existent independent non-executive directors, lack of board oversight/internal controls, and short-term bonus manipulation",
                    "Regular independent audit committee meetings",
                    "Transparent related-party disclosures",
                    "Clear separation between Chairperson and CEO"
                ],
                "answer": 0,
                "explanation": "Board dominance, ineffective NEDs, and weak control oversight frequently precede corporate collapses."
            },
            {
                "id": 2027,
                "q": "What is the 'comply or explain' approach used in many corporate governance codes (such as the UK Corporate Governance Code), and how does the BSEC Code 2018 compare?",
                "options": [
                    "'Comply or explain' allows companies flexibility to depart from a provision if they publicly explain why; the BSEC Corporate Governance Code 2018 in Bangladesh is mandatory ('comply') for listed companies with annual compliance certification",
                    "'Comply or explain' means companies never have to follow any rules",
                    "BSEC Code 2018 is completely voluntary for listed companies in Bangladesh",
                    "Both codes apply only to sole traders"
                ],
                "answer": 0,
                "explanation": "The BSEC Corporate Governance Code 2018 mandates compliance for listed companies in Bangladesh and requires a compliance certificate from a practicing professional."
            },
            {
                "id": 2028,
                "q": "Under the BSEC Corporate Governance Code 2018, what is the role of the Nomination and Remuneration Committee (NRC)?",
                "options": [
                    "Assisting the Board in formulating nomination criteria/qualifications for directors and top-level executives and devising formal, transparent remuneration policies",
                    "Performing the statutory external financial statement audit",
                    "Approving daily petty cash vouchers",
                    "Managing factory floor inventory counts"
                ],
                "answer": 0,
                "explanation": "The NRC (chaired by an Independent Director) ensures objective board/executive appointments and transparent remuneration frameworks."
            },
            {
                "id": 2029,
                "q": "What is the primary role of Non-Executive Directors (NEDs) on a unitary board?",
                "options": [
                    "Bringing independent external perspective, constructively challenging executive strategy, scrutinizing management performance, and serving on key committees (Audit, NRC, Risk)",
                    "Running daily factory operations full-time",
                    "Signing every routine purchase order",
                    "Auditing the company's tax returns"
                ],
                "answer": 0,
                "explanation": "NEDs provide independent oversight, strategic challenge, and governance committee leadership without day-to-day executive operational bias."
            },
            {
                "id": 2030,
                "q": "How does a 'unitary board' structure (UK/US/Bangladesh) differ from a 'two-tier (dual) board' structure (Germany)?",
                "options": [
                    "A unitary board has a single board comprising both executive and non-executive directors jointly responsible for strategy and oversight; a two-tier board separates the Management Board (executive operations) from the Supervisory Board (oversight/appointment)",
                    "A unitary board has no directors at all",
                    "A two-tier board is only for partnerships",
                    "Unitary boards never include non-executive directors"
                ],
                "answer": 0,
                "explanation": "Unitary boards combine executive and non-executive directors on one board, whereas dual boards formally separate management and supervisory boards."
            },
            {
                "id": 2031,
                "q": "What is 'business ethics' versus mere 'legal compliance'?",
                "options": [
                    "Legal compliance sets the minimum floor required by statute; business ethics goes further to address moral values, fairness, integrity, and doing what is right even where law is silent or permissive",
                    "Business ethics means breaking laws whenever profitable",
                    "Legal compliance and business ethics are identical in every respect",
                    "Ethics applies only to charities, never to corporations"
                ],
                "answer": 0,
                "explanation": "Ethical corporate culture requires upholding integrity and stakeholder fairness beyond minimum statutory compliance."
            },
            {
                "id": 2032,
                "q": "What is 'whistleblowing' in corporate governance and ethics?",
                "options": [
                    "The confidential reporting by an employee or insider of suspected illegal, unethical, fraudulent, or dangerous practices within an organisation to internal governance (e.g., Audit Committee) or external regulators",
                    "Blowing a whistle during a factory fire drill",
                    "Publishing customer credit card numbers online",
                    "Gossiping about colleagues in the cafeteria"
                ],
                "answer": 0,
                "explanation": "Protected whistleblowing channels enable early detection of fraud, safety hazards, or governance abuses."
            },
            {
                "id": 2033,
                "q": "Why is 'Integrity' considered the cornerstone of the five fundamental ethical principles for accountants?",
                "options": [
                    "Without straightforwardness and honesty in all professional relationships, objectivity, competence, and public trust cannot be relied upon",
                    "Because Integrity allows accountants to hide client fraud",
                    "Because Integrity applies only to junior trainees",
                    "Because Integrity replaces all auditing standards"
                ],
                "answer": 0,
                "explanation": "Integrity underpins every other ethical principle by requiring truthful, honest, and fair conduct."
            },
            {
                "id": 2034,
                "q": "In microeconomics, what causes a 'movement along' a demand curve versus a 'shift' of the entire demand curve?",
                "options": [
                    "A change in the good's own price causes a movement along the demand curve; changes in non-price factors (income, tastes, prices of substitutes/complements, population) shift the entire curve",
                    "Income changes cause movements along the curve; own-price changes shift the curve",
                    "Both own-price and income changes cause movements along the exact same curve",
                    "Demand curves never shift"
                ],
                "answer": 0,
                "explanation": "Own-price changes alter quantity demanded along the curve; non-price determinants shift demand left or right."
            },
            {
                "id": 2035,
                "q": "If two goods are 'substitutes' (e.g., tea and coffee), what is the sign of their Cross Elasticity of Demand (XED)?",
                "options": [
                    "Positive (an increase in the price of tea leads to an increase in the quantity demanded of coffee)",
                    "Negative (an increase in the price of tea reduces demand for coffee)",
                    "Always zero",
                    "Always minus infinity"
                ],
                "answer": 0,
                "explanation": "Substitutes have positive XED, whereas complements (such as printers and ink cartridges) have negative XED."
            },
            {
                "id": 2036,
                "q": "What happens in a competitive market when the prevailing market price is temporarily ABOVE the equilibrium price?",
                "options": [
                    "Excess supply (a surplus) occurs because quantity supplied exceeds quantity demanded, creating downward pressure on price toward equilibrium",
                    "Excess demand (a shortage) occurs, pushing prices even higher",
                    "Supply drops immediately to zero",
                    "Equilibrium is permanently destroyed"
                ],
                "answer": 0,
                "explanation": "Above-equilibrium prices leave unsold surpluses, prompting sellers to lower prices until quantity demanded equals quantity supplied."
            },
            {
                "id": 2037,
                "q": "Which fiscal policy measures would a government use to stimulate aggregate demand during an economic recession (expansionary fiscal policy)?",
                "options": [
                    "Increasing government spending and/or reducing direct/indirect taxes",
                    "Slashing government spending and raising income/corporate taxes sharply",
                    "Raising central bank policy interest rates sharply",
                    "Banning commercial bank lending"
                ],
                "answer": 0,
                "explanation": "Expansionary fiscal policy injects demand into the economy via higher public expenditure or tax cuts."
            },
            {
                "id": 2038,
                "q": "How does 'monetary policy' operated by a central bank (such as Bangladesh Bank) influence business activity and inflation?",
                "options": [
                    "By adjusting policy interest rates, reserve requirements, and money supply/credit conditions—affecting borrowing costs, investment, consumer spending, and exchange rates",
                    "By setting corporate income tax rates in the national budget",
                    "By auditing individual retail shops",
                    "By fixing retail prices of clothing"
                ],
                "answer": 0,
                "explanation": "Monetary policy manages liquidity, credit growth, and interest rates to control inflation and support economic stability."
            },
            {
                "id": 2039,
                "q": "What is a 'public good' (such as national defense or street lighting) that leads to market failure if left solely to private markets?",
                "options": [
                    "A good that is non-excludable (cannot stop non-payers from benefiting) and non-rivalrous (one person's consumption does not reduce availability to others), leading to the 'free-rider problem'",
                    "Any consumer product sold by a public limited company",
                    "A luxury car sold exclusively to wealthy buyers",
                    "A subscription software license"
                ],
                "answer": 0,
                "explanation": "Because non-payers cannot be excluded, private firms cannot profitably supply pure public goods, requiring public provision."
            },
            {
                "id": 2040,
                "q": "What is 'comparative advantage' in international trade theory?",
                "options": [
                    "A country should specialize in producing and exporting goods/services in which it has a lower opportunity cost than trading partners, and import goods where its opportunity cost is higher",
                    "A country should ban all imports and produce everything domestically regardless of cost",
                    "Only countries with the highest wages can export goods",
                    "Trade only benefits countries with trade deficits"
                ],
                "answer": 0,
                "explanation": "David Ricardo's law of comparative advantage shows mutual gains from trade when nations specialize according to relative opportunity cost."
            },
            {
                "id": 2041,
                "q": "What is the difference between 'structured data' and 'unstructured data'?",
                "options": [
                    "Structured data is organized in predefined fields/tables (e.g., ERP ledgers, relational databases, spreadsheets); unstructured data lacks a fixed schema (e.g., emails, social media posts, PDFs, audio/video)",
                    "Structured data is always false; unstructured data is always audited",
                    "Unstructured data fits neatly into SQL columns; structured data cannot be searched",
                    "There is no difference between them"
                ],
                "answer": 0,
                "explanation": "Modern data analytics combines structured ERP/financial records with unstructured text, image, and sensor data."
            },
            {
                "id": 2042,
                "q": "What is 'data cleansing (data scrubbing)' in data analysis?",
                "options": [
                    "Detecting and correcting or removing corrupt, duplicate, incomplete, inaccurately formatted, or irrelevant records from a dataset before analysis",
                    "Deleting the entire customer database",
                    "Wiping computer monitors with cleaning spray",
                    "Encrypting passwords"
                ],
                "answer": 0,
                "explanation": "Poor data quality ('garbage in, garbage out') distorts analytics; data cleansing ensures reliable inputs."
            },
            {
                "id": 2043,
                "q": "Which spreadsheet feature allows managers to quickly summarize, group, filter, and cross-tabulate large datasets without writing complex formulas?",
                "options": [
                    "Pivot Tables",
                    "Spell Check",
                    "Page Margins",
                    "Print Preview"
                ],
                "answer": 0,
                "explanation": "Pivot tables dynamically aggregate, slice, and compare multidimensional data (e.g., sales by region, product, and quarter)."
            },
            {
                "id": 2044,
                "q": "Which chart type is most appropriate for showing the PROPORTION or percentage share of parts making up a single whole at one point in time (with a small number of categories)?",
                "options": [
                    "Pie chart (or stacked bar chart)",
                    "Scatter plot",
                    "Line graph showing 20-year trends",
                    "Histogram"
                ],
                "answer": 0,
                "explanation": "Pie charts illustrate percentage composition of a whole for a few categories, whereas line charts show trends over time and scatter plots show correlation."
            },
            {
                "id": 2045,
                "q": "What is 'data visualization' designed to achieve in business reporting?",
                "options": [
                    "Presenting complex quantitative data visually (charts, dashboards, heatmaps) so decision-makers rapidly grasp trends, outliers, and patterns",
                    "Hiding unfavorable financial losses from directors",
                    "Replacing underlying accounting records",
                    "Making reports harder to read"
                ],
                "answer": 0,
                "explanation": "Effective visual presentation enhances clarity, pattern recognition, and executive comprehension."
            },
            {
                "id": 2046,
                "q": "What is 'cloud computing' (such as SaaS accounting platforms) in business technology?",
                "options": [
                    "On-demand delivery of computing services—servers, storage, databases, networking, and software—over the internet with pay-as-you-go scalability and remote access",
                    "Storing paper files on the top floor of an office building",
                    "Running software solely on an offline floppy disk",
                    "Weather forecasting software"
                ],
                "answer": 0,
                "explanation": "Cloud computing reduces upfront hardware capex, enables real-time remote collaboration, and provides scalable computing resources."
            },
            {
                "id": 2047,
                "q": "What is 'FinTech' (Financial Technology)?",
                "options": [
                    "Technology-enabled innovation in financial services—such as mobile financial services (MFS), digital payments, peer-to-peer lending, robo-advisory, insurtech, and regtech",
                    "A manual mechanical calculator",
                    "A traditional paper cheque book",
                    "An office furniture supplier"
                ],
                "answer": 0,
                "explanation": "FinTech reshapes banking, payments, lending, wealth management, and regulatory compliance through digital platforms."
            },
            {
                "id": 2048,
                "q": "What is 'Internet of Things (IoT)' in operations and supply chain management?",
                "options": [
                    "A network of physical devices, vehicles, sensors, and machinery embedded with connectivity and software to collect and exchange real-time operational data",
                    "A social media platform for accountants",
                    "A manual stock ledger book",
                    "A printer cable"
                ],
                "answer": 0,
                "explanation": "IoT sensors track inventory movement, machine predictive maintenance, cold-chain temperatures, and fleet logistics in real time."
            },
            {
                "id": 2049,
                "q": "What is 'social engineering' in cybersecurity?",
                "options": [
                    "Psychological manipulation of people into performing actions or divulging confidential information (e.g., pretexting, phishing, baiting, tailgating) rather than purely hacking software code",
                    "Designing civil engineering bridges",
                    "Organizing company sports events",
                    "Updating server operating systems"
                ],
                "answer": 0,
                "explanation": "Social engineering targets human error and trust, making staff security awareness training essential."
            },
            {
                "id": 2050,
                "q": "Under data protection and privacy principles (such as GDPR / data privacy laws), what does 'data minimization' require?",
                "options": [
                    "Collecting and retaining only personal data that is adequate, relevant, and strictly necessary for the specified legitimate purpose",
                    "Collecting every possible personal detail about customers forever just in case",
                    "Selling customer personal data to third parties without consent",
                    "Storing passwords in plain text"
                ],
                "answer": 0,
                "explanation": "Data minimization limits privacy exposure and cyber breach impact by avoiding unnecessary personal data collection and retention."
            }
        ]
    },
    {
        "id": 3,
        "title": "Mock Test 3",
        "questions": [
            {
                "id": 3001,
                "q": "Which type of business objective focuses on maximizing long-term value for owners/shareholders, often balanced against stakeholder and sustainability constraints?",
                "options": [
                    "Primary financial objective (shareholder wealth maximization)",
                    "Pure charity fundraising objective",
                    "Eliminating all sales revenue",
                    "Maximizing administrative bureaucracy"
                ],
                "answer": 0,
                "explanation": "For-profit companies generally pursue long-term shareholder wealth maximization alongside secondary operational, social, and environmental objectives."
            },
            {
                "id": 3002,
                "q": "What is 'Corporate Social Responsibility (CSR)'?",
                "options": [
                    "A business's voluntary commitment to operate ethically, contribute to economic development, and improve the quality of life of the workforce, local community, and society/environment",
                    "Paying the minimum statutory income tax required by law",
                    "Firing employees to boost short-term quarterly profit",
                    "Ignoring environmental pollution laws"
                ],
                "answer": 0,
                "explanation": "CSR reflects responsible corporate citizenship across ethical, philanthropic, social, and environmental dimensions."
            },
            {
                "id": 3003,
                "q": "Under Maslow's Hierarchy of Needs in Human Resource Management, which need sits at the highest level of employee motivation?",
                "options": [
                    "Self-actualization (achieving full personal potential, creativity, and growth)",
                    "Physiological needs (basic pay for food and shelter)",
                    "Safety and security needs (job security and safe workplace)",
                    "Social/belongingness needs"
                ],
                "answer": 0,
                "explanation": "Maslow's pyramid progresses from physiological, safety, social, and esteem needs up to self-actualization."
            },
            {
                "id": 3004,
                "q": "How does Herzberg's Two-Factor Theory distinguish between 'hygiene factors' and 'motivators'?",
                "options": [
                    "Hygiene factors (pay, working conditions, company policy) prevent dissatisfaction when adequate but do not create long-term motivation; motivators (achievement, recognition, responsibility, growth) actively drive satisfaction and motivation",
                    "Hygiene factors apply only to hospital cleaning staff",
                    "Motivators cause dissatisfaction when present",
                    "Pay is the only motivator in Herzberg's model"
                ],
                "answer": 0,
                "explanation": "Herzberg showed that removing dissatisfaction (hygiene) differs from creating positive intrinsic motivation (motivators)."
            },
            {
                "id": 3005,
                "q": "In the marketing mix (4 Ps / 7 Ps for services), which three additional Ps are added specifically for service businesses?",
                "options": [
                    "People, Processes, and Physical Evidence",
                    "Profit, Payroll, and Property",
                    "Patents, Permits, and Penalties",
                    "Purchases, Payables, and Provisions"
                ],
                "answer": 0,
                "explanation": "Services extend Product, Price, Place, and Promotion with People, Processes, and Physical Evidence."
            },
            {
                "id": 3006,
                "q": "What is the key difference between 'centralization' and 'decentralization' in an organisation?",
                "options": [
                    "Centralization concentrates decision-making authority at senior head-office levels; decentralization delegates decision-making authority down to divisional, branch, or operational managers",
                    "Centralization means having only one customer; decentralization means having no managers",
                    "Decentralization eliminates all head-office policies",
                    "Centralization is illegal in Bangladesh"
                ],
                "answer": 0,
                "explanation": "Centralization enhances consistency and control, while decentralization increases speed, local responsiveness, and managerial motivation."
            },
            {
                "id": 3007,
                "q": "In a 'general partnership', how are profits, losses, and liabilities typically shared unless otherwise agreed in a partnership deed?",
                "options": [
                    "Partners share profits/losses equally (or per partnership agreement) and have joint and several unlimited liability for partnership debts",
                    "Partners have limited liability protected by a corporate veil",
                    "Only the youngest partner is liable for debts",
                    "Partnerships cannot enter into contracts"
                ],
                "answer": 0,
                "explanation": "Under partnership law, partners are agents of the firm and bear joint and several unlimited liability for firm obligations."
            },
            {
                "id": 3008,
                "q": "What is a 'strategic alliance' or 'joint venture'?",
                "options": [
                    "A collaborative arrangement where two or more independent businesses share resources, technology, or market access for mutual strategic benefit (with a joint venture typically forming a separate jointly owned legal entity)",
                    "A hostile takeover where one company bankrupts another",
                    "A government tax audit",
                    "An internal payroll transfer"
                ],
                "answer": 0,
                "explanation": "Alliances and joint ventures allow partners to share risk, capital, and capabilities without a full merger."
            },
            {
                "id": 3009,
                "q": "In Michael Porter's Five Forces framework, which force assesses how easily customers can switch to rival suppliers or demand lower prices and higher quality?",
                "options": [
                    "Bargaining power of buyers (customers)",
                    "Threat of new entrants",
                    "Bargaining power of suppliers",
                    "Threat of substitute products"
                ],
                "answer": 0,
                "explanation": "Buyer power is high when buyers are concentrated, switching costs are low, products are undifferentiated, or buyers can integrate backward."
            },
            {
                "id": 3010,
                "q": "What is 'crisis management' in organisational resilience?",
                "options": [
                    "The coordinated, rapid response to a sudden, severe, high-impact event threatening people, reputation, operations, or survival—aiming to contain damage, communicate transparently, and restore stability",
                    "Routine annual budget preparation",
                    "Normal weekly inventory ordering",
                    "Hiring summer interns"
                ],
                "answer": 0,
                "explanation": "Crisis management handles acute emergencies (cyberattacks, product recalls, major accidents) through pre-planned command teams and clear stakeholder communication."
            },
            {
                "id": 3011,
                "q": "Which financial statement shows a company's assets, liabilities, and equity at a specific point in time?",
                "options": [
                    "Statement of Financial Position (Balance Sheet)",
                    "Statement of Profit or Loss",
                    "Statement of Cash Flows",
                    "Statement of Changes in Equity"
                ],
                "answer": 0,
                "explanation": "The Statement of Financial Position captures financial position (assets = equity + liabilities) at the reporting date."
            },
            {
                "id": 3012,
                "q": "What is the difference between 'profit' and 'cash flow' in business finance?",
                "options": [
                    "Profit is measured on an accruals basis (recognizing revenue when earned and expenses when incurred, including non-cash items like depreciation); cash flow tracks actual cash inflows and outflows",
                    "Profit and cash flow are always identical every month",
                    "Depreciation reduces cash flow directly",
                    "Credit sales immediately increase bank cash balance"
                ],
                "answer": 0,
                "explanation": "Timing differences (credit sales/purchases, inventory build-up, capex, loans) and non-cash items cause profit and cash flow to diverge."
            },
            {
                "id": 3013,
                "q": "Which efficiency ratio measures the average number of days it takes a business to collect cash from its credit customers?",
                "options": [
                    "Trade receivables collection period (Receivables / Credit Sales × 365)",
                    "Inventory holding period",
                    "Trade payables payment period",
                    "Asset turnover ratio"
                ],
                "answer": 0,
                "explanation": "Receivable days indicate credit control efficiency and how quickly credit sales convert into cash."
            },
            {
                "id": 3014,
                "q": "What is the 'cash operating cycle' (working capital cycle) for a manufacturing or trading business?",
                "options": [
                    "Inventory holding period + Trade receivables collection period − Trade payables payment period",
                    "Sales revenue − Cost of sales",
                    "Total assets + Total liabilities",
                    "Gross profit / Net profit"
                ],
                "answer": 0,
                "explanation": "The cash operating cycle measures the time lag between paying suppliers for raw materials/goods and collecting cash from customers."
            },
            {
                "id": 3015,
                "q": "What is 'financial gearing (leverage)' and what risk does high gearing create?",
                "options": [
                    "The proportion of debt finance relative to equity (or total capital); high gearing increases financial risk because fixed interest obligations must be paid regardless of profit fluctuations",
                    "The ratio of current assets to current liabilities",
                    "The number of mechanical gears in factory machines",
                    "High gearing eliminates all bankruptcy risk"
                ],
                "answer": 0,
                "explanation": "High gearing magnifies returns to shareholders in good times but sharply increases insolvency risk during downturns."
            },
            {
                "id": 3016,
                "q": "What is a 'commercial bank's' primary economic role in business finance?",
                "options": [
                    "Financial intermediation—accepting deposits from savers, providing payment/clearing systems, and lending funds to businesses and households while managing maturity and credit transformation",
                    "Issuing national currency notes exclusively",
                    "Auditing listed companies' financial statements",
                    "Enacting parliamentary tax laws"
                ],
                "answer": 0,
                "explanation": "Commercial banks channel savings into productive loans and facilitate domestic and international payments."
            },
            {
                "id": 3017,
                "q": "What is the role of a 'Central Bank' (such as Bangladesh Bank)?",
                "options": [
                    "Issuing currency, formulating and implementing monetary policy, regulating and supervising commercial banks, managing foreign exchange reserves, and acting as lender of last resort",
                    "Selling retail insurance policies to households",
                    "Competing directly with commercial supermarkets",
                    "Preparing tax returns for private partnerships"
                ],
                "answer": 0,
                "explanation": "Central banks maintain monetary and financial system stability."
            },
            {
                "id": 3018,
                "q": "Which source of finance involves an asset-financing agreement where the lessee pays periodic rentals to use an asset (such as machinery or vehicles) over a contracted term without necessarily paying full upfront purchase cost?",
                "options": [
                    "Leasing",
                    "Rights issue",
                    "Commercial paper",
                    "Trade payables"
                ],
                "answer": 0,
                "explanation": "Leasing enables businesses to acquire the use of assets through periodic payments while preserving cash reserves."
            },
            {
                "id": 3019,
                "q": "What is 'business angel' finance?",
                "options": [
                    "Wealthy, experienced individuals (often successful entrepreneurs) who invest their own personal capital into early-stage startups in exchange for equity and provide hands-on mentoring",
                    "A non-repayable government subsidy",
                    "A 30-year syndicated bank loan",
                    "An automated invoice factoring software"
                ],
                "answer": 0,
                "explanation": "Business angels bridge the early-stage funding gap between friends/family and institutional venture capital."
            },
            {
                "id": 3020,
                "q": "What is 'export credit insurance' in international trade finance?",
                "options": [
                    "Insurance protecting an exporter against the risk of non-payment by an overseas buyer due to commercial default (insolvency) or political/country events (war, currency transfer blocks)",
                    "Insurance covering employee dental expenses",
                    "A loan used to buy domestic office furniture",
                    "A discount offered to local cash buyers"
                ],
                "answer": 0,
                "explanation": "Export credit insurance mitigates cross-border buyer default and political payment risks."
            },
            {
                "id": 3021,
                "q": "What is 'greenwashing' in sustainable business and green finance?",
                "options": [
                    "Making misleading, unsubstantiated, or exaggerated claims about the environmental or sustainability benefits of a company's products, operations, or green financial instruments",
                    "Cleaning factory floors with eco-friendly soap",
                    "Investing 100% of funds into verified solar power plants",
                    "Publishing independently assured carbon emission disclosures"
                ],
                "answer": 0,
                "explanation": "Greenwashing deceives investors and consumers, prompting strict taxonomy, disclosure, and assurance standards."
            },
            {
                "id": 3022,
                "q": "What is the purpose of 'budgetary control' within the finance function?",
                "options": [
                    "Setting financial budgets aligned with plans, comparing actual results against budgeted figures, investigating variances, and taking corrective management action",
                    "Preventing any manager from ever spending money on raw materials",
                    "Replacing external financial reporting",
                    "Eliminating the need for cash flow forecasts"
                ],
                "answer": 0,
                "explanation": "Budgetary control links planning and performance monitoring through variance analysis and accountability."
            },
            {
                "id": 3023,
                "q": "Why is 'segregation of duties' a core internal financial control?",
                "options": [
                    "It divides key stages of a transaction (authorization, custody, recording, reconciliation) across different people so no single person can both commit and conceal an error or fraud",
                    "It doubles the time required to sign every cheque without benefit",
                    "It allows one person to control the entire accounting system",
                    "It applies only to companies with over 10,000 employees"
                ],
                "answer": 0,
                "explanation": "Segregation of duties reduces fraud and error opportunities through independent cross-checks."
            },
            {
                "id": 3024,
                "q": "What does 'public interest' responsibility mean for the accountancy profession?",
                "options": [
                    "Professional accountants must consider the collective well-being of the community of people and institutions the profession serves—including investors, creditors, employers, employees, governments, and the public—rather than solely satisfying an individual client or employer",
                    "Accountants must publish all client bank passwords on public websites",
                    "Accountants work only for government ministries",
                    "Public interest means ignoring client confidentiality whenever curious"
                ],
                "answer": 0,
                "explanation": "Public trust in financial reporting and assurance relies on accountants upholding public interest over narrow self-interest."
            },
            {
                "id": 3025,
                "q": "Under the Financial Reporting Act 2015 in Bangladesh, which entities are typically classified as 'Public Interest Entities (PIEs)' subject to FRC oversight?",
                "options": [
                    "Listed companies, banks, insurance companies, financial institutions, large microfinance/NGOs, and state-owned or large enterprises meeting prescribed public interest criteria",
                    "Small neighborhood street vendors",
                    "Individual household family budgets",
                    "Unregistered student study clubs"
                ],
                "answer": 0,
                "explanation": "PIEs carry significant public economic impact and therefore face heightened reporting, governance, and audit oversight."
            },
            {
                "id": 3026,
                "q": "Which corporate governance principle requires directors to explain their decisions, financial performance, and stewardship openly to shareholders and stakeholders?",
                "options": [
                    "Accountability and Transparency",
                    "Secrecy and Opacity",
                    "Autocracy",
                    "Insider Favoritism"
                ],
                "answer": 0,
                "explanation": "Good governance rests on fairness, accountability, responsibility, and transparency."
            },
            {
                "id": 3027,
                "q": "Under the BSEC Corporate Governance Code 2018, how many meetings must the Audit Committee of a listed company hold at a minimum during a financial year?",
                "options": [
                    "At least 4 meetings in a financial year (quarterly)",
                    "Only 1 meeting every 5 years",
                    "52 weekly meetings",
                    "Zero meetings unless fraud occurs"
                ],
                "answer": 0,
                "explanation": "The BSEC Code requires at least four Audit Committee meetings per year, aligned with quarterly and annual financial reporting."
            },
            {
                "id": 3028,
                "q": "Under the BSEC Corporate Governance Code 2018, who signs the annual Corporate Governance Compliance Certificate for a listed company?",
                "options": [
                    "A practicing Chartered Accountant (CA), Cost and Management Accountant (CMA), or Chartered Secretary (CS) other than the company's statutory financial statement auditor",
                    "The company's own Managing Director",
                    "The company's statutory external auditor who audits the annual accounts",
                    "A junior accounts clerk"
                ],
                "answer": 0,
                "explanation": "To preserve independence, the BSEC Code specifies that the compliance certificate must be issued by an eligible practicing professional other than the statutory auditor."
            },
            {
                "id": 3029,
                "q": "What is the 'Cadbury Report (1992)' best known for in corporate governance history?",
                "options": [
                    "Establishing foundational corporate governance principles—including separating Chairperson and CEO, appointing independent non-executive directors, forming an independent Audit Committee, and introducing the 'comply or explain' framework",
                    "Inventing double-entry bookkeeping in 1494",
                    "Abolishing limited liability companies",
                    "Setting corporate income tax rates in Bangladesh"
                ],
                "answer": 0,
                "explanation": "The UK Cadbury Report shaped modern corporate governance codes worldwide, including Bangladesh's BSEC Code."
            },
            {
                "id": 3030,
                "q": "Why must an internal audit function have a direct reporting line to the Audit Committee rather than reporting solely to the Finance Director / CFO?",
                "options": [
                    "To preserve organizational independence and objectivity so internal auditors can audit finance processes and report control weaknesses or management overrides without fear of retaliation",
                    "Because the CFO is prohibited from reading internal audit reports",
                    "Because internal auditors are external statutory auditors",
                    "To eliminate the need for an Audit Committee"
                ],
                "answer": 0,
                "explanation": "Functional reporting to the Audit Committee protects internal audit independence from executive management."
            },
            {
                "id": 3031,
                "q": "What is 'ethical culture' in an organisation?",
                "options": [
                    "Shared values, norms, leadership behavior ('tone at the top'), reward systems, and speak-up mechanisms that encourage employees to act ethically even when nobody is watching",
                    "Having a dusty ethics poster on a wall while rewarding aggressive misreporting",
                    "Firing anyone who reports an accounting error",
                    "Ignoring laws to beat competitors"
                ],
                "answer": 0,
                "explanation": "True ethical culture aligns leadership actions, incentives, training, and governance with stated values."
            },
            {
                "id": 3032,
                "q": "Which ethical threat arises when a long-standing relationship with a client or employer makes an accountant overly sympathetic to their interests or too accepting of their work?",
                "options": [
                    "Familiarity threat",
                    "Advocacy threat",
                    "Intimidation threat",
                    "Self-review threat"
                ],
                "answer": 0,
                "explanation": "Familiarity threats weaken objective skepticism due to close personal or prolonged professional association."
            },
            {
                "id": 3033,
                "q": "When an accountant acquires confidential information during professional work, under what condition may they disclose it in the 'public interest'?",
                "options": [
                    "Only when the disclosure can be justified in the public interest AND is not contrary to laws and regulations (typically after seeking senior/legal advice)",
                    "Whenever a journalist offers money for a scoop",
                    "Whenever a friend asks for investment advice",
                    "Never under any circumstances"
                ],
                "answer": 0,
                "explanation": "Public interest disclosures are strictly conditional on legal permissibility and genuine public harm justification."
            },
            {
                "id": 3034,
                "q": "What does 'Gross Domestic Product (GDP)' measure?",
                "options": [
                    "The total monetary value of all final goods and services produced within a country's borders over a specific time period (usually a quarter or year)",
                    "The total bank deposits of commercial banks only",
                    "The total budget deficit of the government",
                    "The average price of imported oil"
                ],
                "answer": 0,
                "explanation": "GDP measures domestic economic output and growth across consumption, investment, government spending, and net exports."
            },
            {
                "id": 3035,
                "q": "What is 'demand-pull inflation' versus 'cost-push inflation'?",
                "options": [
                    "Demand-pull inflation occurs when aggregate demand grows faster than aggregate supply ('too much money chasing too few goods'); cost-push inflation occurs when rising production costs (wages, energy, imported raw materials) push prices up",
                    "Demand-pull happens when prices fall; cost-push happens when taxes drop to zero",
                    "Both are caused solely by central banks lowering taxes",
                    "Inflation means prices of all goods are falling"
                ],
                "answer": 0,
                "explanation": "Distinguishing demand-pull and cost-push drivers helps policymakers and businesses respond appropriately."
            },
            {
                "id": 3036,
                "q": "In 'perfect competition', what price-setting power does an individual firm possess?",
                "options": [
                    "None — each firm is a 'price taker' facing a perfectly elastic horizontal demand curve at the market equilibrium price",
                    "Complete monopoly power to charge any price",
                    "Power to block all new competitors from entering",
                    "Power to collude legally with rivals"
                ],
                "answer": 0,
                "explanation": "Many small firms, identical products, perfect information, and free entry/exit force firms to accept the market price."
            },
            {
                "id": 3037,
                "q": "What is 'information asymmetry' as a cause of market failure?",
                "options": [
                    "When one party to a transaction possesses materially more or better information than the other (leading to adverse selection or moral hazard, e.g., used cars, insurance, or corporate reporting)",
                    "When both buyer and seller have identical perfect knowledge",
                    "When all prices are printed in newspapers",
                    "When supply equals demand"
                ],
                "answer": 0,
                "explanation": "Information asymmetry distorts market efficiency and justifies mandatory disclosure laws, warranties, and independent audits."
            },
            {
                "id": 3038,
                "q": "What is the economic effect of a 'minimum wage' set above the free-market equilibrium wage rate?",
                "options": [
                    "It acts as a price floor in the labor market, raising incomes for employed workers but potentially creating excess supply of labor (unemployment) if set significantly above equilibrium productivity",
                    "It acts as a price ceiling that reduces all wages to zero",
                    "It guarantees zero unemployment in every sector",
                    "It has no effect on labor supply or demand"
                ],
                "answer": 0,
                "explanation": "A minimum wage is a classic example of direct regulation of people/labor in business."
            },
            {
                "id": 3039,
                "q": "How does a depreciation of the domestic currency (e.g., BDT weakening against USD) generally affect a country's exporters and importers?",
                "options": [
                    "Exporters become more price-competitive abroad (earning more BDT per USD), while importers face higher domestic costs for imported raw materials and finished goods",
                    "Imports become much cheaper and exports become much more expensive abroad",
                    "Neither exporters nor importers are affected",
                    "Foreign currency reserves disappear automatically"
                ],
                "answer": 0,
                "explanation": "Currency depreciation boosts export competitiveness while raising import costs and imported inflation."
            },
            {
                "id": 3040,
                "q": "What is the primary purpose of 'health and safety regulation' in business?",
                "options": [
                    "To protect employees, customers, and the public from workplace injuries, occupational illnesses, and hazardous conditions through mandatory standards and inspections",
                    "To increase factory accident rates",
                    "To exempt employers from liability for unsafe machinery",
                    "To reduce corporate tax rates"
                ],
                "answer": 0,
                "explanation": "Direct regulation of people/workplaces enforces safe working environments and employee welfare."
            },
            {
                "id": 3041,
                "q": "Which source of business data is 'internal primary data'?",
                "options": [
                    "Data collected directly by the business itself from its own operations—such as point-of-sale transaction logs, customer satisfaction surveys, or ERP production records",
                    "Published government census statistics from the Bangladesh Bureau of Statistics",
                    "A third-party industry research report purchased from a consultancy",
                    "Competitor annual reports downloaded from a stock exchange"
                ],
                "answer": 0,
                "explanation": "Primary data is gathered firsthand for a specific purpose; internal data originates inside the organisation."
            },
            {
                "id": 3042,
                "q": "What is 'confirmation bias' when interpreting business data?",
                "options": [
                    "The tendency to search for, interpret, or favor data that confirms pre-existing beliefs or hypotheses while ignoring contradictory evidence",
                    "Checking mathematical formulas twice",
                    "Sending external bank confirmation letters",
                    "Using a random number generator"
                ],
                "answer": 0,
                "explanation": "Cognitive biases like confirmation bias and survivorship bias can lead analysts to misread data."
            },
            {
                "id": 3043,
                "q": "What is 'correlation versus causation' a critical warning in data science and analytics?",
                "options": [
                    "Two variables moving together statistically (correlation) does NOT automatically prove that one causes the other—there may be a confounding third variable or coincidence",
                    "Correlation always proves 100% direct causation",
                    "Causation means two variables never move together",
                    "Correlation applies only to cash balances"
                ],
                "answer": 0,
                "explanation": "Mistaking correlation for causation leads to flawed strategic decisions."
            },
            {
                "id": 3044,
                "q": "In Excel/spreadsheets, what does the `VLOOKUP` or `XLOOKUP` function primarily do?",
                "options": [
                    "Searches for a lookup value in a table or range and retrieves corresponding matching data from another column/row",
                    "Creates a 3D pie chart automatically",
                    "Encrypts the workbook with a password",
                    "Sends an email to all suppliers"
                ],
                "answer": 0,
                "explanation": "Lookup functions link tables (such as matching product codes to unit prices) dynamically."
            },
            {
                "id": 3045,
                "q": "What is 'Data Science'?",
                "options": [
                    "An interdisciplinary field combining statistics, mathematics, computer science/programming, and domain expertise to extract actionable insights and predictive models from large structured and unstructured datasets",
                    "Repairing broken computer keyboards",
                    "Typing paper letters in a word processor",
                    "Filing physical tax folders alphabetically"
                ],
                "answer": 0,
                "explanation": "Data science uses statistical modeling, machine learning, and data engineering to solve complex business problems."
            },
            {
                "id": 3046,
                "q": "What is 'Machine Learning (ML)'?",
                "options": [
                    "A subset of Artificial Intelligence where algorithms learn patterns from training data to make predictions or decisions without being explicitly programmed with hard-coded rules for every scenario",
                    "A manual filing cabinet system",
                    "A fixed spreadsheet sum formula",
                    "A physical printing press"
                ],
                "answer": 0,
                "explanation": "Machine learning enables fraud detection, credit scoring, demand forecasting, and anomaly detection at scale."
            },
            {
                "id": 3047,
                "q": "How does 'Artificial Intelligence (AI)' support the accountancy and audit profession?",
                "options": [
                    "Analyzing 100% of journal entries for fraud anomalies, extracting key clauses from thousands of lease/loan contracts, automating expense classification, and enhancing predictive forecasting",
                    "Replacing professional ethical responsibility and legal accountability",
                    "Eliminating the need for professional skepticism",
                    "Printing paper cheques faster"
                ],
                "answer": 0,
                "explanation": "AI augments accountants and auditors with full-population anomaly detection and document review while humans retain judgment and accountability."
            },
            {
                "id": 3048,
                "q": "What is 'cryptocurrency' (such as Bitcoin) compared to Central Bank Digital Currency (CBDC)?",
                "options": [
                    "Cryptocurrencies are decentralized, privately issued digital assets not backed by a sovereign central bank; CBDCs are digital legal tender issued and backed directly by a central bank",
                    "Both are printed paper banknotes",
                    "Cryptocurrencies are guaranteed by Bangladesh Bank",
                    "CBDCs are illegal private tokens"
                ],
                "answer": 0,
                "explanation": "CBDCs represent sovereign digital fiat money, whereas cryptocurrencies operate on decentralized networks with high price volatility."
            },
            {
                "id": 3049,
                "q": "What is 'multi-factor authentication (MF",
                "options": [
                    "' in cybersecurity? A) Requiring users to verify identity using two or more independent factors—something you know (password), something you have (phone/token), or something you are (biometrics)",
                    "Using the same simple password across every website",
                    "Writing passwords on a sticky note on the monitor",
                    "Disabling login screens completely"
                ],
                "answer": 0,
                "explanation": "MFA dramatically reduces unauthorized account takeovers even if a password is compromised."
            },
            {
                "id": 3050,
                "q": "What is 'Denial-of-Service (DoS / DDoS)' cyberattack?",
                "options": [
                    "Flooding a server, website, or network with overwhelming malicious traffic so legitimate users cannot access online services",
                    "Installing an antivirus patch",
                    "Backing up data to the cloud",
                    "Auditing financial statements remotely"
                ],
                "answer": 0,
                "explanation": "DDoS attacks target the 'Availability' pillar of information security by disrupting online access."
            }
        ]
    },
    {
        "id": 4,
        "title": "Mock Test 4",
        "questions": [
            {
                "id": 4001,
                "q": "What distinguishes a 'profit-seeking business' from a 'not-for-profit (NFP) organisation' (such as a charity or public hospital)?",
                "options": [
                    "Profit-seeking businesses aim primarily to generate financial returns for owners; NFPs exist primarily to achieve social, charitable, educational, or public service objectives (measuring 'Value for Money': Economy, Efficiency, Effectiveness)",
                    "NFPs are prohibited from employing paid staff or keeping accounting records",
                    "Profit-seeking businesses never pay taxes",
                    "NFPs can never hold bank accounts"
                ],
                "answer": 0,
                "explanation": "NFPs focus on mission impact and the 3 Es (Economy, Efficiency, Effectiveness) rather than distributing profits to owners."
            },
            {
                "id": 4002,
                "q": "What are the '3 Es' of Value for Money (VfM) used especially in public sector and not-for-profit performance measurement?",
                "options": [
                    "Economy (acquiring inputs at lowest cost for given quality), Efficiency (maximizing output per unit of input), and Effectiveness (achieving intended strategic outcomes/goals)",
                    "Equity, Earnings, and Exports",
                    "Energy, Ecology, and Electronics",
                    "Estimation, Evaluation, and Execution"
                ],
                "answer": 0,
                "explanation": "Economy controls input cost, Efficiency measures input-to-output productivity, and Effectiveness measures outcome achievement."
            },
            {
                "id": 4003,
                "q": "Which business function is responsible for recruitment, training and development, performance appraisal, reward systems, and employee relations?",
                "options": [
                    "Human Resource Management (HRM)",
                    "Operations and production",
                    "Treasury management",
                    "External audit"
                ],
                "answer": 0,
                "explanation": "HRM aligns human capital capabilities, motivation, and culture with organisational strategy."
            },
            {
                "id": 4004,
                "q": "What is the difference between 'authority' and 'power' in management?",
                "options": [
                    "Authority is the formal, legitimate right to make decisions and give orders attached to a managerial position; power is the broader ability to influence others' behavior (which may stem from expertise, charisma, rewards, coercion, or position)",
                    "Authority and power are identical in every situation",
                    "Power only exists in government ministries",
                    "Authority means physical strength"
                ],
                "answer": 0,
                "explanation": "French and Raven identified coercive, reward, legitimate (authority), referent, and expert sources of power."
            },
            {
                "id": 4005,
                "q": "In Elton Mayo's Hawthorne Studies (Human Relations approach), what key discovery was made about worker productivity?",
                "options": [
                    "Social factors, group norms, recognition, and feeling valued by management significantly boost productivity alongside physical conditions and pay",
                    "Workers are motivated solely by fear of punishment",
                    "Lighting levels are the only factor affecting factory output",
                    "Teamwork reduces productivity in every task"
                ],
                "answer": 0,
                "explanation": "The Hawthorne Studies demonstrated the powerful impact of human relationships, attention, and informal group dynamics on performance."
            },
            {
                "id": 4006,
                "q": "Which organisational structure divides a large diversified corporation into semi-autonomous units based on product lines, geographical regions, or customer segments?",
                "options": [
                    "Divisional (multidivisional) structure",
                    "Simple entrepreneurial structure",
                    "Pure sole tradership",
                    "Single-department functional structure"
                ],
                "answer": 0,
                "explanation": "Divisional structures delegate operational autonomy to product or geographic divisions while head office retains strategic oversight and capital allocation."
            },
            {
                "id": 4007,
                "q": "What is a 'tall' organisation versus a 'flat' organisation?",
                "options": [
                    "A tall organisation has many hierarchical management layers and narrow spans of control; a flat organisation has few management layers and wide spans of control",
                    "A tall organisation occupies a skyscraper; a flat organisation occupies a single-story building",
                    "Flat organisations have hundreds of vice presidents",
                    "Tall organisations have zero managers"
                ],
                "answer": 0,
                "explanation": "Tall hierarchies offer close supervision and clear promotion paths but suffer from slower communication and higher overhead; flat structures are faster and leaner."
            },
            {
                "id": 4008,
                "q": "What is 'delayering' in organisational restructuring?",
                "options": [
                    "Removing one or more middle management layers to flatten the hierarchy, widen spans of control, speed up decision-making, and cut overhead costs",
                    "Adding five new layers of supervisors",
                    "Issuing bonus shares to directors",
                    "Outsourcing factory security"
                ],
                "answer": 0,
                "explanation": "Delayering reduces bureaucracy and brings senior management closer to customers and operations."
            },
            {
                "id": 4009,
                "q": "In Michael Porter's Generic Competitive Strategies, what are the three primary strategies for achieving competitive advantage?",
                "options": [
                    "Cost Leadership, Differentiation, and Focus (Cost Focus or Differentiation Focus)",
                    "Monopoly, Oligopoly, and Cartel",
                    "Acquisition, Liquidation, and Bankruptcy",
                    "Pricing, Packaging, and Promotion"
                ],
                "answer": 0,
                "explanation": "Porter warned against getting 'stuck in the middle' without a clear cost leadership, differentiation, or niche focus strategy."
            },
            {
                "id": 4010,
                "q": "What is 'risk appetite' in enterprise risk management?",
                "options": [
                    "The amount and type of risk that an organisation is willing to pursue, retain, or take in pursuit of its strategic objectives",
                    "The total amount of food consumed in the staff canteen",
                    "The statutory tax rate on corporate profits",
                    "The audit fee charged by external auditors"
                ],
                "answer": 0,
                "explanation": "The board defines risk appetite to guide strategic risk-taking within acceptable boundaries."
            },
            {
                "id": 4011,
                "q": "Which financial statement explains the changes in a company's cash and cash equivalents over an accounting period across operating, investing, and financing activities?",
                "options": [
                    "Statement of Cash Flows (IAS 7)",
                    "Statement of Financial Position",
                    "Statement of Profit or Loss",
                    "Directors' Remuneration Report"
                ],
                "answer": 0,
                "explanation": "The Statement of Cash Flows categorizes cash inflows and outflows into operating, investing, and financing activities."
            },
            {
                "id": 4012,
                "q": "What is 'Integrated Reporting (<IR>)'?",
                "options": [
                    "Concise corporate communication showing how an organisation's strategy, governance, performance, and prospects create value over time across six capitals (financial, manufactured, intellectual, human, social & relationship, and natural)",
                    "Combining two separate bank accounts into one",
                    "Merging the external auditor and internal auditor into one person",
                    "Filing tax returns electronically"
                ],
                "answer": 0,
                "explanation": "Integrated reporting connects financial performance with broader ESG and multi-capital value creation."
            },
            {
                "id": 4013,
                "q": "What is 'sustainability reporting' (e.g., IFRS S1 & S2 / GRI standards)?",
                "options": [
                    "Disclosing an entity's environmental, social, and governance (ESG) impacts, climate-related risks and opportunities, and sustainability metrics to investors and stakeholders",
                    "Reporting only petty cash expenses",
                    "Calculating depreciation on motor vehicles",
                    "Advertising product discounts in newspapers"
                ],
                "answer": 0,
                "explanation": "IFRS S1 (General Sustainability) and IFRS S2 (Climate-related Disclosures) standardize investor-focused sustainability reporting."
            },
            {
                "id": 4014,
                "q": "Which investor ratio compares a company's current market share price to its earnings per share (EPS)?",
                "options": [
                    "Price-Earnings (P/E) ratio",
                    "Current ratio",
                    "Inventory turnover ratio",
                    "Interest cover ratio"
                ],
                "answer": 0,
                "explanation": "The P/E ratio reflects market expectations of future earnings growth and perceived risk."
            },
            {
                "id": 4015,
                "q": "What does 'interest cover' (Operating Profit / Finance Costs) measure?",
                "options": [
                    "How many times a company's operating profit can cover its annual interest charges—indicating debt-servicing safety",
                    "How quickly inventory is sold",
                    "The percentage of shares owned by directors",
                    "The rate of corporate income tax"
                ],
                "answer": 0,
                "explanation": "Low interest cover signals vulnerability to earnings drops or interest rate hikes."
            },
            {
                "id": 4016,
                "q": "What is 'retained earnings' (ploughing back profits) as a source of business finance?",
                "options": [
                    "Internal equity finance generated by retaining post-tax profits within the business rather than distributing them as dividends—incurring no issue costs and avoiding ownership dilution",
                    "A short-term bank loan",
                    "A government grant",
                    "Unpaid supplier invoices"
                ],
                "answer": 0,
                "explanation": "Retained earnings are the primary internal funding source for organic business expansion."
            },
            {
                "id": 4017,
                "q": "How does 'preference share capital' differ from 'ordinary share capital'?",
                "options": [
                    "Preference shares typically carry a fixed dividend rate and priority over ordinary shares for dividends and capital repayment on winding up, but usually carry no voting rights",
                    "Preference shareholders control all board appointments and receive unlimited variable dividends",
                    "Ordinary shareholders always get paid before bondholders and preference shareholders",
                    "Preference shares are identical to trade payables"
                ],
                "answer": 0,
                "explanation": "Preference shares sit between debt and ordinary equity in risk and priority."
            },
            {
                "id": 4018,
                "q": "What is a 'debenture' or 'corporate bond'?",
                "options": [
                    "A long-term tradable debt instrument issued by a company acknowledging a loan, paying fixed or floating interest (coupon) and repayable on a specified maturity date",
                    "An ordinary share voting proxy form",
                    "A petty cash receipt",
                    "A short-term supplier discount"
                ],
                "answer": 0,
                "explanation": "Bonds/debentures allow large companies to raise long-term debt directly from capital market investors."
            },
            {
                "id": 4019,
                "q": "What is 'sale and leaseback'?",
                "options": [
                    "Selling an owned asset (such as commercial property) to a buyer/lessor for immediate cash proceeds and simultaneously leasing it back for continued operational use",
                    "Buying raw materials on 30-day credit",
                    "Issuing bonus shares to existing shareholders",
                    "Factoring export invoices"
                ],
                "answer": 0,
                "explanation": "Sale and leaseback unlocks capital tied up in property/equipment while retaining operational use."
            },
            {
                "id": 4020,
                "q": "What is 'forfaiting' in export finance?",
                "options": [
                    "The non-recourse purchase by a forfaiter (bank/financial institution) of medium-to-long-term export receivables (such as bills of exchange or promissory notes guaranteed by an importer's bank) at a discount for immediate cash",
                    "Paying import customs duty in cash",
                    "Borrowing overnight on the money market",
                    "Issuing domestic preference shares"
                ],
                "answer": 0,
                "explanation": "Forfaiting converts medium-term export credit into immediate cash without recourse to the exporter."
            },
            {
                "id": 4021,
                "q": "Why do SMEs often face a 'funding gap' (Macmillan Gap) when seeking growth finance?",
                "options": [
                    "They may be too large for personal/micro-loans yet lack the track record, collateral, or scale required for public stock market listings or major bank debt",
                    "SMEs are legally banned from borrowing money",
                    "SMEs always have unlimited cash reserves",
                    "Banks prefer lending only to unprofitable startups"
                ],
                "answer": 0,
                "explanation": "Business angels, venture capital, leasing, factoring, and SME credit schemes help bridge the growth funding gap."
            },
            {
                "id": 4022,
                "q": "What is 'climate finance' / 'green finance' aimed at supporting?",
                "options": [
                    "Financial flows, investments, and banking products directed toward climate change mitigation (reducing emissions), climate adaptation (resilience), and environmental protection",
                    "Subsidizing high-emission fossil fuel expansion without transition plans",
                    "Financing speculative cryptocurrency trading",
                    "Short-term consumer payday loans"
                ],
                "answer": 0,
                "explanation": "Green finance channels capital into renewable energy, energy efficiency, climate adaptation, and sustainable infrastructure."
            },
            {
                "id": 4023,
                "q": "Which internal control ensures that financial data processed into the general ledger is complete and accurate?",
                "options": [
                    "Control account reconciliations (e.g., reconciling receivables and payables control accounts to subsidiary ledgers and monthly bank reconciliations)",
                    "Deleting audit trails at month-end",
                    "Allowing unapproved manual journal entries",
                    "Skipping trial balance checks"
                ],
                "answer": 0,
                "explanation": "Regular reconciliations between control accounts, sub-ledgers, and external statements detect posting omissions and errors."
            },
            {
                "id": 4024,
                "q": "What is 'self-regulation' in a profession versus 'statutory regulation'?",
                "options": [
                    "Self-regulation is oversight and standard-setting by the professional body itself (members governing peers); statutory regulation is oversight established and enforced by government legislation/independent public regulators",
                    "Self-regulation means no rules exist at all",
                    "Statutory regulation means individual accountants write their own laws",
                    "Both terms mean the exact same thing"
                ],
                "answer": 0,
                "explanation": "Modern accountancy combines professional self-regulation (ICAB) with statutory oversight (FRC Bangladesh)."
            },
            {
                "id": 4025,
                "q": "Which corporate governance principle requires that no single individual or small group can dominate the board's decision-making?",
                "options": [
                    "Division of responsibilities at the head of the company (separating Chairperson and CEO) and an appropriate balance of executive and independent non-executive directors",
                    "Appointing the CEO's family members to every board seat",
                    "Abolishing board meetings",
                    "Giving the CEO unilateral power to set their own pay"
                ],
                "answer": 0,
                "explanation": "Balanced board composition and role separation prevent unchecked executive dominance."
            },
            {
                "id": 4026,
                "q": "Under the BSEC Corporate Governance Code 2018, what is the maximum tenure an Independent Director may serve on a listed company's board?",
                "options": [
                    "A term of 3 years, which may be extended for 1 more term of 3 years (maximum 6 years total, subject to cooling-off rules)",
                    "Lifetime appointment without re-election",
                    "Maximum 6 months",
                    "25 consecutive years"
                ],
                "answer": 0,
                "explanation": "Tenure limits protect the ongoing independence of Independent Directors from becoming overly close to management."
            },
            {
                "id": 4027,
                "q": "Under the BSEC Corporate Governance Code 2018, who must certify the financial statements to the Board before approval (CEO & CFO certification)?",
                "options": [
                    "The Managing Director (MD)/CEO and Chief Financial Officer (CFO) must jointly certify that the financial statements do not contain any materially untrue statement, present a true and fair view, and comply with accounting standards and laws",
                    "The external auditor and the bank manager",
                    "The junior cashier and receptionist",
                    "No certification is required"
                ],
                "answer": 0,
                "explanation": "CEO/CFO certification reinforces executive accountability for accurate financial reporting and internal controls."
            },
            {
                "id": 4028,
                "q": "What is the role of the 'Audit Committee' regarding the external auditor?",
                "options": [
                    "Recommending appointment/reappointment/remuneration of the external auditor, reviewing independence and objectivity, discussing audit scope/findings, and reviewing financial statements before board approval",
                    "Performing detailed substantive audit testing on inventory themselves",
                    "Instructing the external auditor to ignore material misstatements",
                    "Paying the external auditor out of personal pockets"
                ],
                "answer": 0,
                "explanation": "The Audit Committee serves as the primary governance interface safeguarding external auditor independence and financial reporting integrity."
            },
            {
                "id": 4029,
                "q": "Why is 'institutional investor engagement' important in corporate governance?",
                "options": [
                    "Large institutional shareholders (pension funds, mutual funds, insurers) hold significant voting power and stewardship responsibility to monitor boards, vote on resolutions, and demand sustainable governance",
                    "Institutional investors never vote at AGMs",
                    "Institutional investors run daily factory shifts",
                    "Institutional investors are exempt from company law"
                ],
                "answer": 0,
                "explanation": "Active institutional stewardship counters shareholder passivity and holds boards accountable."
            },
            {
                "id": 4030,
                "q": "What is 'corporate social responsibility' vs. 'stakeholder accountability' in governance?",
                "options": [
                    "Governance frameworks increasingly require boards to consider long-term stakeholder relationships, environmental impacts, and ethical behavior alongside financial returns",
                    "Governance requires ignoring all stakeholders except short-term speculators",
                    "Stakeholder accountability means letting competitors read secret R&D files",
                    "Corporate governance applies only to sole traders"
                ],
                "answer": 0,
                "explanation": "Modern governance codes emphasize sustainable value creation and stakeholder engagement."
            },
            {
                "id": 4031,
                "q": "Which ethical threat occurs when a client threatens to sue an audit firm or dismiss them unless the firm agrees to an aggressive accounting treatment?",
                "options": [
                    "Intimidation threat",
                    "Self-review threat",
                    "Familiarity threat",
                    "Advocacy threat"
                ],
                "answer": 0,
                "explanation": "Threats of litigation, dismissal, or fee cuts constitute intimidation threats aimed at deterring objective judgment."
            },
            {
                "id": 4032,
                "q": "Why is 'accidental disclosure' highlighted as the greatest practical risk to client confidentiality?",
                "options": [
                    "Because casual conversations in public places (trains, restaurants, elevators) or leaving audit files unattended at client premises, cars, or unsecured computers happen easily without malicious intent",
                    "Because accountants routinely sell client secrets to newspapers",
                    "Because court subpoenas are invalid",
                    "Because client data is never sensitive"
                ],
                "answer": 0,
                "explanation": "Everyday carelessness—both externally and inside the client's office—is the leading cause of confidentiality breaches."
            },
            {
                "id": 4033,
                "q": "When an accounting firm acts for two competing clients whose interests conflict, what is required before proceeding (assuming the conflict is manageable)?",
                "options": [
                    "Sufficient disclosure of the conflict and proposed safeguards (such as Chinese Walls) to both clients and obtaining their informed consent",
                    "Hiding the conflict from both clients",
                    "Assigning the exact same engagement partner and team to both clients without barriers",
                    "Proceeding even if one client explicitly refuses consent"
                ],
                "answer": 0,
                "explanation": "Informed client consent combined with effective information barriers ('Chinese Walls') is mandatory; if refused or unmanageable, the firm must decline/withdraw."
            },
            {
                "id": 4034,
                "q": "What is 'stagflation' in macroeconomics?",
                "options": [
                    "A difficult economic condition combining stagnant/slow economic growth and high unemployment with persistently high inflation",
                    "Rapid economic growth combined with falling prices",
                    "Zero inflation and full employment",
                    "A temporary rise in stock market volume"
                ],
                "answer": 0,
                "explanation": "Stagflation (often triggered by adverse supply shocks) poses a dilemma because stimulating growth worsens inflation while tightening policy worsens unemployment."
            },
            {
                "id": 4035,
                "q": "What is 'Income Elasticity of Demand (YED)' for an 'inferior good'?",
                "options": [
                    "Negative (as consumer incomes rise, demand for the inferior good decreases as consumers switch to higher-quality alternatives)",
                    "Positive and greater than 1 (luxury good)",
                    "Always zero",
                    "Always positive infinity"
                ],
                "answer": 0,
                "explanation": "Normal goods have positive YED (luxuries > 1, necessities 0 to 1), whereas inferior goods have negative YED."
            },
            {
                "id": 4036,
                "q": "What is a 'natural monopoly'?",
                "options": [
                    "An industry where economies of scale are so large relative to market demand (e.g., water pipelines, national electricity transmission grids) that a single firm can supply the entire market at a lower average cost than two or more competing firms",
                    "A monopoly created by selling organic fruit",
                    "A market with 10,000 tiny corner shops",
                    "A temporary street market"
                ],
                "answer": 0,
                "explanation": "Natural monopolies are typically regulated (price caps, quality standards) or publicly owned to prevent monopoly pricing abuse."
            },
            {
                "id": 4037,
                "q": "What is a 'merit good' versus a 'demerit good'?",
                "options": [
                    "Merit goods (education, healthcare, vaccinations) generate positive externalities and are under-consumed in a free market; demerit goods (tobacco, narcotics) generate negative externalities/harm and are over-consumed without regulation",
                    "Merit goods are harmful; demerit goods are healthy",
                    "Neither involves externalities or government intervention",
                    "Both are pure public goods"
                ],
                "answer": 0,
                "explanation": "Governments subsidize/provide merit goods and tax/restrict demerit goods to correct market failure."
            },
            {
                "id": 4038,
                "q": "What is 'balance of payments' current account deficit?",
                "options": [
                    "When a country's total imports of goods, services, primary income, and secondary transfers exceed its total exports and inflows over a period",
                    "When government tax revenue exceeds government spending",
                    "When a single company makes a net loss",
                    "When domestic inflation is zero"
                ],
                "answer": 0,
                "explanation": "Persistent current account deficits put downward pressure on the exchange rate and foreign reserves."
            },
            {
                "id": 4039,
                "q": "Why do countries join regional trade blocs or free trade agreements (such as SAFTA or bilateral trade agreements)?",
                "options": [
                    "To reduce or eliminate tariffs and non-tariff barriers among member states, expand export market access, boost specialization, and attract investment",
                    "To ban all trade with neighboring countries",
                    "To increase customs duties on all goods to 500%",
                    "To eliminate domestic currencies immediately"
                ],
                "answer": 0,
                "explanation": "Trade agreements promote trade creation, economies of scale, and consumer choice."
            },
            {
                "id": 4040,
                "q": "How does 'intellectual property (IP) law' (patents, copyrights, trademarks) regulate and support business?",
                "options": [
                    "It grants temporary legal exclusivity to creators and innovators, incentivizing R&D and brand investment while preventing unauthorized copying",
                    "It forces companies to give away all secret inventions for free immediately",
                    "It bans companies from registering brand logos",
                    "It sets minimum wage rates"
                ],
                "answer": 0,
                "explanation": "IP protection balances innovation incentives with eventual public dissemination."
            },
            {
                "id": 4041,
                "q": "What is 'survivorship bias' in business data analysis?",
                "options": [
                    "Drawing distorted conclusions by analyzing only successful entities/items that 'survived' a selection process while ignoring those that failed or dropped out (e.g., studying only surviving startups)",
                    "Backing up data on two hard drives",
                    "Testing 100% of a population",
                    "Calculating average inventory days"
                ],
                "answer": 0,
                "explanation": "Ignoring failed or excluded observations systematically overstates success rates and understates risk."
            },
            {
                "id": 4042,
                "q": "What is 'overfitting' in predictive data modeling / machine learning?",
                "options": [
                    "When a model fits historical training data—including random noise—too closely, resulting in poor predictive accuracy on new unseen data",
                    "When a spreadsheet column is too narrow to display numbers",
                    "When a database has too few rows",
                    "When an auditor uses a simple calculator"
                ],
                "answer": 0,
                "explanation": "Overfitted models memorize past noise rather than learning generalizable patterns."
            },
            {
                "id": 4043,
                "q": "In spreadsheet modeling, what is 'What-If Analysis' (such as Goal Seek or Scenario Manager)?",
                "options": [
                    "Testing how changes in key input assumptions (e.g., sales volume, interest rate, unit cost) affect calculated outputs like net profit or cash balance",
                    "Checking spelling in text headers",
                    "Formatting cells in bold blue",
                    "Deleting old worksheets"
                ],
                "answer": 0,
                "explanation": "Sensitivity and scenario analysis help managers evaluate uncertainty and downside risk."
            },
            {
                "id": 4044,
                "q": "What is 'diagnostic analytics'?",
                "options": [
                    "Analyzing data to understand WHY something happened—using drill-downs, variance decomposition, and root-cause correlation after descriptive analytics shows what happened",
                    "Forecasting next decade's GDP",
                    "Automating payroll bank transfers",
                    "Encrypting server hard drives"
                ],
                "answer": 0,
                "explanation": "Diagnostic analytics investigates causes behind trends and variances."
            },
            {
                "id": 4045,
                "q": "What is an 'Enterprise Resource Planning (ERP)' system?",
                "options": [
                    "An integrated software suite connecting core business functions (finance, procurement, inventory, manufacturing, HR, sales) onto a single shared real-time database",
                    "A standalone word processor used only for typing memos",
                    "A physical filing cabinet",
                    "An external bank ATM machine"
                ],
                "answer": 0,
                "explanation": "ERP eliminates departmental data silos and provides real-time operational and financial visibility."
            },
            {
                "id": 4046,
                "q": "What are 'smart contracts' on a blockchain?",
                "options": [
                    "Self-executing computer code stored on a blockchain that automatically enforces and settles contractual terms when predetermined conditions are verified",
                    "Paper contracts signed with green ink",
                    "Verbal promises made over the phone",
                    "Marketing brochures"
                ],
                "answer": 0,
                "explanation": "Smart contracts automate conditional settlement (such as escrow release upon delivery confirmation) without manual intermediaries."
            },
            {
                "id": 4047,
                "q": "What is 'RegTech' (Regulatory Technology)?",
                "options": [
                    "Technology solutions helping financial institutions and businesses automate regulatory compliance, AML/KYC screening, transaction monitoring, and statutory reporting",
                    "Software designed to evade tax regulations",
                    "A retail point-of-sale cash drawer",
                    "A graphic design app"
                ],
                "answer": 0,
                "explanation": "RegTech improves compliance accuracy and lowers regulatory reporting costs."
            },
            {
                "id": 4048,
                "q": "What is 'zero-day vulnerability' in cybersecurity?",
                "options": [
                    "A previously unknown software security flaw for which the vendor has not yet released a patch—leaving systems exposed until fixed",
                    "A software license that expires in zero days",
                    "A computer with zero files stored on it",
                    "A scheduled Sunday maintenance window"
                ],
                "answer": 0,
                "explanation": "Zero-day exploits require defense-in-depth (network segmentation, intrusion detection, least-privilege access) rather than relying solely on patches."
            },
            {
                "id": 4049,
                "q": "What is 'data encryption' (at rest and in transit)?",
                "options": [
                    "Converting readable plaintext data into unreadable ciphertext using cryptographic keys so unauthorized parties cannot read intercepted or stolen data",
                    "Compressing a ZIP file to save disk space",
                    "Deleting duplicate rows in Excel",
                    "Printing reports in landscape mode"
                ],
                "answer": 0,
                "explanation": "Encryption protects data confidentiality both when stored on devices/servers (at rest) and when transmitted across networks (in transit)."
            },
            {
                "id": 4050,
                "q": "Why is 'algorithmic transparency and explainability' an important ethical issue when using AI in finance or HR?",
                "options": [
                    "Organisations must be able to explain and justify automated decisions (such as loan rejections or hiring filters) to regulators, auditors, and affected individuals rather than hiding behind an opaque 'black box'",
                    "Transparency means publishing proprietary source code to competitors",
                    "Explainability eliminates the need for data security",
                    "AI decisions never require human accountability"
                ],
                "answer": 0,
                "explanation": "Explainable AI ensures accountability, fairness, regulatory compliance, and auditability."
            }
        ]
    },
    {
        "id": 5,
        "title": "Mock Test 5",
        "questions": [
            {
                "id": 5001,
                "q": "What is the primary purpose of a 'mission statement'?",
                "options": [
                    "To articulate the organisation's fundamental overarching purpose—why it exists, what it does, and whom it serves",
                    "To list daily petty cash expenses",
                    "To specify next week's factory shift roster",
                    "To calculate annual depreciation"
                ],
                "answer": 0,
                "explanation": "A mission statement communicates enduring core purpose and guides strategic direction."
            },
            {
                "id": 5002,
                "q": "In Blake and Mouton's Managerial Grid, what leadership style combines HIGH concern for production/results with HIGH concern for people/relationships?",
                "options": [
                    "Team Management (9,9)",
                    "Impoverished Management (1,1)",
                    "Country Club Management (1,9)",
                    "Authority-Compliance / Task Management (9,1)"
                ],
                "answer": 0,
                "explanation": "Team management (9,9) integrates high task commitment with strong employee engagement and trust."
            },
            {
                "id": 5003,
                "q": "Which business function manages the transformation of inputs (raw materials, labor, capital) into finished goods or services efficiently and to quality standards?",
                "options": [
                    "Operations and production management",
                    "External auditing",
                    "Share registration",
                    "Tax litigation"
                ],
                "answer": 0,
                "explanation": "Operations management oversees process design, capacity, supply chain, inventory, and quality management."
            },
            {
                "id": 5004,
                "q": "What is 'Total Quality Management (TQM)'?",
                "options": [
                    "An organisation-wide philosophy of continuous improvement ('kaizen') where every employee and process is dedicated to preventing defects and meeting customer expectations right first time",
                    "Inspecting finished goods only after customers return defective items",
                    "Ignoring quality to cut unit costs by 50%",
                    "Outsourcing quality control to competitors"
                ],
                "answer": 0,
                "explanation": "TQM embeds quality responsibility across every function rather than relying solely on end-of-line inspection."
            },
            {
                "id": 5005,
                "q": "What does 'climate change transition risk' refer to for businesses?",
                "options": [
                    "Financial and strategic risks arising from the shift toward a low-carbon economy—such as carbon taxes, stricter emissions regulations, technological disruption, and changing consumer/investor preferences",
                    "Direct physical damage to factories from cyclones or floods (which is physical risk)",
                    "Seasonal changes in office air conditioning bills",
                    "Foreign currency exchange fluctuations"
                ],
                "answer": 0,
                "explanation": "Climate risks divide into Physical risks (acute weather events, chronic sea-level/temperature shifts) and Transition risks (policy, legal, tech, market, reputation)."
            },
            {
                "id": 5006,
                "q": "Which organisational structure is best suited for a small startup founded and directly controlled by a single entrepreneur making all key decisions?",
                "options": [
                    "Entrepreneurial structure",
                    "Global matrix structure",
                    "Multidivisional conglomerate structure",
                    "Public sector bureaucracy"
                ],
                "answer": 0,
                "explanation": "Entrepreneurial structures feature direct central control by the founder with minimal formal hierarchy, enabling rapid action while small."
            },
            {
                "id": 5007,
                "q": "What is a 'Public Limited Company (PLC)' compared to a 'Private Limited Company (Ltd)'?",
                "options": [
                    "A PLC can offer its shares/debentures to the general public (and list on a stock exchange), faces higher minimum capital/disclosure/governance rules, and enjoys wider access to public capital",
                    "A PLC has unlimited liability for all shareholders",
                    "A Private Limited Company must list its shares on the Dhaka Stock Exchange",
                    "A PLC cannot have more than two shareholders"
                ],
                "answer": 0,
                "explanation": "PLCs access public capital markets at the cost of stricter statutory, governance, and public reporting obligations."
            },
            {
                "id": 5008,
                "q": "In PESTEL macro-environmental analysis used during strategic planning, what do the six letters represent?",
                "options": [
                    "Political, Economic, Social, Technological, Environmental (Ecological), and Legal factors",
                    "Profit, Equity, Sales, Tax, Exports, and Liabilities",
                    "Planning, Executing, Staffing, Training, Evaluating, and Leading",
                    "Products, Employees, Suppliers, Technology, Energy, and Loans"
                ],
                "answer": 0,
                "explanation": "PESTEL systematically scans external macro-environmental forces affecting an industry or business."
            },
            {
                "id": 5009,
                "q": "In Johnson, Scholes & Whittington's SAF framework for evaluating strategic options, what do S, A, and F stand for?",
                "options": [
                    "Suitability (does it address strategic position/SWOT?), Acceptability (does return/risk satisfy stakeholders?), and Feasibility (does the business have resources/capabilities to deliver it?)",
                    "Speed, Accuracy, and Finance",
                    "Sales, Assets, and Forecasts",
                    "Standards, Audits, and Fees"
                ],
                "answer": 0,
                "explanation": "Strategic choices are evaluated on Suitability, Acceptability, and Feasibility."
            },
            {
                "id": 5010,
                "q": "What is 'business resilience'?",
                "options": [
                    "An organisation's ability to anticipate, prepare for, respond to, and adapt to incremental change and sudden disruptions in order to survive and prosper",
                    "Refusing to change any business process for 50 years",
                    "Operating without insurance or cash reserves",
                    "Ignoring cyber and supply chain risks"
                ],
                "answer": 0,
                "explanation": "Business resilience integrates risk management, crisis response, business continuity, and strategic adaptability."
            },
            {
                "id": 5011,
                "q": "What is the difference between 'capital expenditure (CapEx)' and 'revenue expenditure (OpEx)'?",
                "options": [
                    "CapEx acquires or enhances long-term non-current assets generating benefits over multiple periods (capitalized on Statement of Financial Position); OpEx covers day-to-day running costs consumed in the current period (expensed in Profit or Loss)",
                    "CapEx is always paid in cash; OpEx is never paid in cash",
                    "OpEx is capitalized as goodwill; CapEx is expensed immediately",
                    "There is no accounting difference between them"
                ],
                "answer": 0,
                "explanation": "Correctly distinguishing CapEx and OpEx prevents distortion of assets and annual profit."
            },
            {
                "id": 5012,
                "q": "Which financial ratio measures how efficiently a company uses its total assets to generate sales revenue?",
                "options": [
                    "Asset turnover (Revenue / Total Assets or Capital Employed)",
                    "Quick ratio",
                    "Dividend cover",
                    "Gearing ratio"
                ],
                "answer": 0,
                "explanation": "Asset turnover links with operating profit margin to drive Return on Capital Employed (ROCE = Operating Margin × Asset Turnover)."
            },
            {
                "id": 5013,
                "q": "What is 'dividend cover' (Earnings Per Share / Dividend Per Share)?",
                "options": [
                    "How many times a company's attributable earnings cover the ordinary dividends declared—indicating dividend sustainability and profit retention",
                    "The cash balance divided by total shares",
                    "Total tax divided by revenue",
                    "Current assets divided by inventory"
                ],
                "answer": 0,
                "explanation": "Higher dividend cover signals safer dividends and stronger internal reinvestment."
            },
            {
                "id": 5014,
                "q": "What is 'overtrading' (undercapitalization) and what are its classic warning signs?",
                "options": [
                    "Expanding sales volume rapidly without sufficient long-term working capital finance—evidenced by surging revenue alongside falling cash/bank overdraft growth, rising receivables/inventory days, and stretched payables",
                    "Holding too much idle cash in a bank account",
                    "Selling off all fixed assets and closing down",
                    "Reducing sales revenue every year"
                ],
                "answer": 0,
                "explanation": "Overtrading can bankrupt a profitable, fast-growing business if cash runs out before receivables settle."
            },
            {
                "id": 5015,
                "q": "What is an 'Initial Public Offering (IPO)'?",
                "options": [
                    "The first sale of shares by a private company to the public on a stock exchange to raise equity capital and obtain a public listing",
                    "A short-term supplier invoice discount",
                    "A private bank overdraft renewal",
                    "A monthly tax return filing"
                ],
                "answer": 0,
                "explanation": "An IPO transitions a company to public listing, unlocking capital access and share liquidity while increasing regulatory scrutiny."
            },
            {
                "id": 5016,
                "q": "What is 'securitization' in capital markets?",
                "options": [
                    "Pooling illiquid financial assets (such as mortgages, auto loans, or receivables) and packaging them into tradable interest-bearing securities sold to capital market investors",
                    "Locking paper files in a steel safe",
                    "Installing CCTV cameras in a bank lobby",
                    "Issuing ordinary share dividends"
                ],
                "answer": 0,
                "explanation": "Securitization converts pools of cash-flow-generating receivables/loans into liquid marketable securities."
            },
            {
                "id": 5017,
                "q": "What is a 'bill of exchange' in international trade finance?",
                "options": [
                    "An unconditional written order signed by the drawer (exporter) requiring the drawee (importer or bank) to pay a specified sum on demand or at a fixed future date",
                    "A receipt for petty cash stationery",
                    "A currency exchange bureau rate board",
                    "A customs tariff schedule"
                ],
                "answer": 0,
                "explanation": "Bills of exchange formalize trade payment obligations and can be discounted for early cash."
            },
            {
                "id": 5018,
                "q": "What is 'sustainability management accounting' (environmental management accounting)?",
                "options": [
                    "Identifying, measuring, and analyzing environmental and social costs/impacts (such as energy, water, waste, carbon emissions) to support resource efficiency and sustainable business decisions",
                    "Hiding environmental fines inside miscellaneous expenses",
                    "Ignoring utility bills during budgeting",
                    "Reporting only historical share prices"
                ],
                "answer": 0,
                "explanation": "Environmental management accounting uncovers hidden waste and resource costs to improve both profitability and sustainability."
            },
            {
                "id": 5019,
                "q": "What is 'treasury risk management' regarding foreign exchange (FX) transaction risk?",
                "options": [
                    "Managing the risk that exchange rate movements between transaction date and settlement date alter the domestic currency value of foreign-currency receivables or payables—using natural hedging, forward contracts, or currency options",
                    "Ignoring exchange rates completely",
                    "Refusing to invoice overseas customers",
                    "Keeping all cash in physical coins"
                ],
                "answer": 0,
                "explanation": "Forward contracts lock in a known future exchange rate, eliminating FX transaction uncertainty."
            },
            {
                "id": 5020,
                "q": "What is 'syndicated loan' finance?",
                "options": [
                    "A very large loan provided jointly by a group (syndicate) of banks under a single loan agreement managed by a lead arranger bank to spread credit risk",
                    "A small personal credit card balance",
                    "A trade union membership fee",
                    "An equity crowdfunding campaign"
                ],
                "answer": 0,
                "explanation": "Syndicated loans enable corporate borrowers to raise massive debt sums beyond any single bank's lending limit."
            },
            {
                "id": 5021,
                "q": "What is 'zero-based budgeting (ZBB)' compared to 'incremental budgeting'?",
                "options": [
                    "ZBB requires every budget line to be justified from scratch ('zero base') each period based on cost-benefit rather than simply adding a percentage onto last year's budget",
                    "ZBB sets every department's budget to zero money so nobody can work",
                    "Incremental budgeting rebuilds every cost from zero every month",
                    "Both methods are identical"
                ],
                "answer": 0,
                "explanation": "ZBB eliminates historical budget slack and inefficiencies, though it is more time-consuming than incremental budgeting."
            },
            {
                "id": 5022,
                "q": "What is 'social capital' / 'relationship capital' in multi-capital business reporting?",
                "options": [
                    "The institutions and relationships within and between communities, stakeholder groups, networks, brand trust, and social license to operate",
                    "Factory machinery and buildings",
                    "Cash held in short-term Treasury bills",
                    "Raw material inventory"
                ],
                "answer": 0,
                "explanation": "Strong stakeholder trust and social license support long-term value creation."
            },
            {
                "id": 5023,
                "q": "What is the role of 'internal financial controls' over financial reporting?",
                "options": [
                    "Policies and procedures providing reasonable assurance regarding reliability of financial reporting, effectiveness/efficiency of operations, and compliance with applicable laws and regulations",
                    "Guaranteeing 100% stock market share price growth",
                    "Eliminating the need for external audits",
                    "Setting competitor selling prices"
                ],
                "answer": 0,
                "explanation": "Internal financial controls safeguard assets, ensure accurate records, and deter fraud."
            },
            {
                "id": 5024,
                "q": "Why is 'professional skepticism' and 'professional judgment' essential for accountants in business as well as auditors?",
                "options": [
                    "Accountants in business prepare estimates, evaluate business cases, and detect errors/fraud—requiring critical questioning of assumptions and unbiased judgment",
                    "Only external auditors ever exercise judgment",
                    "Accountants in business must blindly accept every aggressive sales forecast",
                    "Judgment is prohibited by IFRS"
                ],
                "answer": 0,
                "explanation": "Sound judgment and critical inquiry prevent earnings manipulation and flawed financial decisions."
            },
            {
                "id": 5025,
                "q": "Under the BSEC Corporate Governance Code 2018, what is required regarding 'related party transactions' of a listed company?",
                "options": [
                    "Full disclosure of all material related party transactions (including basis/arm's-length nature) in the financial statements and Directors' Report, with Audit Committee review",
                    "Keeping all related party transactions completely secret from shareholders",
                    "Banning all transactions with parent or subsidiary companies",
                    "Recording related party sales at zero value"
                ],
                "answer": 0,
                "explanation": "Transparent review and disclosure prevent value tunneling and hidden conflicts of interest."
            },
            {
                "id": 5026,
                "q": "What is the 'Directors' Report' required under the Companies Act 1994 and BSEC Corporate Governance Code 2018?",
                "options": [
                    "An annual report from the Board to shareholders covering industry outlook, segment performance, risks/concerns, internal control adequacy, going concern, board meeting attendance, shareholding pattern, and governance compliance",
                    "A confidential memo sent only to tax inspectors",
                    "A list of factory canteen menus",
                    "The external auditor's working paper index"
                ],
                "answer": 0,
                "explanation": "The Directors' Report provides narrative context, governance disclosures, and accountability to shareholders."
            },
            {
                "id": 5027,
                "q": "How does 'external audit' contribute to corporate governance?",
                "options": [
                    "By providing independent, objective assurance to shareholders that the directors' financial statements give a true and fair view, thereby reducing agency risk and enhancing market confidence",
                    "By taking over daily management of the company",
                    "By guaranteeing the company's share price will rise",
                    "By writing the company's marketing strategy"
                ],
                "answer": 0,
                "explanation": "External audit is a vital external governance check on directors' stewardship."
            },
            {
                "id": 5028,
                "q": "What is 'corporate governance risk oversight' by the Board?",
                "options": [
                    "Determining the company's risk appetite, ensuring a sound system of risk management and internal control is maintained, and reviewing its effectiveness at least annually",
                    "Eliminating all business risks so the company takes zero commercial initiatives",
                    "Delegating all board duties to an external PR firm",
                    "Ignoring cyber and financial risks"
                ],
                "answer": 0,
                "explanation": "Boards bear ultimate responsibility for risk governance and internal control effectiveness."
            },
            {
                "id": 5029,
                "q": "What is 'ethical relativism' versus 'ethical absolutism' in international business?",
                "options": [
                    "Ethical absolutism holds that universal moral principles apply everywhere regardless of culture; ethical relativism argues moral standards depend on local cultural norms (though international codes require baseline integrity and human rights everywhere)",
                    "Both mean breaking local laws",
                    "Ethical absolutism applies only to tax rates",
                    "Ethical relativism means accounting numbers are relative"
                ],
                "answer": 0,
                "explanation": "Global businesses navigate cultural differences while upholding core ethical principles against bribery, fraud, and exploitation."
            },
            {
                "id": 5030,
                "q": "Which threat arises when an accounting firm or accountant promotes a client's shares or represents a client in a legal dispute?",
                "options": [
                    "Advocacy threat",
                    "Familiarity threat",
                    "Self-review threat",
                    "Intimidation threat"
                ],
                "answer": 0,
                "explanation": "Acting as an advocate compromises impartial objectivity."
            },
            {
                "id": 5031,
                "q": "What is the strict ethical rule regarding 'insider dealing'?",
                "options": [
                    "A professional accountant must not deal in the shares of a company with which they have a professional association at a time or manner that uses (or appears to use) confidential information for personal or third-party advantage",
                    "Accountants may trade on confidential client merger news if they split profits with a friend",
                    "Insider dealing is legal once an audit finishes",
                    "Insider dealing applies only to government bonds"
                ],
                "answer": 0,
                "explanation": "Both actual insider trading and the appearance of misusing confidential information are prohibited."
            },
            {
                "id": 5032,
                "q": "Which security measure prevents accidental disclosure of confidential client information?",
                "options": [
                    "Never discussing client affairs with friends/family or in public places, never leaving files unattended at client sites/cars/homes, and using encrypted/protected electronic systems",
                    "Leaving printed payroll schedules on a client conference table during lunch",
                    "Discussing client takeovers in crowded elevators",
                    "Emailing confidential files to personal unencrypted accounts"
                ],
                "answer": 0,
                "explanation": "Strict physical, digital, and conversational discipline prevents accidental breaches."
            },
            {
                "id": 5033,
                "q": "What is the key 'observer test' when evaluating a conflict of interest?",
                "options": [
                    "Whether a reasonable and informed observer would perceive that the objectivity of the member or firm is likely to be impaired",
                    "Whether the client is willing to pay double fees",
                    "Whether the engagement partner thinks nobody will find out",
                    "Whether the two clients are in different cities"
                ],
                "answer": 0,
                "explanation": "Objectivity must be satisfied from the standpoint of a reasonable and informed third-party observer."
            },
            {
                "id": 5034,
                "q": "In macroeconomics, what is 'fiscal policy'?",
                "options": [
                    "Government decisions on public expenditure, taxation, and borrowing to influence aggregate demand, resource allocation, and income distribution",
                    "Central bank open market operations and interest rate decisions",
                    "Commercial banks setting credit card fees",
                    "Private companies setting product prices"
                ],
                "answer": 0,
                "explanation": "Fiscal policy uses the national budget (taxation and government spending) to manage economic activity."
            },
            {
                "id": 5035,
                "q": "What is 'structural unemployment'?",
                "options": [
                    "Long-term unemployment caused by fundamental shifts in the economy—such as technological automation, decline of traditional industries, or geographical/skills mismatches between workers and available jobs",
                    "Brief unemployment while a worker moves between two similar jobs (frictional unemployment)",
                    "Seasonal unemployment in tourism or agriculture",
                    "Voluntary retirement"
                ],
                "answer": 0,
                "explanation": "Structural unemployment requires retraining, education, and labor mobility policies."
            },
            {
                "id": 5036,
                "q": "What is 'monopolistic competition'?",
                "options": [
                    "A market structure with many buyers and sellers, low barriers to entry, and differentiated products (via branding, quality, or location), giving firms limited short-run price-setting power",
                    "A market with only one state-owned supplier",
                    "A market with identical homogeneous commodities and zero branding",
                    "A cartel of two oil producers"
                ],
                "answer": 0,
                "explanation": "Restaurants, clothing brands, and salons exemplify monopolistic competition."
            },
            {
                "id": 5037,
                "q": "What is 'price discrimination' by a firm with market power?",
                "options": [
                    "Charging different prices to different customer segments for the same good/service (where cost differences do not explain the price gap)—requiring market power, separable segments with different elasticities, and prevention of resale",
                    "Charging every customer the exact same price",
                    "Refusing to sell goods to anyone",
                    "Selling defective goods at full price"
                ],
                "answer": 0,
                "explanation": "Airlines, cinemas (student discounts), and peak/off-peak utilities use price discrimination to capture consumer surplus."
            },
            {
                "id": 5038,
                "q": "What is a 'Pigouvian tax' (such as a carbon tax or pollution levy)?",
                "options": [
                    "A tax levied on market activities generating negative externalities equal to the external marginal damage, internalizing the social cost into private decision-making",
                    "A tax cut given to heavy polluters",
                    "An import tariff on medical equipment",
                    "A personal wealth tax"
                ],
                "answer": 0,
                "explanation": "Carbon taxes incentivize firms to reduce emissions efficiently."
            },
            {
                "id": 5039,
                "q": "What is 'anti-money laundering (AML) and counter-terrorist financing (CTF)' regulation?",
                "options": [
                    "Statutory laws requiring financial institutions, accountants, and designated businesses to conduct customer due diligence (KYC), monitor suspicious transactions, keep records, and report suspicions to Financial Intelligence Units (e.g., BFIU in Bangladesh)",
                    "Laws encouraging anonymous cash transfers without ID",
                    "Tax exemptions for offshore shell companies",
                    "Regulations setting retail interest rates"
                ],
                "answer": 0,
                "explanation": "AML/CTF regulations protect financial system integrity and compel suspicious transaction reporting."
            },
            {
                "id": 5040,
                "q": "What is 'dumping' in international trade?",
                "options": [
                    "Exporting a product to a foreign market at a price below its domestic home-market price or below cost of production—often triggering anti-dumping tariffs under WTO rules",
                    "Disposing of factory garbage in a landfill",
                    "Exporting high-end luxury watches at premium prices",
                    "Selling shares on a domestic stock exchange"
                ],
                "answer": 0,
                "explanation": "Anti-dumping duties protect domestic industries from predatory or subsidized below-cost import pricing."
            },
            {
                "id": 5041,
                "q": "What is 'data governance' in a modern organisation?",
                "options": [
                    "The overall framework of policies, roles, standards, and controls ensuring data availability, usability, integrity, quality, privacy, and security across the enterprise",
                    "Deleting all company emails every Friday",
                    "Allowing every employee to edit master customer prices freely",
                    "Printing all spreadsheets on paper"
                ],
                "answer": 0,
                "explanation": "Strong data governance underpins reliable analytics, AI, and regulatory compliance."
            },
            {
                "id": 5042,
                "q": "What is 'sentiment analysis' in big data analytics?",
                "options": [
                    "Using Natural Language Processing (NLP) and text analytics to classify opinions and emotions (positive, neutral, negative) expressed in customer reviews, social media, or survey comments",
                    "Calculating weighted average cost of capital",
                    "Reconciling bank statements",
                    "Counting physical warehouse stock"
                ],
                "answer": 0,
                "explanation": "Sentiment analysis extracts brand perception and customer feedback insights from unstructured text."
            },
            {
                "id": 5043,
                "q": "In a spreadsheet, what is the purpose of 'Data Validation' rules on input cells?",
                "options": [
                    "Restricting the type or range of data users can enter into a cell (such as dropdown lists, valid date ranges, or positive numbers) to prevent input errors at source",
                    "Automatically auditing the company's tax return",
                    "Formatting charts in corporate colors",
                    "Encrypting the entire hard drive"
                ],
                "answer": 0,
                "explanation": "Spreadsheet data validation enforces input hygiene and reduces user typing mistakes."
            },
            {
                "id": 5044,
                "q": "What is a 'dashboard' in business intelligence (BI) reporting?",
                "options": [
                    "An interactive visual interface displaying real-time Key Performance Indicators (KPIs), charts, and drill-down metrics on a single screen for rapid management monitoring",
                    "The front bumper of a delivery truck",
                    "A 500-page printed ledger book",
                    "A manual typewriter"
                ],
                "answer": 0,
                "explanation": "BI dashboards synthesize operational and financial KPIs into clear, actionable visual summaries."
            },
            {
                "id": 5045,
                "q": "What is 'Open Banking' in the digital finance ecosystem?",
                "options": [
                    "A framework enabling customers to securely share their banking data and initiate payments via third-party FinTech providers using standardized Application Programming Interfaces (APIs) with explicit customer consent",
                    "Leaving bank vault doors unlocked overnight",
                    "Publishing every customer's bank balance in the newspaper",
                    "Eliminating all banking licenses"
                ],
                "answer": 0,
                "explanation": "API-driven Open Banking fosters competition, automated accounting bank feeds, and innovative financial services."
            },
            {
                "id": 5046,
                "q": "What is 'tokenization' in digital payments and cybersecurity?",
                "options": [
                    "Replacing sensitive data (such as a 16-digit payment card number) with a unique, non-sensitive cryptographic surrogate identifier ('token') that has no exploitable value if intercepted",
                    "Issuing paper lunch vouchers to staff",
                    "Writing passwords in a shared Excel sheet",
                    "Deleting transaction logs"
                ],
                "answer": 0,
                "explanation": "Tokenization protects payment credentials in mobile wallets and e-commerce platforms."
            },
            {
                "id": 5047,
                "q": "What is 'Continuous Auditing / Continuous Monitoring' enabled by modern technology?",
                "options": [
                    "Automated software routines running continuously or frequently against live ERP data to flag control breaches, duplicate payments, or anomalous transactions in near real-time rather than once a year",
                    "Auditing only once every 10 years",
                    "Hiring auditors to work 24 hours without sleep",
                    "Eliminating all internal controls"
                ],
                "answer": 0,
                "explanation": "Continuous monitoring shifts assurance from backward-looking annual sampling toward real-time exception detection."
            },
            {
                "id": 5048,
                "q": "What is 'Business Email Compromise (BEC)' (also known as CEO fraud)?",
                "options": [
                    "A targeted cyberattack where fraudsters compromise or spoof an executive's or supplier's email account to trick finance staff into wiring urgent funds or changing supplier bank details",
                    "Sending a company newsletter to subscribers",
                    "Upgrading corporate email storage limits",
                    "Backing up emails to an archive server"
                ],
                "answer": 0,
                "explanation": "BEC exploits authority and urgency; out-of-band phone verification and dual payment controls prevent losses."
            },
            {
                "id": 5049,
                "q": "Why is 'patch management' a fundamental cyber hygiene control?",
                "options": [
                    "Regularly applying vendor security updates fixes known software vulnerabilities before attackers can exploit them",
                    "Patch management repairs torn office carpets",
                    "Patch management replaces user passwords",
                    "Patch management is unnecessary if a company uses cloud software"
                ],
                "answer": 0,
                "explanation": "Unpatched systems are one of the most common entry points for ransomware and data breaches."
            },
            {
                "id": 5050,
                "q": "What is 'data sovereignty / cross-border data residency' risk when adopting global cloud services?",
                "options": [
                    "Legal and regulatory restrictions governing where sensitive personal or financial data may be stored or processed geographically, requiring compliance with local data protection and central bank rules",
                    "Cloud servers floating in the sky above international waters",
                    "Complete exemption from all local laws",
                    "Automatic translation of all reports into Latin"
                ],
                "answer": 0,
                "explanation": "Organisations using cloud infrastructure must verify data center locations, contractual safeguards, and regulatory compliance."
            }
        ]
    }
];

if (typeof window !== 'undefined') {
    window.btfMockTests = btfMockTests;
}

