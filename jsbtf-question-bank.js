// js/btf-question-bank.js
// Business, Technology and Finance (BTF) Question Bank (100 Complete MCQs)

const btfQuestions = [
  // --- SECTION 1: BUSINESS & ORGANIZATIONAL GOALS (Q1 - Q25) ---
  {
    id: 1,
    chapter: "Business & Organizational Goals",
    question: "Which of the following best defines a primary objective of a commercial business organization?",
    options: ["Maximizing customer satisfaction only", "Maximizing shareholder wealth over the long term", "Providing free public services", "Minimizing tax payments legally"],
    correctAnswer: 1,
    explanation: "Commercial organizations primarily exist to maximize long-term shareholder wealth through profitable operations."
  },
  {
    id: 2,
    chapter: "Business & Organizational Goals",
    question: "What is the primary difference between a mission statement and a vision statement?",
    options: ["A mission describes the future; a vision describes past history", "A mission defines present purpose; a vision defines future aspirations", "A mission is for customers; a vision is for tax authorities", "A mission is financial; a vision is non-financial"],
    correctAnswer: 1,
    explanation: "A mission statement states why an organization currently exists, while a vision statement outlines what it aspires to become."
  },
  {
    id: 3,
    chapter: "Business & Organizational Goals",
    question: "Which stakeholder group is classified as an internal stakeholder in a corporate business?",
    options: ["Trade suppliers", "Commercial banks", "Executive directors and employees", "Local tax authorities"],
    correctAnswer: 2,
    explanation: "Executive directors and employees are internal stakeholders because they operate within the organization."
  },
  {
    id: 4,
    chapter: "Business & Organizational Goals",
    question: "According to Mendelow's Matrix, how should management handle stakeholders with High Power and High Interest?",
    options: ["Keep informed", "Keep satisfied", "Key players (Manage closely)", "Minimal effort"],
    correctAnswer: 2,
    explanation: "Stakeholders with high power and high interest are key players and must be managed closely."
  },
  {
    id: 5,
    chapter: "Business & Organizational Goals",
    question: "In Mendelow's Matrix, how should stakeholders with High Power but Low Interest be managed?",
    options: ["Keep satisfied", "Key players", "Minimal effort", "Keep informed"],
    correctAnswer: 0,
    explanation: "High power but low interest stakeholders must be kept satisfied to prevent them from becoming active opponents."
  },
  {
    id: 6,
    chapter: "Business Environment",
    question: "In PESTEL analysis, interest rates, inflation, and exchange rate fluctuations fall under which category?",
    options: ["Political", "Economic", "Social", "Technological"],
    correctAnswer: 1,
    explanation: "Interest rates, inflation, and exchange rates represent economic factors impacting business operations."
  },
  {
    id: 7,
    chapter: "Business Environment",
    question: "Which element of Porter's Five Forces framework measures how easy it is for new market entrants to compete?",
    options: ["Bargaining power of buyers", "Threat of substitute products", "Threat of new entrants", "Rivalry among existing competitors"],
    correctAnswer: 2,
    explanation: "Threat of new entrants measures entry barriers and ease of new competitors joining the industry."
  },
  {
    id: 8,
    chapter: "Business Environment",
    question: "Which type of product substitution occurs when a customer switches from buying physical textbooks to subscribing to digital e-learning platforms?",
    options: ["Direct brand substitution", "Generic product substitution", "Need-based substitution", "Upstream substitution"],
    correctAnswer: 2,
    explanation: "Need-based substitution satisfies the same underlying need (learning) using an entirely different medium."
  },
  {
    id: 9,
    chapter: "Business Strategy",
    question: "In Ansoff's Matrix, selling existing products into brand-new geographic markets is termed:",
    options: ["Market Penetration", "Market Development", "Product Development", "Diversification"],
    correctAnswer: 1,
    explanation: "Market Development involves selling existing products into new markets or segments."
  },
  {
    id: 10,
    chapter: "Business Strategy",
    question: "According to Porter's Generic Strategies, achieving lower operational costs than all industry competitors is called:",
    options: ["Cost Leadership", "Differentiation", "Focus Strategy", "Cost Focus"],
    correctAnswer: 0,
    explanation: "Cost Leadership aims to become the lowest-cost producer across the industry."
  },
  {
    id: 11,
    chapter: "Business Strategy",
    question: "In Ansoff's Matrix, introducing completely new products into entirely new markets is known as:",
    options: ["Market Penetration", "Market Development", "Product Development", "Diversification"],
    correctAnswer: 3,
    explanation: "Diversification involves launching new products into new markets, representing the highest risk."
  },
  {
    id: 12,
    chapter: "Business Strategy",
    question: "In the BCG Matrix, a business unit with high market share in a low-growth market is classified as a:",
    options: ["Star", "Cash Cow", "Question Mark", "Dog"],
    correctAnswer: 1,
    explanation: "Cash Cows generate strong cash flow in stable, low-growth markets."
  },
  {
    id: 13,
    chapter: "Business Strategy",
    question: "In the BCG Matrix, products with low market share in rapidly growing markets are called:",
    options: ["Stars", "Cash Cows", "Question Marks (Problem Children)", "Dogs"],
    correctAnswer: 2,
    explanation: "Question Marks require cash investment to capture market share in high-growth industries."
  },
  {
    id: 14,
    chapter: "Governance & Ethics",
    question: "Which corporate governance approach relies on strict, legally binding rules rather than principles?",
    options: ["Principles-based approach", "Rules-based approach (e.g., Sarbanes-Oxley)", "Comply-or-explain approach", "Voluntary disclosure model"],
    correctAnswer: 1,
    explanation: "A rules-based approach mandates compliance by statutory law."
  },
  {
    id: 15,
    chapter: "Governance & Ethics",
    question: "What is the primary role of a Non-Executive Director (NED) on a company board?",
    options: ["Managing daily factory operations", "Providing independent oversight and constructive challenge", "Signing routine purchase orders", "Preparing monthly payroll"],
    correctAnswer: 1,
    explanation: "NEDs provide independent scrutiny, advice, and oversight over executive management."
  },
  {
    id: 16,
    chapter: "Governance & Ethics",
    question: "Under the UK Corporate Governance Code, what proportion of the board (excluding the chairman) should consist of independent NEDs?",
    options: ["At least 25%", "At least 50%", "100%", "No specific requirement"],
    correctAnswer: 1,
    explanation: "At least half the board (excluding the chair) should be independent non-executive directors."
  },
  {
    id: 17,
    chapter: "Governance & Ethics",
    question: "Which ICAB fundamental ethical principle requires professional accountants to be straightforward and honest in professional dealings?",
    options: ["Integrity", "Objectivity", "Confidentiality", "Professional Behavior"],
    correctAnswer: 0,
    explanation: "Integrity imposes an obligation on all professional accountants to be straightforward and honest."
  },
  {
    id: 18,
    chapter: "Governance & Ethics",
    question: "Which threat to independence occurs when an auditor advocates a client's position in legal proceedings?",
    options: ["Self-review threat", "Advocacy threat", "Familiarity threat", "Intimidation threat"],
    correctAnswer: 1,
    explanation: "Advocacy threat occurs when an auditor promotes a client's stance to the point of compromising objectivity."
  },
  {
    id: 19,
    chapter: "Governance & Ethics",
    question: "If an auditor receives a large percentage of total fee income from a single client, which threat is created?",
    options: ["Self-interest threat", "Self-review threat", "Intimidation threat", "Advocacy threat"],
    correctAnswer: 0,
    explanation: "Financial dependency on a single client creates a self-interest threat due to fear of losing income."
  },
  {
    id: 20,
    chapter: "Organizational Structure",
    question: "Which organizational structure groups employees strictly by functional specialization (e.g., Marketing, Finance, HR)?",
    options: ["Functional structure", "Divisional structure", "Matrix structure", "Network structure"],
    correctAnswer: 0,
    explanation: "Functional structures group jobs based on specific business functions."
  },
  {
    id: 21,
    chapter: "Organizational Structure",
    question: "What is a major disadvantage of a pure matrix organizational structure?",
    options: ["Lack of specialized skills", "Dual chain of command leading to confusion and conflict", "Inability to work on projects", "Excessive centralization"],
    correctAnswer: 1,
    explanation: "Matrix structures create dual reporting lines (functional manager and project manager), leading to conflict."
  },
  {
    id: 22,
    chapter: "Organizational Structure",
    question: "What does the term 'span of control' refer to in management theory?",
    options: ["The geographic distance between branch offices", "The number of direct subordinates reporting to a single manager", "The total years a manager serves", "The budget allocated to a department"],
    correctAnswer: 1,
    explanation: "Span of control measures how many subordinates report directly to a supervisor."
  },
  {
    id: 23,
    chapter: "Organizational Structure",
    question: "A 'tall' organizational structure is characterized by:",
    options: ["Few hierarchical levels and wide spans of control", "Many hierarchical levels and narrow spans of control", "Decentralized decision-making", "No formal managers"],
    correctAnswer: 1,
    explanation: "Tall structures have many management tiers and narrow direct reporting lines."
  },
  {
    id: 24,
    chapter: "Organizational Structure",
    question: "Decentralization in an organization means that decision-making authority is:",
    options: ["Retained exclusively at head office", "Delegated down to lower levels of management", "Transferred entirely to external auditors", "Eliminated completely"],
    correctAnswer: 1,
    explanation: "Decentralization pushes operational decision authority down to local/divisional managers."
  },
  {
    id: 25,
    chapter: "Organizational Structure",
    question: "According to Mintzberg, which structural component consists of key operational employees producing core goods or services?",
    options: ["Strategic apex", "Middle line", "Operating core", "Technostructure"],
    correctAnswer: 2,
    explanation: "The operating core includes all operational staff performing basic production and service delivery work."
  },

  // --- SECTION 2: TECHNOLOGY & FINANCIAL SYSTEMS (Q26 - Q70) ---
  {
    id: 26,
    chapter: "Technology & Information Systems",
    question: "Which type of information system handles routine day-to-day transactions like sales billing and payroll processing?",
    options: ["Transaction Processing System (TPS)", "Management Information System (MIS)", "Executive Support System (ESS)", "Decision Support System (DSS)"],
    correctAnswer: 0,
    explanation: "TPS records and processes routine operational data transactions."
  },
  {
    id: 27,
    chapter: "Technology & Information Systems",
    question: "An Enterprise Resource Planning (ERP) system is best described as:",
    options: ["A stand-alone spreadsheet application", "An integrated database software unifying functional area operations across a company", "A hardware firewall", "An email application"],
    correctAnswer: 1,
    explanation: "ERP integrates business processes across finance, HR, inventory, and sales using a single unified database."
  },
  {
    id: 28,
    chapter: "Technology & Information Systems",
    question: "In cloud computing, Software as a Service (SaaS) provides users with:",
    options: ["Raw physical server racks only", "Access to hosted software applications over the internet", "Development frameworks for coding", "Database schemas"],
    correctAnswer: 1,
    explanation: "SaaS delivers cloud-hosted software applications directly via a web browser."
  },
  {
    id: 29,
    chapter: "Technology & Information Systems",
    question: "What are the '3 Vs' commonly used to characterize Big Data?",
    options: ["Value, Validity, Veracity", "Volume, Velocity, Variety", "Vector, Vision, Version", "Variable, Virtual, Visual"],
    correctAnswer: 1,
    explanation: "Big Data is defined by high Volume, high Velocity, and high Variety."
  },
  {
    id: 30,
    chapter: "Technology & Information Systems",
    question: "Which cybersecurity control is an example of a physical access control?",
    options: ["Complex passwords", "Biometric door scanners at data centers", "Data encryption", "Firewall rules"],
    correctAnswer: 1,
    explanation: "Biometric door locks prevent unauthorized physical entry to data rooms."
  },
  {
    id: 31,
    chapter: "Technology & Information Systems",
    question: "What is the primary objective of data encryption?",
    options: ["Increasing network transmission speed", "Rendering data unreadable to unauthorized users without a decryption key", "Automatically deleting duplicate files", "Creating data backups"],
    correctAnswer: 1,
    explanation: "Encryption converts plain text into cipher text to prevent unauthorized reading."
  },
  {
    id: 32,
    chapter: "Technology & Information Systems",
    question: "Which technology uses a decentralized, immutable distributed ledger to record transactions securely?",
    options: ["Cloud storage", "Blockchain", "Relational Database", "Virtual Private Network"],
    correctAnswer: 1,
    explanation: "Blockchain relies on decentralized, cryptographic consensus ledgers that cannot be altered retroactively."
  },
  {
    id: 33,
    chapter: "Technology & Information Systems",
    question: "What is 'Phishing' in the context of IT security threats?",
    options: ["Physical theft of laptop computers", "Deceptive emails designed to trick recipients into revealing sensitive credentials", "Hardware power failures", "Overheating servers"],
    correctAnswer: 1,
    explanation: "Phishing uses fraudulent communication designed to manipulate individuals into disclosing sensitive data."
  },
  {
    id: 34,
    chapter: "Technology & Information Systems",
    question: "Which internal IT control ensures that changes to software code are authorized, tested, and documented before deployment?",
    options: ["Change management controls", "Input validation controls", "Physical locks", "Environmental controls"],
    correctAnswer: 0,
    explanation: "Change management controls ensure all system alterations are properly authorized and tested."
  },
  {
    id: 35,
    chapter: "Technology & Information Systems",
    question: "A Disaster Recovery Plan (DRP) primarily focuses on:",
    options: ["Setting product retail prices", "Restoring IT infrastructure and operations following a major disruption", "Evaluating employee performance", "Filing corporate tax returns"],
    correctAnswer: 1,
    explanation: "DRP outlines procedures to restore critical tech systems following emergency events."
  },
  {
    id: 36,
    chapter: "Technology & Information Systems",
    question: "Which type of artificial intelligence is trained to perform specific repetitive tasks by recognizing pattern data without human intervention?",
    options: ["Machine Learning", "Manual macro script", "General Human Intelligence", "Static database query"],
    correctAnswer: 0,
    explanation: "Machine learning algorithms learn patterns from data to perform specific automated tasks."
  },
  {
    id: 37,
    chapter: "Technology & Information Systems",
    question: "What is the main purpose of a firewall in network security?",
    options: ["Suppressing physical electrical fires", "Monitoring and filtering incoming and outgoing network traffic based on security rules", "Generating financial statements", "Speeding up internet browsing"],
    correctAnswer: 1,
    explanation: "Firewalls block unauthorized network traffic while permitting legitimate traffic."
  },
  {
    id: 38,
    chapter: "Technology & Information Systems",
    question: "In database management, what is a 'Primary Key'?",
    options: ["The password used to open the computer", "A unique identifier for each record in a database table", "The total sum of numerical columns", "A redundant data entry"],
    correctAnswer: 1,
    explanation: "A Primary Key uniquely identifies each row within a relational database table."
  },
  {
    id: 39,
    chapter: "Technology & Information Systems",
    question: "What does Fintech stand for in modern business finance?",
    options: ["Financial Technology", "Final Technical Review", "Financial Technician", "Federal Institute of Technology"],
    correctAnswer: 0,
    explanation: "Fintech refers to financial technology solutions used to deliver automated financial services."
  },
  {
    id: 40,
    chapter: "Technology & Information Systems",
    question: "Which system provides senior executives with easy access to internal and external summary metrics via visual dashboards?",
    options: ["Transaction Processing System", "Executive Information System (EIS)", "Batch Processing System", "File Transfer Protocol"],
    correctAnswer: 1,
    explanation: "EIS offers senior leaders high-level summary dashboards and drill-down analytical metrics."
  },
  {
    id: 41,
    chapter: "Financial Management",
    question: "What is the key goal of working capital management?",
    options: ["Maximizing non-current assets", "Balancing liquidity and profitability to maintain operational continuity", "Eliminating all current liabilities completely", "Investing exclusively in equity markets"],
    correctAnswer: 1,
    explanation: "Working capital management ensures a firm maintains sufficient liquidity for operational needs while optimizing profitability."
  },
  {
    id: 42,
    chapter: "Financial Management",
    question: "The formula for Net Working Capital is:",
    options: ["Current Assets + Current Liabilities", "Current Assets - Current Liabilities", "Total Assets - Total Liabilities", "Non-Current Assets - Non-Current Liabilities"],
    correctAnswer: 1,
    explanation: "Net Working Capital = Current Assets minus Current Liabilities."
  },
  {
    id: 43,
    chapter: "Financial Management",
    question: "The Quick Ratio (Acid Test) differs from the Current Ratio by excluding which asset from current assets?",
    options: ["Trade Receivables", "Cash at Bank", "Inventory", "Short-term deposits"],
    correctAnswer: 2,
    explanation: "Inventory is excluded in the Quick Ratio because it is less liquid than cash and receivables."
  },
  {
    id: 44,
    chapter: "Financial Management",
    question: "Which financial decision metric measures the present value of future cash inflows minus initial cash outlay?",
    options: ["Payback Period", "Net Present Value (NPV)", "Accounting Rate of Return (ARR)", "Internal Rate of Return (IRR)"],
    correctAnswer: 1,
    explanation: "NPV calculates the net present value of cash flows discounted at a required hurdle rate."
  },
  {
    id: 45,
    chapter: "Financial Management",
    question: "If a project has a Net Present Value (NPV) greater than zero at the company's cost of capital, management should:",
    options: ["Reject the project", "Accept the project", "Delay decision indefinitely", "Sell company shares"],
    correctAnswer: 1,
    explanation: "Projects with positive NPV add value to shareholder wealth and should be accepted."
  },
  {
    id: 46,
    chapter: "Financial Management",
    question: "What is the Internal Rate of Return (IRR)?",
    options: ["The interest rate charged by central banks", "The discount rate at which a project's Net Present Value (NPV) equals zero", "The annual growth rate of net profit", "The inflation rate in the economy"],
    correctAnswer: 1,
    explanation: "IRR is the exact discount rate that yields an NPV of zero."
  },
  {
    id: 47,
    chapter: "Financial Management",
    question: "Which source of finance is classified as long-term debt financing?",
    options: ["Bank overdraft", "Trade credit", "Debentures / Corporate Bonds", "Factoring"],
    correctAnswer: 2,
    explanation: "Debentures and corporate bonds are long-term debt instruments."
  },
  {
    id: 48,
    chapter: "Financial Management",
    question: "What is a major advantage of debt financing compared to equity financing for a profitable company?",
    options: ["Debt never has to be repaid", "Interest payments are tax-deductible expenses", "Debt does not require interest payments", "Debtholders gain voting control"],
    correctAnswer: 1,
    explanation: "Interest payments reduce taxable income, providing a tax shield advantage over equity dividends."
  },
  {
    id: 49,
    chapter: "Financial Management",
    question: "Financial Gearing (Leverage) measures the proportion of:",
    options: ["Current assets to current liabilities", "Long-term debt relative to equity capital", "Inventory to total sales", "Tax expense to gross profit"],
    correctAnswer: 1,
    explanation: "Financial gearing reflects the proportion of debt capital relative to equity financing."
  },
  {
    id: 50,
    chapter: "Financial Management",
    question: "Which financial market allows companies to raise fresh capital by issuing new shares to investors for the first time?",
    options: ["Primary Market", "Secondary Market", "Money Market", "Derivatives Market"],
    correctAnswer: 0,
    explanation: "Primary markets handle initial equity issues (IPOs) and original security sales."
  },
  {
    id: 51,
    chapter: "Financial Markets",
    question: "The Secondary Market (e.g., Dhaka Stock Exchange) is responsible for:",
    options: ["Issuing new stock directly from companies to public", "Trading existing securities among investors", "Fixing interest rates", "Collecting corporate income tax"],
    correctAnswer: 1,
    explanation: "Secondary markets provide liquidity by allowing investors to trade existing shares with one another."
  },
  {
    id: 52,
    chapter: "Financial Markets",
    question: "Which short-term money market instrument is issued by commercial banks as an interest-bearing deposit document?",
    options: ["Certificate of Deposit (CD)", "Ordinary Share", "Treasury Bond (10-year)", "Debenture"],
    correctAnswer: 0,
    explanation: "Certificates of Deposit are money market negotiable time deposits issued by banks."
  },
  {
    id: 53,
    chapter: "Financial Markets",
    question: "What function does the Central Bank (e.g., Bangladesh Bank) perform?",
    options: ["Auditing private business websites", "Acting as lender of last resort and formulating monetary policy", "Selling retail insurance directly to households", "Manufacturing consumer goods"],
    correctAnswer: 1,
    explanation: "Central banks oversee monetary policy, manage currency, and serve as lender of last resort."
  },
  {
    id: 54,
    chapter: "Financial Markets",
    question: "Which financial ratio measures a company's capability to cover its interest obligations from operating profits?",
    options: ["Interest Coverage Ratio", "Current Ratio", "Asset Turnover Ratio", "Return on Equity"],
    correctAnswer: 0,
    explanation: "Interest Coverage Ratio = Operating Profit (EBIT) divided by Interest Expense."
  },
  {
    id: 55,
    chapter: "Financial Markets",
    question: "Dividend payout ratio represents:",
    options: ["Total dividends paid divided by net profit after tax", "Total cash divided by total sales", "Total debt divided by total equity", "Gross profit divided by interest"],
    correctAnswer: 0,
    explanation: "Dividend payout ratio measures what percentage of net earnings is distributed as dividends."
  },
  {
    id: 56,
    chapter: "Economic Context",
    question: "In economics, microeconomics focuses on:",
    options: ["National income and aggregate GDP growth", "Individual economic units, households, and specific firm choices", "Worldwide trade deficits", "Global exchange rates"],
    correctAnswer: 1,
    explanation: "Microeconomics analyzes decisions made by individual consumers, households, and business firms."
  },
  {
    id: 57,
    chapter: "Economic Context",
    question: "According to the Law of Demand, assuming all other variables remain constant, when price increases:",
    options: ["Quantity demanded increases", "Quantity demanded decreases", "Demand curve shifts right", "Supply curve collapses"],
    correctAnswer: 1,
    explanation: "The law of demand states that price and quantity demanded move in opposite directions."
  },
  {
    id: 58,
    chapter: "Economic Context",
    question: "A product with price elasticity of demand greater than 1 (in absolute terms) is considered:",
    options: ["Inelastic", "Elastic", "Unitary elastic", "Perfectly inelastic"],
    correctAnswer: 1,
    explanation: "Elastic demand means quantity demanded changes by a larger percentage than the percentage change in price."
  },
  {
    id: 59,
    chapter: "Economic Context",
    question: "Fiscal policy refers to government economic policy managed through:",
    options: ["Interest rate modifications by the central bank", "Government taxation and public expenditure decisions", "Currency devaluations", "Commercial bank reserve ratios"],
    correctAnswer: 1,
    explanation: "Fiscal policy uses government spending and taxation to influence aggregate demand."
  },
  {
    id: 60,
    chapter: "Economic Context",
    question: "Monetary policy tools managed by a central bank include:",
    options: ["Income tax rates and VAT rate changes", "Open market operations, reserve requirements, and policy interest rates", "Customs duties on imports", "Public sector wage increases"],
    correctAnswer: 1,
    explanation: "Central banks control money supply and credit through interest rates and open market operations."
  },
  {
    id: 61,
    chapter: "Economic Context",
    question: "What economic condition is characterized by stagnant economic growth combined with high inflation?",
    options: ["Hyperinflation", "Stagflation", "Deflation", "Boom period"],
    correctAnswer: 1,
    explanation: "Stagflation describes a period of stagnant economic output coupled with rising price inflation."
  },
  {
    id: 62,
    chapter: "Economic Context",
    question: "The Business Cycle stages occur in which standard order?",
    options: ["Expansion, Peak, Contraction (Recession), Trough", "Trough, Peak, Recession, Boom", "Recession, Expansion, Peak, Contraction", "Peak, Trough, Expansion, Boom"],
    correctAnswer: 0,
    explanation: "Economic growth moves from Expansion to a Peak, followed by Contraction/Recession down to a Trough."
  },
  {
    id: 63,
    chapter: "Economic Context",
    question: "What happens during cost-push inflation?",
    options: ["Excess consumer demand pulls prices up", "Rising production costs (e.g., raw materials, energy, wages) push prices higher", "Government reduces all taxes", "Central bank raises reserve limits"],
    correctAnswer: 1,
    explanation: "Cost-push inflation occurs when input costs rise, forcing firms to increase final consumer prices."
  },
  {
    id: 64,
    chapter: "Economic Context",
    question: "An exchange rate depreciation makes a country's exports:",
    options: ["More expensive for foreign buyers", "Cheaper and more competitive for foreign buyers", "Completely unpayable", "Unaffected"],
    correctAnswer: 1,
    explanation: "Currency depreciation lowers export prices in foreign currency terms, boosting export competitiveness."
  },
  {
    id: 65,
    chapter: "Economic Context",
    question: "Which market structure is dominated by a small number of large mutually interdependent firms?",
    options: ["Perfect Competition", "Monopoly", "Oligopoly", "Monopolistic Competition"],
    correctAnswer: 2,
    explanation: "An oligopoly features a few major sellers whose strategic pricing decisions impact one another."
  },
  {
    id: 66,
    chapter: "Risk & Operations",
    question: "What is operational risk?",
    options: ["Risk of share price decline", "Risk of loss resulting from inadequate or failed internal processes, people, systems, or external events", "Risk of default on sovereign bonds", "Risk of foreign currency fluctuations"],
    correctAnswer: 1,
    explanation: "Operational risk covers operational failures in internal procedures, human error, IT breakdowns, or physical disruptions."
  },
  {
    id: 67,
    chapter: "Risk & Operations",
    question: "Which risk management response involves purchasing insurance to cover potential asset losses?",
    options: ["Risk Avoidance", "Risk Reduction", "Risk Transfer", "Risk Acceptance"],
    correctAnswer: 2,
    explanation: "Buying insurance transfers financial loss consequences to an external third party (insurer)."
  },
  {
    id: 68,
    chapter: "Risk & Operations",
    question: "What does TQM stand for in operations management?",
    options: ["Total Quantity Management", "Total Quality Management", "Technical Quality Model", "Total Quota Control"],
    correctAnswer: 1,
    explanation: "TQM is an organization-wide management approach focused on continuous quality improvement."
  },
  {
    id: 69,
    chapter: "Risk & Operations",
    question: "Just-In-Time (JIT) inventory management aims to:",
    options: ["Maintain maximum safety inventory stock", "Minimize inventory holding costs by receiving materials only as needed for production", "Order materials once per calendar year", "Store raw materials in external warehouses"],
    correctAnswer: 1,
    explanation: "JIT reduces holding costs and waste by matching material deliveries directly to production schedules."
  },
  {
    id: 70,
    chapter: "Risk & Operations",
    question: "In project management, the 'Critical Path' represents:",
    options: ["The shortest path through project tasks", "The longest sequence of dependent activities that determines minimum total project duration", "The most expensive task sequence", "The path with the highest risks"],
    correctAnswer: 1,
    explanation: "The Critical Path determines the shortest possible timeframe to complete a project without delays."
  },

  // --- SECTION 3: MANAGEMENT, AUTHORITY & CULTURE (Q71 - Q100) ---
  {
    id: 71,
    chapter: "Management Theory",
    question: "According to Henri Fayol, what are the five core functions of management?",
    options: [
      "Planning, Organizing, Commanding, Coordinating, Controlling",
      "Hiring, Firing, Selling, Auditing, Budgeting",
      "Designing, Manufacturing, Marketing, Shipping, Billing",
      "Researching, Coding, Testing, Deploying, Maintaining"
    ],
    correctAnswer: 0,
    explanation: "Fayol identified management functions as Planning, Organizing, Commanding, Coordinating, and Controlling."
  },
  {
    id: 72,
    chapter: "Management Theory",
    question: "Frederick Taylor's Scientific Management principles primarily focus on:",
    options: ["Employee social welfare", "Optimizing task efficiency, standardization, and productivity metrics", "Flat organic structures", "Democratic consensus"],
    correctAnswer: 1,
    explanation: "Scientific Management emphasizes task analysis, motion study, standardization, and labor efficiency."
  },
  {
    id: 73,
    chapter: "Management Theory",
    question: "According to Douglas McGregor's Theory X assumption, managers believe employees:",
    options: ["Are self-motivated and enjoy responsibility", "Dislike work, avoid responsibility, and require strict supervision", "Seek continuous training", "Function best without managers"],
    correctAnswer: 1,
    explanation: "Theory X assumes workers are inherently lazy, dislike work, and must be coerced and controlled."
  },
  {
    id: 74,
    chapter: "Management Theory",
    question: "In Maslow's Hierarchy of Needs, which level of needs must be satisfied first?",
    options: ["Self-actualization", "Safety needs", "Physiological needs", "Esteem needs"],
    correctAnswer: 2,
    explanation: "Basic physiological needs (food, water, shelter) form the fundamental base of Maslow's pyramid."
  },
  {
    id: 75,
    chapter: "Management Theory",
    question: "Herzberg's Two-Factor Theory categorizes salary, working conditions, and company policy as:",
    options: ["Motivators", "Hygiene factors", "Self-actualizers", "Performance drivers"],
    correctAnswer: 1,
    explanation: "Hygiene factors prevent job dissatisfaction but do not intrinsically motivate higher performance."
  },
  {
    id: 76,
    chapter: "Management Theory",
    question: "According to Herzberg, which of the following acts as a true intrinsic 'Motivator'?",
    options: ["Basic base salary", "Recognition and opportunity for personal growth", "Air-conditioned office space", "Company parking privileges"],
    correctAnswer: 1,
    explanation: "Recognition, challenging work, and personal advancement act as intrinsic motivators."
  },
  {
    id: 77,
    chapter: "Management Theory",
    question: "In Belbin's Team Roles framework, the 'Plant' role is characterized as:",
    options: ["Creative, imaginative, and a solver of difficult problems", "Disciplined and reliable executor", "Negotiator with outside vendors", "Strict organizer of timelines"],
    correctAnswer: 0,
    explanation: "The Plant is the creative innovator who generates original solutions to complex challenges."
  },
  {
    id: 78,
    chapter: "Management Theory",
    question: "According to Tuckman's model, what is the correct order of team development stages?",
    options: ["Forming, Storming, Norming, Performing, Adjourning", "Storming, Forming, Performing, Norming, Adjourning", "Performing, Norming, Storming, Forming", "Forming, Norming, Storming, Performing"],
    correctAnswer: 0,
    explanation: "Tuckman's sequence moves from Forming to Storming, Norming, Performing, and finally Adjourning."
  },
  {
    id: 79,
    chapter: "Management Theory",
    question: "In Blake and Mouton's Leadership Grid, a manager showing high concern for results and low concern for people exhibits:",
    options: ["Country Club management", "Team management", "Authority-Compliance (Produce or Perish) management", "Impoverished management"],
    correctAnswer: 2,
    explanation: "High task concern coupled with low people concern represents Authority-Compliance management."
  },
  {
    id: 80,
    chapter: "Management Theory",
    question: "A leader who delegates complete decision-making freedom to team members operates under which leadership style?",
    options: ["Autocratic", "Democratic / Consultative", "Laissez-faire", "Bureaucratic"],
    correctAnswer: 2,
    explanation: "Laissez-faire leadership grants full autonomy to subordinates with minimal managerial intervention."
  },
  {
    id: 81,
    chapter: "Organizational Culture",
    question: "According to Charles Handy, a 'Power Culture' is graphically represented by:",
    options: ["A spider's web with central control", "A strict organizational pyramid / building temple", "A project task matrix net", "A cluster of independent stars"],
    correctAnswer: 0,
    explanation: "Handy compares Power Culture to a web, where power radiates from a dominant central key figure."
  },
  {
    id: 82,
    chapter: "Organizational Culture",
    question: "In Charles Handy's cultural types, a 'Role Culture' relies primarily on:",
    options: ["Individual charisma", "Strict functional rules, procedures, and job descriptions", "Ad-hoc project teams", "Unstructured informal chats"],
    correctAnswer: 1,
    explanation: "Role culture relies on formal structures, defined functions, rules, and procedures (represented by a Greek Temple)."
  },
  {
    id: 83,
    chapter: "Organizational Culture",
    question: "Charles Handy's 'Task Culture' focuses on:",
    options: ["Strict administrative hierarchy", "Getting specific projects or tasks completed using team expertise", "Personal growth of individuals only", "Single founder dominance"],
    correctAnswer: 1,
    explanation: "Task culture brings together dynamic team resources to solve specific project objectives."
  },
  {
    id: 84,
    chapter: "Organizational Culture",
    question: "In Schein's Model of Organizational Culture, which level represents visible organizational structures and processes?",
    options: ["Artifacts", "Espoused values", "Basic underlying assumptions", "Unconscious beliefs"],
    correctAnswer: 0,
    explanation: "Artifacts are visible surface elements such as dress codes, office layout, and formal logos."
  },
  {
    id: 85,
    chapter: "Organizational Culture",
    question: "Schein defines 'Basic Underlying Assumptions' as:",
    options: ["Published mission statements on the company website", "Unconscious, taken-for-granted beliefs that guide behavior", "Annual report financial metrics", "Office furniture designs"],
    correctAnswer: 1,
    explanation: "Basic assumptions are deep-seated, unspoken, taken-for-granted beliefs embedded in organizational culture."
  },
  {
    id: 86,
    chapter: "Change Management",
    question: "In Kurt Lewin's Three-Stage Change Model, the first step involved in preparing an organization for change is:",
    options: ["Unfreezing", "Changing / Moving", "Refreezing", "Restructuring"],
    correctAnswer: 0,
    explanation: "Unfreezing breaks down old habits and mindset patterns to prepare people to accept change."
  },
  {
    id: 87,
    chapter: "Change Management",
    question: "What is the final stage of Kurt Lewin's change process aimed at stabilizing the new working habits?",
    options: ["Unfreezing", "Refreezing", "Auditing", "Coercing"],
    correctAnswer: 1,
    explanation: "Refreezing solidifies and embeds new operational norms into company culture."
  },
  {
    id: 88,
    chapter: "Change Management",
    question: "According to Kotter's 8-Step Change Model, what should management create first?",
    options: ["Empower broad-based action", "Establish a sense of urgency", "Generate short-term wins", "Anchor changes in culture"],
    correctAnswer: 1,
    explanation: "Establishing a compelling sense of urgency is Step 1 in Kotter's change framework."
  },
  {
    id: 89,
    chapter: "Management & Authority",
    question: "What is 'Legitimate Power' according to French and Raven's power sources?",
    options: ["Power derived from charismatic personality", "Power attached to a formal structural position or rank", "Power based on expert technical knowledge", "Power based on physical force"],
    correctAnswer: 1,
    explanation: "Legitimate power stems directly from an individual's formal position within organizational hierarchy."
  },
  {
    id: 90,
    chapter: "Management & Authority",
    question: "Expert Power is derived from:",
    options: ["Possessing specialized skills, high technical knowledge, or expertise", "Having authority to grant salary raises", "Having formal title of Director", "Threatening disciplinary actions"],
    correctAnswer: 0,
    explanation: "Expert power comes from recognized specialized knowledge and competence."
  },
  {
    id: 91,
    chapter: "Management & Authority",
    question: "Referent Power relies on:",
    options: ["Formal statutory rights", "Subordinates identifying with and admiring a leader's personality", "Financial bonus allocation", "Strict punishment policies"],
    correctAnswer: 1,
    explanation: "Referent power stems from interpersonal attraction, charisma, and respect."
  },
  {
    id: 92,
    chapter: "Management & Authority",
    question: "What is the key principle of Scalar Chain in classical management theory?",
    options: ["Responsibility should be completely avoided", "Clear unbroken line of authority from top leadership to front-line staff", "Workers select their own managers", "Financial reports must be issued monthly"],
    correctAnswer: 1,
    explanation: "The scalar chain defines the formal unbroken line of command from top management to lower ranks."
  },
  {
    id: 93,
    chapter: "Management & Authority",
    question: "Responsibility can be defined as:",
    options: ["The right to command others", "The obligation to perform assigned tasks and duties", "The ability to fire contractors", "The privilege of receiving dividends"],
    correctAnswer: 1,
    explanation: "Responsibility is the duty or obligation to carry out assigned work."
  },
  {
    id: 94,
    chapter: "Management & Authority",
    question: "Delegation involves transferring:",
    options: ["Ultimate accountability while keeping authority", "Authority to perform tasks down to a subordinate, while manager retains ultimate accountability", "Company ownership shares", "Tax liability to employees"],
    correctAnswer: 1,
    explanation: "Delegation transfers operational authority to a subordinate, though the manager remains accountable."
  },
  {
    id: 95,
    chapter: "Management & Authority",
    question: "Which type of control standard checks outputs AFTER an operational process is completed?",
    options: ["Feedforward control", "Concurrent (real-time) control", "Feedback control", "Preventive control"],
    correctAnswer: 2,
    explanation: "Feedback control evaluates performance metrics after an activity has taken place."
  },
  {
    id: 96,
    chapter: "Management, Authority & Culture",
    question: "Which scenario best demonstrates the difference between authority and accountability?",
    options: [
      "A manager has the right to approve a budget but must later explain the budget's results",
      "An employee has no duties but has accountability",
      "A shareholder has authority over every employee",
      "A customer has formal authority over the CEO"
    ],
    correctAnswer: 0,
    explanation: "Authority gives the right to make the decision; accountability requires the manager to answer for the outcome."
  },
  {
    id: 97,
    chapter: "Management, Authority & Culture",
    question: "A company has the following characteristics: strict procedures, formal documentation, stable operations, and emphasis on consistency. Which culture and management model are most closely aligned?",
    options: [
      "Open Systems Culture + Open Systems Model",
      "Human Relations Culture + Human Relations Model",
      "Internal Process Culture + Internal Process Model",
      "Rational Goal Culture + Human Relations Model"
    ],
    correctAnswer: 2,
    explanation: "Both emphasize internal stability, rules, procedures, and control."
  },
  {
    id: 98,
    chapter: "Management, Authority & Culture",
    question: "A company emphasizes aggressive sales targets, measurable productivity, competition, and performance bonuses. Which combination is most appropriate?",
    options: [
      "Rational Goal Culture + Rational Goal Model",
      "Human Relations Culture + Internal Process Model",
      "Open Systems Culture + Human Relations Model",
      "Internal Process Culture + Open Systems Model"
    ],
    correctAnswer: 0,
    explanation: "Targets, productivity, competition, and measurable results are characteristic of Rational Goal orientation."
  },
  {
    id: 99,
    chapter: "Management, Authority & Culture",
    question: "A technology company encourages employee participation, continuously adapts to market changes, and develops innovative products. Which two cultural orientations are most evident?",
    options: [
      "Internal Process and Rational Goal",
      "Human Relations and Open Systems",
      "Internal Process and Human Relations only",
      "Rational Goal and Internal Process only"
    ],
    correctAnswer: 1,
    explanation: "Employee participation reflects Human Relations, while adaptation and innovation reflect Open Systems."
  },
  {
    id: 100,
    chapter: "Management, Authority & Culture",
    question: "A company must balance four competing demands: achieving measurable results, maintaining internal control, developing employees, and adapting to environmental change. Which framework best helps management understand these competing demands?",
    options: [
      "Profit maximization theory",
      "Competing Values Framework",
      "Delegation theory",
      "Stakeholder ownership theory"
    ],
    correctAnswer: 1,
    explanation: "The Competing Values Framework brings together four management orientations: Rational Goal, Internal Process, Human Relations, and Open Systems, allowing managers to balance results, control, people, and adaptation."
  }
];

const btfChapter4Questions = [
  {
    id: 401,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In the home computer market, laptop computers are an example of a:",
    options: ["Product form", "Brand", "Product class", "Generic product"],
    correctAnswer: 0,
    explanation: "Computers are the general product class, while laptops are a specific product form within that class."
  },
  {
    id: 402,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Masum is undertaking an internal analysis of Rupsha Ltd. Which three analytical techniques will be useful?\n\n1. Value chain analysis\n2. Porter's Five Forces analysis\n3. The BCG Matrix\n4. PESTEL analysis\n5. Analysis of distinctive competencies\n6. Ansoff's Matrix",
    options: ["1, 2, and 4", "1, 3, and 5", "2, 4, and 6", "3, 5, and 6"],
    correctAnswer: 1,
    explanation: "Value chain analysis, the BCG Matrix, and analysis of distinctive competencies evaluate internal activities, products, and capabilities. Porter's Five Forces and PESTEL analyze the external environment."
  },
  {
    id: 403,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Salma identifies the aging of Bangladesh's population as a strategic issue in a PESTEL analysis. In which section should she record it?",
    options: ["P (Political)", "S (Social)", "T (Technological)", "L (Legal)"],
    correctAnswer: 1,
    explanation: "Demographics, population trends, and age distributions are Social factors in PESTEL."
  },
  {
    id: 404,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A Marketing Director is deciding whether to differentiate a product aimed at a small niche market. This is a decision about the company's:",
    options: ["Functional strategy", "Business strategy", "Corporate strategy", "Operational strategy"],
    correctAnswer: 1,
    explanation: "Business strategy concerns how a business unit or product competes in its specific market, including whether to pursue cost leadership or differentiation."
  },
  {
    id: 405,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Padma Ltd. is pleased that the threat of new entrants into its market is low. Which factor is most likely to have contributed to this?",
    options: ["Low initial capital cost required to enter", "A customer base consisting of a few large customers", "Significant economies of scale achieved by established firms", "The market is for simple services rather than manufacturing"],
    correctAnswer: 2,
    explanation: "Significant economies of scale create a barrier to entry because new firms may struggle to compete with the costs of established firms."
  },
  {
    id: 406,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A stakeholder can cause a temporary plant closure and regularly writes to the chairman. Which Mendelow's Matrix strategy should Padma Ltd. pursue?",
    options: ["Keep informed", "Keep satisfied", "Minimal effort", "Key player"],
    correctAnswer: 3,
    explanation: "A stakeholder with high power and high interest is a key player and should be actively managed."
  },
  {
    id: 407,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Padma Ltd. provides exclusive scuba-diving holidays for people over 60. Under Porter's generic strategies, this is:",
    options: ["Differentiation", "Cost leadership", "Cost focus", "Differentiation focus"],
    correctAnswer: 3,
    explanation: "A specialized offering for a narrow niche combines a focus strategy with differentiation."
  },
  {
    id: 408,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A product has low market share in a high-growth market in the BCG Matrix. Which strategy should be considered?",
    options: ["Either a hold or a divest strategy", "Either a hold or a harvest strategy", "Either a build or a harvest/divest strategy", "Strictly a hold strategy"],
    correctAnswer: 2,
    explanation: "A Question Mark may be built through investment to gain share, or harvested/divested if investment is not viable."
  },
  {
    id: 409,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Mango Ltd. adds tumble dryers to its washing-machine range for the same market. In Ansoff's Matrix, this is:",
    options: ["Market penetration", "Market development", "Product development", "Diversification"],
    correctAnswer: 2,
    explanation: "Product development means offering new products to existing markets."
  },
  {
    id: 410,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "According to Johnson, Scholes, and Whittington, which three criteria should be used to evaluate a strategic option?",
    options: ["Suitability, Feasibility, and Acceptability", "Cost of entry, Attractiveness, and Payoffs", "Strengths, Weaknesses, and Opportunities", "Efficiency, Effectiveness, and Economy"],
    correctAnswer: 0,
    explanation: "The three evaluation criteria are Suitability, Feasibility, and Acceptability."
  },
  {
    id: 411,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which statement about a product life cycle (PLC) diagram is true?",
    options: ["The diagram predicts exactly when the decline phase will start", "Sales growth always follows a product's introduction", "Profits are normally highest during the maturity phase", "The mature phase usually lasts exactly 10 years"],
    correctAnswer: 2,
    explanation: "Profits are normally highest during maturity, when sales are established and economies of scale can reduce costs."
  },
  {
    id: 412,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Millward Ltd. regularly matches competitors' price cuts and launches local leafleting campaigns in response. In Kotler's competitor reaction profiles, Millward Ltd. is:",
    options: ["Laid back", "A tiger", "Selective", "Stochastic"],
    correctAnswer: 1,
    explanation: "A tiger responds swiftly and aggressively to competitive moves."
  },
  {
    id: 413,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which three actions form part of a differentiation strategy for Manson Ltd.'s sliding-door product?\n\n1. Minimizing labor and overhead costs\n2. Improving product features and unique benefits\n3. Promoting the brand image\n4. Using higher-quality manufacturing materials\n5. Strictly undercutting competitor prices",
    options: ["1, 2, and 3", "2, 3, and 4", "3, 4, and 5", "1, 4, and 5"],
    correctAnswer: 1,
    explanation: "Differentiation uses unique features, brand image, and quality to create distinct value. Minimizing costs and undercutting prices are associated with cost leadership."
  },
  {
    id: 414,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Glenway Ltd. sells package holidays and Brantham Ltd. sells cars. Both compete for consumers' disposable income. They are:",
    options: ["Brand competitors", "Industry competitors", "Generic competitors", "Form competitors"],
    correctAnswer: 2,
    explanation: "Generic competitors offer different products or services that compete to satisfy a broad need or use of disposable income."
  },
  {
    id: 415,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A consultant is reviewing a salon chain's primary activities using Porter's Value Chain. Which three are primary activities?",
    options: ["Procurement, Infrastructure, and Inbound Logistics", "Inbound Logistics, Marketing and Sales, and Service", "Technology Development, HR Management, and Operations", "Infrastructure, Procurement, and Service"],
    correctAnswer: 1,
    explanation: "Inbound Logistics, Operations, Outbound Logistics, Marketing and Sales, and Service are primary activities. Procurement and Infrastructure are support activities."
  },
  {
    id: 416,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Why is the PESTEL framework useful in strategic planning?",
    options: ["It identifies a company's internal strengths and weaknesses", "It allows detailed analysis of competitive rivalry within a sector", "It is a comprehensive checklist for analyzing macro-environmental influences", "It categorizes stakeholders by power and interest"],
    correctAnswer: 2,
    explanation: "PESTEL provides a structured checklist for reviewing Political, Economic, Social, Technological, Ecological, and Legal influences in the macro-environment."
  },
  {
    id: 417,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "ABC Ltd. considers two strategies: (1) Offer its warehouse distribution capability as a service to rival supermarkets. (2) Train store staff to handle personal safety issues. Which statement is correct?",
    options: ["Strategy (1) is corporate strategy; Strategy (2) is not corporate strategy", "Neither strategy is corporate strategy", "Both strategies are corporate strategy", "Strategy (1) is not corporate strategy; Strategy (2) is corporate strategy"],
    correctAnswer: 0,
    explanation: "Offering distribution services to a new market changes corporate scope. Staff training is a functional or operational activity."
  },
  {
    id: 418,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In a Five Forces analysis, consider: (1) Removing subsidies for existing providers will increase rivalry. (2) Two major corporate customers merge, increasing supplier bargaining power. Which assessment is correct?",
    options: ["Statement (1) is accurate; Statement (2) is inaccurate", "Both statements are inaccurate", "Both statements are accurate", "Statement (1) is inaccurate; Statement (2) is accurate"],
    correctAnswer: 0,
    explanation: "Removing subsidies can increase rivalry. A merger of customers can strengthen buyer bargaining power, not supplier bargaining power."
  },
  {
    id: 419,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which of the following best defines a business strategy?",
    options: ["A short-term operational budget for departmental managers", "A long-term plan of action to achieve objectives and gain competitive advantage", "A set of legal regulations governing corporate conduct", "An annual financial statement showing profit and loss"],
    correctAnswer: 1,
    explanation: "Business strategy is a long-term course of action that allocates resources to achieve objectives and build competitive advantage."
  },
  {
    id: 420,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Corporate-level strategy is primarily concerned with:",
    options: ["Day-to-day factory scheduling", "How a single business unit competes in its market", "The overall scope and direction of the organization", "Promotional campaigns for individual products"],
    correctAnswer: 2,
    explanation: "Corporate strategy sets the organization's overall scope and direction, including the allocation of resources across the entity."
  },
  {
    id: 421,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "The strategic business unit (SBU) level of strategy focuses on answering which question?",
    options: ["What business domains or industries should the whole group enter?", "How do we compete successfully in a specific market?", "How many employees should be recruited this week?", "What accounting software should the finance department purchase?"],
    correctAnswer: 1,
    explanation: "SBU strategy determines how the business competes and positions itself in a particular market."
  },
  {
    id: 422,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Functional (operational) strategy deals with:",
    options: ["Defining corporate mission and vision statements", "Carrying out departmental functions to support strategic direction", "Deciding whether to acquire overseas subsidiaries", "Analyzing macro-environmental PESTEL trends"],
    correctAnswer: 1,
    explanation: "Functional strategies guide areas such as marketing, HR, operations, and IT in supporting the wider strategic direction."
  },
  {
    id: 423,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "What is the correct sequence in the rational/formal strategic management process?",
    options: ["Strategic Choice → Review → Strategic Analysis → Implementation", "Strategic Analysis → Strategic Choice → Implementation → Review and Control", "Implementation → Strategic Analysis → Review → Strategic Choice", "Review → Implementation → Strategic Choice → Strategic Analysis"],
    correctAnswer: 1,
    explanation: "The formal process proceeds through Strategic Analysis, Strategic Choice, Implementation, and Review and Control."
  },
  {
    id: 424,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "How does an emergent strategy differ from a deliberate planned strategy?",
    options: ["It is rigidly planned years in advance", "It develops adaptively through experience, learning, and changing circumstances", "It is enforced strictly by legislation", "It ignores environmental changes"],
    correctAnswer: 1,
    explanation: "An emergent strategy develops over time as an organization learns and adapts to changing circumstances."
  },
  {
    id: 425,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "The Positioning-Based View (PBV) emphasizes that a firm's success depends primarily on:",
    options: ["Internal unique capabilities and core competencies", "External industry forces and market positioning", "Historical cost accounting techniques", "Employee seniority and internal hierarchy"],
    correctAnswer: 1,
    explanation: "The PBV takes an outside-in perspective, emphasizing industry structure and the firm's position in the market."
  },
  {
    id: 426,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "The Resource-Based View (RBV) asserts that competitive advantage originates from:",
    options: ["External PESTEL macro-factors", "Unique, valuable, and difficult-to-copy internal resources and capabilities", "Industry price wars", "High buyer bargaining power"],
    correctAnswer: 1,
    explanation: "The RBV takes an inside-out perspective and emphasizes valuable internal resources, capabilities, and competencies."
  },
  {
    id: 427,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which is a key advantage of formal strategic management?",
    options: ["Eliminating all business risks", "Ensuring a coherent response to environmental forces and optimal resource allocation", "Guaranteeing immediate short-term profitability", "Eliminating corporate bureaucracy"],
    correctAnswer: 1,
    explanation: "Formal strategic management can align the organization's response to its environment and support effective use of scarce resources."
  },
  {
    id: 428,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "What is a potential drawback of formal strategic planning?",
    options: ["Lack of clarity about corporate objectives", "A rigid bureaucratic straitjacket that stifles opportunism", "Reduced communication between business units", "Over-reliance on emergent feedback"],
    correctAnswer: 1,
    explanation: "If too rigid or bureaucratic, formal planning can discourage flexibility and prevent the organization from pursuing new opportunities."
  },
  {
    id: 429,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In PESTEL, government tax policy, trade tariffs, and political stability are categorized as:",
    options: ["Economic factors", "Political factors", "Social factors", "Ecological factors"],
    correctAnswer: 1,
    explanation: "Political factors include government stability, tax policies, trade legislation, and related government decisions."
  },
  {
    id: 430,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Inflation, interest rates, exchange rates, and GDP growth reflect which PESTEL dimension?",
    options: ["Technological", "Economic", "Legal", "Political"],
    correctAnswer: 1,
    explanation: "These are macroeconomic indicators and therefore belong to the Economic dimension."
  },
  {
    id: 431,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "An organization's task or competitive environment includes factors of direct relevance such as:",
    options: ["Macroeconomic interest-rate trends", "National demographic shifts", "Competitors, customers, suppliers, and substitutes", "Statutory employment laws"],
    correctAnswer: 2,
    explanation: "The task environment includes the competitors, customers, suppliers, and substitutes that directly interact with the organization."
  },
  {
    id: 432,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which of Porter's Five Forces assesses the risk that customers switch to alternative product types outside the industry?",
    options: ["Threat of new entrants", "Threat of substitute products", "Bargaining power of suppliers", "Competitive rivalry"],
    correctAnswer: 1,
    explanation: "The threat of substitutes concerns products or services from outside the industry that meet the same customer need."
  },
  {
    id: 433,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Supplier bargaining power is likely to be high when:",
    options: ["Many alternative suppliers are available", "The supplier group is concentrated and switching costs are high", "The buyer purchases in very large volumes", "Low-priced substitutes are readily available"],
    correctAnswer: 1,
    explanation: "Supplier power increases when there are few suppliers, high switching costs, or limited substitutes."
  },
  {
    id: 434,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Buyer bargaining power is heightened when:",
    options: ["Customers buy in small, isolated quantities", "The customer base consists of a few large-volume buyers", "Suppliers offer highly differentiated products", "Switching costs between suppliers are extremely high"],
    correctAnswer: 1,
    explanation: "A small number of customers buying large volumes can exert leverage over suppliers."
  },
  {
    id: 435,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In Porter's Value Chain, inbound logistics refers to:",
    options: ["Transforming inputs into finished products", "Receiving, storing, and handling material inputs internally", "Storing and distributing finished goods to customers", "After-sales service and customer support"],
    correctAnswer: 1,
    explanation: "Inbound logistics covers receiving, storing, warehousing, and controlling inventory of incoming materials."
  },
  {
    id: 436,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which of the following is a support activity in Porter's Value Chain?",
    options: ["Operations", "Outbound logistics", "Procurement", "Marketing and Sales"],
    correctAnswer: 2,
    explanation: "Procurement is a support activity, along with technology development, human resource management, and firm infrastructure."
  },
  {
    id: 437,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Supply Chain Management (SCM) focuses on:",
    options: ["Internal accounting audit trails only", "Optimizing activities across connected businesses to efficiently produce and deliver goods or services", "Setting board-level executive compensation", "Conducting PESTEL reviews"],
    correctAnswer: 1,
    explanation: "SCM coordinates processes across organizations, from sourcing inputs through delivery to end consumers."
  },
  {
    id: 438,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "During which Product Life Cycle stage are unit costs high and the product typically a loss-maker?",
    options: ["Growth", "Introduction", "Maturity", "Decline"],
    correctAnswer: 1,
    explanation: "During Introduction, sales volumes are low while development and launch costs are high, so the product may make a loss."
  },
  {
    id: 439,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A product has rapidly rising sales, falling unit costs, and is becoming profitable. Which Product Life Cycle stage is it in?",
    options: ["Introduction", "Growth", "Maturity", "Decline"],
    correctAnswer: 1,
    explanation: "Growth is characterized by increasing adoption, rising sales, economies of scale, and the development of profitability."
  },
  {
    id: 440,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In the BCG Matrix, a product with high market share in a low-growth market is a:",
    options: ["Star", "Question Mark", "Cash Cow", "Dog"],
    correctAnswer: 2,
    explanation: "Cash Cows have high relative market share in low-growth markets and can generate substantial cash."
  },
  {
    id: 441,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In the BCG Matrix, a product with low market share in a low-growth market is a:",
    options: ["Star", "Cash Cow", "Dog", "Question Mark"],
    correctAnswer: 2,
    explanation: "Dogs have low relative market share in low-growth markets and may generate little profit or cash."
  },
  {
    id: 442,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In SWOT analysis, which factors are internal to the firm?",
    options: ["Opportunities and Threats", "Strengths and Weaknesses", "Strengths and Threats", "Weaknesses and Opportunities"],
    correctAnswer: 1,
    explanation: "Strengths and Weaknesses are internal factors; Opportunities and Threats arise from the external environment."
  },
  {
    id: 443,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A Resource Audit evaluates:",
    options: ["Macro-environmental political trends", "How effectively and efficiently the entity's internal resources are used", "External competitor reaction profiles", "General customer satisfaction ratings"],
    correctAnswer: 1,
    explanation: "A Resource Audit examines an organization's internal resources and how well they are utilized."
  },
  {
    id: 444,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In stakeholder mapping, 'Power' is defined as:",
    options: ["The stakeholder's interest in company affairs", "The stakeholder's capacity to influence or dictate corporate objectives", "The number of shares owned by retail investors", "The legal liability of directors"],
    correctAnswer: 1,
    explanation: "Power is a stakeholder's ability to influence or compel the organization to change its objectives or actions."
  },
  {
    id: 445,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which is an internal source of stakeholder power?",
    options: ["External legal rights and legislation", "Position in the formal organizational hierarchy", "External supply-chain links", "Government regulatory oversight"],
    correctAnswer: 1,
    explanation: "An individual's formal position in the organizational hierarchy is an internal source of power."
  },
  {
    id: 446,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A corporate Mission Statement is best described as:",
    options: ["A detailed daily operational checklist", "A formal statement defining the business's fundamental purpose, scope, and values", "An annual tax return filed with the government", "A confidential document accessible only to board chairs"],
    correctAnswer: 1,
    explanation: "A Mission Statement articulates the organization's fundamental purpose, scope, values, and standards."
  },
  {
    id: 447,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Porter's Cost Leadership strategy aims to achieve competitive advantage by:",
    options: ["Offering unique, premium-priced custom features", "Becoming the industry's lowest-cost producer through scale and efficiency", "Targeting a tiny niche with high prices", "Relying exclusively on emotional branding"],
    correctAnswer: 1,
    explanation: "Cost Leadership seeks a lower cost base through efficiency, economies of scale, technology, and cost control."
  },
  {
    id: 448,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Porter's Differentiation strategy focuses on:",
    options: ["Minimizing research and development to undercut rivals", "Creating products perceived as unique across the industry to support premium pricing", "Serving one geographic market at cost price", "Standardizing products with minimal features"],
    correctAnswer: 1,
    explanation: "Differentiation provides distinctive value or features that customers recognize and may be willing to pay a premium for."
  },
  {
    id: 449,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In the Johnson and Scholes framework, evaluating Feasibility addresses:",
    options: ["Whether the strategy fits the external environment", "Whether the organization has the resources, skills, and funding to execute the strategy", "Whether shareholders will accept the financial return", "Whether the strategy complies with tax laws"],
    correctAnswer: 1,
    explanation: "Feasibility considers whether the organization has the practical resources and capabilities needed to implement the strategy."
  },
  {
    id: 450,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "An Operational Plan specifies:",
    options: ["Ten-year corporate growth directions", "Short-term functional expectations and specific day-to-day or weekly actions", "Group-level acquisition strategies", "Macro-environmental forecasting"],
    correctAnswer: 1,
    explanation: "Operational plans translate broader plans into specific short-term departmental targets, tasks, and budgets."
  }
];

const btfChapter6Questions = [
  {
    id: 601,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "ABC Ltd. operates from four locations and has a centralized finance function. In which activity is centralization least likely to be effective?",
    options: ["External reporting to shareholders", "Recording financial transactions", "Managing cash", "Internal reporting to operational managers"],
    correctAnswer: 3,
    explanation: "Internal reports for operational managers often need local knowledge and close interaction. Standardized transaction processing, cash management, and external reporting can be centralized more readily."
  },
  {
    id: 602,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Mohoshin ensures that ABC Ltd. has sufficient funds for both short-term and long-term financial requirements. Which section of the finance function is he working in?",
    options: ["Financial reporting", "Management accounting", "Treasury management", "Transaction processing"],
    correctAnswer: 2,
    explanation: "Treasury management oversees liquidity, cash, working capital, and the raising and management of finance."
  },
  {
    id: 603,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which three are characteristics of management accounting information rather than financial reporting information?\n\n1. It can be forward-looking as well as historical.\n2. It is governed by statute.\n3. It is primarily used by shareholders.\n4. It is likely to include a statement of cash flows.\n5. It is likely to include a cash flow forecast.\n6. It is likely to include budgetary information.",
    options: ["1, 2, and 3", "1, 5, and 6", "2, 4, and 5", "3, 4, and 6"],
    correctAnswer: 1,
    explanation: "Management accounting is prepared for internal use and can include forecasts and budgets. Statutory financial reports are primarily historical and prepared for external users."
  },
  {
    id: 604,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Haroon joins a project examining ABC Ltd.'s compliance with FRC and IASB standards. Which area of expertise is most relevant to his role?",
    options: ["Financial reporting", "Performance measurement", "Corporate governance", "Information systems"],
    correctAnswer: 0,
    explanation: "Compliance with accounting standards and financial reporting requirements is part of the financial reporting function."
  },
  {
    id: 605,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which user group is most likely to use published, audited financial statements to assess management stewardship and judge likely investment risks and returns?",
    options: ["Community representatives", "Employees", "Shareholders", "Managers"],
    correctAnswer: 2,
    explanation: "Shareholders use financial statements to assess how management has stewarded the business and to evaluate investment risk and return."
  },
  {
    id: 606,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Preparing financial statements in accordance with legal rules and accounting standards is which finance-function activity?",
    options: ["Record-keeping and stewardship", "Planning and control", "External reporting", "Internal reporting"],
    correctAnswer: 2,
    explanation: "External reporting produces financial statements for external users in accordance with applicable laws and accounting standards."
  },
  {
    id: 607,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "When establishing a system for producing management accounting reports, what should the finance director primarily consider?",
    options: ["The information needs of the company's managers", "The need for effective internal control mechanisms", "The need for cost-effectiveness", "The need for effective information security"],
    correctAnswer: 0,
    explanation: "Management accounting reports should be designed around the information managers need for internal planning, decisions, and control."
  },
  {
    id: 608,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Providing information to management on a company's balanced scorecard is part of its:",
    options: ["Statutory audit requirement", "Financial reporting function", "Treasury management process", "Performance measurement system"],
    correctAnswer: 3,
    explanation: "The balanced scorecard combines financial and non-financial measures as part of performance measurement."
  },
  {
    id: 609,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Match economy, efficiency, and effectiveness with the definitions:\n\n1. A reduction or containment of costs\n2. Achieving maximum output at minimum cost\n3. Achievement measured against objectives",
    options: ["1 = effectiveness; 2 = economy; 3 = efficiency", "1 = economy; 2 = efficiency; 3 = effectiveness", "1 = efficiency; 2 = effectiveness; 3 = economy", "1 = economy; 2 = effectiveness; 3 = efficiency"],
    correctAnswer: 1,
    explanation: "Economy concerns controlling input costs, efficiency concerns the relationship between outputs and resources used, and effectiveness concerns achieving objectives."
  },
  {
    id: 610,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which statement about critical success factors (CSFs) for a business is true?",
    options: ["Low costs and high sales revenue are always CSFs.", "Low costs are always a CSF, but high sales revenue is not always a CSF.", "Low costs are not always a CSF, but high sales revenue always is.", "Neither low costs nor high sales revenue is always a CSF."],
    correctAnswer: 3,
    explanation: "CSFs depend on a business's strategy and market. Low costs and high sales revenue are not universal requirements for every business model."
  },
  {
    id: 611,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Economy, one of the three basic approaches to performance measurement, is measured by:",
    options: ["The resources used for tasks that have been achieved", "Success in achieving goals and targets", "Team member satisfaction and motivation", "The success of a team in acquiring resources at the lowest cost"],
    correctAnswer: 3,
    explanation: "Economy concerns obtaining the required inputs and resources at the lowest appropriate cost."
  },
  {
    id: 612,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Consider two statements about users of financial statements:\n\n(1) Suppliers primarily focus on an entity's risk and return.\n(2) Shareholders primarily focus on an entity's solvency.",
    options: ["Statement (1) is true; Statement (2) is false", "Both statements are false", "Both statements are true", "Statement (1) is false; Statement (2) is true"],
    correctAnswer: 1,
    explanation: "Suppliers are particularly interested in liquidity and solvency, while shareholders focus more on investment risk and return."
  },
  {
    id: 613,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Tom manages the foreign-exchange requirements of Bateman Ltd., which trades internationally. Which finance-function section is he part of?",
    options: ["Financial reporting", "Management accounting", "Treasury management", "Financial transaction recording"],
    correctAnswer: 2,
    explanation: "Managing foreign-exchange exposure is a treasury management responsibility."
  },
  {
    id: 614,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Chinward Ltd. applies GRI sustainability standards. Consider these statements:\n\n(1) The environmental section should identify the total weight of wood used.\n(2) The social section should identify new workers by age, gender, and region.",
    options: ["Statement (1) is true; Statement (2) is false", "Both statements are false", "Both statements are true", "Statement (1) is false; Statement (2) is true"],
    correctAnswer: 2,
    explanation: "Material use is an environmental disclosure, while workforce demographics are social information."
  },
  {
    id: 615,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Delbin plc wants its finance function to move beyond traditional reporting and control and become a business partner. Which activities best reflect that business-partner role?",
    options: ["Strategic formulation and commercial decision-making", "Routine accounting information production only", "Routine transaction processing and statutory filing only", "External audit and regulatory enforcement"],
    correctAnswer: 0,
    explanation: "Finance business partners contribute to strategic formulation and commercial decisions. Routine information production remains an important but traditional finance activity. The supplied question referred to numbered statements that were not included, so this item states the supported distinction directly."
  },
  {
    id: 616,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which two encourage organizations to improve reporting of their economic, environmental, and social impact?",
    options: ["IASB and TCFD", "TCFD and GRI standards", "IASB and CDSB framework", "TCFD and the Triple Bottom Line approach"],
    correctAnswer: 1,
    explanation: "TCFD recommendations and GRI standards are reporting frameworks and standards used to encourage broader sustainability-related disclosures."
  },
  {
    id: 617,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "A factory currently emits greenhouse gases within legal limits, but expects future legislation to lower emissions caps and require new machinery. What type of climate-related risk is this?",
    options: ["Physical risk", "Market risk", "Policy and legal risk", "Technology risk"],
    correctAnswer: 2,
    explanation: "Risks arising from anticipated regulatory or policy changes, such as emissions limits, are policy and legal risks."
  },
  {
    id: 618,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Monthly variance reports show the extent and causes of differences from production plans so managers can take corrective action. This is:",
    options: ["Planning information", "Operational information", "Tactical information", "Strategic information"],
    correctAnswer: 1,
    explanation: "Operational information supports routine monitoring and corrective action in day-to-day activities."
  },
  {
    id: 619,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "In systems theory, the area outside an information-system boundary is known as the:",
    options: ["Location", "Setting", "Context", "Environment"],
    correctAnswer: 3,
    explanation: "The environment is everything outside a system's defined boundary that may affect or be affected by the system."
  },
  {
    id: 620,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "A subsidiary's operations are largely characterized by structured, routine decisions. Which system is most appropriate for producing summary and exception reports for management?",
    options: ["A management information system (MIS)", "An expert system for unstructured decisions", "A decision-support system for non-routine decisions only", "A strategic executive system for unstructured decisions"],
    correctAnswer: 0,
    explanation: "An MIS processes routine internal data to provide managers with summary and exception reports for control."
  },
  {
    id: 621,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "A range check is used on data entered into a database. Which information quality does this control primarily help deliver?",
    options: ["Completeness only", "Accuracy only", "Both accuracy and completeness", "Neither accuracy nor completeness"],
    correctAnswer: 1,
    explanation: "A range check tests whether a data value falls within permitted limits, helping identify inaccurate entries."
  },
  {
    id: 622,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Control totals are used when inputting a batch of data. Which information quality do they primarily help deliver?",
    options: ["Accuracy only", "Completeness only", "Both accuracy and completeness", "Neither accuracy nor completeness"],
    correctAnswer: 1,
    explanation: "Control totals help verify that all records in a batch have been included and processed, supporting completeness."
  },
  {
    id: 623,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "An information-systems manager wants database records to remain consistent with their sources and free from corruption or unauthorized alteration. This concern relates to:",
    options: ["Data accuracy", "Data integrity", "Data authenticity", "Data completeness"],
    correctAnswer: 1,
    explanation: "Data integrity means information remains complete and accurate and has not been altered, destroyed, or corrupted."
  },
  {
    id: 624,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "An information system logs user IDs, log-on and log-off times, processing activity, and access attempts, and tags transactions. Which control objectives does this support?",
    options: ["Prevention and detection", "Detection, deterrence, and authorization", "Correction and accuracy", "Completeness and prevention"],
    correctAnswer: 1,
    explanation: "Activity logs support detection by recording events, deterrence by making users accountable, and authorization by linking access to user credentials."
  },
  {
    id: 625,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which statement correctly describes the relationship between management information systems (MIS) and transaction processing systems (TPS)?",
    options: ["MIS is the foundation of TPS", "MIS and TPS are independent", "MIS and TPS are synonymous", "TPS is the foundation of MIS"],
    correctAnswer: 3,
    explanation: "TPS record routine transactions and provide the underlying data used by MIS."
  },
  {
    id: 626,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which characteristic is more associated with strategic information than with operational information?",
    options: ["It is often based on estimates and external projections.", "It is often very detailed.", "It is mostly very accurate.", "It is usually routine and daily."],
    correctAnswer: 0,
    explanation: "Strategic information is often long-term and forward-looking, drawing on estimates and external projections."
  },
  {
    id: 627,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Plumtree Ltd. has applied the same depreciation policies for five years. According to the IFRS Conceptual Framework, this supports:",
    options: ["Understandability", "Relevance", "Timeliness", "Comparability"],
    correctAnswer: 3,
    explanation: "Consistent accounting policies help users compare financial information between periods."
  },
  {
    id: 628,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "After reading financial statements, Monalisa changes her shareholding. This indicates that the information was capable of influencing her decisions and was therefore:",
    options: ["Positive", "Timely", "Material", "Relevant"],
    correctAnswer: 3,
    explanation: "Information is relevant when it is capable of making a difference to users' decisions. The supplied answer letter conflicted with its explanation; the explanation supports D, Relevant."
  },
  {
    id: 629,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Only users accountable for system changes can make changes to ABC Ltd.'s TPS. Which information-system quality does this accountability support?",
    options: ["Confidentiality", "Integrity", "Non-repudiation", "Authorization"],
    correctAnswer: 2,
    explanation: "Non-repudiation provides evidence that actions or changes are attributable to a particular user, who cannot later deny them."
  },
  {
    id: 630,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which of these information-processing issues are key in a company's accounting systems?\n\n1. Completeness\n2. Non-repudiation\n3. Verifiability",
    options: ["Issues 1 and 2 only", "Issues 2 and 3 only", "Issues 1 and 3 only", "Issues 1, 2, and 3"],
    correctAnswer: 2,
    explanation: "Completeness and Verifiability are information-processing criteria. Non-repudiation is a security/accountability quality, not one of the CATIVA processing criteria."
  },
  {
    id: 631,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which statement about users of financial information is true?",
    options: ["External users evaluate management performance using management accounting.", "Financial reporting is only for managers and investors.", "Management accounting provides information to managers and outside parties.", "Financial reporting provides general-purpose external reports for users such as investors and lenders."],
    correctAnswer: 3,
    explanation: "Financial reporting provides general-purpose financial statements for external users such as investors, lenders, and regulators."
  },
  {
    id: 632,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Under the IFRS Conceptual Framework, which are the two fundamental qualitative characteristics of useful financial information?",
    options: ["Understandability and Comparability", "Relevance and Faithful Representation", "Verifiability and Timeliness", "Relevance and Timeliness"],
    correctAnswer: 1,
    explanation: "The fundamental qualitative characteristics are Relevance and Faithful Representation."
  },
  {
    id: 633,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which statement about users of financial statements is true?",
    options: ["Financial statements are used mainly by management.", "They are used only by internal parties.", "They are used only by investors.", "They are used by investors, trade payables (creditors), and management."],
    correctAnswer: 3,
    explanation: "Financial statements serve multiple users, including investors, creditors, and management."
  },
  {
    id: 634,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "In data security and information systems, which definition best describes integrity?",
    options: ["Authorized personnel can access data whenever required.", "Stored data remains consistent with its sources and has not been altered, corrupted, or destroyed.", "Data is obtained from verified external market sources.", "Unauthorized individuals cannot access data."],
    correctAnswer: 1,
    explanation: "Integrity protects the accuracy and completeness of information and guards against improper alteration or destruction."
  },
  {
    id: 635,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which describes confidentiality in a secure information system?",
    options: ["Ensuring data is available 24/7", "Protecting information from unauthorized access or disclosure", "Ensuring data cannot be altered without detection", "Ensuring users cannot deny their actions"],
    correctAnswer: 1,
    explanation: "Confidentiality restricts access to information to authorized users and prevents unauthorized disclosure."
  },
  {
    id: 636,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "According to COSO, how many integrated components are there in an internal control framework?",
    options: ["Three", "Four", "Five", "Seven"],
    correctAnswer: 2,
    explanation: "COSO identifies five integrated components: control environment, risk assessment, control activities, information and communication, and monitoring."
  },
  {
    id: 637,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Who has ultimate responsibility for establishing an effective system of internal control in a company?",
    options: ["The internal audit department", "The external statutory auditors", "The board of directors as a whole", "Operational department managers"],
    correctAnswer: 2,
    explanation: "The board has overall responsibility for establishing and reviewing the effectiveness of internal control."
  },
  {
    id: 638,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "What is the primary role of operational managers in relation to internal control?",
    options: ["Designing corporate governance legislation", "Implementing internal controls and monitoring them day to day", "Conducting the annual external audit", "Reporting directly to stock-exchange regulators"],
    correctAnswer: 1,
    explanation: "Operational managers implement controls in their areas and monitor them as part of day-to-day operations."
  },
  {
    id: 639,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "What does CATIVA stand for in information-processing criteria?",
    options: ["Completeness, Accuracy, Timeliness, Inalterability, Verifiability, Assessability", "Cost, Authenticity, Transparency, Integrity, Validity, Access", "Control, Authorization, Testing, Input, Verification, Audit", "Currency, Accuracy, Thoroughness, Independence, Value, Adaptability"],
    correctAnswer: 0,
    explanation: "CATIVA stands for Completeness, Accuracy, Timeliness, Inalterability, Verifiability, and Assessability."
  },
  {
    id: 640,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "In the balanced scorecard, which perspective answers the question, 'How do customers see us?'",
    options: ["Financial perspective", "Internal business process perspective", "Customer perspective", "Innovation and learning perspective"],
    correctAnswer: 2,
    explanation: "The Customer perspective measures matters such as customer satisfaction, retention, and market share."
  },
  {
    id: 641,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "The Triple Bottom Line framework measures business performance across which three dimensions?",
    options: ["Sales, Profit, and Cash Flow", "Social, Environmental, and Economic", "Strategic, Tactical, and Operational", "Inputs, Outputs, and Outcomes"],
    correctAnswer: 1,
    explanation: "The Triple Bottom Line considers social, environmental, and economic performance."
  },
  {
    id: 642,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which is a quantitative financial performance measure?",
    options: ["Customer satisfaction survey score", "Return on Capital Employed (ROCE)", "Number of employee grievances", "Brand reputation index"],
    correctAnswer: 1,
    explanation: "ROCE is a financial ratio calculated using monetary values such as profit and capital employed."
  },
  {
    id: 643,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "A major limitation of historical-cost financial information is that it is:",
    options: ["Forward-looking and highly subjective", "Backward-looking and does not automatically reflect current price changes or inflation", "Available only to internal managers", "Based entirely on management forecasts"],
    correctAnswer: 1,
    explanation: "Historical cost reflects past transactions and may not reflect current values, price-level changes, or inflation."
  },
  {
    id: 644,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which is an enhancing qualitative characteristic under the IFRS Conceptual Framework?",
    options: ["Relevance", "Faithful Representation", "Comparability", "Materiality"],
    correctAnswer: 2,
    explanation: "Comparability is an enhancing characteristic. Relevance and Faithful Representation are fundamental characteristics."
  },
  {
    id: 645,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "What is the primary function of a Transaction Processing System (TPS)?",
    options: ["Formulating ten-year strategic plans", "Recording, processing, and storing routine daily business transactions", "Analyzing macroeconomic PESTEL trends", "Determining executive remuneration"],
    correctAnswer: 1,
    explanation: "TPS handle routine, structured transactions such as sales invoices and payroll."
  },
  {
    id: 646,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which control procedure involves matching entered data against source documents or approved master files to check it was transcribed correctly?",
    options: ["Data validation", "Data verification", "Limit check", "Range check"],
    correctAnswer: 1,
    explanation: "Data verification checks entered data against the source to confirm that it was copied accurately."
  },
  {
    id: 647,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Segregation of duties in an accounting system is primarily designed to prevent:",
    options: ["Hardware malfunctions", "Fraud and error by ensuring no one person controls every phase of a transaction", "Slow internet connectivity", "Excessive tax liabilities"],
    correctAnswer: 1,
    explanation: "Separating authorization, custody, and recording responsibilities reduces opportunities for fraud and undetected errors."
  },
  {
    id: 648,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "Which is an example of a physical access control in an information-system environment?",
    options: ["Encrypted database passwords", "Security guards, door locks, and biometric or card-swipe entry", "Transaction-log audit trails", "Batch hash control totals"],
    correctAnswer: 1,
    explanation: "Physical controls such as locks, guards, and access-card systems restrict entry to facilities and equipment."
  },
  {
    id: 649,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "According to IFAC, what is one role of accountants in sustainability management?",
    options: ["Eliminating financial reporting standards", "Improving decisions about climate risk, sustainable operations, and resource efficiency", "Auditing government tax returns only", "Maximizing short-term share prices regardless of social impact"],
    correctAnswer: 1,
    explanation: "Accountants can support sustainability by managing uncertainty, improving resource efficiency, and incorporating sustainability into business decisions."
  },
  {
    id: 650,
    chapter: "Chapter 6: The Finance Function and Financial Information",
    question: "In the balanced scorecard, employee retention rates and time to market for new products fall under which perspective?",
    options: ["Financial", "Customer", "Internal business process", "Innovation and learning"],
    correctAnswer: 3,
    explanation: "The Innovation and Learning perspective includes employee development and retention and the ability to innovate and introduce products."
  }
];

const btfChapter10Questions = [
  {
    id: 1001,
    chapter: "Chapter 10: Corporate Governance",
    question: "Rahim is a non-executive director of a premium-listed company. Which responsibilities are his?\n\n1. Appointing and removing executive directors\n2. Reporting on company performance\n3. Holding executive directors to account for their performance\n4. Developing and implementing internal controls",
    options: ["1 and 2", "2 and 3", "1 and 3", "2 and 4"],
    correctAnswer: 2,
    explanation: "Non-executive directors help appoint and remove executive directors and hold them accountable. Reporting on performance and implementing internal controls are executive management responsibilities."
  },
  {
    id: 1002,
    chapter: "Chapter 10: Corporate Governance",
    question: "A non-executive director previously worked as an employee of a premium-listed company. After what period may they still be classified as independent under the stated guidance?",
    options: ["2 years", "3 years", "4 years", "5 years"],
    correctAnswer: 0,
    explanation: "The supplied question identifies a two-year period since employment ended as the relevant condition."
  },
  {
    id: 1003,
    chapter: "Chapter 10: Corporate Governance",
    question: "A consultant makes two statements:\n\n(1) A premium-listed company must never depart from any Corporate Governance Code requirement.\n(2) If a company joined the FTSE 100, compliance with the Code would be a statutory requirement.\n\nWhich assessment is correct?",
    options: ["Statement (1) is true; Statement (2) is false", "Both statements are false", "Both statements are true", "Statement (1) is false; Statement (2) is true"],
    correctAnswer: 1,
    explanation: "The Code allows comply-or-explain flexibility, and listing-related code compliance is not the same as a statutory requirement."
  },
  {
    id: 1004,
    chapter: "Chapter 10: Corporate Governance",
    question: "How should a company separate the chair and chief executive roles to improve corporate governance?",
    options: ["The chair and chief executive should be the same person to avoid confusion.", "They should be different people to prevent too much power resting with one person.", "They should be different people in case one becomes incapacitated.", "The chair should not take any outside directorships."],
    correctAnswer: 1,
    explanation: "Separating the roles prevents excessive power and authority from being concentrated in one individual."
  },
  {
    id: 1005,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which remuneration principles are reflected in the Corporate Governance Code?\n\n1. Only basic salary should be pensionable.\n2. Directors should not be rewarded for poor performance.\n3. The auditor should approve the remuneration set.",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2, and 3"],
    correctAnswer: 0,
    explanation: "Only basic salary should be pensionable and directors should not be rewarded for poor performance. External auditors do not approve directors' remuneration."
  },
  {
    id: 1006,
    chapter: "Chapter 10: Corporate Governance",
    question: "For a premium-listed company, which statement about the chair of the board and the remuneration committee is correct?",
    options: ["The board chair must be a committee member.", "The board chair may chair the remuneration committee.", "The board chair may be a member but cannot chair the committee.", "The board chair cannot be a member of the remuneration committee."],
    correctAnswer: 3,
    explanation: "The board chair should not be a member of the remuneration committee, preserving independent oversight of remuneration."
  },
  {
    id: 1007,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which statement about Corporate Governance Code requirements is true?",
    options: ["Non-executive directors only need re-election every three years.", "In annual and half-yearly financial statements, the board should state whether it considers the going-concern basis appropriate.", "Directors' service contracts must never exceed three years.", "The annual report should disclose the business model but may keep strategy confidential."],
    correctAnswer: 1,
    explanation: "The board should state whether it considers adoption of the going-concern basis of accounting appropriate."
  },
  {
    id: 1008,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the minimum number of directors required for a small premium-listed company's audit committee?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 2,
    explanation: "The audit committee must have at least three members."
  },
  {
    id: 1009,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which committee recommends the appointment, reappointment, and removal of external auditors?",
    options: ["The nomination committee", "The remuneration committee", "The audit committee", "The non-executive directors"],
    correctAnswer: 2,
    explanation: "The audit committee reviews and makes recommendations concerning external auditor appointment and removal."
  },
  {
    id: 1010,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the consequence of being a small premium-listed company in relation to the Corporate Governance Code?",
    options: ["It must comply with every provision without exception.", "It is governed by different regulations instead of the Code.", "It can apply flexibility under the Code's comply-or-explain approach.", "It is not affected by the Code."],
    correctAnswer: 2,
    explanation: "The comply-or-explain approach permits companies to explain appropriate departures from particular Code provisions."
  },
  {
    id: 1011,
    chapter: "Chapter 10: Corporate Governance",
    question: "On which fundamental accounting matter are directors expected to report in the annual financial statements?",
    options: ["The company's going-concern status", "The materiality of specific transactions", "The company's use of accrual accounting", "The consistency of treatment of individual items"],
    correctAnswer: 0,
    explanation: "Directors report on whether the going-concern basis of accounting is appropriate."
  },
  {
    id: 1012,
    chapter: "Chapter 10: Corporate Governance",
    question: "Who should comprise a Corporate Governance Code audit committee?",
    options: ["Independent non-executive directors, all with recent and relevant financial experience", "Independent non-executive directors, with at least one member having recent and relevant financial experience", "Non-executive directors with recent and relevant financial experience", "Executive directors, with at least one member having recent and relevant financial experience"],
    correctAnswer: 1,
    explanation: "Audit committees consist of independent non-executive directors, and at least one member should have recent and relevant financial experience."
  },
  {
    id: 1013,
    chapter: "Chapter 10: Corporate Governance",
    question: "Who is responsible under the Corporate Governance Code for monitoring the company's risk-management and internal-control systems?",
    options: ["The executive directors only", "The non-executive directors only", "The entire board of directors", "The audit committee"],
    correctAnswer: 2,
    explanation: "The entire board retains responsibility for monitoring risk-management and internal-control systems."
  },
  {
    id: 1014,
    chapter: "Chapter 10: Corporate Governance",
    question: "Rahim is a full-time executive director of ABC Ltd. May he accept an offer to become a non-executive director of XYZ Ltd.?",
    options: ["Yes, subject to the relevant board approval.", "No, an executive director may not hold another directorship.", "Only if he buys shares in both companies.", "Only if the non-executive directors of both companies agree."],
    correctAnswer: 0,
    explanation: "The supplied guidance permits an executive director to accept one outside non-executive directorship, subject to appropriate approval."
  },
  {
    id: 1015,
    chapter: "Chapter 10: Corporate Governance",
    question: "Who formally appoints a company's external statutory auditors?",
    options: ["The nomination committee", "The remuneration committee", "The board of directors", "Shareholders"],
    correctAnswer: 3,
    explanation: "Shareholders formally appoint the external auditors, normally by voting at the AGM."
  },
  {
    id: 1016,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which statement about the remuneration of a non-executive director is correct?",
    options: ["It should reflect expertise only.", "The director should set it with the remuneration committee.", "It should reflect time commitment and responsibilities.", "It may include performance-related elements."],
    correctAnswer: 2,
    explanation: "Non-executive director fees should reflect time commitment and responsibilities and should not include performance-related pay."
  },
  {
    id: 1017,
    chapter: "Chapter 10: Corporate Governance",
    question: "For a premium-listed company, what proportion of the board, excluding the chair, should be independent non-executive directors?",
    options: ["Between 10% and 24%", "Between 25% and 39%", "Between 40% and 49%", "50% or over"],
    correctAnswer: 3,
    explanation: "At least half of the board, excluding the chair, should comprise independent non-executive directors."
  },
  {
    id: 1018,
    chapter: "Chapter 10: Corporate Governance",
    question: "An external auditor also provides consultancy services to ABC Ltd. Which body would usually examine the implications?",
    options: ["The board of directors", "The remuneration committee", "The audit committee", "The non-executive directors"],
    correctAnswer: 2,
    explanation: "The audit committee considers non-audit services and whether they could threaten the external auditor's independence or objectivity."
  },
  {
    id: 1019,
    chapter: "Chapter 10: Corporate Governance",
    question: "Who ultimately decides the appointment of suitably qualified, independent external statutory auditors for a listed company?",
    options: ["Shareholders", "The audit committee", "The board of directors", "The finance director"],
    correctAnswer: 0,
    explanation: "Shareholders make the formal appointment at a general meeting, following the appropriate recommendation process."
  },
  {
    id: 1020,
    chapter: "Chapter 10: Corporate Governance",
    question: "A company performs its internal audit work in-house rather than using an external supplier. What must it ensure is not compromised?",
    options: ["The independence of internal auditors", "The integrity of information-security systems", "The stewardship of directors", "The rigor of financial reporting processes"],
    correctAnswer: 0,
    explanation: "Internal auditors need sufficient independence and objectivity from the activities they review."
  },
  {
    id: 1021,
    chapter: "Chapter 10: Corporate Governance",
    question: "A company's CEO is asked to replace the retiring chair while remaining CEO for a year. What does the supplied Corporate Governance Code guidance recommend?",
    options: ["Allow both roles after consulting major shareholders.", "The CEO should not take both roles concurrently or subsequently become chair of the same company.", "Allow both roles if the board gives reasons.", "Allow both roles if the non-executive directors agree."],
    correctAnswer: 1,
    explanation: "The supplied guidance advises against the CEO becoming chair of the same company, helping avoid excessive concentration of power."
  },
  {
    id: 1022,
    chapter: "Chapter 10: Corporate Governance",
    question: "After appointment, how often are directors of a premium-listed company subject to election by shareholders under the stated guidance?",
    options: ["At the first AGM and then at intervals of no more than three years", "At the first AGM and then at intervals of no more than two years", "Only at the first AGM", "At every AGM"],
    correctAnswer: 3,
    explanation: "The supplied guidance states that all directors are subject to annual re-election at every AGM."
  },
  {
    id: 1023,
    chapter: "Chapter 10: Corporate Governance",
    question: "In addition to whether financial statements give a true and fair view, what may external auditors report on under relevant listing rules?",
    options: ["The experience and ability of the CFO", "Whether finance staff meet CPD requirements", "The company's compliance with the Corporate Governance Code", "The standard of work performed by internal audit"],
    correctAnswer: 2,
    explanation: "External auditors may report on compliance with Corporate Governance Code provisions required by listing rules."
  },
  {
    id: 1024,
    chapter: "Chapter 10: Corporate Governance",
    question: "Meeting the needs of the present without compromising the ability of future generations to meet their own needs is:",
    options: ["Corporate responsibility", "Sustainability", "Business ethics", "Natural capital"],
    correctAnswer: 1,
    explanation: "This is the widely used definition of sustainability."
  },
  {
    id: 1025,
    chapter: "Chapter 10: Corporate Governance",
    question: "According to the supplied BSEC Corporate Governance Code question, what are the minimum and maximum numbers of directors on a listed company's board?",
    options: ["Minimum 3, maximum 12", "Minimum 5, maximum 20", "Minimum 7, maximum 15", "Minimum 5, maximum 15"],
    correctAnswer: 1,
    explanation: "The supplied answer identifies the board-size range as a minimum of 5 and a maximum of 20 directors."
  },
  {
    id: 1026,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under the supplied BSEC regulations question, what is the minimum proportion of independent directors on a listed company's board?",
    options: ["At least one-tenth", "At least one-fifth", "At least one-third", "At least 50%"],
    correctAnswer: 1,
    explanation: "The supplied answer identifies one-fifth of the total directors as the minimum independent-director proportion."
  },
  {
    id: 1027,
    chapter: "Chapter 10: Corporate Governance",
    question: "To qualify as an independent director under the supplied BSEC guidance, what percentage of the company's total paid-up shares must the individual hold less than?",
    options: ["Less than 1%", "Less than 5%", "Less than 10%", "Strictly zero shares"],
    correctAnswer: 0,
    explanation: "The supplied answer states that an independent director must hold less than 1% of the company's paid-up shares."
  },
  {
    id: 1028,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under the supplied BSEC Code question, in how many listed companies at most can a person concurrently hold an independent directorship?",
    options: ["3 companies", "5 companies", "7 companies", "10 companies"],
    correctAnswer: 1,
    explanation: "The supplied answer identifies five listed companies as the maximum number of concurrent independent directorships."
  },
  {
    id: 1029,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the standard tenure of an independent director under the supplied BSEC Code question, and how many times can it be extended?",
    options: ["2 years, extendable for 2 tenures", "3 years, extendable for 1 tenure only", "3 years, extendable indefinitely", "5 years, non-extendable"],
    correctAnswer: 1,
    explanation: "The supplied answer states a three-year tenure renewable once for one further term."
  },
  {
    id: 1030,
    chapter: "Chapter 10: Corporate Governance",
    question: "If an independent-director position becomes vacant, within how many days must it be filled under the supplied BSEC rules question?",
    options: ["30 days", "60 days", "90 days", "120 days"],
    correctAnswer: 2,
    explanation: "The supplied answer states that an independent-director vacancy must be filled within 90 days."
  },
  {
    id: 1031,
    chapter: "Chapter 10: Corporate Governance",
    question: "From which category of directors must the board chairperson be elected under the supplied BSEC Code question?",
    options: ["Executive directors", "Independent directors only", "Non-executive directors", "Managing directors"],
    correctAnswer: 2,
    explanation: "The supplied answer states that the chairperson must be elected from among the non-executive directors."
  },
  {
    id: 1032,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which combination of roles cannot be held by the same individual under the supplied BSEC guidelines?\n\nB: Chairperson and Managing Director/CEO\nC: CFO and Head of Internal Audit",
    options: ["MD and CEO", "Chairperson and Managing Director/CEO", "CFO and Head of Internal Audit", "Both B and C"],
    correctAnswer: 3,
    explanation: "The supplied answer states that the chairperson and CEO roles must be separate and key control roles must also be separated."
  },
  {
    id: 1033,
    chapter: "Chapter 10: Corporate Governance",
    question: "How many years of minimum relevant professional experience must an independent director possess under the supplied BSEC regulations question?",
    options: ["5 years", "8 years", "10 years", "15 years"],
    correctAnswer: 2,
    explanation: "The supplied answer identifies 10 years as the minimum relevant professional or executive experience."
  },
  {
    id: 1034,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under the supplied BSEC rules question, how long must a former executive be out of executive service before becoming an independent director of the same company?",
    options: ["1 financial year", "2 financial years", "3 financial years", "5 financial years"],
    correctAnswer: 1,
    explanation: "The supplied answer identifies a waiting period of at least two financial years."
  },
  {
    id: 1035,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the minimum number of members required for an audit committee under the supplied BSEC Code question?",
    options: ["2 members", "3 members", "4 members", "5 members"],
    correctAnswer: 1,
    explanation: "The audit committee must comprise at least three members."
  },
  {
    id: 1036,
    chapter: "Chapter 10: Corporate Governance",
    question: "Who must be selected as the chairperson of the audit committee under the supplied BSEC rules question?",
    options: ["The board chairperson", "The chief executive officer", "An independent director", "Any non-executive director"],
    correctAnswer: 2,
    explanation: "The supplied BSEC Code answer requires an independent director to chair the audit committee."
  },
  {
    id: 1037,
    chapter: "Chapter 10: Corporate Governance",
    question: "Whose presence is mandatory to form a valid quorum for an audit committee meeting under the supplied BSEC guidelines question?",
    options: ["The managing director", "At least one independent director", "The external statutory auditor", "The chief financial officer"],
    correctAnswer: 1,
    explanation: "The supplied answer states that at least one independent director must be present for a valid quorum."
  },
  {
    id: 1038,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the minimum number of audit committee meetings required in a financial year under the supplied BSEC rules question?",
    options: ["2 meetings", "3 meetings", "4 meetings", "6 meetings"],
    correctAnswer: 2,
    explanation: "The supplied answer states that the audit committee must hold at least four meetings each financial year."
  },
  {
    id: 1039,
    chapter: "Chapter 10: Corporate Governance",
    question: "If an audit committee's reports of a material defect or fraud remain unresolved after three reports or six months, to whom must it report under the supplied BSEC rules question?",
    options: ["Registrar of Joint Stock Companies (RJSC)", "Bangladesh Securities and Exchange Commission (BSEC)", "High Court Division", "National Board of Revenue (NBR)"],
    correctAnswer: 1,
    explanation: "The supplied answer requires unresolved material defects or fraud to be reported directly to BSEC."
  },
  {
    id: 1040,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under the supplied BSEC regulations question, how must the roles of CFO, Company Secretary (CS), and Head of Internal Audit and Compliance (HIAC) be filled?",
    options: ["By the same individual for efficiency", "By different individuals", "By non-executive directors", "By external consultants"],
    correctAnswer: 1,
    explanation: "The supplied answer states that CFO, CS, and HIAC roles must be held by different individuals."
  },
  {
    id: 1041,
    chapter: "Chapter 10: Corporate Governance",
    question: "The Turnbull Guidance is primarily associated with which corporate-governance principle?",
    options: ["Remuneration disclosure", "Maintaining a sound system of internal control", "External-auditor rotation", "Board diversity"],
    correctAnswer: 1,
    explanation: "Turnbull Guidance provides recommendations for establishing and maintaining a sound internal-control system."
  },
  {
    id: 1042,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the main objective of an external audit in corporate governance?",
    options: ["To certify that financial statements are 100% correct", "To prevent and detect all instances of fraud", "To express an independent opinion on whether financial statements give a true and fair view", "To manage internal risk"],
    correctAnswer: 2,
    explanation: "An external auditor's primary objective is to express an independent opinion on the financial statements."
  },
  {
    id: 1043,
    chapter: "Chapter 10: Corporate Governance",
    question: "Who has primary responsibility for preventing and detecting fraud and error within an organization?",
    options: ["External auditors", "Directors and management", "The audit committee chair", "BSEC inspectors"],
    correctAnswer: 1,
    explanation: "Management and those charged with governance have primary responsibility for preventing and detecting fraud and error."
  },
  {
    id: 1044,
    chapter: "Chapter 10: Corporate Governance",
    question: "According to Turnbull Guidance, what does a sound system of internal control provide?",
    options: ["Absolute assurance against failure", "Reasonable assurance regarding operational, reporting, and compliance objectives", "Complete protection against human error", "A guarantee of business profitability"],
    correctAnswer: 1,
    explanation: "Internal control can provide reasonable assurance, not absolute assurance, that objectives will be achieved."
  },
  {
    id: 1045,
    chapter: "Chapter 10: Corporate Governance",
    question: "To whom does the internal audit function primarily report on internal controls and risk management?",
    options: ["Shareholders at the AGM", "External statutory auditors", "The board of directors and audit committee", "The Registrar of Joint Stock Companies"],
    correctAnswer: 2,
    explanation: "Internal audit reports to the board and audit committee, supporting independent oversight of controls and risk management."
  },
  {
    id: 1046,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which is a major symptom of serious corporate-governance failure?",
    options: ["Frequent rotation of audit partners", "Unexpected financial collapse without prior warning", "Appointing independent directors through an AGM", "Separating the chair and CEO roles"],
    correctAnswer: 1,
    explanation: "An unexpected financial collapse may indicate significant failures in governance, risk management, or internal controls."
  },
  {
    id: 1047,
    chapter: "Chapter 10: Corporate Governance",
    question: "For at least how many preceding years does the supplied BSEC Code question require key operating and financial data to be summarized in a listed company's Directors' Report?",
    options: ["3 years", "5 years", "7 years", "10 years"],
    correctAnswer: 1,
    explanation: "The supplied answer identifies a summary covering at least the preceding five years."
  },
  {
    id: 1048,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under the supplied BSEC Code question, during what preceding period must an independent director not have been a partner or executive of the company's statutory audit firm?",
    options: ["1 year", "2 years", "3 years", "5 years"],
    correctAnswer: 2,
    explanation: "The supplied answer identifies the preceding three years as the relevant period."
  },
  {
    id: 1049,
    chapter: "Chapter 10: Corporate Governance",
    question: "Who acts as secretary to the audit committee under the supplied BSEC regulations question?",
    options: ["Chief Financial Officer (CFO)", "Head of Internal Audit and Compliance (HIAC)", "Company Secretary (CS)", "Managing Director"],
    correctAnswer: 2,
    explanation: "The supplied answer states that the Company Secretary acts as secretary to the audit committee."
  },
  {
    id: 1050,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which is an inherent limitation of internal control?",
    options: ["The requirement for independent directors", "The possibility of management override or human error", "Regular audit committee reporting", "Disclosure of related-party transactions"],
    correctAnswer: 1,
    explanation: "Internal controls cannot provide absolute assurance and are subject to limitations such as human error, collusion, and management override."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { btfQuestions, btfChapter4Questions, btfChapter6Questions, btfChapter10Questions };
}