                    // ======================
                    // DASHBOARD
                    // ======================


function showHome() {


      document.getElementById("content").innerHTML = `
      <div class="content-box">

                              <!-- DASHBOARD HEADER -->
<div style="
text-align:center;
margin-bottom:10px;
">

                              <!-- DASHBOARD TITLE BADGE -->

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

                              <!-- DASHBOARD DESCRIPTION -->

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

                              <!-- DASHBOARD PAGE TITLE -->

<h2 style="
margin-bottom:4px;
">
Training Modules
</h2>

                              <!-- DASHBOARD PAGE SUBTITLE -->

<p style="
color:#94a3b8;
font-size:12px;
opacity:0.75;
margin-top:4px;
margin-bottom:25px;
">

CO • FO • SSV Training Modules

</p>

                              <!-- DASHBOARD MODULE CARDS CONTAINER -->

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
">




                              <!-- MTBE MODULE HEADER -->

    <div style="
    padding-bottom:10px;
    margin-bottom:15px;
    border-bottom:1px solid rgba(255,255,255,0.15);
    text-align:center;
    ">

                              <!-- MTBE MODULE TITLE -->

        <div style="
        font-size:24px;
        font-weight:bold;
        letter-spacing:1px;
        ">
        📘 MTBE
        </div>

        </div>

                              <!-- MTBE ROLE CARD : FO -->

    <div
    class="action-tile"
    onclick="setMTBERole('FO')"
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
        👷 FO
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Field Operator
        </div>

    </div>

                              <!-- MTBE ROLE CARD : CO -->

    <div
    class="action-tile"
    onclick="setMTBERole('CO')"
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
        👨‍💻 CO
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Console Operator
        </div>

    </div>

                              <!-- MTBE ROLE CARD : SSV -->

    <div
    class="action-tile"
    onclick="setMTBERole('SSV')"
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
        🧑‍💼 SSV
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Shift Supervisor
        </div>

    </div>

                              <!-- MTBE MODULE FOOTER -->

    <p style="
    font-size:12px;
    color:#94a3b8;
    margin-top:15px;
    text-align:center;
    letter-spacing:1px;
    ">
    Select Position
    </p>

</div>

                     <!-- ============ METATHESIS CARD ============= -->



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

                              <!-- METATHESIS MODULE HEADER -->

    <div style="
    padding-bottom:10px;
    margin-bottom:15px;
    border-bottom:1px solid rgba(255,255,255,0.15);
    text-align:center;
    ">

                              <!-- METATHESIS MODULE TITLE -->

        <div style="
        font-size:21px;
        font-weight:bold;
        letter-spacing:1px;
        ">
        📗 METATHESIS
        </div>

    </div>

                              <!-- METATHESIS ROLE CARD : FO -->

    <div
    class="action-tile"
    onclick="setMetathesisRole('FO')"
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
        👷 FO
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Field Operator
        </div>

    </div>

                              <!-- METATHESIS ROLE CARD : CO -->

    <div
    class="action-tile"
    onclick="setMetathesisRole('CO')"
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
        👨‍💻 CO
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Console Operator
        </div>

    </div>

                              <!-- METATHESIS ROLE CARD : SSV -->

    <div
    class="action-tile"
    onclick="setMetathesisRole('SSV')"
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
        🧑‍💼 SSV
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Shift Supervisor
        </div>

    </div>

                              <!-- METATHESIS MODULE FOOTER -->

    <p style="
    font-size:12px;
    color:#94a3b8;
    margin-top:15px;
    text-align:center;
    letter-spacing:1px;
    ">
    Select Position
    </p>

</div>
                              <!-- ============= SAFETY CARD ============== -->


                                        <!-- SAFETY MODULE CARD -->

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

                                         <!-- SAFETY MODULE HEADER -->

    <div style="
    padding-bottom:10px;
    margin-bottom:15px;
    border-bottom:1px solid rgba(255,255,255,0.15);
    text-align:center;
    ">

        <!-- SAFETY MODULE TITLE -->

        <div style="
        font-size:24px;
        font-weight:bold;
        letter-spacing:1px;
        ">
        🦺 SAFETY
        </div>

    </div>

                                        <!-- SAFETY QUESTION BANK CARD -->

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

                                         <!-- SAFETY FULL EXAM CARD -->

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

                                        <!-- SAFETY RANDOM EXAM CARD -->

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

                                         <!-- SAFETY MODULE FOOTER -->

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
                                    <!-- ======= Merge CARD ========== -->

<!-- MERGE MODULE CARD -->

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

                                        <!-- MERGE MODULE HEADER -->

    <div style="
    padding-bottom:10px;
    margin-bottom:15px;
    border-bottom:1px solid rgba(255,255,255,0.15);
    text-align:center;
    ">

                                            <!-- MERGE MODULE TITLE -->

        <div style="
        font-size:24px;
        font-weight:bold;
        letter-spacing:1px;
        ">
        🎯 MERGE
        </div>

                                            <!-- MERGE MODULE DESCRIPTION -->

        <div style="
        font-size:12px;
        opacity:0.8;
        margin-top:6px;
        ">
        MTBE + META + SAFETY
        </div>

    </div>

                                        <!-- MERGE ROLE CARD : FO -->

    <div
    class="action-tile"
    onclick="setMergeRole('FO')"
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
        👷 FO
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Field Operator
        </div>

    </div>

                                        <!-- MERGE ROLE CARD : CO -->

    <div
    class="action-tile"
    onclick="setMergeRole('CO')"
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
        👨‍💻 CO
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Console Operator
        </div>

    </div>

                                        <!-- MERGE ROLE CARD : SSV -->

    <div
    class="action-tile"
    onclick="setMergeRole('SSV')"
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
        🧑‍💼 SSV
        </div>

        <div style="
        font-size:13px;
        opacity:0.85;
        margin-top:4px;
        ">
        Shift Supervisor
        </div>

    </div>

    <!-- MERGE MODULE FOOTER -->

    <p style="
    font-size:12px;
    color:#94a3b8;
    margin-top:15px;
    text-align:center;
    letter-spacing:1px;
    ">
    Merge Assessment
    </p>

</div>

</div>

`;

}

                    /* ================= MTBE ROLES PAGE ================= */


function showMTBERoles() {

    document.getElementById("content").innerHTML = `


                                  <!-- NAVIGATION BUTTONS -->

<button onclick="showHome()">
    🏠 Main Dashboard
</button>

                                     <!-- MTBE ROLES PAGE TITLE -->

<h2 style="
text-align:center;
margin-top:25px;
margin-bottom:10px;
font-size:32px;
font-weight:700;
letter-spacing:1px;
">
    📘 MTBE
</h2>

                                 <!-- MTBE ROLES PAGE DESCRIPTION -->

<p style="
text-align:center;
color:#94a3b8;
margin-bottom:30px;
">
    Select Your Position
</p>

                             <!-- MTBE ROLES POSITION CARDS CONTAINER -->

<div class="training-menu">

                              <!-- MTBE ROLES POSITION CARD : FO -->

    <div
        class="training-card"
        onclick="setMTBERole('FO')"
        style="background:#0d47a1;"
    >
        <div class="training-icon">👷</div>

        <div class="training-title">
            FO
        </div>

        <div class="training-description">
            Field Operator
        </div>

                                 <!-- MTBE ROLES POSITION QUESTION COUNT -->

        <div class="training-description" style="
        margin-top:8px;
        font-weight:bold;
        color:#dbeafe;
        font-size:13px;
        ">
            ${mtbeQuestionsFO.length} Questions
        </div>

            </div>

                               <!-- MTBE ROLES POSITION CARD : CO -->

<div
    class="training-card"
    onclick="setMTBERole('CO')"
    style="background:#0d47a1;"
>

    <div class="training-icon">👨‍💻</div>

    <div class="training-title">
        CO
    </div>

    <div class="training-description">
        Console Operator
    </div>

                                   <!-- MTBE ROLES POSITION QUESTION COUNT -->

    <div class="training-description" style="
    margin-top:6px;
    font-weight:bold;
    color:#bfdbfe;
    ">
        ${mtbeQuestionsCO.length} Questions
    </div>

</div>

                                     <!-- MTBE ROLES POSITION CARD : SSV -->

<div
    class="training-card"
    onclick="setMTBERole('SSV')"
    style="background:#0d47a1;"
>

    <div class="training-icon">🧑‍💼</div>

    <div class="training-title">
        SSV
    </div>

    <div class="training-description">
        Shift Supervisor
    </div>

                                    <!-- MTBE ROLES POSITION QUESTION COUNT -->

    <div class="training-description" style="
    margin-top:6px;
    font-weight:bold;
    color:#bfdbfe;
    ">
        ${mtbeQuestionsSSV.length} Questions
    </div>

</div>

                                  <!-- MTBE ROLES END POSITION CARDS CONTAINER -->

</div>

</div>

`;
}


function showMetathesisRoles() {

    document.getElementById("content").innerHTML = `

    <div class="content-box">

                                     <!-- METATHESIS ROLES NAVIGATION BUTTONS -->

        <button onclick="showHome()">
            🏠 Main Dashboard
        </button>

                                    <!-- METATHESIS ROLES PAGE TITLE -->

<h2 style="
text-align:center;
margin-top:25px;
margin-bottom:10px;
font-size:32px;
font-weight:700;
letter-spacing:1px;
">
    📗 METATHESIS
</h2>

                                  <!-- METATHESIS ROLES PAGE DESCRIPTION -->

<p style="
text-align:center;
color:#94a3b8;
margin-bottom:30px;
">
    Select Your Position
</p>

                              <!-- METATHESIS ROLES POSITION CARDS CONTAINER -->

<div class="training-menu">

                                  <!-- METATHESIS ROLES POSITION CARD : FO -->


    <div
        class="training-card"
        onclick="setMetathesisRole('FO')"
        style="background:#2e7d32;"
    >

        <div class="training-icon">👷</div>

        <div class="training-title">
            FO
        </div>

        <div class="training-description">
            Field Operator
        </div>

                              <!-- METATHESIS ROLES POSITION QUESTION COUNT -->


<div class="training-description" style="
margin-top:8px;
font-weight:bold;
color:#dcfce7;
font-size:13px;
">
    ${metathesisQuestionsFO.length} Questions
</div>

</div>

<!-- METATHESIS ROLES POSITION CARD : CO -->

<div
    class="training-card"
    onclick="setMetathesisRole('CO')"
    style="background:#2e7d32;"
>

    <div class="training-icon">👨‍💻</div>

    <div class="training-title">
        CO
    </div>

    <div class="training-description">
        Console Operator
    </div>

                              <!-- METATHESIS ROLES POSITION QUESTION COUNT -->


    <div class="training-description" style="
    margin-top:8px;
    font-weight:bold;
    color:#dcfce7;
    font-size:13px;
    ">
        ${metathesisQuestionsCO.length} Questions
    </div>

</div>

                              <!-- METATHESIS ROLES POSITION CARD : SSV -->

<div
    class="training-card"
    onclick="setMetathesisRole('SSV')"
    style="background:#2e7d32;"
>

    <div class="training-icon">🧑‍💼</div>

    <div class="training-title">
        SSV
    </div>

    <div class="training-description">
        Shift Supervisor
    </div>

                              <!-- METATHESIS ROLES POSITION QUESTION COUNT -->


    <div class="training-description" style="
    margin-top:8px;
    font-weight:bold;
    color:#dcfce7;
    font-size:13px;
    ">
        ${metathesisQuestionsSSV.length} Questions
    </div>

</div>

                              <!-- METATHESIS ROLES END POSITION CARDS CONTAINER -->

</div>

`;

}



function setMTBERole(role) {
    currentRole = role;
    showMTBEMenu();
}




function showMTBEMenu() {

    document.getElementById("content").innerHTML = `

<div class="content-box">

                              <!-- MTBE MENU NAVIGATION BUTTONS -->

<button onclick="showHome()">
    🏠 Main Dashboard
</button>

<button onclick="showMTBERoles()">
    ↩️ MTBE Dashboard
</button>

                              <!-- MTBE MENU PAGE TITLE -->

<h2 style="
text-align:center;
margin-top:25px;
margin-bottom:30px;
font-size:32px;
font-weight:700;
letter-spacing:1px;
">
📘 MTBE ${currentRole}
</h2>

                              <!-- MTBE MENU TRAINING CARDS CONTAINER -->


<div class="training-menu">

                              <!-- MTBE MENU QUESTION BANK CARD -->

    <div
        class="training-card"
        onclick="showMTBE()"
    >
        <div class="training-icon">📚</div>

        <div class="training-title">
            Question Bank
        </div>

        <div class="training-description">
            Study & Review Questions
        </div>

    </div>

                              <!-- MTBE MENU FULL EXAM CARD -->


<div
    class="training-card"
    onclick="startMTBE()"
>
    <div class="training-icon">📝</div>

    <div class="training-title">
        ${currentRole} Full Exam
    </div>

    <div class="training-description">
        Complete Assessment
    </div>

</div>

                              <!-- MTBE MENU RANDOM EXAM CARD -->

<div
    class="training-card"
    onclick="startRandomMTBEExam()"
>
    <div class="training-icon">🎲</div>

    <div class="training-title">
        ${currentRole} Random Exam
    </div>

    <div class="training-description">
        Quick Practice
    </div>

</div>

                              <!-- MTBE MENU END TRAINING CARDS CONTAINER -->

</div>

</div>

`;
}


function setMetathesisRole(role) {
    currentRole = role;
    showMetathesisMenu();
}


function showMetathesisMenu() {

    document.getElementById("content").innerHTML = `

<div class="content-box">

                              <!-- METATHESIS MENU NAVIGATION BUTTONS -->

<button onclick="showHome()">
    🏠 Main Dashboard
</button>

<button onclick="showMetathesisRoles()">
    ↩️ METATHESIS Dashboard
</button>

                              <!-- METATHESIS MENU PAGE TITLE -->

<h2 style="
text-align:center;
margin-top:25px;
margin-bottom:30px;
font-size:32px;
font-weight:700;
letter-spacing:1px;
">
📗 METATHESIS ${currentRole}
</h2>

                              <!-- METATHESIS MENU TRAINING CARDS CONTAINER -->

<div class="training-menu">

                              <!-- METATHESIS MENU QUESTION BANK CARD -->

    <div
        class="training-card"
        onclick="showMeta()"
        style="background:#2e7d32;"
    >
        <div class="training-icon">📚</div>

        <div class="training-title">
            Question Bank
        </div>

        <div class="training-description">
            Study & Review Questions
        </div>

    </div>

                              <!-- METATHESIS MENU FULL EXAM CARD -->

    <div
        class="training-card"
        onclick="startMetathesis()"
        style="background:#2e7d32;"
    >
        <div class="training-icon">📝</div>

        <div class="training-title">
            ${currentRole} Full Exam
        </div>

<div class="training-description">
    Complete Assessment
</div>

</div>

                              <!-- METATHESIS MENU RANDOM EXAM CARD -->

<div
    class="training-card"
    onclick="startRandomMETATHESISExam()"
    style="background:#2e7d32;"
>
    <div class="training-icon">🎲</div>

    <div class="training-title">
        ${currentRole} Random Exam
    </div>

    <div class="training-description">
        Quick Practice
    </div>

</div>

                              <!-- METATHESIS MENU END TRAINING CARDS CONTAINER -->

</div>

</div>

`;
}


function showMergeRoles() {

    document.getElementById("content").innerHTML = `


<div class="content-box">

                              <!-- MERGE ROLES NAVIGATION BUTTONS -->

<button onclick="showHome()">
    🏠 Main Dashboard
</button>

                              <!-- MERGE ROLES PAGE TITLE -->

<h2 style="
text-align:center;
margin-top:25px;
margin-bottom:10px;
font-size:32px;
font-weight:700;
letter-spacing:1px;
">
    🎯 MERGE
</h2>

                              <!-- MERGE ROLES PAGE DESCRIPTION -->

<p style="
text-align:center;
color:#94a3b8;
margin-bottom:30px;
">
    MTBE + METATHESIS + SAFETY
</p>

                              <!-- MERGE ROLES POSITION CARDS CONTAINER -->

<div class="training-menu">

                              <!-- MERGE ROLES POSITION CARD : FO -->

    <div
        class="training-card"
        onclick="setMergeRole('FO')"
        style="background:#5b21b6;"
    >
        <div class="training-icon">👷</div>

        <div class="training-title">
            FO
        </div>

        <div class="training-description">
            Field Operator
        </div>

                              <!-- MERGE ROLES POSITION QUESTION COUNT -->

        <div class="training-description" style="
        margin-top:8px;
        font-weight:bold;
        color:#ddd6fe;
        font-size:13px;
        ">
            ${mtbeQuestionsFO.length + metathesisQuestionsFO.length + safetyQuestions.length} Questions
        </div>

    </div>



                              <!-- MERGE ROLES POSITION CARD : CO -->

<div
    class="training-card"
    onclick="setMergeRole('CO')"
    style="background:#5b21b6;"
>

    <div class="training-icon">👨‍💻</div>

    <div class="training-title">
        CO
    </div>

    <div class="training-description">
        Console Operator
    </div>

                              <!-- MERGE ROLES POSITION QUESTION COUNT -->

    <div class="training-description" style="
    margin-top:8px;
    font-weight:bold;
    color:#ddd6fe;
    font-size:13px;
    ">
        ${mtbeQuestionsCO.length + metathesisQuestionsCO.length + safetyQuestions.length} Questions
    </div>

</div>

                              <!-- MERGE ROLES POSITION CARD : SSV -->

<div
    class="training-card"
    onclick="setMergeRole('SSV')"
    style="background:#5b21b6;"
>

    <div class="training-icon">🧑‍💼</div>

    <div class="training-title">
        SSV
    </div>

    <div class="training-description">
        Shift Supervisor
    </div>

                              <!-- MERGE ROLES POSITION QUESTION COUNT -->

    <div class="training-description" style="
    margin-top:8px;
    font-weight:bold;
    color:#ddd6fe;
    font-size:13px;
    ">
        ${mtbeQuestionsSSV.length + metathesisQuestionsSSV.length + safetyQuestions.length} Questions
    </div>

</div>

                              <!-- MERGE ROLES END POSITION CARDS CONTAINER -->

</div>

</div>

`;
}


function setMergeRole(role) {
    currentRole = role;
    showMergeMenu();
}

function showMergeMenu() {

    document.getElementById("content").innerHTML = `

<div class="content-box">

                              <!-- MERGE MENU NAVIGATION BUTTONS -->

<button onclick="showHome()">
    🏠 Main Dashboard
</button>

<button onclick="showMergeRoles()">
    ↩️ Merge Dashboard
</button>

                              <!-- MERGE MENU PAGE TITLE -->

<h2 style="
text-align:center;
margin-top:25px;
margin-bottom:10px;
font-size:32px;
font-weight:700;
letter-spacing:1px;
">
    🎯 MERGE ${currentRole}
</h2>


                              <!-- MERGE MENU PAGE DESCRIPTION -->

<p style="
text-align:center;
color:#ddd6fe;
margin-bottom:5px;
font-size:14px;
letter-spacing:0.5px;
">
    MTBE + METATHESIS + SAFETY
</p>



                              <!-- MERGE MENU TRAINING CARDS CONTAINER -->

<div class="training-menu">

                              <!-- MERGE MENU QUESTION BANK CARD -->

    <div
        class="training-card"
        onclick="showMergeQuestionBank()"
        style="background:#5b21b6;"
    >
        <div class="training-icon">📚</div>

        <div class="training-title">
            Question Bank
        </div>

        <div class="training-description">
            Study & Review Questions
        </div>

    </div>


                              <!-- MERGE MENU FULL EXAM CARD -->

<div
    class="training-card"
    onclick="startMergeExam()"
    style="background:#5b21b6;"
>
    <div class="training-icon">📝</div>

    <div class="training-title">
        ${currentRole} Full Exam
    </div>

    <div class="training-description">
        Complete Assessment
    </div>

</div>

                              <!-- MERGE MENU RANDOM EXAM CARD -->

<div
    class="training-card"
    onclick="startRandomMergeExam()"
    style="background:#5b21b6;"
>
    <div class="training-icon">🎲</div>

    <div class="training-title">
        ${currentRole} Random Exam
    </div>

    <div class="training-description">
        Quick Practice
    </div>

</div>

                              <!-- MERGE MENU END TRAINING CARDS CONTAINER -->

</div>

</div>

`;
}


                              /* ================QUESTION DATA SOURCES======= */



                              /* ========= MTBE QUESTION SOURCE ======== */


function getMTBEQuestions() {

    if (currentRole === "CO") {
        return mtbeQuestionsCO;
    }

    if (currentRole === "FO") {
        return mtbeQuestionsFO;
    }

    if (currentRole === "SSV") {
        return mtbeQuestionsSSV;
    }

    return [];
}


                              /* ================= METATHESIS QUESTION SOURCE ================= */

function getMetathesisQuestions() {

    if (currentRole === "CO") {
        return metathesisQuestionsCO;
    }

    if (currentRole === "FO") {
        return metathesisQuestionsFO;
    }

    if (currentRole === "SSV") {
        return metathesisQuestionsSSV;
    }

    return [];
}



                              /* ================= MERGE QUESTION SOURCE ================= */

function getMergeQuestions() {

    if (currentRole === "FO") {
        return [
            ...mtbeQuestionsFO,
            ...metathesisQuestionsFO,
            ...safetyQuestions
        ];
    }

    if (currentRole === "CO") {
        return [
            ...mtbeQuestionsCO,
            ...metathesisQuestionsCO,
            ...safetyQuestions
        ];
    }

    if (currentRole === "SSV") {
        return [
            ...mtbeQuestionsSSV,
            ...metathesisQuestionsSSV,
            ...safetyQuestions
        ];
    }

    return [];
}


                              /* ============================QUESTION BANK STATE MANAGEMENT==================== */



                              /* ================= QUESTION BANK VARIABLES ================= */

let collapsedSections = {};
let currentPage = "";
let currentRole = "";


                              /* ================= QUESTION BANK SECTION TOGGLE ================= */

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
                                              // MTBE QUESTION BANK PAGE
                                             // ======================

function showMTBE() {

    currentPage = "mtbe";

    const mtbeQuestions = getMTBEQuestions();

    let html = `

    <div class="content-box">

                              <!-- MTBE QUESTION BANK NAVIGATION BUTTONS -->

    <button onclick="showHome()">
        🏠 Main Dashboard
    </button>

    <button onclick="showMTBEMenu()">
        ↩️ Back to Menu
    </button>

    <br><br>

                              <!-- MTBE QUESTION BANK PAGE HEADER -->

    <div style="
    background:#1e3a8a;
    padding:10px 20px;
    border-radius:12px;
    margin-top:8px;
    margin-bottom:10px;
    border-left:4px solid #93c5fd;
    box-shadow:0 0 12px rgba(59,130,246,0.15);
    ">

                              <!-- MTBE QUESTION BANK PAGE TITLE -->

<h2 style="margin-bottom:5px;">
📘 MTBE ${currentRole} Question Bank
</h2>

                              <!-- MTBE QUESTION BANK QUESTION COUNT -->

<p style="
margin:0;
padding-left:10px;
opacity:0.9;
">
    Total Questions: ${mtbeQuestions.length}
</p>

</div>

`;


                  /* ================= MTBE QUESTION BANK SECTION ORGANIZER ================= */

let currentSection = "";

const sections = {};



            /* ================= MTBE QUESTION BANK GROUP QUESTIONS BY SECTION ================= */


mtbeQuestions.forEach((q) => {

    if (q.section) {

        currentSection = q.section;

        if (!sections[currentSection]) {
            sections[currentSection] = [];
        }
    }

    sections[currentSection].push(q);

});


                  /* ================= MTBE QUESTION BANK RENDER SECTIONS ================= */

Object.keys(sections).forEach((sectionName) => {

    const isCollapsed =
        collapsedSections[sectionName] || false;

    html += `

                                    <!-- MTBE QUESTION BANK SECTION HADER -->

<div
onclick="toggleSection('${sectionName}')"
style="
background:#1e40af;
padding:12px 15px;
margin-top:25px;
border-radius:12px;
border-left:5px solid #93c5fd;
box-shadow:0 0 8px rgba(59,130,246,0.5);
cursor:pointer;
"
>

                                    <!-- MTBE QUESTION BANK SECTION TITLE -->

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

                  /* ================= MTBE QUESTION BANK RENDER QUESTION CARDS ================= */

sections[sectionName].forEach((q, index) => {

    html += `

                                    <!-- MTBE QUESTION CARD -->

<div style="
background:#0f172a;
padding:15px;
margin-top:12px;
border-radius:12px;
border:1px solid #334155;
box-shadow:0 0 8px rgba(59,130,246,0.08);
">

                                    <!-- MTBE QUESTION TITLE -->

<h3 style="
color:#93c5fd;
margin:0 0 3px 0;
">
Question ${index + 1}
</h3>

                                    <!-- MTBE QUESTION SECTION NAME -->

<p style="
font-size:11px;
letter-spacing:0.5px;
text-transform:uppercase;
color:#64748b;
margin:0 0 10px 0;
">
${sectionName}
</p>

                                    <!-- MTBE QUESTION TEXT -->

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


const correct =
q.correct !== undefined
? q.correct
: q.options.indexOf(q.answer);

                          /* ================= MTBE ANSWER OPTIONS ================= */

q.options.forEach((option, i) => {

    html += `

    <p style="margin:8px 0;">
        ${String.fromCharCode(65 + i)}.
        ${option}

                                    <!-- MTBE CORRECT ANSWER MARKER -->

        ${(
            (q.answer !== undefined && option === q.answer) ||
            (q.correct !== undefined && i === q.correct)
        ) ? ' ✅' : ''}

    </p>

    `;
});

html += `
</div>
`;

});

});

                         /* ================= MTBE QUESTION BANK END PAGE ================= */

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

    const metathesisQuestions = getMetathesisQuestions();

    let html = `

<div class="content-box">

                                    <!-- METATHESIS QUESTION BANK NAVIGATION BUTTONS -->

<button onclick="showHome()">
    🏠 Main Dashboard
</button>

<button onclick="showMetathesisMenu()">
    ↩️ Back to Menu
</button>

<br><br>

                                    <!-- METATHESIS QUESTION BANK PAGE HEADER -->

<div style="
background:#166534;
padding:10px 20px;
border-radius:12px;
margin-top:8px;
margin-bottom:10px;
border-left:4px solid #86efac;
box-shadow:0 0 12px rgba(34,197,94,0.15);
">

                                    <!-- METATHESIS QUESTION BANK PAGE TITLE -->

<h2 style="
margin-bottom:5px;
">
📗 METATHESIS ${currentRole} Question Bank
</h2>

                                    <!-- METATHESIS QUESTION BANK QUESTION COUNT -->

<p style="
margin:0;
padding-left:12px;
opacity:0.9;
">
    Total Questions: ${metathesisQuestions.length}
</p>

</div>

`;



                                        // ======================
                                       // METATHESIS QUESTION BANK SECTION ORGANIZER
                                      // ======================

let currentSection = "";

const sections = {};



                                         // ======================
                                        // METATHESIS QUESTION BANK GROUP QUESTIONS BY SECTION
                                       // ======================

metathesisQuestions.forEach((q) => {

    if (q.section) {

        currentSection = q.section;

        if (!sections[currentSection]) {
            sections[currentSection] = [];
        }
    }

    sections[currentSection].push(q);

});



                                         // ======================
                                        // METATHESIS QUESTION BANK RENDER SECTIONS
                                       // ======================


Object.keys(sections).forEach((sectionName) => {

    const isCollapsed =
        collapsedSections[sectionName] || false;

    html += `


                          <!-- METATHESIS QUESTION BANK SECTION HADER -->








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







                                    <!-- METATHESIS QUESTION BANK SECTION TITLE -->


<h3 style="
margin:0;
color:white;
">
TEST
</h3>

</div>

`;

if (isCollapsed) {
    return;
}

                                      // ======================
                                     // METATHESIS QUESTION BANK RENDER QUESTION CARDS
                                    // ======================

sections[sectionName].forEach((q, index) => {

    html += `

                                    <!-- METATHESIS QUESTION CARD -->

<div style="
background:#0f172a;
padding:15px;
margin-top:12px;
border-radius:12px;
border:1px solid #334155;
">

                                    <!-- METATHESIS QUESTION TITLE -->

<h3 style="
color:#86efac;
margin:0 0 5px 0;
">
Question ${index + 1}
</h3>

                                    <!-- METATHESIS QUESTION SECTION NAME -->

<p style="
font-size:11px;
letter-spacing:0.5px;
text-transform:uppercase;
color:#64748b;
margin:0 0 10px 0;
">
${sectionName}
</p>

                                    <!-- METATHESIS QUESTION TEXT -->

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

${(
    (q.answer !== undefined && option === q.answer) ||
    (q.correct !== undefined && i === q.correct)
) ? ' ✅' : ''}
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
                                     // SAFETY MENU
                                    // ======================

function showSafetyMenu() {


    document.getElementById("content").innerHTML = `

    <div class="content-box">

        <!-- BACK TO MAIN DASHBOARD BUTTON -->
        <button onclick="showHome()">
            🏠 Main Dashboard
        </button>

                                    <!-- SAFETY PAGE TITLE -->
        <h2 style="
        text-align:center;
        margin-top:25px;
        margin-bottom:5px;
        font-size:32px;
        font-weight:700;
        letter-spacing:1px;
        ">
        🦺 SAFETY
        </h2>

                                    <!-- SAFETY QUESTIONS COUNT -->
        <p style="
        text-align:center;
        color:#fecaca;
        margin-bottom:30px;
        font-size:14px;
        letter-spacing:0.5px;
        ">
        ${safetyQuestions.length} Questions
        </p>


        <div class="training-menu">

                                    <!-- SAFETY QUESTION BANK CARD -->
<div
    class="training-card"
    onclick="showSafety()"
    style="background:#dc2626;"
>

                <div class="training-icon">📚</div>

                <div class="training-title">
                    Question Bank
                </div>

                <div class="training-description">
                    Study & Review Questions
                </div>
            </div>


                                    
                                    <!-- SAFETY FULL EXAM CARD -->

<div
    class="training-card"
    onclick="startSafety()"
    style="background:#dc2626;"
>
                <div class="training-icon">📝</div>

                <div class="training-title">
                    Full Exam
                </div>

                <div class="training-description">
                    Complete Assessment
                </div>
            </div>



                                    <!-- SAFETY RANDOM EXAM CARD -->

<div
    class="training-card"
    onclick="startRandomSAFETYExam()"
    style="background:#dc2626;"
>

                <div class="training-icon">🎲</div>

                <div class="training-title">
                    Random Exam
                </div>

                <div class="training-description">
                    Quick Practice
                </div>
            </div>

        </div>

    </div>

    `;
}


                                      // ======================
                                     // SAFETY
                                    // ======================



function showSafety() {

    currentPage = "safety";

    let html = `

    <div class="content-box">

                                    <!-- SAFETY QUESTION BANK NAVIGATION BUTTONS -->

        <button onclick="showHome()">
            🏠 Main Dashboard
        </button>

        <button onclick="showSafetyMenu()">
            ↩️ Back to Safety Menu
        </button>

        <br><br>

                                    <!-- SAFETY QUESTION BANK PAGE HEADER -->

        <div style="
        background:#dc2626;
        padding:10px 20px;
        border-radius:12px;
        margin-top:8px;
        margin-bottom:10px;
        border-left:4px solid #fecaca;
        box-shadow:0 0 12px rgba(239,68,68,0.15);
        ">

                                    <!-- SAFETY QUESTION BANK PAGE TITLE -->

            <h2 style="margin-bottom:5px;">
                🦺 Safety Question Bank
            </h2>

                                    <!-- SAFETY QUESTION BANK QUESTION COUNT -->

            <p style="
            margin:0;
            padding-left:12px;
            opacity:0.9;
            ">
                Total Questions: ${safetyQuestions.length}
            </p>

        </div>

    `;


                                      // ======================
                                     // SAFETY QUESTION BANK RENDER QUESTION CARDS
                                    // ======================

safetyQuestions.forEach((q, index) => {

    html += `

        <!-- SAFETY QUESTION CARD -->

        <div style="
        background:#0f172a;
        padding:15px;
        margin-top:12px;
        border-radius:12px;
        border:1px solid #334155;
        ">

                                    <!-- SAFETY QUESTION TITLE -->

        <h3 style="
        color:#fecaca;
        margin:0 0 5px 0;
        ">
        Question ${index + 1}
        </h3>

                                    <!-- SAFETY QUESTION TEXT -->

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

                                    <!-- SAFETY ANSWER OPTIONS -->

            <p style="margin:8px 0;">

            ${String.fromCharCode(65 + i)}.
            ${option}

                                    <!-- SAFETY CORRECT ANSWER MARKER -->

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
                                    // MERGE QUESTION BANK
                                    // ======================

function showMergeQuestionBank() {

    currentPage = "Merge";

    const MergeQuestions = getMergeQuestions();

    let html = `

    <div class="content-box">

                                    <!-- MERGE QUESTION BANK NAVIGATION BUTTONS -->

        <button onclick="showHome()">
            🏠 Main Dashboard
        </button>

        <button onclick="showMergeMenu()">
            ↩️ Back to Menu
        </button>

        <br><br>

                                    <!-- MERGE QUESTION BANK PAGE HEADER -->

        <div style="
        background:#1e293b;
        padding:15px 20px;
        border-radius:12px;
        margin-top:8px;
        margin-bottom:15px;
        border-left:4px solid #a855f7;
        max-width:760px;
        ">

                                    <!-- MERGE QUESTION BANK PAGE TITLE -->

            <h2 style="
            margin-bottom:5px;
            ">
            Merge ${currentRole} 📚
            </h2>

                                    <!-- MERGE QUESTION BANK DESCRIPTION -->

            <p style="
            margin:0;
            opacity:0.85;
            letter-spacing:0.5px;
            font-size:14px;
            color:#ddd6fe;
            ">
            MTBE + META + SAFETY
            </p>

                                    <!-- MERGE QUESTION BANK QUESTION COUNT -->

            <p style="
            margin:4px 0 0 0;
            font-size:15px;
            font-weight:bold;
            ">
            Question Bank • ${MergeQuestions.length} Questions
            </p>


        </div>

    `;



                                     // ======================
                                    // MERGE QUESTION BANK RENDER QUESTION CARDS
                                   // ======================

MergeQuestions.forEach((q, index) => {

    if (!q) return;

    html += `

                                    <!-- MERGE QUESTION CARD -->

        <div style="
        background:#0f172a;
        padding:15px;
        margin-top:12px;
        border-radius:12px;
        border:1px solid #334155;
        ">

                                    <!-- MERGE QUESTION TITLE -->

        <h3 style="
        color:#ddd6fe;
        margin:0 0 5px 0;
        ">
        Question ${index + 1}
        </h3>

                                    <!-- MERGE QUESTION TEXT -->

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

                                    <!-- MERGE ANSWER OPTIONS -->

            <p style="margin:8px 0;">

            ${String.fromCharCode(65 + i)}.
            ${option}

                                    <!-- MERGE CORRECT ANSWER MARKER -->

            ${(
                (q.answer !== undefined && option === q.answer) ||
                (q.correct !== undefined && i === q.correct)
            ) ? ' ✅' : ''}

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

                                    // EXAM STATE MANAGEMENT

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let examTitle = "";


                                            // ======================
                                           // MTBE FULL EXAM INITIALIZER
                                          // ======================

function startMTBE() {

    examTitle = `MTBE ${currentRole}`;

    currentQuestions = getMTBEQuestions();

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


                                         // ======================
                                        // METATHESIS FULL EXAM INITIALIZER
                                       // ======================

function startMetathesis() {

    examTitle = `METATHESIS ${currentRole}`;

    currentQuestions = getMetathesisQuestions();

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


                                      // ======================
                                     // SAFETY FULL EXAM INITIALIZER
                                    // ======================

function startSafety() {

    examTitle = "Safety";

    currentQuestions = safetyQuestions;

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


                                      // ======================
                                     // MERGE FULL EXAM INITIALIZER
                                    // ======================

function startMergeExam() {

    examTitle = `Merge ${currentRole}`;

    currentQuestions = getMergeQuestions();

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


                                      // ======================
                                     // MERGE RANDOM EXAM INITIALIZER
                                    // ======================

function startRandomMergeExam() {

    examTitle = `Merge ${currentRole}`;

    currentQuestions = [...getMergeQuestions()]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


                                      // ======================
                                     // MTBE RANDOM EXAM INITIALIZER
                                    // ======================

function startRandomMTBEExam() {

    examTitle = `MTBE ${currentRole}`;

    const allQuestions = [
        ...getMTBEQuestions(),
    ];

    currentQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


                                      // ======================
                                     // METATHESIS RANDOM EXAM INITIALIZER
                                    // ======================

function startRandomMETATHESISExam() {

    examTitle = `METATHESIS ${currentRole}`;

    const allQuestions = [
        ...getMetathesisQuestions(),
    ];

    currentQuestions = [...allQuestions]
        .sort(() => Math.random() - 0.5)
        .slice(0, 40);

    currentQuestion = 0;

    score = 0;

    showQuestion();
}


                                      // ======================
                                     // SAFETY RANDOM EXAM INITIALIZER
                                    // ======================

function startRandomSAFETYExam() {

    examTitle = "Safety";

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

    // CURRENT QUESTION DATA

    const q = currentQuestions[currentQuestion];

                                    
                                    // EXAM COLOR THEME

    let examColor = "#f5a623";

    if (examTitle.includes("MTBE")) {
        examColor = "#3b82f6";
    }

    if (examTitle.includes("METATHESIS")) {
        examColor = "#22c55e";
    }

    if (examTitle.includes("Safety")) {
        examColor = "#ef4444";
    }

    if (examTitle.includes("Merge")) {
        examColor = "#a855f7";
    }

    let buttonColor = examColor;

    let html = `

    <div class="content-box">

                                    <!-- QUESTION ENGINE NAVIGATION BUTTONS -->

        <button onclick="showHome()">
        🏠 Main Dashboard
        </button>

        <button onclick="
        if (examTitle.includes('MTBE')) {
            showMTBEMenu();
        }
        else if (examTitle.includes('METATHESIS')) {
            showMetathesisMenu();
        }
        else if (examTitle.includes('Merge')) {
            showMergeMenu();
        }
        else if (examTitle.includes('Safety')) {
            showSafetyMenu();
        }
        ">
        ↩️ Back to Menu
        </button>

        <br><br>

                                    <!-- QUESTION ENGINE EXAM HEADER -->

<div style="
background:#1e293b;
padding:15px 20px;
border-radius:12px;
margin-top:8px;
margin-bottom:15px;
border-left:4px solid ${examColor};
max-width:760px;
">

                                    <!-- QUESTION ENGINE EXAM TITLE -->

    <h2 style="
    margin-bottom:5px;
    ">
    ${examTitle
        .replace(' Full Exam', '')
        .replace(' Random Exam', '')
    }
    </h2>

                                    <!-- MERGE EXAM DESCRIPTION -->

    ${examTitle.includes('Merge') ? `
    <p style="
    margin:0;
    opacity:0.85;
    letter-spacing:0.5px;
    font-size:14px;
    color:#ddd6fe;
    ">
    MTBE + META + SAFETY
    </p>
    ` : ''}

                                    <!-- QUESTION ENGINE EXAM TYPE AND QUESTION COUNT -->

    <p style="
    margin:4px 0 0 0;
    font-size:15px;
    font-weight:bold;
    ">
    ${examTitle.includes('Random')
    ? `Random Exam • ${currentQuestions.length} Questions`
    : `Full Exam • ${currentQuestions.length} Questions`}
    </p>

                                    <!-- QUESTION ENGINE WARNING CONTAINER -->

    <div id="warningBox" style="
    display:flex;
    justify-content:flex-end;
    align-items:center;
    "></div>

</div>



                                    <!-- QUESTION ENGINE QUESTION CARD -->

<div style="
background:rgba(255,255,255,0.03);
padding:12px;
border-radius:10px;
border-left:3px solid ${examColor};
margin-bottom:15px;
">

                                    <!-- QUESTION ENGINE QUESTION TEXT -->

    <h3 style="
    margin:0;
    ">
        ${q.question}
    </h3>

</div>

`;
    
q.options.forEach((option, i) => {

    html += `

                                    <!-- QUESTION ENGINE ANSWER OPTION -->

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

                                    <!-- QUESTION ENGINE ACTION BUTTONS -->

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
    style="
    background:${buttonColor};
    min-width:140px;
    height:45px;
    font-weight:bold;
    ">
    ➡️ Next Question
    </button>

                                    <!-- QUESTION ENGINE RESULT CONTAINER -->

    <div id="result"></div>

</div>

`;

document.getElementById("content").innerHTML = html;

}


                                      // ======================
                                     // ANSWER PROCESSING
                                    // ======================

function showWarning(message) {

    const warningBox =
    document.getElementById("warningBox");

    if (!warningBox) return;

    warningBox.innerHTML = `

                                    <!-- ANSWER PROCESSING WARNING MESSAGE -->

        <div style="
        background:rgba(245,158,11,0.75);
        color:#ffffff;
        padding:8px 14px;
        border-radius:12px;
        font-weight:bold;
        font-size:15px;
        border:1px solid #fcd34d;
        text-align:center;
        display:inline-block;
        margin-left:auto;
        margin-right:40px;
        box-shadow:0 0 12px rgba(0,0,0,0.25);
        ">
            ${message}
        </div>

    `;

    setTimeout(() => {

        warningBox.innerHTML = "";

    }, 2500);

}


                                      // ======================
                                     // ANSWER VALIDATION
                                    // ======================

function checkAnswer() {

    const selected =
    document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {

        showWarning(
            "Please select an answer first ⚠️"
        );

        return;
    }

    const chosen =
    Number(selected.value);

    const q = currentQuestions[currentQuestion];

    const correct =
    q.correct !== undefined
    ? q.correct
    : q.options.indexOf(q.answer);

                                    
                                    // CORRECT ANSWER HANDLER

    if (chosen === correct) {

        score++;

        document.getElementById("result").innerHTML = `

                                    <!-- CORRECT ANSWER MESSAGE -->

        <div style="
        margin-top:15px;
        padding:12px;
        border-radius:10px;
        background:rgba(34,197,94,0.15);
        border-left:4px solid #22c55e;
        ">

            <p style="
            color:#22c55e;
            font-weight:bold;
            font-size:20px;
            margin:0;
            ">
                ✅ Correct Answer
            </p>

        </div>

        `;



                                    // INCORRECT ANSWER HANDLER

    } else {

        document.getElementById("result").innerHTML = `

                                    <!-- INCORRECT ANSWER MESSAGE -->

        <div style="
        margin-top:15px;
        padding:12px;
        border-radius:10px;
        background:rgba(239,68,68,0.15);
        border-left:4px solid #ef4444;
        ">

            <p style="
            color:#ef4444;
            font-weight:bold;
            font-size:20px;
            margin:0;
            ">
                ❌ Incorrect Answer
            </p>

        </div>

                                    <!-- CORRECT ANSWER DISPLAY -->

        <div style="
        margin-top:10px;
        padding:12px;
        border-radius:10px;
        background:rgba(34,197,94,0.15);
        border-left:4px solid #22c55e;
        ">

            <p style="
            color:#22c55e;
            font-weight:bold;
            font-size:18px;
            margin:0;
            ">
                ✅ Correct Answer:
                ${currentQuestions[currentQuestion].options[correct]}
            </p>

        </div>

        `;

    }



                                    // DISABLE ANSWER OPTIONS

    document
    .querySelectorAll('input[name="answer"]')
    .forEach(r => r.disabled = true);

 
                                    // DISABLE SUBMIT BUTTON

    document.getElementById("submitBtn").disabled = true;


                                    // ENABLE NEXT QUESTION BUTTON

    document.getElementById("nextBtn").disabled = false;

}


                                      // ======================
                                     // NAVIGATION
                                    // ======================

function nextQuestion() {

    const selected =
    document.querySelector(
        'input[name="answer"]:checked'
    );

   
                                     // VALIDATE ANSWER SUBMISSION

    if (!selected) {

        showWarning(
            "Please submit your answer first ⚠️"
        );

        return;
    }



                                    // MOVE TO NEXT QUESTION

    currentQuestion++;



                                    // CHECK EXAM COMPLETION

    if (currentQuestion >= currentQuestions.length) {

        finishExam();

        return;
    }

    

                                    // RENDER NEXT QUESTION

    showQuestion();
}


                                      // ======================
                                     // EXAM RESULTS
                                    // ======================

function finishExam() {



                                    // CALCULATE EXAM SCORE

    const percent =
    Math.round(
        (score / currentQuestions.length) * 100
    );

    

                                    // DETERMINE PASS OR FAIL STATUS

    const passed = percent >= 80;

    document.getElementById("content").innerHTML = `

    <div class="content-box">

                                    <!-- EXAM RESULTS HEADER -->

        <div style="
        background:${passed ? '#166534' : '#991b1b'};
        padding:15px 20px;
        border-radius:12px;
        margin-bottom:20px;
        border-left:4px solid ${passed ? '#86efac' : '#fca5a5'};
        ">

                                    <!-- EXAM COMPLETION TITLE -->

            <h2 style="margin:0 0 8px 0;">
                🎉 Exam Completed
            </h2>

           

                                    <!-- EXAM TITLE -->

            <p style="
            margin:0 0 10px 0;
            font-size:18px;
            font-weight:bold;
            ">
                ${examTitle}
            </p>

                                    <!-- EXAM STATUS -->

            <p style="margin:0;">
                ${passed ? '✅ PASS' : '❌ FAIL'}
            </p>

        </div>

                                    <!-- RESULTS SUMMARY CARD -->

        <div style="
        background:#0f172a;
        padding:20px;
        border-radius:12px;
        border:1px solid #334155;
        ">

                                    <!-- RESULTS SUMMARY TITLE -->

            <h3>📊 Results Summary</h3>

                                    <!-- EXAM SCORE -->

            <p>
                <strong>Score:</strong>
                ${score} / ${currentQuestions.length}
            </p>

                                    <!-- EXAM PERCENTAGE -->

            <p>
                <strong>Percentage:</strong>
                ${percent}%
            </p>

                                    <!-- EXAM PERFORMANCE MESSAGE -->

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

                                    <!-- RESULTS PAGE ACTION BUTTONS -->

        <button onclick="showHome()">
            🏠 Main Dashboard
        </button>

        <button onclick="location.reload()">
            🔄 Retake Exam
        </button>

    </div>

    `;
}


console.log("SCRIPT LOADED");

showHome();
