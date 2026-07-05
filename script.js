                    // ======================
                    // DASHBOARD
                    // ======================


function showHome() {

      document.getElementById("content").innerHTML = `
      <div class="content-box">

<div style="
text-align:center;
margin-bottom:10px;
">
    <div style="
    display:inline-block;
    padding:12px 28px;
    border-radius:999px;
    background:rgba(255,255,255,0.06);
    border:1px solid rgba(255,255,255,0.08);    
    font-size:20px;
    font-weight:700;

    ">
    🏠 Operations Dashboard
    </div>
</div>

<p style="
text-align:center;
color:#94a3b8;
font-size:14px;
letter-spacing:1px;
margin-top:0;
margin-bottom:20px;
">
Train • Practice • Assess
</p>

<h2 style="
margin-bottom:4px;
">
Training Modules
</h2>

<p style="
color:#94a3b8;
font-size:12px;
opacity:0.75;
margin-top:4px;
margin-bottom:25px;
">

MTBE: ${mtbeQuestions.length} |
Meta: ${metathesisQuestions.length} |
Safety: ${safetyQuestions.length} |
Total: ${mtbeQuestions.length +
         metathesisQuestions.length +
         safetyQuestions.length}

</p>

<div style="
display:flex;
flex-wrap:wrap;
gap:20px;
margin-top:20px;
">
<!-- ================= MTBE CARD ==================================================================== -->


<div class="module-card" style="
background:#0d47a1;
padding:20px;
border-radius:12px;
min-width:190px;
max-width:190px;
min-height:340px;
flex:none;
box-shadow:0 4px 12px rgba(0,0,0,0.25);
transition:0.3s;
cursor:pointer;
">


<div style="
padding-bottom:10px;
margin-bottom:15px;
border-bottom:1px solid rgba(255,255,255,0.15);
text-align:center;
">

<div style="
font-size:24px;
font-weight:bold;
letter-spacing:1px;
">
 📘 MTBE
</div>

</div>


<div
class="action-tile"
onclick="showMTBE()"
style="
background:#0b3d91;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
📚 Question Bank
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Study & Review Questions
</div>

</div>

<div
class="action-tile"
onclick="startMTBE()"
style="
background:#0b3d91;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
📝 Full Exam
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Complete Assessment
</div>

</div>


<div
class="action-tile"
onclick="startRandomMTBEExam()"
style="
background:#0b3d91;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
🎲 Random Exam
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Quick Practice
</div>

</div>

<p style="
font-size:12px;
color:#94a3b8;
margin-top:15px;
text-align:center;
letter-spacing:1px;
">
Study • Practice • Assess
</p>

</div>


<!-- ================= METATHESIS CARD ==================================================================== -->


<div class="module-card" style="
background:#2e7d32;
padding:20px;
border-radius:12px;
min-width:190px;
max-width:190px;
min-height:340px;
flex:none;
box-shadow:0 4px 12px rgba(0,0,0,0.25);
transition:0.3s;
cursor:pointer;
">


<div style="
padding-bottom:10px;
margin-bottom:15px;
border-bottom:1px solid rgba(255,255,255,0.15);
text-align:center;
">

<div style="
font-size:21px;
font-weight:bold;
letter-spacing:1px;
">
📗 METATHESIS
</div>

</div>



<div
class="action-tile"
onclick="showMeta()"
style="
background:#1f6b2a;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
📚 Question Bank
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Study & Review Questions
</div>

</div>


<div
class="action-tile"
onclick="startMetathesis()"
style="
background:#1f6b2a;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
📝 Full Exam
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Complete Assessment
</div>

</div>


<div
class="action-tile"
onclick="startRandomMETATHESISExam()"
style="
background:#1f6b2a;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
🎲 Random Exam
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Quick Practice
</div>

</div>

<p style="
font-size:12px;
color:#94a3b8;
margin-top:15px;
text-align:center;
letter-spacing:1px;
">
Study • Practice • Assess
</p>

</div>

<!-- ================= SAFETY CARD ==================================================================== -->




<div class="module-card" style="
background:#be2d1f;
padding:20px;
border-radius:12px;
min-width:190px;
max-width:190px;
min-height:340px;
flex:none;
box-shadow:0 4px 12px rgba(0,0,0,0.25);
transition:0.3s;
cursor:pointer;
">


<div style="
padding-bottom:10px;
margin-bottom:15px;
border-bottom:1px solid rgba(255,255,255,0.15);
text-align:center;
">

<div style="
font-size:24px;
font-weight:bold;
letter-spacing:1px;
">
🦺 SAFETY
</div>

</div>


<div
class="action-tile"
onclick="showSafety()"
style="
background:#a62618;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
📚 Question Bank
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Study & Review Questions
</div>

</div>


<div
class="action-tile"
onclick="startSafety()"
style="
background:#a62618;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
📝 Full Exam
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Complete Assessment
</div>

</div>


<div
class="action-tile"
onclick="startRandomSAFETYExam()"
style="
background:#a62618;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
🎲 Random Exam
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Quick Practice
</div>

</div>

<p style="
font-size:12px;
color:#94a3b8;
margin-top:15px;
text-align:center;
letter-spacing:1px;
">
Study • Practice • Assess
</p>

</div>

<!-- ================= COMBINED CARD ==================================================================== -->



<div class="module-card" style="
background:#5b21b6;
padding:20px;
border-radius:12px;
min-width:190px;
max-width:190px;
min-height:340px;
flex:none;
box-shadow:0 4px 12px rgba(0,0,0,0.25);
transition:0.3s;
cursor:pointer;
">


<div style="
padding-bottom:10px;
margin-bottom:15px;
border-bottom:1px solid rgba(255,255,255,0.15);
text-align:center;
">

<div style="
font-size:24px;
font-weight:bold;
letter-spacing:1px;
">
🎯 COMBINED
</div>

</div>


<div
class="action-tile"
onclick="showCombinedQuestionBank()"
style="
background:#4c1d95;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
📚 Question Bank
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Study All Questions
</div>

</div>



<div
class="action-tile"
onclick="startCombinedExam()"
style="
background:#4c1d95;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
📝 Full Exam
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Complete Assessment
</div>

</div>


<div
class="action-tile"
onclick="startRandomCombinedExam()"
style="
background:#4c1d95;
padding:12px;
border-radius:10px;
margin-top:8px;
cursor:pointer;
text-align:center;
border:1px solid rgba(255,255,255,0.1);
box-shadow:0 0 10px rgba(255,255,255,0.05);
">

<div style="
font-size:16px;
font-weight:bold;
">
🎲 Random Exam
</div>

<div style="
font-size:13px;
opacity:0.85;
margin-top:4px;
">
Quick Practice
</div>

</div>

<p style="
font-size:12px;
color:#94a3b8;
margin-top:15px;
text-align:center;
letter-spacing:1px;
">
MTBE • Metathesis • Safety
</p>

</div>

</div>

`;

}

      let collapsedSections = {};

      let currentPage = "";

function toggleSection(sectionName) {

    collapsedSections[sectionName] =
        !collapsedSections[sectionName];

    if (currentPage === "mtbe") {
        showMTBE();
    }

    if (currentPage === "meta") {
        showMeta();
    }

if (currentPage === "safety") {
    showSafety();
}

}

                    // ======================
                    // MTBE
                    // ======================


function showMTBE() {

currentPage = "mtbe";

    let html = `

    <div class="content-box">

        <button onclick="showHome()">
            🏠 Home
        </button>

        <button onclick="showQuestionBank()">
            ← Back
        </button>

        <br><br>

        <div style="
        background:#1e3a8a;
        padding:10px 20px;
        border-radius:12px;
        margin-top:8px;
        margin-bottom:10px;
        border-left:4px solid #93c5fd;
        box-shadow:0 0 12px rgba(59,130,246,0.15);
        ">

            <h2 style="margin-bottom:5px;">
                📘 MTBE Question Bank
            </h2>

            <p style="
            margin:0;
            padding-left:10px;
            opacity:0.9;
            ">
                Total Questions: ${mtbeQuestions.length}
            </p>

</div>

`;

let currentSection = "";

const sections = {};

mtbeQuestions.forEach((q) => {

    if (q.section) {

        currentSection = q.section;

        if (!sections[currentSection]) {
            sections[currentSection] = [];
        }
    }

    sections[currentSection].push(q);

});

Object.keys(sections).forEach((sectionName) => {

    const isCollapsed =
        collapsedSections[sectionName] || false;

    html += `

<div
onclick="toggleSection('${sectionName}')"
style="
background:#1e40af;
padding:12px 15px;
margin-top:25px;
border-radius:12px;
border-left:5px solid #93c5fd;
box-shadow:0 0 8px rgba(59,130,246,0.15);
cursor:pointer;
"
>

<h3 style="
margin:0;
color:white;
">
${isCollapsed ? '▶' : '▼'}
📂 ${sectionName}
</h3>

</div>

`;

    if (isCollapsed) {
        return;
    }

    sections[sectionName].forEach((q, index) => {

        html += `

<div style="
background:#0f172a;
padding:15px;
margin-top:12px;
border-radius:12px;
border:1px solid #334155;
box-shadow:0 0 8px rgba(59,130,246,0.08);
">

<h3 style="
color:#93c5fd;
margin:0 0 3px 0;
">
Question ${index + 1}
</h3>

<p style="
font-size:11px;
letter-spacing:0.5px;
text-transform:uppercase;
color:#64748b;
margin:0 0 10px 0;
">
${sectionName}
</p>

<p style="
font-size:18px;
margin-bottom:10px;
line-height:1.3;
background:rgba(255,255,255,0.03);
padding:8px 12px;
border-radius:8px;
border-left:3px solid #93c5fd;
">
${q.question}
</p>

`;

        q.options.forEach((option, i) => {

            html += `

<p style="margin:8px 0;">

${String.fromCharCode(65 + i)}.
${option}

${i === q.correct ? ' ✅' : ''}

</p>

`;

        });

        html += `

</div>

`;



    });

});


    html += `

    </div>

    `;

    document.getElementById("content").innerHTML = html;
}


                    // ======================
                    // METATHESIS
                    // ======================

function showMeta() {

currentPage = "meta";

    let html = `

    <div class="content-box">

        <button onclick="showHome()">
            🏠 Home
        </button>

        <button onclick="showQuestionBank()">
            ← Back
        </button>

        <br><br>

<div style="
background:#166534;
padding:10px 20px;
border-radius:12px;
margin-top:8px;
margin-bottom:10px;
border-left:4px solid #86efac;
box-shadow:0 0 12px rgba(34,197,94,0.15);
">

<h2 style="
margin-bottom:5px;
">
📗 Metathesis Question Bank
</h2>

<p style="
margin:0;
padding-left:12px;
opacity:0.9;
">
    Total Questions: ${metathesisQuestions.length}
</p>

</div>

    `;

let currentSection = "";

const sections = {};

metathesisQuestions.forEach((q) => {

    if (q.section) {

        currentSection = q.section;

        if (!sections[currentSection]) {
            sections[currentSection] = [];
        }
    }

    sections[currentSection].push(q);

});

Object.keys(sections).forEach((sectionName) => {

    const isCollapsed =
        collapsedSections[sectionName] || false;

    html += `

<div
onclick="toggleSection('${sectionName}')"
style="
background:#166534;
padding:12px 15px;
margin-top:25px;
border-radius:12px;
border-left:5px solid #86efac;
box-shadow:0 0 8px rgba(34,197,94,0.15);
cursor:pointer;
">

<h3 style="
margin:0;
color:white;
">
${isCollapsed ? '▶' : '▼'}
📂 ${sectionName}
</h3>

</div>

`;

    if (isCollapsed) {
        return;
    }

    sections[sectionName].forEach((q, index) => {

        html += `

<div style="
background:#0f172a;
padding:15px;
margin-top:12px;
border-radius:12px;
border:1px solid #334155;
">

<h3 style="
color:#86efac;
margin:0 0 5px 0;
">
Question ${index + 1}
</h3>

<p style="
font-size:11px;
letter-spacing:0.5px;
text-transform:uppercase;
color:#64748b;
margin:0 0 10px 0;
">
${sectionName}
</p>

<p style="
font-size:18px;
margin-bottom:10px;
line-height:1.3;
background:rgba(255,255,255,0.03);
padding:8px 12px;
border-radius:8px;
border-left:3px solid #86efac;
">
${q.question}
</p>

`;

        q.options.forEach((option, i) => {

            html += `

<p style="
margin:8px 0;
">

${String.fromCharCode(65 + i)}.
${option}

${i === q.correct ? ' ✅' : ''}

</p>

`;

        });

        html += `

</div>

`;

    });



    });



    html += `


    </div>


    `;



document.getElementById("content").innerHTML = html;
}




                    // ======================
                    // SAFETY
                    // ======================

function showSafety() {


    currentPage = "safety";

      let html = `

    <div class="content-box">

        <button onclick="showHome()">
            🏠 Home
        </button>

        <button onclick="showQuestionBank()">
            ← Back
        </button>

        <br><br>

        <div style="
        background:#dc2626;
        padding:10px 20px;
        border-radius:12px;
        margin-top:8px;
        margin-bottom:10px;
        border-left:4px solid #fecaca;
        box-shadow:0 0 12px rgba(239,68,68,0.15);
        ">

            <h2 style="margin-bottom:5px;">
                🦺 Safety Question Bank
            </h2>

            <p style="
            margin:0;
            padding-left:12px;
            opacity:0.9;
            ">
                Total Questions: ${safetyQuestions.length}
            </p>

        </div>

    `;

    safetyQuestions.forEach((q, index) => {

        html += `

        <div style="
        background:#0f172a;
        padding:15px;
        margin-top:12px;
        border-radius:12px;
        border:1px solid #334155;
        ">

        <h3 style="
        color:#fecaca;
        margin:0 0 5px 0;
        ">
        Question ${index + 1}
        </h3>

        <p style="
        font-size:18px;
        margin-bottom:10px;
        line-height:1.3;
        background:rgba(255,255,255,0.03);
        padding:8px 12px;
        border-radius:8px;
        border-left:3px solid #fecaca;
        ">
        ${q.question}
        </p>

        `;

        q.options.forEach((option, i) => {

            html += `

            <p style="margin:8px 0;">

            ${String.fromCharCode(65 + i)}.
            ${option}

            ${i === q.correct ? ' ✅' : ''}

            </p>

            `;

        });

        html += `

        </div>

        `;

    });

    html += `

    </div>

    `;

    document.getElementById("content").innerHTML = html;
}



function showCombinedQuestionBank() {

    currentPage = "combined";

    const combinedQuestions = [
        ...mtbeQuestions,
        ...metathesisQuestions,
        ...safetyQuestions
    ];

    let html = `

    <div class="content-box">

        <button onclick="showHome()">
            🏠 Home
        </button>

        <button onclick="showQuestionBank()">
            ← Back
        </button>

        <br><br>

        <div style="
        background:#5b21b6;
        padding:10px 20px;
        border-radius:12px;
        margin-top:8px;
        margin-bottom:10px;
        border-left:4px solid #ddd6fe;
        box-shadow:0 0 12px rgba(168,85,247,0.15);
        ">

            <h2 style="margin-bottom:5px;">
                🎯 Combined Question Bank
            </h2>

            <p style="
            margin:0;
            padding-left:12px;
            opacity:0.9;
            ">
                Total Questions: ${combinedQuestions.length}
            </p>

        </div>

    `;

    combinedQuestions.forEach((q, index) => {
    if (!q) return;
        html += `

        <div style="
        background:#0f172a;
        padding:15px;
        margin-top:12px;
        border-radius:12px;
        border:1px solid #334155;
        ">

        <h3 style="
        color:#ddd6fe;
        margin:0 0 5px 0;
        ">
        Question ${index + 1}
        </h3>

        <p style="
        font-size:18px;
        margin-bottom:10px;
        line-height:1.3;
        background:rgba(255,255,255,0.03);
        padding:8px 12px;
        border-radius:8px;
        border-left:3px solid #ddd6fe;
        ">
        ${q.question}
        </p>

        `;

        q.options.forEach((option, i) => {

            html += `

            <p style="margin:8px 0;">

            ${String.fromCharCode(65 + i)}.
            ${option}

            ${i === q.correct ? ' ✅' : ''}

            </p>

            `;

        });

        html += `

        </div>

        `;

    });

    html += `

    </div>

    `;

    document.getElementById("content").innerHTML = html;
}

                    // ======================
                    // EXAMS
                    // ======================


let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let examTitle = "";


function startMTBE() {

    examTitle = "📘 MTBE Exam";

    currentQuestions = mtbeQuestions;

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


function startMetathesis() {

    examTitle = "📗 Metathesis Exam";

    currentQuestions = metathesisQuestions;

    currentQuestion = 0;

    score = 0;

    showQuestion();
}

function startSafety() {

    examTitle = "🦺 Safety Exam";

    currentQuestions = safetyQuestions;

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


function startCombinedExam() {

    examTitle = "🎯 Combined Exam";

    const allQuestions = [
        ...mtbeQuestions,
        ...metathesisQuestions,
        ...safetyQuestions
    ];

    currentQuestions = [...allQuestions];

    currentQuestion = 0;

    score = 0;

    showQuestion();
}



function startRandomCombinedExam() {

    examTitle = "🎲 Random Combined Exam";

    const allQuestions = [
        ...mtbeQuestions,
        ...metathesisQuestions,
        ...safetyQuestions
    ];

    currentQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);

    currentQuestion = 0;
    score = 0;

    showQuestion();
}



function startRandomMTBEExam() {

    examTitle = "🎲 Random MTBE Exam";

    const allQuestions = [
        ...mtbeQuestions,
    ];

    currentQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


function startRandomMETATHESISExam() {

    examTitle = "🎲 Random Metathesis Exam";

    const allQuestions = [
        ...metathesisQuestions,
    ];

    currentQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


function startRandomSAFETYExam() {

    examTitle = "🎲 Random Safety Exam";

    const allQuestions = [
        ...safetyQuestions,
    ];

    currentQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);

    currentQuestion = 0;

    score = 0;

    showQuestion();
}




                    // ======================
                    // QUESTION ENGINE
                    // ======================



function showQuestion() {

    const q = currentQuestions[currentQuestion];

let examColor = "#f5a623";

if (examTitle.includes("MTBE")) {
    examColor = "#3b82f6";
}

if (examTitle.includes("Metathesis")) {
    examColor = "#22c55e";
}

if (examTitle.includes("Safety")) {
    examColor = "#ef4444";
}

if (examTitle.includes("Combined")) {
    examColor = "#a855f7";
}

let buttonColor = examColor;

let html = `

<div class="content-box">

<button onclick="showHome()">
🏠 Dashboard
</button>

<br><br>

<div style="
background:#1e293b;
padding:12px 20px;
border-radius:12px;
margin-bottom:15px;
border-left:4px solid ${examColor};
">

        <div style="
        background:#1e293b;
        padding:12px 20px;
        border-radius:12px;
        margin-bottom:15px;
        border-left:4px solid ${examColor};
        ">

            <h2 style="margin-bottom:5px;">
                ${examTitle}
            </h2>

            <p style="margin:0;">
                Question ${currentQuestion + 1}
                of
                ${currentQuestions.length}
            </p>

        </div>

        <div style="
        background:rgba(255,255,255,0.03);
        padding:12px;
        border-radius:10px;
        border-left:3px solid ${examColor};
        margin-bottom:15px;
        ">

            <h3 style="
            margin:0;
            ">
                ${q.question}
            </h3>

        </div>

    `;

    q.options.forEach((option, i) => {

        html += `

        <p style="
        margin:12px 0;
        ">

            <input
            type="radio"
            name="answer"
            value="${i}">

            ${String.fromCharCode(65 + i)}. ${option}

        </p>

        `;

    });

    html += `


<button
id="submitBtn"
onclick="checkAnswer()"
style="
background:${buttonColor};
min-width:140px;
height:45px;
font-weight:bold;
">
✅ Submit Answer
</button>

<button
id="nextBtn"
onclick="nextQuestion()"
disabled
style="
background:${buttonColor};
min-width:140px;
height:45px;
font-weight:bold;
">
➡️ Next Question
</button>


        <div id="result"></div>

    </div>

    `;

    document.getElementById("content").innerHTML = html;
}



                    // ======================
                    // ANSWER PROCESSIN
                    // ======================


function checkAnswer() {

    const selected =
    document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {

        alert("Select an answer");

        return;
    }

    const chosen =
    Number(selected.value);

    const correct =
    currentQuestions[currentQuestion].correct;

    if (chosen === correct) {

        score++;

        document.getElementById("result").innerHTML = `

        <p style="color:green;font-weight:bold;font-size:18px;">
            ✅ Correct
        </p>

        `;

    } else {


     document.getElementById("result").innerHTML = `

     <p style="color:red;font-weight:bold;font-size:18px;">
       ❌ Incorrect
       </p>

     <p style="color:green;font-weight:bold;font-size:18px;">
        ✅ Correct Answer:
       ${currentQuestions[currentQuestion].options[correct]}
      </p>


        `;

    }

    document
    .querySelectorAll('input[name="answer"]')
    .forEach(r => r.disabled = true);

    document.getElementById("submitBtn").disabled = true;

    document.getElementById("nextBtn").disabled = false;
}


                    // ======================
                    // NAVIGATION
                    // ======================



function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= currentQuestions.length) {

        finishExam();

        return;
    }

    showQuestion();
}

function finishExam() {

    const percent =
    Math.round(
        (score / currentQuestions.length) * 100
    );

    const passed = percent >= 80;

    document.getElementById("content").innerHTML = `

    <div class="content-box">

        <div style="
        background:${passed ? '#166534' : '#991b1b'};
        padding:15px 20px;
        border-radius:12px;
        margin-bottom:20px;
        border-left:4px solid ${passed ? '#86efac' : '#fca5a5'};
        ">

            <h2 style="margin:0 0 8px 0;">
                🎉 Exam Completed
            </h2>

            <p style="margin:0;">
                ${passed ? '✅ PASS' : '❌ FAIL'}
            </p>

        </div>

        <div style="
        background:#0f172a;
        padding:20px;
        border-radius:12px;
        border:1px solid #334155;
        ">

            <h3>📊 Results Summary</h3>

            <p>
                <strong>Score:</strong>
                ${score} / ${currentQuestions.length}
            </p>

            <p>
                <strong>Percentage:</strong>
                ${percent}%
            </p>

            <p style="
            font-size:20px;
            font-weight:bold;
            color:${passed ? '#86efac' : '#fca5a5'};
            ">
                ${passed
                    ? '🌟 Excellent Work!'
                    : '💪 Keep Practicing and Try Again!'}
            </p>

        </div>

        <br>

        <button onclick="showHome()">
            🏠 Return Home
        </button>

        <button onclick="restartExam()">
            🔄 Retake Exam
        </button>

    </div>

    `;
}




                    // ======================
                    // LEARNING MODULES
                    // ======================



function showQuestionBank() {

    document.getElementById("content").innerHTML = `

    <div class="content-box">

        <button onclick="showHome()">
            🏠 Dashboard
        </button>

        <br><br>

        <h2>📚 Learning Modules</h2>

        <p>
            Select a training module to study and review.
        </p>

        <hr>

        <button onclick="showMTBE()">
            📘 MTBE Module
        </button>

        <br><br>

        <button onclick="showMeta()">
            📗 Metathesis Module
        </button>

        <br><br>

        <button onclick="showSafety()">
            🦺 Safety Module
        </button>

    </div>

    `;
}




                    // ======================
                    // ASSESSMENT CENTER
                    // ======================

function showExams() {

        document.getElementById("content").innerHTML = `

        <div class="content-box">

        <button onclick="showHome()">
        🏠 Dashboard
        </button>

<br><br>


<div style="
        background:#1e293b;
        padding:15px 20px;
        border-radius:12px;
        margin-bottom:20px;
        border-left:4px solid #f5a623;
        ">

        <h2 style="margin-bottom:5px;">
        📝 Assessment Center
        </h2>

        <p style="margin:0;">
        Select an exam to start.
        </p>
</div>


        <div style="
        display:flex;
        flex-wrap:wrap;
        gap:20px;
        margin-top:20px;
        ">


<div style="
        background:#0d47a1;
        padding:20px;
        border-radius:12px;
        min-width:150px;
        text-align:center;
        ">

        <h2>📘</h2>
        <h3>MTBE</h3>
        <p>${mtbeQuestions.length} Questions</p>

        <button onclick="startMTBE()">
        Start Exam
        </button>

</div>


<div style="
        background:#2e7d32;
        padding:20px;
        border-radius:12px;
        min-width:150px;
        text-align:center;
        ">

        <h2>📗</h2>
        <h3>Metathesis</h3>
        <p>${metathesisQuestions.length} Questions</p>

        <button onclick="startMetathesis()">
        Start Exam
        </button>
</div>


<div style="
        background:#dc2626;
        padding:20px;
        border-radius:12px;
        min-width:150px;
        text-align:center;
        ">

        <h2>🦺</h2>
        <h3>Safety</h3>
        <p>${safetyQuestions.length} Questions</p>

        <button onclick="startSafety()">
        Start Exam
        </button>
</div>


<div style="
        background:#6a1b9a;
        padding:20px;
        border-radius:12px;
        min-width:150px;
        text-align:center;
        ">

        <h2>🎯</h2>
        <h3>Combined</h3>
        <p>${mtbeQuestions.length + metathesisQuestions.length} Questions</p>

        <button onclick="startCombinedExam()">
        Start Exam
        </button>
</div>


<div style="
        background:#ef6c00;
        padding:20px;
        border-radius:12px;
        min-width:150px;
        text-align:center;
        ">

        <h2>🎲</h2>
        <h3>Random</h3>
        <p>40 Questions</p>

        <button onclick="startRandomCombinedExam()">
        Start Exam
        </button>
</div>


</div>


</div>


`;

}

console.log("SCRIPT LOADED");

showHome();
