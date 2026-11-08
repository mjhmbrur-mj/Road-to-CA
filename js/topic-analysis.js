import { auth } from './firebase-client.js';

const PREMIUM_EMAILS = new Set(['mjhmbrur@gmail.com']);
const PASS_PERCENTAGE = 45;

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

function createTopicReport({
    subjectId,
    chapterName,
    responses,
    marksPerQuestion = 2,
    candidateName = auth.currentUser?.displayName || 'Candidate',
    candidatePhotoURL = auth.currentUser?.photoURL || ''
}) {
    if (!Array.isArray(responses) || responses.length === 0) {
        throw new TypeError('A topic report requires at least one answered test question.');
    }
    if (!Number.isInteger(marksPerQuestion) || marksPerQuestion < 1) {
        throw new TypeError('The report requires a valid mark value per question.');
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

    const correctCount = questionResults.filter(({ correct }) => correct).length;
    const totalMarks = questionResults.length * marksPerQuestion;
    const score = correctCount * marksPerQuestion;
    const percentage = Math.round((score / totalMarks) * 100);

    return {
        version: 1,
        subjectId,
        chapterName,
        candidateName: String(candidateName || 'Candidate').slice(0, 120),
        candidatePhotoURL: typeof candidatePhotoURL === 'string' && candidatePhotoURL.startsWith('https://')
            ? candidatePhotoURL.slice(0, 2048)
            : '',
        marksPerQuestion,
        score,
        totalMarks,
        percentage,
        passed: percentage >= PASS_PERCENTAGE,
        generatedAt: new Date().toISOString(),
        questionCount: questionResults.length,
        correctCount,
        topics: topicResults
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

function previewTopicReport(report, title, completedAt) {
    if (!report
        || report.version !== 1
        || !Array.isArray(report.topics)
        || report.topics.length < 1
        || report.topics.length > 30
        || !Number.isInteger(report.score)
        || !Number.isInteger(report.totalMarks)
        || report.totalMarks < 1
        || report.score < 0
        || report.score > report.totalMarks
        || !Number.isInteger(report.percentage)
        || typeof report.passed !== 'boolean'
        || !Number.isInteger(report.correctCount)
        || !Number.isInteger(report.questionCount)
        || !Number.isInteger(report.marksPerQuestion)
        || report.questionCount < 1
        || report.correctCount < 0
        || report.correctCount > report.questionCount
        || report.marksPerQuestion !== 2
        || report.totalMarks !== report.questionCount * report.marksPerQuestion
        || report.score !== report.correctCount * report.marksPerQuestion
        || report.percentage !== Math.round(report.score / report.totalMarks * 100)
        || report.passed !== (report.percentage >= PASS_PERCENTAGE)
        || !report.topics.every((item) => item
            && typeof item.topic === 'string'
            && Number.isInteger(item.correct)
            && Number.isInteger(item.total)
            && item.total > 0
            && item.correct >= 0
            && item.correct <= item.total
            && Number.isInteger(item.percentage)
            && item.percentage >= 0
            && item.percentage <= 100)) {
        throw new TypeError('This test does not have a downloadable topic report.');
    }
    const completedDate = typeof completedAt?.toDate === 'function'
        ? completedAt.toDate()
        : (Number.isFinite(completedAt) ? new Date(completedAt) : new Date(report.generatedAt));
    const dateText = completedDate && !Number.isNaN(completedDate.getTime())
        ? completedDate.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
        : 'Date unavailable';
    const rows = report.topics.map(({ topic, correct, total, percentage }) =>
        `<tr><td>${escapeHtml(topic)}</td><td>${correct} / ${total} correct<br><span>${total - correct} wrong</span></td><td><strong>${percentage}%</strong></td></tr>`
    ).join('');
    const logoUrl = new URL('../logo.png', import.meta.url).href;
    const photo = report.candidatePhotoURL
        ? `<img class="candidate-photo" src="${escapeHtml(report.candidatePhotoURL)}" alt="Candidate photo">`
        : '<div class="candidate-photo candidate-placeholder" aria-label="Candidate photo placeholder">CA</div>';
    const grade = report.percentage >= 65
        ? 'A · DISTINCTION'
        : (report.percentage >= PASS_PERCENTAGE ? 'B · PASSED' : 'C / D / E · FAILED');
    const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Performance Report - ${escapeHtml(title)}</title>
<style>
@page{size:A4 portrait;margin:0}
*{box-sizing:border-box}
body{margin:0;background:#e9e9ed;color:#24242b;font:14px/1.45 Arial,sans-serif}
.toolbar{position:sticky;top:0;z-index:2;display:flex;justify-content:center;gap:12px;padding:14px;background:#28232a}
.toolbar button{min-height:42px;padding:0 20px;border:1px solid #c8a86b;border-radius:6px;background:#6b0518;color:#fff;font-weight:700;cursor:pointer}
.toolbar .close{background:transparent}
.paper{position:relative;width:210mm;height:297mm;margin:20px auto;padding:15mm 16mm 13mm;overflow:hidden;background:#fff;box-shadow:0 12px 45px #0002}
.topline{height:5px;margin:-15mm -16mm 11mm;background:linear-gradient(90deg,#4a000e,#8c1531 68%,#d7b777)}
.masthead{display:flex;align-items:flex-start;justify-content:space-between;gap:8mm}
.masthead-candidate{display:flex;align-items:center;gap:4mm}
.masthead-copy{display:grid;gap:3px}
.eyebrow{margin:0 0 5px;color:#987b42;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase}
h1{margin:0;color:#4a000e;font:700 27px/1.2 Georgia,serif}
.subtitle{margin:7px 0 0;color:#777;font-size:12px}
.logo{width:45mm;height:19mm;object-fit:contain;object-position:right top}
.chapter{margin:12mm 0 7mm;padding:8mm 9mm;border:1px solid #eee6d6;border-left:4px solid #a78343;border-radius:4px;background:linear-gradient(105deg,#fbf8f1,#fff 75%)}
.chapter-label{margin:0 0 4px;color:#8b6a30;font-size:9px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase}
.chapter-name{margin:0;color:#3d1420;font:700 18px/1.35 Georgia,serif}
.candidate-photo{width:21mm;height:21mm;flex:0 0 21mm;border:2px solid #d6bd88;border-radius:50%;object-fit:cover}
.candidate-placeholder{display:grid;place-items:center;background:#f8f3e8;color:#785b2b;font:700 15px Georgia,serif}
.candidate-label{margin:0;color:#927c58;font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase}
.candidate-name{margin:2px 0 0;color:#29232a;font-size:15px;font-weight:700}
.results-layout{display:grid;grid-template-columns:minmax(0,1fr) 52mm;gap:4mm;margin-bottom:10mm;align-items:stretch}
.metrics{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:2mm;margin:0}
.metric{min-height:24mm;padding:4mm 4.5mm;border:1px solid #e8e4de;border-radius:5px;background:#fff}
.metric-label{display:block;color:#81766b;font-size:9px;font-weight:700;letter-spacing:.7px;text-transform:uppercase}
.metric-value{display:block;margin-top:3px;color:#4a000e;font:700 21px/1.15 Georgia,serif}
.metric-sub{display:block;margin-top:2px;color:#777;font-size:9px}
.status{display:inline-block;margin-top:4px;padding:3px 10px;border-radius:20px;font-size:10px;font-weight:700;letter-spacing:.7px}
.status.pass{background:#e8f3e9;color:#25613b}.status.fail{background:#f9e9e9;color:#982d35}
.grading-reference{padding:2.5mm;border:1px solid #e8dfce;border-radius:5px;background:#fbfaf7}
.grading-reference h2{margin:0 0 1.5mm;color:#4a000e;font:700 9px Arial,sans-serif;letter-spacing:.4px;text-transform:uppercase}
.grading-reference table{font-size:7.5px;line-height:1.2}
.grading-reference th{padding:1.2mm 1.5mm;background:#6b0518;font-size:7px;letter-spacing:.2px}
.grading-reference table th:first-child{width:24%}.grading-reference table th:nth-child(2){width:48%}.grading-reference table th:nth-child(3){width:28%;text-align:left}
.grading-reference td{padding:1mm 1.5mm;border-bottom:1px solid #eee9df}
.grading-reference td:first-child{color:#4a000e;font-weight:700}
.grading-reference table td:last-child{text-align:left;color:#5e5551}
.grading-note{margin:1.5mm 0 0;color:#817b77;font-size:6.5px;line-height:1.25}
.section-heading{display:flex;align-items:center;gap:10px;margin:0 0 4mm;color:#4a000e;font:700 16px Georgia,serif}
.section-heading:after{height:1px;flex:1;background:#e8dfce;content:""}
.caption{margin:0 0 3mm;color:#6d5a39;font-size:10px;font-weight:700;letter-spacing:.3px}
table{width:100%;border-collapse:collapse;table-layout:fixed;font-size:10px}
thead{display:table-header-group}
th{padding:3.3mm 3mm;background:#4a000e;color:#fff;text-align:left;font-size:9px;letter-spacing:.45px;text-transform:uppercase}
th:first-child{width:54%}th:nth-child(2){width:29%}th:nth-child(3){width:17%;text-align:right}
td{padding:2.5mm 3mm;border-bottom:1px solid #eee9df;vertical-align:middle}
tbody tr:nth-child(even){background:#fbfaf7}
td:first-child{color:#342931;font-weight:600}
td:nth-child(2){color:#4e4a4b;font-size:9px}
td:nth-child(2) span{color:#908b88}
td:last-child{text-align:right;color:#4a000e;font-variant-numeric:tabular-nums}
.note{margin:5mm 0 0;color:#817b77;font-size:8px;line-height:1.45}
.footer{position:absolute;right:16mm;bottom:9mm;left:16mm;display:flex;justify-content:space-between;padding-top:3mm;border-top:1px solid #e9e2d6;color:#968b7c;font-size:8px}
.paper.compact .topline{margin-bottom:6mm}
.paper.compact .chapter{margin:7mm 0 4mm;padding:4mm 7mm}
.paper.compact .results-layout{margin-bottom:5mm}
.paper.compact .metrics{margin-bottom:0}
.paper.compact .metric{min-height:20mm;padding:2.5mm}
.paper.compact .grading-reference{padding:1.5mm}
.paper.compact .grading-reference th,.paper.compact .grading-reference td{padding:.6mm 1mm}
.paper.compact .grading-note{margin-top:1mm}
.paper.compact .section-heading{margin-bottom:2mm}
.paper.compact .caption{margin-bottom:1mm}
.paper.compact table{font-size:8.5px;line-height:1.2}
.paper.compact th{padding:1mm 2mm;font-size:8px}
.paper.compact td{padding:.6mm 2mm}
.paper.compact td:nth-child(2){font-size:8px}
.paper.compact td:nth-child(2) br{display:none}
.paper.compact .note{margin:3mm 0 0}
@media(max-width:800px){.paper{transform-origin:top center;margin:12px auto;max-width:calc(100vw - 24px);width:210mm;height:297mm}}
@media print{html,body{width:210mm;height:297mm;background:#fff;-webkit-print-color-adjust:exact;print-color-adjust:exact}.toolbar{display:none}.paper{width:210mm;height:297mm;margin:0;box-shadow:none;page-break-after:avoid;break-after:avoid}.paper,.paper *{page-break-inside:avoid;break-inside:avoid}}
</style>
</head>
<body>
<div class="toolbar"><button type="button" onclick="window.print()">Download PDF</button><button class="close" type="button" onclick="window.close()">Close preview</button></div>
<main class="paper${report.topics.length > 10 ? ' compact' : ''}">
<div class="topline"></div>
<header class="masthead"><div class="masthead-candidate">${photo}<div class="masthead-copy"><p class="eyebrow">Road to CA · Candidate Report</p><h1>Chapter Performance</h1><p class="candidate-label">Candidate</p><p class="candidate-name">${escapeHtml(report.candidateName || 'Candidate')}</p><p class="subtitle">Test date · ${escapeHtml(dateText)}</p></div></div><img class="logo" src="${escapeHtml(logoUrl)}" alt="Road to CA"></header>
<section class="chapter"><p class="chapter-label">Tested chapter</p><h2 class="chapter-name">${escapeHtml(title)}</h2></section>
<section class="results-layout" aria-label="Test result summary and grading scale">
<div class="metrics">
<div class="metric"><span class="metric-label">Total score obtained</span><strong class="metric-value">${report.score} / ${report.totalMarks}</strong><span class="metric-sub">${report.correctCount} correct × ${report.marksPerQuestion} marks each</span></div>
<div class="metric"><span class="metric-label">Percentage</span><strong class="metric-value">${report.percentage}%</strong><span class="metric-sub">Certificate Level grading</span></div>
<div class="metric"><span class="metric-label">Result &amp; grade</span><span class="status ${report.passed ? 'pass' : 'fail'}">${grade}</span><span class="metric-sub">Pass mark: 45%</span></div>
</div>
<aside class="grading-reference" aria-label="ICAB Certificate Level grading reference">
<h2>Grading reference</h2>
<table><thead><tr><th>Grade</th><th>Result</th><th>Marks</th></tr></thead><tbody>
<tr><td>A</td><td>Passed with Distinction</td><td>65–99</td></tr>
<tr><td>B</td><td>Passed</td><td>45–64</td></tr>
<tr><td>C / D / E</td><td>Failed</td><td>Below 45</td></tr>
<tr><td>F</td><td>Not Appeared</td><td>Below 45</td></tr>
<tr><td>EP</td><td>Earlier Passed</td><td>Below 45</td></tr>
<tr><td>EX</td><td>Exempted</td><td>Below 45</td></tr>
</tbody></table>
<p class="grading-note">A score of 100% is reported in the top A distinction band. F, EP and EX are exam-status codes and are not inferred from this test.</p>
</aside>
</section>
<section><h2 class="section-heading">Topic Performance</h2><p class="caption">Topic/chapter wise performance</p>
<table><thead><tr><th>Topic/chapter</th><th>Correct/Wrong</th><th>Accuracy</th></tr></thead><tbody>${rows}</tbody></table>
<p class="note">Topic results are inferred from the chapter question bank. Accuracy shows correct answers as a percentage of attempted questions for each topic.</p></section>
<footer class="footer"><span>ROAD TO CA · CERTIFICATE LEVEL</span><span>Generated ${escapeHtml(dateText)}</span></footer>
</main>
</body>
</html>`;
    const preview = window.open('', '_blank');
    if (!preview) throw new Error('The report preview was blocked. Allow pop-ups for this site and try again.');
    preview.document.open();
    preview.document.write(html);
    preview.document.close();
}

export { createTopicReport, renderTopicReport, previewTopicReport, hasPremiumReportAccess };
