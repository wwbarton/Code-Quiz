var questions = [
  {
    title: "Who is considered the 'Hero' of Orcarina of Time?:",
    choices: ["Melkor", "Chains", "Link", "Brian"],
    answer: "Link",
  },
  {
    title: "The villian in the game is a grumpy Gerudo named..",
    choices: ["George", "Donkey Kong", "Ganandorf", "Pyter"],
    answer: "Ganandorf",
  },
  {
    title: "What is the Hero's favorite instrument?",
    choices: [
      "Steel Drums",
      "Mongolian Throat singing",
      "The Orcarina",
      "He hates music!!!",
    ],
    answer: "The Orcarina",
  },
  {
    title: "What land does the game take place in?",
    choices: ["Gotham", "Arakeen", "Hyrule", "Bangalore"],
    answer: "Hyrule",
  },
  {
    title: "Who is the powerful triforce of Wisdom?",
    choices: ["Pythagoras", "Euclid", "Princess Zelda", "Archimedes"],
    answer: "Princess Zelda",
  },
];
var quizBox = document.querySelector("#quiz-box");
var timeEl = document.querySelector("#currentTime");
var button = document.querySelector("#startTime");
var h1 = document.querySelector("#quiz-box > h3");
var p = document.querySelector("#quiz-box > p");
var secondsLeft = 50;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");
var rupees = 0;
var questionIndex = 0;

button.addEventListener("click", function () {
  h1.setAttribute("class", "hide");
  p.setAttribute("class", "hide");
  button.setAttribute("class", "hide");
  startTimer();
  render();
});

function startTimer() {
  holdInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = "Time: " + secondsLeft;
    if (secondsLeft <= 0) {
      clearInterval(holdInterval);
      timeEl.textContent = "Time's up!";
    }
  }, 1000);
}

function render() {
  ulCreate.innerHTML = "";

  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].title;
    var userChoices = questions[questionIndex].choices;
    quizBox.textContent = userQuestion;
  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    quizBox.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");

    if (element.textContent == questions[questionIndex].answer) {
      rupees++;
      createDiv.textContent = "TaDAA!!:  " + questions[questionIndex].answer;
    } else {
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent =
        "Hey!! Listen!! It's:  " + questions[questionIndex].answer;
    }
  }

  questionIndex++;

  if (questionIndex >= questions.length) {
    gameDone();
    createDiv.textContent =
      "TaDA!!" +
      " " +
      "You got  " +
      rupees +
      "/" +
      questions.length +
      " Right!";
  } else {
    render(questionIndex);
  }
  quizBox.appendChild(createDiv);
}

function gameDone() {
  quizBox.innerHTML = "";
  currentTime.innerHTML = "";
  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "Hyrule Saved!";

  quizBox.appendChild(createH1);
  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");
  quizBox.appendChild(createP);

  if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Rupees!!: " + timeRemaining;
    quizBox.appendChild(createP2);
  }

  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Initials here: ";
  quizBox.appendChild(createLabel);
  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "initials");
  createInput.textContent = "";
  quizBox.appendChild(createInput);

  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";
  quizBox.appendChild(createSubmit);
  createSubmit.addEventListener("click", function () {
    var initials = createInput.value;

    if (initials === null) {
      console.log("Heyy!!! Listeen!!");
    } else {
      var finalScore = {
        initials: initials,
        score: timeRemaining,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);

      window.location.replace("./scoreLogs.html");
    }
  });
}
