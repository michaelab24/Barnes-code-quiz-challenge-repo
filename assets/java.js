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
        question: "",
    answers: {
      a: "",
      b: "",
      c: "",
      d: ""
    },
    correctAnswer: ""
    },
    {
        question: "",
        answers: {
          a: "",
          b: "",
          c: "",
          d: ""
        },
        correctAnswer: ""
      },
      {
        question: "",
        answers: {
          a: "",
          b: "",
          c: "",
          d: ""
        },
        correctAnswer: ""
      }
      {
        question: "",
        answers: {
          a: "",
          b: "",
          c: "",
          d: ""
        },
        correctAnswer: ""
      },
      {
];

