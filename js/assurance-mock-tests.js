const assuranceMockTests = [
  {
    "id": 1,
    "title": "Mock Test 1",
    "questions": [
      {
        "id": 1001,
        "q": "What is the fundamental distinction between reasonable assurance and limited assurance engagements under assurance standards?",
        "options": [
          "Reasonable assurance reduces engagement risk to an acceptably low level with a positively worded conclusion; limited assurance reduces risk to a moderate level with a negatively worded conclusion",
          "Reasonable assurance gives 100% absolute certainty; limited assurance gives zero assurance",
          "Reasonable assurance applies only to internal audits; limited assurance applies only to statutory audits",
          "There is no difference in wording or evidence sufficiency between the two levels"
        ],
        "answer": 0,
        "explanation": "Reasonable assurance involves extensive procedures to support a positive conclusion ('true and fair view'), whereas limited assurance uses narrower procedures to express a negative conclusion ('nothing has come to our attention')."
      },
      {
        "id": 1002,
        "q": "Which five elements must be present for an engagement to be an assurance engagement under the assurance framework?",
        "options": [
          "Three-party relationship, appropriate subject matter, suitable criteria, sufficient appropriate evidence, and a written assurance report",
          "Two-party contract, cash ledger, tax return, verbal opinion, and invoice",
          "Shareholders, board of directors, NBR commissioner, bank manager, and legal counsel",
          "Internal audit charter, ERP software, petty cash box, trial balance, and AGM minutes"
        ],
        "answer": 0,
        "explanation": "Every assurance engagement requires a three-party relationship (practitioner, responsible party, intended users), subject matter, criteria, sufficient appropriate evidence, and a formal written report."
      },
      {
        "id": 1003,
        "q": "In a statutory financial statement audit, who are the 'intended users' and who is the 'responsible party'?",
        "options": [
          "Intended users are shareholders/stakeholders; responsible party is company management/directors preparing the financial statements",
          "Intended users are audit juniors; responsible party is the engagement partner",
          "Intended users are suppliers only; responsible party is the external audit firm",
          "Intended users are external auditors; responsible party is the stock exchange"
        ],
        "answer": 0,
        "explanation": "Management/directors are responsible for preparing the financial statements (subject matter), while shareholders and external users rely on the auditor's report."
      },
      {
        "id": 1004,
        "q": "What is the 'expectation gap' in assurance and auditing?",
        "options": [
          "The gap between what the public/users believe auditors do or guarantee and what auditors actually do and state under auditing standards",
          "The difference between budgeted audit hours and actual hours billed",
          "The variance between forecast profit and actual profit in management accounts",
          "The time lag between year-end and the Annual General Meeting"
        ],
        "answer": 0,
        "explanation": "Users often mistakenly expect an audit to guarantee complete accuracy or detect every fraud, whereas auditing standards provide reasonable assurance based on sampling and judgment."
      },
      {
        "id": 1005,
        "q": "Under the Companies Act 1994 in Bangladesh, who generally appoints the first auditor of a company and who appoints subsequent auditors?",
        "options": [
          "Board of directors may appoint the first auditor within 30 days of registration; shareholders in AGM appoint subsequent auditors",
          "Shareholders appoint the first auditor; the Prime Minister appoints subsequent auditors",
          "The external auditor appoints their own successor at the AGM",
          "Bangladesh Bank appoints auditors for all private trading companies"
        ],
        "answer": 0,
        "explanation": "Under the Companies Act 1994, directors have initial appointment powers before the first AGM, after which members in general meeting appoint auditors from AGM to AGM."
      },
      {
        "id": 1006,
        "q": "Why do companies need independent assurance rather than relying solely on financial statements prepared by directors?",
        "options": [
          "Separation of ownership and management creates potential bias or misstatement risk, requiring independent verification to enhance user confidence",
          "Directors are legally prohibited from understanding double-entry bookkeeping",
          "Independent assurance eliminates all business and market risks for investors",
          "Financial statements cannot be printed without an auditor's signature"
        ],
        "answer": 0,
        "explanation": "Because directors manage resources and report on their own stewardship, independent assurance adds credibility and reduces information risk for stakeholders."
      },
      {
        "id": 1007,
        "q": "What is 'suitability of criteria' in an assurance engagement?",
        "options": [
          "Criteria (such as IFRS/IAS or statutory frameworks) must be relevant, complete, reliable, neutral, and understandable to intended users",
          "Criteria must be invented privately by each audit junior for every client",
          "Criteria are optional if the client prepares a cash flow statement",
          "Criteria only need to satisfy the audit firm's senior partner"
        ],
        "answer": 0,
        "explanation": "Benchmark criteria against which subject matter is evaluated must be relevant, reliable, neutral, understandable, and complete."
      },
      {
        "id": 1008,
        "q": "Which statement accurately describes 'inherent limitations' of an assurance engagement?",
        "options": [
          "Sampling, subjective management estimates, limitations of internal controls, and persuasive rather than conclusive evidence mean absolute certainty cannot be achieved",
          "Auditors are not required to follow ISAs when clients are busy",
          "Inherent limitations disappear if the audit fee is doubled",
          "Inherent limitations apply only to small non-listed entities"
        ],
        "answer": 0,
        "explanation": "Even a properly planned and executed ISA audit has inherent limitations due to testing on a sample basis, judgmental estimates, and collusion/fraud concealment."
      },
      {
        "id": 1009,
        "q": "What is the role of 'professional skepticism' throughout the assurance process?",
        "options": [
          "An attitude that includes a questioning mind, being alert to conditions indicating possible misstatement due to error or fraud, and critical assessment of evidence",
          "Assuming management is dishonest in every routine transaction without evidence",
          "Accepting management's oral explanations at face value to save time",
          "Doubting verified bank statements when no discrepancy exists"
        ],
        "answer": 0,
        "explanation": "Professional skepticism requires a questioning mindset and critical evaluation of evidence without blind trust or unjustified cynicism."
      },
      {
        "id": 1010,
        "q": "What is the main purpose of an engagement letter agreed between the assurance firm and the client prior to commencing work?",
        "options": [
          "To document and confirm acceptance of the appointment, objective and scope of work, respective responsibilities of management and auditor, and fee/reporting terms",
          "To serve as a legally binding guarantee that no fraud exists in the entity",
          "To replace statutory audit appointment resolutions under company law",
          "To transfer responsibility for preparing financial statements to the auditor"
        ],
        "answer": 0,
        "explanation": "An engagement letter prevents misunderstandings by clearly defining scope, deliverables, management's responsibilities, and the auditor's responsibilities."
      },
      {
        "id": 1011,
        "q": "Under ISA 315 / internal control frameworks, which of the following is NOT one of the five interrelated components of internal control?",
        "options": [
          "Contingency fee billing",
          "Control environment",
          "Risk assessment process and information system/communication",
          "Control activities and monitoring of controls"
        ],
        "answer": 0,
        "explanation": "The five components of internal control are control environment, entity's risk assessment process, information system & communication, control activities, and monitoring of controls."
      },
      {
        "id": 1012,
        "q": "Which control objective is directly addressed when sequential pre-numbered goods received notes (GRNs) are matched to purchase orders and supplier invoices?",
        "options": [
          "Completeness and occurrence/validity of recorded purchases and liabilities",
          "Market share expansion",
          "Share capital dividend yield",
          "Foreign currency exchange rate forecasting"
        ],
        "answer": 0,
        "explanation": "Matching pre-numbered GRNs, purchase orders, and invoices verifies that recorded purchases occurred and valid goods received are completely recorded."
      },
      {
        "id": 1013,
        "q": "Why is 'segregation of duties' essential in a cash and bank payment cycle?",
        "options": [
          "Separating authorization, custody of assets/cheques, and accounting recording reduces opportunities for fraud or error to be committed and concealed by one person",
          "It allows one clerk to approve payments, sign cheques, and reconcile bank statements faster",
          "It eliminates the need for bank reconciliations",
          "It reduces staff salary expenses by half"
        ],
        "answer": 0,
        "explanation": "Splitting authorization, execution/custody, and recording prevents a single individual from both perpetrating and covering up unauthorized disbursements."
      },
      {
        "id": 1014,
        "q": "Which of the following is an 'application control' (programmed control) in a computerized accounting system?",
        "options": [
          "A mandatory field check or range/reasonableness check rejecting an invoice where quantity is negative or customer code does not exist",
          "Restricting physical server room access with a badge",
          "Backing up servers overnight in a fireproof vault",
          "Segregation of duties between IT developers and operators"
        ],
        "answer": 0,
        "explanation": "Application controls operate within specific software applications (e.g., input checks, edit checks, check digits), whereas access and backups are general IT controls."
      },
      {
        "id": 1015,
        "q": "Which of the following is a 'general IT control' rather than an application control?",
        "options": [
          "Program change management controls and logical access security over operating systems and databases",
          "A check digit verification on customer account numbers",
          "A batch total comparison on daily sales entries",
          "An automated credit limit block during sales order entry"
        ],
        "answer": 0,
        "explanation": "General IT controls support the continuing proper operation of IT infrastructure across applications, including access security, program changes, and system development/backups."
      },
      {
        "id": 1016,
        "q": "What is a key inherent limitation of internal controls across any organization?",
        "options": [
          "Human error, management override of controls, collusion among employees, and cost-benefit constraints",
          "Internal controls work 100% of the time whenever written manuals exist",
          "Automated systems can never process erroneous data",
          "Small entities never suffer from management override"
        ],
        "answer": 0,
        "explanation": "Even strong internal controls can be bypassed through management override, collusion, carelessness, or deliberate circumvention."
      },
      {
        "id": 1017,
        "q": "In a sales and receivables system, what control prevents dispatching goods to customers who have exceeded their approved credit limit?",
        "options": [
          "Automated or supervisory credit limit check prior to order approval and dispatch",
          "Counting petty cash at month-end",
          "Preparing an annual fixed asset depreciation schedule",
          "Issuing credit notes without customer requests"
        ],
        "answer": 0,
        "explanation": "Checking credit limits before authorizing dispatch helps prevent irrecoverable bad debts and unauthorized credit sales."
      },
      {
        "id": 1018,
        "q": "What is the primary control purpose of an independent monthly bank reconciliation prepared by someone who does not handle cash or write cheques?",
        "options": [
          "To identify timing differences, unrecorded receipts/payments, bank errors, or unauthorized cash tampering",
          "To replace physical cash counts and bank confirmation letters",
          "To calculate corporate income tax payable",
          "To approve supplier credit terms"
        ],
        "answer": 0,
        "explanation": "Independent bank reconciliations detect discrepancies between accounting records and bank statements and deter cash misappropriation."
      },
      {
        "id": 1019,
        "q": "Which control activity helps ensure completeness of sales invoices for goods dispatched?",
        "options": [
          "Accounting for the numerical sequence of dispatch notes/waybills and matching them to raised sales invoices",
          "Locking the raw materials warehouse after 6 PM",
          "Reviewing employee overtime sheets",
          "Revaluing freehold land every five years"
        ],
        "answer": 0,
        "explanation": "Sequence checks over dispatch notes ensure every shipment triggers a corresponding sales invoice so revenue is not omitted."
      },
      {
        "id": 1020,
        "q": "What is a 'walk-through test' performed during understanding of information flows and internal controls?",
        "options": [
          "Tracing a small number of transactions from origination through processing in accounting records and reporting to confirm understanding of the system and design of controls",
          "Auditing 100% of all purchase invoices for the entire year",
          "Observing a physical inventory count at year-end",
          "Sending external confirmation letters to trade payables"
        ],
        "answer": 0,
        "explanation": "Walk-through tests trace sample transactions end-to-end to verify that the auditor's understanding of information flows and control design is accurate."
      },
      {
        "id": 1021,
        "q": "In a payroll system, what control prevents payments to fictitious ('ghost') employees?",
        "options": [
          "Independent HR authorization of new hires/terminations, segregation of HR master file changes from payroll processing, and independent payroll distribution/clock-card checks",
          "Paying all wages in cash from an unlocked drawer",
          "Allowing the payroll clerk to add new employees directly without HR approval",
          "Skipping tax deduction calculations on monthly salaries"
        ],
        "answer": 0,
        "explanation": "Separating HR master data changes from payroll run execution and verifying active staff prevents ghost employee payroll fraud."
      },
      {
        "id": 1022,
        "q": "When does an auditor perform 'tests of controls' rather than only substantive procedures?",
        "options": [
          "When the auditor intends to rely on the operating effectiveness of controls or when substantive procedures alone cannot provide sufficient appropriate audit evidence",
          "Only when the client has no accounting software",
          "Never — tests of controls are optional in all ISA audits",
          "Only after signing the final audit report"
        ],
        "answer": 0,
        "explanation": "Tests of controls evaluate whether controls operated effectively over the relevant period to support planned reliance or address high-volume automated transaction streams."
      },
      {
        "id": 1023,
        "q": "What should an auditor report to those charged with governance when significant deficiencies in internal control are identified during the audit?",
        "options": [
          "Communicate significant deficiencies in writing (typically via a report to management / letter of weakness) with recommendations for improvement",
          "Keep control weaknesses secret so management is not embarrassed",
          "Fix the client's accounting software personally without informing management",
          "Automatically issue an adverse opinion for every minor clerical slip"
        ],
        "answer": 0,
        "explanation": "Significant deficiencies in internal control must be communicated in writing to those charged with governance/management along with practical remediation suggestions."
      },
      {
        "id": 1024,
        "q": "Under ISA 500, what are the two dimensions of audit evidence that the auditor must obtain?",
        "options": [
          "Sufficiency (measure of quantity) and appropriateness (measure of quality, i.e., relevance and reliability)",
          "Speed (how fast obtained) and cost (how cheap obtained)",
          "Length (number of pages) and color (printed vs. digital)",
          "Quantity of oral replies and number of client meetings"
        ],
        "answer": 0,
        "explanation": "Sufficiency is the quantity of evidence needed (influenced by risk and materiality), while appropriateness is its quality (relevance and reliability)."
      },
      {
        "id": 1025,
        "q": "Which general rule of reliability of audit evidence is recognized under auditing standards?",
        "options": [
          "Evidence from independent external sources is generally more reliable than evidence generated internally within the entity",
          "Oral statements from management are more reliable than written third-party bank confirmations",
          "Photocopies are always more reliable than original documents",
          "Internally generated evidence under weak controls is highly reliable"
        ],
        "answer": 0,
        "explanation": "External independent evidence, direct auditor observation/inspection, and original written documents are generally more reliable than internal or oral evidence."
      },
      {
        "id": 1026,
        "q": "Which audit procedure is most effective for testing the 'completeness' of accounts payable / unrecorded liabilities at year-end?",
        "options": [
          "Reviewing post-year-end cash payments and unmatched supplier invoices/GRNs to identify liabilities relating to the pre-year-end period not yet recorded",
          "Sending positive confirmations only to customers with large debit balances",
          "Inspecting newly purchased motor vehicles in February",
          "Recalculating straight-line depreciation on land"
        ],
        "answer": 0,
        "explanation": "Searching subsequent payments and unbilled receipts/GRNs after year-end uncovers unrecorded liabilities, directly addressing completeness."
      },
      {
        "id": 1027,
        "q": "When testing trade receivables for 'valuation and allocation' (recoverability), which procedure is most useful?",
        "options": [
          "Reviewing the aged receivables listing, overdue balances, subsequent cash receipts after year-end, customer creditworthiness, and historical bad debt write-offs",
          "Counting physical inventory in the finished goods warehouse",
          "Checking sequential numbering of purchase orders",
          "Inspecting the certificate of incorporation"
        ],
        "answer": 0,
        "explanation": "Subsequent cash receipts and overdue aging analysis help assess whether receivables are recoverable or require an allowance for expected credit losses/doubtful debts."
      },
      {
        "id": 1028,
        "q": "What is the key difference between a 'positive' confirmation request and a 'negative' confirmation request for accounts receivable?",
        "options": [
          "Positive asks the respondent to reply in all cases (confirming agreement or stating disagreement); negative asks for a reply only if the respondent disagrees",
          "Positive is sent to banks; negative is sent to tax authorities",
          "Negative requires notarized legal stamps; positive requires only a phone call",
          "Positive is used only when risk of material misstatement is low"
        ],
        "answer": 0,
        "explanation": "Positive confirmations require a direct response regardless of agreement, whereas negative confirmations request response only on disagreement and are used only in low-risk settings."
      },
      {
        "id": 1029,
        "q": "During attendance at a physical inventory count, what is the auditor's primary role?",
        "options": [
          "Observe how management conducts the count, evaluate compliance with count instructions, perform test counts (both ways between sheets and physical stock), and assess condition/obsolescence",
          "Take full responsibility for counting and recording the client's entire warehouse inventory",
          "Set the client's selling prices for slow-moving stock",
          "Approve write-offs without checking count sheets"
        ],
        "answer": 0,
        "explanation": "Management is responsible for counting inventory; the auditor observes procedures, performs independent test counts, notes damaged/obsolete items, and checks cut-off."
      },
      {
        "id": 1030,
        "q": "What does 'cut-off' testing around year-end verify for goods and sales/purchases?",
        "options": [
          "That transactions and inventory movements are recorded in the correct accounting period (before vs. after year-end cut-off)",
          "That employee salaries are paid in Bangladeshi Taka",
          "That fixed assets are depreciated using declining balance",
          "That share capital is authorized in the memorandum"
        ],
        "answer": 0,
        "explanation": "Cut-off testing inspects final dispatch notes and goods received notes around the reporting date to ensure revenue and purchases belong to the proper period."
      },
      {
        "id": 1031,
        "q": "What is 'analytical procedures' under ISA 520?",
        "options": [
          "Evaluations of financial information through analysis of plausible relationships among both financial and non-financial data, including investigation of identified fluctuations",
          "Physically inspecting original title deeds of property",
          "Sending external confirmation letters to debtors",
          "Re-performing a mathematical addition of a single invoice"
        ],
        "answer": 0,
        "explanation": "Analytical procedures compare ratios, trends, and expectations across data and investigate significant unexpected variances."
      },
      {
        "id": 1032,
        "q": "In which stages of an audit are analytical procedures required or used?",
        "options": [
          "Risk assessment/planning (required), substantive procedures (where appropriate), and near the end of the audit to form an overall conclusion on consistency with financial statements",
          "Only during the client acceptance meeting",
          "Only when a client refuses to provide bank statements",
          "Only during post-audit tax filing"
        ],
        "answer": 0,
        "explanation": "ISAs require analytical procedures during planning/risk assessment and near completion as an overall review, while permitting them as substantive tests when reliable."
      },
      {
        "id": 1033,
        "q": "What is 'audit sampling' and what is 'sampling risk'?",
        "options": [
          "Sampling applies audit procedures to less than 100% of items in a population; sampling risk is the risk that the auditor's conclusion based on a sample differs from what would be reached on the whole population",
          "Sampling means testing every single transaction in the ledger; sampling risk is the risk of losing a USB drive",
          "Sampling applies only to cash balances; sampling risk is foreign exchange risk",
          "Sampling risk only occurs in computerized audits"
        ],
        "answer": 0,
        "explanation": "Sampling risk arises whenever a sample does not fully mirror the population, potentially leading to an incorrect audit conclusion."
      },
      {
        "id": 1034,
        "q": "Which of the following is an example of 'non-sampling risk'?",
        "options": [
          "Using an inappropriate audit procedure, misinterpreting audit evidence, or failing to recognize a misstatement due to human oversight",
          "Selecting too small a random sample of sales invoices",
          "Using stratified sampling on high-value receivables",
          "Applying monetary unit sampling to inventory"
        ],
        "answer": 0,
        "explanation": "Non-sampling risk stems from factors other than sample size—such as human error, ineffective procedures, or misreading evidence."
      },
      {
        "id": 1035,
        "q": "What is the main purpose of obtaining written representations (management representation letter) under ISA 580?",
        "options": [
          "To confirm certain matters or support other audit evidence where management's acknowledgment of responsibility is required—but NOT as a substitute for sufficient appropriate audit evidence",
          "To serve as standalone conclusive proof of all financial statement balances without testing",
          "To release the auditor from performing substantive procedures on estimates",
          "To transfer legal liability for audit negligence to the CFO"
        ],
        "answer": 0,
        "explanation": "Written representations corroborate other evidence and confirm management responsibility, but cannot by themselves constitute sufficient appropriate audit evidence on key audit matters."
      },
      {
        "id": 1036,
        "q": "When auditing 'accounting estimates' (such as provisions for warranties or credit losses), what should the auditor evaluate?",
        "options": [
          "Whether estimation methods and assumptions are appropriate and consistent, whether data is accurate, and whether there are indicators of possible management bias",
          "Only whether the estimate is a round number divisible by 100",
          "Only whether management signed a piece of paper",
          "Accounting estimates never require audit evaluation"
        ],
        "answer": 0,
        "explanation": "Auditors assess estimation methodology, data reliability, reasonableness of assumptions, subsequent events, and potential management bias."
      },
      {
        "id": 1037,
        "q": "What is 'audit documentation' (working papers) required to achieve under ISA 230?",
        "options": [
          "Provide a sufficient and appropriate record of the basis for the auditor's report and evidence that the audit was planned and performed in accordance with ISAs and applicable legal/regulatory requirements",
          "Serve as a public marketing brochure for the audit firm",
          "Be given to every shareholder upon request",
          "Include only oral notes remembered after the AGM"
        ],
        "answer": 0,
        "explanation": "Audit documentation enables an experienced auditor with no prior connection to understand the nature, timing, and extent of procedures performed, results obtained, and conclusions reached."
      },
      {
        "id": 1038,
        "q": "When testing 'existence' of tangible non-current assets (e.g., machinery), in which direction should the auditor test?",
        "options": [
          "From the fixed asset register to the physical machinery (inspecting assets recorded in the register)",
          "From the physical machinery to the fixed asset register",
          "Only from the sales ledger to the cash book",
          "By recalculating future goodwill impairment"
        ],
        "answer": 0,
        "explanation": "Tracing from the accounting record (fixed asset register) to the physical asset tests existence/occurrence, whereas tracing physical assets to the register tests completeness."
      },
      {
        "id": 1039,
        "q": "What is 'subsequent events' review (ISA 560) concerned with?",
        "options": [
          "Events occurring between the date of the financial statements and the date of the auditor's report (and facts becoming known after the report date) that may require adjustment or disclosure",
          "Events that occurred five years before the company was incorporated",
          "Future budgets for the next decade that have no link to current reporting",
          "Setting next year's audit fee quote"
        ],
        "answer": 0,
        "explanation": "Subsequent events provide evidence about conditions existing at year-end (adjusting events) or conditions arising after year-end requiring disclosure (non-adjusting events)."
      },
      {
        "id": 1040,
        "q": "If a customer becomes bankrupt after year-end due to insolvency conditions that existed at the balance sheet date, how is this treated in the financial statements?",
        "options": [
          "As an adjusting subsequent event requiring an adjustment/write-down of the receivable balance at year-end",
          "As a non-adjusting event ignored completely",
          "By crediting revenue for the unpaid invoice",
          "By capitalizing the bad debt as a non-current asset"
        ],
        "answer": 0,
        "explanation": "Evidence of a customer's insolvency reflecting conditions existing at year-end requires adjusting the year-end receivable/allowance."
      },
      {
        "id": 1041,
        "q": "Under the IESBA/ICAB Code of Ethics, what are the five fundamental principles?",
        "options": [
          "Integrity, Objectivity, Professional Competence and Due Care, Confidentiality, and Professional Behavior",
          "Honesty, Profitability, Independence, Skepticism, and Materiality",
          "Confidentiality, Advocacy, Familiarity, Intimidation, and Self-Review",
          "Truthfulness, Speed, Accuracy, Compliance, and Loyalty"
        ],
        "answer": 0,
        "explanation": "The five fundamental principles are Integrity, Objectivity, Professional Competence and Due Care, Confidentiality, and Professional Behavior."
      },
      {
        "id": 1042,
        "q": "Which threat arises when an audit firm audits financial statements or figures that the firm itself prepared or valued?",
        "options": [
          "Self-review threat",
          "Advocacy threat",
          "Intimidation threat",
          "Familiarity threat"
        ],
        "answer": 0,
        "explanation": "A self-review threat arises when an auditor must evaluate or challenge work or judgments previously made by the auditor or their firm."
      },
      {
        "id": 1043,
        "q": "An audit client's Managing Director tells the engagement partner: 'If you qualify our financial statements over inventory valuation, we will replace your firm at the next AGM.' Which threat is this?",
        "options": [
          "Intimidation threat (and self-interest threat)",
          "Familiarity threat only",
          "Self-review threat only",
          "No ethical threat"
        ],
        "answer": 0,
        "explanation": "Threatening replacement or dismissal to pressure an auditor into compromising objectivity is a classic intimidation threat."
      },
      {
        "id": 1044,
        "q": "What is the difference between an 'immediate family' member and a 'close family' member under independence rules?",
        "options": [
          "Immediate family is a spouse (or equivalent) or a dependent; close family is a parent, child, or sibling who is not an immediate family member",
          "Immediate family includes cousins; close family includes only spouses",
          "Immediate family is a business partner; close family is a colleague",
          "Both terms mean the exact same thing"
        ],
        "answer": 0,
        "explanation": "Immediate family (spouse/dependent) faces strict automatic prohibitions such as share ownership bans, whereas close family (non-dependent parent/child/sibling) is evaluated individually by role and closeness."
      },
      {
        "id": 1045,
        "q": "What is a 'management threat' in an assurance engagement?",
        "options": [
          "When the audit firm undertakes work involving judgments and decisions that are properly the responsibility of client management",
          "When a manager takes annual leave during busy season",
          "When management asks polite questions about audit sampling",
          "When an audit junior arrives on time"
        ],
        "answer": 0,
        "explanation": "Audit firms must not make management decisions; providing advice is acceptable only where 'informed management' retains independent decision-making authority."
      },
      {
        "id": 1046,
        "q": "Under BSEC notification dated 03 June 2018 in Bangladesh, which non-audit service is an external audit firm prohibited from providing to a listed audit client?",
        "options": [
          "Bookkeeping / accounting record preparation, valuation/appraisal services, or internal audit / special audit services",
          "Issuing an independent auditor's report on annual financial statements",
          "Attending the Annual General Meeting",
          "Communicating with those charged with governance"
        ],
        "answer": 0,
        "explanation": "BSEC's June 3, 2018 notification prohibits audit firms from performing bookkeeping, valuation/fairness opinions, and internal/special audits for listed clients."
      },
      {
        "id": 1047,
        "q": "Under the partner rotation rules for a Public Interest Entity (PIE), what is the maximum continuous tenure as a key audit partner and the cooling-off period?",
        "options": [
          "Maximum 7 years as a key audit partner, followed by a 2-year cooling-off period",
          "Maximum 15 years with no cooling-off period",
          "Maximum 2 years followed by a 10-year cooling-off period",
          "No rotation limit applies to PIEs"
        ],
        "answer": 0,
        "explanation": "Key audit partners on PIEs cannot serve for more than 7 years and must observe a 2-year cooling-off period before rejoining the engagement team or acting as key audit partner."
      },
      {
        "id": 1048,
        "q": "What is the greatest practical risk of breaching client confidentiality according to ethical guidance?",
        "options": [
          "Accidental disclosure (such as discussing client affairs in public places or leaving files unattended) rather than deliberate disclosure",
          "Deliberate disclosure after obtaining a court order",
          "Reporting suspected money laundering to Bangladesh Bank",
          "Discussing a client issue internally with a firm tax specialist when needed"
        ],
        "answer": 0,
        "explanation": "Careless habits like talking in public areas or leaving documents exposed—both externally and inside the client's office—cause most confidentiality breaches."
      },
      {
        "id": 1049,
        "q": "When is an accountant permitted or required to disclose confidential client information without client consent?",
        "options": [
          "When required by law (e.g., anti-money laundering, anti-terrorism, regulatory breaches) or when there is a legal/professional right or duty not prohibited by law (e.g., defending a negligence claim or justified public interest)",
          "Whenever a friend or relative asks for stock tips",
          "Whenever the auditor wants to impress a prospective client",
          "Never under any circumstances"
        ],
        "answer": 0,
        "explanation": "Statutory duties, legal compulsion, professional defense/reviews, and lawful public interest disclosures override client confidentiality."
      },
      {
        "id": 1050,
        "q": "What are 'Chinese Walls' (information barriers) used to manage conflicts of interest?",
        "options": [
          "Formal structural, physical, and procedural barriers—including no team overlap, physical separation, and strict controlled cross-barrier records—preventing confidential data leakage between conflicting teams",
          "Brick walls built around client factories",
          "Agreements allowing auditors to trade client shares",
          "Rules banning firms from ever having two clients in the same sector"
        ],
        "answer": 0,
        "explanation": "Chinese Walls isolate teams working on conflicting engagements through zero staff overlap, physical/IT separation, and documented clearance procedures."
      }
    ]
  },
  {
    "id": 2,
    "title": "Mock Test 2",
    "questions": [
      {
        "id": 2001,
        "q": "Which of the following best describes 'assurance' in the context of the ICAB Assurance syllabus?",
        "options": [
          "An engagement in which a practitioner expresses a conclusion designed to enhance the degree of confidence of intended users other than the responsible party about the outcome of evaluating subject matter against criteria",
          "A guarantee by the external auditor that a company will never go insolvent",
          "A tax calculation prepared solely for submission to the revenue authority",
          "A monthly cash flow forecast prepared by the finance director"
        ],
        "answer": 0,
        "explanation": "Assurance enhances user confidence by evaluating subject matter against suitable criteria and issuing a written conclusion."
      },
      {
        "id": 2002,
        "q": "How does an 'attestation engagement' differ from a 'direct engagement' in assurance?",
        "options": [
          "In an attestation engagement, a party other than the practitioner measures/evaluates subject matter against criteria and presents it; in a direct engagement, the practitioner measures/evaluates the subject matter directly against criteria",
          "Attestation engagements never require a written report",
          "Direct engagements apply only to historical financial statements",
          "There is no distinction between attestation and direct engagements"
        ],
        "answer": 0,
        "explanation": "Attestation evaluates information prepared by the responsible party (such as financial statements), while direct engagements involve the practitioner directly measuring/evaluating subject matter."
      },
      {
        "id": 2003,
        "q": "What is 'audit risk' under ISA 200?",
        "options": [
          "The risk that the auditor expresses an inappropriate audit opinion when the financial statements are materially misstated",
          "The risk that the audit firm fails to collect its audit fee on time",
          "The risk that a client's competitor launches a cheaper product",
          "The risk that an audit junior loses a pen"
        ],
        "answer": 0,
        "explanation": "Audit risk is a function of the risks of material misstatement (inherent risk and control risk) and detection risk."
      },
      {
        "id": 2004,
        "q": "In the audit risk model, what is 'inherent risk'?",
        "options": [
          "Susceptibility of an assertion about a class of transaction, account balance, or disclosure to a misstatement that could be material, before consideration of any related controls",
          "Risk that internal controls fail to prevent a material misstatement",
          "Risk that audit procedures fail to detect a material misstatement",
          "Risk that the auditor is not independent"
        ],
        "answer": 0,
        "explanation": "Inherent risk reflects natural susceptibility to misstatement (e.g., complex estimates, high-value cash/inventory, susceptibility to fraud) before controls."
      },
      {
        "id": 2005,
        "q": "What is 'detection risk'?",
        "options": [
          "The risk that the procedures performed by the auditor to reduce audit risk to an acceptably low level will not detect a misstatement that exists and that could be material",
          "The risk that management overrides internal controls",
          "The risk that the company's inventory is stolen by staff",
          "The risk that IFRS standards change mid-year"
        ],
        "answer": 0,
        "explanation": "Detection risk relates to the effectiveness of audit procedures and sampling; auditors manage it by adjusting nature, timing, and extent of substantive testing."
      },
      {
        "id": 2006,
        "q": "If inherent risk and control risk are assessed as high, what must the auditor do to keep audit risk at an acceptably low level?",
        "options": [
          "Set planned detection risk lower and perform more extensive/reliable substantive procedures",
          "Set planned detection risk higher and reduce sample sizes",
          "Skip substantive procedures and rely only on oral inquiries",
          "Issue an unqualified opinion immediately"
        ],
        "answer": 0,
        "explanation": "Higher risk of material misstatement requires lower detection risk, meaning more thorough substantive evidence."
      },
      {
        "id": 2007,
        "q": "Which party is primarily responsible for the prevention and detection of fraud and error in an entity?",
        "options": [
          "Those charged with governance and management of the entity",
          "The external auditor",
          "The ICAB Quality Assurance Board",
          "The company's external bank"
        ],
        "answer": 0,
        "explanation": "Management and those charged with governance bear primary responsibility for preventing and detecting fraud and error through a strong control culture."
      },
      {
        "id": 2008,
        "q": "What is the external auditor's responsibility regarding fraud in a financial statement audit under ISA 240?",
        "options": [
          "To obtain reasonable assurance about whether the financial statements as a whole are free from material misstatement, whether due to fraud or error",
          "To guarantee that every petty cash discrepancy or minor employee theft is uncovered",
          "To act as a forensic police investigator for every minor irregularity",
          "To ignore fraud unless it exceeds 50% of revenue"
        ],
        "answer": 0,
        "explanation": "Auditors obtain reasonable assurance regarding material misstatements from fraud or error, recognizing higher risk of concealing fraud (especially management fraud/collusion)."
      },
      {
        "id": 2009,
        "q": "Under the Companies Act 1994, which of the following persons is generally disqualified from being appointed auditor of a company?",
        "options": [
          "An officer or employee of the company, a partner/employee of such officer or employee, or a person indebted to the company beyond prescribed limits / holding disqualifying interests",
          "A practicing Chartered Accountant with no disqualifying relationship",
          "An independent audit firm with no financial or employment ties to the company",
          "A member of ICAB appointed by shareholders at an AGM"
        ],
        "answer": 0,
        "explanation": "Statutory disqualification rules under the Companies Act 1994 prevent insiders, employees, debtors, and conflicted parties from acting as company auditors."
      },
      {
        "id": 2010,
        "q": "What is 'materiality' in auditing and financial reporting?",
        "options": [
          "Information is material if omitting, misstating, or obscuring it could reasonably be expected to influence economic decisions of users taken on the basis of the financial statements",
          "Materiality is fixed strictly at BDT 100 for every company regardless of size",
          "Materiality applies only to cash balances and never to disclosures",
          "Materiality is determined solely by the client's marketing team"
        ],
        "answer": 0,
        "explanation": "Materiality depends on both quantitative size and qualitative nature, judged from the perspective of reasonable users' economic decisions."
      },
      {
        "id": 2011,
        "q": "Which component of internal control sets the 'tone at the top' and establishes organizational discipline and structure?",
        "options": [
          "Control environment",
          "Physical stock count sheets",
          "Post-year-end bank statements",
          "Sales commission invoices"
        ],
        "answer": 0,
        "explanation": "The control environment encompasses governance, integrity, ethical values, organizational structure, assignment of authority, and HR commitment to competence."
      },
      {
        "id": 2012,
        "q": "In a purchases and payables system, what is the purpose of matching a supplier's invoice against both the purchase order and the goods received note (GRN)?",
        "options": [
          "To verify that goods billed were actually ordered and actually received, and that prices/quantities match",
          "To calculate income tax payable on dividend income",
          "To record depreciation on company cars",
          "To prepare share capital allotment letters"
        ],
        "answer": 0,
        "explanation": "Three-way matching (PO, GRN, supplier invoice) prevents paying for unordered goods, unreceived goods, or overstated prices/quantities."
      },
      {
        "id": 2013,
        "q": "Which control helps prevent unauthorized alterations to approved supplier master file bank details (a common vendor fraud vector)?",
        "options": [
          "Restricting master file access, requiring independent supervisory approval for bank detail changes, and sending callback/confirmation notices to verified supplier contacts",
          "Allowing any accounts payable clerk to edit bank account numbers directly before payment runs",
          "Printing supplier bank numbers in smaller font",
          "Disabling system audit logs"
        ],
        "answer": 0,
        "explanation": "Strict approval workflows and independent verification of bank detail changes stop fraudsters from diverting supplier payments to fake accounts."
      },
      {
        "id": 2014,
        "q": "What is a 'batch control total' used for in data processing?",
        "options": [
          "Comparing manual pre-processed totals (such as total invoice amounts or document counts) against computer-processed totals to detect missing or miskeyed records",
          "Determining executive bonus payouts",
          "Measuring factory electricity consumption",
          "Calculating goodwill on business combinations"
        ],
        "answer": 0,
        "explanation": "Batch totals verify completeness and accuracy of a group of transactions processed together."
      },
      {
        "id": 2015,
        "q": "What is a 'check digit' in an accounting system?",
        "options": [
          "An extra digit calculated mathematically from other digits in an identification code (like account number) to detect transcription or transposition errors",
          "A signature of the company chairman on a cheque",
          "A physical stamp on a paper invoice",
          "A password used to log into email"
        ],
        "answer": 0,
        "explanation": "Check digits catch common data entry mistakes such as swapping two adjacent digits (e.g., 1234 vs. 1243)."
      },
      {
        "id": 2016,
        "q": "How can an auditor record their understanding of a client's accounting and internal control system?",
        "options": [
          "Using narrative notes, flowcharts, or internal control questionnaires (ICQs) / checklists",
          "Only by memorizing details without writing anything down",
          "By asking the client's bank to write the system description",
          "By relying solely on prior year files without checking changes"
        ],
        "answer": 0,
        "explanation": "Auditors commonly document systems and controls through narratives, flowcharts, and internal control questionnaires/evaluation questionnaires."
      },
      {
        "id": 2017,
        "q": "What is the difference between an 'Internal Control Questionnaire (ICQ)' and an 'Internal Control Evaluation Questionnaire (ICEQ)'?",
        "options": [
          "ICQ asks whether specific controls exist to prevent/detect errors; ICEQ focuses on whether existing controls address specific risks and achieve control objectives in practice",
          "ICQ is for banks; ICEQ is for tax authorities",
          "ICQ tests only cash; ICEQ tests only inventory",
          "There is no difference between them"
        ],
        "answer": 0,
        "explanation": "ICQs check presence of specific controls, while ICEQs evaluate whether those controls effectively mitigate key risks."
      },
      {
        "id": 2018,
        "q": "In an inventory management system, what control reduces the risk of stock theft from the warehouse?",
        "options": [
          "Physical access restrictions (locked doors, security guards, CCTV), perpetual/periodic inventory counts reconciled to records, and authorized stock issue notes",
          "Leaving warehouse doors unlocked during lunch breaks",
          "Allowing warehouse staff to write off missing stock without approval",
          "Recording stock issues without signatures"
        ],
        "answer": 0,
        "explanation": "Physical security, authorized movement documentation, and count reconciliations safeguard inventory assets."
      },
      {
        "id": 2019,
        "q": "Why is 'program change control' important in IT systems?",
        "options": [
          "It ensures only authorized, tested, and approved modifications are applied to production software, preventing unauthorized or buggy code changes",
          "It allows programmers to alter live financial data directly whenever convenient",
          "It removes the need for testing software updates",
          "It speeds up internet browsing on staff computers"
        ],
        "answer": 0,
        "explanation": "Controlled software changes protect data integrity and automated application controls from unauthorized tampering or errors."
      },
      {
        "id": 2020,
        "q": "What control ensures that sales invoices are billed at accurate prices and quantities?",
        "options": [
          "Automated pricing master files restricted to authorized personnel, plus matching invoice quantities to approved dispatch notes and customer orders",
          "Allowing sales clerks to type any price manually on every invoice",
          "Issuing invoices before checking whether goods were ordered",
          "Reconciling petty cash weekly"
        ],
        "answer": 0,
        "explanation": "Authorized price lists and matching quantities against dispatch notes ensure billing accuracy."
      },
      {
        "id": 2021,
        "q": "Which of the following is a 'monitoring of controls' activity?",
        "options": [
          "Ongoing management supervision, internal audit reviews, or periodic evaluations assessing whether controls operate as intended over time",
          "Issuing a single sales credit note",
          "Calculating straight-line depreciation on office furniture",
          "Printing a customer statement"
        ],
        "answer": 0,
        "explanation": "Monitoring is the ongoing or periodic process of evaluating internal control performance and taking timely corrective action."
      },
      {
        "id": 2022,
        "q": "If tests of controls reveal deviations/exceptions in how a control operated, what should the auditor do?",
        "options": [
          "Investigate the nature and cause of deviations, assess whether further testing is needed, and determine whether reliance on controls must be reduced or abandoned in favor of expanded substantive testing",
          "Ignore the exceptions if the client says they were accidental",
          "Automatically issue an adverse audit opinion without further audit work",
          "Delete the control exceptions from audit working papers"
        ],
        "answer": 0,
        "explanation": "Control exceptions require investigation and adjustment of planned reliance and substantive testing procedures."
      },
      {
        "id": 2023,
        "q": "What control helps ensure that all cash receipts received by post or bank transfer are recorded promptly and accurately?",
        "options": [
          "Prompt listing of incoming cheques/remittances by independent mail/cash clerks, banking intact daily, and matching bank credits to customer accounts and cash book",
          "Holding cheques in a desk drawer for three weeks before banking",
          "Allowing the cashier who collects cash to post credits to customer ledgers and prepare bank reconciliations",
          "Destroying remittance advices after banking"
        ],
        "answer": 0,
        "explanation": "Immediate recording, banking intact, and independent ledger/reconciliation checks protect cash receipts from skimming or lapping."
      },
      {
        "id": 2024,
        "q": "Which audit procedure consists of looking at a process or procedure being performed by others (e.g., observing inventory counting or control activities)?",
        "options": [
          "Observation",
          "Reperformance",
          "External confirmation",
          "Recalculation"
        ],
        "answer": 0,
        "explanation": "Observation is watching a procedure or process being executed by others; it provides evidence at the point in time observed."
      },
      {
        "id": 2025,
        "q": "Which audit procedure involves the auditor independently executing procedures or controls that were originally performed as part of the entity's internal control?",
        "options": [
          "Reperformance",
          "Inquiry",
          "Observation",
          "Inspection of records"
        ],
        "answer": 0,
        "explanation": "Reperformance is the auditor's independent execution of controls or calculations (e.g., re-performing a bank reconciliation or aged receivables calculation)."
      },
      {
        "id": 2026,
        "q": "Which audit procedure consists of checking the mathematical accuracy of documents or records?",
        "options": [
          "Recalculation",
          "Observation",
          "External confirmation",
          "Inquiry"
        ],
        "answer": 0,
        "explanation": "Recalculation tests mathematical accuracy manually or using computer-assisted audit techniques (CAATs)."
      },
      {
        "id": 2027,
        "q": "What is an 'external confirmation' under ISA 505?",
        "options": [
          "Audit evidence obtained as a direct written response to the auditor from a third party (confirming party) in paper form, or by electronic or other medium",
          "An oral statement made by the client's financial controller",
          "A photocopy of a sales invoice prepared by the client",
          "A forecast prepared by the marketing department"
        ],
        "answer": 0,
        "explanation": "External confirmations come directly from independent third parties (such as banks, trade debtors, or legal counsel) to the auditor."
      },
      {
        "id": 2028,
        "q": "If management refuses to allow the auditor to send a bank or trade receivable confirmation request, what should the auditor do?",
        "options": [
          "Evaluate reasons for refusal, assess implications for fraud risk and reliability of management representations, perform alternative procedures, and if unable to obtain sufficient appropriate evidence, communicate with governance and consider modifying the opinion or withdrawing",
          "Accept management's refusal without asking any questions",
          "Forge the third party's signature on a confirmation letter",
          "Ignore the unconfirmed balance completely"
        ],
        "answer": 0,
        "explanation": "Management refusal to permit confirmations is a significant warning sign requiring investigation, alternative evidence, and reporting/opinion evaluation."
      },
      {
        "id": 2029,
        "q": "What is the difference between 'inspection of records or documents' and 'inspection of tangible assets'?",
        "options": [
          "Inspection of records examines internal/external documents or electronic files; inspection of tangible assets involves physical examination of the assets themselves",
          "Inspection of records applies only to cash; inspection of tangible assets applies only to intangible goodwill",
          "Inspection of tangible assets proves completeness of liabilities",
          "There is no difference between them"
        ],
        "answer": 0,
        "explanation": "Inspecting records yields evidence of varying reliability depending on source/form, whereas physically inspecting assets provides strong evidence of existence/condition (not necessarily ownership or valuation)."
      },
      {
        "id": 2030,
        "q": "When auditing inventory valuation (lower of cost and net realizable value under IAS 2), what does 'net realizable value' (NRV) represent?",
        "options": [
          "Estimated selling price in the ordinary course of business less the estimated costs of completion and the estimated costs necessary to make the sale",
          "Original purchase price plus customs duty",
          "Replacement cost in the wholesale market only",
          "Insurance insured value of the warehouse"
        ],
        "answer": 0,
        "explanation": "Under IAS 2, inventory must be measured at the lower of cost and NRV (estimated selling price less costs to complete and sell)."
      },
      {
        "id": 2031,
        "q": "Which audit procedure is best suited to test whether slow-moving or damaged inventory is written down to NRV?",
        "options": [
          "Reviewing inventory aging reports, post-year-end sales invoices/selling prices, damaged stock notes from the count, and slow-moving stock lists",
          "Recalculating payroll tax deductions",
          "Inspecting share certificates of subsidiaries",
          "Confirming bank overdraft limits"
        ],
        "answer": 0,
        "explanation": "Checking actual post-year-end selling prices and count condition notes tests whether NRV is below cost."
      },
      {
        "id": 2032,
        "q": "In auditing 'completeness' of tangible non-current assets, which test direction is appropriate?",
        "options": [
          "From physical assets on site / floor to the fixed asset register",
          "From the fixed asset register to physical assets only",
          "From the cash payments journal to customer invoices",
          "From the trial balance to the bank statement"
        ],
        "answer": 0,
        "explanation": "Starting with physical assets observed in use and tracing them into the fixed asset register checks that existing assets were not omitted."
      },
      {
        "id": 2033,
        "q": "What is 'audit data analytics' / Computer-Assisted Audit Techniques (CAATs)?",
        "options": [
          "Using software tools/techniques to analyze client accounting data—such as testing 100% of a population, recalculating totals, identifying unusual journal entries, or stratifying balances",
          "Counting physical inventory with a calculator",
          "Reading printed newspapers for market news",
          "Interviewing staff in person"
        ],
        "answer": 0,
        "explanation": "CAATs allow auditors to process large volumes of electronic data efficiently, perform recalculations, and spot anomalies or fraud indicators."
      },
      {
        "id": 2034,
        "q": "What is 'going concern' under ISA 570?",
        "options": [
          "The assumption that an entity will continue in operation for the foreseeable future (at least 12 months from the reporting date) with neither intention nor necessity to liquidate or cease trading",
          "A guarantee that an entity will earn higher profits every single year",
          "A rule requiring companies to change auditors every year",
          "A method of depreciating intangible assets"
        ],
        "answer": 0,
        "explanation": "Financial statements are normally prepared on a going concern basis unless management intends to liquidate/cease operations or has no realistic alternative."
      },
      {
        "id": 2035,
        "q": "Which of the following is a financial indicator of potential going concern doubt?",
        "options": [
          "Net liability or net current liability position, inability to pay creditors on due dates, recurring operating losses, or loss of major suppliers/key customers",
          "Steady cash flows and healthy working capital",
          "Renewal of long-term credit facilities on favorable terms",
          "Launch of a profitable new product line"
        ],
        "answer": 0,
        "explanation": "Liquidity strain, recurring losses, loan defaults, or major operational disruptions are classic going concern indicators requiring ISA 570 evaluation."
      },
      {
        "id": 2036,
        "q": "What is a 'related party' under IAS 24 / ISA 550?",
        "options": [
          "A person or entity that is related to the reporting entity—such as parents, subsidiaries, associates, joint ventures, key management personnel, or their close family members",
          "Any unrelated customer who buys goods once a year",
          "A competitor operating in a completely different country",
          "A random retail shareholder owning 0.001% of shares"
        ],
        "answer": 0,
        "explanation": "Related parties involve control, joint control, significant influence, or key management relationships where transactions may occur on non-arm's-length terms."
      },
      {
        "id": 2037,
        "q": "Why do auditors pay special attention to related party transactions?",
        "options": [
          "Related parties may enter into transactions not at arm's length, conceal fraud/earnings manipulation, or require specific disclosures under financial reporting frameworks",
          "Related party transactions are always illegal",
          "Related party balances never appear in financial statements",
          "Related parties never have influence over pricing"
        ],
        "answer": 0,
        "explanation": "Transactions with related parties carry heightened risk of undisclosed terms, mispricing, or fraud, requiring identification and disclosure verification."
      },
      {
        "id": 2038,
        "q": "When must the audit file be assembled into a final audit file after the date of the auditor's report under ISA 230?",
        "options": [
          "Timely after the date of the auditor's report (ordinarily not more than 60 days after the report date), without deleting or discarding required audit documentation during assembly",
          "Five years after the audit report is signed",
          "Before the client's fiscal year even begins",
          "Only if the client requests a copy"
        ],
        "answer": 0,
        "explanation": "Final assembly of the audit file occurs promptly (typically within 60 days of the auditor's report date) and is administrative rather than adding new audit conclusions."
      },
      {
        "id": 2039,
        "q": "Which fundamental principle requires a professional accountant to be straightforward and honest in all professional and business relationships?",
        "options": [
          "Integrity",
          "Objectivity",
          "Confidentiality",
          "Professional Behavior"
        ],
        "answer": 0,
        "explanation": "Integrity requires honesty, straightforwardness, and fair dealing, and prohibits association with false, reckless, or misleadingly incomplete information."
      },
      {
        "id": 2040,
        "q": "Which fundamental principle requires an accountant not to allow bias, conflict of interest, or undue influence of others to override professional or business judgments?",
        "options": [
          "Objectivity",
          "Integrity",
          "Confidentiality",
          "Professional Competence and Due Care"
        ],
        "answer": 0,
        "explanation": "Objectivity protects impartial professional judgment from bias, conflicts of interest, or undue pressure."
      },
      {
        "id": 2041,
        "q": "Which threat arises when an assurance firm has a financial interest in a client, depends heavily on client fees, or faces possible loss of a client?",
        "options": [
          "Self-interest threat",
          "Self-review threat",
          "Familiarity threat",
          "Advocacy threat"
        ],
        "answer": 0,
        "explanation": "Financial interests (such as shares or loans), fee dependency, or commercial incentives create a self-interest threat to objectivity."
      },
      {
        "id": 2042,
        "q": "An audit senior has worked on the audit of a non-listed client for 9 years and has become close friends with the client's finance manager. What safeguard is most appropriate?",
        "options": [
          "Rotating the senior off the engagement team or applying independent review/supervision",
          "Increasing the audit fee to reward loyalty",
          "Allowing the senior to approve client journal entries",
          "Ignoring the relationship since the client is non-listed"
        ],
        "answer": 0,
        "explanation": "Long association creates a familiarity threat that can erode skepticism; rotation or independent review helps address the threat."
      },
      {
        "id": 2043,
        "q": "What rule applies to 'contingent fees' for an assurance engagement?",
        "options": [
          "Prohibited — an assurance firm shall not enter into a contingent fee arrangement for an assurance engagement (except fees established by a court or public authority)",
          "Permitted if the fee is based on net profit after tax",
          "Permitted if approved by the client's sales director",
          "Mandatory for all statutory audits"
        ],
        "answer": 0,
        "explanation": "Contingent fees link compensation to outcomes or results, creating a severe self-interest threat incompatible with assurance independence."
      },
      {
        "id": 2044,
        "q": "What does the ICAB Code say when a client has overdue audit fees from prior years?",
        "options": [
          "Overdue fees can act like an unauthorized loan creating a self-interest threat; generally, payment should be required before issuing the following year's assurance report",
          "Overdue fees should be written off immediately as a gift",
          "Overdue fees never affect auditor independence",
          "The auditor should double next year's fee to cover it"
        ],
        "answer": 0,
        "explanation": "Unpaid overdue fees resemble a loan to the client and should generally be settled before issuing the next assurance report."
      },
      {
        "id": 2045,
        "q": "If a threat to independence cannot be eliminated or reduced to an acceptable level because no safeguards are available, what must the firm do?",
        "options": [
          "Eliminate the interest/activity causing the threat, or decline/discontinue (withdraw from) the engagement",
          "Continue the engagement and ask management for a promise",
          "Lower materiality thresholds to 0%",
          "Proceed without informing governance"
        ],
        "answer": 0,
        "explanation": "Where threats cannot be reduced to an acceptable level, the firm must remove the cause or decline/withdraw from the engagement."
      },
      {
        "id": 2046,
        "q": "While auditing Client A, an auditor discovers confidential information showing Client B (another audit client) has a material unrecorded debt to Client A. How should the auditor handle Client B's audit?",
        "options": [
          "Do not disclose Client A's confidential information; perform normal audit procedures/enquiries at Client B to obtain evidence independently (or resign if unresolvable)",
          "Disclose Client A's confidential file to Client B's management",
          "Issue a clean report on Client B despite knowing it is materially misstated",
          "Publish Client A's data on social media"
        ],
        "answer": 0,
        "explanation": "The auditor must protect Client A's confidentiality while refusing to issue a false opinion on Client B; independent audit procedures at Client B are required."
      },
      {
        "id": 2047,
        "q": "Which of the following is a safeguard against ACCIDENTAL disclosure of confidential client information?",
        "options": [
          "Not discussing client matters in public places or leaving audit files unattended at client premises, in cars, or on unprotected electronic devices",
          "Sharing client profit figures with friends at a café",
          "Leaving unencrypted working papers on a shared public computer",
          "Carrying physical files in an unlocked bag on public transport without care"
        ],
        "answer": 0,
        "explanation": "Preventing accidental disclosure requires careful physical and electronic security and discretion in all public and internal settings."
      },
      {
        "id": 2048,
        "q": "If a client refuses to give informed consent after a firm discloses a manageable conflict of interest, what must the firm do?",
        "options": [
          "Not continue to act for one of the parties (decline or withdraw as appropriate)",
          "Proceed secretly without consent",
          "Charge a higher fee and continue both engagements",
          "Ignore the conflict"
        ],
        "answer": 0,
        "explanation": "Informed consent is essential when managing conflicts; if refused, the firm cannot continue acting for one of the conflicting parties."
      },
      {
        "id": 2049,
        "q": "An auditor finds more errors in a sample than expected. What is an appropriate response?",
        "options": [
          "Ignore the errors if the sample is small",
          "Investigate their nature and cause, consider effects elsewhere in the audit and project misstatements where appropriate",
          "Increase tolerable misstatement automatically",
          "Conclude that the entire financial statements are misstated without further work"
        ],
        "answer": 1,
        "explanation": "The auditor evaluates the nature and cause of errors, considers their wider audit implications and projects sample misstatements to assess the population."
      },
      {
        "id": 2050,
        "q": "Under ISA 450, how should an auditor evaluate identified misstatements?",
        "options": [
          "Only by considering their monetary amount",
          "By considering their size, nature and circumstances, individually and together",
          "Only after management has corrected them",
          "By ignoring errors that are below materiality individually"
        ],
        "answer": 1,
        "explanation": "Misstatements are evaluated individually and in aggregate, considering both quantitative and qualitative factors. Significant misstatements should be communicated to management and, if uncorrected, to those charged with governance."
      }
    ]
  },
  {
    "id": 3,
    "title": "Mock Test 3",
    "questions": [
      {
        "id": 3001,
        "q": "Which of the following is an example of a 'non-assurance engagement'?",
        "options": [
          "Agreed-upon procedures engagement or tax compliance/compilation engagement without an assurance conclusion",
          "Statutory audit of annual financial statements",
          "Half-yearly financial review engagement",
          "Reasonable assurance sustainability report"
        ],
        "answer": 0,
        "explanation": "Agreed-upon procedures report factual findings rather than an assurance conclusion, and compilation/tax compliance services are non-assurance services."
      },
      {
        "id": 3002,
        "q": "In an 'agreed-upon procedures' engagement, what does the practitioner report?",
        "options": [
          "Factual findings resulting from agreed procedures performed—no assurance opinion or conclusion is expressed",
          "A positive opinion that financial statements give a true and fair view",
          "A negative conclusion that nothing came to attention",
          "A guarantee against corporate fraud"
        ],
        "answer": 0,
        "explanation": "Agreed-upon procedures engagements provide factual findings to the engaging party without expressing assurance."
      },
      {
        "id": 3003,
        "q": "Which of the following is a key benefit of an assurance engagement to external stakeholders?",
        "options": [
          "Enhances credibility and reliability of reported information, helping users make more informed economic decisions",
          "Eliminates all commercial business risks",
          "Guarantees high dividend payouts every year",
          "Replaces internal accounting records"
        ],
        "answer": 0,
        "explanation": "Independent assurance reduces information asymmetry and increases confidence in financial or non-financial reports."
      },
      {
        "id": 3004,
        "q": "What does 'suitable criteria' require in an assurance engagement?",
        "options": [
          "Relevance, completeness, reliability, neutrality, and understandability",
          "Secrecy, ambiguity, bias, and complexity",
          "Arbitrary numbers chosen after year-end",
          "Exemption from regulatory review"
        ],
        "answer": 0,
        "explanation": "Suitable criteria must be relevant to users, complete, reliable, neutral (free from bias), and understandable."
      },
      {
        "id": 3005,
        "q": "Under the Companies Act 1994, if a casual vacancy occurs in the office of an auditor of a company, who may fill it?",
        "options": [
          "The board of directors may fill any casual vacancy in the office of auditor, while any continuing auditor(s) may act",
          "Only the company's youngest clerk",
          "Only a foreign government agency",
          "Casual vacancies can never be filled"
        ],
        "answer": 0,
        "explanation": "Under the Companies Act 1994, directors have authority to fill casual vacancies until the next general meeting."
      },
      {
        "id": 3006,
        "q": "Why can an assurance engagement never provide 'absolute assurance'?",
        "options": [
          "Because of inherent limitations including testing by sample, judgmental estimates, internal control limits, and possibility of collusion/sophisticated fraud",
          "Because auditors do not read financial statements",
          "Because audit reports are always written in code",
          "Because accounting standards forbid absolute assurance"
        ],
        "answer": 0,
        "explanation": "Practical, economic, and evidentiary constraints mean an auditor obtains persuasive rather than conclusive evidence."
      },
      {
        "id": 3007,
        "q": "What is 'performance materiality' in an audit?",
        "options": [
          "An amount set by the auditor at less than materiality for the financial statements as a whole to reduce to an appropriately low level the probability that the aggregate of uncorrected and undetected misstatements exceeds overall materiality",
          "The total revenue of the company for the year",
          "The salary of the audit engagement partner",
          "The number of pages in the annual report"
        ],
        "answer": 0,
        "explanation": "Performance materiality is lower than overall financial statement materiality, helping auditors catch smaller misstatements that could aggregate to a material amount."
      },
      {
        "id": 3008,
        "q": "When should an engagement letter be sent to a recurring audit client?",
        "options": [
          "When circumstances indicate the client may misunderstand the objective/scope, terms have changed, there is recent change in senior management/ownership, or significant change in business nature/size",
          "Never after the very first year of the audit",
          "Every single week during fieldwork",
          "Only after the AGM passes the accounts"
        ],
        "answer": 0,
        "explanation": "For recurring audits, auditors assess whether terms need to be reminded or revised due to changed circumstances or misunderstandings."
      },
      {
        "id": 3009,
        "q": "Which of the following is an example of 'fraudulent financial reporting' under ISA 240?",
        "options": [
          "Falsifying accounting records, deliberately omitting/misstating events or disclosures, or applying inappropriate accounting policies intentionally",
          "An honest clerical mistake in adding two numbers",
          "A genuine misunderstanding of a complex tax rule",
          "A minor rounding difference on a schedule"
        ],
        "answer": 0,
        "explanation": "Fraudulent financial reporting involves intentional misstatement or omission to deceive financial statement users (such as window-dressing or earnings manipulation)."
      },
      {
        "id": 3010,
        "q": "Which of the following is an example of 'misappropriation of assets'?",
        "options": [
          "Stealing cash receipts, embezzling inventory, or causing the entity to pay for goods/services not received",
          "Adopting a permissible IFRS accounting policy",
          "Revaluing property with an independent appraiser",
          "Disclosing a contingent liability in the notes"
        ],
        "answer": 0,
        "explanation": "Misappropriation of assets involves theft of entity assets by employees or insiders, often accompanied by false or misleading records to conceal the theft."
      },
      {
        "id": 3011,
        "q": "In a sales and receivables cycle, why should the person who prepares customer credit notes be independent of the person who posts cash receipts and approves sales orders?",
        "options": [
          "To prevent fictitious credit notes being issued to conceal stolen cash or write off valid customer debts improperly",
          "To increase the number of credit notes issued each month",
          "To avoid sending monthly statements to customers",
          "To delay recording customer payments"
        ],
        "answer": 0,
        "explanation": "Unauthorized credit notes can be used to mask cash theft or improperly reduce customer balances; independent approval prevents abuse."
      },
      {
        "id": 3012,
        "q": "What is a 'range check' (or reasonableness check) as an IT application control?",
        "options": [
          "A programmed check verifying that an input value (such as hours worked in a week or unit price) falls within a pre-determined acceptable range",
          "A physical lock on the server cabinet",
          "A backup tape stored off-site",
          "A staff attendance register"
        ],
        "answer": 0,
        "explanation": "Range checks flag or reject entries outside expected numerical limits (e.g., overtime hours > 80 in a week)."
      },
      {
        "id": 3013,
        "q": "In a payroll cycle, what control helps ensure payroll calculations (gross pay, tax/statutory deductions, net pay) are accurate?",
        "options": [
          "Authorized pay rates/salaries on personnel master files, independent check/recalculation of payroll casts and deductions, and supervisory review before bank transfer/cash payout",
          "Allowing payroll clerks to invent hourly rates verbally",
          "Paying wages without deducting required statutory taxes",
          "Skipping reconciliation of total net pay to the payroll bank transfer"
        ],
        "answer": 0,
        "explanation": "Authorized master data, independent recalculation, and pre-payment review prevent payroll calculation errors and unauthorized pay increases."
      },
      {
        "id": 3014,
        "q": "What is a 'control deficiency' in internal control?",
        "options": [
          "A control is designed, implemented, or operated in such a way that it is unable to prevent, or detect and correct, misstatements on a timely basis, OR a necessary control is missing",
          "Any control that takes more than five minutes to perform",
          "Any control used by a listed company",
          "A control documented in a flowchart"
        ],
        "answer": 0,
        "explanation": "A deficiency exists either when a needed control is absent or when an existing control fails to prevent/detect/correct misstatements timely."
      },
      {
        "id": 3015,
        "q": "What is a 'significant deficiency' in internal control?",
        "options": [
          "A deficiency or combination of deficiencies in internal control that, in the auditor's professional judgment, is of sufficient importance to merit the attention of those charged with governance",
          "Every minor typographical error found during the audit",
          "Any internal control policy written in English",
          "A routine bank reconciliation completed on time"
        ],
        "answer": 0,
        "explanation": "Significant deficiencies require communication to those charged with governance because of the likelihood and magnitude of potential misstatement."
      },
      {
        "id": 3016,
        "q": "What control activity is appropriate over petty cash imprest systems?",
        "options": [
          "Fixed imprest float, pre-numbered vouchers supported by receipts/invoices, independent surprise cash counts, and replenishment equal to verified expenditure",
          "Allowing unrestricted borrowing/IOUs from the petty cash box without receipts",
          "Keeping unlimited cash in an unlocked drawer",
          "Allowing the petty cashier to approve their own expense vouchers"
        ],
        "answer": 0,
        "explanation": "Imprest accounting with receipts, surprise counts, and independent replenishment controls petty cash disbursements."
      },
      {
        "id": 3017,
        "q": "Why is 'logical access control' (passwords, role-based permissions, user access reviews) vital in an ERP accounting system?",
        "options": [
          "It restricts users only to functions and data required for their job roles, preventing unauthorized viewing, posting, or altering of financial records",
          "It makes computers run without electricity",
          "It eliminates the need for accounting standards",
          "It allows all staff to post journal entries to any account"
        ],
        "answer": 0,
        "explanation": "Role-based logical access enforces segregation of duties digitally and protects sensitive financial data from unauthorized changes."
      },
      {
        "id": 3018,
        "q": "When testing the operating effectiveness of a manual control that operates daily across hundreds of transactions, how might an auditor select a sample?",
        "options": [
          "Using audit sampling techniques (such as random or systematic sampling) across the period, considering control frequency and risk",
          "By checking a single transaction on one day and assuming all other days are identical",
          "By asking the client's receptionist if the control works",
          "By testing only transactions after the year-end date"
        ],
        "answer": 0,
        "explanation": "Daily manual controls generally require sampling across the relevant period rather than relying on a single instance."
      },
      {
        "id": 3019,
        "q": "What is a key difference between 'automated controls' and 'manual controls'?",
        "options": [
          "Automated controls apply consistently to standard transactions once properly configured, whereas manual controls are more prone to human error or inconsistency",
          "Automated controls can never fail even if programmed incorrectly",
          "Manual controls never require human judgment",
          "Automated controls do not rely on general IT controls"
        ],
        "answer": 0,
        "explanation": "Automated controls process consistently if program logic and general IT controls work, though a programming flaw affects every transaction processed."
      },
      {
        "id": 3020,
        "q": "In a goods receipt and inventory process, why should Goods Received Notes (GRNs) be pre-numbered and matched to purchase orders?",
        "options": [
          "To ensure all goods received are recorded completely and accurately, and only authorized orders are accepted into inventory",
          "To determine employee income tax brackets",
          "To calculate goodwill impairment",
          "To set dividend per share"
        ],
        "answer": 0,
        "explanation": "Pre-numbered GRNs matched to POs support completeness of inventory/payables and prevent unauthorized deliveries."
      },
      {
        "id": 3021,
        "q": "Which control helps prevent duplicate payment of the same supplier invoice?",
        "options": [
          "Marking paid invoices/supporting documents 'PAID' (or system duplicate-invoice checks on invoice number, date, and amount) upon payment authorization",
          "Filing paid invoices with unpaid invoices in the same unorganized pile",
          "Paying invoices without checking whether a prior cheque was already issued",
          "Allowing suppliers to submit identical invoices multiple times without check"
        ],
        "answer": 0,
        "explanation": "Cancelling/marking paid vouchers and automated duplicate checks prevent paying the same invoice twice."
      },
      {
        "id": 3022,
        "q": "What is the role of 'information and communication' as a component of internal control?",
        "options": [
          "Identifying, capturing, and exchanging financial and operational information in a form and timeframe enabling people to carry out their responsibilities",
          "Printing marketing flyers for customers",
          "Blocking internal emails between departments",
          "Replacing accounting ledgers with verbal notes"
        ],
        "answer": 0,
        "explanation": "Reliable information systems and clear communication channels ensure accurate reporting and awareness of control responsibilities."
      },
      {
        "id": 3023,
        "q": "What is the entity's 'risk assessment process' in internal control?",
        "options": [
          "Management's process for identifying business and financial reporting risks relevant to objectives and deciding how to manage them",
          "The external auditor's sample size calculation",
          "A list of office stationery items",
          "A bank's credit scoring model"
        ],
        "answer": 0,
        "explanation": "Effective internal control includes management identifying risks—including fraud and change risks—and establishing responses."
      },
      {
        "id": 3024,
        "q": "Which financial statement assertion relates to whether recorded assets, liabilities, and equity interests exist at a given date?",
        "options": [
          "Existence",
          "Completeness",
          "Cut-off",
          "Classification"
        ],
        "answer": 0,
        "explanation": "Existence addresses whether assets, liabilities, and equity interests actually exist at the reporting date (as opposed to being fictitious or overstated)."
      },
      {
        "id": 3025,
        "q": "Which financial statement assertion relates to whether all transactions and events that should have been recorded have been recorded?",
        "options": [
          "Completeness",
          "Occurrence",
          "Accuracy",
          "Valuation"
        ],
        "answer": 0,
        "explanation": "Completeness addresses whether all required transactions, balances, and disclosures are included without omission."
      },
      {
        "id": 3026,
        "q": "Which financial statement assertion relates to whether transactions and events that have been recorded have occurred and pertain to the entity?",
        "options": [
          "Occurrence",
          "Completeness",
          "Valuation and allocation",
          "Rights and obligations"
        ],
        "answer": 0,
        "explanation": "Occurrence verifies that recorded transactions/events genuinely happened and relate to the entity rather than being fictitious or belonging to another party."
      },
      {
        "id": 3027,
        "q": "Which assertion is tested by inspecting title deeds, registration certificates, or loan agreements for an asset or liability?",
        "options": [
          "Rights and obligations",
          "Cut-off",
          "Completeness",
          "Occurrence"
        ],
        "answer": 0,
        "explanation": "Rights and obligations verify that the entity holds the rights to assets and is obligated for liabilities."
      },
      {
        "id": 3028,
        "q": "What is 'direction of testing' when testing for 'completeness' of revenue?",
        "options": [
          "Tracing from source documents (such as shipping/dispatch notes) to the sales ledger and general ledger",
          "Tracing from the sales ledger back to dispatch notes only",
          "Counting physical cash in the vault",
          "Recalculating straight-line depreciation"
        ],
        "answer": 0,
        "explanation": "To test completeness (unrecorded items), auditors trace from underlying source events/documents forward into the accounting records."
      },
      {
        "id": 3029,
        "q": "What is 'direction of testing' when testing for 'occurrence' of recorded sales transactions?",
        "options": [
          "Vouching/tracing from recorded entries in the sales journal/ledger back to supporting evidence such as dispatch notes and customer orders",
          "Tracing from dispatch notes to the sales journal",
          "Inspecting fixed asset tags in the factory",
          "Re-performing bank reconciliations"
        ],
        "answer": 0,
        "explanation": "To test occurrence (validity of recorded items), auditors select recorded entries and trace backward to supporting evidence."
      },
      {
        "id": 3030,
        "q": "When obtaining external bank confirmations (standard bank audit letters), what information is typically confirmed?",
        "options": [
          "Bank account balances, restrictions/liens on accounts, loans/overdrafts, guarantees, and authorized signatories as at the balance sheet date",
          "The company's projected profit for next year",
          "Employee performance appraisal scores",
          "Market share rankings"
        ],
        "answer": 0,
        "explanation": "Bank confirmations independently verify account balances, credit/loan arrangements, securities/charges, and banking relationships."
      },
      {
        "id": 3031,
        "q": "What is 'stratified sampling' in audit sampling?",
        "options": [
          "Dividing a population into sub-populations (strata) with similar characteristics—often isolating high-value or unusual items for higher/100% testing—to reduce sample size and improve efficiency",
          "Selecting only the first five items in a ledger",
          "Flipping a coin for every transaction",
          "Testing only items with zero balance"
        ],
        "answer": 0,
        "explanation": "Stratification groups similar items so high-value or high-risk items receive thorough coverage while smaller items are sampled efficiently."
      },
      {
        "id": 3032,
        "q": "What is 'random selection' versus 'systematic selection' in audit sampling?",
        "options": [
          "Random selection gives every sampling unit a known chance of selection (e.g., via random number generator); systematic selection picks items at a uniform sampling interval after a random start",
          "Random selection means picking whichever invoice is closest; systematic selection means picking only Friday invoices",
          "Both methods require testing 100% of the population",
          "Neither method is permitted under ISAs"
        ],
        "answer": 0,
        "explanation": "Both random and systematic sampling are recognized statistical/probability-based selection methods when properly applied (ensuring no predictability bias in systematic sampling)."
      },
      {
        "id": 3033,
        "q": "If an auditor uses 'haphazard selection' (selecting items without following a structured technique), what must they avoid?",
        "options": [
          "Conscious bias or predictability—such as avoiding difficult, large, or unusual items or picking only easily accessible files",
          "Looking at any documents",
          "Recording sample selections in working papers",
          "Testing any balances"
        ],
        "answer": 0,
        "explanation": "Haphazard selection aims to approximate randomness without a formal tool, so conscious or unconscious avoidance of risky/large items must be avoided."
      },
      {
        "id": 3034,
        "q": "When auditing provisions and contingencies (IAS 37), what are the key criteria for recognizing a provision?",
        "options": [
          "Present obligation (legal or constructive) from a past event, probable outflow of economic benefits, and a reliable estimate of the amount",
          "Possible future obligation with remote likelihood",
          "Expected future operating loss with no present obligation",
          "A voluntary wish to set aside cash"
        ],
        "answer": 0,
        "explanation": "Under IAS 37, a provision requires a present obligation from a past event, probable outflow (>50% likelihood), and a reliable estimate."
      },
      {
        "id": 3035,
        "q": "Which audit procedure helps identify unrecorded legal claims or litigation involving the client?",
        "options": [
          "Inquiring of management and in-house/external legal counsel, reviewing legal expense accounts and board/audit committee minutes, and sending a letter of inquiry to external lawyers",
          "Counting physical raw materials in storage",
          "Checking petrol receipts for delivery vans",
          "Re-running payroll tax software"
        ],
        "answer": 0,
        "explanation": "Legal correspondence, minutes, and legal fee analysis help uncover claims, disputes, and contingent liabilities."
      },
      {
        "id": 3036,
        "q": "What should an auditor do if they identify a misstatement during the audit?",
        "options": [
          "Accumulate misstatements (unless clearly trivial), evaluate whether they indicate fraud or control deficiencies, request management to correct them, and assess the effect of uncorrected misstatements on the financial statements",
          "Ignore misstatements if they reduce profit",
          "Conceal misstatements from the audit file",
          "Automatically resign without asking management to adjust"
        ],
        "answer": 0,
        "explanation": "Auditors log misstatements above the trivial threshold, ask management to adjust them, and evaluate the aggregate effect of any remaining uncorrected misstatements."
      },
      {
        "id": 3037,
        "q": "What does 'audit evidence' comprise under ISA 500?",
        "options": [
          "Information used by the auditor in arriving at the conclusions on which the auditor's opinion is based, including both information contained in underlying accounting records and other information",
          "Only bank statements printed by the client",
          "Only oral statements from the CEO",
          "Only statutory tax returns filed with NBR"
        ],
        "answer": 0,
        "explanation": "Audit evidence encompasses underlying accounting records and corroborating or contradictory information from internal and external sources."
      },
      {
        "id": 3038,
        "q": "When evaluating whether an auditor's expert's work can be relied upon under ISA 620, what does the auditor assess?",
        "options": [
          "The expert's competence, capabilities, and objectivity; the nature and scope of the expert's work; and the appropriateness of that work as audit evidence",
          "Only whether the expert is a close relative of the client's CFO",
          "Only whether the expert charges a contingent fee",
          "The auditor automatically accepts any expert conclusion without review"
        ],
        "answer": 0,
        "explanation": "Under ISA 620, the auditor evaluates the auditor's expert's competence, capabilities, objectivity, scope of work, and adequacy of findings."
      },
      {
        "id": 3039,
        "q": "Which fundamental principle requires a professional accountant to maintain professional knowledge and skill at the level required to ensure competent service based on current developments in practice, legislation, and techniques?",
        "options": [
          "Professional Competence and Due Care",
          "Confidentiality",
          "Advocacy",
          "Independence in Appearance"
        ],
        "answer": 0,
        "explanation": "Professional competence and due care requires attaining and maintaining professional knowledge (CPD) and acting diligently in accordance with standards."
      },
      {
        "id": 3040,
        "q": "Which fundamental principle requires compliance with relevant laws and regulations and avoiding any action that discredits the profession, including avoiding exaggerated marketing claims or disparaging comparisons?",
        "options": [
          "Professional Behavior",
          "Integrity",
          "Objectivity",
          "Independence of Mind"
        ],
        "answer": 0,
        "explanation": "Professional behavior requires lawful conduct, dignity, and honest marketing without exaggerated claims or disparaging remarks about competitors."
      },
      {
        "id": 3041,
        "q": "What is 'Independence of Mind'?",
        "options": [
          "The state of mind that permits expressing a conclusion without being affected by influences that compromise professional judgment, allowing integrity, objectivity, and professional skepticism",
          "Avoiding wearing formal attire during client audits",
          "Never speaking to client staff",
          "Working only on weekends"
        ],
        "answer": 0,
        "explanation": "Independence of mind is internal mental objectivity enabling unbiased judgment and skepticism."
      },
      {
        "id": 3042,
        "q": "What is 'Independence in Appearance'?",
        "options": [
          "Avoidance of facts and circumstances so significant that a reasonable and informed third party would likely conclude that integrity, objectivity, or professional skepticism has been compromised",
          "Printing audit working papers on glossy paper",
          "Having matching office desks with the client",
          "Accepting all management estimates without question"
        ],
        "answer": 0,
        "explanation": "Independence in appearance protects how a reasonable and informed third party perceives the auditor's independence."
      },
      {
        "id": 3043,
        "q": "What are the three steps of the IESBA conceptual framework for addressing threats to compliance with fundamental principles?",
        "options": [
          "Identify threats, evaluate threats, and address threats by eliminating them or reducing them to an acceptable level (using safeguards where available)",
          "Issue report, collect fee, close file",
          "Ignore threats, accept gifts, sign opinion",
          "Hire staff, count stock, file tax"
        ],
        "answer": 0,
        "explanation": "The conceptual framework guides practitioners to identify threats, evaluate their significance, and eliminate or reduce them to an acceptable level."
      },
      {
        "id": 3044,
        "q": "When a firm quotes a significantly lower fee than a predecessor auditor ('lowballing'), what threat arises and what must the firm demonstrate?",
        "options": [
          "Self-interest threat; the firm must maintain records showing appropriate staff and time are spent and comply with all assurance and quality standards",
          "Advocacy threat; the firm must act as the client's lawyer",
          "Familiarity threat; the firm must skip substantive procedures",
          "No threat or documentation needed"
        ],
        "answer": 0,
        "explanation": "Lowballing can tempt firms to cut corners; keeping proper time/staffing records and adhering to standards safeguards audit quality."
      },
      {
        "id": 3045,
        "q": "When an unlisted audited entity becomes a listed company and the audit engagement partner has already served 4 or more years, how many more years may they serve?",
        "options": [
          "At most 2 more years",
          "7 more years starting over",
          "0 years—immediate resignation required",
          "12 more years"
        ],
        "answer": 0,
        "explanation": "Where an entity becomes listed and the engagement partner has already served 4 or more years, they may continue for at most 2 additional years before rotation."
      },
      {
        "id": 3046,
        "q": "When an accountant leaves a firm or employer to take up new employment, what may they use?",
        "options": [
          "General professional experience gained in the previous position, but NOT confidential information acquired there",
          "Confidential client lists and trade secrets from the former employer",
          "Confidential pricing formulas belonging to the former client",
          "Inside information for share trading"
        ],
        "answer": 0,
        "explanation": "Accountants may carry forward general professional skills and experience, but must strictly protect confidential data from prior roles."
      },
      {
        "id": 3047,
        "q": "Which of the following is an example of a situation where disclosure of confidential information is REQUIRED BY LAW in Bangladesh?",
        "options": [
          "Reporting suspected money laundering (e.g., tax evasion) to Bangladesh Bank or reporting terrorist activities / regulatory breaches to relevant authorities",
          "Sharing client financial forecasts with a competitor",
          "Discussing client issues with family members",
          "Posting client audit results on a personal blog"
        ],
        "answer": 0,
        "explanation": "Statutory obligations under laws relating to money laundering, terrorism, anti-corruption, and regulators require disclosure."
      },
      {
        "id": 3048,
        "q": "Which of the following is a key safeguard in establishing 'Chinese Walls' (information barriers)?",
        "options": [
          "Ensuring no overlap between different teams, physical separation of teams, and controlled procedures/records when information crosses a barrier",
          "Having the same audit manager work on both conflicting sides simultaneously",
          "Leaving conflicting project files on a shared open desk",
          "Skipping records whenever information is shared across teams"
        ],
        "answer": 0,
        "explanation": "Chinese Walls prevent information transfer between conflicting teams through team segregation, physical/IT separation, and documented controls."
      },
      {
        "id": 3049,
        "q": "Scenario: A prospective client asks an audit firm to accept an assurance engagement on complex derivative financial instruments, although no partner or staff member in the firm possesses expertise in derivatives. Which fundamental principle is at risk if the firm accepts without specialist help?",
        "options": [
          "Professional Competence and Due Care",
          "Confidentiality",
          "Advocacy threat",
          "Familiarity threat"
        ],
        "answer": 0,
        "explanation": "Accepting work the firm is not competent to perform violates Professional Competence and Due Care unless qualified external experts are engaged."
      },
      {
        "id": 3050,
        "q": "Which statement best summarizes the relationship between the ICAB Code of Ethics and the IESBA International Code of Ethics?",
        "options": [
          "The ICAB Code implements the IESBA Code in Bangladesh, ensuring full compliance with international ethical principles while binding members to follow both the spirit and letter of the guidance",
          "The ICAB Code completely contradicts and overrides the IESBA Code",
          "The IESBA Code applies only to Europe, while ICAB has no ethical code",
          "Both codes apply exclusively to government tax collectors"
        ],
        "answer": 0,
        "explanation": "As an IFAC member body, ICAB implements the IESBA Code so its members and trainees uphold global ethical and public-interest standards."
      }
    ]
  },
  {
    "id": 4,
    "title": "Mock Test 4",
    "questions": [
      {
        "id": 4001,
        "q": "In an assurance engagement, what does a 'limited assurance' conclusion typically look like?",
        "options": [
          "'Based on the procedures performed and evidence obtained, nothing has come to our attention that causes us to believe that the subject matter is not prepared, in all material respects, in accordance with suitable criteria'",
          "'In our opinion, the financial statements give a true and fair view'",
          "'We guarantee that the company is free from all fraud and error'",
          "'We express no findings of any kind'"
        ],
        "answer": 0,
        "explanation": "Limited assurance engagements express a negatively worded conclusion based on limited procedures, whereas reasonable assurance expresses a positively worded opinion."
      },
      {
        "id": 4002,
        "q": "Who are the three parties in a standard assurance engagement?",
        "options": [
          "The practitioner, the responsible party, and the intended users",
          "The CEO, the CFO, and the internal auditor",
          "The bank manager, the tax officer, and the share registrar",
          "The buyer, the seller, and the shipping agent"
        ],
        "answer": 0,
        "explanation": "The three-party relationship consists of the assurance practitioner, the responsible party (responsible for subject matter), and intended users."
      },
      {
        "id": 4003,
        "q": "What does 'subject matter' refer to in an assurance engagement?",
        "options": [
          "The specific information, condition, or process being evaluated against criteria (such as historical financial performance, internal controls, or sustainability metrics)",
          "The fee invoice sent by the audit firm",
          "The statutory law book",
          "The office lease agreement"
        ],
        "answer": 0,
        "explanation": "Subject matter is what is measured or evaluated against criteria to produce an assurance conclusion."
      },
      {
        "id": 4004,
        "q": "Why is audit evidence in an assurance engagement described as 'persuasive rather than conclusive'?",
        "options": [
          "Because an auditor rarely has absolute certainty due to sampling, judgmental estimates, fraud concealment, and time/cost constraints",
          "Because auditors only guess numbers",
          "Because accounting records are never checked",
          "Because client staff write the audit report"
        ],
        "answer": 0,
        "explanation": "Auditors build a persuasive body of evidence supporting reasonable assurance rather than absolute mathematical proof."
      },
      {
        "id": 4005,
        "q": "Under the Companies Act 1994, who fixes the remuneration of an auditor appointed by the company in general meeting?",
        "options": [
          "The company in general meeting (or in the manner determined by the general meeting, such as authorizing the board)",
          "The external auditor unilaterally without member approval",
          "The company's junior cash clerk",
          "External suppliers"
        ],
        "answer": 0,
        "explanation": "Under the Companies Act 1994, general meetings determine auditor remuneration or delegate fixing it as authorized."
      },
      {
        "id": 4006,
        "q": "What is the relationship between 'materiality' and 'audit risk'?",
        "options": [
          "There is an inverse relationship: lower materiality (smaller misstatement threshold) means more evidence/lower detection risk is needed, and vice versa",
          "There is no relationship between materiality and risk",
          "Higher materiality always means the auditor must double sample sizes",
          "Materiality replaces audit risk completely"
        ],
        "answer": 0,
        "explanation": "When materiality is lower, smaller misstatements become material, requiring more thorough audit evidence."
      },
      {
        "id": 4007,
        "q": "What is 'control risk' in the audit risk model?",
        "options": [
          "The risk that a misstatement that could occur in an assertion and that could be material (individually or in aggregate) will not be prevented, or detected and corrected, on a timely basis by the entity's internal control",
          "The risk that the auditor selects the wrong sampling table",
          "The risk that interest rates rise in the economy",
          "The risk that a client's factory catches fire"
        ],
        "answer": 0,
        "explanation": "Control risk measures the effectiveness of the client's own internal controls in preventing or detecting/correcting material misstatements."
      },
      {
        "id": 4008,
        "q": "Why are 'management override of controls' and 'collusion' particularly challenging for auditors?",
        "options": [
          "Even well-designed controls can be bypassed when senior management overrides them or when employees collude to conceal fraud",
          "Management override only happens in non-profit organizations",
          "Collusion is always obvious from a single trial balance check",
          "Controls eliminate management override automatically"
        ],
        "answer": 0,
        "explanation": "Senior management can override standard procedures (e.g., manual journal entries or estimates), and collusion hides fraud across multiple people."
      },
      {
        "id": 4009,
        "q": "What should an auditor do if, during an audit, they suspect or identify fraud involving senior management?",
        "options": [
          "Re-evaluate fraud risk and its impact on evidence reliability, communicate appropriately with those charged with governance (or higher authority if governance is involved), and seek legal/professional advice as needed",
          "Ignore it because senior management is always honest",
          "Conceal it in the audit file to protect the client",
          "Immediately publish accusations on social media without legal advice"
        ],
        "answer": 0,
        "explanation": "Management fraud undermines overall reliability of representations and requires heightened skepticism, governance escalation, and legal consideration."
      },
      {
        "id": 4010,
        "q": "What is the primary purpose of 'audit planning' under ISA 300?",
        "options": [
          "To establish an overall audit strategy and audit plan so the engagement is performed effectively, efficiently, and in a timely manner focusing on high-risk areas",
          "To avoid performing substantive audit procedures",
          "To guarantee a clean audit opinion before fieldwork starts",
          "To replace the auditor's report"
        ],
        "answer": 0,
        "explanation": "Planning sets scope, timing, direction, and resource allocation based on entity understanding and risk assessment."
      },
      {
        "id": 4011,
        "q": "In a cash disbursements / cheque payment system, which control helps ensure payments are valid and properly authorized?",
        "options": [
          "Matching payment vouchers to approved invoices and GRNs, dual/authorized signatories (above set limits), and cancelling supporting documents as 'PAID'",
          "Signing blank cheques in advance for convenience",
          "Allowing one junior clerk to authorize, sign, and record payments alone",
          "Paying suppliers based on verbal phone requests"
        ],
        "answer": 0,
        "explanation": "Supported payment packages, proper authorization, and document cancellation prevent invalid or duplicate payments."
      },
      {
        "id": 4012,
        "q": "What is a 'completeness check' (or field presence check) in an accounting application?",
        "options": [
          "A programmed edit check ensuring mandatory fields (such as customer ID, date, or amount) are populated before a transaction is accepted",
          "Counting physical pallets in a warehouse",
          "Reconciling petty cash",
          "Reviewing board minutes"
        ],
        "answer": 0,
        "explanation": "Mandatory/completeness checks prevent incomplete transaction records from entering the ledger."
      },
      {
        "id": 4013,
        "q": "In a sales and receivables cycle, why should customer statements be sent regularly to customers independently of cash collection/ledger posting?",
        "options": [
          "Customers may report disputed invoices, uncredited payments, or unauthorized charges, helping detect errors or fraud early",
          "To replace external bank confirmations",
          "To avoid preparing an aged receivables schedule",
          "To increase sales return rates"
        ],
        "answer": 0,
        "explanation": "Regular independent customer statements invite external verification of balances and highlight unrecorded receipts or billing errors."
      },
      {
        "id": 4014,
        "q": "Which of the following is a 'physical control' over assets?",
        "options": [
          "Locked safes and vaults for cash/negotiable instruments, restricted warehouse access, and asset tagging/serial numbers",
          "Reviewing a profit and loss variance report",
          "Checking a password complexity policy",
          "Preparing a tax computation"
        ],
        "answer": 0,
        "explanation": "Physical controls directly protect tangible assets and sensitive documents from theft, damage, or unauthorized access."
      },
      {
        "id": 4015,
        "q": "What control helps ensure that inventory quantities recorded on the perpetual inventory system match actual physical stock?",
        "options": [
          "Regular physical inventory counts (full year-end or cycle counts), investigation of discrepancies, and approved adjustments to inventory records",
          "Never counting physical stock",
          "Adjusting stock balances without investigating variances",
          "Allowing warehouse staff to alter stock balances freely"
        ],
        "answer": 0,
        "explanation": "Reconciling physical counts with book records and investigating variances keeps inventory records accurate."
      },
      {
        "id": 4016,
        "q": "In an IT environment, what is 'disaster recovery and backup' designed to achieve?",
        "options": [
          "Ensuring critical accounting data and systems can be restored reliably after hardware failure, cyber incident, or physical disruption",
          "Preventing customers from paying invoices",
          "Eliminating the need for internal controls",
          "Calculating depreciation expense"
        ],
        "answer": 0,
        "explanation": "Regular backups and tested recovery procedures protect business continuity and accounting record integrity."
      },
      {
        "id": 4017,
        "q": "What is the purpose of 'authorizing' transactions (such as credit sales, purchase orders, or payroll changes)?",
        "options": [
          "Ensuring only valid transactions aligned with management policies and limits are initiated or approved",
          "Ensuring every transaction is recorded twice",
          "Eliminating audit trails",
          "Bypassing segregation of duties"
        ],
        "answer": 0,
        "explanation": "Authorization confirms validity and policy compliance before resources are committed or assets transferred."
      },
      {
        "id": 4018,
        "q": "When documenting information flows in a system, what is an advantage of a 'flowchart' over a long narrative?",
        "options": [
          "Provides a clear visual diagram of document flows, processing steps, and control points, making bottlenecks or missing controls easy to spot",
          "Requires zero time to prepare",
          "Replaces all substantive testing",
          "Guarantees that controls operate effectively"
        ],
        "answer": 0,
        "explanation": "Flowcharts visually map data/document paths and control points clearly, especially for complex or multi-step cycles."
      },
      {
        "id": 4019,
        "q": "In a payroll system, why should payroll bank transfers or pay packets be compared to authorized employee master lists?",
        "options": [
          "To verify that payments are made only to genuine, active employees at authorized rates without unauthorized additions or inflated amounts",
          "To determine factory floor space",
          "To calculate inventory net realizable value",
          "To set customer credit limits"
        ],
        "answer": 0,
        "explanation": "Comparing payroll disbursement totals against authorized employee records prevents fictitious or inflated payroll payouts."
      },
      {
        "id": 4020,
        "q": "What is a 'performance review' (management review control)?",
        "options": [
          "Management comparing actual financial or operational results against budgets, forecasts, prior periods, or KPIs and investigating significant variances",
          "Counting petty cash coins",
          "Issuing a sales order",
          "Typing an invoice number"
        ],
        "answer": 0,
        "explanation": "Budget-to-actual and trend reviews by management can detect misstatements or operational anomalies if investigated thoroughly."
      },
      {
        "id": 4021,
        "q": "If a control operates manually and is performed by a single person who also has custody of cash, what control principle is violated?",
        "options": [
          "Segregation of duties",
          "Going concern",
          "Materiality",
          "Cut-off"
        ],
        "answer": 0,
        "explanation": "Combining custody of cash with recordkeeping or authorization violates segregation of duties and increases fraud risk."
      },
      {
        "id": 4022,
        "q": "Why must an auditor test controls over the full period of intended reliance (or roll forward from an interim date)?",
        "options": [
          "Because controls might operate effectively in March but break down in October or December—so evidence must cover the period of reliance",
          "Because controls never change during the year",
          "Interim testing automatically proves year-end control effectiveness",
          "Period of reliance is irrelevant to audit evidence"
        ],
        "answer": 0,
        "explanation": "Controls can fail or change mid-year; auditors must obtain evidence covering the reliance period and evaluate any interim-to-year-end changes."
      },
      {
        "id": 4023,
        "q": "Which of the following is a 'preventive control' versus a 'detective control'?",
        "options": [
          "Preventive controls stop errors/fraud before they occur (e.g., credit limit block, authorization); detective controls identify errors/fraud after they occur (e.g., bank reconciliation, variance review)",
          "Preventive controls happen after year-end; detective controls happen before incorporation",
          "Detective controls prevent all errors automatically; preventive controls only find past errors",
          "There is no difference between preventive and detective controls"
        ],
        "answer": 0,
        "explanation": "Preventive controls aim to stop misstatements upfront, while detective controls uncover misstatements that got through."
      },
      {
        "id": 4024,
        "q": "When testing 'completeness' of trade payables / accruals at year-end, which source is particularly valuable?",
        "options": [
          "Post-year-end bank statements/cash payments and unmatched goods received notes (GRNs) / supplier statements",
          "Only the list of top 5 cash customers",
          "Fixed asset depreciation expense for buildings",
          "Share capital authorized limit"
        ],
        "answer": 0,
        "explanation": "Payments made after year-end for pre-year-end goods/services and unmatched GRNs reveal liabilities that should have been accrued."
      },
      {
        "id": 4025,
        "q": "When sending a trade receivable confirmation, why might an auditor select not only large balances, but also nil/zero balances, credit balances, or overdue disputed balances?",
        "options": [
          "Because large balances might be understated or misallocated to credits/zero balances, and disputed items may indicate uncollectibility or cut-off issues",
          "Because zero balances always contain material fraud",
          "To avoid testing any large customer",
          "Because credit balances are always revenue"
        ],
        "answer": 0,
        "explanation": "Selecting across large, zero, credit, and overdue/disputed accounts helps uncover overstatement, understatement, misallocations, and collectibility issues."
      },
      {
        "id": 4026,
        "q": "What is the most reliable substantive procedure for verifying that a year-end trade receivable balance is subsequently settled in cash?",
        "options": [
          "Inspecting post-year-end bank statements/cash receipts records showing payment clearing the bank for that specific invoice/balance",
          "Asking the sales clerk if the customer promised to pay",
          "Reading the company's promotional brochure",
          "Counting inventory in the warehouse"
        ],
        "answer": 0,
        "explanation": "Actual cash receipts clearing the bank after year-end provide strong evidence of existence and recoverability of the receivable at year-end."
      },
      {
        "id": 4027,
        "q": "In auditing property, plant, and equipment (PPE), what does recalculating depreciation expense test?",
        "options": [
          "Valuation and allocation / accuracy of depreciation charges and accumulated depreciation based on cost/carrying amount, useful life, residual value, and method under IAS 16",
          "Physical existence of land",
          "Completeness of customer sales orders",
          "Bank overdraft interest rates"
        ],
        "answer": 0,
        "explanation": "Recalculating depreciation checks mathematical accuracy and consistency with IAS 16 useful lives, residual values, and methods."
      },
      {
        "id": 4028,
        "q": "Why should an auditor inspect repair and maintenance expense accounts during a PPE audit?",
        "options": [
          "To check whether capital expenditure (e.g., major asset enhancements/replacements) was wrongly expensed as repairs, or whether routine repairs were improperly capitalized",
          "To verify employee attendance",
          "To count petty cash",
          "To confirm share capital"
        ],
        "answer": 0,
        "explanation": "Misclassifying capital vs. revenue expenditure distorts both non-current assets and profit/expense."
      },
      {
        "id": 4029,
        "q": "During a physical inventory count, how does an auditor test 'cut-off' of goods movements?",
        "options": [
          "Recording the last Goods Received Note (GRN) number and last Dispatch Note (GDN) number before the count and the first numbers after the count, then tracing them to accounting records",
          "Weighing every pallet with a bathroom scale",
          "Re-performing payroll calculations",
          "Confirming bank balances"
        ],
        "answer": 0,
        "explanation": "Capturing boundary GRN and GDN numbers at count time ensures goods received or dispatched around year-end are recorded in the right period."
      },
      {
        "id": 4030,
        "q": "What is 'substantive analytical procedure' expectation setting?",
        "options": [
          "Developing an independent expectation of a balance or ratio using historical data, industry benchmarks, budgets, or operational metrics (e.g., payroll = headcount × average salary) and comparing it to the recorded figure",
          "Guessing a number without calculations",
          "Accepting whatever number appears on the trial balance",
          "Asking management what number they prefer"
        ],
        "answer": 0,
        "explanation": "Effective substantive analytics rely on a plausible, predictable relationship and an independent expectation precise enough to spot material misstatements."
      },
      {
        "id": 4031,
        "q": "When should an auditor investigate differences identified during analytical procedures?",
        "options": [
          "Whenever differences exceed the acceptable threshold/expectation without adequate explanation—by inquiring of management and corroborating explanations with independent evidence",
          "Never—differences are always ignored",
          "Only when the difference is zero",
          "Only after the AGM ends"
        ],
        "answer": 0,
        "explanation": "Unexplained or significant variances require investigation and corroborating audit evidence rather than accepting unsupported management stories."
      },
      {
        "id": 4032,
        "q": "What is 'non-statistical sampling'?",
        "options": [
          "A sampling approach where the auditor uses professional judgment to determine sample size and select items, without applying mathematical probability theory to measure sampling risk",
          "A sampling approach using strict probability formulas",
          "Testing 100% of every population",
          "A sampling approach prohibited by ISAs"
        ],
        "answer": 0,
        "explanation": "Both statistical and non-statistical sampling are permitted under ISA 530; non-statistical sampling relies on professional judgment to design, execute, and evaluate the sample."
      },
      {
        "id": 4033,
        "q": "In sampling, what happens to required sample size if the auditor's tolerable misstatement (tolerable error) decreases?",
        "options": [
          "Sample size increases (because a smaller acceptable misstatement margin requires greater precision/assurance from the sample)",
          "Sample size decreases to zero",
          "Sample size stays unchanged in all circumstances",
          "Tolerable misstatement does not affect sample size"
        ],
        "answer": 0,
        "explanation": "Lower tolerable misstatement means less room for error in the population, so a larger sample is needed."
      },
      {
        "id": 4034,
        "q": "What is 'written representation' reliability when it contradicts other audit evidence?",
        "options": [
          "If a written representation is inconsistent with other audit evidence, the auditor investigates the inconsistency and reconsiders the reliability of other representations",
          "Written representations automatically override physical or third-party evidence",
          "The auditor ignores the contradictory evidence",
          "The auditor destroys the contradictory evidence"
        ],
        "answer": 0,
        "explanation": "Contradictions between management representations and other evidence raise doubts about reliability and require further investigation."
      },
      {
        "id": 4035,
        "q": "What is a 'non-adjusting subsequent event' under IAS 10?",
        "options": [
          "An event indicative of conditions that arose AFTER the reporting period (e.g., major fire or acquisition after year-end) that does not require adjusting year-end figures, though material events require disclosure",
          "A mathematical addition error in the year-end trial balance",
          "A year-end inventory count sheet error",
          "An unrecorded invoice for goods received before year-end"
        ],
        "answer": 0,
        "explanation": "Non-adjusting events reflect post-year-end developments and are disclosed in the notes if material to users' decisions rather than adjusting balance sheet amounts."
      },
      {
        "id": 4036,
        "q": "What should an auditor do if they become aware of facts after the date of the auditor's report (before financial statements are issued) that, had they been known earlier, might have caused the auditor to amend the report?",
        "options": [
          "Discuss the matter with management and those charged with governance, determine whether the financial statements need amendment, and perform necessary audit procedures on the amendment",
          "Do nothing because the report was already signed",
          "Alter the signed audit report secretly without telling anyone",
          "Burn the working papers"
        ],
        "answer": 0,
        "explanation": "Under ISA 560, auditors address facts discovered after the report date before issuance by engaging with governance/management and auditing any required amendments."
      },
      {
        "id": 4037,
        "q": "Why is retaining complete, clear 'audit documentation' crucial for an audit firm?",
        "options": [
          "It supports the audit opinion, demonstrates compliance with ISAs, assists team supervision/review and quality inspections, and helps defend the firm if claims arise",
          "It allows auditors to skip testing in future years without checking anything",
          "It is used to advertise to competitors",
          "It replaces the financial statements"
        ],
        "answer": 0,
        "explanation": "Proper audit documentation is essential for quality control, review, regulatory inspection, and professional protection."
      },
      {
        "id": 4038,
        "q": "Which threat arises when an auditor promotes a client's position or interests to the point that objectivity is compromised (for example, acting as legal advocate in a dispute or promoting client shares)?",
        "options": [
          "Advocacy threat",
          "Familiarity threat",
          "Self-interest threat",
          "Management threat"
        ],
        "answer": 0,
        "explanation": "Advocacy threats occur when the accountant champions or advocates for a client's position, impairing neutral objectivity."
      },
      {
        "id": 4039,
        "q": "What does the IESBA/ICAB Code state about an audit firm acting as a solicitor/legal advocate for an audited entity in a dispute or litigation material to the financial statements?",
        "options": [
          "It is forbidden because it creates an advocacy threat that compromises independence",
          "It is encouraged for all listed audit clients",
          "It creates no threat if the legal fee is high",
          "It is allowed if the audit junior argues the case in court"
        ],
        "answer": 0,
        "explanation": "Formally representing an audit client in material litigation or disputes creates an advocacy threat incompatible with independence."
      },
      {
        "id": 4040,
        "q": "What is the difference between a 'direct financial interest' and an 'indirect financial interest'?",
        "options": [
          "Direct is owned and controlled directly (or via a controlled intermediary/discretionary account); indirect is held beneficially through an intermediary without control or investment influence",
          "Direct is held only by banks; indirect is held only by charities",
          "Direct is always permitted for audit partners; indirect is always banned",
          "There is no difference between them"
        ],
        "answer": 0,
        "explanation": "Control or ability to influence investment decisions through an intermediary distinguishes direct from indirect financial interests."
      },
      {
        "id": 4041,
        "q": "Who is prohibited from owning a direct financial interest or an indirect material financial interest in an assurance client?",
        "options": [
          "The assurance firm, partners, persons able to influence the engagement/assurance team, and their immediate family members",
          "Only the client's external customers",
          "Only government regulators",
          "Only retired staff with no link to the firm"
        ],
        "answer": 0,
        "explanation": "Firms, partners, assurance team members/influencers, and their immediate family members cannot hold direct or material indirect financial interests in clients."
      },
      {
        "id": 4042,
        "q": "What is the rule regarding 'loan staff assignments' (temporarily lending a firm partner or employee to work as if an employee of a client)?",
        "options": [
          "Prohibited — firms shall not provide loan staff assignments to an assurance client",
          "Permitted for up to 3 years on listed audits",
          "Permitted if the staff member works part-time",
          "Required for all small companies"
        ],
        "answer": 0,
        "explanation": "Loan staff assignments are prohibited because temporarily acting as a client employee creates severe management and self-review threats."
      },
      {
        "id": 4043,
        "q": "Under BSEC notification dated 03 June 2018, what is the rule on audit firms providing internal audit or special audit services to listed companies in Bangladesh?",
        "options": [
          "Prohibited — audit firms shall not be involved in internal audit services or special audit services for listed clients",
          "Permitted if approved by the finance director",
          "Permitted if performed by a different department in the same firm",
          "Mandatory for all listed companies"
        ],
        "answer": 0,
        "explanation": "BSEC's June 3, 2018 notification strictly forbids audit firms from providing internal audit or special audit services to listed companies."
      },
      {
        "id": 4044,
        "q": "What is 'informed management' when evaluating whether a management threat exists on a non-audit service?",
        "options": [
          "A designated client manager capable of making independent management judgments and decisions based on information provided by the auditor",
          "A manager who follows the auditor's instructions blindly",
          "A junior clerk with no authority",
          "An external consultant hired by the auditor"
        ],
        "answer": 0,
        "explanation": "Informed management is essential for the client to exercise real independent judgment on advice rather than letting the auditor make management decisions."
      },
      {
        "id": 4045,
        "q": "When an accountant in business (e.g., a corporate accountant) faces severe pressure to act contrary to law or misstate financial statements, what is the proper escalation sequence?",
        "options": [
          "Resolve internally (via dispute resolution or audit committee), obtain advice from ICAB, seek legal advice, and resign as a last resort",
          "Falsify the records to keep the job",
          "Immediately resign without any internal discussion or advice",
          "Post confidential company numbers online"
        ],
        "answer": 0,
        "explanation": "Accountants in business are bound by the same fundamental principles and should escalate internally, consult ICAB and legal counsel, and resign only as a last resort if unresolved."
      },
      {
        "id": 4046,
        "q": "When is an auditor not considered to have breached confidentiality despite reporting suspected money laundering or terrorist financing?",
        "options": [
          "When disclosure is required by law (e.g., reporting suspected money laundering/tax evasion to Bangladesh Bank or terrorist activities to police), normally reflected in the engagement letter",
          "When telling a friend at a party",
          "When trading shares using client secrets",
          "When posting client details on social media"
        ],
        "answer": 0,
        "explanation": "Statutory reporting obligations override confidentiality, and auditors must also avoid unlawfully tipping off the client."
      },
      {
        "id": 4047,
        "q": "Which safeguard is appropriate when managing a conflict of interest between two clients?",
        "options": [
          "Full disclosure of conflict/safeguards and informed consent, confidentiality agreements, Chinese Walls (no team overlap, physical separation, controlled records), independent senior review, or ceasing to act",
          "Hiding the conflict from both clients",
          "Using the exact same team on both opposing sides without controls",
          "Ignoring the conflict if both clients are profitable"
        ],
        "answer": 0,
        "explanation": "Conflicts require transparent consent (where permissible), strong safeguards like Chinese Walls, independent review, or withdrawal if unmanageable."
      },
      {
        "id": 4048,
        "q": "If information ever has to be disseminated beyond a Chinese Wall barrier (for instance, to an independent senior compliance reviewer), what must be done?",
        "options": [
          "Follow careful formal clearance procedures and maintain proper written records whenever information crosses the barrier",
          "Whisper the information in the hallway without writing anything down",
          "Email the information to the entire accounting firm",
          "Dismantle the Chinese Wall permanently"
        ],
        "answer": 0,
        "explanation": "Any cross-barrier dissemination must be strictly controlled, authorized, and documented."
      },
      {
        "id": 4049,
        "q": "Scenario: A client sues its external audit firm for alleged professional negligence in failing to detect a material inventory fraud. In court, the audit firm submits confidential client emails and working papers to prove that management actively lied to and obstructed the auditors. Has the audit firm breached Confidentiality?",
        "options": [
          "No, an accountant has a recognized professional right/duty to disclose confidential information when necessary to defend themselves in a negligence claim",
          "Yes, auditors must lose negligence lawsuits rather than show working papers in court",
          "Yes, unless the suing client gives permission to use the evidence against themselves",
          "Only if the lawsuit takes place in Dhaka"
        ],
        "answer": 0,
        "explanation": "Self-defense in legal or disciplinary proceedings is an explicit exception to confidentiality."
      },
      {
        "id": 4050,
        "q": "Which statement best summarizes the core principles of Chapter 16 ('Confidentiality and Conflicts of Interest')?",
        "options": [
          "Accountants must protect client information against both deliberate misuse and accidental disclosure (internally and externally), disclose only when authorized or legally/professionally required, and manage conflicts of interest transparently using informed consent and Chinese Walls",
          "Accountants may freely share client data with family and competitors as long as no written contract forbids it",
          "Confidentiality prohibits accountants from ever reporting money laundering or terrorism to law enforcement",
          "Accounting firms are strictly prohibited from ever auditing two companies in the same industry"
        ],
        "answer": 0,
        "explanation": "Chapter 16 balances strict protection of client secrecy and conflict management with lawful disclosure duties in the public interest."
      }
    ]
  },
  {
    "id": 5,
    "title": "Mock Test 5",
    "questions": [
      {
        "id": 5001,
        "q": "Which characteristic distinguishes a 'reasonable assurance engagement' from a 'limited assurance engagement'?",
        "options": [
          "Level of assurance obtained (high/acceptably low engagement risk vs. moderate/limited reduction of risk), scope of procedures, and positive vs. negative conclusion wording",
          "Whether the client is a limited company",
          "Whether the auditor charges a fixed fee",
          "Whether the report is printed in black ink"
        ],
        "answer": 0,
        "explanation": "Reasonable assurance entails thorough procedures and a positive opinion; limited assurance entails more limited procedures and a negative conclusion."
      },
      {
        "id": 5002,
        "q": "In a statutory audit, why do shareholders rely on the independent auditor's report?",
        "options": [
          "Because directors prepare financial statements and may face incentives or bias, so independent verification enhances reliability and credibility for users",
          "Because directors are never allowed to sign financial statements",
          "Because the auditor guarantees the company will never suffer losses",
          "Because statutory audits replace corporate governance"
        ],
        "answer": 0,
        "explanation": "Independent assurance bridges the agency gap between management/directors and external stakeholders."
      },
      {
        "id": 5003,
        "q": "What does 'suitable criteria' mean in an assurance engagement?",
        "options": [
          "Objective, relevant, complete, reliable, neutral, and understandable standards/benchmarks (such as IFRS or statutory rules) used to evaluate subject matter",
          "Personal opinions of the client's sales staff",
          "Secret rules known only to one clerk",
          "Unverified guesses"
        ],
        "answer": 0,
        "explanation": "Criteria must be suitable so that evaluations are consistent, verifiable, and meaningful to intended users."
      },
      {
        "id": 5004,
        "q": "Under the Companies Act 1994, who appoints the auditor at an Annual General Meeting?",
        "options": [
          "The company's members/shareholders in general meeting, to hold office from the conclusion of that AGM until the conclusion of the next AGM",
          "The company's internal audit clerk",
          "The external bank holding the company's overdraft",
          "A random customer"
        ],
        "answer": 0,
        "explanation": "Shareholders in AGM appoint statutory auditors under the Companies Act 1994 for the term running until the next AGM."
      },
      {
        "id": 5005,
        "q": "How does 'inherent risk' differ from 'control risk'?",
        "options": [
          "Inherent risk is susceptibility of an assertion to material misstatement before controls; control risk is the risk that internal controls fail to prevent or detect/correct a material misstatement timely",
          "Inherent risk is set by the auditor; control risk is set by the bank",
          "Control risk exists before controls; inherent risk exists after controls",
          "They are identical terms"
        ],
        "answer": 0,
        "explanation": "Inherent risk reflects natural vulnerability of balances/transactions/estimates; control risk reflects whether the entity's controls fail to stop or catch misstatements."
      },
      {
        "id": 5006,
        "q": "What happens to planned 'detection risk' if the auditor assesses risks of material misstatement as low?",
        "options": [
          "Planned detection risk can be higher (allowing less extensive substantive procedures than when risk of material misstatement is high)",
          "Planned detection risk must be set to zero regardless of risk",
          "The auditor must double all sample sizes automatically",
          "The auditor must refuse to issue a report"
        ],
        "answer": 0,
        "explanation": "When risk of material misstatement is lower, acceptable detection risk is higher, though substantive procedures are still required for material items."
      },
      {
        "id": 5007,
        "q": "What is the 'expectation gap' and how can the profession help narrow it?",
        "options": [
          "It is the gap between public expectations and actual audit scope/assurance; education, clear communication of auditor responsibilities, and clear wording of audit reports help narrow it",
          "It is the gap between two bank balances; auditors narrow it by writing off cash",
          "It is caused by auditing too carefully",
          "It cannot be narrowed at all"
        ],
        "answer": 0,
        "explanation": "Educating stakeholders and clearly defining audit scope and limitations in engagement letters and audit reports helps reduce misunderstanding."
      },
      {
        "id": 5008,
        "q": "What is 'professional skepticism' in an assurance engagement?",
        "options": [
          "Maintaining a questioning mind, alertness to conditions that may indicate misstatement from fraud or error, and a critical assessment of audit evidence",
          "Assuming every client manager is committing fraud",
          "Accepting uncorroborated oral claims as conclusive proof",
          "Skipping evidence evaluation when busy"
        ],
        "answer": 0,
        "explanation": "Professional skepticism is essential throughout planning, evidence gathering, and evaluation to avoid overlooking misstatements or bias."
      },
      {
        "id": 5009,
        "q": "Why is an 'engagement letter' important before starting an assurance engagement?",
        "options": [
          "It establishes clear written terms—scope, reporting, responsibilities of management and practitioner, fee basis, and limitations—reducing risk of disputes",
          "It guarantees zero errors in financial statements",
          "It replaces statutory audit appointments",
          "It allows the auditor to manage the client's business"
        ],
        "answer": 0,
        "explanation": "A written engagement letter clarifies mutual expectations and formalizes engagement terms before work begins."
      },
      {
        "id": 5010,
        "q": "Which of the following is a 'reasonable assurance' engagement vs. 'limited assurance' engagement?",
        "options": [
          "A statutory financial statement audit is a reasonable assurance engagement; a review of interim financial statements is typically a limited assurance engagement",
          "A review of interim financial statements is always reasonable assurance; a statutory audit is limited assurance",
          "Both provide identical levels of assurance",
          "Neither requires a written report"
        ],
        "answer": 0,
        "explanation": "Statutory audits provide reasonable assurance, whereas review engagements typically provide limited assurance."
      },
      {
        "id": 5011,
        "q": "Which of the following is one of the five components of internal control?",
        "options": [
          "Control activities",
          "Share price volatility",
          "Competitor pricing strategy",
          "Income tax rate legislation"
        ],
        "answer": 0,
        "explanation": "Control activities—such as authorizations, performance reviews, information processing controls, and physical controls—are a core component of internal control."
      },
      {
        "id": 5012,
        "q": "In a purchases cycle, why should purchase orders be authorized before being sent to suppliers?",
        "options": [
          "To ensure goods/services ordered are needed, properly budgeted/authorized, and ordered from approved suppliers at agreed terms",
          "To delay delivery of raw materials",
          "To avoid checking goods when they arrive",
          "To post sales revenue early"
        ],
        "answer": 0,
        "explanation": "Pre-approval of purchase orders prevents unauthorized commitments and wasteful or fraudulent purchasing."
      },
      {
        "id": 5013,
        "q": "Which IT control prevents unauthorized users from accessing sensitive accounting files or programs?",
        "options": [
          "Logical access controls (such as unique user IDs, strong passwords/MFA, role-based access, and timely revocation when staff leave)",
          "Printing extra paper copies of ledgers",
          "Leaving computers unlocked overnight",
          "Sharing passwords among all staff"
        ],
        "answer": 0,
        "explanation": "Logical access controls restrict system entry and functions to authorized personnel according to job duties."
      },
      {
        "id": 5014,
        "q": "What is a 'existence check' or 'validity check' in an IT application?",
        "options": [
          "A programmed check verifying that an entered code (such as a customer account number or product code) matches a valid existing record in the master file",
          "Counting physical assets in a showroom",
          "Signing a bank cheque",
          "Reviewing a board minute"
        ],
        "answer": 0,
        "explanation": "Validity/existence checks ensure transactions reference real, authorized master records rather than non-existent codes."
      },
      {
        "id": 5015,
        "q": "In a cash receipts cycle, why is segregating cash handling from updating customer receivable ledgers important?",
        "options": [
          "If the same person collects cash and posts to customer ledgers, they could steal cash and conceal the theft by issuing a credit or misposting another customer's payment ('lapping')",
          "It prevents customers from paying by bank transfer",
          "It eliminates the need to issue receipts",
          "It speeds up bad debt write-offs"
        ],
        "answer": 0,
        "explanation": "Separating cash custody from receivable ledger maintenance helps prevent cash skimming and lapping schemes."
      },
      {
        "id": 5016,
        "q": "What is a 'walk-through' test used to verify?",
        "options": [
          "That the auditor's understanding of transaction flows and control design is accurate by tracing a few transactions through the system from start to finish",
          "That all 100% of transactions in the year are error-free",
          "That external third parties confirm balances",
          "That fixed assets are revalued annually"
        ],
        "answer": 0,
        "explanation": "Walk-throughs confirm design and understanding of information flows, though they do not by themselves prove operating effectiveness over the whole year."
      },
      {
        "id": 5017,
        "q": "What is a 'management override' of internal control?",
        "options": [
          "Management bypassing or overriding established controls (for example, recording fictitious journal entries or manipulating estimates) to achieve desired financial results or conceal fraud",
          "Management attending a training seminar",
          "Management approving an annual budget",
          "Management hiring an external auditor"
        ],
        "answer": 0,
        "explanation": "Management override is a pervasive fraud risk because controls designed for routine staff can sometimes be set aside by senior management."
      },
      {
        "id": 5018,
        "q": "What control helps ensure that all goods dispatched to customers are invoiced accurately?",
        "options": [
          "Matching/reconciling sequential dispatch notes (GDNs) to sales invoices and authorized price lists, investigating unbilled dispatches",
          "Dispatching goods without recording a dispatch note",
          "Allowing warehouse staff to set invoice prices",
          "Ignoring customer complaints about overbilling"
        ],
        "answer": 0,
        "explanation": "Matching dispatch notes to invoices ensures completeness and accuracy of billed revenue."
      },
      {
        "id": 5019,
        "q": "What should an auditor do when internal controls are weak or ineffective?",
        "options": [
          "Place little or no reliance on controls, increase substantive testing, and communicate significant deficiencies to those charged with governance",
          "Rely heavily on the weak controls anyway",
          "Stop auditing and sign a clean report",
          "Take over management's daily operations"
        ],
        "answer": 0,
        "explanation": "Weak controls mean higher control risk, requiring more extensive substantive audit procedures and governance reporting."
      },
      {
        "id": 5020,
        "q": "Why is 'monitoring of controls' necessary even when good controls are designed?",
        "options": [
          "Controls can degrade, be bypassed, or become outdated as business operations or personnel change over time unless monitored",
          "Monitoring replaces all accounting records",
          "Monitoring guarantees zero misstatements",
          "Monitoring is only for government ministries"
        ],
        "answer": 0,
        "explanation": "Ongoing or periodic monitoring keeps controls functioning effectively as conditions evolve."
      },
      {
        "id": 5021,
        "q": "In a payroll cycle, what control helps prevent duplicate or unauthorized salary payments?",
        "options": [
          "Independent review/sign-off of the payroll register against authorized HR master data and bank payment files before releasing funds",
          "Paying employees twice when a clerk forgets",
          "Leaving payroll files open to all staff",
          "Skipping bank transfer reconciliations"
        ],
        "answer": 0,
        "explanation": "Independent verification of payroll registers and payment files prevents unauthorized or duplicate salary disbursements."
      },
      {
        "id": 5022,
        "q": "Which control helps protect data integrity when migrating or updating accounting software?",
        "options": [
          "Testing in a non-production environment, reconciling pre- and post-migration balances/records, and maintaining backups and audit trails",
          "Deleting old records before checking new balances",
          "Skipping user acceptance testing",
          "Allowing unverified users full admin rights"
        ],
        "answer": 0,
        "explanation": "Pre-migration testing, data reconciliation, and backups prevent data loss or corruption during system changes."
      },
      {
        "id": 5023,
        "q": "What is the purpose of a 'report to management' (letter of weakness) at the end of an audit?",
        "options": [
          "To communicate significant internal control deficiencies and practical recommendations to management and those charged with governance",
          "To publish confidential trade secrets to the general public",
          "To replace the statutory auditor's report on financial statements",
          "To serve as a tax assessment notice"
        ],
        "answer": 0,
        "explanation": "It informs governance/management of control weaknesses observed and helps strengthen future internal controls."
      },
      {
        "id": 5024,
        "q": "Under ISA 500, which source of audit evidence is generally MORE reliable?",
        "options": [
          "Information obtained directly by the auditor (such as physical inspection or observation) or from independent external sources, rather than indirect or purely internal information",
          "Unverified oral remarks from an interested employee",
          "Torn or altered photocopies",
          "Assumptions with no supporting data"
        ],
        "answer": 0,
        "explanation": "Direct auditor observation/inspection and independent third-party evidence generally carry higher reliability than indirect or internal-only sources."
      },
      {
        "id": 5025,
        "q": "What does 'sufficiency' of audit evidence measure?",
        "options": [
          "The quantity of audit evidence required—affected by the auditor's assessment of risks of material misstatement and the quality of such evidence",
          "The font size used in audit working papers",
          "The number of hours spent in meetings",
          "The audit fee paid by the client"
        ],
        "answer": 0,
        "explanation": "Sufficiency is the measure of quantity; higher-quality evidence may require less quantity, while higher risk requires more evidence."
      },
      {
        "id": 5026,
        "q": "What does 'appropriateness' of audit evidence measure?",
        "options": [
          "The quality of audit evidence—its relevance to the assertion being tested and its reliability",
          "The total monetary value of the client's assets",
          "The number of staff on the audit team",
          "The date of the AGM"
        ],
        "answer": 0,
        "explanation": "Appropriateness refers to relevance (logical connection to the assertion) and reliability (trustworthiness under the circumstances)."
      },
      {
        "id": 5027,
        "q": "When auditing trade payables, which assertion is most commonly at risk of understatement?",
        "options": [
          "Completeness (unrecorded liabilities or understated accruals at year-end)",
          "Physical existence of warehouse shelves",
          "Share capital par value",
          "Director birth dates"
        ],
        "answer": 0,
        "explanation": "Management may have incentives to understate liabilities/expenses to boost profit, making completeness of payables and accruals a key focus."
      },
      {
        "id": 5028,
        "q": "Which procedure helps verify whether a recorded trade payable at year-end is valid and owed by the entity?",
        "options": [
          "Inspecting supplier invoices, goods received notes (GRNs), purchase orders, and post-year-end payments/supplier statements",
          "Counting petty cash coins",
          "Inspecting customer delivery vans",
          "Reviewing marketing slogans"
        ],
        "answer": 0,
        "explanation": "Matching recorded payables to GRNs, POs, invoices, and subsequent payments verifies occurrence/existence and accuracy."
      },
      {
        "id": 5029,
        "q": "When auditing inventory, what must the auditor verify regarding 'lower of cost and net realizable value' under IAS 2?",
        "options": [
          "That inventory items are stated at the lower of cost (including appropriate purchase/conversion costs) and NRV (estimated selling price less costs to complete and sell)",
          "That inventory is always stated at maximum retail price regardless of damage or obsolescence",
          "That obsolete stock is valued at original list price",
          "That freight-in costs are excluded from cost"
        ],
        "answer": 0,
        "explanation": "IAS 2 requires measuring inventories at the lower of cost and NRV, writing down impaired, slow-moving, or obsolete items."
      },
      {
        "id": 5030,
        "q": "What is 'analytical procedure' trend analysis?",
        "options": [
          "Comparing financial or operational figures across multiple periods (e.g., monthly gross profit margin or current vs. prior year expenses) to identify unusual trends or anomalies",
          "Physically counting cash notes",
          "Reading a bank confirmation letter",
          "Recalculating a single invoice total"
        ],
        "answer": 0,
        "explanation": "Trend analysis tracks changes over time to spot unexpected shifts, seasonal anomalies, or potential misstatements."
      },
      {
        "id": 5031,
        "q": "What is 'sampling risk' in an audit?",
        "options": [
          "The risk that the auditor's conclusion based on a sample may be different from the conclusion that would be reached if the entire population were subjected to the same audit procedure",
          "The risk that a client's computer crashes",
          "The risk that tax rates increase",
          "The risk of losing a client's phone number"
        ],
        "answer": 0,
        "explanation": "Sampling risk exists whenever less than 100% of a population is tested."
      },
      {
        "id": 5032,
        "q": "Which of the following is 'non-sampling risk'?",
        "options": [
          "Human error in applying procedures, misinterpreting evidence, or selecting an audit procedure inappropriate to the objective",
          "Using a random sample instead of testing 100% of items",
          "Stratifying high-value invoices",
          "Applying monetary unit sampling"
        ],
        "answer": 0,
        "explanation": "Non-sampling risk covers all reasons for an erroneous conclusion other than sample size/selection from the population."
      },
      {
        "id": 5033,
        "q": "Under ISA 580, can written representations from management be the ONLY audit evidence for a significant financial statement matter?",
        "options": [
          "No — written representations provide necessary corroboration/acknowledgment but are not sufficient appropriate audit evidence on their own for significant matters",
          "Yes — a signed letter from the CEO replaces all other audit procedures",
          "Yes — if the letter is on company letterhead",
          "Yes — for all cash and inventory balances"
        ],
        "answer": 0,
        "explanation": "Written representations support other evidence but cannot substitute for obtaining sufficient appropriate evidence on matters where other evidence can/should be obtained."
      },
      {
        "id": 5034,
        "q": "When evaluating 'going concern' under ISA 570, what if management's plans to mitigate going concern doubts are evaluated?",
        "options": [
          "The auditor evaluates whether the plans are feasible in the circumstances and whether the outcome of those plans is likely to improve the situation",
          "The auditor accepts optimistic plans automatically without checking feasibility",
          "Going concern only applies to banks",
          "Going concern is never assessed during an audit"
        ],
        "answer": 0,
        "explanation": "Auditors critically assess management's feasibility assumptions (e.g., whether promised funding or asset sales are realistic and supported)."
      },
      {
        "id": 5035,
        "q": "What is a key audit procedure for identifying 'related parties' and 'related party transactions'?",
        "options": [
          "Inspecting statutory registers/shareholder lists, minutes of board/shareholder meetings, prior year working papers, and inquiring of management and governance",
          "Ignoring family relationships of directors",
          "Checking only petty cash vouchers",
          "Asking a random supplier"
        ],
        "answer": 0,
        "explanation": "Auditors use multiple sources—registers, minutes, prior files, and inquiries—to identify undisclosed related parties and transactions."
      },
      {
        "id": 5036,
        "q": "What is an 'adjusting subsequent event' under IAS 10?",
        "options": [
          "An event after the reporting period that provides further evidence of conditions that existed at the end of the reporting period (e.g., settlement of a court case confirming a year-end liability or customer insolvency existing at year-end)",
          "A new factory built six months after year-end",
          "A natural disaster occurring after year-end with no prior condition",
          "A bonus issue declared after year-end"
        ],
        "answer": 0,
        "explanation": "Adjusting events confirm conditions existing at the balance sheet date and require adjusting the amounts recognized in the financial statements."
      },
      {
        "id": 5037,
        "q": "What is the primary purpose of 'audit documentation' under ISA 230?",
        "options": [
          "To provide a sufficient and appropriate record of the basis for the auditor's report and evidence that the audit was planned and performed in accordance with ISAs and applicable legal/regulatory requirements",
          "To store personal holiday photos",
          "To avoid following ISAs",
          "To publish client secrets"
        ],
        "answer": 0,
        "explanation": "Documentation records procedures performed, evidence obtained, and conclusions reached to support the audit report and quality reviews."
      },
      {
        "id": 5038,
        "q": "When inspecting an original document versus a photocopy or fax as audit evidence, which is generally more reliable?",
        "options": [
          "The original document (since photocopies/faxes can be altered or cropped more easily without detection)",
          "A blurred photocopy",
          "An unsigned note on scrap paper",
          "Both have identical reliability in every case"
        ],
        "answer": 0,
        "explanation": "Original documents are generally more reliable than copies because copies may be incomplete or manipulated."
      },
      {
        "id": 5039,
        "q": "According to the IESBA Code, what is a distinguishing mark of the accountancy profession?",
        "options": [
          "Acceptance of the responsibility to act in the public interest",
          "Maximizing short-term fees at any cost",
          "Avoiding all ethical codes",
          "Acting solely for one director"
        ],
        "answer": 0,
        "explanation": "Acting in the public interest is a defining mark of the profession, requiring professional accountants to prioritize public trust and ethical standards."
      },
      {
        "id": 5040,
        "q": "Why is a 'principles-based' ethical framework often preferred over a purely 'rules-based' checklist?",
        "options": [
          "It encourages active ethical judgment and compliance with the spirit of ethics, prevents narrow loophole-seeking, and adapts to varied and changing situations (while still incorporating specific prohibitions where needed)",
          "It allows auditors to ignore independence whenever convenient",
          "It eliminates all prohibitions",
          "It requires no professional judgment"
        ],
        "answer": 0,
        "explanation": "Principles-based frameworks require genuine ethical reasoning and adherence to both letter and spirit, supplemented by explicit prohibitions where necessary."
      },
      {
        "id": 5041,
        "q": "Which threat arises when an audit firm has a close relationship with a client or its staff and becomes too sympathetic or uncritical ('familiarity')?",
        "options": [
          "Familiarity threat",
          "Intimidation threat",
          "Self-review threat",
          "Advocacy threat"
        ],
        "answer": 0,
        "explanation": "Long tenure or close personal/family ties can create a familiarity threat, dulling professional skepticism."
      },
      {
        "id": 5042,
        "q": "What does the ICAB Code require regarding 'spirit' versus 'letter' of ethical guidance?",
        "options": [
          "Accountants must follow both the spirit and the letter of the guidance, even if a specific situation is not explicitly listed",
          "Only the letter matters; spirit can be ignored",
          "Only unpaid work requires the spirit of ethics",
          "Ethical guidance applies only during exams"
        ],
        "answer": 0,
        "explanation": "Evaluating whether the spirit of the Code applies ensures ethical compliance even in novel or unlisted scenarios."
      },
      {
        "id": 5043,
        "q": "For a Public Interest Entity (PIE), if total fees from the client and related entities exceed 15% of the firm's total fees for two consecutive years, what is required?",
        "options": [
          "Disclose this to those charged with governance and carry out an engagement quality review (pre-issuance or post-issuance)",
          "Hide the fee percentage",
          "Reduce audit hours by 50%",
          "Issue a qualified opinion automatically"
        ],
        "answer": 0,
        "explanation": "Exceeding 15% for two consecutive years on a PIE requires governance disclosure and an engagement quality review to address fee-dependency threats."
      },
      {
        "id": 5044,
        "q": "Under BSEC notification dated 03 June 2018, what non-audit services are prohibited for external auditors of listed companies in Bangladesh?",
        "options": [
          "Bookkeeping/accounting records/financial statements preparation, appraisal/valuation/fairness opinions, and internal audit/special audit services",
          "Expressing an audit opinion on annual financial statements",
          "Holding an audit planning meeting",
          "Communicating with the audit committee"
        ],
        "answer": 0,
        "explanation": "BSEC's June 3, 2018 notification bans listed-company auditors from bookkeeping, valuation/fairness opinions, and internal/special audit services."
      },
      {
        "id": 5045,
        "q": "What is 'insider dealing' and why is it prohibited?",
        "options": [
          "Using (or appearing to use) confidential price-sensitive information gained through a professional role for personal or third-party share trading advantage—prohibited as unethical and unlawful",
          "Buying shares on the open market with publicly available information",
          "Auditing a company's share register",
          "Attending a shareholder meeting"
        ],
        "answer": 0,
        "explanation": "Confidential information must never be used or appear to be used for personal or third-party advantage, including insider share dealing."
      },
      {
        "id": 5046,
        "q": "What is the greatest risk of breaching confidentiality in day-to-day practice?",
        "options": [
          "Accidental disclosure (such as talking in public places or leaving files exposed/unattended) rather than deliberate disclosure",
          "Disclosing under a valid court order",
          "Reporting suspected money laundering to Bangladesh Bank",
          "Consulting a colleague internally on a professional matter"
        ],
        "answer": 0,
        "explanation": "Accidental breaches—both externally and internally at client premises—are the most common confidentiality risk and require strict physical, digital, and verbal safeguards."
      },
      {
        "id": 5047,
        "q": "When a firm acts for two clients with conflicting interests and manages the conflict using safeguards, who should regularly review the application of safeguards?",
        "options": [
          "A senior individual within the firm who is not involved with the relevant client management",
          "A junior clerk who handles cash for one of the clients",
          "The managing director of the rival client",
          "No review is needed"
        ],
        "answer": 0,
        "explanation": "Independent senior review ensures safeguards like Chinese Walls and confidentiality protocols remain effective."
      },
      {
        "id": 5048,
        "q": "If a conflict of interest cannot be managed even with safeguards, what must the firm do?",
        "options": [
          "Not act (decline the assignment or cease acting)",
          "Proceed anyway to earn the fee",
          "Ignore the threat",
          "Ask the client to waive ethics rules"
        ],
        "answer": 0,
        "explanation": "When threats/conflicts cannot be reduced to an acceptable level even with safeguards, the firm must decline or withdraw from acting."
      },
      {
        "id": 5049,
        "q": "What is the significance of the phrase 'true and fair view' or 'present fairly, in all material respects' in an audit opinion?",
        "options": [
          "It confirms that financial statements are prepared in accordance with the applicable financial reporting framework without material misstatements [cite: 91, 92]",
          "It guarantees that the client will never experience financial loss",
          "It certifies that every penny of petty cash is accounted for",
          "It exempts the company from tax audits"
        ],
        "answer": 0,
        "explanation": "These equivalent phrases denote that financial statements present a true and fair view in accordance with accounting standards [cite: 91, 92]."
      },
      {
        "id": 5050,
        "q": "Which of the following summarizes the overarching goal of Chapter 4 in the ICAB Assurance syllabus?",
        "options": [
          "Understanding how auditors gather sufficient appropriate audit evidence through tests of controls and substantive procedures, and how they evaluate findings to issue formal audit reports under ISA 700 [cite: 85, 90]",
          "Calculating individual income tax returns",
          "Managing audit firm office leases",
          "Designing corporate logos"
        ],
        "answer": 0,
        "explanation": "Chapter 4 covers audit evidence gathering (ISA 500), assertions (ISA 315), evidence procedures, and forming audit opinions and reports (ISA 700) [cite: 85, 90]."
      }
    ]
  }
];

if (typeof window !== 'undefined') {
    window.assuranceMockTests = assuranceMockTests;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { assuranceMockTests };
}
