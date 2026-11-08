import { auth } from './firebase-client.js';

const PREMIUM_EMAILS = new Set(['mjhmbrur@gmail.com']);

const assuranceTopicRules = [
    { topic: 'Assurance purpose and parties', pattern: /intended user|responsible party|practitioner|three[- ]party|purpose of assurance/ },
    { topic: 'Assurance levels, criteria, and reports', pattern: /reasonable assurance|limited assurance|suitable criteria|positive opinion|negative assurance|assurance report|expectation gap/ },
    { topic: 'Ethics and auditor independence', pattern: /ethical|ethics|integrity|objectivity|confidentiality|professional behavior|independence|self[- ]interest|familiarity threat|advocacy threat|intimidation threat/ },
    { topic: 'Engagement acceptance and appointment', pattern: /engagement letter|predecessor auditor|client acceptance|appointment|tender|due diligence|accepting an engagement|continuance/ },
    { topic: 'Audit planning, risk, and materiality', pattern: /audit plan|audit planning|audit strategy|materiality|risk assessment|business risk|professional skepticism|analytical procedures|understanding the entity/ },
    { topic: 'Audit evidence and procedures', pattern: /audit evidence|sufficient appropriate|substantive procedure|test of control|sampling|audit procedure|vouch|trace|reperformance|inspection|observation/ },
    { topic: 'Audit opinions and completion', pattern: /modified opinion|qualified opinion|adverse opinion|disclaimer|going concern|subsequent event|management representation|completion of the audit/ },
    { topic: 'Revenue and receivables controls', pattern: /revenue|sales invoice|sales order|goods dispatch|receivable|credit control|cash receipt|sales system|cash collection/ },
    { topic: 'Purchasing and payables controls', pattern: /purchase|supplier|payable|goods received|purchase order|supplier statement|payment to supplier|procurement/ },
    { topic: 'Payroll and employee cost controls', pattern: /payroll|employee cost|salary|wage|overtime|staff record|payroll deduction/ },
    { topic: 'Internal control and internal audit', pattern: /internal control|control objective|control deficiency|internal audit|audit committee|segregation of duties|authorization|authorisation/ },
    { topic: 'Financial statement figures and assertions', pattern: /inventory|receivable|payable|non.current asset|intangible asset|bank balance|cash balance|financial statement figure|assertion|valuation|existence|completeness/ }
];

const assuranceChapterRules = [
    {
        chapter: /chapter 1:/i,
        rules: [
            { topic: 'Assurance purpose and parties', pattern: /intended user|responsible party|practitioner|three[- ]party|purpose|benefit/ },
            { topic: 'Subject matter and suitable criteria', pattern: /subject matter|suitable criteria|criteria|financial reporting framework/ },
            { topic: 'Levels and types of assurance', pattern: /reasonable|limited|review engagement|positive|negative assurance/ },
            { topic: 'Assurance limitations and expectation gap', pattern: /expectation gap|absolute assurance|fraud|limitations of assurance/ },
            { topic: 'True and fair view and auditing standards', pattern: /true and fair|companies act|international standards on auditing|iaasb|\bisa\b|audit standard/ },
            { topic: 'Sustainability and ESG assurance', pattern: /esg|sustainability|ifrs s1|ifrs s2|climate.related disclosure|environmental pillar|social pillar|governance pillar|sustainability metric|sustainability target/ },
            { topic: 'Audit regulation and professional oversight', pattern: /supervisory body|licensing|monitoring auditors|capital allocation|financial market|financial reporting council|regulatory bod/ },
            { topic: 'Audit engagement lifecycle', pattern: /engagement lifecycle|stages.*audit|audit.*stages/ }
        ]
    },
    {
        chapter: /chapter 2:/i,
        rules: [
            { topic: 'Client acceptance and auditor appointment', pattern: /acceptance|appointment|tender|predecessor|due diligence|independence|ethical|legal requirement/ },
            { topic: 'Engagement letters and agreed terms', pattern: /engagement letter|terms of engagement|scope of the audit|management responsibility|isa 210|agree.*terms/ },
            { topic: 'Continuance and changes in engagement', pattern: /continuance|reappointment|change of auditor|existing client/ },
            { topic: 'Client risk and audit firm competence', pattern: /low risk|high risk|specialized|specialised|competence|expertise|client characteristic|accepting nomination/ },
            { topic: 'Communication with the outgoing auditor', pattern: /outgoing auditor|present auditor|existing auditor|communicate.*auditor|permission.*predecessor/ }
        ]
    },
    {
        chapter: /chapter 3:/i,
        rules: [
            { topic: 'Audit strategy and planning', pattern: /audit plan|audit planning|audit strategy|nature, timing|scope, timing|planning benefit/ },
            { topic: 'Understanding the entity and analytical procedures', pattern: /understanding the entity|analytical procedure|industry|business environment|performance measure/ },
            { topic: 'Professional skepticism', pattern: /professional skepticism|questioning mind/ },
            { topic: 'Fraud risks and auditor responsibilities', pattern: /fraud|intentional misstatement|management override/ },
            { topic: 'Inherent and significant risks', pattern: /inherent risk|significant risk|unusual transaction|complex transaction/ },
            { topic: 'Audit risk and materiality', pattern: /audit risk|risk assessment|materiality|misstatement risk/ }
        ]
    },
    {
        chapter: /chapter 4:/i,
        rules: [
            { topic: 'Types and sufficiency of audit evidence', pattern: /audit evidence|sufficient appropriate|reliability of evidence|source of evidence/ },
            { topic: 'Audit procedures and sampling', pattern: /audit procedure|sampling|vouch|trace|inspection|observation|confirmation|reperformance/ },
            { topic: 'Auditor report structure and legal reporting', pattern: /key audit matter|isa 701|opinion section|addressee|title section|other legal and regulatory|listed company|bank company act/ },
            { topic: 'Audit reporting and opinions', pattern: /audit report|audit opinion|modified opinion|qualified opinion|adverse opinion|disclaimer/ }
        ]
    },
    {
        chapter: /chapter 5:/i,
        rules: [
            { topic: 'Internal control objectives and components', pattern: /control objective|control environment|risk assessment|monitoring|control activit|information and communication/ },
            { topic: 'Control design and implementation', pattern: /design|implement|preventive control|detective control|authorization|authorisation|segregation/ },
            { topic: 'Control limitations and deficiencies', pattern: /limitation|deficien|weakness|override|error|fraud/ },
            { topic: 'IT general and application controls', pattern: /general it control|application control|information processing|physical access|software code|program change/ },
            { topic: 'Financial reporting systems and governance', pattern: /information system|financial reporting objective|those charged with governance|strategic oversight/ }
        ]
    },
    {
        chapter: /chapter 6:/i,
        rules: [
            { topic: 'Sales and credit authorization', pattern: /sales order|credit limit|credit control|customer approval|pricing|discount/ },
            { topic: 'Dispatch and revenue recording', pattern: /dispatch|delivery|goods despatch|goods dispatch|sales invoice|revenue recognition|cut.off/ },
            { topic: 'Cash receipts and receivables', pattern: /cash receipt|cash collection|bank reconciliation|trade receivable|customer balance|receivables ledger/ },
            { topic: 'Revenue system audit procedures', pattern: /audit|test|control procedure|substantive procedure/ }
        ]
    },
    {
        chapter: /chapter 7:/i,
        rules: [
            { topic: 'Ordering and supplier authorization', pattern: /purchase requisition|purchase order|supplier|ordering|procurement|competitive price/ },
            { topic: 'Goods received and invoice matching', pattern: /goods received|goods inward|grn|delivery|invoice matching|three.way/ },
            { topic: 'Payables recording and payment controls', pattern: /payable|supplier statement|duplicate payment|payment|cheque|cut.off accrual/ },
            { topic: 'Purchasing system audit procedures', pattern: /audit|test|control procedure|substantive procedure/ }
        ]
    },
    {
        chapter: /chapter 8:/i,
        rules: [
            { topic: 'Employee records and payroll setup', pattern: /employee record|personnel|recruit|starter|leaver|pay rate|master file/ },
            { topic: 'Payroll calculation and authorization', pattern: /payroll|salary|wage|overtime|deduction|timesheet|attendance/ },
            { topic: 'Payroll payment and audit checks', pattern: /payroll payment|pay slip|bank transfer|payroll audit|test of payroll/ }
        ]
    },
    {
        chapter: /chapter 9:/i,
        rules: [
            { topic: 'Internal audit role and governance', pattern: /audit committee|board|governance|internal audit.*role|purpose of internal audit/ },
            { topic: 'Internal audit scope and procedures', pattern: /operational audit|scope|audit plan|control system|continuous monitoring|audit work/ },
            { topic: 'Internal auditor independence and objectivity', pattern: /independence|objectivity|self.review|reporting line|management responsibility/ },
            { topic: 'Internal and external audit comparison', pattern: /external audit|statutory audit|internal auditor|difference between internal/ }
        ]
    },
    {
        chapter: /chapter 13:/i,
        rules: [
            { topic: 'Inventory and work-in-progress', pattern: /inventory|stock|work.in.progress|wip|net realizable value/ },
            { topic: 'Property and other non-current assets', pattern: /non.current asset|intangible|property|plant|equipment|motor vehicle|depreciation/ },
            { topic: 'Cash, bank, and loans', pattern: /cash|bank|loan|bank reconciliation|bank confirmation/ },
            { topic: 'Receivables and payables', pattern: /receivable|customer balance|payable|supplier balance|confirmation/ },
            { topic: 'Revenue, expenses, and payroll', pattern: /revenue|sales|expense|payroll|employee cost/ },
            { topic: 'Financial statement assertions and evidence', pattern: /assertion|existence|completeness|valuation|rights and obligations|cut.off|audit evidence/ }
        ]
    }
];

const btfChapter4Rules = [
    { topic: 'Business objectives and stakeholders', pattern: /stakeholder|mission|vision|corporate objective|business objective|mendelow/ },
    { topic: 'Business and competitive environment', pattern: /pestel|macro.environment|five forces|competitor|competition|market environment|substitut/ },
    { topic: 'Strategic analysis frameworks', pattern: /swot|value chain|bcg matrix|ansoff|product life cycle|strategic analysis/ },
    { topic: 'Strategic options and evaluation', pattern: /suitability|feasibility|acceptability|strategic option|strategic choice/ },
    { topic: 'Corporate, business, and functional strategy', pattern: /corporate strategy|business strategy|functional strategy|cost leadership|differentiation|market penetration|market development|diversification|strategic business unit|positioning.based view/ },
    { topic: 'Strategy implementation and review', pattern: /implementation|emergent strategy|strategic management|review and control|strategic planning|formal strategic/ }
];

const btfChapter6Rules = [
    { topic: 'Finance function and organization', pattern: /finance function|centraliz|decentraliz|transaction processing|finance department/ },
    { topic: 'Treasury and financial management', pattern: /treasury|liquidity|working capital|cash management|raising finance|financial requirement/ },
    { topic: 'Management accounting and internal reporting', pattern: /management accounting|internal report|budget|forecast|performance measurement|cost information/ },
    { topic: 'Financial reporting and external information', pattern: /financial reporting|external report|shareholder|accounting standard|iasb|ifrs|financial statement/ },
    { topic: 'Information systems, security, and controls', pattern: /information system|database|data security|confidentiality|non.repudiation|integrity|range check|control total|access control|system quality|information quality|cativa/ },
    { topic: 'Performance measurement and decision support', pattern: /balanced scorecard|critical success factor|variance report|economy, efficiency|effectiveness|triple bottom line|performance measure|strategic information/ },
    { topic: 'Sustainability and climate reporting', pattern: /sustainab|gri|climate.related|greenhouse|emission/ },
    { topic: 'Internal control responsibilities', pattern: /coso|internal control|operational manager|control framework/ },
    { topic: 'Qualities and users of financial information', pattern: /relevance|faithful representation|comparability|understandability|qualitative characteristic|decision.useful|information user/ }
];

const btfChapter10Rules = [
    { topic: 'Governance framework and principles', pattern: /corporate governance|comply.or.explain|governance code|governance framework|accountability|transparency/ },
    { topic: 'Board roles and independence', pattern: /board|director|non.executive|independent|chair|chief executive|separation of roles/ },
    { topic: 'Board committees and audit oversight', pattern: /audit committee|remuneration committee|nomination committee|committee/ },
    { topic: 'Executive remuneration', pattern: /remuneration|executive pay|salary|bonus|pensionable/ },
    { topic: 'Shareholders and stakeholder governance', pattern: /shareholder|stakeholder|investor|annual general meeting|proxy/ },
    { topic: 'Sustainability and corporate responsibility', pattern: /sustainab|future generation|environmental|social responsibility/ },
    { topic: 'Governance risk and internal control', pattern: /turnbull|internal control|risk management|sound system/ }
];

function getQuestionText(question) {
    return [
        question.question,
        question.q,
        question.explanation
    ].filter(Boolean).join(' ').toLowerCase();
}

function pickTopic(text, rules, fallback) {
    const match = rules.find(({ pattern }) => pattern.test(text));
    return match ? match.topic : fallback;
}

function inferTopic(subjectId, chapterName, question) {
    const text = getQuestionText(question);
    if (subjectId === 'btf') {
        if (/chapter 4\b/i.test(chapterName)) {
            return pickTopic(text, btfChapter4Rules, 'Business strategy concepts');
        }
        if (/chapter 6\b/i.test(chapterName)) {
            return pickTopic(text, btfChapter6Rules, 'Finance function and information');
        }
        if (/chapter 10\b/i.test(chapterName)) {
            return pickTopic(text, btfChapter10Rules, 'Corporate governance');
        }
        return question.chapter || 'Business, Technology and Finance';
    }

    const chapterRules = assuranceChapterRules.find(({ chapter }) => chapter.test(chapterName));
    if (chapterRules) {
        const topic = pickTopic(text, chapterRules.rules, null);
        if (topic) return topic;
    }
    return pickTopic(text, assuranceTopicRules, 'Other assurance concepts');
}

function createTopicReport({ subjectId, chapterName, responses }) {
    if (!Array.isArray(responses) || responses.length === 0) {
        throw new TypeError('A topic report requires at least one answered test question.');
    }

    const topics = new Map();
    const questionResults = responses.map((response) => {
        const topic = inferTopic(subjectId, chapterName, response.question);
        const result = {
            topic,
            question: String(response.question.q || response.question.question || '').replace(/^\s*\d+[.)]\s*/, '').slice(0, 300),
            correct: response.isCorrect === true,
            selectedAnswers: response.selectedAnswers.slice(0, 4).map((answer) => String(answer).slice(0, 160)),
            correctAnswers: response.correctAnswers.slice(0, 4).map((answer) => String(answer).slice(0, 160))
        };
        const group = topics.get(topic) || { topic, correct: 0, total: 0 };
        group.total += 1;
        if (result.correct) group.correct += 1;
        topics.set(topic, group);
        return result;
    });

    const topicResults = Array.from(topics.values())
        .map(({ topic, correct, total }) => ({
            topic,
            correct,
            total,
            percentage: Math.round((correct / total) * 100)
        }))
        .sort((left, right) => left.percentage - right.percentage || left.topic.localeCompare(right.topic));

    return {
        version: 1,
        subjectId,
        chapterName,
        generatedAt: new Date().toISOString(),
        questionCount: questionResults.length,
        correctCount: questionResults.filter(({ correct }) => correct).length,
        topics: topicResults,
        responses: questionResults
    };
}

function appendText(parent, tagName, text, className) {
    const element = document.createElement(tagName);
    if (className) element.className = className;
    element.textContent = text;
    parent.appendChild(element);
    return element;
}

function hasPremiumReportAccess(user = auth.currentUser) {
    return Boolean(
        user?.emailVerified
        && typeof user.email === 'string'
        && PREMIUM_EMAILS.has(user.email.trim().toLowerCase())
    );
}

function renderTopicReport(container, report, { locked = !hasPremiumReportAccess() } = {}) {
    const section = document.createElement('section');
    section.className = `topic-report${locked ? ' is-locked' : ''}`;
    section.setAttribute('aria-label', 'Topic performance SWOT analysis');
    if (locked) {
        const notice = document.createElement('div');
        notice.className = 'topic-report-paywall';
        notice.setAttribute('role', 'status');
        appendText(notice, 'strong', 'SWOT analysis is a Premium feature');
        appendText(notice, 'p', 'Upgrade to Premium to view and download your topic-by-topic strengths, weaknesses, and areas to improve. Premium access options will be announced soon.');
        section.appendChild(notice);
    } else {
        const accessNotice = document.createElement('p');
        accessNotice.className = 'topic-report-premium-notice';
        accessNotice.textContent = 'Premium SWOT analysis access is active for this account.';
        section.appendChild(accessNotice);
    }
    appendText(section, 'h3', 'Topic SWOT analysis', 'topic-report-title');
    appendText(section, 'p', 'Topics are inferred from the questions and explanations in this attempt. Small samples may be less conclusive, and any chapter-bank mismatch will be reflected in the inferred topics.', 'topic-report-note');

    const grid = document.createElement('div');
    grid.className = 'topic-report-grid';
    const groups = [
        { title: 'Strengths', description: 'Topics answered correctly at least 80% of the time.', topics: report.topics.filter(({ percentage }) => percentage >= 80) },
        { title: 'Weaknesses', description: 'Topics below 60% accuracy; prioritize these for review.', topics: report.topics.filter(({ percentage }) => percentage < 60) },
        { title: 'Opportunities', description: 'Developing topics to strengthen with more practice.', topics: report.topics.filter(({ percentage }) => percentage >= 60 && percentage < 80) },
        { title: 'Risks to readiness', description: 'Topics below 40% that may need urgent revision.', topics: report.topics.filter(({ percentage }) => percentage < 40) }
    ];

    groups.forEach(({ title, description, topics }) => {
        const card = document.createElement('article');
        card.className = 'topic-report-card';
        appendText(card, 'h4', title);
        appendText(card, 'p', description, 'topic-report-note');
        if (!topics.length) {
            appendText(card, 'p', 'No topics in this category for this attempt.', 'topic-report-empty');
        } else {
            const list = document.createElement('ul');
            topics.forEach(({ topic, correct, total, percentage }) => {
                appendText(list, 'li', `${topic}: ${correct}/${total} correct (${percentage}%)`);
            });
            card.appendChild(list);
        }
        grid.appendChild(card);
    });
    section.appendChild(grid);

    const details = document.createElement('details');
    appendText(details, 'summary', 'Review topic-by-topic results');
    const list = document.createElement('ul');
    list.className = 'topic-report-results';
    report.topics.forEach(({ topic, correct, total, percentage }) => {
        appendText(list, 'li', `${topic}: ${correct}/${total} correct (${percentage}%)`);
    });
    details.appendChild(list);
    section.appendChild(details);
    container.appendChild(section);
}

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (character) => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;'
    })[character]);
}

function downloadTopicReport(report, title, completedAt) {
    if (!report || report.version !== 1 || !Array.isArray(report.topics) || !Array.isArray(report.responses)) {
        throw new TypeError('This test does not have a downloadable topic report.');
    }

    const generatedDate = report.generatedAt ? new Date(report.generatedAt) : null;
    const completedDate = typeof completedAt?.toDate === 'function'
        ? completedAt.toDate()
        : (Number.isFinite(completedAt) ? new Date(completedAt) : generatedDate);
    const dateText = completedDate && !Number.isNaN(completedDate.getTime())
        ? completedDate.toLocaleString()
        : 'Date unavailable';
    const summaryRows = report.topics.map(({ topic, correct, total, percentage }) =>
        `<tr><td>${escapeHtml(topic)}</td><td>${correct}/${total}</td><td>${percentage}%</td></tr>`
    ).join('');
    const reviewRows = report.responses.map(({ topic, question, correct, selectedAnswers, correctAnswers }) =>
        `<tr><td>${escapeHtml(topic)}</td><td>${escapeHtml(question || 'Question text unavailable')}</td><td>${correct ? 'Correct' : 'Review'}</td><td>${escapeHtml(selectedAnswers.join(', ') || 'No answer')}</td><td>${escapeHtml(correctAnswers.join(', '))}</td></tr>`
    ).join('');
    const html = `<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>SWOT report - ${escapeHtml(title)}</title><style>body{font:16px/1.5 Arial,sans-serif;max-width:900px;margin:2rem auto;padding:0 1rem;color:#1f1f1f}h1,h2{color:#4a000e}table{border-collapse:collapse;width:100%;margin:1rem 0 2rem}th,td{border:1px solid #ddd;padding:.55rem;text-align:left;vertical-align:top}th{background:#f8f2f3}.note{color:#555}.print{padding:.6rem 1rem;background:#6b0518;color:#fff;border:0;border-radius:4px}@media print{.print{display:none}body{margin:0}}</style><body><button class="print" onclick="window.print()">Print / Save as PDF</button><h1>Chapter test SWOT report</h1><p><strong>${escapeHtml(title)}</strong></p><p>Completed: ${escapeHtml(dateText)}</p><p>Score: ${report.correctCount}/${report.questionCount} questions (${Math.round(report.correctCount / report.questionCount * 100)}%)</p><p class="note">Topic estimates are inferred from question text and explanations; any mismatch in the chapter's question bank will be reflected in the inferred topics. Review question-level results alongside these topic summaries.</p><h2>Topic performance</h2><table><thead><tr><th>Topic</th><th>Correct</th><th>Accuracy</th></tr></thead><tbody>${summaryRows}</tbody></table><h2>Question review</h2><table><thead><tr><th>Topic</th><th>Question</th><th>Result</th><th>Your answer</th><th>Expected answer</th></tr></thead><tbody>${reviewRows}</tbody></table></body></html>`;
    const blob = new Blob([html], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    const filename = String(title).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 70) || 'chapter-test';
    link.href = url;
    link.download = `road-to-ca-${filename}-swot-report.html`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export { createTopicReport, renderTopicReport, downloadTopicReport, hasPremiumReportAccess };
