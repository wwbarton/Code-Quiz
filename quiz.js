var questions = [
  {
    question: "Who is considered the 'Hero' of Orcarina of Time?:",
    choices: ["Melkor", "Chains", "Link", "Brian"],
    answer: "Link",
  },
  {
    question: "The villian in the game is a grumpy Gerudo named..",
    choices: ["George", "Donkey Kong", "Ganandorf", "Pyter"],
    answer: "Ganandorf",
  },
  {
    question: "What is the Hero's favorite instrument?",
    choices: [
      "Steel Drums",
      "Mongolian Throat singing",
      "The Orcarina",
      "He hates music!!!",
    ],
    answer: "The Orcarina",
  },
  {
    question: "What land does the game take place in?",
    choices: ["Gotham", "Arakeen", "Hyrule", "Bangalore"],
    answer: "Hyrule",
  },
  {
    question: "Who is the powerful triforce of Wisdom?",
    choices: ["Pythagoras", "Euclid", "Princess Zelda", "Archimedes"],
    answer: "Princess Zelda",
  },
];

var rupees = 0;
var questionIndex = 0;

var counter = document.querySelector("#counter");
var startGame = document.querySelector("#start-game");
var questions = document.querySelector("#questions");
var quizBox = document.querySelector("#box-box");

// Seconds left is 15 seconds per question:
var secondsLeft = 76;
// Holds interval time
var holdInterval = 0;

// Creates new element
var questionList = document.createElement("ul");
