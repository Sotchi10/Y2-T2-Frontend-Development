// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#score");
const dom_start = document.querySelector("#start");


// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
];

let score = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = 'none';
}

function show(element) {
  // TODO
  element.style.display = 'block';
}

function onStart() {
  // Render the current question
  // Display the quiz view,
  hide(dom_start);
  show(dom_quiz);
  hide(dom_score);

}
let idx = 0;
function renderQuestion() {
  // Render the current question on the quiz view
  // question[0]
  // for(let idx = 0; idx < questions.length(); idx++) {
    dom_quiz.innerHTML = `
    <div style="display: flex; flex-direction: column;">
      <div id="question" style="font-size: 22px">${questions[idx].title}</div>
      <div id="choices" style="font-size: 20px">
        <div class="choice" id="A" onclick = onPlayerSubmit('A')>${questions[idx].choiceA}</div>
        <div class="choice" id="B" onclick = onPlayerSubmit('B')>${questions[idx].choiceB}</div>
        <div class="choice" id="C" onclick = onPlayerSubmit('C')>${questions[idx].choiceC}</div>
        <div class="choice" id="D" onclick = onPlayerSubmit('D')>${questions[idx].choiceD}</div>
      </div>
      <div class="nextQ">
        <button class="backBtn">Back</button>
        <button class="nextBtn">Next</button>
      </div>
      
    </div>
    `;
  }
  // }



function onPlayerSubmit(answer) {
  const choice = document.querySelector(".choice");
  const backBtn = document.querySelector(".backBtn");
  const nextBtn = document.querySelector(".nextBtn");
  
  // Update the score, display the next question or the score view
  if(answer === questions[idx].correct) {
    score ++;
    console.log(score);
  } else {
    score += 0;
     console.log(score);
  }
  idx++;
  (idx < questions.length)? renderQuestion() : renderSCore();
  
}

function renderSCore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent


  hide(dom_quiz);
  show(dom_score);
  score = score/questions.length * 100;
  //Takes 2 Decimal
  score = Math.round(score * 100) / 100;
  
  const emoji = document.querySelector(".emoji");
  const text = document.querySelector(".text");
  if(score < 20) {
    emoji.textContent = "🥲";
    text.textContent = score;
  } else if(score > 20 && score < 40) {
    emoji.textContent = "😭";
    text.textContent = score;
  } else if(score > 40 && score < 80) {
    emoji.textContent = "💀";
    text.textContent = score;
  } else if (score > 80) {
    emoji.textContent = "🤣";
    text.textContent = score;
  }
}


const ovl = document.querySelector(".popupContainer");
const dom_edits = document.querySelector("#editQ");
const dom_add = document.querySelector("#addQ");
function doAdd() {
  show(ovl);
  ovl.addEventListener("click", () => {
    hide(ovl);
  });
}
function doEdit() {
  show(ovl);

  dom_edits.innerHTML = `
    <h4>Editing Questions</h4>
    <ul id="editList"></ul>
  `;

  const ul = document.getElementById("editList");

  questions.forEach((q, idx) => {
    const li = document.createElement("li");
    li.className = "listCon";

    li.innerHTML = `
      <h4>${q.title}</h4>
      <div>
        <button class="editBtn">Edit</button>
        <button class="deleteBtn">Delete</button>
      </div>
    `;

    li.querySelector(".editBtn").addEventListener("click", (e) => {
      console.log("Edit:", idx);
    });

    li.querySelector(".deleteBtn").addEventListener("click", (e) => {
      questions.splice(idx, 1);
      doEdit(); 
    });

    ul.appendChild(li);
  });

  ovl.onclick = () => hide(ovl);
}




// FUNCTIONS ---------------------------------------------------------
dom_start.addEventListener("click", onStart);
renderQuestion();
