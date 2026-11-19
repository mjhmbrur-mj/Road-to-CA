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

const btfChapter2Questions = [
  {
    id: 202,
    chapter: "Chapter 2: Managing a Business",
    question: "What is the primary purpose of management within an organisation?",
    options: ["To maximise the number of employees", "To coordinate resources to achieve organisational objectives efficiently and effectively", "To eliminate all business risks", "To ensure that employees always follow instructions"],
    correctAnswer: 1,
    explanation: "Management coordinates people and other resources to achieve organisational objectives efficiently and effectively."
  },
  {
    id: 203,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager achieves the company's sales target using fewer resources than originally planned. This primarily demonstrates:",
    options: ["Effectiveness only", "Efficiency only", "Authority", "Accountability"],
    correctAnswer: 1,
    explanation: "Efficiency means achieving results with minimum or optimal use of resources."
  },
  {
    id: 204,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager achieves the desired sales target but uses substantially more resources than necessary. The manager has been:",
    options: ["Efficient but ineffective", "Effective but inefficient", "Both efficient and effective", "Neither efficient nor effective"],
    correctAnswer: 1,
    explanation: "Achieving the objective means effective; excessive resource use means inefficient."
  },
  {
    id: 205,
    chapter: "Chapter 2: Managing a Business",
    question: "Which statement best distinguishes management from leadership?",
    options: ["Management focuses only on employees, while leadership focuses only on finance", "Management involves planning and controlling resources, while leadership emphasises influencing and guiding people", "Leadership is always formal, while management is always informal", "Management and leadership are exactly the same concept"],
    correctAnswer: 1,
    explanation: "Management includes planning, organising and controlling; leadership focuses strongly on influencing and motivating people."
  },
  {
    id: 206,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager notices that two departments can achieve a better result by sharing resources. This situation best illustrates:",
    options: ["Bounded rationality", "Synergy", "Accountability", "Delegation"],
    correctAnswer: 1,
    explanation: "Synergy occurs when combined efforts produce greater value than separate efforts: 1 + 1 > 2."
  },
  {
    id: 207,
    chapter: "Chapter 2: Managing a Business",
    question: "Which situation best illustrates bounded rationality?",
    options: ["A manager evaluates every possible alternative before making a decision", "A manager makes a decision using limited information and time", "A manager refuses to make any decision", "A manager always chooses the most profitable option"],
    correctAnswer: 1,
    explanation: "Herbert Simon's bounded rationality recognises limitations in information, time and human decision-making ability."
  },
  {
    id: 208,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager chooses a supplier that is acceptable rather than searching indefinitely for the theoretically best supplier. This is:",
    options: ["Maximising", "Satisficing", "Delegating", "Controlling"],
    correctAnswer: 1,
    explanation: "Satisficing means choosing an option that meets an acceptable standard rather than seeking the absolute optimum."
  },
  {
    id: 209,
    chapter: "Chapter 2: Managing a Business",
    question: "Which statement most accurately describes power?",
    options: ["The formal right attached to a position", "The obligation to complete an assigned task", "The ability to influence the behaviour of others", "The requirement to report results"],
    correctAnswer: 2,
    explanation: "Power is the ability to influence others. It does not necessarily come from a formal position."
  },
  {
    id: 210,
    chapter: "Chapter 2: Managing a Business",
    question: "A senior accountant persuades colleagues to adopt a new accounting system because of her specialised knowledge. This is primarily:",
    options: ["Legitimate power", "Reward power", "Expert power", "Coercive power"],
    correctAnswer: 2,
    explanation: "Expert power arises from knowledge, skills or expertise."
  },
  {
    id: 211,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager can influence employees because employees admire and respect him personally. This represents:",
    options: ["Referent power", "Coercive power", "Legitimate power", "Reward power"],
    correctAnswer: 0,
    explanation: "Referent power comes from respect, admiration or identification with the person."
  },
  {
    id: 212,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager threatens disciplinary action if an employee repeatedly violates company rules. This is:",
    options: ["Reward power", "Expert power", "Referent power", "Coercive power"],
    correctAnswer: 3,
    explanation: "Coercive power is based on the ability to punish or impose negative consequences."
  },
  {
    id: 213,
    chapter: "Chapter 2: Managing a Business",
    question: "Which source of power exists primarily because of a person's formal position?",
    options: ["Expert", "Referent", "Legitimate", "Personal"],
    correctAnswer: 2,
    explanation: "Legitimate power comes from formal organisational position or authority."
  },
  {
    id: 214,
    chapter: "Chapter 2: Managing a Business",
    question: "Which statement best distinguishes authority from power?",
    options: ["Authority is informal, whereas power is always formal", "Authority is the legitimate right to make decisions, whereas power is the broader ability to influence", "Authority and power are always identical", "Power can only be exercised by senior managers"],
    correctAnswer: 1,
    explanation: "Authority = legitimate right; power = ability to influence."
  },
  {
    id: 215,
    chapter: "Chapter 2: Managing a Business",
    question: "Which statement best describes responsibility?",
    options: ["The right to command others", "The duty to perform an assigned task", "The ability to reward employees", "The obligation of shareholders to managers"],
    correctAnswer: 1,
    explanation: "Responsibility is the duty or obligation to perform an assigned task."
  },
  {
    id: 216,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager must explain why departmental expenses exceeded the approved budget. This primarily represents:",
    options: ["Authority", "Accountability", "Power", "Delegation"],
    correctAnswer: 1,
    explanation: "Accountability means being answerable for decisions, actions and results."
  },
  {
    id: 217,
    chapter: "Chapter 2: Managing a Business",
    question: "Which sequence correctly represents the relationship between authority, responsibility and accountability?",
    options: ["Responsibility -> authority -> accountability", "Authority -> responsibility -> accountability", "Accountability -> responsibility -> authority", "Authority -> accountability -> responsibility"],
    correctAnswer: 1,
    explanation: "A person is generally given authority to perform a task, accepts responsibility, and is held accountable for the result."
  },
  {
    id: 218,
    chapter: "Chapter 2: Managing a Business",
    question: "Which statement about delegation is most accurate?",
    options: ["The manager transfers all accountability permanently", "Delegation requires responsibility but not authority", "Delegation involves assigning responsibility and granting appropriate authority", "Delegation eliminates managerial responsibility"],
    correctAnswer: 2,
    explanation: "Effective delegation requires responsibility + appropriate authority, while ultimate managerial accountability remains with the manager."
  },
  {
    id: 219,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager delegates responsibility for preparing a report but does not give the employee access to the necessary information. The main problem is:",
    options: ["Excessive accountability", "Insufficient authority/resources", "Excessive delegation", "Excessive power"],
    correctAnswer: 1,
    explanation: "Delegation is ineffective when the subordinate lacks the authority or resources needed to perform the task."
  },
  {
    id: 220,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager who has direct authority over employees performing core organisational activities is generally a:",
    options: ["Staff manager", "Line manager", "Specialist consultant", "External auditor"],
    correctAnswer: 1,
    explanation: "Line managers have direct authority over employees and contribute directly to organisational objectives."
  },
  {
    id: 221,
    chapter: "Chapter 2: Managing a Business",
    question: "An HR manager advises a production manager on recruitment but does not directly control production workers. The HR manager is primarily a:",
    options: ["Line manager", "Staff manager", "Project manager", "General manager"],
    correctAnswer: 1,
    explanation: "Staff managers provide advice, expertise and support to line managers."
  },
  {
    id: 222,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager responsible specifically for an organisation's finance function is most appropriately described as:",
    options: ["Functional manager", "Project manager", "Staff employee", "Customer manager"],
    correctAnswer: 0,
    explanation: "A functional manager is responsible for a particular organisational function."
  },
  {
    id: 223,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager is appointed to deliver a new banking application within 12 months and within a fixed budget. This manager is primarily a:",
    options: ["Functional manager", "Project manager", "Staff manager", "Line clerk"],
    correctAnswer: 1,
    explanation: "A project manager coordinates resources to achieve a specific project objective within defined constraints."
  },
  {
    id: 224,
    chapter: "Chapter 2: Managing a Business",
    question: "A branch manager supervises customer service, operations, sales and finance within the branch. This person is most likely a:",
    options: ["General manager", "Staff manager", "Specialist manager", "Project manager"],
    correctAnswer: 0,
    explanation: "A general manager oversees multiple functions within an organisational unit."
  },
  {
    id: 225,
    chapter: "Chapter 2: Managing a Business",
    question: "Which sequence correctly represents the traditional management process?",
    options: ["Controlling -> Planning -> Organising -> Leading", "Planning -> Organising -> Leading -> Controlling", "Organising -> Controlling -> Planning -> Leading", "Leading -> Planning -> Controlling -> Organising"],
    correctAnswer: 1,
    explanation: "The common P-O-L-C framework is Planning, Organising, Leading, Controlling."
  },
  {
    id: 226,
    chapter: "Chapter 2: Managing a Business",
    question: "Comparing actual performance with planned performance and correcting deviations is:",
    options: ["Planning", "Organising", "Leading", "Controlling"],
    correctAnswer: 3,
    explanation: "Controlling involves measuring performance against standards and taking corrective action."
  },
  {
    id: 227,
    chapter: "Chapter 2: Managing a Business",
    question: "According to Mintzberg, managerial roles are broadly divided into:",
    options: ["Planning, organising and controlling", "Financial, marketing and operational", "Interpersonal, informational and decisional", "Strategic, tactical and operational"],
    correctAnswer: 2,
    explanation: "Mintzberg identified three categories: interpersonal, informational and decisional."
  },
  {
    id: 228,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager communicates important organisational information to employees. This is primarily the:",
    options: ["Disseminator role", "Figurehead role", "Entrepreneur role", "Liaison role"],
    correctAnswer: 0,
    explanation: "The disseminator passes relevant information to organisational members."
  },
  {
    id: 229,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager deals with an unexpected major conflict between two departments. This is primarily the:",
    options: ["Resource allocator role", "Disturbance handler role", "Figurehead role", "Disseminator role"],
    correctAnswer: 1,
    explanation: "A disturbance handler deals with unexpected problems and conflicts."
  },
  {
    id: 230,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager decides how the annual budget should be distributed among departments. This is the:",
    options: ["Negotiator role", "Resource allocator role", "Liaison role", "Monitor role"],
    correctAnswer: 1,
    explanation: "The resource allocator decides how organisational resources are distributed."
  },
  {
    id: 231,
    chapter: "Chapter 2: Managing a Business",
    question: "The organisational iceberg model suggests that:",
    options: ["Visible structures are more important than human factors", "All organisational characteristics are easily observable", "Important behavioural factors may exist beneath the visible organisational structure", "Organisations should eliminate informal relationships"],
    correctAnswer: 2,
    explanation: "The iceberg illustrates that many important hidden human and social factors exist beneath visible structures and policies."
  },
  {
    id: 232,
    chapter: "Chapter 2: Managing a Business",
    question: "A company focuses heavily on targets, productivity and measurable results. Which management model best fits?",
    options: ["Human Relations", "Internal Process", "Rational Goal", "Open Systems"],
    correctAnswer: 2,
    explanation: "Rational Goal = targets, productivity and results."
  },
  {
    id: 233,
    chapter: "Chapter 2: Managing a Business",
    question: "A bank emphasises strict procedures, documentation, stability and internal control. This is most consistent with:",
    options: ["Open Systems Model", "Human Relations Model", "Rational Goal Model", "Internal Process Model"],
    correctAnswer: 3,
    explanation: "Internal Process = rules, procedures, stability and control."
  },
  {
    id: 234,
    chapter: "Chapter 2: Managing a Business",
    question: "A company gives strong emphasis to employee participation, teamwork and morale. This reflects:",
    options: ["Human Relations Model", "Rational Goal Model", "Internal Process Model", "Open Systems Model"],
    correctAnswer: 0,
    explanation: "The Human Relations Model focuses on people, teamwork and employee development."
  },
  {
    id: 235,
    chapter: "Chapter 2: Managing a Business",
    question: "A company constantly innovates in response to changes in customer preferences and competitors. This best reflects:",
    options: ["Internal Process", "Open Systems", "Human Relations", "Rational Goal"],
    correctAnswer: 1,
    explanation: "Open Systems = external environment, flexibility, innovation and adaptation."
  },
  {
    id: 236,
    chapter: "Chapter 2: Managing a Business",
    question: "Which pairing is INCORRECT?",
    options: ["Rational Goal — Results", "Internal Process — Rules", "Human Relations — People", "Open Systems — Stability"],
    correctAnswer: 3,
    explanation: "Open Systems focuses on change and adaptation, not stability."
  },
  {
    id: 237,
    chapter: "Chapter 2: Managing a Business",
    question: "Which of the following is NOT one of the traditional 4Ps of marketing?",
    options: ["Product", "Price", "People", "Promotion"],
    correctAnswer: 2,
    explanation: "Traditional 4Ps are Product, Price, Place and Promotion."
  },
  {
    id: 238,
    chapter: "Chapter 2: Managing a Business",
    question: "For a smartphone, the ability to communicate with others represents the:",
    options: ["Augmented product", "Actual product", "Core/basic product", "Distribution product"],
    correctAnswer: 2,
    explanation: "Communication is the core benefit of the smartphone."
  },
  {
    id: 239,
    chapter: "Chapter 2: Managing a Business",
    question: "A smartphone's brand, camera, design, quality and physical features represent the:",
    options: ["Core product", "Actual product", "Augmented product", "Promotional mix"],
    correctAnswer: 1,
    explanation: "The actual product includes tangible features, design, brand and quality."
  },
  {
    id: 240,
    chapter: "Chapter 2: Managing a Business",
    question: "Free delivery, warranty and after-sales service are examples of:",
    options: ["Core product", "Actual product", "Augmented product", "Price strategy"],
    correctAnswer: 2,
    explanation: "Additional benefits/services form the augmented product."
  },
  {
    id: 241,
    chapter: "Chapter 2: Managing a Business",
    question: "Which sequence best represents the basic operations model?",
    options: ["Outputs -> Inputs -> Transformation", "Inputs -> Transformation -> Outputs", "Marketing -> Finance -> HRD", "Planning -> Promotion -> Sales"],
    correctAnswer: 1,
    explanation: "Operations converts inputs through a transformation process into outputs."
  },
  {
    id: 242,
    chapter: "Chapter 2: Managing a Business",
    question: "Which statement best distinguishes production from operations?",
    options: ["Production is broader than operations in every situation", "Operations can include both manufacturing and service processes", "Operations applies only to factories", "Production has no relationship with resource transformation"],
    correctAnswer: 1,
    explanation: "Operations is broader and applies to both goods and services; production often refers more specifically to creating goods."
  },
  {
    id: 243,
    chapter: "Chapter 2: Managing a Business",
    question: "Which sequence best represents a typical procurement process?",
    options: ["Advertise -> recruit -> train -> evaluate", "Identify need -> source suppliers -> evaluate/select -> purchase/receive", "Produce -> advertise -> recruit -> sell", "Finance -> market -> motivate -> control"],
    correctAnswer: 1,
    explanation: "Procurement begins with identifying the need and proceeds through sourcing, selection and purchasing/receiving."
  },
  {
    id: 244,
    chapter: "Chapter 2: Managing a Business",
    question: "A procurement manager selects the cheapest supplier without considering quality or reliability. The major risk is:",
    options: ["Excessive employee motivation", "Poor value for money", "Excessive marketing", "Increased organisational culture"],
    correctAnswer: 1,
    explanation: "Procurement should consider total value, not simply purchase price."
  },
  {
    id: 245,
    chapter: "Chapter 2: Managing a Business",
    question: "Under the Hard HRM approach, employees are primarily viewed as:",
    options: ["Valuable social partners only", "Resources that should be managed to achieve business objectives", "Customers", "External suppliers"],
    correctAnswer: 1,
    explanation: "Hard HRM emphasises employees as resources and focuses strongly on cost, control and business objectives."
  },
  {
    id: 246,
    chapter: "Chapter 2: Managing a Business",
    question: "Which approach places greater emphasis on employee commitment, development and participation?",
    options: ["Hard HRM", "Soft HRM", "Scientific procurement", "Rational Goal Model"],
    correctAnswer: 1,
    explanation: "Soft HRM views employees as valuable people and emphasises motivation, commitment and development."
  },
  {
    id: 247,
    chapter: "Chapter 2: Managing a Business",
    question: "A bank introduces a highly formal HR system because its strategy requires strong regulatory compliance. This is an example of:",
    options: ["Best-fit approach", "Best-practice approach", "Soft HRM only", "Informal HRM"],
    correctAnswer: 0,
    explanation: "Best fit means HR practices should fit the organisation's particular strategy, environment and circumstances."
  },
  {
    id: 248,
    chapter: "Chapter 2: Managing a Business",
    question: "Under the Harvard 4C framework, employees' personal goals are aligned with organisational goals. This represents:",
    options: ["Competence", "Commitment", "Congruence", "Cost-effectiveness"],
    correctAnswer: 2,
    explanation: "Congruence means harmony between employee and organisational goals."
  },
  {
    id: 249,
    chapter: "Chapter 2: Managing a Business",
    question: "A manager uses real-time sales data to identify declining sales and immediately adjust the sales strategy. IT is primarily supporting:",
    options: ["Decision-making", "Employee recruitment only", "Product packaging only", "Legal ownership"],
    correctAnswer: 0,
    explanation: "Timely information systems support better and faster managerial decisions."
  },
  {
    id: 250,
    chapter: "Chapter 2: Managing a Business",
    question: "Organisational behaviour is primarily concerned with:",
    options: ["How organisations prepare financial statements", "How individuals and groups behave within organisations", "How products are physically manufactured", "How suppliers are selected"],
    correctAnswer: 1,
    explanation: "OB = study of individual and group behaviour within organisations."
  },
  {
    id: 251,
    chapter: "Chapter 2: Managing a Business",
    question: "A project team initially consists of unfamiliar members, then experiences disagreements, develops shared norms, becomes productive and finally completes the project. Which sequence best describes this process?",
    options: ["Planning -> Organising -> Leading -> Controlling", "Forming -> Storming -> Norming -> Performing -> Adjourning", "Core -> Actual -> Augmented -> Promotion", "Authority -> Responsibility -> Power -> Accountability"],
    correctAnswer: 1,
    explanation: "Tuckman's stages of group development are Forming, Storming, Norming, Performing, and Adjourning."
  }
];
const btfChapter4Questions = [
  {
    id: 402,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In the home computer market, laptop computers are an example of a:",
    options: ["Product form", "Brand", "Product class", "Generic product"],
    correctAnswer: 0,
    explanation: "In product hierarchy analysis, computers are the general product class, whereas laptops constitute a specific product form within that class [cite: 215]."
  },
  {
    id: 403,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Masum works for Rupsha Ltd. Masum's manager has asked him to undertake an internal analysis of the company as part of a strategic planning review. Which three of the following analytical techniques will be useful in this context?1. Value chain analysis2. Porter's five forces analysis3. The BCG Matrix4. PESTEL analysis5. Analysis of distinctive competencies6. Ansoff's Matrix",
    options: ["1, 2, and 4", "1, 3, and 5", "2, 4, and 6", "3, 5, and 6"],
    correctAnswer: 1,
    explanation: "Value chain analysis, the BCG matrix, and analysis of distinctive competencies evaluate internal resources, activities, and product portfolios. PESTEL and Porter's Five Forces focus on the external environment [cite: 214, 215]."
  },
  {
    id: 404,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Salma is carrying out a PESTEL analysis for her employer, Padma Ltd. During her research, Salma has realized that the aging of Bangladesh's population is a potentially important strategic issue for the company. In which section of her analysis should Salma record this matter?",
    options: ["P (Political)", "S (Social)", "T (Technological)", "L (Legal)"],
    correctAnswer: 1,
    explanation: "Demographics, population trends, and age distributions fall under Social (S) factors in the PESTEL framework [cite: 214, 215]."
  },
  {
    id: 405,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "The Marketing Director of Padma Ltd. is formulating whether one of the company's products, aimed at a small niche market, should be differentiated from its close competitors. At this stage, she is unsure how such differentiation would be achieved in practice. The decision on whether to differentiate or not is a decision concerning the company's:",
    options: ["Functional strategy", "Business strategy", "Corporate strategy", "Operational strategy"],
    correctAnswer: 1,
    explanation: "Business (or competitive) strategy deals with how a strategic business unit or product competes in its specific market (e.g., cost leadership vs. differentiation) [cite: 214, 215]."
  },
  {
    id: 406,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Padma Ltd. has entered a market and achieved a reasonably dominant position in under a year. Padma Ltd. is pleased that the threat of new entrants into the market seems to be relatively low. Which of the following factors is most likely to have contributed towards this situation?",
    options: ["Low initial capital cost required to enter", "A customer base consisting of a few large customers", "Significant economies of scale achieved by established firms", "The market is for simple services rather than manufacturing"],
    correctAnswer: 2,
    explanation: "High economies of scale and capital requirements create substantial barriers to entry, making the threat of new entrants low [cite: 214, 215]."
  },
  {
    id: 407,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A major stakeholder in Padma Ltd. has exerted considerable influence over environmental impacts, causing a temporary plant closure. The stakeholder writes regularly to the chairman. In terms of Mendelow's matrix (Power/Interest), which strategy should Padma Ltd. pursue for this stakeholder?",
    options: ["Keep informed", "Keep satisfied", "Minimal effort", "Key player"],
    correctAnswer: 3,
    explanation: "A stakeholder possessing high power (able to cause closures) and high interest (regular communications/campaigns) is classified as a 'Key Player' and must be actively managed/engaged [cite: 214, 215]."
  },
  {
    id: 408,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Padma Ltd. provides exclusive scuba-diving holidays for people over 60 years of age. In terms of Michael Porter's generic competitive strategies, this represents a strategy of:",
    options: ["Differentiation", "Cost leadership", "Cost focus", "Differentiation focus"],
    correctAnswer: 3,
    explanation: "Focusing on a narrow niche market (people over 60) with a specialized/customized offering (exclusive scuba-diving) represents a Differentiation Focus strategy [cite: 214, 215]."
  },
  {
    id: 409,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Matin is preparing an assessment using the BCG matrix. He classified a product, the Pluton, as having a low market share in a high-growth market. Matin should recommend that the company pursue:",
    options: ["Either a hold or a divest strategy", "Either a hold or a harvest strategy", "Either a build or a harvest/divest strategy", "Strictly a hold strategy"],
    correctAnswer: 2,
    explanation: "A low market share in a high-growth market is a Question Mark (Problem Child). Strategic options are to 'build' (invest cash to turn it into a Star) or 'divest/harvest' if investment is unviable [cite: 214, 215]."
  },
  {
    id: 410,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Mango Ltd manufactures washing machines and has a 20% local market share. To increase revenues, it decides to add tumble dryers to its range of products sold to the same market. In terms of Ansoff's matrix, this represents a strategy of:",
    options: ["Market penetration", "Market development", "Product development", "Diversification"],
    correctAnswer: 2,
    explanation: "Offering new products (tumble dryers) to existing markets/customers is defined as Product Development in Ansoff's growth matrix [cite: 214, 215]."
  },
  {
    id: 411,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "The board of directors of Mango Ltd is evaluating a new strategic option for a major business unit. According to Johnson, Scholes, and Whittington, the final decision should be judged against which three criteria?",
    options: ["Suitability, Feasibility, and Acceptability", "Cost of entry, Attractiveness, and Payoffs", "Strengths, Weaknesses, and Opportunities", "Efficiency, Effectiveness, and Economy"],
    correctAnswer: 0,
    explanation: "Strategy evaluation criteria established by Johnson & Scholes are Suitability (does it fit the situation?), Feasibility (can it be executed?), and Acceptability (does it satisfy stakeholders?) [cite: 214, 215]."
  },
  {
    id: 412,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which of the following statements about a product life cycle (PLC) diagram is true?",
    options: ["The life cycle diagram predicts exactly when the decline phase will start", "Sales growth always follows the introduction of a product", "Profits are normally highest during the maturity phase", "The mature phase usually lasts exactly 10 years"],
    correctAnswer: 2,
    explanation: "During the maturity phase, production costs fall due to economies of scale and sales volume peaks, generating the highest profits [cite: 214, 215]."
  },
  {
    id: 413,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Millward Ltd sells garden sheds and regularly matches competitors' price cuts while launching local leafleting campaigns. In terms of Philip Kotler's competitor reaction profiles, Millward Ltd is classified as:",
    options: ["Laid back", "A tiger", "Selective", "Stochastic"],
    correctAnswer: 1,
    explanation: "A competitor that reacts swiftly and aggressively to any competitive attack (matching price cuts and launching promotions) is termed a 'Tiger' [cite: 215]."
  },
  {
    id: 414,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Manson Ltd aims to pursue a differentiation strategy for its sliding-door product. Which three of the following will form part of this strategy?1. Minimizing labor and overhead costs2. Improving product features and unique benefits3. Promotion of the brand image4. Use of higher quality manufacturing materials5. Strictly undercutting competitor prices",
    options: ["1, 2, and 3", "2, 3, and 4", "3, 4, and 5", "1, 4, and 5"],
    correctAnswer: 1,
    explanation: "Differentiation focuses on brand promotion, superior features, and higher quality materials to command a price premium. Minimizing costs and undercutting prices belong to cost leadership [cite: 214, 215]."
  },
  {
    id: 415,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Glenway Ltd sells package holidays from retail outlets. Brantham Ltd sells cars from car dealerships. Both compete for the consumer's disposable income. Glenway Ltd and Brantham Ltd are:",
    options: ["Brand competitors", "Industry competitors", "Generic competitors", "Form competitors"],
    correctAnswer: 2,
    explanation: "Generic competitors offer completely different products or services that satisfy the same basic underlying consumer need or compete for disposable income [cite: 215]."
  },
  {
    id: 416,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Hairdooz Ltd operates a chain of salons. A management consultant is reviewing the primary activities of the company using Porter's Value Chain. Which three of the following primary activities will be analyzed?",
    options: ["Procurement, Infrastructure, and Inbound Logistics", "Inbound logistics, Marketing and Sales, and Service", "Technology development, HR management, and Operations", "Infrastructure, Procurement, and Service"],
    correctAnswer: 1,
    explanation: "Primary activities in Porter's Value Chain are Inbound Logistics, Operations, Outbound Logistics, Marketing & Sales, and Service. Procurement and Infrastructure are support activities [cite: 214, 215]."
  },
  {
    id: 417,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "An external marketing consultant recommends that ABC Ltd. use the PESTEL framework during strategic planning. Which statement correctly describes why PESTEL is useful?",
    options: ["It identifies ABC Ltd.'s internal strengths and weaknesses", "It allows detailed analysis of competitive rivalry within the sector", "It acts as a comprehensive checklist to analyze influences in the macro-environment", "It categorizes stakeholders by power and interest"],
    correctAnswer: 2,
    explanation: "PESTEL is a tool used to audit the macro-external environment across Political, Economic, Social, Technological, Ecological, and Legal dimensions [cite: 214, 215]."
  },
  {
    id: 418,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "ABC Ltd. considers two strategies:Strategy (1): Offer its internal warehouse distribution capability as a service to rival supermarkets.Strategy (2): Train store staff in handling personal safety issues.Identify whether each strategy is a corporate strategy.",
    options: ["Strategy (1): A corporate strategy; Strategy (2): Not a corporate strategy", "Strategy (1): Not a corporate strategy; Strategy (2): Not a corporate strategy", "Strategy (1): A corporate strategy; Strategy (2): A corporate strategy", "Strategy (1): Not a corporate strategy; Strategy (2): A corporate strategy"],
    correctAnswer: 0,
    explanation: "Strategy 1 changes the corporate scope and business domain (entering a new service market), making it Corporate level. Strategy 2 is functional/operational (training staff) [cite: 214, 215]."
  },
  {
    id: 419,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In a draft Five Forces Analysis:Statement (1): Government subsidies for existing providers will be removed, increasing rivalry.Statement (2): Two key corporate customers merge, increasing supplier bargaining power.Identify whether each statement is accurate.",
    options: ["Statement (1) accurate; Statement (2) inaccurate", "Statement (1) inaccurate; Statement (2) inaccurate", "Statement (1) accurate; Statement (2) accurate", "Statement (1) inaccurate; Statement (2) accurate"],
    correctAnswer: 0,
    explanation: "Statement 1 is accurate because removing subsidies increases financial pressure and competitive rivalry. Statement 2 is inaccurate because customer consolidation increases buyer bargaining power, not rivalry [cite: 214, 215]."
  },
  {
    id: 420,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which of the following best defines a business strategy?",
    options: ["A short-term operational budget for departmental managers", "A long-term plan of action to achieve objectives and gain competitive advantage", "A set of strict legal regulations governing corporate conduct", "An annual financial statement showing profit and loss"],
    correctAnswer: 1,
    explanation: "Business strategy is a long-term course of action specifying resource allocation to achieve corporate goals and gain competitive advantage [cite: 214]."
  },
  {
    id: 421,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Corporate-level strategy is primarily concerned with:",
    options: ["Day-to-day scheduling of factory floor operations", "Determining how a single business unit competes in its market", "Setting the overall scope and direction of the entire organization", "Formulating promotional campaigns for individual products"],
    correctAnswer: 2,
    explanation: "Corporate strategy is the highest level of strategy, deciding the scope, overall direction, acquisitions, and resource allocation across the entity [cite: 214]."
  },
  {
    id: 422,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "The strategic business unit (SBU) level of strategy focuses on answering which core question?",
    options: ["What business domain or industries should the whole group enter?", "How do we compete successfully in a specific market?", "How many employees should be recruited this week?", "What accounting software should the finance department purchase?"],
    correctAnswer: 1,
    explanation: "SBU strategy bridges corporate and functional levels by determining competitive positioning in a given market [cite: 214]."
  },
  {
    id: 423,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Functional (operational) strategy deals with:",
    options: ["Defining corporate mission and vision statements", "Carrying out departmental functions like marketing, HR, operations, and IT to support strategic direction", "Deciding whether to liquidate or acquire overseas subsidiaries", "Analyzing macro-environmental PESTEL trends"],
    correctAnswer: 1,
    explanation: "Functional strategies execute operational plans within specific departments (marketing, finance, operations) to support business strategies [cite: 214]."
  },
  {
    id: 424,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "According to the rational/formal approach to strategic management, what is the correct sequential order of the strategic planning process?",
    options: ["Strategic Choice → Review → Strategic Analysis → Implementation", "Strategic Analysis → Strategic Choice → Implementation → Review and Control", "Implementation → Strategic Analysis → Review → Strategic Choice", "Review → Implementation → Strategic Choice → Strategic Analysis"],
    correctAnswer: 1,
    explanation: "The formal rational model follows four sequential steps: Strategic Analysis → Strategic Choice → Strategy Implementation → Review and Control [cite: 214]."
  },
  {
    id: 425,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "How does an 'emergent strategy' differ from a deliberate planned strategy?",
    options: ["Emergent strategy is rigidly planned years in advance", "Emergent strategy develops adaptively over time through experience, learning, and changing circumstances", "Emergent strategy is enforced strictly by government legislation", "Emergent strategy ignores environmental changes completely"],
    correctAnswer: 1,
    explanation: "Emergent strategy develops gradually as the organization learns, adapts, and responds dynamically to continuous environmental shifts [cite: 214]."
  },
  {
    id: 426,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "The Positioning-Based View (PBV) of strategy emphasizes that a firm's success depends primarily on:",
    options: ["Internal unique capabilities and core competencies", "External industry forces and market positioning (an outside-in perspective)", "Historical cost accounting techniques", "Employee seniority and internal hierarchy"],
    correctAnswer: 1,
    explanation: "The positioning-based view (PBV) adopts an outside-in perspective, arguing that strategic success stems from market structure and industry positioning [cite: 214]."
  },
  {
    id: 427,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "The Resource-Based View (RBV) of strategy asserts that competitive advantage originates from:",
    options: ["External PESTEL macro-factors", "Unique, valuable, and hard-to-copy internal resources and capabilities (an inside-out perspective)", "Industry price wars", "High buyer bargaining power"],
    correctAnswer: 1,
    explanation: "The resource-based view (RBV) takes an inside-out view, emphasizing internal strategic capabilities, core competencies, and valuable resources [cite: 214]."
  },
  {
    id: 428,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which of the following is a key advantage of formal strategic management?",
    options: ["Elimination of all business risks", "Ensuring a coherent response to environmental forces and optimal resource allocation", "Guaranteeing immediate short-term profitability", "Complete elimination of corporate bureaucratic structures"],
    correctAnswer: 1,
    explanation: "Strategic planning ensures aligned, long-term responses to market forces and efficient utilization of scarce organizational resources [cite: 214]."
  },
  {
    id: 429,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A potential drawback or limitation of formal strategic planning is:",
    options: ["Lack of clarity regarding corporate objectives", "The danger of creating a rigid, bureaucratic 'straitjacket' that stifles opportunism", "Reduced communication between business units", "Over-reliance on emergent feedback"],
    correctAnswer: 1,
    explanation: "Formal planning can become overly rigid, expensive, and bureaucratic, discouraging flexibility and entrepreneurial opportunism [cite: 214]."
  },
  {
    id: 430,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In a PESTEL framework, government tax policy, trade tariffs, and political stability are categorized as:",
    options: ["Economic factors", "Political factors", "Social factors", "Ecological factors"],
    correctAnswer: 1,
    explanation: "Political factors encompass government stability, tax policies, trade legislation, and regulatory frameworks [cite: 214]."
  },
  {
    id: 431,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Inflation rates, interest rates, exchange rates, and GDP growth reflect which PESTEL dimension?",
    options: ["Technological", "Economic", "Legal", "Political"],
    correctAnswer: 1,
    explanation: "Economic factors directly cover macroeconomic indicators like inflation, interest rates, economic growth, and currency exchange rates [cite: 214]."
  },
  {
    id: 432,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "An organization's 'task environment' or competitive environment includes factors of direct relevance such as:",
    options: ["Macroeconomic interest rate trends", "National demographic shifts", "Competitors, customers, suppliers, and substitutes", "Statutory employment laws"],
    correctAnswer: 2,
    explanation: "The micro/task environment consists of factors directly affecting the business: suppliers, customers, competitors, and substitutes [cite: 214]."
  },
  {
    id: 433,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Which of Michael Porter's Five Forces assesses the risk of customers switching to alternative product types outside the industry?",
    options: ["Threat of new entrants", "Threat of substitute products", "Bargaining power of suppliers", "Competitive rivalry"],
    correctAnswer: 1,
    explanation: "Substitutes are alternative products or services from outside the industry that meet the same basic customer needs [cite: 214]."
  },
  {
    id: 434,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Supplier bargaining power is likely to be HIGH when:",
    options: ["There are many alternative suppliers available", "The supplier group is concentrated and switching costs are high", "The buyer purchases in extremely large volumes", "Substitute products are readily available at low prices"],
    correctAnswer: 1,
    explanation: "Suppliers hold high power when the supply market is dominated by a few firms, switching costs are high, or no substitutes exist [cite: 214]."
  },
  {
    id: 435,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Buyer bargaining power is heightened when:",
    options: ["Customers buy in small, isolated quantities", "The customer base consists of a few large-volume buyers", "Products offered by suppliers are highly differentiated", "Switching costs between suppliers are extremely high"],
    correctAnswer: 1,
    explanation: "A concentrated customer base purchasing large volumes gives buyers significant leverage to demand lower prices and better terms [cite: 214]."
  },
  {
    id: 436,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In Porter's Value Chain, inbound logistics refers to:",
    options: ["Transforming inputs into finished products", "Receiving, storing, and handling raw material inputs internally", "Storing and physically distributing finished goods to customers", "After-sales service and customer support"],
    correctAnswer: 1,
    explanation: "Inbound logistics involves receiving, storing, warehousing, and inventory control of incoming raw materials [cite: 214]."
  },
  {
    id: 437,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In Porter's Value Chain, which of the following is classified as a SUPPORT activity?",
    options: ["Operations", "Outbound logistics", "Procurement", "Marketing and Sales"],
    correctAnswer: 2,
    explanation: "Procurement, Technology Development, Human Resource Management, and Firm Infrastructure are support activities [cite: 214]."
  },
  {
    id: 438,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Supply Chain Management (SCM) focuses on:",
    options: ["Internal accounting audit trails only", "Optimizing the sequence of activities across connected businesses to produce and deliver goods/services efficiently", "Setting board-level executive compensation", "Conducting PESTEL macro-environmental reviews"],
    correctAnswer: 1,
    explanation: "SCM optimizes inter-organizational processes from raw material extraction through final delivery to end consumers [cite: 214]."
  },
  {
    id: 439,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "During which stage of the Product Life Cycle (PLC) are unit costs high and the product typically a loss-maker?",
    options: ["Growth", "Introduction", "Maturity", "Decline"],
    correctAnswer: 1,
    explanation: "In the Introduction phase, sales volumes are low, fixed development/launch costs are high, and the product usually incurs losses [cite: 214]."
  },
  {
    id: 440,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A product characterized by rapidly rising sales volume, falling unit costs, and initial profitability is in which PLC stage?",
    options: ["Introduction", "Growth", "Maturity", "Decline"],
    correctAnswer: 1,
    explanation: "The Growth phase features rapid market adoption, economies of scale reducing unit costs, and profit generation [cite: 214]."
  },
  {
    id: 441,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In the BCG Matrix, a product with HIGH market share in a LOW-growth market is classified as a:",
    options: ["Star", "Question Mark", "Cash Cow", "Dog"],
    correctAnswer: 2,
    explanation: "Cash Cows have high relative market share in mature, low-growth industries, generating substantial net cash inflows [cite: 214]."
  },
  {
    id: 442,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In the BCG Matrix, a product with LOW market share in a LOW-growth market is termed a:",
    options: ["Star", "Cash Cow", "Dog", "Question Mark"],
    correctAnswer: 2,
    explanation: "Dogs hold low market share in mature or declining low-growth markets and typically yield minimal profit or net cash losses [cite: 214]."
  },
  {
    id: 443,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In a SWOT analysis, internal factors evaluated by the firm are:",
    options: ["Opportunities and Threats", "Strengths and Weaknesses", "Strengths and Threats", "Weaknesses and Opportunities"],
    correctAnswer: 1,
    explanation: "Strengths and Weaknesses represent internal capabilities, whereas Opportunities and Threats stem from the external environment [cite: 214]."
  },
  {
    id: 444,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A 'Resource Audit' evaluates:",
    options: ["Macro-environmental political trends", "How effectively and efficiently an entity's internal resources are utilized", "External competitor reaction profiles", "General customer satisfaction ratings"],
    correctAnswer: 1,
    explanation: "A resource audit examines the quantity, quality, and effectiveness of an organization's internal assets and resources [cite: 214]."
  },
  {
    id: 445,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In stakeholder mapping, 'Power' is defined as:",
    options: ["The stakeholder's interest in company affairs", "The stakeholder's capacity to influence or dictate the organization's corporate objectives", "The amount of shares owned by retail investors", "The legal liability of directors"],
    correctAnswer: 1,
    explanation: "Power reflects a stakeholder's leverage and capacity to influence, persuade, or compel the organization to alter its goals [cite: 214]."
  },
  {
    id: 446,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "An internal source of stakeholder power includes:",
    options: ["External legal rights and legislation", "Position in the formal organizational hierarchy", "External supply chain links", "Government regulatory oversight"],
    correctAnswer: 1,
    explanation: "Internal power sources stem from formal hierarchical position, key expertise, or control over internal resource allocations [cite: 214]."
  },
  {
    id: 447,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "A corporate 'Mission Statement' is best described as:",
    options: ["A detailed daily operational checklist for workers", "A formal statement defining the fundamental purpose, scope, and values of the business", "An annual tax return filed with government authorities", "A confidential document accessible only to board chairs"],
    correctAnswer: 1,
    explanation: "A mission statement formally articulates an organization's core purpose, strategy, values, and standards of behavior [cite: 214]."
  },
  {
    id: 448,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Porter's Cost Leadership strategy aims to achieve competitive advantage by:",
    options: ["Offering unique, premium-priced custom features", "Becoming the lowest-cost producer in the industry through scale economies and efficient technology", "Targeting a tiny market niche with high prices", "Relying exclusively on emotional branding"],
    correctAnswer: 1,
    explanation: "Cost leadership seeks industry-wide cost supremacy through operational efficiency, scale economies, and tight cost control [cite: 214]."
  },
  {
    id: 449,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "Porter's Differentiation strategy focuses on:",
    options: ["Minimizing all R&D expenses to undercut rivals", "Creating products perceived as unique across the industry, enabling premium pricing", "Serving a single geographic market at cost price", "Standardizing products with minimal features"],
    correctAnswer: 1,
    explanation: "Differentiation achieves competitive advantage by delivering superior value or unique features that justify a price premium [cite: 214]."
  },
  {
    id: 450,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "In the Johnson and Scholes framework, evaluating 'Feasibility' addresses:",
    options: ["Whether the strategy fits the external environment", "Whether the organization possesses the practical resources, skills, and funding to execute the strategy successfully", "Whether shareholders will accept the financial return", "Whether the strategy complies with tax laws"],
    correctAnswer: 1,
    explanation: "Feasibility assesses practical execution capabilities: availability of financial resources, skills, operational capacity, and technology [cite: 214]."
  },
  {
    id: 451,
    chapter: "Chapter 4: Introduction to Business Strategy",
    question: "An 'Operational Plan' specifies:",
    options: ["10-year strategic corporate growth directions", "Detailed short-term functional expectations and specific daily/weekly actions required across departments", "Group-level acquisition strategies", "Macro-environmental forecasting"],
    correctAnswer: 1,
    explanation: "Operational plans convert overall business plans into concrete, short-term departmental targets, tasks, and budgets [cite: 214]."
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

const btfChapter7Questions = [
  {
    id: 702,
    chapter: "Chapter 7: Business Finance",
    question: "What is a primary capital market defined as in business finance?",
    options: ["A short-term wholesale market for securities maturing within one year", "A market where new securities are bought and sold for the first time to raise fresh funds", "A market where existing securities are traded between investors without raising new funds for the issuer", "A market providing standardised contracts to buy commodities at a future date"],
    correctAnswer: 1,
    explanation: "Primary capital markets enable companies and governments to raise new long-term finance by issuing new shares or bonds for the first time, whereas secondary markets trade existing securities."
  },
  {
    id: 703,
    chapter: "Chapter 7: Business Finance",
    question: "Which of the following contractual relationships between a bank and its customer arises when the bank accepts customer property for storage in its safe deposit box?",
    options: ["Receivables / Payables", "Principal / Agent", "Bailor / Bailee", "Mortgagor / Mortgagee"],
    correctAnswer: 2,
    explanation: "Under a bailor/bailee relationship, the customer (bailor) deposits physical property with the bank (bailee), which undertakes to take reasonable care to safeguard it against loss or damage."
  },
  {
    id: 704,
    chapter: "Chapter 7: Business Finance",
    question: "Financial instruments with maturities of less than one year—such as Treasury bills, certificates of deposit, and commercial paper—are traded in which market?",
    options: ["The money market", "The equity capital market", "The Alternative Investment Market (AIM)", "The primary bond market"],
    correctAnswer: 0,
    explanation: "The money market is a short-term wholesale market dealing in liquid debt instruments with maturities of up to one year."
  },
  {
    id: 705,
    chapter: "Chapter 7: Business Finance",
    question: "Which of the following is an example of an institutional investor?",
    options: ["The Bank of England", "The Financial Reporting Council (FRC)", "The Financial Conduct Authority (FCA)", "A unit trust"],
    correctAnswer: 3,
    explanation: "Institutional investors (such as unit trusts, pension funds, and insurance companies) pool funds from individuals to invest in financial assets; the other options are central banking or regulatory bodies."
  },
  {
    id: 706,
    chapter: "Chapter 7: Business Finance",
    question: "Which source of finance can a profitable company draw on most easily and cheaply in practice without affecting its control structure?",
    options: ["Cash generated from retained earnings", "Initial Public Offering (IPO) of new shares", "Rights issue to existing shareholders", "Secured long-term bank loan"],
    correctAnswer: 0,
    explanation: "Retained earnings require no issue costs, no external shareholder approval or prospectus, and do not dilute existing ownership or control."
  },
  {
    id: 707,
    chapter: "Chapter 7: Business Finance",
    question: "Which of the following is classified as a source of long-term finance (typically over five years)?",
    options: ["Trade credit from suppliers", "Bank overdraft facility", "Debt factoring of trade receivables", "Commercial mortgage on property"],
    correctAnswer: 3,
    explanation: "A commercial mortgage is secured on land or buildings and typically runs for 5 to 25+ years, whereas trade credit, overdrafts, and factoring are short-term working capital sources."
  },
  {
    id: 708,
    chapter: "Chapter 7: Business Finance",
    question: "What does the financial intermediation function of 'maturity transformation' achieve?",
    options: ["Converting foreign currencies into domestic currency at fixed rates", "Bridging the gap between lenders who want short-term liquidity and borrowers who need long-term funds", "Eliminating all credit risk from corporate bond issues", "Transforming equity shares into redeemable preference shares"],
    correctAnswer: 1,
    explanation: "Financial intermediaries aggregate short-term deposits from savers and lend them out for longer periods to businesses, matching differing time preferences."
  },
  {
    id: 709,
    chapter: "Chapter 7: Business Finance",
    question: "Which body within the Bank of England is specifically responsible for monitoring and removing systemic risks to protect the stability and resilience of the UK's financial system as a whole?",
    options: ["Monetary Policy Committee (MPC)", "Financial Conduct Authority (FCA)", "Financial Policy Committee (FPC)", "Prudential Regulation Authority (PRA)"],
    correctAnswer: 2,
    explanation: "The FPC oversees macro-prudential stability across the entire financial system; the PRA supervises individual banks/insurers, the FCA regulates conduct, and the MPC sets interest rates."
  },
  {
    id: 710,
    chapter: "Chapter 7: Business Finance",
    question: "Which method of obtaining a stock exchange listing involves the company selling new shares directly to the general public rather than through an issuing house?",
    options: ["Offer for sale", "Placing", "Introduction", "Offer for subscription (direct offer)"],
    correctAnswer: 3,
    explanation: "In an offer for subscription, the company invites the public to subscribe directly for new shares; in an offer for sale, an issuing house buys the shares first and sells them to the public."
  },
  {
    id: 711,
    chapter: "Chapter 7: Business Finance",
    question: "Under the four-tier matching principle of business finance, which type of finance should ideally be used to fund permanent increases in inventory and trade receivables as a business expands?",
    options: ["Immediate finance", "Short-term finance", "Medium-term finance", "Equity share capital only"],
    correctAnswer: 2,
    explanation: "According to the matching principle: immediate finance covers daily expenses/wages; short-term finance covers trade payables; medium-term finance funds growing inventory, receivables, and tax; long-term finance funds non-current assets."
  },
  {
    id: 712,
    chapter: "Chapter 7: Business Finance",
    question: "RapidMove Ltd, a family-owned logistics and removals company, is facing an acute short-term liquidity crunch due to delayed customer payments and needs an immediate cash injection to pay fuel and driver wages. Which of the following would be classified as an appropriate source of short-term finance for RapidMove Ltd?",
    options: ["Issuing new ordinary share capital", "Taking out a 7-year fixed-rate bank term loan", "Entering into a debt factoring arrangement", "Arranging a 15-year commercial mortgage on its depot"],
    correctAnswer: 2,
    explanation: "Debt factoring provides short-term finance (typically advancing up to 80% of approved invoice value immediately) to bridge working capital gaps, whereas shares, term loans, and mortgages are long-term."
  },
  {
    id: 713,
    chapter: "Chapter 7: Business Finance",
    question: "A financial consultant advising Apex Traders makes three statements regarding the legal relationships between a commercial bank and its business customers:Statement (1): In a fiduciary relationship, the bank is expected to act with good faith and honesty when advising the customer.Statement (2): In a mortgagor/mortgagee relationship, the bank asks the customer to secure a loan by taking a charge over the customer's liabilities.Statement (3): In a receivables/payables relationship, the bank owes money to the customer when the customer's current account is in credit.Which of the above statements are true?",
    options: ["Statements (1) and (2) only", "Statements (2) and (3) only", "Statements (1) and (3) only", "Statements (1), (2) and (3)"],
    correctAnswer: 2,
    explanation: "Statements (1) and (3) are accurate. Statement (2) is false because a mortgage charge is taken over the customer's assets (such as property), not their liabilities."
  },
  {
    id: 714,
    chapter: "Chapter 7: Business Finance",
    question: "BioNova Therapeutics Ltd, an unlisted biotechnology start-up developing a breakthrough diagnostic device, is seeking £4 million in venture capital funding. During negotiations, BioNova's founders discuss what to expect from the venture capital firm. Which of the following statements about venture capital in this scenario is true?",
    options: ["The venture capitalist will refuse to take a seat on BioNova's board to remain completely passive.", "The venture capitalist will expect BioNova's existing founders to bear a substantial share of the business risk.", "Venture capital is a low-risk, low-return source of finance suitable for routine factory maintenance.", "The venture capitalist will only exit its investment by forcing BioNova into liquidation after three years."],
    correctAnswer: 1,
    explanation: "Venture capitalists take high risks for high returns, frequently require a seat on the board to monitor their investment, expect founders to bear substantial risk, and commonly exit via a stock market flotation or trade sale."
  },
  {
    id: 715,
    chapter: "Chapter 7: Business Finance",
    question: "Sterling Holdings plc is planning to raise £50 million of new equity capital via a rights issue to existing shareholders. Although the shares are offered at a 20% discount to the current market price, the Finance Director insists on paying a fee to an investment bank to underwrite the issue. Why is a rights issue normally underwritten in practice?",
    options: ["Because stock exchange regulations legally prohibit un-underwritten rights issues.", "Because existing shareholders are legally barred from selling their rights nil-paid on the market.", "To guarantee that the company receives the full target funds even if market prices fall and shareholders fail to take up their rights.", "Because underwriting eliminates the need to issue a prospectus or circular to shareholders."],
    correctAnswer: 2,
    explanation: "Even when priced at a discount, a sudden market downturn could push the share price below the issue price, causing shareholders not to exercise their rights; underwriters agree to buy any unsubscribed shares."
  },
  {
    id: 716,
    chapter: "Chapter 7: Business Finance",
    question: "Horizon Tech plc is preparing to float its shares on the Main Market of the London Stock Exchange for the first time. Its corporate finance advisers present four equity issue mechanisms:(1) Offer for sale(2) Placing(3) Rights issue(4) Offer for subscriptionWhich of these methods can Horizon Tech plc use to obtain a new stock exchange listing?",
    options: ["1, 2 and 3 only", "2, 3 and 4 only", "1, 2 and 4 only", "1, 3 and 4 only"],
    correctAnswer: 2,
    explanation: "Offers for sale, placings, and offers for subscription (plus introductions) are methods for obtaining an initial listing; a rights issue is only used by companies that already have listed shares."
  },
  {
    id: 717,
    chapter: "Chapter 7: Business Finance",
    question: "The founding family of Crestline Retail Ltd has decided to take the company public by listing its shares on the London Stock Exchange. One family member asks how the listing will directly benefit them as existing shareholders. Which of the following is a primary advantage to the shareholders of obtaining a stock exchange listing?",
    options: ["Statutory financial disclosure and corporate governance requirements are significantly reduced.", "The company is automatically guaranteed to pay higher annual dividends.", "Their shares become much more readily marketable and easier to value or sell for cash.", "The company gains the legal right to use 'plc' after its name for the first time."],
    correctAnswer: 2,
    explanation: "Listing creates liquidity and a transparent market price for shareholders. Disclosure increases (not decreases), dividends are not guaranteed, and a company must already be a plc before applying for a listing."
  },
  {
    id: 718,
    chapter: "Chapter 7: Business Finance",
    question: "Meridian Manufacturing Ltd is considering acquiring five heavy CNC milling machines costing £1.2 million. Instead of buying them outright, the Finance Director proposes a 5-year finance lease arrangement with an equipment leasing company. Which of the following statements about this lease arrangement is incorrect?",
    options: ["The primary lease period may be shorter than the total useful economic life of the machines.", "Meridian Manufacturing Ltd will effectively pay interest embedded within the periodic lease rentals.", "Meridian Manufacturing Ltd acquires outright legal ownership of the machines from the moment they are delivered.", "Under an operating lease alternative, the lessor would typically remain responsible for repairs and maintenance."],
    correctAnswer: 2,
    explanation: "In a lease, legal title to the asset remains with the lessor (the leasing company), not the lessee, even though the lessee enjoys physical possession and economic use."
  },
  {
    id: 719,
    chapter: "Chapter 7: Business Finance",
    question: "Apex Venture Partners is evaluating four investment proposals submitted by different businesses. Given the typical investment criteria of venture capital organisations, in which of the following projects would Apex Venture Partners be least likely to invest?",
    options: ["A newly formed fintech start-up developing an AI credit-scoring platform.", "A management buyout (MBO) of a profitable engineering division from a conglomerate.", "Routine renovation and repainting of an established textile factory's existing warehouse.", "A rapidly growing e-commerce company seeking capital to expand into three European markets."],
    correctAnswer: 2,
    explanation: "Venture capital targets high-risk, high-growth opportunities (start-ups, MBOs, rapid expansion). Routine renovation of an existing facility offers low incremental return and is normally funded via retained earnings or bank debt."
  },
  {
    id: 720,
    chapter: "Chapter 7: Business Finance",
    question: "Thames Valley Exports Ltd has just signed a contract to ship £250,000 worth of specialised medical instruments to a new buyer in South America. To ensure payment is guaranteed once shipping documents are presented, Thames Valley Exports asks the buyer's bank to issue a specific trade finance document authorising Thames Valley's bank to draw funds upon meeting stated shipping conditions. What is this document called?",
    options: ["A bill of exchange", "An export credit guarantee", "A commercial invoice", "A letter of credit"],
    correctAnswer: 3,
    explanation: "A letter of credit is issued by a bank on behalf of an importer, undertaking to pay the exporter a specified sum once stipulated documentary conditions (such as bills of lading) are fulfilled."
  },
  {
    id: 721,
    chapter: "Chapter 7: Business Finance",
    question: "SwiftBuild Contractors Ltd has experienced rapid sales growth and has outsourced its sales ledger management to Zenith Factors plc on a non-recourse basis. Which of the following activities is Zenith Factors plc least likely to perform for SwiftBuild Contractors Ltd?",
    options: ["Advancing 80% of the approved invoice value immediately upon invoice issue and the balance upon customer settlement.", "Taking over administrative responsibility for sending statements and chasing overdue receivables.", "Deciding unilaterally what commercial credit limits SwiftBuild should offer to its customers without client agreement.", "Absorbing the financial loss if an approved customer debt becomes irrecoverable."],
    correctAnswer: 2,
    explanation: "While factors assess creditworthiness and set limits on what they will finance, setting commercial credit policy for customers remains a core trading decision of the client business."
  },
  {
    id: 722,
    chapter: "Chapter 7: Business Finance",
    question: "Northstar Logistics plc has £300,000 in surplus cash earmarked for a depot expansion project scheduled to commence in 60 days, though the exact payment dates remain uncertain. The Treasurer wants to invest this cash in the interim to earn a return while preserving capital and liquidity. Which of the following is the least appropriate use of these funds?",
    options: ["Purchasing listed ordinary equities on the stock market", "Buying 60-day UK Treasury bills", "Placing funds in a short-term notice bank deposit account", "Placing funds in a short-term local authority deposit"],
    correctAnswer: 0,
    explanation: "Equities experience high short-term price volatility and risk capital loss over a 60-day horizon; Treasury bills and short-term bank/local authority deposits offer safety and liquidity."
  },
  {
    id: 723,
    chapter: "Chapter 7: Business Finance",
    question: "GreenSprout Foods Ltd, an artisanal vegan snack producer, wants to raise £150,000 to fund a new packaging line. Instead of approaching a bank or institutional investor, the founders list their project on an online platform, inviting hundreds of individual retail backers to contribute small sums in exchange for equity shares. Which source of finance is GreenSprout Foods Ltd using?",
    options: ["Alternative Investment Market (AIM) flotation", "Business angel syndication", "Institutional private placement", "Equity crowdfunding"],
    correctAnswer: 3,
    explanation: "Crowdfunding involves raising specific sums of money from a large number of individuals ('the crowd'), typically via internet platforms, in exchange for equity, debt, or rewards."
  },
  {
    id: 724,
    chapter: "Chapter 7: Business Finance",
    question: "An investment manager at Crown Asset Management holds a 30-year UK Government Treasury bond that was originally issued six months ago. The manager now wishes to sell this bond to rebalance a client portfolio. In which two market categories will this sale take place?",
    options: ["The money market and the primary market", "The money market and the secondary market", "The capital market and the primary market", "The capital market and the secondary market"],
    correctAnswer: 3,
    explanation: "Because the bond has an original maturity exceeding one year (30 years), it belongs to the capital market; because it was already issued six months ago and is being resold between investors, it trades in the secondary market."
  },
  {
    id: 725,
    chapter: "Chapter 7: Business Finance",
    question: "Solaris Energy Ltd is comparing two corporate bonds with identical credit ratings and risk profiles: Bond X matures in 9 months, whereas Bond Y matures in 12 years. Under normal yield curve conditions, what should Solaris Energy Ltd expect regarding the interest yield on Bond Y compared to Bond X?",
    options: ["Normally higher, to compensate investors for tying up capital longer and facing greater interest rate/inflation risk", "Normally lower, because long-term borrowers receive a bulk duration discount", "Exactly the same, because both bonds carry identical default risk", "Impossible to predict, because maturity has no theoretical relationship with interest rates"],
    correctAnswer: 0,
    explanation: "A normal upward-sloping yield curve means long-term interest rates are usually higher than short-term rates due to liquidity preference and greater exposure to inflation and interest rate risk over time."
  },
  {
    id: 726,
    chapter: "Chapter 7: Business Finance",
    question: "Britannia Precision Tools plc has recently secured its first major export order to an overseas distributor in Eastern Europe. Because the distributor has no prior trading history with Britannia, the Finance Director arranges a specialized insurance policy to protect against the risk that the overseas buyer fails to pay for the goods after delivery. What specific trading risk is Britannia insuring against?",
    options: ["Physical risk", "Credit risk", "Liquidity risk", "Foreign exchange translation risk"],
    correctAnswer: 1,
    explanation: "Credit risk is the risk of financial loss arising from a customer defaulting on payment obligations; physical risk involves damage/loss in transit, and liquidity risk is the inability to finance credit given."
  },
  {
    id: 727,
    chapter: "Chapter 7: Business Finance",
    question: "Delta Electronics plc wants to protect itself against bad debts without handing over control of its sales ledger administration to a third party. A financial institution offers a contract whereby Delta pays an annual premium, and in return, the institution agrees to reimburse Delta if any insured customer defaults on payment. What service is being offered to Delta Electronics plc?",
    options: ["Non-recourse debt factoring", "Invoice discounting", "Receivables (credit) insurance", "Recourse debt factoring"],
    correctAnswer: 2,
    explanation: "Paying a premium purely to indemnify against irrecoverable customer debts—without sales ledger administration or immediate cash advances—is credit/receivables insurance."
  },
  {
    id: 728,
    chapter: "Chapter 7: Business Finance",
    question: "Titan Steel plc is issuing a new tranche of corporate debt securities. Each security has a nominal (par) value of £10,000, pays a fixed annual coupon of 5%, and will be redeemed by Titan Steel plc in five years at £9,500. Which of the following accurately describes this instrument?",
    options: ["A floating rate note redeemed at a £500 premium", "A fixed-rate bond redeemed at a £500 premium", "A floating rate note redeemed at a £500 discount", "A fixed-rate bond redeemed at a £500 discount"],
    correctAnswer: 3,
    explanation: "Because the interest rate is fixed at 5%, it is a fixed-rate bond (not a floating rate note). Because the redemption price (£9,500) is below the £10,000 par value, it is redeemed at a £500 discount."
  },
  {
    id: 729,
    chapter: "Chapter 7: Business Finance",
    question: "EcoGrid Renewables plc plans to issue £100 million of 'Green Bonds' to institutional investors and wants the issue to align with the ICMA Green Bond Principles. Which two of the following statements accurately reflect the requirements of the Green Bond Principles?(1) Legal documentation must specify that proceeds will fund projects with clear environmental benefits.(2) Proceeds may only be used for climate change mitigation and cannot fund biodiversity conservation.(3) Net proceeds must be credited to a separate sub-account or tracked transparently by the issuer.(4) The bonds must be listed exclusively on the Luxembourg Green Exchange.",
    options: ["1 and 2 only", "1 and 3 only", "2 and 4 only", "3 and 4 only"],
    correctAnswer: 1,
    explanation: "The four core components of the Green Bond Principles are: Use of Proceeds (clear environmental benefits in legal docs), Process for Project Evaluation/Selection, Management of Proceeds (separate account/tracking), and Reporting. Eligible projects include biodiversity and pollution prevention, and no specific exchange listing is mandated."
  },
  {
    id: 730,
    chapter: "Chapter 7: Business Finance",
    question: "An extract from the Statement of Financial Position of Waverley Manufacturing Ltd shows:- Inventory: £20,000- Trade receivables: £21,000- Cash and cash equivalents: £5,000- Total current assets: £46,000- Trade payables: £15,000- Tax payable: £4,000- Total current liabilities: £19,000Based on the proportion of current assets financed by short-term liabilities versus long-term capital, which working capital financing policy has Waverley Manufacturing Ltd adopted?",
    options: ["Aggressive financing approach", "Moderate (matching) financing approach", "Defensive (conservative) financing approach", "Overtrading financing approach"],
    correctAnswer: 2,
    explanation: "Only 41.3% (£19,000 / £46,000) of Waverley's current assets are funded by current liabilities, while the remaining 58.7% (£27,000 net working capital) is funded by stable long-term finance—characteristic of a defensive policy."
  },
  {
    id: 731,
    chapter: "Chapter 7: Business Finance",
    question: "Contrast plc has total current assets of £500,000 (of which £300,000 represents permanent core working capital and £200,000 represents seasonal fluctuating current assets). Contrast plc finances £420,000 of its current assets using a short-term bank overdraft and trade payables, and only £80,000 using long-term capital. What is the key risk of this aggressive financing policy?",
    options: ["Excessively high interest costs caused by holding idle long-term debt during off-peak seasons", "High refinancing and liquidity risk if short-term overdraft facilities are withdrawn or interest rates spike", "Dilution of existing shareholders' voting control due to excessive equity issuance", "Inability to claim tax relief on long-term debenture interest"],
    correctAnswer: 1,
    explanation: "An aggressive approach uses short-term finance to fund even permanent current assets, creating lower financing costs in normal times but exposing the firm to severe liquidity/renewal risk."
  },
  {
    id: 732,
    chapter: "Chapter 7: Business Finance",
    question: "Aldergate Retail Group has agreed on a £2 million bank overdraft facility with its commercial bank to manage seasonal cash swings. During a board briefing, the Finance Director makes four statements about the overdraft:(1) Interest is charged daily only on the actual overdrawn balance, not on the full £2 million limit.(2) Legal documentation is minimal compared to a syndicated term loan.(3) The facility is legally repayable on demand by the bank.(4) Banks never ask for security or collateral on an overdraft facility.Which of these statements are true?",
    options: ["1, 2 and 3 only", "2, 3 and 4 only", "1, 2 and 4 only", "1, 3 and 4 only"],
    correctAnswer: 0,
    explanation: "Statements 1, 2, and 3 are correct features of an overdraft. Statement 4 is false because banks frequently require fixed or floating charges over business assets (or personal guarantees) for substantial overdrafts."
  },
  {
    id: 733,
    chapter: "Chapter 7: Business Finance",
    question: "Kestrel Engineering Ltd is negotiating a £5 million 5-year term loan from MetroBank plc. To protect itself against default, MetroBank insists on taking a 'floating charge' over Kestrel's inventory and trade receivables, alongside a 'fixed charge' over Kestrel's freehold factory. What is a key practical difference between these two charges for Kestrel Engineering Ltd?",
    options: ["Kestrel cannot sell any inventory in the ordinary course of business without MetroBank's prior written consent.", "Kestrel can continue to buy and sell inventory in the ordinary course of business until a default event causes the floating charge to crystallise.", "A floating charge ranks ahead of a fixed charge upon liquidation of the company.", "Only sole traders and partnerships can grant floating charges, whereas limited companies cannot."],
    correctAnswer: 1,
    explanation: "A floating charge hovers over a changing class of assets (like inventory), allowing the company to trade normally until default triggers crystallisation; a fixed charge attaches to specific assets (freehold property) preventing disposal without lender consent."
  },
  {
    id: 734,
    chapter: "Chapter 7: Business Finance",
    question: "During a severe downturn in the commercial property sector, Oakwood Developments Ltd defaults on its loan repayments. The company has issued both secured debentures (with a fixed charge over land), unsecured loan stock, preference shares, and ordinary shares. In the event of liquidation, in what order will these capital providers be repaid from the realisation of assets?",
    options: ["Ordinary shareholders -> Preference shareholders -> Unsecured loan stock -> Secured debenture holders", "Secured debenture holders -> Unsecured loan stock -> Preference shareholders -> Ordinary shareholders", "Secured debenture holders -> Preference shareholders -> Unsecured loan stock -> Ordinary shareholders", "Unsecured loan stock -> Secured debenture holders -> Ordinary shareholders -> Preference shareholders"],
    correctAnswer: 1,
    explanation: "Creditors rank ahead of shareholders in liquidation: fixed-charge secured creditors are paid first, followed by unsecured creditors, then preference shareholders, and finally ordinary shareholders (residual claimants)."
  },
  {
    id: 735,
    chapter: "Chapter 7: Business Finance",
    question: "Beacon Media plc wishes to raise £12 million of long-term debt finance from institutional investors. However, Beacon's Treasurer is concerned that locking into a high fixed interest rate today will be costly if central bank interest rates fall over the next three years. Which debt instrument would best address the Treasurer's concern?",
    options: ["Zero-coupon deep discount bonds", "Irredeemable preference shares", "Floating Rate Notes (FRNs)", "Convertible loan stock with a fixed 9% coupon"],
    correctAnswer: 2,
    explanation: "Floating Rate Notes carry a variable interest rate periodically reset in line with a benchmark market rate (such as SONIA), allowing the borrower's interest cost to fall if market rates decline."
  },
  {
    id: 736,
    chapter: "Chapter 7: Business Finance",
    question: "OmniTech plc has issued £20 million of 6% Convertible Loan Stock redeemable in 2029, giving bondholders the option to convert each £100 of nominal debt into 25 ordinary shares in 2028. From OmniTech plc's perspective, what is a major advantage of issuing convertible debt rather than straight bonds?",
    options: ["Convertible debt never requires interest payments prior to conversion.", "Investors accept a lower coupon interest rate in exchange for the upside potential of equity conversion, and if converted, the company avoids cash redemption.", "Convertible debt is treated as permanent equity from day one, immediately reducing gearing ratios.", "Bondholders are legally forced to convert into shares even if the share price collapses."],
    correctAnswer: 1,
    explanation: "The embedded equity option makes convertibles attractive to investors at a lower coupon rate than straight debt, and conversion turns debt into equity without cash outflow."
  },
  {
    id: 737,
    chapter: "Chapter 7: Business Finance",
    question: "Silverline Airlines plc needs to acquire three new regional aircraft costing $90 million. To preserve cash reserves and avoid large upfront capital outlays, the airline considers two options: (1) a Sale and Leaseback of its existing headquarters building, or (2) Hire Purchase for the aircraft. Which statement accurately distinguishes Hire Purchase from a standard Operating Lease?",
    options: ["Under Hire Purchase, legal ownership passes to Silverline Airlines upon payment of the final instalment, whereas under an Operating Lease ownership never transfers.", "Under an Operating Lease, Silverline Airlines can claim capital allowances (tax depreciation) as the legal owner from day one.", "Hire Purchase agreements are strictly limited to periods of less than 12 months.", "Under Hire Purchase, the finance company remains responsible for all routine aircraft maintenance and insurance."],
    correctAnswer: 0,
    explanation: "Hire purchase is an instalment purchase where title passes to the buyer after the final payment (and optional purchase fee), whereas an operating lease is a pure rental arrangement."
  },
  {
    id: 738,
    chapter: "Chapter 7: Business Finance",
    question: "Vanguard Publishing plc has a current share price of £4.00 and 10 million ordinary shares in issue. To fund an acquisition, the board announces a 1-for-4 rights issue at a subscription price of £3.00 per new share. Assuming all rights are taken up and no other market factors intervene, what is the Theoretical Ex-Rights Price (TERP) per share?",
    options: ["£3.50", "£3.75", "£3.80", "£3.20"],
    correctAnswer: 2,
    explanation: "4 existing shares at £4.00 = £16.00; 1 new share at £3.00 = £3.00. Total value of 5 shares = £19.00. TERP = £19.00 / 5 = £3.80 per share."
  },
  {
    id: 739,
    chapter: "Chapter 7: Business Finance",
    question: "Continuing from Q37, an individual investor holds 400 shares in Vanguard Publishing plc prior to the 1-for-4 rights issue (current price £4.00, rights price £3.00, TERP £3.80). The investor has no spare cash to subscribe for the new shares and decides to sell all her rights 'nil-paid' on the stock market. What is the theoretical value of her rights per new share, and what happens to her total wealth?",
    options: ["£0.80 per new share; her total wealth remains unchanged at £1,600", "£1.00 per new share; her total wealth increases to £1,700", "£0.20 per new share; her total wealth falls to £1,520", "£0.80 per new share; her total wealth falls by £80"],
    correctAnswer: 0,
    explanation: "Theoretical value of a right = TERP (£3.80) - Issue Price (£3.00) = £0.80 per new share. For 100 rights, she receives £80 cash, plus 400 shares worth £3.80 (£1,520) = £1,600 total wealth (unchanged)."
  },
  {
    id: 740,
    chapter: "Chapter 7: Business Finance",
    question: "Kensington Heritage plc is a well-established, profitable private company whose shares are already widely held by over 300 wealthy individuals and institutions. The board wishes to obtain a listing on the London Stock Exchange purely to provide liquidity for existing shareholders, without raising any new capital or issuing new shares. Which listing method is most appropriate?",
    options: ["Offer for sale by tender", "Placing", "Stock Exchange Introduction", "Rights issue"],
    correctAnswer: 2,
    explanation: "An introduction is used when a company's shares are already widely held and it seeks a listing without raising fresh capital or issuing new shares."
  },
  {
    id: 741,
    chapter: "Chapter 7: Business Finance",
    question: "The Financial Conduct Authority (FCA) and the Prudential Regulation Authority (PRA) operate the UK's 'twin peaks' financial regulatory framework. During a compliance review at Sterling Bank plc, regulators examine (1) whether the bank holds sufficient capital buffers against loan losses, and (2) whether the bank's retail mortgage advisers treat customers fairly. Which regulator oversees each area?",
    options: ["(1) FCA; (2) PRA", "(1) PRA; (2) FCA", "(1) Monetary Policy Committee; (2) Financial Reporting Council", "(1) Financial Policy Committee; (2) London Stock Exchange"],
    correctAnswer: 1,
    explanation: "The PRA (part of the Bank of England) handles prudential supervision (capital adequacy and safety/soundness of banks and insurers), while the FCA regulates market conduct and consumer protection."
  },
  {
    id: 742,
    chapter: "Chapter 7: Business Finance",
    question: "GlobalTech Components Ltd imports microchips from Taiwan and exports assembled circuit boards to Germany. During the year, the company encounters four distinct international trading problems:(1) A shipping container of microchips is damaged during a typhoon at sea.(2) A German customer goes bankrupt 60 days after receiving goods on open account.(3) GlobalTech runs out of cash to pay its own staff because customers take 90 days to settle invoices.(4) A sudden change in customs tariffs makes exports to Germany uncompetitive.Which problem represents 'liquidity risk' in international trade?",
    options: ["Problem (1)", "Problem (2)", "Problem (3)", "Problem (4)"],
    correctAnswer: 2,
    explanation: "In international trade risks: (1) is physical risk, (2) is credit risk, (3) is liquidity risk (inability to finance the credit period extended to buyers), and (4) is trade/political risk."
  },
  {
    id: 743,
    chapter: "Chapter 7: Business Finance",
    question: "Atlas Machinery Ltd has sold €400,000 of industrial equipment to an importer in Italy on 90 days' credit. To obtain immediate cash, Atlas draws a formal written order addressed to the Italian buyer requiring them to pay €400,000 in 90 days. Once the Italian buyer signs ('accepts') this document, Atlas sells it at a discount to a specialist finance house for immediate cash. What financial instrument has Atlas used?",
    options: ["A commercial bill of exchange", "A certificate of deposit", "A floating rate note", "A irrevocable letter of credit"],
    correctAnswer: 0,
    explanation: "A bill of exchange is a negotiable written order drawn by the seller on the buyer; once accepted by the buyer (or their bank), it can be discounted in the money market for immediate funds."
  },
  {
    id: 744,
    chapter: "Chapter 7: Business Finance",
    question: "Zenith Pharmaceuticals plc has a temporary cash surplus of £5 million for 45 days. Its treasury dealer purchases a negotiable bearer instrument issued by a major commercial bank confirming that £5 million has been deposited at a fixed interest rate for 45 days. Because it is negotiable, Zenith can sell this instrument in the secondary money market before maturity if cash is needed early. What instrument has Zenith purchased?",
    options: ["Treasury bill", "Certificate of Deposit (CD)", "Commercial paper", "Gilt-edged stock"],
    correctAnswer: 1,
    explanation: "A Certificate of Deposit (CD) is a negotiable certificate issued by a bank acknowledging a time deposit at a specified interest rate, which can be traded in the secondary money market before maturity."
  },
  {
    id: 745,
    chapter: "Chapter 7: Business Finance",
    question: "MegaCorp plc, a large multinational corporation with an AA credit rating, needs to raise £30 million for 90 days to fund seasonal working capital. Rather than borrowing from a commercial bank, MegaCorp issues short-term unsecured promissory notes directly to institutional money market investors at a discount to face value. What is this money market instrument called?",
    options: ["Commercial paper", "Convertible debenture", "Preference share capital", "Syndicated revolving credit facility"],
    correctAnswer: 0,
    explanation: "Commercial paper consists of short-term, unsecured promissory notes issued directly into the money market by large, creditworthy corporations to raise funds for up to 270 days/1 year."
  },
  {
    id: 746,
    chapter: "Chapter 7: Business Finance",
    question: "ClearView Optics Ltd is a rapidly growing company with high profit margins, but it is experiencing severe cash shortages because its rapid sales expansion has tied up cash in higher inventory and trade receivables, while suppliers are demanding faster payment. What financial phenomenon is ClearView Optics Ltd experiencing?",
    options: ["Financial gearing", "Overtrading (undercapitalisation)", "Maturity transformation", "Dividend signalling"],
    correctAnswer: 1,
    explanation: "Overtrading occurs when a business expands its volume of sales rapidly without securing sufficient long-term capital to finance the resulting surge in working capital (inventory and receivables)."
  },
  {
    id: 747,
    chapter: "Chapter 7: Business Finance",
    question: "Two economies, Country A and Country B, are compared in a global finance report. Country A has a 'bank-based financial system', whereas Country B has a 'market-based financial system'. Which of the following characteristics is most likely to be observed in Country B (the market-based system) compared to Country A?",
    options: ["Closer, long-term relationship lending between commercial banks and corporate borrowers", "Households displaying greater risk aversion and holding most wealth in bank deposits", "Greater reliance on public stock and bond markets for corporate financing and less close ties between banks and businesses", "Higher levels of direct state ownership of commercial banks"],
    correctAnswer: 2,
    explanation: "In market-based systems (e.g., UK, US), capital markets play a dominant role in channelling funds, household risk appetite for equities is higher, and bank-business ties are more arm's-length than in bank-based systems (e.g., Germany, Japan)."
  },
  {
    id: 748,
    chapter: "Chapter 7: Business Finance",
    question: "Amber Textiles Ltd has been offered a £100,000 invoice discounting facility by a commercial finance provider. How does confidential invoice discounting primarily differ from full debt factoring?",
    options: ["Invoice discounting involves selling fixed assets rather than trade receivables.", "Under invoice discounting, Amber Textiles retains control over its own sales ledger administration and debt collection, and customers are usually unaware of the arrangement.", "Invoice discounting provides 100% of the invoice face value upfront with zero interest or fees.", "Invoice discounting is only available to listed public limited companies."],
    correctAnswer: 1,
    explanation: "Invoice discounting provides cash advances secured against receivables while the client continues to manage its own credit control and ledger confidentially; factoring includes ledger administration."
  },
  {
    id: 749,
    chapter: "Chapter 7: Business Finance",
    question: "Harrogate Foods plc is considering reducing its annual dividend payout ratio from 60% of earnings to 20% in order to retain cash for a major factory automation project. Before announcing the cut, the Finance Director warns the board about 'dividend signalling' and the 'clientele effect'. What is the main risk the Finance Director is highlighting?",
    options: ["Retained earnings are subject to higher corporation tax than distributed dividends.", "Shareholders who rely on steady dividend income may sell their shares, and the market may misinterpret the dividend cut as a signal of falling future profitability, causing the share price to drop.", "Stock exchange rules forbid listed companies from reducing dividends once paid for three consecutive years.", "Cutting dividends automatically triggers a default clause in all bank loan agreements."],
    correctAnswer: 1,
    explanation: "Investors use dividend changes as signals of management's confidence in future earnings; an unexpected cut often causes negative share price reactions unless clearly communicated."
  },
  {
    id: 750,
    chapter: "Chapter 7: Business Finance",
    question: "Oakridge Software Ltd, a young, high-growth software developer, has raised £250,000 from a wealthy former technology entrepreneur. In addition to investing his own personal funds in exchange for a 15% equity stake, the investor acts as an informal mentor to the founders, introducing them to key industry contacts. How is this investor classified?",
    options: ["Institutional fund manager", "Business angel", "Clearing banker", "Underwriter"],
    correctAnswer: 1,
    explanation: "A business angel is a high-net-worth individual who invests their own personal capital directly into early-stage businesses, typically providing commercial expertise and mentoring alongside equity funding."
  },
  {
    id: 751,
    chapter: "Chapter 7: Business Finance",
    question: "Severn Valley Utilities plc needs to raise £80 million via an Offer for Sale on the London Stock Exchange. Because demand for the shares is uncertain, the company's merchant bank suggests an 'Offer for Sale by Tender'. How does an offer for sale by tender operate?",
    options: ["Shares are offered to existing shareholders strictly in proportion to their current holdings.", "Investors are invited to submit bids stating the number of shares they wish to buy and the price they are willing to pay (at or above a stated minimum), and a single striking price is set.", "Shares are placed privately with a single pension fund at a confidentially negotiated discount.", "Only employees and directors of Severn Valley Utilities plc are permitted to apply for shares."],
    correctAnswer: 1,
    explanation: "In an offer for sale by tender, applicants bid at or above a minimum tender price; the shares are then allotted at the highest uniform 'striking price' at which all shares can be sold."
  }
];

const btfChapter8Questions = [
  {
    id: 802,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The objective of the accountancy profession can best be described as:",
    options: ["Providing financial information about an entity to external users, which is useful to them in making economic decisions and for assessing stewardship", "Measurement, disclosure or provision of assurance about financial information that helps managers, investors, tax authorities and other decision makers make resource allocation decisions", "Identifying, measuring, accumulating, analyzing, preparing, interpreting and communicating information used by management to plan, evaluate and control", "Managing all the processes associated with the raising and use of financial resources in a business"],
    correctAnswer: 1,
    explanation: "The core objective of the accountancy profession is the measurement, disclosure, or provision of assurance about financial information to help stakeholders make resource allocation decisions [cite: 5]."
  },
  {
    id: 803,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which of the following element is least likely to characterize a profession?",
    options: ["Restrictions on membership to ensure skill and competence", "A high degree of autonomy and independence", "Core values are established which members are expected to maintain", "The profession's rules and regulations are established solely by government legislation"],
    correctAnswer: 3,
    explanation: "Professions typically feature self-regulation and professional bodies setting rules rather than having rules established solely by government legislation [cite: 5]."
  },
  {
    id: 804,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Professions often set out codes of ethics and conduct. These are an example of which common attribute of professions?",
    options: ["Professional values", "Self-regulation", "Co-regulation", "Formal regulatory process"],
    correctAnswer: 0,
    explanation: "Codes of ethics and conduct reflect professional values that members are expected to uphold [cite: 5]."
  },
  {
    id: 805,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Legislation requires certain activities to be carried out by members of bodies that are 'recognized professional regulators'. Which three of the following activities are included in such requirements?1. Insolvency2. Management consultancy3. Investment business4. Taxation5. Payroll6. Statutory audit",
    options: ["1, 2, and 3", "1, 3, and 6", "2, 4, and 5", "4, 5, and 6"],
    correctAnswer: 1,
    explanation: "The traditional statutory reserved areas of practice include Statutory audit, Insolvency, and Investment business (along with Probate) [cite: 5]."
  },
  {
    id: 806,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "In relation to which of the following does the Financial Reporting Council (FRC) have statutory powers?",
    options: ["Regulation of the auditing profession", "Professional discipline of accountants", "Registration of students into the accountancy profession", "Continuing professional education and development"],
    correctAnswer: 0,
    explanation: "The FRC holds statutory oversight and regulatory powers specifically over the auditing profession [cite: 5]."
  },
  {
    id: 807,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Upholding professional ethics is a key part of being a professional accountant. Which of the following duties of an accountant only applies to those employed in the public sector?",
    options: ["Protect the public interest", "Apply laws and regulations", "Protect the profession's reputation and standing", "Protect taxpayers' money"],
    correctAnswer: 3,
    explanation: "Protecting taxpayers' money is a specific duty associated with accountants working in public sector financial management [cite: 5]."
  },
  {
    id: 808,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Who is responsible for supervising member firms of the ICAB in respect of anti-money laundering (AML)?",
    options: ["The Financial Conduct Authority (FCA)", "The ICAB", "The Office of Professional Body AML Supervision (OPBAS)", "The FRC"],
    correctAnswer: 1,
    explanation: "ICAB acts as the supervisory body for its member firms regarding anti-money laundering compliance [cite: 5]."
  },
  {
    id: 809,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The financial statements of a listed company depart from relevant accounting standards and the provisions of the Companies Act. The company is likely to be referred to which of the following regulatory bodies?",
    options: ["The Prudential Regulation Authority", "The Financial Conduct Authority", "ICAB", "The Financial Reporting Council (FRC)"],
    correctAnswer: 3,
    explanation: "The FRC monitors corporate reporting quality and investigates material departures from accounting standards in listed company financial statements [cite: 5]."
  },
  {
    id: 810,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The following statements concern the role of professional bodies:Statement (1): CCAB has delegated responsibility for determining eligibility to practice.Statement (2): Professional institutes are responsible for discipline in respect of their members.Identify whether each statement is accurate.",
    options: ["Statement (1) accurate; Statement (2) inaccurate", "Statement (1) inaccurate; Statement (2) inaccurate", "Statement (1) accurate; Statement (2) accurate", "Statement (1) inaccurate; Statement (2) accurate"],
    correctAnswer: 2,
    explanation: "Professional institutes handle member disciplinary procedures and practice eligibility under delegated frameworks [cite: 5]."
  },
  {
    id: 811,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The following statements have been made about the purpose of regulating professions:Statement (1): Regulation of professions should protect the public from being misled or suffering from abuse of power through knowledge or monopoly.Statement (2): Regulation of professions should protect the profession's vested interests from competition.Identify whether each statement is true or false.",
    options: ["Statement (1) true; Statement (2) false", "Statement (1) false; Statement (2) false", "Statement (1) true; Statement (2) true", "Statement (1) false; Statement (2) true"],
    correctAnswer: 0,
    explanation: "Regulation exists to protect the public interest against exploitation, not to protect vested interests or restrict fair market competition [cite: 5]."
  },
  {
    id: 812,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which of the following is a primary aim of regulation of the accountancy profession?",
    options: ["To protect the profession from commercial competition.", "To protect ICAB members from unqualified accountants.", "To protect the public from being misled.", "To protect small accountancy firms from big ones."],
    correctAnswer: 2,
    explanation: "The fundamental objective of professional regulation is protecting the public interest from being misled [cite: 5]."
  },
  {
    id: 813,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "In relation to self-regulation of the accountancy profession, the most important aspect of the oversight mechanism is that it should be seen to be:",
    options: ["Fair", "Authoritative", "Objective", "Independent"],
    correctAnswer: 3,
    explanation: "An effective self-regulatory oversight mechanism must be seen to be independent of the profession itself to maintain public trust [cite: 5]."
  },
  {
    id: 814,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Statutory monitoring of the quality of audit will be effected by:",
    options: ["BSEC", "FBCCI", "The FRC", "The ICAB"],
    correctAnswer: 2,
    explanation: "The Financial Reporting Council (FRC) carries out statutory monitoring of audit quality [cite: 5]."
  },
  {
    id: 815,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "If a member is offered a caution by ICAB's Investigation and Disciplinary Committee, this means that:",
    options: ["There will be neither publicity, fines nor costs to pay", "There will be a fine but no publicity", "There will be neither publicity nor a fine but there may be costs to pay", "There will be publicity, a fine and costs to pay"],
    correctAnswer: 2,
    explanation: "A formal caution typically carries neither publicity nor a fine, though administrative costs may be payable [cite: 5]."
  },
  {
    id: 816,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The accountancy profession rests on two foundational core pillars at its heart. These two pillars are:",
    options: ["Taxation and Management Accounting", "Financial Reporting and Assurance", "Corporate Finance and Treasury", "Insolvency and Probate"],
    correctAnswer: 1,
    explanation: "Financial reporting and assurance are the twin foundational pillars of the accountancy profession."
  },
  {
    id: 817,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Why is public trust in the integrity and competence of accountants vital for the economy?",
    options: ["Accountants control all central bank interest rates.", "Financial information is complex, and capital market users rely on accountants' expertise and objectivity.", "Statutory law forbids non-accountants from holding bank accounts.", "Auditors possess legal immunity from commercial losses."],
    correctAnswer: 1,
    explanation: "Because financial statements are technically complex, investors and the public must rely entirely on accountants' credibility."
  },
  {
    id: 818,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "When an accountant evaluates financial information with a questioning mind and remains alert to conditions indicating possible misstatements due to error or fraud, they are exercising:",
    options: ["Professional skepticism", "Commercial acumen", "Technical subjectivity", "Management bias"],
    correctAnswer: 0,
    explanation: "Professional skepticism requires a questioning mind and alertness to indicators of fraud or error."
  },
  {
    id: 819,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The ability to analyze issues rationally and objectively without emotional interference when forming conclusions is known as:",
    options: ["Professional skepticism", "Critical thinking", "Professional judgment", "Due care"],
    correctAnswer: 1,
    explanation: "Critical thinking is the objective, rational analysis and evaluation of issues."
  },
  {
    id: 820,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The practical application of relevant training, professional knowledge, and experience to make appropriate decisions in a given context is called:",
    options: ["Professional judgment", "Ethical compliance", "Statutory audit", "Continuing professional development"],
    correctAnswer: 0,
    explanation: "Professional judgment is applying knowledge and training to specific factual circumstances."
  },
  {
    id: 821,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "In relation to sustainability and climate change, what is the primary role of the professional accountant?",
    options: ["Acting as a climate scientist conducting physical laboratory research.", "Serving as an activist campaigner lobbying corporate boards.", "Measuring sustainability metrics, managing climate risks, and ensuring reliable reporting disclosures.", "Designing green energy manufacturing hardware."],
    correctAnswer: 2,
    explanation: "Accountants measure metrics, manage risk, and assure climate disclosures, remaining within their financial and reporting scope."
  },
  {
    id: 822,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which of the following is explicitly recognized as a LIMITATION to the role of the accountant regarding sustainability and climate change?",
    options: ["Evaluating financial risks of climate policies", "Acting as scientific researchers analyzing physical causes of global warming", "Assisting in ESG reporting disclosures", "Integrating sustainability into governance"],
    correctAnswer: 1,
    explanation: "Accountants are financial professionals, not scientific researchers analyzing physical environmental causes."
  },
  {
    id: 823,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which global body represents the accountancy profession worldwide, uniting 175 member organizations across 130 countries?",
    options: ["International Accounting Standards Board (IASB)", "International Federation of Accountants (IFAC)", "Financial Reporting Council (FRC)", "Global Reporting Initiative (GRI)"],
    correctAnswer: 1,
    explanation: "IFAC represents the worldwide accountancy profession across member bodies and countries."
  },
  {
    id: 824,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Regarding the legal status of the title 'accountant', which statement is correct?",
    options: ["Only qualified chartered accountants can legally use the title.", "The title 'accountant' enjoys no special legal protection, meaning anyone can offer general accounting services.", "Using the title without government licensing carries criminal imprisonment.", "Non-qualified individuals are banned from doing bookkeeping."],
    correctAnswer: 1,
    explanation: "Unlike solicitors or doctors, the title 'accountant' is not legally restricted, except for specific reserved areas like statutory audit."
  },
  {
    id: 825,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which of the following describes the ICAB Code of Ethics fundamental principle of 'Integrity'?",
    options: ["To be straightforward and honest in all professional and business relationships", "To maintain absolute secrecy under all circumstances", "To keep technical knowledge up to date", "To avoid conflicts of interest"],
    correctAnswer: 0,
    explanation: "Integrity requires all professional accountants to be straightforward and honest in business and professional relationships."
  },
  {
    id: 826,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Under the ICAB Code of Ethics, 'Objectivity' requires that an accountant must:",
    options: ["Maximize client profits at all costs", "Not allow bias, conflict of interest, or undue influence of others to override professional judgments", "Disclose confidential client data to the public", "Standardize consulting fees"],
    correctAnswer: 1,
    explanation: "Objectivity ensures professional judgment is free from bias, conflict of interest, or outside pressure."
  },
  {
    id: 827,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The ethical principle of 'Professional Competence and Due Care' requires an accountant to:",
    options: ["Pass exams once and never study again", "Maintain professional knowledge and skill, acting diligently in accordance with technical standards", "Guarantee that clients never face tax audits", "Personally inspect all client physical assets"],
    correctAnswer: 1,
    explanation: "Accountants must maintain technical competence and perform work with due diligence and care."
  },
  {
    id: 828,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Under the principle of 'Confidentiality', when is a professional accountant permitted to disclose confidential client information?",
    options: ["Whenever a friend asks about a client's business", "When there is a legal or professional right or duty to disclose, or specific authorization", "When the accountant changes jobs", "After six months have passed"],
    correctAnswer: 1,
    explanation: "Confidentiality must be maintained unless specific legal or professional authorization/duty to disclose exists."
  },
  {
    id: 829,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The ethical principle of 'Professional Behavior' requires accountants to:",
    options: ["Comply with relevant laws and regulations and avoid conduct that discredits the profession", "Wear formal professional attire at all times", "Charge fixed government-mandated fees", "Agree with client management in public"],
    correctAnswer: 0,
    explanation: "Professional behavior obliges compliance with laws and avoiding actions that bring discredit to the profession."
  },
  {
    id: 830,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "What are the educational entry prerequisites to register as an articled student with an ICAB member CA firm?",
    options: ["Primary school completion", "Graduates with a minimum CGPA 2.5, or HSC GPA 4, or A Level equivalents", "10 years of commercial work experience", "Master's degree in Engineering"],
    correctAnswer: 1,
    explanation: "ICAB articleship entry requires university graduates with CGPA 2.5, HSC GPA 4, or A Level qualifications."
  },
  {
    id: 831,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "What is the mandatory duration of practical training (articleship) under an ICAB member firm?",
    options: ["1 year", "2 years", "At least 3 or 4 years", "5 years"],
    correctAnswer: 2,
    explanation: "Articleship requires completing at least 3 or 4 years of supervised practical training with an authorized CA firm."
  },
  {
    id: 832,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "To maintain active membership in ICAB, professional accountants must fulfill annual subscription requirements and undertake:",
    options: ["Mandatory military training", "Continuing Professional Development (CPD)", "Political party service", "Corporate shareholding quotas"],
    correctAnswer: 1,
    explanation: "CPD is mandatory for members to maintain technical competence and professional standing."
  },
  {
    id: 833,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "What does a 'reserved area' of practice mean in the accountancy profession?",
    options: ["Office parking reserved for senior partners", "Professional activities strictly restricted by statute to members of recognized professional regulators", "Cash reserves held at the central bank", "Tax-free allowances"],
    correctAnswer: 1,
    explanation: "Reserved areas are specialized activities restricted by law to authorized members of recognized professional bodies."
  },
  {
    id: 834,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "How many traditional statutory 'reserved areas' of practice exist?",
    options: ["Two", "Three", "Four", "Five"],
    correctAnswer: 2,
    explanation: "The four reserved areas are Statutory Audit, Investment Business, Insolvency, and Probate."
  },
  {
    id: 835,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which of the following is classified as a statutory reserved area?",
    options: ["General bookkeeping", "Statutory audit", "Financial forecasting", "Management consulting"],
    correctAnswer: 1,
    explanation: "Statutory audit is a reserved area requiring a specialized practicing certificate."
  },
  {
    id: 836,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "What document must an accountant hold to legally engage in public practice as a statutory auditor in Bangladesh?",
    options: ["Trade license only", "Certificate of Practice issued by ICAB", "Tax registration certificate", "Import permit"],
    correctAnswer: 1,
    explanation: "Practicing as an independent auditor requires a valid Certificate of Practice from ICAB."
  },
  {
    id: 837,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which government ministry exercises ultimate oversight regulation over ICAB in Bangladesh?",
    options: ["Ministry of Finance", "Ministry of Commerce", "Ministry of Education", "Ministry of Law"],
    correctAnswer: 1,
    explanation: "The Ministry of Commerce exercises regulatory oversight over ICAB."
  },
  {
    id: 838,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "The International Accounting Standards Board (IASB) is responsible for creating and issuing:",
    options: ["Local tax codes", "International Financial Reporting Standards (IFRS)", "National employment laws", "Banking interest rates"],
    correctAnswer: 1,
    explanation: "The IASB develops and issues IFRS Accounting Standards globally."
  },
  {
    id: 839,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "International Accounting Standards (IAS) were originally issued between 1973 and 2001 by which predecessor body?",
    options: ["International Accounting Standards Committee (IASC)", "Financial Accounting Standards Board (FASB)", "Auditing Practices Board", "European Union Commission"],
    correctAnswer: 0,
    explanation: "The IASC issued IAS standards before being replaced by the IASB in 2001."
  },
  {
    id: 840,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "What is the primary consequence if public trust in the accountancy profession is eroded?",
    options: ["Capital markets fail to allocate economic resources efficiently, harming national growth.", "Companies stop paying corporate taxes.", "Audit fees drop to zero.", "Central banks dissolve commercial banking."],
    correctAnswer: 0,
    explanation: "Loss of trust destabilizes financial markets and prevents efficient capital allocation."
  },
  {
    id: 841,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which of the following activities is NOT a reserved area, meaning anyone can perform it without professional licensing?",
    options: ["Statutory audit", "Insolvency practice", "Management accounting and bookkeeping", "Investment business"],
    correctAnswer: 2,
    explanation: "Management accounting and bookkeeping are open market activities and are not legally reserved."
  },
  {
    id: 842,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "How does Continuing Professional Development (CPD) support the fundamental principle of Professional Competence and Due Care?",
    options: ["It guarantees zero calculation errors.", "It ensures accountants continually update their technical knowledge to handle changing laws and standards.", "It replaces the Code of Ethics.", "It provides pension benefits."],
    correctAnswer: 1,
    explanation: "CPD ensures technical skills and professional knowledge remain current throughout a career."
  },
  {
    id: 843,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "An accountant refuses a client director's request to hide a massive liability. Which fundamental ethical principle are they upholding?",
    options: ["Confidentiality", "Integrity", "Professional behavior", "Objectivity"],
    correctAnswer: 1,
    explanation: "Refusing to associate with false or misleading information demonstrates Integrity."
  },
  {
    id: 844,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "An auditor discovers that their close family member owns significant shares in the audit client. Which fundamental principle is most severely threatened?",
    options: ["Objectivity", "Confidentiality", "Professional behavior", "Due care"],
    correctAnswer: 0,
    explanation: "Financial interests in an audit client create a self-interest threat undermining Objectivity."
  },
  {
    id: 845,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "An accountant uncovers corporate money laundering and reports it to enforcement authorities under statutory duty. This action overrides which ethical principle?",
    options: ["Integrity", "Confidentiality", "Objectivity", "Competence"],
    correctAnswer: 1,
    explanation: "Statutory reporting duties legally override the principle of Confidentiality."
  },
  {
    id: 846,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "An accounting firm launches an advertising campaign making exaggerated claims and disparaging competitor firms. Which principle does this violate?",
    options: ["Professional behavior", "Objectivity", "Confidentiality", "Competence"],
    correctAnswer: 0,
    explanation: "Disparaging competitors and making exaggerated claims discredits the profession, violating Professional Behavior."
  },
  {
    id: 847,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "What is the main purpose of an independent statutory financial audit?",
    options: ["To prepare daily bookkeeping entries", "To provide an independent opinion on whether financial statements give a true and fair view", "To guarantee company solvency", "To write corporate tax returns"],
    correctAnswer: 1,
    explanation: "Statutory audits provide independent assurance on whether financial statements reflect a true and fair view."
  },
  {
    id: 848,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which IFAC publication provides operational guidance to professional accountants employed inside commercial businesses?",
    options: ["Best practice guidance for professional accountants in business", "International banking codes", "Maritime trade guidelines", "Civil service rules"],
    correctAnswer: 0,
    explanation: "IFAC publishes tailored guidance specifically for professional accountants working in business."
  },
  {
    id: 849,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "What does 'recognized professional regulator' mean in the context of statutory auditing?",
    options: ["Government tax bureau", "A professional body officially authorized by legislation to register, supervise, and regulate auditors", "A commercial bank", "A stock exchange broker"],
    correctAnswer: 1,
    explanation: "A recognized professional regulator holds statutory authority to regulate members performing reserved activities."
  },
  {
    id: 850,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Which of the following is an example of an accountant acting outside their professional limitation regarding climate change?",
    options: ["Measuring carbon emission disclosures", "Analyzing financial risks of green regulations", "Conducting laboratory chemical analysis on atmospheric greenhouse gas samples", "Assisting in ESG reporting"],
    correctAnswer: 2,
    explanation: "Conducting physical laboratory experiments is scientific work, outside the scope of an accountant."
  },
  {
    id: 851,
    chapter: "Chapter 8: The Accountancy Profession",
    question: "Why are professional bodies like ICAB granted powers of self-regulation?",
    options: ["To completely eliminate government oversight", "To leverage technical expertise in setting and enforcing high ethical and professional standards in the public interest", "To fix high mandatory audit fees", "To restrict market entry for foreign investors"],
    correctAnswer: 1,
    explanation: "Self-regulation allows the profession to utilize its technical expertise to maintain high standards efficiently."
  }
];

const btfChapter9Questions = [
  {
    id: 902,
    chapter: "Chapter 9: Governance and Ethics",
    question: "What is meant by 'governance' in a business and organizational context?",
    options: ["The daily operational execution of sales and production targets by junior clerks", "The system of rules, practices, processes, and accountability mechanisms by which an organization is directed, overseen, and controlled", "The statutory calculation of income tax payable to the National Board of Revenue (NBR)", "A marketing strategy used to promote consumer goods in retail outlets"],
    correctAnswer: 1,
    explanation: "Governance establishes how authority is exercised, how decisions are directed and controlled, and how leaders are held accountable to owners and stakeholders."
  },
  {
    id: 903,
    chapter: "Chapter 9: Governance and Ethics",
    question: "How does 'Agency Theory' explain the core governance tension in a listed company on the Dhaka Stock Exchange (DSE)?",
    options: ["Shareholders manage every factory shift directly without hiring managers", "Separation of ownership (shareholders/principals) and control (directors/managers/agents) can lead agents to pursue self-interest rather than maximizing shareholder value", "Commercial banks own 100% of shares in every listed company", "External auditors set executive salaries on behalf of customers"],
    correctAnswer: 1,
    explanation: "When dispersed shareholders delegate management control to executive directors, information asymmetry and differing incentives create agency costs unless governance mechanisms align them."
  },
  {
    id: 904,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Which perspective on corporate governance argues that directors should balance the legitimate interests of multiple affected groups—such as workers, customers, suppliers, lenders, communities, and the environment—rather than focusing solely on shareholders?",
    options: ["Narrow shareholder primacy", "Stakeholder perspective", "Pure laissez-faire deregulation", "Short-term speculative trading"],
    correctAnswer: 1,
    explanation: "The stakeholder perspective views a business as accountable to a wide set of constituencies whose support and trust sustain long-term viability."
  },
  {
    id: 905,
    chapter: "Chapter 9: Governance and Ethics",
    question: "In a 'bank-oriented' (insider-dominated) financial system—common in developing economies such as Bangladesh—how does corporate governance typically differ from a 'market-oriented' (outsider) system?",
    options: ["Companies rely heavily on bank loans and concentrated/family ownership rather than dispersed stock-market equity, making relationship lending and controlling-shareholder oversight central", "There are no commercial banks in the country", "All shares are held exclusively by anonymous foreign hedge funds with zero board representation", "Stock exchanges regulate bank deposit interest rates"],
    correctAnswer: 0,
    explanation: "Bank-oriented and insider systems feature closer ties with banks and dominant/family shareholders, whereas market-oriented outsider systems rely more on liquid capital markets, institutional investors, and disclosure."
  },
  {
    id: 906,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Which of the following is a classic 'symptom of poor corporate governance' in an organization?",
    options: ["Independent Non-Executive Directors (NEDs) constructively challenging executive risk proposals", "Dominance of the board by a single powerful executive or controlling family, weak internal controls, and lack of transparency", "A properly functioning Audit Committee with financial expertise", "Clear separation between the Chair of the Board and the Chief Executive Officer"],
    correctAnswer: 1,
    explanation: "Symptoms of weak governance include unchecked power concentration, dominant/abused controlling influence, poor risk/internal controls, and opaque or misleading financial reporting."
  },
  {
    id: 907,
    chapter: "Chapter 9: Governance and Ethics",
    question: "What is the core principle behind the 'Comply or Explain' approach to good corporate governance practice?",
    options: ["Companies can ignore governance codes silently without any disclosure", "Companies are expected to follow governance code provisions, or transparently explain to shareholders in their annual report why they departed from a provision", "Only state-owned enterprises are allowed to explain departures", "Every departure automatically cancels a company's trade license"],
    correctAnswer: 1,
    explanation: "Good governance codes use 'comply or explain' to combine clear standards with flexibility where a company's specific size or circumstances justify an alternative approach."
  },
  {
    id: 908,
    chapter: "Chapter 9: Governance and Ethics",
    question: "In a 'unitary board' governance structure, who sits on the single board of directors?",
    options: ["Only external auditors and government regulators", "Both Executive Directors (who manage operations) and Non-Executive Directors (who provide independent oversight and challenge)", "Only retail customers and trade union leaders", "Only shareholders holding fewer than 100 shares"],
    correctAnswer: 1,
    explanation: "A unitary board combines executive management and non-executive directors on one board, whereas a two-tier (dual) board separates a management board from a supervisory board."
  },
  {
    id: 909,
    chapter: "Chapter 9: Governance and Ethics",
    question: "What is the distinction between 'ethics' and 'business ethics'?",
    options: ["Ethics deals with moral principles of right and wrong conduct, while business ethics applies those moral standards and values to business policies, decisions, and practices", "Ethics applies only to personal family life, while business ethics means obeying only tax laws", "Business ethics allows breaking laws whenever profit margins are below 10%", "There is no difference between ethics and business ethics"],
    correctAnswer: 0,
    explanation: "Business ethics translates ethical principles into everyday commercial choices—such as fair treatment of workers, honest reporting, anti-corruption, and responsible supply chains."
  },
  {
    id: 910,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Which ethical approach judges whether an action is right or wrong primarily by evaluating its outcomes or consequences—such as producing the greatest overall benefit?",
    options: ["Consequentialism / Utilitarianism", "Deontology (strict rule/duty adherence)", "Ethical relativism", "Moral indifference"],
    correctAnswer: 0,
    explanation: "Consequentialist or utilitarian approaches weigh the positive and negative effects of an action on affected parties to determine the best net outcome."
  },
  {
    id: 911,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Which fundamental ethical principle for professional accountants requires being straightforward, honest, and truthful in all professional and business relationships?",
    options: ["Integrity", "Objectivity", "Confidentiality", "Professional Competence and Due Care"],
    correctAnswer: 0,
    explanation: "Integrity means being honest, forthright, and principled—not merely following technical rules, but acting truthfully and fairly. Part B: Scenario-Based MCQs (Q11 – Q50)"
  },
  {
    id: 912,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Padma Textiles Ltd is listed on the Dhaka Stock Exchange (DSE). Its founder-Chairman also serves as Managing Director (CEO), appoints his relatives to key procurement and accounts roles, and rarely holds formal Audit Committee meetings. Minority retail shareholders complain they receive late dividends and incomplete disclosures. Which governance perspective best explains why minority shareholders are vulnerable here?",
    options: ["Agency theory (principal-agent / controlling-shareholder vs. minority-shareholder conflict)", "Perfect competition market theory", "Natural monopoly cost theory", "Keynesian liquidity preference theory"],
    correctAnswer: 0,
    explanation: "Concentrated control and combined Chair/CEO authority can allow insiders or controlling shareholders to extract private benefits at the expense of minority shareholders."
  },
  {
    id: 913,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A commercial bank in Bangladesh is expanding its lending book rapidly. A newly appointed Independent Director on the bank's board asks management for detailed credit-risk stress tests, non-performing loan (NPL) recovery timelines, and related-party loan disclosures before approving a large corporate loan. The Managing Director replies that board members should focus only on long-term vision and trust executive management. What is the proper governance role of the Independent Director here?",
    options: ["To execute daily branch cash tellering operations", "To exercise independent judgment, constructively challenge executive risk assumptions, and oversee internal controls and risk management", "To set deposit interest rates on behalf of Bangladesh Bank", "To audit the company on behalf of the NBR without board discussion"],
    correctAnswer: 1,
    explanation: "Non-executive / independent directors provide objective oversight, challenge management assumptions on risk and controls, and help safeguard solvency and depositor/shareholder interests."
  },
  {
    id: 914,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Meghna Foods plc has five key stakeholder groups: (1) Factory workers in Gazipur, (2) Retail grocery distributors, (3) Commercial bank lenders, (4) General public shareholders, and (5) Local environmental authorities. Each stakeholder group has distinct governance needs. Which pairing accurately matches a stakeholder group with its primary governance need?",
    options: ["Factory workers: safe working conditions, fair wages, and grievance protection", "Commercial bank lenders: free product samples and discount coupons", "Retail grocery distributors: confidential employee salary appraisals", "Local environmental authorities: insider stock-option grants"],
    correctAnswer: 0,
    explanation: "Workers care about workplace safety, fair pay, job security, and ethical treatment; lenders focus on solvency, risk controls, and debt repayment; shareholders focus on sustainable returns, accountability, and fair reporting."
  },
  {
    id: 915,
    chapter: "Chapter 9: Governance and Ethics",
    question: "At Jamuna Engineering Ltd, an internal review uncovers several warning signs:- Key accounting policies were changed just before year-end without explanation to the Audit Committee.- A senior executive has unilateral authority to approve payments to offshore vendors without dual sign-off.- Board papers are circulated only 30 minutes before meetings, leaving little time for scrutiny.- Whistleblowers who raised concerns about over-invoicing were transferred to remote branches.Together, what do these four indicators represent?",
    options: ["Symptoms of poor corporate governance", "Best-practice internal control benchmarks", "Statutory tax incentives under Bangladesh law", "Features of a two-tier supervisory board"],
    correctAnswer: 0,
    explanation: "Opaque reporting changes, weak payment controls, rubber-stamping board processes, and intimidation/retaliation against whistleblowers are classic symptoms of poor governance."
  },
  {
    id: 916,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A mid-sized company listed on the Chittagong Stock Exchange (CSE) is reviewing its governance practices against corporate governance code expectations. Its Audit Committee comprises three Independent Directors, including one chartered accountant with recent financial experience; its Remuneration Committee sets executive pay linked to multi-year performance; and its annual report explains clearly why it combined a temporary transition role during a leadership handover. How does this align with 'good practice' in corporate governance?",
    options: ["It demonstrates good practice by combining independent oversight, performance-linked controls, and transparent 'comply or explain' disclosure", "It violates good practice because Audit Committees must be chaired by the executive finance manager", "It is invalid because listed companies can never explain a departure from standard practice", "It proves that internal controls are unnecessary when profits are positive"],
    correctAnswer: 0,
    explanation: "Good governance practice relies on board independence, effective committee oversight, clear accountability, and transparent explanation where specific provisions are not followed."
  },
  {
    id: 917,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Compare two economies in your BTF study:Country A has a predominantly bank-oriented financial system where large family-owned industrial groups borrow heavily from domestic banks and hold controlling equity stakes.Country B has a predominantly market-oriented financial system where large corporations raise equity directly through deep public stock markets owned widely by pension funds and mutual funds.How does the financial system affect governance in Country A vs. Country B?",
    options: ["Country A relies more on bank credit relationships and controlling-owner oversight, whereas Country B relies more on capital-market pricing, institutional investor engagement, and public disclosure rules", "Country A has no need for financial reporting or risk management", "Country B bans institutional investors from voting at shareholder meetings", "Financial systems have no impact on how companies are financed or monitored"],
    correctAnswer: 0,
    explanation: "Bank-oriented/insider systems emphasize relationship banking and blockholder/controlling governance, while market-oriented/outsider systems emphasize market discipline, minority protection, and disclosure."
  },
  {
    id: 918,
    chapter: "Chapter 9: Governance and Ethics",
    question: "In a bank-oriented financial system like Bangladesh, a major conglomerate borrows heavily from several domestic commercial banks. If the conglomerate faces severe liquidity stress or governance lapses, why do domestic banks face heightened governance risk?",
    options: ["Because banks have large credit exposures tied to borrowers' governance, internal controls, and repayment capacity, and weak governance can turn loans into non-performing assets (NPAs)", "Because banks never lend money to corporate borrowers", "Because borrower governance only affects retail grocery shoppers", "Because banks are legally barred from assessing borrower risk"],
    correctAnswer: 0,
    explanation: "In bank-led financing systems, poor corporate governance at borrowing firms—such as weak controls, misstated accounts, or related-party abuse—directly threatens bank asset quality and financial stability."
  },
  {
    id: 919,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Bengal Consumer Goods plc operates with a unitary board structure. The Board consists of the Chair, 3 Executive Directors (CEO, CFO, COO), and 4 Independent Non-Executive Directors. During a strategy session, the COO proposes cutting factory safety equipment spending by 35% to boost short-term quarterly operating profit. Which governance mechanism is designed to check this proposal?",
    options: ["Constructive challenge by the Independent Non-Executive Directors and review by the board's risk/audit oversight structures", "Automatic acceptance without risk assessment because short-term profit is the only metric", "Delegation of safety compliance to the external marketing agency", "Removing all non-executive directors from board discussions"],
    correctAnswer: 0,
    explanation: "Independent NEDs on a unitary board provide objective challenge to executive proposals that may create severe operational, safety, legal, or reputational risks."
  },
  {
    id: 920,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A multinational enterprise with operations in Europe compares a unitary board system with a two-tier (dual) board system. Under a two-tier board structure, what is the key structural difference?",
    options: ["A separate Supervisory Board oversees and appoints the Management Board, creating a formal structural divide between oversight and day-to-day management", "There is no distinction between owners, directors, and auditors", "The Management Board appoints and dismisses the Supervisory Board at will", "Only part-time interns serve on both boards"],
    correctAnswer: 0,
    explanation: "In a two-tier board structure, the management board runs operations while a distinct supervisory board (often including non-executives and sometimes employee representatives) supervises strategy and appointments."
  },
  {
    id: 921,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A Bangladeshi readymade garment (RMG) exporter receives an urgent order from an international buyer. A local intermediary offers to speed up customs clearance and port release if the exporter pays an 'unofficial speed money' cash fee of ৳300,000. The exporter's Finance Manager points out that paying bribes is illegal, undermines fair competition, and damages long-term reputation, even if it might save two days on shipping. Which ethical dimension is central here?",
    options: ["Business ethics and legal/integrity standards—recognizing that short-term convenience does not justify bribery or unlawful conduct", "Purely a technical spreadsheet formatting issue", "An example of a natural monopoly", "A favourable external economy of scale"],
    correctAnswer: 0,
    explanation: "Business ethics requires conducting commercial operations with integrity and within legal boundaries rather than resorting to bribery or facilitation payments."
  },
  {
    id: 922,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A pharmaceutical company in Bangladesh is deciding whether to release a new batch of fever medicine after a minor packaging-label printing error is spotted on 2% of cartons. The medicine itself is safe and effective, and recalling the batch would delay delivery by three weeks during a seasonal outbreak. A manager argues for releasing it immediately because 'more patients will get treated sooner' (weighing outcomes), while a compliance officer argues that accurate labelling is a strict rule/duty that must not be compromised. Which two ethical viewpoints are illustrated?",
    options: ["Consequentialist/outcome-focused reasoning vs. rule/duty-based (deontological) reasoning", "Bank-oriented vs. market-oriented financial systems", "Discrete vs. continuous data classification", "Unitary vs. two-tier board structures"],
    correctAnswer: 0,
    explanation: "The manager focuses on perceived net consequences (timely supply), whereas the compliance officer emphasizes adherence to rules, accuracy, and duty."
  },
  {
    id: 923,
    chapter: "Chapter 9: Governance and Ethics",
    question: "An international company opens a manufacturing unit in a country where minimum wages are lower than in its home country, and local environmental enforcement is weaker. One executive claims: 'Ethics is completely relative—whatever is locally accepted or legal is automatically ethical.' Why do business ethicists urge caution with pure ethical relativism?",
    options: ["Because pure ethical relativism can be used to justify harmful, exploitative, or corrupt practices simply because local norms or enforcement are weak", "Because ethical relativism requires paying identical salaries in every currency without exchange rates", "Because ethical relativism forbids companies from obeying local laws", "Because ethical relativism applies only to non-profit charities"],
    correctAnswer: 0,
    explanation: "While businesses must respect local laws and cultures, relying blindly on relativism can excuse abuse, unsafe conditions, or bribery; strong ethical cultures anchor on core principles and human/stakeholder rights."
  },
  {
    id: 924,
    chapter: "Chapter 9: Governance and Ethics",
    question: "What defines a strong 'ethical culture' within a business organization?",
    options: ["Having a poster of values on the wall while senior managers reward aggressive rule-breaking and punish whistleblowers", "Leadership 'tone at the top' matching stated values, clear ethical codes, safe speak-up/whistleblowing channels, fair incentives, and consistent accountability across all levels", "Leaving ethical choices entirely to informal rumor without guidance or controls", "Hiring only family members into finance and compliance roles"],
    correctAnswer: 1,
    explanation: "An ethical culture is built through leadership example ('tone at the top'), aligned performance incentives, training, open communication, and protection for those who raise concerns."
  },
  {
    id: 925,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Anika, a CA student and junior accounts executive at a Dhaka trading firm, notices that her line manager is asking her to record post-dated cheques as cash sales on March 31 so that Q1 revenue targets appear higher. Anika feels uncomfortable because the goods have not been dispatched and the financial statements would be misstated. Which fundamental ethical principle is most directly threatened if Anika complies?",
    options: ["Integrity (and objectivity/accuracy in financial reporting)", "External economies of scale", "Market-oriented liquidity", "Two-tier board supervision"],
    correctAnswer: 0,
    explanation: "Recording unearned/post-dated transactions as completed sales misrepresents financial performance, conflicting with honesty, integrity, and truthful reporting."
  },
  {
    id: 926,
    chapter: "Chapter 9: Governance and Ethics",
    question: "During an audit or financial reporting assignment, a chartered accountant is offered free luxury holiday tickets and concert passes by a major supplier whose invoices the accountant is responsible for verifying. Which ethical threat arises, and what safeguard helps address it?",
    options: ["A self-interest threat—safeguarded by declining gifts/hospitality (unless trivial and inconsequential) and maintaining independent review", "A natural monopoly threat—safeguarded by raising product prices", "A continuous data threat—safeguarded by using a scatter plot", "A two-tier board threat—safeguarded by dissolving the board"],
    correctAnswer: 0,
    explanation: "Accepting significant gifts or hospitality from a party being evaluated creates a self-interest/familiarity risk that could bias judgment; rejecting improper inducements and applying safeguards protects objectivity."
  },
  {
    id: 927,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Rafiq, an accountant at a listed telecom company in Bangladesh, attends a confidential board briefing regarding an upcoming major merger that has not yet been announced to the stock exchange. Later that evening, a close relative asks Rafiq whether to buy shares in the company before tomorrow's trading session opens. Which fundamental principle applies to Rafiq?",
    options: ["Confidentiality—Rafiq must not disclose confidential information acquired in a professional capacity or use it for personal or third-party advantage", "Stakeholder theory—Rafiq must leak the merger price to local newspaper journalists", "Stewardship theory—Rafiq should help his relative profit ahead of public disclosure", "Ethical relativism—confidentiality applies only during external audits"],
    correctAnswer: 0,
    explanation: "Accountants must respect the confidentiality of information gained through business and professional relationships and must never misuse inside information."
  },
  {
    id: 928,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A small logistics company in Chattogram asks its accounting team to prepare complex cross-border transfer pricing documentation under international tax rules that none of the team members understand. Which fundamental principle is implicated if the team attempts the work without acquiring necessary knowledge or seeking specialist advice?",
    options: ["Professional competence and due care", "Whistleblowing", "Bank-oriented lending", "Unitary board separation"],
    correctAnswer: 0,
    explanation: "Professional competence and due care require maintaining appropriate professional knowledge and skill, acting diligently, and obtaining expert help when a task exceeds current competence."
  },
  {
    id: 929,
    chapter: "Chapter 9: Governance and Ethics",
    question: "The Managing Director of a private company tells the Chief Accountant: 'If you don't reduce our provision for bad debts by ৳15 million this quarter, I will replace you next month and make sure you can't get a senior finance role in this sector.' Which ethical threat is the Managing Director exerting?",
    options: ["Intimidation threat", "Familiarity threat", "Advocacy threat", "Self-review threat"],
    correctAnswer: 0,
    explanation: "Threats of job loss, career harm, or coercion aimed at pressuring an accountant to compromise standards constitute an intimidation threat."
  },
  {
    id: 930,
    chapter: "Chapter 9: Governance and Ethics",
    question: "An accounting firm advises a client on structuring a controversial tax-avoidance scheme and later represents the client before tax authorities, arguing aggressively that the scheme is fully compliant despite clear legal risks. Which ethical threat is especially relevant when promoting a client's or employer's position?",
    options: ["Advocacy threat", "Discrete sampling threat", "Bank-system threat", "Stewardship threat"],
    correctAnswer: 0,
    explanation: "An advocacy threat occurs when an accountant promotes a position or interest to an extent that objectivity or credibility is compromised."
  },
  {
    id: 931,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A senior auditor has audited the same client company for 14 consecutive years and has developed a very close personal friendship with the client's Chief Financial Officer, frequently accepting the CFO's verbal assurances without verifying underlying evidence. Which threat is present?",
    options: ["Familiarity threat", "Self-review threat", "Intimidation threat", "Consequentialist threat"],
    correctAnswer: 0,
    explanation: "Long association or close personal ties can create a familiarity threat, dulling professional skepticism and objectivity."
  },
  {
    id: 932,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A finance executive designs a new sales-commission calculation model in a spreadsheet and is later asked to independently verify its accuracy for bonus payouts without any independent check. Which threat does this illustrate?",
    options: ["Self-review threat", "Confidentiality threat", "Stakeholder threat", "Relativism threat"],
    correctAnswer: 0,
    explanation: "Evaluating or verifying one's own prior work or model creates a self-review threat because it is harder to spot one's own flaws objectively."
  },
  {
    id: 933,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A Dhaka-based industrial group is listed on the DSE. Its board has 9 members: the Chairman, 2 Executive Directors, and 6 Independent Directors. The Audit Committee is chaired by an Independent Director who is a Fellow Chartered Accountant (FCA), and the Nomination and Remuneration Committee (NRC) reviews director nominations and executive remuneration policies. Why are independent board committees important for governance?",
    options: ["They provide specialized, objective oversight over sensitive areas like financial reporting, audits, board appointments, and remuneration where executive conflicts of interest may arise", "They replace the need for shareholders to approve annual financial statements", "They allow executive directors to set their own bonuses without scrutiny", "They eliminate all business risks automatically"],
    correctAnswer: 0,
    explanation: "Board committees with independent representation strengthen oversight and reduce executive self-interest in areas such as audit quality, pay, and board appointments."
  },
  {
    id: 934,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A large Bangladeshi conglomerate owns a cement factory, a private commercial bank, an insurance company, and a media house. Because family sponsors hold a controlling stake across these entities, inter-company transactions and group loans are frequent. What is a key governance risk in such a group structure?",
    options: ["Related-party transactions and group cross-exposures may not be conducted at arm's length or transparently disclosed, potentially harming minority shareholders or depositors", "Family-owned groups never need internal audit or risk management", "Minority shareholders automatically control daily bank lending decisions", "Inter-company transactions can never affect financial statements"],
    correctAnswer: 0,
    explanation: "In concentrated/group ownership structures, related-party dealings require strong governance oversight, arm's-length terms, and transparent disclosure to protect minority investors and creditors."
  },
  {
    id: 935,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A mid-sized manufacturing company in Narayanganj has no formal whistleblowing policy. When a junior storekeeper discovers that damaged raw materials are being written off as normal production scrap and sold outside the factory, he does not know who to report to safely. How can management improve governance and ethics here?",
    options: ["Establish a confidential whistleblowing channel (with clear reporting routes and anti-retaliation protection), strengthen inventory controls, and reinforce ethical leadership", "Ignore the report so production targets are not delayed", "Publicly accuse the storekeeper of disloyalty before investigating", "Close the store without keeping any records"],
    correctAnswer: 0,
    explanation: "Safe reporting mechanisms, strong physical/accounting controls, and clear accountability help detect and deter fraud and unethical conduct early."
  },
  {
    id: 936,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A commercial bank in Bangladesh experiences rising non-performing loans (NPLs) after approving large loans based on weak collateral checks and ignoring early warning signs from its internal risk department. Which governance and control failure is evident?",
    options: ["Weak risk governance and internal control oversight—failing to act on risk warnings and enforce prudent credit appraisal standards", "Excessive adherence to prudential lending rules", "Over-independence of the Audit Committee", "Excessive transparency in financial disclosures"],
    correctAnswer: 0,
    explanation: "Ignoring risk signals and bypassing credit controls are major symptoms of weak governance that directly erode asset quality and institutional stability."
  },
  {
    id: 937,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A listed company's annual report includes a governance statement saying: 'We follow the corporate governance code on board committees and internal controls, except that our Chair also serves on the board of a non-competing charitable trust; we explain this relationship in the annual report and confirm it does not impair independent board leadership.' What governance practice does this illustrate?",
    options: ["'Comply or explain' transparency and disclosure of potential conflicts/relationships", "Concealing material facts from shareholders", "Replacing the external audit with charity donations", "Eliminating board accountability"],
    correctAnswer: 0,
    explanation: "Transparent disclosure and reasoned explanation allow shareholders and regulators to assess whether a relationship affects independence or governance integrity."
  },
  {
    id: 938,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Compare the governance needs of two stakeholders of a listed manufacturing company in Bangladesh: a long-term institutional equity investor vs. a trade supplier supplying raw packaging materials on 60-day credit terms. Which statement best captures their distinct governance concerns?",
    options: ["The equity investor focuses on sustainable long-term value, board accountability, dividend/capital policy, and reliable reporting, while the credit supplier focuses on liquidity, solvency, and timely payment reliability", "Both have identical legal rights to appoint the company's CEO", "Neither stakeholder is affected by weak internal controls or fraud", "Trade suppliers only care about share buybacks and ignore payment ability"],
    correctAnswer: 0,
    explanation: "Different stakeholders prioritize different risks and outcomes—equity holders look at long-term performance and governance oversight, whereas trade creditors focus heavily on cash flow and ability to pay debts."
  },
  {
    id: 939,
    chapter: "Chapter 9: Governance and Ethics",
    question: "An executive director at a listed company argues that corporate governance rules are 'just expensive red tape that slows down business decisions.' How would a balanced BTF governance analysis respond to this view?",
    options: ["While poorly designed bureaucracy can add cost if applied mechanically, effective governance improves decision quality, risk control, investor trust, and long-term sustainability—provided rules are applied proportionately", "Governance rules should never consider cost or practicality under any circumstances", "Only companies losing money need governance or internal controls", "Investor trust has no link to cost of capital or company valuation"],
    correctAnswer: 0,
    explanation: "Good governance balances oversight and control with commercial agility and proportionality, supporting credibility, lower risk premiums, and sustainable performance."
  },
  {
    id: 940,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A textile mill in Gazipur invests in effluent treatment plants (ETPs), safe worker dormitories, and solar rooftop panels. Management frames these initiatives not merely as charity, but as essential to retaining international buyers, complying with environmental rules, and operating sustainably. Which concepts are closely linked here?",
    options: ["Business ethics, corporate social responsibility (CSR) / sustainability, and long-term stakeholder value", "Purely short-term speculative day trading", "Unregulated pollution and tax evasion", "Eliminating internal accounting records"],
    correctAnswer: 0,
    explanation: "Responsible environmental and labor practices reflect ethical and sustainability commitments while protecting market access, reputation, and long-term business viability."
  },
  {
    id: 941,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A finance manager at a company discovers that a senior colleague has altered vendor bank account numbers in the payment master file so supplier funds are routed to a personal account. Under ethical and governance principles, what should the finance manager do?",
    options: ["Report the matter promptly through appropriate internal governance channels (such as the Audit Committee, Head of Internal Audit, or designated ethics officer) with documented evidence, avoiding personal confrontation or unauthorized disclosure", "Alter other numbers to hide the discrepancy and stay silent", "Post the colleague's name and bank details on public social media immediately", "Approve future payments to the altered account to avoid conflict"],
    correctAnswer: 0,
    explanation: "Escalating suspected fraud through proper internal/governance channels with factual evidence protects integrity, preserves evidence, and follows sound ethical and control procedures."
  },
  {
    id: 942,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Two companies operate in the same sector: Company X has a weak ethical culture where hitting aggressive sales numbers excuses cutting corners on quality and compliance; Company Y has a strong ethical culture where leaders model honesty, encourage speaking up, and reward sustainable results. Over time, how is this difference likely to affect both firms?",
    options: ["Company X faces higher risks of regulatory penalties, lawsuits, reputational damage, and scandals, whereas Company Y builds stronger trust, employee loyalty, and long-term resilience", "Company X is guaranteed zero legal or financial risk because sales targets were met", "Ethical culture only affects non-profit organizations, never commercial firms", "Company Y will automatically fail because ethical firms cannot earn profits"],
    correctAnswer: 0,
    explanation: "Organizational culture shapes everyday behavior: a 'results at any cost' culture breeds misconduct and crises, whereas an ethical culture supports sustainable performance and trust."
  },
  {
    id: 943,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A newly appointed Non-Executive Director on the board of a listed company in Bangladesh is asked to serve on the Audit Committee. She has extensive experience managing retail marketing campaigns and community outreach, but has no background in accounting, audit, or financial control. According to good corporate governance practice for Audit Committees, what is key?",
    options: ["The Audit Committee should have independent directors with relevant skills, including financial/accounting competence, to scrutinize financial statements, internal controls, and audit work effectively", "Financial literacy is irrelevant because the external auditor takes full responsibility for board oversight", "The Audit Committee should be chaired by the company's chief marketing executive", "Audit Committee members should never ask questions about accounting estimates"],
    correctAnswer: 0,
    explanation: "Effective audit oversight requires independent judgment supported by financial/accounting expertise so members can meaningfully challenge judgments, estimates, and control findings."
  },
  {
    id: 944,
    chapter: "Chapter 9: Governance and Ethics",
    question: "Why is the separation of the roles of Board Chair and Chief Executive Officer (CEO) considered a cornerstone of good governance structure?",
    options: ["Because the Chair leads the board and ensures effective governance and accountability, while the CEO leads executive management and day-to-day operations—preventing excessive power concentration in one person", "Because the Chair is not allowed to attend board meetings or talk to shareholders", "Because the CEO audits the Chair's personal bank account", "Because two different people make board meetings twice as expensive"],
    correctAnswer: 0,
    explanation: "Splitting leadership of the board from operational executive leadership creates healthy checks and balances and clarifies accountability."
  },
  {
    id: 945,
    chapter: "Chapter 9: Governance and Ethics",
    question: "In a market-oriented financial system, institutional investors (such as pension funds and asset managers) hold large combined stakes in listed companies. How can active institutional engagement improve corporate governance?",
    options: ["By monitoring board performance, voting thoughtfully on resolutions and director appointments, engaging constructively with boards on strategy and governance, and holding management accountable", "By demanding secret financial figures not available to other investors", "By forcing companies to stop publishing annual financial statements", "By taking over daily factory supervision"],
    correctAnswer: 0,
    explanation: "Active stewardship by institutional shareholders strengthens board accountability, encourages long-term value creation, and discourages governance abuses."
  },
  {
    id: 946,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A company's board consists of 6 executive directors (all senior operational managers) and only 1 non-executive director who is a close business partner of the CEO. Minority shareholders and analysts express concern about board independence. What is the main governance weakness here?",
    options: ["Lack of independent oversight—the board is dominated by insiders/executives and lacks objective challenge from genuinely independent non-executive directors", "Too many independent directors preventing management from running operations", "Excessive separation between ownership and management", "Over-reliance on external audit verification"],
    correctAnswer: 0,
    explanation: "Without a meaningful presence of genuinely independent non-executive directors, the board risks rubber-stamping executive decisions rather than providing objective oversight."
  },
  {
    id: 947,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A trading company in Dhaka imports electronic appliances and discovers that a shipment has minor safety-certification discrepancies. A junior accountant is told by a senior manager: 'Just record the customs duty as a miscellaneous expense and don't mention the compliance issue to anyone—it's good for the company.' Which fundamental ethical principles are challenged if the accountant stays silent without taking appropriate action?",
    options: ["Integrity, professional behaviour, and objective/truthful reporting", "Discrete sampling and scatter-plot visualization", "Bank-oriented relationship lending", "Two-tier supervisory board structure"],
    correctAnswer: 0,
    explanation: "Covering up regulatory/compliance issues and misclassifying costs undermines honesty, integrity, and responsible professional conduct."
  },
  {
    id: 948,
    chapter: "Chapter 9: Governance and Ethics",
    question: "When evaluating whether a business practice is ethical, a manager asks: 'Would I be comfortable if this decision and my reasoning were published on the front page of a national newspaper tomorrow morning?' What practical ethical test is the manager applying?",
    options: ["A transparency / public-scrutiny ('front-page') test to check whether the action can be openly defended on ethical grounds", "A statistical hypothesis test for Type I error", "A calculation of price elasticity of demand", "A measurement of internal economies of scale"],
    correctAnswer: 0,
    explanation: "Testing how a decision looks under public and stakeholder scrutiny helps expose rationalizations, conflicts of interest, or unethical shortcuts."
  },
  {
    id: 949,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A listed bank in Bangladesh faces criticism after a major borrower defaults on large loans that were renewed repeatedly despite overdue installments and weak credit ratings. Regulators and analysts point to poor credit governance, weak board risk oversight, and inadequate internal controls. Which topic from Chapter 9 does this scenario primarily illustrate?",
    options: ["Symptoms of poor corporate governance and weak risk/control oversight in a bank-dominated financial system", "Perfect competition with homogeneous goods", "Veblen luxury goods with upward-sloping demand", "Confirmatory factor analysis in spreadsheets"],
    correctAnswer: 0,
    explanation: "Evergreening/renewing troubled loans without proper risk control or board challenge reflects governance and risk-management failure with serious financial consequences."
  },
  {
    id: 950,
    chapter: "Chapter 9: Governance and Ethics",
    question: "A company in Bangladesh publishes an ethics code stating its commitment to fair competition, anti-corruption, worker welfare, and accurate financial reporting, and trains managers and staff on how to apply it in daily work. Why must an ethics code be backed by training, enforcement, and leadership example rather than existing only on paper?",
    options: ["Because a written code alone does not change behavior unless leaders model it, employees understand how to apply it under pressure, and violations carry fair, consistent consequences", "Because written codes are illegal under corporate law", "Because employees never read company policies under any circumstances", "Because training eliminates the need for internal controls or audits"],
    correctAnswer: 0,
    explanation: "An ethical culture requires lived behavior, practical guidance for gray areas, supportive controls, and consistent enforcement—not just a formal policy document."
  },
  {
    id: 951,
    chapter: "Chapter 9: Governance and Ethics",
    question: "As a CA Certificate Level student preparing for the BTF examination in Bangladesh, you are asked to summarize why governance and ethics matter together for modern business and finance. Which statement provides the most complete summary?",
    options: ["Governance provides the structural accountability, oversight, and controls that direct and check power, while ethics provides the moral values and integrity that guide right conduct—together sustaining stakeholder trust and long-term value", "Governance is only about legal paperwork, while ethics is irrelevant once laws exist", "Ethics replaces the need for boards, audits, and internal controls", "Governance and ethics apply only to large multinational banks and never to growing companies"],
    correctAnswer: 0,
    explanation: "Structures and rules (governance) work best alongside principled values and ethical culture (ethics) to align behavior, manage risk, and maintain public and investor trust."
  }
];

const btfChapter10Questions = [
  {
    id: 1002,
    chapter: "Chapter 10: Corporate Governance",
    question: "Mr. Rahim has just been appointed as a Non-executive Director of XYZ Limited, a premium listed company. A consultant told him that under the Corporate Governance Code he has the following responsibilities: Responsibility 1: Appointing and removing executive directors Responsibility 2: Reporting on the performance of the company Responsibility 3: Holding executive directors to account for their performance Responsibility 4: Developing and implementing internal controlsWhich of the points listed correctly identify Rahim's responsibilities as a non-executive director?",
    options: ["1 and 2", "2 and 3", "1 and 3", "2 and 4"],
    correctAnswer: 2,
    explanation: "Non-executive directors are responsible for appointing/removing executive directors and holding them to account. Developing internal controls and reporting on performance are executive management duties [cite: 1]."
  },
  {
    id: 1003,
    chapter: "Chapter 10: Corporate Governance",
    question: "The chair of XYZ Limited, a premium listed company, is considering which of the company's non-executive directors can be classified as independent. Even if a non-executive director has worked as an employee for the company in the past, they may still be classified as independent if the period of employment finished at least:",
    options: ["2 (two) years ago", "3 (Three) years ago", "4 (Four) years ago", "5 (Five) years ago"],
    correctAnswer: 0,
    explanation: "Under standard governance code rules and local BSEC guidelines, a former employee can be classified as independent if their employment finished at least 2 years ago [cite: 1]."
  },
  {
    id: 1004,
    chapter: "Chapter 10: Corporate Governance",
    question: "XYZ Limited has just obtained a premium listing on the Dhaka Stock Exchange. A consultant made two statements: Statement (1): As XYZ Limited has a premium listing, the Listing Rules mean that the Code applies so the company must never depart from any of its requirements. Statement (2): If XYZ Limited had joined the FTSE 100, compliance with the Code would be a statutory requirement.Identify whether each statement is true or false.",
    options: ["Statement (1) true; Statement (2) false", "Statement (1) false; Statement (2) false", "Statement (1) true; Statement (2) true", "Statement (1) false; Statement (2) true"],
    correctAnswer: 1,
    explanation: "Statement 1 is false because codes operate on 'comply or explain' flexibility. Statement 2 is false because code compliance is a listing/regulatory requirement, not statutory law [cite: 1]."
  },
  {
    id: 1005,
    chapter: "Chapter 10: Corporate Governance",
    question: "According to the Corporate Governance Code, a company should seek to improve corporate governance by ensuring that:",
    options: ["The chair and chief executive are the same individual in order to avoid confusion", "The chair and chief executive are different individuals in order to prevent one person having too much power", "The chair and chief executive are different individuals in case one dies or becomes incapacitated", "The company chairman does not take up outside directorships"],
    correctAnswer: 1,
    explanation: "Separation of the chair and chief executive roles prevents unfettered powers from resting in a single individual [cite: 1]."
  },
  {
    id: 1006,
    chapter: "Chapter 10: Corporate Governance",
    question: "The Corporate Governance Code contains principles for the level and make-up of directors' remuneration. A consultant listed the following: Principle 1: Only basic salary should be pensionable Principle 2: Directors should not be rewarded for poor performance Principle 3: Obtain the auditor's approval of the remuneration setWhich of the points listed correctly reflect the principles and provisions of the Corporate Governance Code?",
    options: ["1 and 2 only", "2 and 3 only", "1 and 3 only", "1, 2 and 3"],
    correctAnswer: 0,
    explanation: "Only basic salary should be pensionable, and directors should not be rewarded for poor performance. External auditors do not approve executive remuneration [cite: 1]."
  },
  {
    id: 1007,
    chapter: "Chapter 10: Corporate Governance",
    question: "The board of directors of XYZ Limited, a premium listed company, is considering the membership of its remuneration committee. In this regard, which statement is true?",
    options: ["The chair of the board must be one of the members of the remuneration committee.", "The chair of the board may be both a member and chair of the remuneration committee.", "The chair of the board may be a member but cannot chair the remuneration committee.", "The chair of the board cannot be a member of the remuneration committee."],
    correctAnswer: 3,
    explanation: "Under strict governance codes (and BSEC spirit), the board chair cannot be a member of the remuneration committee to maintain independence [cite: 1]."
  },
  {
    id: 1008,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which statement about the requirements of the Corporate Governance Code is true?",
    options: ["Non-executive directors of premium listed companies only need to be submitted for re-election every three years.", "In annual and half-yearly financial statements, the board should state whether it considers it is appropriate to adopt the going concern basis.", "Directors' notice or service contracts should not exceed three years.", "The annual report should state the company's business model but its strategy may remain confidential."],
    correctAnswer: 1,
    explanation: "The board must explicitly state whether it considers it appropriate to adopt the going concern basis of accounting [cite: 1]."
  },
  {
    id: 1009,
    chapter: "Chapter 10: Corporate Governance",
    question: "ABC Ltd. is a small premium listed company. As a minimum, how many directors are required for its audit committee?",
    options: ["One", "Two", "Three", "Four"],
    correctAnswer: 2,
    explanation: "Both under standard international codes and the BSEC Code, an audit committee must comprise a minimum of 3 members [cite: 1]."
  },
  {
    id: 1010,
    chapter: "Chapter 10: Corporate Governance",
    question: "According to the Corporate Governance Code, which of the following is responsible for making recommendations in regard to the appointment, reappointment and removal of external auditors?",
    options: ["The nomination committee", "The remuneration committee", "The audit committee", "The non-executive directors"],
    correctAnswer: 2,
    explanation: "The audit committee is responsible for reviewing and making recommendations to the board regarding external auditor appointment and removal [cite: 1]."
  },
  {
    id: 1011,
    chapter: "Chapter 10: Corporate Governance",
    question: "ABC Ltd is a small premium listed company. As a consequence, the company:",
    options: ["Must comply with all the requirements of the Corporate Governance Code", "Is governed by other corporate governance regulations than the Corporate Governance Code", "Can be flexible in how it applies the Corporate Governance Code", "Is not affected by the requirements of the Corporate Governance Code"],
    correctAnswer: 2,
    explanation: "Smaller premium listed companies are given flexibility in applying certain provisions of the governance code under 'comply or explain' [cite: 1]."
  },
  {
    id: 1012,
    chapter: "Chapter 10: Corporate Governance",
    question: "In relation to fundamental accounting principles, directors are expected to report in the company's annual financial statements on:",
    options: ["The going concern status of the company", "The materiality of specific company transactions", "The accruals approach to accounting in the company", "The consistency of treatment of particular items"],
    correctAnswer: 0,
    explanation: "Directors are required to formally report on the going concern status of the company in financial reports [cite: 1]."
  },
  {
    id: 1013,
    chapter: "Chapter 10: Corporate Governance",
    question: "ABC Ltd is currently creating a list of potential members of its audit committee. Under the Corporate Governance Code, the list must comprise only:",
    options: ["Independent non-executive directors who all have recent and relevant financial experience", "Independent non-executive directors with at least one who has recent and relevant financial experience", "Non-executive directors with recent and relevant financial experience", "Executive directors with at least one who has recent and relevant financial experience"],
    correctAnswer: 1,
    explanation: "Audit committees must consist of independent non-executive directors, with at least one member possessing recent and relevant financial experience [cite: 1]."
  },
  {
    id: 1014,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under the requirements of the Corporate Governance Code, who is responsible for monitoring a company's risk management and internal control systems?",
    options: ["The executive directors only", "The non-executive directors only", "The entire board of directors", "The audit committee"],
    correctAnswer: 2,
    explanation: "The entire board of directors maintains ultimate responsibility for monitoring risk management and internal control systems [cite: 1]."
  },
  {
    id: 1015,
    chapter: "Chapter 10: Corporate Governance",
    question: "Mr. Rahim is a full-time Executive Director of ABC Ltd. The executive directors of XYZ Limited have asked Mr. Rahim to become a non-executive director of XYZ Limited. The guidance provided by the Corporate Governance Code means that:",
    options: ["Mr. Rahim will be allowed to accept the offer", "Mr. Rahim will not be allowed to accept the offer", "Mr. Rahim will only be allowed to accept the offer if he buys shares in both companies", "Mr. Rahim will only be allowed to accept the offer if the non-executive directors of both companies agree"],
    correctAnswer: 0,
    explanation: "Executive directors are generally permitted to hold one non-executive directorship in another company to broaden business acumen, subject to board approval [cite: 1]."
  },
  {
    id: 1016,
    chapter: "Chapter 10: Corporate Governance",
    question: "ABC Ltd is considering the re-appointment of its external statutory auditors. Which of the following is responsible for formally appointing the external auditors?",
    options: ["The nomination committee", "The remuneration committee", "The board of directors", "Shareholders"],
    correctAnswer: 3,
    explanation: "External auditors are formally appointed by shareholders through voting at the Annual General Meeting (AGM) [cite: 1]."
  },
  {
    id: 1017,
    chapter: "Chapter 10: Corporate Governance",
    question: "Mst. Sharmin is a non-executive director of ABC Ltd. According to the Corporate Governance Code, which of the following statements about her remuneration is correct?",
    options: ["Her remuneration should reflect her expertise", "Mst. Sharmin should decide her remuneration in conjunction with the remuneration committee", "Her remuneration should reflect her time commitment and responsibilities", "Her remuneration is negotiated with the remuneration committee and may include performance-related elements"],
    correctAnswer: 2,
    explanation: "Non-executive directors' fees should reflect their time commitment and responsibilities, and must not include performance-related pay [cite: 1]."
  },
  {
    id: 1018,
    chapter: "Chapter 10: Corporate Governance",
    question: "With regard to the board of directors of a premium listed company (excluding the chairman), the UK Corporate Governance Code requires that the proportion who are independent non-executive directors should be:",
    options: ["Between 10% and 24%", "Between 25% and 39%", "Between 40% and 49%", "50% or over"],
    correctAnswer: 3,
    explanation: "The UK Corporate Governance Code mandates that at least 50% of the board (excluding the chair) should comprise independent non-executive directors [cite: 1]."
  },
  {
    id: 1019,
    chapter: "Chapter 10: Corporate Governance",
    question: "ABC Ltd. has engaged its external auditors to provide consultancy services. Which entity would usually be expected to examine the implications of this engagement?",
    options: ["The board of directors", "The remuneration committee", "The audit committee", "The non-executive directors"],
    correctAnswer: 2,
    explanation: "The audit committee reviews non-audit services provided by statutory auditors to ensure objectivity and independence are not threatened [cite: 1]."
  },
  {
    id: 1020,
    chapter: "Chapter 10: Corporate Governance",
    question: "The appointment of suitably qualified, independent external statutory auditors is the decision of listed companies':",
    options: ["Shareholders", "Audit committee", "Board of directors", "Finance director"],
    correctAnswer: 0,
    explanation: "Shareholders make the ultimate decision on auditor appointments at general meetings following board recommendations [cite: 1]."
  },
  {
    id: 1021,
    chapter: "Chapter 10: Corporate Governance",
    question: "ABC Ltd. operates its own internal audit function. It chooses not to make use of an external supplier. It is therefore vital that the company has arrangements to ensure that there is no compromise of the:",
    options: ["Independence of the internal auditors", "Integrity of information security systems", "Stewardship of directors", "Rigor of financial reporting processes"],
    correctAnswer: 0,
    explanation: "Internal auditors must maintain operational independence and objectivity from management functions [cite: 1]."
  },
  {
    id: 1022,
    chapter: "Chapter 10: Corporate Governance",
    question: "Mr. Akram is the Chief Executive of XYZ limited. His fellow directors want him to replace the retiring Chair and stay as CEO for the first year. The guidance in the Corporate Governance Code recommends that:",
    options: ["Mr. Akram should assume both roles concurrently subject to consultation with major shareholders", "Mr. Akram should not assume both roles concurrently nor go on to be the company's Chair", "Mr. Akram can assume both roles concurrently subject to the board setting out reasons", "Mr. Akram can only assume both roles concurrently if non-executive directors agree"],
    correctAnswer: 1,
    explanation: "The CG Code explicitly prohibits a CEO from subsequently becoming the Chairman of the same company to prevent concentration of power [cite: 1]."
  },
  {
    id: 1023,
    chapter: "Chapter 10: Corporate Governance",
    question: "Mst. Sharmin has just been appointed as a Director of Impala plc. Following her appointment, she will be subject to election by shareholders:",
    options: ["At the first AGM after her appointment and then at intervals of no more than three years after that", "At the first AGM after her appointment and then at intervals of no more than two years after that", "Only at the first AGM after her appointment", "At every AGM"],
    correctAnswer: 3,
    explanation: "Under current UK/International CG Code standards for premium listed companies, all directors are subject to annual re-election at every AGM [cite: 1]."
  },
  {
    id: 1024,
    chapter: "Chapter 10: Corporate Governance",
    question: "XYZ limited is a listed company that has recently had an external audit. As well as whether financial statements give a 'true and fair view', which of the following will external auditors report on?",
    options: ["The experience and ability of the chief finance officer", "Whether finance staff are compliant with CPD requirements", "The company's compliance with the Corporate Governance Code", "The standard of work performed by internal audit"],
    correctAnswer: 2,
    explanation: "External auditors review and report on compliance with specific provisions of the Corporate Governance Code required by listing rules [cite: 1]."
  },
  {
    id: 1025,
    chapter: "Chapter 10: Corporate Governance",
    question: "The ability to meet the needs of the present without compromising the ability of future generations to meet their own needs is best described as:",
    options: ["Corporate responsibility", "Sustainability", "Business ethics", "Natural capital"],
    correctAnswer: 1,
    explanation: "This is the universally recognized definition of sustainability [cite: 1]."
  },
  {
    id: 1026,
    chapter: "Chapter 10: Corporate Governance",
    question: "According to the BSEC Corporate Governance Code in Bangladesh, what are the minimum and maximum limits of members for a listed company's Board of Directors?",
    options: ["Minimum 3, Maximum 12", "Minimum 5, Maximum 20", "Minimum 7, Maximum 15", "Minimum 5, Maximum 15"],
    correctAnswer: 1,
    explanation: "The BSEC Corporate Governance Code specifies that board size must be between 5 and 20 members [cite: 1]."
  },
  {
    id: 1027,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under BSEC regulations, what is the minimum proportion of Independent Directors required on the Board of Directors of a listed company?",
    options: ["At least 1/10th", "At least 1/5th", "At least 1/3rd", "At least 50%"],
    correctAnswer: 1,
    explanation: "BSEC regulations mandate that at least one-fifth (1/5th) of total directors must be independent [cite: 1]."
  },
  {
    id: 1028,
    chapter: "Chapter 10: Corporate Governance",
    question: "To qualify as an Independent Director under BSEC Corporate Governance guidelines, an individual must hold less than what percentage of total paid-up shares of the company?",
    options: ["Less than 1%", "Less than 5%", "Less than 10%", "Zero shares strictly"],
    correctAnswer: 0,
    explanation: "An independent director must hold less than 1% of the total paid-up shares of the company [cite: 1]."
  },
  {
    id: 1029,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the maximum number of listed companies in which a person can hold the position of Independent Director concurrently under the BSEC Code?",
    options: ["3 companies", "5 companies", "7 companies", "10 companies"],
    correctAnswer: 1,
    explanation: "BSEC rules restrict an individual from holding independent directorships in more than 5 listed companies simultaneously [cite: 1]."
  },
  {
    id: 1030,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the standard tenure of office for an Independent Director under the BSEC Corporate Governance Code, and how many times can it be extended?",
    options: ["2 years, extendable for 2 tenures", "3 years, extendable for 1 tenure only", "3 years, extendable indefinitely", "5 years, non-extendable"],
    correctAnswer: 1,
    explanation: "Tenure is 3 years, renewable for only 1 further term (maximum 6 consecutive years), requiring a 3-year gap thereafter [cite: 1]."
  },
  {
    id: 1031,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under BSEC rules, if the position of an Independent Director falls vacant, within how many days must the post be filled by the Board?",
    options: ["30 days", "60 days", "90 days", "120 days"],
    correctAnswer: 2,
    explanation: "A vacancy for an independent director cannot remain unfilled for more than 90 days under BSEC rules [cite: 1]."
  },
  {
    id: 1032,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under the BSEC Corporate Governance Code, the Chairperson of the Board must be elected from among which category of directors?",
    options: ["Executive Directors", "Independent Directors only", "Non-Executive Directors", "Managing Directors"],
    correctAnswer: 2,
    explanation: "The Chairperson of the Board must be elected from among the non-executive directors [cite: 1]."
  },
  {
    id: 1033,
    chapter: "Chapter 10: Corporate Governance",
    question: "According to BSEC guidelines, which combination of executive positions CANNOT be held by the same individual in a listed company?",
    options: ["MD and CEO", "Chairperson and Managing Director / CEO", "CFO and Head of Internal Audit", "Both B and C"],
    correctAnswer: 3,
    explanation: "Chairperson and CEO roles must be separate, and key executive control roles like CFO, CS, and HIAC must all be held by different individuals [cite: 1]."
  },
  {
    id: 1034,
    chapter: "Chapter 10: Corporate Governance",
    question: "How many years of minimum relevant professional experience must an Independent Director possess according to BSEC regulations?",
    options: ["5 years", "8 years", "10 years", "15 years"],
    correctAnswer: 2,
    explanation: "BSEC Code requires independent directors to possess a minimum of 10 years of professional or executive experience [cite: 1]."
  },
  {
    id: 1035,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under BSEC rules, a former executive of a company can only be appointed as an Independent Director of that same company if they have been out of executive service for at least:",
    options: ["1 financial year", "2 financial years", "3 financial years", "5 financial years"],
    correctAnswer: 1,
    explanation: "Former executives must wait at least 2 financial years before being eligible for independent directorship in the same company [cite: 1]."
  },
  {
    id: 1036,
    chapter: "Chapter 10: Corporate Governance",
    question: "What is the minimum number of members required to constitute an Audit Committee under the BSEC Corporate Governance Code?",
    options: ["2 members", "3 members", "4 members", "5 members"],
    correctAnswer: 1,
    explanation: "The Audit Committee must comprise at least 3 members [cite: 1]."
  },
  {
    id: 1037,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under BSEC rules, who must be selected as the Chairperson of the Audit Committee?",
    options: ["The Chairperson of the Board", "The Chief Executive Officer", "An Independent Director", "Any Non-Executive Director"],
    correctAnswer: 2,
    explanation: "BSEC Code strictly requires the Chairperson of the Audit Committee to be an Independent Director [cite: 1]."
  },
  {
    id: 1038,
    chapter: "Chapter 10: Corporate Governance",
    question: "To form a valid quorum for an Audit Committee meeting under BSEC guidelines, whose presence is strictly mandatory?",
    options: ["The Managing Director", "At least one Independent Director", "The External Statutory Auditor", "The Chief Financial Officer"],
    correctAnswer: 1,
    explanation: "At least one Independent Director must be present to form a valid quorum for Audit Committee meetings [cite: 1]."
  },
  {
    id: 1039,
    chapter: "Chapter 10: Corporate Governance",
    question: "How many minimum meetings must the Audit Committee conduct in a financial year under BSEC Corporate Governance rules?",
    options: ["2 meetings", "3 meetings", "4 meetings", "6 meetings"],
    correctAnswer: 2,
    explanation: "The Audit Committee is required to hold at least 4 meetings per financial year [cite: 1]."
  },
  {
    id: 1040,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under BSEC regulations, if the Audit Committee reports a material defect or fraud to the Board three times or 6 months pass without rectification, to whom must the Audit Committee report?",
    options: ["Registrar of Joint Stock Companies (RJSC)", "Bangladesh Securities and Exchange Commission (BSEC)", "High Court Division", "National Board of Revenue (NBR)"],
    correctAnswer: 1,
    explanation: "Unresolved material defects or frauds reported repeatedly must be disclosed directly to the BSEC [cite: 1]."
  },
  {
    id: 1041,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under BSEC regulations, the positions of CFO, Company Secretary (CS), and Head of Internal Audit and Compliance (HIAC) must be filled by:",
    options: ["The same individual to maintain efficiency", "Different individuals", "Non-executive directors", "External consultants"],
    correctAnswer: 1,
    explanation: "CFO, CS, and HIAC must be completely separate individuals to maintain proper checks and balances [cite: 1]."
  },
  {
    id: 1042,
    chapter: "Chapter 10: Corporate Governance",
    question: "The Turnbull Guidance is primarily associated with helping companies implement which core principle of Corporate Governance?",
    options: ["Remuneration disclosure", "Maintenance of a sound system of internal control (Principle C3)", "External auditor rotation", "Board diversity"],
    correctAnswer: 1,
    explanation: "Turnbull Guidance provides recommendations for establishing and maintaining sound internal control systems under Principle C3 [cite: 1]."
  },
  {
    id: 1043,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which of the following correctly describes the main objective of an external audit in corporate governance?",
    options: ["To certify that financial statements are 100% correct", "To prevent and detect all instances of fraud", "To express an independent opinion on whether financial statements give a 'true and fair view'", "To manage internal risk"],
    correctAnswer: 2,
    explanation: "The primary objective of an external audit is to provide an independent opinion on whether financial statements give a true and fair view [cite: 1]."
  },
  {
    id: 1044,
    chapter: "Chapter 10: Corporate Governance",
    question: "Primary responsibility for preventing and detecting fraud and error within an organization rests with:",
    options: ["External auditors", "Directors and Management", "Audit Committee Chair", "BSEC Inspectors"],
    correctAnswer: 1,
    explanation: "Management and those charged with governance hold primary responsibility for preventing and detecting fraud and error [cite: 1]."
  },
  {
    id: 1045,
    chapter: "Chapter 10: Corporate Governance",
    question: "According to Turnbull Guidance, a sound system of internal control provides:",
    options: ["Absolute assurance against failure", "Reasonable assurance regarding operational, reporting, and compliance objectives", "Complete protection against human error", "Guarantee of business profitability"],
    correctAnswer: 1,
    explanation: "Internal controls provide reasonable, rather than absolute, assurance against material misstatement or loss [cite: 1]."
  },
  {
    id: 1046,
    chapter: "Chapter 10: Corporate Governance",
    question: "Internal Audit function primarily reports on internal controls and risk management to:",
    options: ["Shareholders at the AGM", "External statutory auditors", "The Board of Directors and Audit Committee", "The Registrar of Joint Stock Companies"],
    correctAnswer: 2,
    explanation: "Internal audit reports directly to the Audit Committee and Board to preserve functional independence [cite: 1]."
  },
  {
    id: 1047,
    chapter: "Chapter 10: Corporate Governance",
    question: "Which of the following is considered a major symptom of a serious corporate governance failure?",
    options: ["Frequent rotation of audit partners", "Unexpected financial collapse without prior warning", "Appointing independent directors via AGM", "Separation of Chair and CEO roles"],
    correctAnswer: 1,
    explanation: "An unexpected financial collapse without prior warning is a primary indicator of governance breakdown and poor internal controls [cite: 1]."
  },
  {
    id: 1048,
    chapter: "Chapter 10: Corporate Governance",
    question: "The Directors' Report of a listed company under BSEC Code requires a summary of key operating and financial data for at least how many preceding years?",
    options: ["Preceding 3 years", "Preceding 5 years", "Preceding 7 years", "Preceding 10 years"],
    correctAnswer: 1,
    explanation: "BSEC regulations require financial summaries for at least the preceding 5 years to be included in the Directors' Report [cite: 1]."
  },
  {
    id: 1049,
    chapter: "Chapter 10: Corporate Governance",
    question: "An Independent Director under BSEC Code must not have been a partner or executive of the company's statutory audit firm during the preceding:",
    options: ["1 year", "2 years", "3 years", "5 years"],
    correctAnswer: 2,
    explanation: "Must not have been a partner or executive of the statutory/audit firm during the preceding 3 years [cite: 1]."
  },
  {
    id: 1050,
    chapter: "Chapter 10: Corporate Governance",
    question: "Under BSEC regulations, who acts as the Secretary of the Audit Committee?",
    options: ["Chief Financial Officer (CFO)", "Head of Internal Audit and Compliance (HIAC)", "Company Secretary (CS)", "Managing Director"],
    correctAnswer: 2,
    explanation: "The Company Secretary (CS) serves as the secretary to the Audit Committee under BSEC provisions [cite: 1]."
  },
  {
    id: 1051,
    chapter: "Chapter 10: Corporate Governance",
    question: "In the Turnbull Guidance / Internal Control framework, which of the following is an inherent limitation of internal control?",
    options: ["Requirement of independent directors", "Possibility of management override or human error", "Regular audit committee reporting", "Disclosure of related party transactions"],
    correctAnswer: 1,
    explanation: "Inherent limitations of internal control include human error, collusion, and management override [cite: 1]."
  }
];

const btfChapter1Questions = [
  {
    id: 101,
    chapter: "Chapter 1: Introduction to Business",
    question: "What is the primary purpose of an organization?",
    options: ["To employ as many people as possible", "To achieve common objectives", "To increase government revenue", "To eliminate competition"],
    correctAnswer: 1,
    explanation: "Organizations bring people and resources together to achieve common objectives that individuals may not achieve alone."
  },
  {
    id: 102,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which concept means that the combined result of two or more parties is greater than their individual results?",
    options: ["Accountability", "Delegation", "Synergy", "Authority"],
    correctAnswer: 2,
    explanation: "Synergy means 1+1>2, where cooperation creates additional value."
  },
  {
    id: 103,
    chapter: "Chapter 1: Introduction to Business",
    question: "A company that controls another company is called a:",
    options: ["Subsidiary", "Associate", "Holding company", "Stakeholder"],
    correctAnswer: 2,
    explanation: "A holding or parent company controls another company, which is generally called its subsidiary."
  },
  {
    id: 104,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which of the following is generally associated with significant influence rather than control?",
    options: ["Subsidiary", "Associate", "Holding company", "Parent company"],
    correctAnswer: 1,
    explanation: "An associate is generally an entity over which the investor has significant influence but not control."
  },
  {
    id: 105,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which person is definitely a stakeholder but may not be a stockholder?",
    options: ["Ordinary shareholder", "Preference shareholder", "Employee", "Equity investor"],
    correctAnswer: 2,
    explanation: "Employees are stakeholders because they are affected by the organization, but they do not necessarily own shares."
  },
  {
    id: 106,
    chapter: "Chapter 1: Introduction to Business",
    question: "What does profit satisficing mean?",
    options: ["Maximizing profit at any cost", "Earning an acceptable level of profit", "Eliminating all costs", "Avoiding profit completely"],
    correctAnswer: 1,
    explanation: "Profit satisficing means seeking a satisfactory or acceptable profit rather than the absolute maximum profit."
  },
  {
    id: 107,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which concept explains why managers cannot always make perfectly rational decisions?",
    options: ["Synergy", "Bounded rationality", "Delegation", "Authority"],
    correctAnswer: 1,
    explanation: "Bounded rationality recognizes limitations in information, time, resources, and human decision-making ability."
  },
  {
    id: 108,
    chapter: "Chapter 1: Introduction to Business",
    question: "What does KPI stand for?",
    options: ["Key Profit Indicator", "Key Performance Indicator", "Key Planning Instrument", "Key Productivity Index"],
    correctAnswer: 1,
    explanation: "A KPI is a measurable indicator used to evaluate performance against objectives."
  },
  {
    id: 109,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which type of power comes from specialized knowledge or expertise?",
    options: ["Reward power", "Legitimate power", "Expert power", "Coercive power"],
    correctAnswer: 2,
    explanation: "Expert power comes from knowledge, skills, or specialized expertise."
  },
  {
    id: 110,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which management function involves comparing actual performance with planned performance?",
    options: ["Planning", "Organizing", "Leading", "Controlling"],
    correctAnswer: 3,
    explanation: "Controlling involves monitoring performance, comparing it with standards, and taking corrective action."
  },
  {
    id: 111,
    chapter: "Chapter 1: Introduction to Business",
    question: "Company A owns 80% of the voting shares of Company B. What is Company B most likely to be?",
    options: ["Associate", "Subsidiary", "Stakeholder", "Joint customer"],
    correctAnswer: 1,
    explanation: "Ownership giving control normally makes Company B a subsidiary of Company A."
  },
  {
    id: 112,
    chapter: "Chapter 1: Introduction to Business",
    question: "Company X owns 30% of Company Y and has significant influence but no control. Company Y is most likely:",
    options: ["A subsidiary", "A holding company", "An associate", "A creditor"],
    correctAnswer: 2,
    explanation: "Significant influence without control generally indicates an associate relationship."
  },
  {
    id: 113,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which statement correctly distinguishes a stakeholder from a stockholder?",
    options: ["Stakeholders always own shares", "Stockholders are never stakeholders", "Stockholders own shares, while stakeholders have an interest in or are affected by the organization", "Stakeholders are always employees"],
    correctAnswer: 2,
    explanation: "Stockholders have ownership; stakeholders have a broader interest in or relationship with the organization."
  },
  {
    id: 114,
    chapter: "Chapter 1: Introduction to Business",
    question: "A company identifies “fast delivery” as essential to customer satisfaction. Fast delivery is most appropriately classified as:",
    options: ["KPI", "CSF", "Authority", "Accountability"],
    correctAnswer: 1,
    explanation: "A Critical Success Factor is an area that must be performed well for success."
  },
  {
    id: 115,
    chapter: "Chapter 1: Introduction to Business",
    question: "If “fast delivery” is a CSF, which of the following could be an appropriate KPI?",
    options: ["Number of shareholders", "Average delivery time", "Number of competitors", "Employee age"],
    correctAnswer: 1,
    explanation: "Average delivery time quantitatively measures delivery performance."
  },
  {
    id: 116,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which measurement focuses on how effectively assets are used to generate sales?",
    options: ["Profitability measurement", "Activity measurement", "Productivity measurement", "Accountability measurement"],
    correctAnswer: 1,
    explanation: "Activity measurement examines the efficiency of resource or asset utilization."
  },
  {
    id: 117,
    chapter: "Chapter 1: Introduction to Business",
    question: "Producing 500 units using 50 labour hours gives which productivity measure?",
    options: ["5 units/hour", "10 units/hour", "50 units/hour", "100 units/hour"],
    correctAnswer: 1,
    explanation: "Productivity = Output ÷ Input = 500 ÷ 50 = 10 units per hour."
  },
  {
    id: 118,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which power is based primarily on the ability to provide bonuses or promotions?",
    options: ["Expert power", "Reward power", "Referent power", "Legitimate power"],
    correctAnswer: 1,
    explanation: "Reward power comes from the ability to provide valued benefits."
  },
  {
    id: 119,
    chapter: "Chapter 1: Introduction to Business",
    question: "A respected manager influences employees because they admire her personality and leadership. This is:",
    options: ["Coercive power", "Expert power", "Referent power", "Legitimate power"],
    correctAnswer: 2,
    explanation: "Referent power comes from admiration, respect, or identification with the person."
  },
  {
    id: 120,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which statement best describes authority?",
    options: ["Ability to influence anyone without formal rights", "Formal right to make decisions and give orders", "Duty to complete assigned work", "Obligation to explain results"],
    correctAnswer: 1,
    explanation: "Authority is the legitimate right associated with an organizational position."
  },
  {
    id: 121,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which concept refers specifically to the duty to perform an assigned task?",
    options: ["Authority", "Responsibility", "Power", "Accountability"],
    correctAnswer: 1,
    explanation: "Responsibility is the obligation to perform assigned duties."
  },
  {
    id: 122,
    chapter: "Chapter 1: Introduction to Business",
    question: "A manager must explain why a department failed to meet its target. This is primarily:",
    options: ["Authority", "Responsibility", "Accountability", "Delegation"],
    correctAnswer: 2,
    explanation: "Accountability means being answerable for actions, decisions, and results."
  },
  {
    id: 123,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which is NOT normally an element of effective delegation?",
    options: ["Assigning responsibility", "Granting necessary authority", "Eliminating accountability", "Establishing accountability"],
    correctAnswer: 2,
    explanation: "Delegation transfers tasks and authority, but accountability is not eliminated."
  },
  {
    id: 124,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which manager directly supervises employees and has authority over their work?",
    options: ["Staff manager", "Line manager", "External consultant", "Auditor"],
    correctAnswer: 1,
    explanation: "A line manager has direct authority over subordinates."
  },
  {
    id: 125,
    chapter: "Chapter 1: Introduction to Business",
    question: "A specialist who advises managers on employee recruitment is most likely a:",
    options: ["Line manager", "Staff manager", "Project manager", "General customer"],
    correctAnswer: 1,
    explanation: "Staff managers provide specialist advice and support to line managers."
  },
  {
    id: 126,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which culture emphasizes rules, procedures, stability, and internal control?",
    options: ["Human Relations Culture", "Open Systems Culture", "Internal Process Culture", "Rational Goal Culture"],
    correctAnswer: 2,
    explanation: "Internal Process Culture emphasizes internal stability, procedures, rules, and control."
  },
  {
    id: 127,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which management model emphasizes targets, productivity, and measurable results?",
    options: ["Human Relations Model", "Rational Goal Model", "Internal Process Model", "Open Systems Model"],
    correctAnswer: 1,
    explanation: "The Rational Goal Model focuses on goals, productivity, efficiency, and results."
  },
  {
    id: 128,
    chapter: "Chapter 1: Introduction to Business",
    question: "A company combines the expertise of its finance and technology teams to develop a digital payment system. The resulting service is significantly better than either team could produce independently. Which concept best explains this outcome?",
    options: ["Bounded rationality", "Synergy", "Accountability", "Profit satisficing"],
    correctAnswer: 1,
    explanation: "The combined contribution produces additional value beyond the separate contributions—1+1>2."
  },
  {
    id: 129,
    chapter: "Chapter 1: Introduction to Business",
    question: "A manager has sufficient authority but lacks reliable information and time to evaluate every alternative. He chooses an option that meets the minimum acceptable requirements. Which combination best explains the decision?",
    options: ["Synergy and maximization", "Bounded rationality and satisficing", "Authority and coercion", "Accountability and delegation"],
    correctAnswer: 1,
    explanation: "Limited information/time create bounded rationality, while choosing an acceptable option reflects satisficing."
  },
  {
    id: 130,
    chapter: "Chapter 1: Introduction to Business",
    question: "A parent company owns 60% of another company but allows the subsidiary's management to conduct daily operations independently. Which statement is most accurate?",
    options: ["The parent has no control because it does not manage daily operations", "The company automatically becomes an associate", "Ownership and control can exist even when daily operations are delegated", "The subsidiary becomes a stakeholder only"],
    correctAnswer: 2,
    explanation: "Control does not require direct involvement in every daily activity."
  },
  {
    id: 131,
    chapter: "Chapter 1: Introduction to Business",
    question: "Company A owns 25% of Company B but has no participation in strategic decisions and no significant influence. Which conclusion is most appropriate?",
    options: ["It must automatically be an associate", "It is automatically a subsidiary", "The ownership percentage alone may not establish significant influence", "Company A becomes the holding company"],
    correctAnswer: 2,
    explanation: "Ownership percentage is an important indicator, but the actual relationship depends on the ability to exercise significant influence or control."
  },
  {
    id: 132,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which situation represents a KPI rather than a CSF?",
    options: ["Customer satisfaction", "Product quality", "Employee development", "Customer complaints reduced by 15%"],
    correctAnswer: 3,
    explanation: "A KPI is measurable. “Reduced by 15%” provides a quantitative performance measure."
  },
  {
    id: 133,
    chapter: "Chapter 1: Introduction to Business",
    question: "A business earns higher profit without increasing its asset base. Which performance dimension is most directly concerned with the profit generated?",
    options: ["Productivity", "Profitability", "Activity", "Delegation"],
    correctAnswer: 1,
    explanation: "Profitability evaluates the ability to generate profit relative to sales, assets, or capital."
  },
  {
    id: 134,
    chapter: "Chapter 1: Introduction to Business",
    question: "A factory increases output from 1,000 units to 1,200 units while labour hours remain unchanged. Which measure most directly improves?",
    options: ["Productivity", "Accountability", "Authority", "Stakeholder value"],
    correctAnswer: 0,
    explanation: "More output from the same input means higher productivity."
  },
  {
    id: 135,
    chapter: "Chapter 1: Introduction to Business",
    question: "A company increases sales significantly by using its existing assets more intensively. Which performance dimension is most relevant?",
    options: ["Activity", "Profitability", "Accountability", "Authority"],
    correctAnswer: 0,
    explanation: "Activity measurement evaluates how efficiently assets/resources are used to generate revenue."
  },
  {
    id: 136,
    chapter: "Chapter 1: Introduction to Business",
    question: "A company has high sales but very low profit margins. Which conclusion is most reasonable?",
    options: ["High sales automatically prove high profitability", "Activity may be strong while profitability is weak", "Productivity must be zero", "The company has no stakeholders"],
    correctAnswer: 1,
    explanation: "Strong sales or asset activity does not necessarily translate into strong profitability."
  },
  {
    id: 137,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which statement best distinguishes productivity from activity measurement?",
    options: ["Productivity focuses on profit; activity focuses on employees", "Productivity focuses on input-output efficiency; activity focuses on resource utilization", "Both are exactly identical", "Activity focuses only on profit"],
    correctAnswer: 1,
    explanation: "Productivity examines conversion of inputs into outputs, while activity examines how efficiently resources/assets generate activity such as sales."
  },
  {
    id: 138,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which sequence correctly represents the basic management process?",
    options: ["Control → Plan → Lead → Organize", "Plan → Organize → Lead → Control", "Organize → Control → Plan → Lead", "Lead → Plan → Control → Organize"],
    correctAnswer: 1,
    explanation: "The standard management process is Planning → Organizing → Leading → Controlling."
  },
  {
    id: 139,
    chapter: "Chapter 1: Introduction to Business",
    question: "A manager threatens an employee with disciplinary action if a deadline is missed. Which power is being exercised?",
    options: ["Reward power", "Referent power", "Coercive power", "Expert power"],
    correctAnswer: 2,
    explanation: "Coercive power is based on the ability to punish or impose negative consequences."
  },
  {
    id: 140,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which statement best distinguishes authority from power?",
    options: ["Power always comes from formal position", "Authority is the legitimate right associated with a position, while power is broader ability to influence", "Authority and power are always identical", "Power can never exist without authority"],
    correctAnswer: 1,
    explanation: "Authority is formal and legitimate; power may come from position, expertise, rewards, relationships, or other sources."
  },
  {
    id: 141,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which statement about delegation is most accurate?",
    options: ["Delegation transfers ultimate managerial accountability completely", "Delegation involves responsibility but never authority", "Effective delegation requires sufficient authority to perform the assigned responsibility", "Delegation means the manager no longer has any responsibility"],
    correctAnswer: 2,
    explanation: "A subordinate needs appropriate authority to perform delegated responsibility effectively, while the manager retains ultimate accountability."
  },
  {
    id: 142,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which statement best distinguishes responsibility from accountability?",
    options: ["Responsibility is the right to command; accountability is the right to punish", "Responsibility is the duty to perform; accountability is being answerable for the result", "They are completely unrelated", "Responsibility applies only to shareholders"],
    correctAnswer: 1,
    explanation: "Responsibility concerns performing the task; accountability concerns explaining and answering for the outcome."
  },
  {
    id: 143,
    chapter: "Chapter 1: Introduction to Business",
    question: "A project manager is given authority to coordinate employees from finance, IT, and marketing for a six-month project. Which type of manager is this?",
    options: ["Staff manager", "Project manager", "Line-only manager", "General customer manager"],
    correctAnswer: 1,
    explanation: "A project manager coordinates resources and people to achieve a specific project objective."
  },
  {
    id: 144,
    chapter: "Chapter 1: Introduction to Business",
    question: "A manager supervises sales, finance, customer service, and operations within a business unit. This most closely describes a:",
    options: ["General manager", "Staff specialist", "Auditor", "Project assistant"],
    correctAnswer: 0,
    explanation: "A general manager oversees multiple functions within a business unit."
  },
  {
    id: 145,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which sequence correctly matches Mintzberg's three broad managerial role categories?",
    options: ["Planning, organizing, controlling", "Interpersonal, informational, decisional", "Authority, responsibility, accountability", "Profitability, activity, productivity"],
    correctAnswer: 1,
    explanation: "Mintzberg groups managerial roles into interpersonal, informational, and decisional categories."
  },
  {
    id: 146,
    chapter: "Chapter 1: Introduction to Business",
    question: "A company encourages employees to participate in decisions, develops teamwork, and focuses heavily on employee morale. Which model best fits?",
    options: ["Rational Goal", "Internal Process", "Human Relations", "Open Systems"],
    correctAnswer: 2,
    explanation: "The Human Relations Model emphasizes people, participation, teamwork, morale, and development."
  },
  {
    id: 147,
    chapter: "Chapter 1: Introduction to Business",
    question: "A company continuously develops new products because customer preferences and technology are changing rapidly. Which model is most appropriate?",
    options: ["Internal Process Model", "Rational Goal Model", "Human Relations Model", "Open Systems Model"],
    correctAnswer: 3,
    explanation: "Open Systems focuses on adaptation, innovation, flexibility, and the external environment."
  },
  {
    id: 148,
    chapter: "Chapter 1: Introduction to Business",
    question: "Which pairing is INCORRECT?",
    options: ["Rational Goal — Results", "Internal Process — Rules", "Human Relations — People", "Open Systems — Stability"],
    correctAnswer: 3,
    explanation: "Open Systems emphasizes change and adaptation, not stability."
  },
  {
    id: 149,
    chapter: "Chapter 1: Introduction to Business",
    question: "A bank simultaneously wants strict compliance procedures and rapid innovation in digital banking. Which two models are in tension?",
    options: ["Human Relations and Rational Goal", "Internal Process and Open Systems", "Rational Goal and Human Relations", "Internal Process and Human Relations"],
    correctAnswer: 1,
    explanation: "Internal Process emphasizes stability and control, while Open Systems emphasizes innovation and adaptation."
  },
  {
    id: 150,
    chapter: "Chapter 1: Introduction to Business",
    question: "A company must balance four competing demands: achieving measurable results, maintaining internal control, developing employees, and adapting to environmental change. Which framework best helps management understand these competing demands?",
    options: ["Profit maximization theory", "Competing Values Framework", "Delegation theory", "Stakeholder ownership theory"],
    correctAnswer: 1,
    explanation: "The Competing Values Framework brings together four management orientations: Rational Goal, Internal Process, Human Relations, and Open Systems, allowing managers to balance results, control, people, and adaptation."
  }
];

const btfChapter11Questions = [
  {
    id: 1101,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "What are the four classic factors of production and their respective economic rewards?",
    options: ["Land (Profit), Labour (Interest), Capital (Rent), Entrepreneurship (Wages)", "Land (Rent), Labour (Wages), Capital (Interest), Entrepreneurship (Profit)", "Land (Rent), Labour (Interest), Capital (Profit), Entrepreneurship (Wages)", "Land (Wages), Labour (Rent), Capital (Interest), Entrepreneurship (Profit)"],
    correctAnswer: 1,
    explanation: "In economics, land earns rent, labour earns wages, capital earns interest, and entrepreneurship (which organises the other factors and bears risk) earns profit."
  },
  {
    id: 1102,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "How is Gross Domestic Product (GDP) calculated using the expenditure formula?",
    options: ["GDP = Consumption + Investment + Government Purchases - Net Exports", "GDP = Consumption + Investment + Government Purchases + Net Exports", "GDP = Consumption + Savings + Taxation + Imports", "GDP = Investment + Government Purchases - Consumption + Net Exports"],
    correctAnswer: 1,
    explanation: "GDP measures total value added in an economy during a period via aggregate expenditure: GDP = C + I + GP + NE (where Net Exports = Exports minus Imports)."
  },
  {
    id: 1103,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Which type of inflation occurs when workers demand higher wages to keep up with rising living costs, prompting businesses to raise prices in a self-reinforcing wage-price spiral?",
    options: ["Demand-pull inflation", "Cost-push inflation", "Built-in inflation", "Imported deflation"],
    correctAnswer: 2,
    explanation: "Built-in inflation arises from adaptive expectations where higher living costs trigger wage demands, which increase business costs and drive further price increases."
  },
  {
    id: 1104,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "What is the difference between a 'movement along' a demand curve and a 'shift of' the demand curve?",
    options: ["Movements are caused by changes in consumer income; shifts are caused by changes in the good's own price", "Movements are caused by changes in the good's own price; shifts are caused by changes in non-price determinants such as income, tastes, or prices of related goods", "Movements apply only to normal goods; shifts apply only to inferior goods", "There is no economic difference between a movement and a shift"],
    correctAnswer: 1,
    explanation: "A change in the product's own price causes expansion or contraction along the existing curve, whereas non-price factors shift the entire demand schedule left or right."
  },
  {
    id: 1105,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Which of the following defines a 'Veblen good' in microeconomic price theory?",
    options: ["A basic staple food consumed by low-income households whose demand rises when its price rises due to falling real income", "An everyday necessity whose demand does not change at all regardless of price changes", "A luxury prestige item bought for ostentation whose higher price tag makes it more desirable and increases quantity demanded", "A product whose demand falls sharply whenever household income increases"],
    correctAnswer: 2,
    explanation: "Veblen goods violate the usual law of demand because high prices confer social status and exclusivity, resulting in an upward-sloping demand curve."
  },
  {
    id: 1106,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Which market structure is characterised by a large number of small buyers and sellers, homogeneous (identical) products, perfect information, and free entry and exit?",
    options: ["Monopolistic competition", "Oligopoly", "Perfect competition", "Natural monopoly"],
    correctAnswer: 2,
    explanation: "Under perfect competition, all firms sell identical products with zero barriers to entry/exit and perfect information, making every firm a 'price taker' earning only normal profits."
  },
  {
    id: 1107,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "When is 'productive efficiency' achieved in an economy?",
    options: ["When all external social costs and benefits are fully accounted for in production decisions", "When goods and services are produced at the lowest possible factor cost (minimum point on the average cost curve)", "When consumers have complete asymmetric information about all competing brands", "When a single monopoly supplier charges the highest price the market can bear"],
    correctAnswer: 1,
    explanation: "Productive efficiency occurs when factors of production are organised so that average production cost is at its lowest point."
  },
  {
    id: 1108,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "What is an 'externality' in the context of market failure?",
    options: ["The internal cost reduction a firm achieves when it doubles its factory size", "The difference between private costs/benefits and social costs/benefits arising from an economic activity that the free market fails to price", "A government subsidy paid directly to domestic exporters", "The profit margin earned by foreign multinational companies"],
    correctAnswer: 1,
    explanation: "Externalities are spillover costs (e.g., pollution) or benefits (e.g., vaccination) experienced by third parties that are ignored by private market price signals."
  },
  {
    id: 1109,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Which of the following is an example of an 'external economy of scale' rather than an internal economy of scale?",
    options: ["A large manufacturer negotiating bulk buying discounts on raw materials", "A factory installing larger, more specialised automated machinery", "A regional cluster of firms benefiting from local universities training a large pool of skilled workers and specialised ancillary suppliers setting up nearby", "A business dividing its internal assembly line into highly specialised labour tasks"],
    correctAnswer: 2,
    explanation: "External economies of scale arise from the expansion of the industry as a whole (such as regional skilled labour pools and specialised support industries), benefiting most or all firms in that industry."
  },
  {
    id: 1110,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Which pair of goods would be expected to have a negative cross elasticity of demand (XED < 0)?",
    options: ["Tea and coffee", "Coca-Cola and Pepsi", "Bread and butter", "Bus rides and crude oil"],
    correctAnswer: 2,
    explanation: "Bread and butter are complementary goods consumed together; an increase in the price of bread reduces the quantity of bread bought and therefore decreases the demand for butter (negative XED). Part B: Scenario-Based MCQs (Q11 – Q50)"
  },
  {
    id: 1111,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Country X has experienced two consecutive quarters of falling real GDP, rising unemployment, declining business investment, and weakening consumer confidence following a sharp interest rate hike. According to the standard business/trade cycle model, which phase has Country X entered?",
    options: ["Peak (Boom)", "Growth (Recovery)", "Recession", "Trough"],
    correctAnswer: 2,
    explanation: "A recession is the downward phase of the business cycle following a peak, characterised by contracting actual output (GDP) below the long-term trend line and rising unemployment."
  },
  {
    id: 1112,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "The government of an emerging economy is battling an annual inflation rate of 14%, driven by excessive consumer borrowing and booming aggregate demand. To restore price stability, the government and central bank decide to implement contractionary fiscal and monetary policies simultaneously. Which combination of actions represents this policy stance?",
    options: ["Cutting personal income tax, increasing defence spending, and lowering central bank interest rates", "Increasing corporation tax, reducing government spending, and raising central bank interest rates", "Reducing corporation tax, printing money, and removing controls on capital flight", "Increasing public sector wages, cutting VAT, and lowering commercial bank reserve requirements"],
    correctAnswer: 1,
    explanation: "Contractionary fiscal policy raises taxes (corporation/income tax) and cuts government purchases, while contractionary monetary policy raises interest rates to curb borrowing and aggregate demand."
  },
  {
    id: 1113,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A global surge in crude oil and shipping container prices has sharply increased raw material and transport expenses for manufacturing firms in Bangladesh. Even though consumer demand has not increased, factories pass these higher production expenses onto shoppers through higher retail prices. Which specific type of inflation is occurring?",
    options: ["Demand-pull inflation", "Cost-push inflation", "Built-in inflation", "Asset-bubble deflation"],
    correctAnswer: 1,
    explanation: "Cost-push inflation occurs when rising costs of production factors (such as imported energy or raw materials) force suppliers to raise prices regardless of demand levels."
  },
  {
    id: 1114,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "In the market for roasted coffee beans, two separate events occur in the same month:Event 1: The price of tea (a close substitute) increases by 30%.Event 2: The price of coffee beans themselves subsequently rises in the market.How are Event 1 and Event 2 represented on the demand curve for coffee?",
    options: ["Event 1 causes a movement along the demand curve; Event 2 shifts the demand curve to the left", "Event 1 shifts the demand curve to the right; Event 2 causes an upward movement (contraction) along the new demand curve", "Both Event 1 and Event 2 cause movements along the same demand curve", "Both Event 1 and Event 2 shift the demand curve to the right"],
    correctAnswer: 1,
    explanation: "A rise in the price of a substitute (tea) increases demand for coffee at every price (rightward shift); a change in coffee's own price then causes a movement along the demand curve."
  },
  {
    id: 1115,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Following rapid economic reforms over two decades, a developing nation transitions from having a small wealthy elite and a large impoverished population to having a vast, prosperous middle class. Based on income distribution theory, how will market demand patterns in this country most likely shift?",
    options: ["Demand will polarise exclusively between ultra-luxury yachts and basic potatoes", "Demand will surge for medium-sized cars, household appliances, televisions, and mid-tier consumer goods", "Demand for all normal goods will fall to zero", "Demand for inferior staple grains will increase sharply"],
    correctAnswer: 1,
    explanation: "Income distribution shapes aggregate demand composition: economies with a large middle-income group exhibit strong demand for medium-sized cars, TVs, and middle-income lifestyle goods."
  },
  {
    id: 1116,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "In an agricultural livestock market, cattle ranchers produce both beef and raw cowhide leather from the same animals. Due to a global fashion boom in leather jackets, the market price of leather rises significantly, prompting ranchers to raise and slaughter more cattle. What will happen to the supply curve and equilibrium price of beef?",
    options: ["The supply curve of beef shifts to the left and its equilibrium price rises", "The supply curve of beef shifts to the right (joint supply) and its equilibrium price falls", "There is no change in the supply of beef because beef and leather are unrelated goods", "The demand curve for beef shifts to the left"],
    correctAnswer: 1,
    explanation: "Beef and leather are in joint supply; higher prices and output for leather automatically increase the supply of beef at every price, shifting beef's supply curve rightward and lowering its price."
  },
  {
    id: 1117,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Severe monsoon flooding destroys 40% of the seasonal potato crop in northern districts, while consumer tastes and incomes remain unchanged. Assuming potatoes have a normal downward-sloping demand curve and upward-sloping supply curve, how will the market adjust to a new equilibrium?",
    options: ["Supply curve shifts left; equilibrium price rises and equilibrium quantity falls", "Supply curve shifts right; equilibrium price falls and equilibrium quantity rises", "Demand curve shifts left; both equilibrium price and quantity fall", "Demand curve shifts right; both equilibrium price and quantity rise"],
    correctAnswer: 0,
    explanation: "Adverse weather reduces supply at any given price, shifting the supply curve leftward and resulting in a higher equilibrium price and lower traded quantity."
  },
  {
    id: 1118,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "In the rental housing market of a major metropolitan city, the current free-market equilibrium rent for a two-bedroom apartment is $1,200 per month. To help low-income tenants, the municipal government imposes a legally binding maximum rent ceiling of $850 per month. What is the immediate economic consequence of this price regulation?",
    options: ["An excess supply (surplus) of vacant apartments at $850", "An excess demand (shortage) of apartments, leading to long waiting lists and potential black-market subletting", "No market distortion, because maximum prices below equilibrium always increase supply", "Landlords will immediately build more low-cost apartments to meet demand"],
    correctAnswer: 1,
    explanation: "A maximum price set below the equilibrium price stimulates quantity demanded while reducing quantity supplied, creating persistent excess demand (a shortage)."
  },
  {
    id: 1119,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Conversely, suppose an agricultural board sets a guaranteed minimum price (price floor) for raw milk at $0.90 per litre, whereas the free-market equilibrium price is $0.65 per litre. Assuming the government does not buy up the excess output, what occurs in the market at $0.90 per litre?",
    options: ["Excess demand (shortage) of milk", "Excess supply (surplus) of unsold milk", "Market equilibrium is maintained automatically", "The demand curve shifts to the right to absorb the higher price"],
    correctAnswer: 1,
    explanation: "A minimum price imposed above equilibrium induces farmers to supply more milk than consumers are willing to buy at that price, creating a market surplus."
  },
  {
    id: 1120,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A specialty coffee shop currently sells 2,000 cups of artisan latte per week at $4.00 per cup. The owner increases the price to $4.40 per cup (a 10% increase), and weekly sales fall to 1,700 cups (a 15% decrease). What is the Price Elasticity of Demand (PED) at this price point, and what happened to the shop's total weekly revenue?",
    options: ["PED = -0.67 (inelastic); total revenue increased from $8,000 to $8,800", "PED = -1.50 (elastic); total revenue fell from $8,000 to $7,480", "PED = -1.50 (elastic); total revenue increased from $8,000 to $8,480", "PED = -1.00 (unit elastic); total revenue remained unchanged at $8,000"],
    correctAnswer: 1,
    explanation: "PED = % change in Qd (-15%) / % change in Price (+10%) = -1.50 (elastic, since |-1.5| > 1). Because demand is elastic, raising price reduces total revenue ($4.00 × 2,000 = $8,000 vs. $4.40 × 1,700 = $7,480)."
  },
  {
    id: 1121,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Apex Pharma Ltd holds the sole patent on a life-saving insulin medication required daily by diabetic patients, and there are no close substitutes. If Apex Pharma raises the price of this medication by 15%, quantity demanded falls by only 1.5%. Which statement best describes the demand for this medication?",
    options: ["Perfectly elastic (PED = infinity)", "Highly price elastic (PED > 1)", "Price inelastic (PED = -0.10, i.e., |PED| < 1)", "Unit elastic (PED = -1.0)"],
    correctAnswer: 2,
    explanation: "PED = -1.5% / +15% = -0.10. Because it is an essential necessity with no close substitutes, demand is highly price inelastic (|PED| < 1)."
  },
  {
    id: 1122,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A collector of rare 18th-century original paintings is auctioning a single authenticated masterpiece. Regardless of whether bidders offer $500,000 or $5,000,000, only that one original painting can ever be supplied. What is the Price Elasticity of Supply (PES) of this painting, and what does its supply curve look like?",
    options: ["PES = infinity (perfectly elastic); a horizontal straight line", "PES = 0 (perfectly inelastic); a vertical straight line", "PES = 1 (unit elastic); an upward-sloping line through the origin", "PES > 1 (elastic); a flat upward-sloping curve"],
    correctAnswer: 1,
    explanation: "When quantity supplied is completely fixed regardless of price (such as antiques, vintage wines, or land), PES = 0 and the supply curve is vertical."
  },
  {
    id: 1123,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "FreshCatch Fisheries brings its daily catch of perishable sea fish to a morning wholesale auction. Once the boats dock, the total quantity of fish available for sale that morning cannot be increased or stored without spoiling. In microeconomic time-horizon analysis, which supply period does this represent?",
    options: ["The long run", "The short run", "The market period (momentary period)", "The secular trend period"],
    correctAnswer: 2,
    explanation: "In the market period, time is so short that supply is strictly limited to existing inventory and cannot be altered, making supply effectively fixed (inelastic)."
  },
  {
    id: 1124,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Solaris Electronics Ltd operates a smartphone assembly plant currently running at only 60% of its maximum machine capacity, and it holds large warehouses of finished inventory alongside easily reallocated assembly workers. If market demand and prices for its smartphones suddenly rise, how will Solaris's supply respond?",
    options: ["Supply will be price elastic (PES > 1) because spare capacity, high inventory, and factor mobility allow rapid output expansion", "Supply will be perfectly inelastic (PES = 0) because no new factories can be built overnight", "Supply will shift to the left due to diminishing marginal returns", "Supply will contract as prices rise"],
    correctAnswer: 0,
    explanation: "Spare production capacity, high stock levels, short production times, and ease of factor substitution all make supply price elastic (PES > 1)."
  },
  {
    id: 1125,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "During a severe economic downturn, average household real incomes in an economy fall by 8%. Over the same period, supermarket data shows that sales of budget unbranded canned beans rise by 12%, while sales of fresh organic salmon fall by 16%. What are the Income Elasticities of Demand (YED) for canned beans and organic salmon respectively?",
    options: ["Canned beans: +1.50 (normal good); Organic salmon: -2.00 (inferior good)", "Canned beans: -1.50 (inferior good); Organic salmon: +2.00 (normal luxury good)", "Canned beans: +0.67 (necessity); Organic salmon: +0.50 (necessity)", "Both goods have a YED of 0"],
    correctAnswer: 1,
    explanation: "YED for canned beans = +12% / -8% = -1.50 (negative YED indicates an inferior good). YED for organic salmon = -16% / -8% = +2.00 (YED > +1 indicates a normal luxury good)."
  },
  {
    id: 1126,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "In a low-income rural community, families spend 75% of their daily wages on coarse staple grain and the remaining 25% on vegetables and lentils. When a drought causes the price of coarse grain to double, the families' real purchasing power falls so drastically that they can no longer afford any vegetables or lentils, forcing them to buy even more coarse grain to survive. What type of good is coarse grain in this scenario?",
    options: ["A Veblen good", "A Giffen good", "A complementary good", "A normal luxury good"],
    correctAnswer: 1,
    explanation: "A Giffen good is an extreme inferior staple where a price rise causes such a large negative real-income effect that it outweighs the substitution effect, causing quantity demanded to rise with price."
  },
  {
    id: 1127,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Maison Royale, a Parisian haute-couture watchmaker, raises the retail price of its flagship diamond tourbillon watch from $80,000 to $140,000. Instead of losing customers, orders from ultra-wealthy collectors increase by 25% because the higher price enhances the watch's exclusivity and prestige. What economic concept explains this behaviour?",
    options: ["The Giffen paradox", "A Veblen good (ostentatious consumption)", "Cross-price complementarity", "Diminishing marginal utility"],
    correctAnswer: 1,
    explanation: "Veblen goods are status symbols where a higher price tag increases desirability and quantity demanded, creating an upward-sloping demand curve."
  },
  {
    id: 1128,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "StreamFlix and CineMax are two competing online video streaming subscriptions. When StreamFlix increases its monthly subscription fee by 20%, CineMax observes a 14% increase in its own new subscriber sign-ups (assuming all other factors stay constant). What is the Cross Elasticity of Demand (XED) between CineMax and StreamFlix?",
    options: ["-0.70, indicating they are complementary goods", "+0.70, indicating they are substitute goods", "+1.43, indicating they are unrelated goods", "-1.43, indicating they are inferior goods"],
    correctAnswer: 1,
    explanation: "XED = % change in Qd of CineMax (+14%) / % change in Price of StreamFlix (+20%) = +0.70. A positive XED confirms the two services are substitutes."
  },
  {
    id: 1129,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A consumer electronics analyst finds that when the price of gaming consoles increases by 10%, the quantity demanded of physical video game discs falls by 18%. Meanwhile, a 10% rise in the price of coffee beans has a 0% impact on the quantity demanded of tennis balls. What are the respective Cross Elasticities of Demand (XED)?",
    options: ["Consoles & game discs: -1.80 (complements); Coffee & tennis balls: 0 (unrelated goods)", "Consoles & game discs: +1.80 (substitutes); Coffee & tennis balls: 0 (unrelated goods)", "Consoles & game discs: -0.55 (substitutes); Coffee & tennis balls: +1.0 (complements)", "Consoles & game discs: +0.55 (complements); Coffee & tennis balls: -1.0 (substitutes)"],
    correctAnswer: 0,
    explanation: "Complements have a negative XED (-18% / +10% = -1.80), while completely unrelated goods have an XED of zero."
  },
  {
    id: 1130,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Thousands of small independent wheat farmers grow identical grade-A wheat and sell it in a central commodity market. No individual farmer can charge even $0.01 above the prevailing market price without losing all buyers, and any new farmer can freely enter or leave wheat farming. Which statement accurately describes an individual wheat farmer in this market?",
    options: ["The farmer is a 'price maker' who can earn long-run supernormal profits through branding", "The farmer is a 'price taker' facing a horizontal (perfectly elastic) demand curve and earning only normal profits in the long run", "The farmer operates in an oligopoly characterised by mutual interdependence", "The farmer holds a natural monopoly"],
    correctAnswer: 1,
    explanation: "In perfect competition, firms sell homogeneous products at the single market-determined price (price takers) and earn only normal profits."
  },
  {
    id: 1131,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "In a regional water supply industry, laying underground water pipes across a city requires billions of dollars in fixed infrastructure costs, whereas the marginal cost of supplying water to one extra household is almost zero. Because a single supplier can serve the entire city at a much lower average cost than two competing pipe networks, no competitor enters the market. What type of monopoly is this?",
    options: ["A government franchise monopoly", "A natural monopoly", "Monopolistic competition", "A contestable duopoly"],
    correctAnswer: 1,
    explanation: "A natural monopoly arises where extremely high fixed costs and low marginal costs create massive economies of scale, making a single supplier the most cost-efficient market structure."
  },
  {
    id: 1132,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "OmniCorp plc holds a pure monopoly in a specialised industrial chemical market. Its board is meeting to set next year's commercial targets. According to economic theory on monopoly behaviour, which constraint does OmniCorp plc face?",
    options: ["OmniCorp can simultaneously fix both the highest possible selling price and the exact quantity consumers must buy", "OmniCorp can either set the selling price OR determine the quantity supplied, while the market demand curve determines the other variable", "OmniCorp is legally forced to charge a price equal to marginal cost and earn zero profit", "OmniCorp faces zero barriers to entry so competitors will immediately erode its supernormal profits"],
    correctAnswer: 1,
    explanation: "A monopolist is a price maker, not omnipotent: it can choose either price or output, after which consumer demand dictates the remaining variable."
  },
  {
    id: 1133,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "In a busy city centre, there are over 150 independent hair salons and barbershops. Entering the industry requires modest capital, and every salon offers slightly different styling experiences, interior ambiance, and loyalty cards, supported by local social media advertising. Which market structure best describes this industry?",
    options: ["Perfect competition", "Pure monopoly", "Monopolistic competition", "Duopoly"],
    correctAnswer: 2,
    explanation: "Monopolistic competition features many buyers and sellers, low barriers to entry, and differentiated products/branding (such as pubs, hairdressers, and restaurants)."
  },
  {
    id: 1134,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Four major retail banks—Alpha Bank, Beta Bank, Gamma Bank, and Delta Bank—control 88% of all personal current accounts and mortgages in a country. Whenever Alpha Bank cuts its mortgage interest rate, the other three banks match the cut within 48 hours; however, when Alpha Bank tried raising its account fees last year, none of the rivals followed, forcing Alpha to cancel the hike. Instead, the four banks compete heavily via TV advertising and cashback rewards. What market structure does this illustrate?",
    options: ["Perfect competition", "Oligopoly", "Monopolistic competition", "Natural monopoly"],
    correctAnswer: 1,
    explanation: "An oligopoly is dominated by a few large interdependent firms that rely on non-price competition (branding/advertising), match price cuts to protect market share, and avoid copying unilateral price increases."
  },
  {
    id: 1135,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Two dominant aircraft manufacturers, AeroJet and SkyWing, control virtually 100% of the global market for large commercial passenger jets. The CEOs of both companies secretly meet to agree on minimum ticket-pricing surcharges and divide geographic sales territories between themselves. Under competition law, what market structure and illegal practice are taking place?",
    options: ["Perfect competition; price taking", "Duopoly; illegal collusion / cartel behaviour", "Monopolistic competition; product differentiation", "Public sector monopoly; natural pricing"],
    correctAnswer: 1,
    explanation: "A duopoly has two dominant suppliers who face a strong temptation to act in concert (collude) to keep prices high—an illegal breach of competition law in most jurisdictions."
  },
  {
    id: 1136,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A free-market economist argues that competitive markets achieve superior economic performance compared to central planning, citing four types of efficiency: social, allocative, technical, and productive efficiency. During an audit of a manufacturing plant, engineers confirm that the plant produces its output using the absolute minimum physical quantity of raw materials, energy, and labour hours possible. Which specific efficiency has the plant achieved?",
    options: ["Social efficiency", "Allocative efficiency", "Technical efficiency", "Distributive equity"],
    correctAnswer: 2,
    explanation: "Technical efficiency is achieved when goods and services are produced using the minimum physical amount of input resources."
  },
  {
    id: 1137,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "In a rural valley, a paper mill discharges untreated chemical waste into a river to keep its manufacturing costs low. Downstream, commercial fishermen suffer a 50% drop in fish catches and the local municipality must spend $2 million purifying drinking water. Because the paper mill's product price only reflects its internal factory expenses and ignores the river damage, which form of market failure is occurring?",
    options: ["Positive consumption externality", "Negative production externality (social cost exceeds private cost)", "Provision of a pure public good", "Excessive internal economies of scale"],
    correctAnswer: 1,
    explanation: "The mill imposes external costs on third parties (fishermen and taxpayers) that are not included in its private costs, causing social cost > private cost and overproduction of pollution."
  },
  {
    id: 1138,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A pharmaceutical research foundation funds a nationwide childhood vaccination programme. Not only do the vaccinated children avoid illness (private benefit), but unvaccinated neighbours also enjoy protection because disease transmission drops across the community (external benefit). In an unregulated free market, why would vaccination be under-consumed without government intervention?",
    options: ["Because private benefit exceeds social benefit", "Because social benefit exceeds private benefit (positive externality), and individuals only pay based on their private benefit", "Because vaccines are Giffen goods", "Because vaccines suffer from asymmetric negative externalities"],
    correctAnswer: 1,
    explanation: "When an activity generates positive spillover benefits for society (social benefit > private benefit), a free market ignoring external benefits will under-produce and under-consume the good."
  },
  {
    id: 1139,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A coastal nation is considering whether national defence and street-level police patrols should be provided exclusively by private for-profit companies charging individual citizens per use. Why do economists classify national defence as a 'public good' that causes market failure if left to private markets?",
    options: ["Because private firms would produce too much national defence", "Because it involves massive spillover externalities where individuals cannot be excluded from protection once provided (non-excludable) and one person's protection does not reduce another's (non-rival), leading to free-riding", "Because national defence is a Veblen luxury good", "Because marginal production costs increase infinitely with every new citizen born"],
    correctAnswer: 1,
    explanation: "Public goods like national defence have extensive spillover benefits that cannot be priced or restricted to paying customers alone, requiring government provision."
  },
  {
    id: 1140,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A used-car buyer visits a dealership where the seller knows the vehicle has a hidden transmission defect, whereas the buyer has no mechanical expertise and cannot detect the fault before purchase. Because buyers fear buying defective cars ('lemons'), they refuse to pay fair prices even for high-quality used cars, causing the market to function poorly. What specific cause of market imperfection is demonstrated here?",
    options: ["Asymmetric (incomplete/inaccurate) information", "External economies of scale", "Perfect factor mobility", "Unit price elasticity"],
    correctAnswer: 0,
    explanation: "Asymmetric information occurs when one party to a transaction possesses superior or more accurate information than the other, leading to poor purchasing decisions and market failure."
  },
  {
    id: 1141,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "GigaSteel plc expands its annual steel output from 500,000 tonnes to 3,000,000 tonnes by building a massive integrated blast furnace. As a result, its average cost per tonne falls by 35%. However, instead of lowering steel prices for customers, GigaSteel uses its ultra-low cost base to drive smaller regional steelmakers out of business and then raises prices to earn supernormal profits. How does economic theory view this outcome?",
    options: ["As an ideal example of perfect competition", "As a market failure caused by economies of scale leading to market dominance and unshared cost savings", "As proof of diminishing returns to scale", "As a positive production externality"],
    correctAnswer: 1,
    explanation: "When large firms achieve economies of scale but fail to pass cost reductions to consumers—using their advantage instead to dominate smaller rivals—the free market fails to allocate resources efficiently."
  },
  {
    id: 1142,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "As Apex Motors plc doubles the size of its electric vehicle factory, its unit production cost drops significantly due to four internal improvements:(1) Ordering 100,000 battery packs at a 22% bulk discount from suppliers.(2) Installing a high-speed robotic stamping press that was too expensive for a small plant.(3) Assigning each assembly worker to a single specialised task rather than building the whole car.(4) Needing only a 40% increase in spare-parts inventory to support a 100% increase in output.Which category of economies of scale do all four improvements belong to?",
    options: ["External economies of scale", "Internal economies of scale", "Social externalities", "Macro-prudential scale efficiencies"],
    correctAnswer: 1,
    explanation: "Buying economies (1), specialised machinery (2), division/specialisation of labour (3), and more efficient inventory holding (4) all arise within the firm itself as it expands capacity—i.e., internal economies of scale."
  },
  {
    id: 1143,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "Over the past 15 years, hundreds of software engineering and semiconductor design firms have clustered in a single technology park. Because the regional industry has grown so large, local technical colleges now run custom chip-design degree courses, and independent patent law firms and specialised testing laboratories have opened offices inside the park, lowering costs for every firm in the area. What phenomenon is occurring?",
    options: ["Internal dimensional economies of scale", "External economies of scale (agglomeration economies)", "Natural monopoly pricing", "Built-in wage-price inflation"],
    correctAnswer: 1,
    explanation: "Growth of the entire industry in one geographic area attracts specialised ancillary services (law firms, testing labs) and targeted educational training, creating external economies of scale for all participating firms."
  },
  {
    id: 1144,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A newly appointed CFO is reviewing four macroeconomic indicators to assess the health of the domestic economy: Consumer spending (C) = $600bn, Gross Private Investment (I) = $180bn, Government Purchases (GP) = $220bn, Exports (X) = $140bn, and Imports (M) = $190bn. Using the standard expenditure formula from the lecture, what is the country's GDP?",
    options: ["$1,330bn", "$1,050bn", "$950bn", "$1,140bn"],
    correctAnswer: 2,
    explanation: "GDP = C + I + GP + NE, where Net Exports (NE) = Exports ($140bn) - Imports ($190bn) = -$50bn. Therefore, GDP = 600 + 180 + 220 + (-50) = $950bn."
  },
  {
    id: 1145,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "During a severe hurricane warning, news reports predict imminent fuel shortages and petrol station closures. Even though petrol prices have not yet changed, motorists rush to fill up their tanks and stockpile extra fuel cans, causing the demand curve for petrol to shift sharply to the right and driving prices upward. Which non-price determinant of demand caused this shift?",
    options: ["A change in income distribution", "Consumer expectations of future price rises and shortages (panic buying)", "A fall in the price of electric vehicles", "An improvement in oil refinery technology"],
    correctAnswer: 1,
    explanation: "Expectations of imminent price increases or shortages prompt consumers to stock up immediately, shifting the short-term demand curve rightward and triggering panic buying."
  },
  {
    id: 1146,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A global apparel retailer operates in a country with high inflation and rapid capital outflows that are weakening the domestic currency and making imported fabrics far more expensive. Alongside monetary tightening, the government introduces export competitiveness incentives and capital-flight controls. What is the primary macroeconomic goal of these two measures?",
    options: ["To encourage domestic consumers to buy more imported luxury goods", "To increase foreign currency inflows, stabilise the exchange rate, and reduce inflationary pressures from imported goods", "To create a trade deficit and trigger a recession", "To eliminate all private sector entrepreneurship"],
    correctAnswer: 1,
    explanation: "Boosting export competitiveness brings in foreign currency and capital controls prevent currency depreciation, thereby curbing imported cost-push inflation."
  },
  {
    id: 1147,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A construction engineering firm notes that in its local labour market, it takes two weeks to hire extra general labourers when demand rises, whereas training and recruiting certified structural engineers or building a new precast concrete factory takes two years. In microeconomic terms, why does supply respond much more slowly than demand to sudden price changes?",
    options: ["Because consumers never adjust their buying patterns when prices change", "Because changing supply quantities often requires management decisions to hire/lay off skilled staff or install new plant and machinery, which take time to implement", "Because supply curves are always vertical in the long run", "Because government price ceilings forbid suppliers from expanding output"],
    correctAnswer: 1,
    explanation: "While consumers can adjust purchasing habits relatively quickly, altering production capacity involves recruitment, training, and capital installation lags."
  },
  {
    id: 1148,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A regional airline notices that business travellers booking flights 24 hours before departure have a Price Elasticity of Demand (PED) of -0.25, whereas leisure holidaymakers booking three months in advance have a PED of -2.40. If the airline wants to maximise total revenue using price discrimination, what pricing strategy should it adopt?",
    options: ["Lower ticket prices for last-minute business travellers and raise prices for early leisure travellers", "Charge higher ticket prices to last-minute business travellers (inelastic demand) and offer lower discounted fares to early leisure travellers (elastic demand)", "Charge the exact same fare to both groups regardless of booking time", "Raise prices by 50% for leisure travellers because their demand is elastic"],
    correctAnswer: 1,
    explanation: "When demand is inelastic (|-0.25| < 1), raising price increases total revenue; when demand is elastic (|-2.40| > 1), lowering price increases total revenue."
  },
  {
    id: 1149,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "A beverage company launches a new energy drink. Over a 12-month period, its price elasticity of demand changes from -0.40 in Month 1 to -1.85 in Month 12 after it raises its price by 15%, even though competitor prices remained flat throughout the year. Which two determinants of PED best explain why demand became much more elastic over time?",
    options: ["Habit-forming addiction and falling household incomes", "The longer time horizon (allowing consumers to adjust habits) and unchanged competitors' pricing (making rivals' drinks relatively cheaper substitutes)", "Government minimum price floors and external economies of scale", "The product becoming a Giffen good and a public good"],
    correctAnswer: 1,
    explanation: "Over a longer time horizon, consumers discover alternatives and change buying habits; when competitors keep prices unchanged, a lone supplier raising its price faces elastic demand."
  },
  {
    id: 1150,
    chapter: "Chapter 11: The Economic Environment of Business and Finance",
    question: "In a country's mixed economy, the government performs four distinct economic roles: (1) operating state-owned railways and power plants, (2) buying military equipment and hospital supplies from private firms, (3) funding public highways and broadband infrastructure, and (4) paying unemployment benefits and state pensions funded by taxation. Which role does item (4) specifically represent?",
    options: ["Government as Producer", "Government as Purchaser", "Government as Investor", "Government making Transfer Payments (redistributing income from one sector to another)"],
    correctAnswer: 3,
    explanation: "Pensions, welfare benefits, and subsidies are transfer payments—redistributing money from taxpayers to recipients without a direct good or service being produced in exchange."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { btfQuestions, btfChapter1Questions, btfChapter2Questions, btfChapter4Questions, btfChapter6Questions, btfChapter7Questions, btfChapter8Questions, btfChapter9Questions, btfChapter10Questions, btfChapter11Questions };
}