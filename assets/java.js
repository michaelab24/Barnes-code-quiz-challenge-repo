var startButton = document.getElementById("start")
var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var submitButton = document.getElementById("submit");


function buildQuiz(){}

function startQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
startButton.addEventListener ("click", startQuiz)
submitButton.addEventListener("click", showResults);

var theQuestions = [
    {
        question: "A Syntax Error is?",
    answers: {
      a: "An error you will never find",
      b: "An error you find at the end when the program gives out a wrong value due to logic error",
      c: "An error caused by language rules being broken.",
      d: "An error due to user error"
    },
    correctAnswer: "c"
    },
    {
        question: "A memory location that holds a single letter or number.",
        answers: {
          a: "Double",
          b: "Int",
          c: "Char",
          d: "Word"
        },
        correctAnswer: "c"
      },
      {
        question: "A short sections of code written to complete a task. ",
        answers: {
          a: "Function",
          b: "Array",
          c: "Buffer"
        },
        correctAnswer: "a"
      }
      {
        question: "One loop inside the body of another loop is called ",
        answers: {
          a: "Loop in loop",
          b: "Nested",
          c: "Double loops"
        },
        correctAnswer: "b"
      },
      {
];

