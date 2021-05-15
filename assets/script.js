var timeLeft = 75;
var score = 0;

const theQuestions = [
  {
    question: "A Syntax Error is?",
    answers: {
      a: "An error you will never find",
      b: "An error you find at the end when the program gives out a wrong value due to logic error",
      c: "An error caused by language rules being broken.",
      d: "An error due to user error"
    },
    correctAnswer: "An error caused by language rules being broken."
  },
  {
    question: "A memory location that holds a single letter or number.",
    answers: {
      a: "Double",
      b: "Int",
      c: "Char",
      d: "Word"
    },
    correctAnswer: "Char"
  },
  {
    question: "A short sections of code written to complete a task. ",
    answers: {
      a: "Function",
      b: "Array",
      c: "Buffer",
      d: "Syntax"
    },
    correctAnswer: "Function"
  },
  {
    question: "One loop inside the body of another loop is called ",
    answers: {
      a: "Loop in loop",
      b: "Nested",
      c: "Double loops",
      d: "A Loopty Loop"
    },
    correctAnswer: "Nested"
  },

];
let questionindex = 0
let timer;


//get question function (), check answer function, start timer function


const startButton = document.getElementById("startbutton");
const quizContainer = document.getElementById("start");
const questionsContainer = document.getElementById("questions");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");
const scoreElement = document.getElementById("score");
const choiceElement1 = document.getElementById("choice1");
const choiceElement2 = document.getElementById("choice2");
const choiceElement3 = document.getElementById("choice3");
const choiceElement4 = document.getElementById("choice4");
const timerElement = document.getElementById("timer")
const initialsElement = document.getElementById("initials")
const messageElement = document.getElementById("message")
const titleElement = document.getElementById("title")


function getQuestion() {
  titleElement.textContent = theQuestions[questionindex].question;
  choiceElement1.textContent = theQuestions[questionindex].answers.a
  choiceElement2.textContent = theQuestions[questionindex].answers.b
  choiceElement3.textContent = theQuestions[questionindex].answers.c
  choiceElement4.textContent = theQuestions[questionindex].answers.d
}

function answerQuestion(event) {
  console.log(event.target.textContent)
  if (event.target.textContent === theQuestions[0].correctAnswer) {
    console.log("correct")
  }
  else {
    console.log("incorrect")
  }

}



function countdown() {

  var timerTime = setInterval(function () {
    if (timeLeft > 1) {
      getQuestion()
      timerElement.textContent = timeLeft + "second(s) remaining";
      timeLeft--;
    }

    else {
      timerElement.textContent = "";
      clearInterval(timerTime);
    }

  }, 1000);
}

function startQuiz() {

  //hide start section
  quizContainer.classList.add("hide")
  //show question section
  questionsContainer.classList.remove("hide")
  //show the first question
  countdown()
}


function saveResults() {
  //save the score to local storage
}



// on submit, show results
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", saveResults);
choiceElement1.addEventListener("click", answerQuestion);
choiceElement2.addEventListener("click", answerQuestion);
choiceElement3.addEventListener("click", answerQuestion);
choiceElement4.addEventListener("click", answerQuestion);


//event listeners for choice buttons
//point to the check answer function
//check to see if it is correct then increase index by one
//then check to see if there are more questions left in array
//call get question function
//if there isnt then stop timer and call show results
//hide questions and show the user the score 
//remove the hide class from results
