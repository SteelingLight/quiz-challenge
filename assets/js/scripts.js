// Define global variables

var highScore = [{score:50,initial:"AH"}];

let initials = document.getElementById("initials");

let startForm = document.getElementById("start-box");
let scoreForm = document.getElementById("score-box");
let scoreBoard = document.getElementById("score-board");
let questionForm = document.getElementById("question-box");

answerListItem = document.querySelector("#answers");
questionItem = document.querySelector("#question");

let scoreBox = document.querySelector("#score-value");

let currentScore = 0;

let timeRemaining = 60;

//Code for timer
//  start timer
//  display timer remianing on screen span - timer_coutdown
function startTimer() {
    const timeDisplay = document.getElementById("timer-countdown");
  
    intervalID = setInterval(function () {
      timeRemaining--;
  
      timeDisplay.innerText = timeRemaining + "s";
  
      if (timeRemaining <= 0) {
        stopTimer();
      }
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(intervalID);
    questionForm.style.display = "none";
    scoreForm.style.display = "flex";
  }


//Loading screen:
//Shows start message
//on-click event <start button> 
//      hide start form
//      show question form
//      start timer
document.getElementById("start").addEventListener("click", function(){
    startForm.style.display = "none";
    questionForm.style.display = "flex";
    timeRemaining = 60;
    currentScore = 0;
    startTimer();
    loadQuestion();
})



//Question form
//  generate random number from 0 to length of question array - Done
//  retrieve questions from array - Done
//  set p-question values to question - Done
//  dynamically generate ol for answers for questions (mark data element true/false for each answer) - Done
//  listen for slick event on each li in ol object
//  use hover to change color of answers background
//  on click:
//      check data element on clicked object
//          if true: display "CORRECT" message, increment score by 2, move to next question
//          if false: display "INCORRECT" message, decrement score by 1, remove 5 seconds from timer, move to next question
//  continue until timer = 0
//  hide question form
//  show score form

var createAnswerList = function(answerList) {
    console.log(answerList);

    //document.getElementById("answers").innerHTML = "";
    answerListItem.innerHTML = "";

    for (let i = 0; i < answerList.length; i++) {

        console.log(Object.keys(answerList[i]));
        console.log(Object.values(answerList[i]));

        var questionAnswer = document.createElement("li");
        questionAnswer.className = "answer";
        questionAnswer.setAttribute("data-correct-answer", Object.values(answerList[i]));
        questionAnswer.textContent = Object.keys(answerList[i]);
    
        answerListItem.append(questionAnswer);

    }
}

var loadAnswers = function(){
    var answerList = questions[1].Answers;
    createAnswerList(answerList);
}

var loadQuestion = function(){

    let rndNumner = Math.floor(Math.random() * questions.length);

    console.log(questions[rndNumner].Question);
    questionItem.textContent = questions[rndNumner].Question;
    var answerList = questions[rndNumner].Answers;
    createAnswerList(answerList);
}

document.getElementById("answers").addEventListener("click", function(e){
    

    if (e.target.dataset.correctAnswer === "true") {
        currentScore = currentScore + 2;
        scoreBox.innerHTML=currentScore;
    }
    else {
        currentScore = currentScore - 1;
        scoreBox.innerHTML=currentScore;
        timeRemaining -= 5;
    }

    loadQuestion();
});
//Score form
//  show final score in span - final_score
//  listen for click in save button
//  verify initials are entered
//  save initials and score to local storage
//  hide score form
//  show score board
document.getElementById("save").addEventListener("click", function(){
    if (initials.value){
    highScore.push({score:currentScore,initial:initials.value});
    localStorage.setItem("score",JSON.stringify(highScore));
    scoreForm.style.display = "none";
    scoreBoard.style.display = "flex";
    }
    else{
        alert("please enter initialst")
    }
})

//Score Board
//  Retrieve values from local storage
//  sort records by score descending
//  dynamically build li values and write values to ol
//  listen for click on close button
//  close score board
//  open start form


