function showHome() {

    document.getElementById("content").innerHTML = `

    <div class="content-box">

        <h2>🏠 Home</h2>

        <p>
            Welcome to MTBE / Metathesis Training Platform
        </p>


<p>
    Train • Practice • Assess
</p>

<p style="
color:#94a3b8;
font-size:14px;
margin-top:10px;
">
MTBE: ${mtbeQuestions.length} | Meta: ${metathesisQuestions.length} | Total: ${mtbeQuestions.length + metathesisQuestions.length}
</p>


        <hr>

<h3>📊 Statistics</h3>

<div style="
width:120px;
height:3px;
background:#f5a623;
border-radius:10px;
margin-bottom:25px;
"></div>


<div style="
display:flex;
flex-wrap:wrap;
gap:20px;
margin-top:20px;
">




<div class="stats-card"
onclick="showMTBE()" style="
background:#1d4ed8;
padding:20px;
border-radius:12px;
min-width:150px;
text-align:center;
cursor:pointer;
">
<h2>${mtbeQuestions.length}</h2>
<p>MTBE Questions</p>
</div>


<div class="stats-card"
onclick="showMeta()" style="
background:#15803d;
padding:20px;
border-radius:12px;
min-width:150px;
text-align:center;
cursor:pointer;
">
<h2>${metathesisQuestions.length}</h2>
<p>Metathesis Questions</p>
</div>


<div class="stats-card"
onclick="startCombinedExam()" style="
background:#d97706;
padding:20px;
border-radius:12px;
min-width:150px;
text-align:center;
cursor:pointer;
">
<h2>${mtbeQuestions.length + metathesisQuestions.length}</h2>
<p>Total Questions</p>
</div>

<div class="stats-card"
onclick="showExams()" style="
background:#6d28d9;
padding:20px;
border-radius:12px;
min-width:150px;
text-align:center;
cursor:pointer;
">


<h2>4</h2>

<p>Available Exams</p>

<p style="
font-size:12px;
opacity:0.8;
margin-top:6px;
">
MTBE • META • Combined • Random
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
}


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



        html += `

        </div>

        `;

    });

    html += `

    </div>

    `;

    document.getElementById("content").innerHTML = html;
}


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

function startCombinedExam() {

    currentQuestions = [
        ...mtbeQuestions,
        ...metathesisQuestions
    ];

    currentQuestion = 0;

    score = 0;

    showQuestion();
}

function startCombinedExam() {

    examTitle = "🎯 Combined Exam";

    currentQuestions = [
        ...mtbeQuestions,
        ...metathesisQuestions
    ];

    currentQuestion = 0;

    score = 0;

    showQuestion();
}

function startRandomCombinedExam() {

    examTitle = "🎲 Random Combined Exam";

    const allQuestions = [
        ...mtbeQuestions,
        ...metathesisQuestions
    ];

    currentQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);

    currentQuestion = 0;

    score = 0;

    showQuestion();
}

function showQuestion() {

    const q = currentQuestions[currentQuestion];

    let html = `

    <div class="content-box">

        <div style="
        background:#1e293b;
        padding:12px 20px;
        border-radius:12px;
        margin-bottom:15px;
        border-left:4px solid #f5a623;
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
        border-left:3px solid #f5a623;
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
        onclick="checkAnswer()">
            Submit
        </button>

        <button
        id="nextBtn"
        onclick="nextQuestion()"
        disabled>
            Next Question
        </button>

        <div id="result"></div>

    </div>

    `;

    document.getElementById("content").innerHTML = html;
}

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

function showQuestionBank() {

    document.getElementById("content").innerHTML = `

    <div class="content-box">

<button onclick="showHome()">
    🏠 Home
</button>

<br><br>

        <h2>📚 Question Bank</h2>

        <p>
            Select a question bank for study and review.
        </p>

        <hr>

        <button onclick="showMTBE()">
            📘 MTBE Question Bank
        </button>

        <br><br>

        <button onclick="showMeta()">
            📗 Metathesis Question Bank
        </button>

    </div>

    `;
}


function showExams() {

    document.getElementById("content").innerHTML = `

    <div class="content-box">

<button onclick="showHome()">
    🏠 Home
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
        📝 Exams
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
            background:#ef6c00;
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
            background:#6a1b9a;
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

`;

}


showHome();
