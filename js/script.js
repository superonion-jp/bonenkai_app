//============================================
// Questions for five Bingo Boards/Sections (24 per board, center is auto "FREE")
//============================================
const BOARDS = [
  [
    {q: "Longest river?", answer: "Nile", choices: ["Amazon","Nile","Yangtze","Mississippi"]},
    {q: "Largest island?", answer: "Greenland", choices: ["Sumatra","Australia","Greenland","Iceland"]},
    {q: "First letter of English?", answer: "a", choices: ["b","z","a","j"]},
    {q: "9-4=?", answer: "5", choices: ["2","5","6","9"]},
    {q: "Primary color?", answer: "red", choices: ["black","red","purple","gray"]},
    {q: "Largest continent?", answer: "Asia", choices: ["Europe","Asia","Africa","South America"]},
    {q: "5x3=?", answer: "15", choices: ["8","15","12","25"]},
    {q: "Ocean east of Africa?", answer: "Indian", choices: ["Pacific","Arctic","Indian","Atlantic"]},
    {q: "Opposite of happy?", answer: "sad", choices: ["joyful","sad","angry","glad"]},
    {q: "Sun rises in the...?", answer: "east", choices: ["east","west","north","south"]},
    {q: "Square root of 16?", answer: "4", choices: ["3","2","4","8"]},
    {q: "President US 2024?", answer: "Biden", choices: ["Trump","Clinton","Biden","Bush"]},
    {q: "First month?", answer: "January", choices: ["March","May","February","January"]},
    {q: "Color of banana?", answer: "yellow", choices: ["green","red","yellow","blue"]},
    {q: "5+9=?", answer: "14", choices: ["22","14","9","16"]},
    {q: "Capital of France?", answer: "Paris", choices: ["London","Paris","Berlin","Rome"]},
    {q: "Bird cannot fly?", answer: "penguin", choices: ["hawk","penguin","sparrow","eagle"]},
    {q: "What is H2O?", answer: "water", choices: ["air","hydrogen","water","methane"]},
    {q: "Number after 19?", answer: "20", choices: ["18","20","21","22"]},
    {q: "Triangle sides?", answer: "3", choices: ["2","3","5","6"]},
    {q: "First day of week?", answer: "Sunday", choices: ["Monday","Sunday","Friday","Saturday"]},
    {q: "Largest mammal?", answer: "whale", choices: ["cat","elephant","whale","dolphin"]},
    {q: "Opposite of up?", answer: "down", choices: ["down","below","over","front"]},
    {q: "Clouds made of...?", answer: "water", choices: ["ice","air","dust","water"]}
  ],
  [
    {q: "7x3=?", answer: "21", choices: ["18", "21", "24", "27"]},
    {q: "Smallest planet?", answer: "Mercury", choices: ["Venus","Mars","Mercury","Jupiter"]},
    {q: "First vowel?", answer: "a", choices: ["o","a","i","u"]},
    {q: "20/4=?", answer: "5", choices: ["4","5","6","8"]},
    {q: "Sky color at noon?", answer: "blue", choices: ["gray","blue","red","green"]},
    {q: "Country north of US?", answer: "Canada", choices: ["Canada","Mexico","Russia","France"]},
    {q: "2+2+2=?", answer: "6", choices: ["4","5","6","7"]},
    {q: "Opposite of tall?", answer: "short", choices: ["small","short","weak","skinny"]},
    {q: "Main language in Spain?", answer: "Spanish", choices: ["English","French","Spanish","German"]},
    {q: "Hot desert in Africa?", answer: "Sahara", choices: ["Gobi","Kalahari","Sahara","Atacama"]},
    {q: "Winter month in Europe?", answer: "December", choices: ["June","July","December","March"]},
    {q: "3²=?", answer: "9", choices: ["6","8","9","12"]},
    {q: "Bird known for wisdom?", answer: "owl", choices: ["sparrow","eagle","owl","parrot"]},
    {q: "Month with Halloween?", answer: "October", choices: ["October","May","January","December"]},
    {q: "Oceans on east US?", answer: "Atlantic", choices: ["Indian","Arctic","Atlantic","Pacific"]},
    {q: "Fastest land animal?", answer: "cheetah", choices: ["lion","cheetah","antelope","rabbit"]},
    {q: "Number after 13?", answer: "14", choices: ["13","14","15","16"]},
    {q: "Largest bird?", answer: "ostrich", choices: ["eagle","ostrich","penguin","falcon"]},
    {q: "Largest island?", answer: "Greenland", choices: ["Sumatra","Australia","Greenland","Iceland"]},
    {q: "What melts in sun?", answer: "ice", choices: ["wood","ice","rock","paper"]},
    {q: "Wheel count on bike?", answer: "2", choices: ["4","3","2","5"]},
    {q: "Baby cow?", answer: "calf", choices: ["foal","calf","pup","kitten"]},
    {q: "Water boils at °C?", answer: "100", choices: ["0","50","100","150"]},
    {q: "Heaviest land animal?", answer: "elephant", choices: ["buffalo","whale","elephant","rhino"]}
  ],
  [
    {q: "First US state?", answer: "Delaware", choices: ["Delaware","Texas","Alaska","California"]},
    {q: "8x2=?", answer: "16", choices: ["18","14","12","16"]},
    {q: "Opposite of good?", answer: "bad", choices: ["beautiful","bad","rich","sad"]},
    {q: "Month after April?", answer: "May", choices: ["May","March","July","October"]},
    {q: "Ocean west of US?", answer: "Pacific", choices: ["Atlantic","Pacific","Indian","Arctic"]},
    {q: "Fastest bird?", answer: "falcon", choices: ["eagle","falcon","owl","parrot"]},
    {q: "5²=?", answer: "25", choices: ["20","25","12","17"]},
    {q: "Planet with big red spot?", answer: "Jupiter", choices: ["Mars","Venus","Jupiter","Earth"]},
    {q: "Smallest continent?", answer: "Australia", choices: ["Asia","Europe","Australia","Antarctica"]},
    {q: "Desert in USA?", answer: "Mojave", choices: ["Sahara","Gobi","Mojave","Karakum"]},
    {q: "Color of emerald?", answer: "green", choices: ["green","red","blue","yellow"]},
    {q: "Day before Sunday?", answer: "Saturday", choices: ["Friday","Saturday","Monday","Tuesday"]},
    {q: "Longest river?", answer: "Nile", choices: ["Amazon","Nile","Yangtze","Mississippi"]},
    {q: "What is CO2?", answer: "carbon dioxide", choices: ["carbon monoxide","carbon dioxide","oxygen","nitrogen"]},
    {q: "How many months in year?", answer: "12", choices: ["10","11","12","13"]},
    {q: "Largest ocean?", answer: "Pacific", choices: ["Atlantic","Arctic","Indian","Pacific"]},
    {q: "Cat sound?", answer: "meow", choices: ["bark","meow","moo","neigh"]},
    {q: "Square root of 25?", answer: "5", choices: ["4","5","6","7"]},
    {q: "Ice melts to become?", answer: "water", choices: ["air","steam","water","rock"]},
    {q: "Tallest mountain?", answer: "Everest", choices: ["K2","Elbrus","Everest","Denali"]},
    {q: "Green veggie, trees shape?", answer: "broccoli", choices: ["broccoli","carrot","spinach","lettuce"]},
    {q: "Main gas in air?", answer: "nitrogen", choices: ["oxygen","hydrogen","carbon dioxide","nitrogen"]},
    {q: "Sun is a...?", answer: "star", choices: ["planet","comet","star","asteroid"]},
    {q: "Day after Friday?", answer: "Saturday", choices: ["Sunday","Wednesday","Saturday","Monday"]}
  ],
  [
    {q: "8/2=?", answer: "4", choices: ["2", "3", "4", "5"]},
    {q: "Red fruit?", answer: "apple", choices: ["banana","apple","grape","pear"]},
    {q: "Highest building?", answer: "Burj Khalifa", choices: ["Empire State","Burj Khalifa","Eiffel Tower","Shanghai Tower"]},
    {q: "First letter of Greek?", answer: "alpha", choices: ["alpha","beta","gamma","delta"]},
    {q: "Biggest sea animal?", answer: "whale", choices: ["fish","octopus","whale","shark"]},
    {q: "Plant that makes bread?", answer: "wheat", choices: ["rice","corn","wheat","barley"]},
    {q: "Fastest aquatic animal?", answer: "sailfish", choices: ["dolphin","sailfish","whale","squid"]},
    {q: "Three sides shape?", answer: "triangle", choices: ["hexagon","triangle","square","circle"]},
    {q: "Spheres in Olympic logo?", answer: "5", choices: ["4","5","6","7"]},
    {q: "Venus is...", answer: "planet", choices: ["planet","moon","star","asteroid"]},
    {q: "Root vegetable?", answer: "carrot", choices: ["carrot","tomato","lettuce","apple"]},
    {q: "Bird that's pink?", answer: "flamingo", choices: ["penguin","flamingo","sparrow","crow"]},
    {q: "Number of continents?", answer: "7", choices: ["5","6","7","8"]},
    {q: "Solid H2O?", answer: "ice", choices: ["steam","ice","water","rock"]},
    {q: "Largest coral reef?", answer: "Great Barrier", choices: ["Caribbean","Red Sea","Mediterranean","Great Barrier"]},
    {q: "Closest star to Earth?", answer: "Sun", choices: ["Sun","Sirius","Alpha Centauri","Betelgeuse"]},
    {q: "Metal that's liquid?", answer: "mercury", choices: ["iron","gold","mercury","silver"]},
    {q: "Color of grass?", answer: "green", choices: ["green","red","blue","orange"]},
    {q: "Ship that hits iceberg?", answer: "Titanic", choices: ["Titanic","Olympic","Britannic","Lusitania"]},
    {q: "Official language of Brazil?", answer: "Portuguese", choices: ["English","Spanish","French","Portuguese"]},
    {q: "Largest planet?", answer: "Jupiter", choices: ["Mars","Jupiter","Earth","Saturn"]},
    {q: "Spring month?", answer: "April", choices: ["April","July","October","January"]},
    {q: "Ocean south of India?", answer: "Indian", choices: ["Pacific","Atlantic","Indian","Arctic"]},
    {q: "Insect with honey?", answer: "bee", choices: ["ant","bee","butterfly","spider"]}
  ],
  [
    {q: "5-2=?", answer: "3", choices: ["3", "2", "1", "4"]},
    {q: "Largest state in US?", answer: "Alaska", choices: ["California","Texas","Alaska","Nevada"]},
    {q: "Main ingredient in sushi?", answer: "fish", choices: ["pasta","beef","fish","potato"]},
    {q: "What do bees make?", answer: "honey", choices: ["milk","honey","vinegar","oil"]},
    {q: "Longest bone in body?", answer: "femur", choices: ["rib","spine","femur","ulna"]},
    {q: "Largest desert?", answer: "Sahara", choices: ["Sahara","Gobi","Kalahari","Mojave"]},
    {q: "Number of planets in solar system?", answer: "8", choices: ["7","8","9","10"]},
    {q: "Color of stop sign?", answer: "red", choices: ["red","blue","green","yellow"]},
    {q: "Instrument with keys?", answer: "piano", choices: ["guitar","drum","piano","violin"]},
    {q: "Currency in Japan?", answer: "yen", choices: ["won","dollar","rupee","yen"]},
    {q: "Mount Fuji is in...?", answer: "Japan", choices: ["Korea","China","Japan","Laos"]},
    {q: "Bird that talks?", answer: "parrot", choices: ["eagle","owl","parrot","crow"]},
    {q: "Season after winter?", answer: "spring", choices: ["spring","summer","fall","autumn"]},
    {q: "Most populous country?", answer: "China", choices: ["China","India","US","Russia"]},
    {q: "Tropical fruit, yellow outside?", answer: "banana", choices: ["apple","grape","banana","pear"]},
    {q: "Coldest continent?", answer: "Antarctica", choices: ["Europe","Antarctica","Australia","Africa"]},
    {q: "Animal with trunk?", answer: "elephant", choices: ["elephant","rhino","deer","lion"]},
    {q: "12th month?", answer: "December", choices: ["October","November","December","August"]},
    {q: "Root that makes fries?", answer: "potato", choices: ["onion","carrot","potato","yam"]},
    {q: "Smallest dog breed?", answer: "chihuahua", choices: ["beagle","labrador","chihuahua","dachshund"]},
    {q: "Golf's little hole?", answer: "cup", choices: ["bucket","cup","bin","pit"]},
    {q: "Largest ocean?", answer: "Pacific", choices: ["Atlantic","Arctic","Pacific","Indian"]},
    {q: "Carnivore big cat?", answer: "tiger", choices: ["tiger","cat","zebra","cow"]},
    {q: "Green fruit is a...?", answer: "kiwi", choices: ["kiwi","banana","apple","grape"]}
  ]
];
// Board name
const BOARD_NAMES = [
  "1 - Liechtenstein","2 - Trust Business","3 - IT","4 - Japanese Animation","5 - TEST"
];

//============================================
// Initialization
//============================================
// let username = sessionStorage.getItem('bingo-username');
// if (!username) {
//   username = prompt("Please enter your Bingo username:");
//   if (!username || !username.trim()) username = "Anonymous";
//   sessionStorage.setItem('bingo-username', username);
// }

document.getElementById("question-modal").addEventListener("mousedown", function(e) {
  if (e.target === this) closeModal();
});

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("chosen-board-name").innerText = BOARD_NAMES[boardIdx];
  renderBoard();
});


//============================================
// function to shuffle the 24 number in the Bingo board
//============================================
let boardNumbersSet = [];
let boardStateSet = [];
let attemptedCellsSet = [];
let questionsSet = [];
let boardIdx = 0;
const FREE_CELL = {q: "FREE", answer: "", choices: []};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

if (sessionStorage.getItem("bingo-numbers")) {
  boardNumbersSet   = JSON.parse(sessionStorage.getItem("bingo-numbers"));
  boardStateSet     = JSON.parse(sessionStorage.getItem("bingo-boardState"));
  attemptedCellsSet = JSON.parse(sessionStorage.getItem("bingo-attemptedCells"));
  boardIdx          = JSON.parse(sessionStorage.getItem("bingo-boardIndex")) || 0;
} else {
  for (let b = 0; b < 5; b++) {
    // Only shuffle display numbers
    let nums = [];
    for (let i = 1; i <= 24; i++) nums.push(i);
    shuffle(nums);
    nums.splice(12, 0, null); // Put null for center "FREE"
    boardNumbersSet.push(nums);
    let state = Array(25).fill(false); state[12] = true;
    let attempted = Array(25).fill(false); attempted[12] = true;
    boardStateSet.push(state);
    attemptedCellsSet.push(attempted);
  }
  boardIdx = 0;
  sessionStorage.setItem("bingo-numbers", JSON.stringify(boardNumbersSet));
  sessionStorage.setItem("bingo-boardState", JSON.stringify(boardStateSet));
  sessionStorage.setItem("bingo-attemptedCells", JSON.stringify(attemptedCellsSet));
  sessionStorage.setItem("bingo-boardIndex", JSON.stringify(boardIdx));
}


//============================================
// Render the Bingo Board
//============================================
questionsSet = BOARDS;

let questions      = questionsSet[boardIdx];
let boardState     = boardStateSet[boardIdx];
let attemptedCells = attemptedCellsSet[boardIdx];
let displayNumbers = boardNumbersSet[boardIdx];
let currentCellIdx = null;
let answerTimer = null;
let countdown = 0;
let activeQuestionIdx = null; // global



function selectBoard(idx) {
  boardIdx = idx;
  questions      = questionsSet[idx];
  boardState     = boardStateSet[idx];
  attemptedCells = attemptedCellsSet[idx];
  displayNumbers = boardNumbersSet[idx];
  sessionStorage.setItem("bingo-boardIndex", JSON.stringify(boardIdx));
  document.getElementById("chosen-board-name").innerText = BOARD_NAMES[idx];
  renderBoard();
}

function renderBoard() {
  let html = '<table>';
  for (let row = 0; row < 5; row++) {
    html += '<tr>';
    for (let col = 0; col < 5; col++) {
      let idx = row * 5 + col;
      let cellLabel;
      if (idx === 12) cellLabel = "LGT"; // <-- Center cell always shows this
      else if (boardState[idx]) cellLabel = '<span class="checkmark">✔️</span>'; 
      else if (attemptedCells[idx]) cellLabel = "✖️";
      else cellLabel = displayNumbers[idx];
      let cellClass = boardState[idx] ? "open" : attemptedCells[idx] ? "attempted" : "";
      html += `<td class="${cellClass}" onclick="cellClicked(${idx})">${cellLabel || ""}</td>`;
    }
    html += '</tr>';
  }
  html += '</table>';
  document.getElementById("bingo-board").innerHTML = html;

  sessionStorage.setItem("bingo-numbers", JSON.stringify(boardNumbersSet));
  sessionStorage.setItem("bingo-boardState", JSON.stringify(boardStateSet));
  sessionStorage.setItem("bingo-attemptedCells", JSON.stringify(attemptedCellsSet));
  sessionStorage.setItem("bingo-boardIndex", JSON.stringify(boardIdx));
}

//============================================
// Timer and Modal Logic
//============================================
window.cellClicked = function(idx) {
  if (attemptedCells[idx] || idx === 12) return;
  let questionNum = displayNumbers[idx];
  if (!questionNum) return; // center

  activeQuestionIdx = questionNum - 1; // This is the index of questions array
  let qObj = questions[activeQuestionIdx];
  currentCellIdx = idx;

  document.getElementById("modal-question").innerText = qObj.q;
  let form = document.getElementById("choices-form"); form.innerHTML = "";
  qObj.choices.forEach((choice, i) => {
    let id = "choice-" + i;
    let div = document.createElement("div");
    div.classList.add("choice-radio");
    div.innerHTML = `<input type="radio" name="answer" id="${id}" value="${choice}">
                     <label for="${id}">${choice}</label>`;
    form.appendChild(div);
  });

  document.getElementById("modal-result").innerText = "";
  document.getElementById("question-modal").style.display = "flex";

  // Remove old timer display if present
  let oldTimerElem = document.getElementById("modal-timer");
  if (oldTimerElem) oldTimerElem.remove();

  // TIMER LOGIC: set countdown *after* modal is shown and always create the timer element before interval
  countdown = 15;
  updateTimerDisplay();
  answerTimer = setInterval(() => {
    countdown--;
    updateTimerDisplay();
    if (countdown <= 0) {
      clearInterval(answerTimer);
      answerTimer = null;
      attemptedCells[currentCellIdx] = true;
      document.getElementById("modal-result").innerText = "Time's up!";
      renderBoard();
      setTimeout(closeModal, 1000);
    }
  }, 1000);
};

function updateTimerDisplay() {
  let timerElem = document.getElementById("modal-timer");
  if (!timerElem) {
    timerElem = document.createElement("div");
    timerElem.id = "modal-timer";
    timerElem.style = "margin-bottom:7px;color:#c00;font-weight:bold;";
    document.getElementById("modal-question").after(timerElem);
  }
  timerElem.innerText = "Time left: " + countdown + " sec";
}

function updateTimerDisplayEnd() {
  let timerElem = document.getElementById("modal-timer");
  if (timerElem) timerElem.remove();
}

//============================================
// Answer Submission
//============================================
window.submitAnswer = function() {
  let radios = document.getElementsByName("answer");
  let selected = "";
  for (let r of radios) if (r.checked) { selected = r.value; break; }
  if (!selected) {
    document.getElementById("modal-result").innerText = "Please select an answer!"; return;
  }
  // Stop timer
  if (answerTimer) {
    clearInterval(answerTimer);
    answerTimer = null;
    updateTimerDisplayEnd();
  }
  let correctAnswer = questions[activeQuestionIdx].answer.trim().toLowerCase();
  attemptedCells[currentCellIdx] = true;
  if (selected.trim().toLowerCase() === correctAnswer) {
    boardState[currentCellIdx] = true;
    document.getElementById("modal-result").innerText = "Correct!";
    renderBoard();
    checkBingo();
    setTimeout(closeModal, 500);
  } else {
    document.getElementById("modal-result").innerText = "Wrong! You cannot answer again.";
    renderBoard();
    setTimeout(closeModal, 1000);
  }
};

//============================================
// Modal Closing Logic
//============================================
window.closeModal = function() {
  if (answerTimer) {
    clearInterval(answerTimer);
    answerTimer = null;
    updateTimerDisplayEnd();
  }
  document.getElementById("question-modal").style.display = "none";
};

//============================================
// Bingo Check Logic
//============================================
function checkBingo() {
  for (let i = 0; i < 5; i++) {
    if ([0,1,2,3,4].map(j => boardState[i*5+j] || questions[i*5+j].q==="FREE").every(Boolean)) {
      addWinnerNoUser(BOARD_NAMES[boardIdx]);
      updateWinnersListNoUser();
      setTimeout(() => alert("Bingo! (row)"), 120); return;
    }
    if ([0,1,2,3,4].map(j => boardState[j*5+i] || questions[j*5+i].q==="FREE").every(Boolean)) {
      addWinnerNoUser(BOARD_NAMES[boardIdx]);
      updateWinnersListNoUser();
      setTimeout(() => alert("Bingo! (column)"), 120); return;
    }
  }
  if ([0,6,12,18,24].map(idx => boardState[idx] || questions[idx].q==="FREE").every(Boolean)) {
    addWinnerNoUser(BOARD_NAMES[boardIdx]);
    updateWinnersListNoUser();
    setTimeout(() => alert("Bingo! (main diagonal)"), 120); return;
  }
  if ([4,8,12,16,20].map(idx => boardState[idx] || questions[idx].q==="FREE").every(Boolean)) {
    addWinnerNoUser(BOARD_NAMES[boardIdx]);
    updateWinnersListNoUser();
    setTimeout(() => alert("Bingo! (anti-diagonal)"), 120); return;
  }
}



//============================================
// Check winner function
//============================================
// function addWinner(user, boardName) {
//   let winners = JSON.parse(localStorage.getItem('bingo-winners') || "[]");
//   // Avoid duplicate wins per user/board
//   let alreadyWon = winners.find(w => w.user === user && w.board === boardName);
//   if (!alreadyWon)
//     winners.push({ user: user, board: boardName, time: new Date().toLocaleString() });
//   localStorage.setItem('bingo-winners', JSON.stringify(winners));
// }

// function updateWinnersList() {
//   let winners = JSON.parse(localStorage.getItem('bingo-winners') || "[]");
//   if (winners.length === 0) {
//     document.getElementById("bingo-winners-list").innerHTML = "No Bingos yet!";
//     return;
//   }
//   let html = "<b>Bingo Winners:</b><ul>";
//   winners.forEach(w =>
//     html += `<li>${w.user} (${w.board}) at ${w.time}</li>`
//   );
//   html += "</ul>";
//   document.getElementById("bingo-winners-list").innerHTML = html;
// }


function addWinnerNoUser(boardName) {
  let winners = JSON.parse(localStorage.getItem('bingo-winners') || "[]");
  // Avoid duplicate wins for the board
  let alreadyWon = winners.find(w => w.board === boardName);
  if (!alreadyWon)
    winners.push({ board: boardName, time: new Date().toLocaleString() });
  localStorage.setItem('bingo-winners', JSON.stringify(winners));
}

function updateWinnersListNoUser() {
  let winners = JSON.parse(localStorage.getItem('bingo-winners') || "[]");
  if (winners.length === 0) {
    document.getElementById("bingo-winners-list").innerHTML = "No Bingos yet!";
    return;
  }
  let html = "<b>Bingo Records:</b><ul>";
  winners.forEach(w =>
    html += `<li>${w.board} at ${w.time}</li>`
  );
  html += "</ul>";
  document.getElementById("bingo-winners-list").innerHTML = html;
}


// Call once on load, and after every Bingo
// In checkBingo() after Bingo alert/setTimeout, call: updateWinnersList();
document.addEventListener("DOMContentLoaded", updateWinnersListNoUser);
