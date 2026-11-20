// Chapter 5: Introduction to Risk Management (50 MCQs)
const btfChapter5Questions = [
    {
        "id": 1,
        "chapter": "Introduction to Risk Management",
        "question": "What is the key distinction between 'risk' and 'uncertainty' in business decision-making?",
        "options": [
            "Risk always results in a financial loss, whereas uncertainty always results in a profit",
            "Risk exists where possible outcomes and their probabilities can be estimated, whereas uncertainty exists where outcomes or probabilities cannot be predicted",
            "Risk only affects sole traders, whereas uncertainty only affects public limited companies",
            "Risk and uncertainty are completely identical terms in accounting"
        ],
        "correctAnswer": 1,
        "explanation": "Risk involves measurable variability in outcomes with known/estimable probabilities, whereas uncertainty denotes an inability to predict outcomes or assign reliable probabilities."
    },
    {
        "id": 2,
        "chapter": "Introduction to Risk Management",
        "question": "How is 'gross risk' (inherent risk before controls) mathematically defined in risk assessment?",
        "options": [
            "Exposure + Volatility",
            "Potential loss (impact) × Probability of occurrence",
            "Expected value ÷ Standard deviation",
            "Fixed costs × Variable costs"
        ],
        "correctAnswer": 1,
        "explanation": "Gross risk is calculated by multiplying the potential financial/operational loss (impact) by the probability that the adverse event will occur."
    },
    {
        "id": 3,
        "chapter": "Introduction to Risk Management",
        "question": "Which risk attitude describes a decision-maker who focuses strictly on the highest expected return regardless of the level of risk involved?",
        "options": [
            "Risk-averse attitude",
            "Risk-neutral attitude",
            "Risk-seeking attitude",
            "Risk-avoiding attitude"
        ],
        "correctAnswer": 1,
        "explanation": "A risk-neutral investor ignores risk and selects solely on expected return; a risk-averse investor requires extra return for extra risk, while a risk-seeking investor prefers higher risk for a chance at higher upside."
    },
    {
        "id": 4,
        "chapter": "Introduction to Risk Management",
        "question": "What is the fundamental difference between 'systematic (market) risk' and 'unsystematic (specific) risk' for an investor?",
        "options": [
            "Systematic risk can be eliminated through portfolio diversification, whereas unsystematic risk cannot",
            "Unsystematic risk is company- or industry-specific and can be reduced through portfolio diversification, whereas systematic risk affects the entire market and cannot be diversified away",
            "Systematic risk only affects cash holdings, whereas unsystematic risk only affects government bonds",
            "Neither systematic nor unsystematic risk affects equity shareholders"
        ],
        "correctAnswer": 1,
        "explanation": "Diversifying across different industries eliminates specific (unsystematic) risk, leaving investors exposed only to market-wide (systematic) risk such as interest rate or recession risk."
    },
    {
        "id": 5,
        "chapter": "Introduction to Risk Management",
        "question": "Under the TARA risk response framework, what do the four letters stand for?",
        "options": [
            "Target, Audit, Report, Analyse",
            "Transfer, Avoid, Reduce, Accept",
            "Test, Assess, Review, Approve",
            "Track, Allocate, Recover, Adapt"
        ],
        "correctAnswer": 1,
        "explanation": "The four standard risk management strategies are Risk Transfer (e.g., insurance), Risk Avoidance (exiting the activity), Risk Reduction (controls/mitigation), and Risk Acceptance/Retention."
    },
    {
        "id": 6,
        "chapter": "Introduction to Risk Management",
        "question": "What is 'residual risk' in the risk management process?",
        "options": [
            "The maximum possible loss before any internal controls or insurance are applied",
            "The level of risk that remains after management has implemented internal controls and risk mitigation measures",
            "Risk arising solely from natural disasters",
            "Risk that has a zero probability of occurrence"
        ],
        "correctAnswer": 1,
        "explanation": "Gross risk minus the effect of risk controls equals residual (net) risk, which must fall within the organisation's risk appetite."
    },
    {
        "id": 7,
        "chapter": "Introduction to Risk Management",
        "question": "Which statistical measure of dispersion expresses standard deviation as a percentage of the mean, allowing fair comparison of relative risk between projects of different sizes?",
        "options": [
            "Median",
            "Mode",
            "Coefficient of variation",
            "Interquartile range"
        ],
        "correctAnswer": 2,
        "explanation": "Coefficient of variation = (Standard Deviation ÷ Mean) × 100%, measuring risk per unit of expected return."
    },
    {
        "id": 8,
        "chapter": "Introduction to Risk Management",
        "question": "What is the primary focus of 'crisis management' compared to routine risk management?",
        "options": [
            "Routine daily checking of petty cash vouchers",
            "Identifying, assessing, and responding rapidly to an unexpected, high-impact emergency event that threatens the survival or reputation of the organisation",
            "Eliminating all normal business competition",
            "Preparing annual statutory tax returns"
        ],
        "correctAnswer": 1,
        "explanation": "Crisis management deals with sudden, severe, disruptive events requiring immediate executive command, clear communication, and damage containment."
    },
    {
        "id": 9,
        "chapter": "Introduction to Risk Management",
        "question": "What is meant by 'business resilience'?",
        "options": [
            "The ability of an organisation to anticipate, prepare for, respond to, and adapt to incremental change and sudden disruptions in order to survive and prosper",
            "Holding 100% of company assets in physical gold bars",
            "Refusing to adopt any new information technology",
            "Operating without any written policies or contingency plans"
        ],
        "correctAnswer": 0,
        "explanation": "Business resilience goes beyond mere IT recovery—it is the organisation-wide capacity to absorb shocks, adapt, and continue delivering value."
    },
    {
        "id": 10,
        "chapter": "Introduction to Risk Management",
        "question": "How does 'Disaster Recovery Planning (DRP)' relate to 'Business Continuity Planning (BCP)'?",
        "options": [
            "DRP and BCP are completely unrelated concepts",
            "DRP is a technical subset of BCP focused specifically on restoring critical IT infrastructure, systems, and data after a disruption, whereas BCP covers the recovery of the entire business operation",
            "BCP only covers IT servers, whereas DRP only covers staff recruitment",
            "DRP is performed only before a company is incorporated"
        ],
        "correctAnswer": 1,
        "explanation": "BCP ensures all critical business functions keep running or resume quickly, while DRP specifically restores IT hardware, networks, and data."
    },
    {
        "id": 11,
        "chapter": "Introduction to Risk Management",
        "question": "A highly-geared company's financial risk is most likely to increase when it increases its:",
        "options": [
            "Operations",
            "Geographical reach",
            "Borrowings",
            "Share capital"
        ],
        "correctAnswer": 2,
        "explanation": "Financial risk relates to how a business is financed; taking on additional debt (borrowings) increases fixed interest obligations and default risk for shareholders."
    },
    {
        "id": 12,
        "chapter": "Introduction to Risk Management",
        "question": "The following statements have been made in relation to risk and uncertainty:Statement (1): Risk is the variation in an outcome.Statement (2): Uncertainty denotes the inability to predict an outcome.Identify whether each statement is true or false:",
        "options": [
            "Statement (1) true; Statement (2) false",
            "Statement (1) false; Statement (2) false",
            "Statement (1) true; Statement (2) true",
            "Statement (1) false; Statement (2) true"
        ],
        "correctAnswer": 2,
        "explanation": "In BTF risk theory, risk refers to measurable variation around expected outcomes, whereas uncertainty refers to situations where outcomes cannot be predicted."
    },
    {
        "id": 13,
        "chapter": "Introduction to Risk Management",
        "question": "Norman Ltd developed a new product for use in the home improvement market. Tests on the product proved successful although in extreme conditions the product was very flammable. The company decided not to launch the product. In response to the risks highlighted in the product tests, this decision is an example of managing risk through:",
        "options": [
            "Risk avoidance",
            "Risk reduction",
            "Risk transfer",
            "Risk acceptance"
        ],
        "correctAnswer": 0,
        "explanation": "Refusing to launch the flammable product completely eliminates exposure to that hazard, which is risk avoidance."
    },
    {
        "id": 14,
        "chapter": "Introduction to Risk Management",
        "question": "The following statements have been made about risk attitudes:Statement (1): A risk-seeking attitude means that an investment should not be undertaken if there is an alternative investment offering a higher risk.Statement (2): A risk-neutral attitude means an investment should not be undertaken if there is an alternative investment offering a lower return.Identify whether each statement is true or false:",
        "options": [
            "Statement (1) true; Statement (2) false",
            "Statement (1) false; Statement (2) false",
            "Statement (1) true; Statement (2) true",
            "Statement (1) false; Statement (2) true"
        ],
        "correctAnswer": 1,
        "explanation": "Both statements are false: a risk-seeking investor actually prefers higher risk (for higher potential upside), and a risk-neutral investor rejects an investment only if an alternative offers a HIGHER expected return (not lower)."
    },
    {
        "id": 15,
        "chapter": "Introduction to Risk Management",
        "question": "Jenny is a Risk Manager at Fortune Ltd. She is investigating the potential gross risk arising from a decision to incorporate lower quality materials into the production process for one of the company's key products. In assessing potential gross risk Jenny needs to take account of the:",
        "options": [
            "Level of exposure and probability of occurrence",
            "Potential loss and probability of occurrence",
            "Potential loss and level of volatility",
            "Level of exposure and level of volatility"
        ],
        "correctAnswer": 1,
        "explanation": "Gross risk = Potential loss (impact/severity) × Probability of occurrence."
    },
    {
        "id": 16,
        "chapter": "Introduction to Risk Management",
        "question": "Smertin and Jones is a firm providing advice on all aspects of personal finance. Their industry is heavily regulated. A newspaper article predicts that private medical insurance, a further area of the firm's business, may become subject to new regulatory requirements from next year. This possibility is an example of:",
        "options": [
            "Business risk",
            "Financial risk",
            "Event risk",
            "Market risk"
        ],
        "correctAnswer": 2,
        "explanation": "Regulatory or legal changes triggered by a specific external event fall under event risk (a sub-category of operational risk in the ICAEW BTF syllabus)."
    },
    {
        "id": 17,
        "chapter": "Introduction to Risk Management",
        "question": "A project will yield either a profit of £100,000 or a loss of £50,000. The profit will arise with a probability of 0.8 and the loss will arise with a probability of 0.2. The project contains:",
        "options": [
            "Uncertainty only",
            "Risk only",
            "Both uncertainty and risk",
            "Neither risk nor uncertainty"
        ],
        "correctAnswer": 1,
        "explanation": "Because all possible outcomes (+£100,000 and -£50,000) and their exact probabilities (0.8 and 0.2) are known, this represents pure quantifiable risk rather than uncertainty."
    },
    {
        "id": 18,
        "chapter": "Introduction to Risk Management",
        "question": "Briggs plc analysed a risk faced by its Scarborough division on a risk map. It concluded that the matter has a low impact but there is a high probability of its occurrence. Which of the following risk responses is most appropriate?",
        "options": [
            "Risk avoidance",
            "Risk reduction",
            "Risk transfer",
            "Risk acceptance"
        ],
        "correctAnswer": 1,
        "explanation": "On a standard 2×2 risk map: High Impact + High Probability = Avoid; High Impact + Low Probability = Transfer; Low Impact + High Probability = Reduce (via internal controls); Low Impact + Low Probability = Accept."
    },
    {
        "id": 19,
        "chapter": "Introduction to Risk Management",
        "question": "Grenville Ltd is renewing its buildings and contents insurance policy for its factories. In terms of risk management, this is an example of:",
        "options": [
            "Risk avoidance",
            "Risk reduction",
            "Risk transfer",
            "Risk retention"
        ],
        "correctAnswer": 2,
        "explanation": "Purchasing insurance shifts the financial consequences of property damage to an external insurer, which is risk transfer."
    },
    {
        "id": 20,
        "chapter": "Introduction to Risk Management",
        "question": "What type of risk includes process risk, people risk, and event risk?",
        "options": [
            "Operational risk",
            "Financial risk",
            "Business risk",
            "Strategy risk"
        ],
        "correctAnswer": 0,
        "explanation": "Operational risk arises from inadequate or failed internal processes, people, systems, or external events (process risk, people risk, and event risk)."
    },
    {
        "id": 21,
        "chapter": "Introduction to Risk Management",
        "question": "Abdullah owns a clothes shop in a busy town centre open six days per week. Last week, Abdullah's daily sales were: Monday Tk. 2,500; Tuesday Tk. 2,700; Wednesday Tk. 3,000; Thursday Tk. 3,500; Friday Tk. 3,500; Saturday Tk. 4,000. What was the median value of Abdullah's daily sales last week?",
        "options": [
            "Tk. 3,000",
            "Tk. 3,200",
            "Tk. 3,250",
            "Tk. 3,500"
        ],
        "correctAnswer": 2,
        "explanation": "With 6 ordered observations, the median is the average of the 3rd and 4th values: (Tk. 3,000 + Tk. 3,500) ÷ 2 = Tk. 3,250."
    },
    {
        "id": 22,
        "chapter": "Introduction to Risk Management",
        "question": "Which two of the following statements are true of the median?(1) It can be distorted by very large or very small exceptional values.(2) It may not return a value that is the same as an actual value in the data set.(3) It takes into account all the data in the data set.(4) It is difficult to identify in large data sets as the values have to be ordered.",
        "options": [
            "1 and 3",
            "2 and 4",
            "1 and 4",
            "2 and 3"
        ],
        "correctAnswer": 1,
        "explanation": "When there is an even number of items, the median averages the two middle numbers (so it may not match an actual observation), and large data sets must be sorted first. (Statements 1 and 3 describe the arithmetic mean.)"
    },
    {
        "id": 23,
        "chapter": "Introduction to Risk Management",
        "question": "Which of the following measures of central tendency can be used when the data is qualitative rather than quantitative?",
        "options": [
            "Mean",
            "Median",
            "Mode",
            "Standard deviation"
        ],
        "correctAnswer": 2,
        "explanation": "The mode identifies the most frequently occurring category or value, making it the only average applicable to qualitative/non-numeric data."
    },
    {
        "id": 24,
        "chapter": "Introduction to Risk Management",
        "question": "The marketing department has estimated the following sales volume for a new product for the following year:- Worst Case: Probability 0.20, Sales Volume 2,200 units- Most Likely: Probability 0.50, Sales Volume 2,600 units- Best Case: Probability 0.30, Sales Volume 2,700 unitsWhat is the expected value of sales volume?",
        "options": [
            "2,450",
            "2,500",
            "2,550",
            "2,600"
        ],
        "correctAnswer": 2,
        "explanation": "Expected Value = (0.20 × 2,200) + (0.50 × 2,600) + (0.30 × 2,700) = 440 + 1,300 + 810 = 2,550 units."
    },
    {
        "id": 25,
        "chapter": "Introduction to Risk Management",
        "question": "The management accountant has recorded daily production in the factory for the last year. She has calculated that the mean daily production was 10,000 units, with a variance of 400 units². What was the coefficient of variation?",
        "options": [
            "0.2%",
            "4%",
            "20 units",
            "400 units"
        ],
        "correctAnswer": 0,
        "explanation": "Standard deviation = √Variance = √400 = 20 units. Coefficient of variation = (Standard Deviation ÷ Mean) × 100% = (20 ÷ 10,000) × 100% = 0.2%."
    },
    {
        "id": 26,
        "chapter": "Introduction to Risk Management",
        "question": "Which of the following best describes 'business risk' as distinct from 'financial risk'?",
        "options": [
            "Business risk arises from the nature of the company's operations, industry, and competitive market regardless of how it is financed",
            "Business risk arises exclusively from issuing corporate bonds",
            "Business risk only exists when a company has zero debt",
            "Business risk is identical to foreign exchange translation risk"
        ],
        "correctAnswer": 0,
        "explanation": "Business risk stems from trading conditions, demand volatility, cost structures (operating gearing), and competition, whereas financial risk stems from debt financing (financial gearing)."
    },
    {
        "id": 27,
        "chapter": "Introduction to Risk Management",
        "question": "A textile exporter in Bangladesh generates 90% of its revenue in US dollars while paying wages and factory overhead in Bangladeshi Taka (BDT). A sudden appreciation of the BDT against the USD reduces its Taka profit margins. Which type of financial risk is this?",
        "options": [
            "Credit (default) risk",
            "Currency (foreign exchange) risk",
            "Liquidity risk",
            "Process risk"
        ],
        "correctAnswer": 1,
        "explanation": "Fluctuations in exchange rates affecting the domestic value of foreign-currency cash flows represent currency (FX) risk."
    },
    {
        "id": 28,
        "chapter": "Introduction to Risk Management",
        "question": "Apex Distributors Ltd reports strong accounting profits on its income statement, but because major retail customers take 150 days to pay invoices while suppliers demand payment within 30 days, Apex struggles to pay monthly staff salaries on time. Which risk is Apex experiencing?",
        "options": [
            "Liquidity risk",
            "Strategic risk",
            "Physical hazard risk",
            "Systematic equity risk"
        ],
        "correctAnswer": 0,
        "explanation": "Liquidity risk is the risk that a business lacks sufficient cash or liquid assets to meet short-term financial obligations as they fall due, even if profitable."
    },
    {
        "id": 29,
        "chapter": "Introduction to Risk Management",
        "question": "A commercial bank grants a large corporate loan to a real-estate developer that subsequently defaults on both interest and principal repayments. Which category of financial risk has materialised for the bank?",
        "options": [
            "Credit risk",
            "Market interest-rate risk",
            "People risk",
            "Reputational risk only"
        ],
        "correctAnswer": 0,
        "explanation": "Credit risk (counterparty default risk) is the risk that a borrower or credit customer fails to pay amounts owed on time."
    },
    {
        "id": 30,
        "chapter": "Introduction to Risk Management",
        "question": "A pharmaceutical company suffers a major data breach because an untrained accounts clerk clicked on a phishing email, exposing confidential patient records. Under operational risk classifications, this incident primarily illustrates:",
        "options": [
            "People risk",
            "Financial gearing risk",
            "Systematic market risk",
            "Interest rate risk"
        ],
        "correctAnswer": 0,
        "explanation": "People risk arises from human error, lack of training, staff shortages, negligence, or internal fraud."
    },
    {
        "id": 31,
        "chapter": "Introduction to Risk Management",
        "question": "An e-commerce retailer experiences repeated billing errors because its order-processing software fails to reconcile warehouse dispatch logs with customer invoices. Under operational risk classifications, this is best categorised as:",
        "options": [
            "Process risk",
            "Financial credit risk",
            "Strategic merger risk",
            "Currency risk"
        ],
        "correctAnswer": 0,
        "explanation": "Process risk arises from ineffective, poorly designed, or broken internal business procedures and IT workflows."
    },
    {
        "id": 32,
        "chapter": "Introduction to Risk Management",
        "question": "What does 'exposure' measure in risk management?",
        "options": [
            "The maximum amount or extent of assets, revenue, or operations vulnerable to a particular risk event",
            "The statistical average of past profits",
            "The cost of hiring an external auditor",
            "The number of non-executive directors on the board"
        ],
        "correctAnswer": 0,
        "explanation": "Exposure measures how much is at stake (e.g., uninsured inventory value or unhedged USD receivables) if a risk occurs."
    },
    {
        "id": 33,
        "chapter": "Introduction to Risk Management",
        "question": "In risk measurement, what does 'volatility' indicate?",
        "options": [
            "The degree to which actual outcomes or returns fluctuate around their expected mean value",
            "The certainty that a project will never fail",
            "The exact date a disaster will strike",
            "The legal minimum share capital of a PLC"
        ],
        "correctAnswer": 0,
        "explanation": "Higher volatility (measured by variance or standard deviation) indicates wider swings in potential outcomes and therefore higher risk."
    },
    {
        "id": 34,
        "chapter": "Introduction to Risk Management",
        "question": "Which sequence correctly represents the standard Risk Management Process?",
        "options": [
            "Risk Response -> Risk Identification -> Risk Monitoring -> Risk Assessment",
            "Risk Identification -> Risk Assessment & Measurement -> Risk Response (Control) -> Risk Monitoring & Reporting",
            "Risk Acceptance -> Crisis Management -> Risk Identification -> Risk Avoidance",
            "Risk Monitoring -> Risk Transfer -> Risk Elimination -> Risk Ignoring"
        ],
        "correctAnswer": 1,
        "explanation": "Organisations first identify risks, evaluate their impact and likelihood, choose appropriate TARA responses, and continuously monitor and review residual risk."
    },
    {
        "id": 35,
        "chapter": "Introduction to Risk Management",
        "question": "A chemical manufacturing plant evaluates a risk that has HIGH potential impact (severe explosion hazard) and HIGH probability of occurrence. According to the risk mapping matrix, what is the most appropriate response?",
        "options": [
            "Risk acceptance",
            "Risk avoidance (e.g., halting or redesigning the hazardous process)",
            "Ignoring the risk until an accident happens",
            "Solely buying minor stationery insurance"
        ],
        "correctAnswer": 1,
        "explanation": "High-impact, high-likelihood risks are unacceptable and should generally be avoided or fundamentally re-engineered."
    },
    {
        "id": 36,
        "chapter": "Introduction to Risk Management",
        "question": "A logistics company operates a fleet of delivery vans. Minor scratches and dent repairs cost roughly ৳5,000 per incident and occur occasionally, whereas major road accidents are rare but could cost ৳5,000,000. How should the company apply the TARA framework to these two risks?",
        "options": [
            "Accept (retain) the minor dent risk internally, and transfer the major accident risk via comprehensive vehicle insurance",
            "Avoid driving vans altogether and buy insurance only for minor scratches",
            "Transfer minor scratches to an insurer and accept major accidents uninsured",
            "Accept both risks without any safety controls"
        ],
        "correctAnswer": 0,
        "explanation": "Low-impact risks are economically retained (accepted), while low-probability, high-impact catastrophic risks are ideal for risk transfer (insurance)."
    },
    {
        "id": 37,
        "chapter": "Introduction to Risk Management",
        "question": "Installing automatic fire sprinklers, smoke detectors, and staff safety drills in a garment factory—even though fire insurance is already in place—is an example of:",
        "options": [
            "Risk avoidance",
            "Risk reduction (mitigation)",
            "Risk acceptance",
            "Risk ignorance"
        ],
        "correctAnswer": 1,
        "explanation": "Preventive and protective physical controls reduce both the likelihood and severity of fire loss."
    },
    {
        "id": 38,
        "chapter": "Introduction to Risk Management",
        "question": "What does the principle of 'ALARP' stand for in health, safety, and operational risk management?",
        "options": [
            "Always Limit All Risk Permanently",
            "As Low As Reasonably Practicable",
            "Annual Loss And Risk Projection",
            "Audit Level And Reporting Protocol"
        ],
        "correctAnswer": 1,
        "explanation": "ALARP recognises that reducing risk to zero is often impossible or disproportionately expensive, so risks should be reduced until further reduction costs outweigh the safety benefit."
    },
    {
        "id": 39,
        "chapter": "Introduction to Risk Management",
        "question": "Why is 'risk appetite' an essential concept for a Board of Directors when setting corporate strategy?",
        "options": [
            "It defines the amount and type of risk the organisation is willing to take in pursuit of its strategic objectives",
            "It guarantees that the company will never make a financial loss",
            "It eliminates the need for internal audit",
            "It requires the company to reject every profitable investment"
        ],
        "correctAnswer": 0,
        "explanation": "Risk appetite sets clear boundaries for acceptable risk-taking so managers neither take reckless gambles nor become overly timid."
    },
    {
        "id": 40,
        "chapter": "Introduction to Risk Management",
        "question": "Which of the following is NOT an objective of an effective enterprise risk management (ERM) system?",
        "options": [
            "Protecting corporate assets, reputation, and stakeholder value",
            "Ensuring compliance with laws and regulations",
            "Eliminating 100% of all business risks so no uncertainty exists",
            "Supporting informed strategic decision-making and operational continuity"
        ],
        "correctAnswer": 2,
        "explanation": "Risk management aims to understand, control, and optimise risk—not to eliminate all risk, since taking calculated risks is essential to earning business returns."
    },
    {
        "id": 41,
        "chapter": "Introduction to Risk Management",
        "question": "Project Alpha has an expected return of 14% with a standard deviation of 2.8%. Project Beta has an expected return of 20% with a standard deviation of 5.0%. Using the coefficient of variation, which project carries higher relative risk per unit of return?",
        "options": [
            "Project Alpha (CV = 20%), because 20% > 25% is false",
            "Project Beta (CV = 25%), because its coefficient of variation (5.0 ÷ 20 = 25%) is higher than Project Alpha's (2.8 ÷ 14 = 20%)",
            "Both projects have identical relative risk",
            "Project Alpha, because its expected return is lower"
        ],
        "correctAnswer": 1,
        "explanation": "CV(Alpha) = 2.8 / 14 = 0.20 (20%); CV(Beta) = 5.0 / 20 = 0.25 (25%). Project Beta has higher relative risk per unit of return."
    },
    {
        "id": 42,
        "chapter": "Introduction to Risk Management",
        "question": "A batch of 9 daily customer complaint counts at a call centre is recorded as: 4, 7, 2, 9, 4, 12, 5, 4, 8. What are the MODE and MEDIAN of this data set respectively?",
        "options": [
            "Mode = 4; Median = 5",
            "Mode = 5; Median = 4",
            "Mode = 4; Median = 6",
            "Mode = 12; Median = 5"
        ],
        "correctAnswer": 0,
        "explanation": "Ordered data: 2, 4, 4, 4, 5, 7, 8, 9, 12. The most frequent value (mode) is 4 (appears three times), and the middle (5th) value (median) is 5."
    },
    {
        "id": 43,
        "chapter": "Introduction to Risk Management",
        "question": "Which of the following is a recognized limitation of using Expected Value (EV) as the sole criterion for a one-off major strategic investment decision?",
        "options": [
            "Expected Value cannot be calculated when probabilities are known",
            "Expected Value is a long-run weighted average that may never occur in a single trial and ignores the dispersion (risk/downside) of individual outcomes",
            "Expected Value always selects the project with the lowest possible profit",
            "Expected Value ignores the probabilities of outcomes"
        ],
        "correctAnswer": 1,
        "explanation": "A project with a 50% chance of +৳10m and 50% chance of -৳6m has an EV of +৳2m, yet the actual outcome will never be ৳2m and carries severe downside risk."
    },
    {
        "id": 44,
        "chapter": "Introduction to Risk Management",
        "question": "During a sudden product contamination scandal, a food manufacturer immediately appoints a single senior spokesperson, issues transparent factual updates to regulators and customers, recalls affected batches, and sets up a customer helpline. Which phase of crisis management is being demonstrated?",
        "options": [
            "Crisis denial and concealment",
            "Crisis containment, communication, and emergency response",
            "Routine annual budgeting",
            "Risk avoidance before product launch"
        ],
        "correctAnswer": 1,
        "explanation": "Effective crisis response requires rapid executive leadership, honest communication with stakeholders, and decisive operational containment to protect public safety and trust."
    },
    {
        "id": 45,
        "chapter": "Introduction to Risk Management",
        "question": "Which of the following organisational characteristics most strongly builds 'business resilience'?",
        "options": [
            "Reliance on a single overseas raw-material supplier with zero backup inventory",
            "Diversified supply chains, cross-trained employees, strong cash reserves, adaptable IT systems, and a proactive risk-aware culture",
            "Rigid bureaucratic rules that prohibit local managers from adapting during emergencies",
            "Cancelling all insurance and contingency plans to boost short-term profit"
        ],
        "correctAnswer": 1,
        "explanation": "Resilience relies on redundancy, flexibility, financial strength, and an adaptive culture capable of weathering unexpected shocks."
    },
    {
        "id": 46,
        "chapter": "Introduction to Risk Management",
        "question": "In Business Continuity Planning (BCP), what is a Business Impact Analysis (BIA) used for?",
        "options": [
            "Calculating employee overtime bonuses",
            "Identifying critical business functions, assessing the operational and financial impact of their disruption over time, and setting recovery priorities",
            "Designing marketing logos for new products",
            "Auditing the external auditor's working papers"
        ],
        "correctAnswer": 1,
        "explanation": "A Business Impact Analysis determines which processes are mission-critical and how quickly they must be restored before losses become intolerable."
    },
    {
        "id": 47,
        "chapter": "Introduction to Risk Management",
        "question": "In Disaster Recovery Planning, what is the difference between 'Recovery Time Objective (RTO)' and 'Recovery Point Objective (RPO)'?",
        "options": [
            "RTO is the maximum tolerable downtime before a system must be restored, whereas RPO is the maximum tolerable age of data loss (determining backup frequency)",
            "RTO measures backup frequency, whereas RPO measures office rent",
            "RTO applies only to manual paper files, whereas RPO applies only to buildings",
            "RTO and RPO mean the exact same thing"
        ],
        "correctAnswer": 0,
        "explanation": "For example, an RTO of 4 hours means IT systems must be back online within 4 hours; an RPO of 15 minutes means backups must occur at least every 15 minutes so no more than 15 minutes of data is lost."
    },
    {
        "id": 48,
        "chapter": "Introduction to Risk Management",
        "question": "A major retail bank maintains a fully equipped backup data centre in another city with live, real-time replicated servers and workstations ready for immediate takeover within minutes of a primary site disaster. Which type of disaster recovery facility is this?",
        "options": [
            "Cold site",
            "Warm site",
            "Hot site",
            "Mobile unequipped tent"
        ],
        "correctAnswer": 2,
        "explanation": "A hot site is a fully operational duplicate facility with live data replication for near-instant failover; a warm site has hardware/connectivity but requires data restoration; a cold site is just empty space with power/cooling."
    },
    {
        "id": 49,
        "chapter": "Introduction to Risk Management",
        "question": "Why must a Business Continuity Plan (BCP) be regularly tested and updated rather than simply written and filed away?",
        "options": [
            "Because statutory company law requires every employee to memorise the entire manual word-for-word",
            "Because business processes, IT systems, staff, and external threats constantly evolve, and untested plans often fail under real emergency pressure",
            "Because testing eliminates the need for data backups",
            "Because BCP testing replaces financial statement audits"
        ],
        "correctAnswer": 1,
        "explanation": "Regular drills, walkthroughs, and simulations expose hidden gaps, train staff on their emergency roles, and keep the BCP aligned with current operations."
    },
    {
        "id": 50,
        "chapter": "Introduction to Risk Management",
        "question": "A cloud-software company conducts a post-incident review after a six-hour server outage, updates its automated failover scripts, trains engineers on the new procedure, and communicates lessons learned to key clients. Which stage of the crisis and business continuity lifecycle does this represent?",
        "options": [
            "Pre-crisis risk avoidance",
            "Post-crisis recovery, organisational learning, and continuous improvement",
            "Financial gearing adjustment",
            "Risk transfer via insurance"
        ],
        "correctAnswer": 1,
        "explanation": "After resolving a disruption, resilient organisations conduct root-cause reviews and embed lessons learned to strengthen future continuity."
    }
];

