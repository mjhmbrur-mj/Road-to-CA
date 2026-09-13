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

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { btfQuestions };
}