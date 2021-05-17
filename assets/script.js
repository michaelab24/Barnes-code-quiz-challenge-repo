var timeLeft = 30;
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
    question: "A short sections of code written to complete a task.",
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
  {
      question: "What declaration MUST be included as the first item in an HTML document before the tag and is used to provide instructions to the web browser?",
    answers: {
      a: "<!DOCTYPE>",
      b: "<code>",
      c: "<embed>",
      d: "<caption>"
    },
    correctAnswer: "<!DOCTYPE>"
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
const highScores = document.getElementById("highscores")
const highScoresContainer = document.getElementById("highscorescontainer")

function getQuestion() {
  titleElement.textContent = theQuestions[questionindex].question;
  choiceElement1.textContent = theQuestions[questionindex].answers.a
  choiceElement2.textContent = theQuestions[questionindex].answers.b
  choiceElement3.textContent = theQuestions[questionindex].answers.c
  choiceElement4.textContent = theQuestions[questionindex].answers.d
}

function answerQuestion(event) {

  console.log(event.target.textContent)
  console.log()
  if (event.target.textContent === theQuestions[questionindex].correctAnswer) {
    console.log("correct") 
    score=score+2
    messageElement.textContent=("Correct!")
    //add to the score
    //show correct
  }
  else {
    console.log("incorrect")
    score=score-1
    timeLeft=timeLeft-5
    messageElement.textContent=("Incorrect")
    //subtract from the score/time
    //show wrong
  }
  questionindex++
  
  if (questionindex === theQuestions.length) {
    endGame()
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

function endGame() {
  scoreElement.textContent = "Your Score:" + score
  console.log("score"+score);
  questionsContainer.classList.add("hide")
  resultsContainer.classList.remove("hide")
  //display results
  //log score
  //file:///C:/Users/m/Projects/Barnes-code-quiz-challenge/Barnes-code-quiz-challenge-repo/index.html
  //file:///C:/Users/m/Projects/Barnes-code-quiz-challenge/Barnes-code-quiz-challenge-repo/highscores.html
  //window.location.href = "./highscores.html"
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
  //localStorage.setItem(initialsElement.value, score)
 
  highScore = score;
  if (localStorage.getItem(initialsElement.value) > score) { //congrats new highscore
      highScore = localStorage.setItem(initialsElement.value, score);
  }

  highScores.textContent = "HIGH SCORE IS: " + highScore + " BY " + initialsElement.value

  console.log(initialsElement.value)

  highScoresContainer.classList.remove("hide")
}

function renderResults()  {
  //grab the value saved to local storage 
  //set the value of highScores equal to the data from local storage
  //re-render highScores p tag

}

//get a view high score button/new html

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
