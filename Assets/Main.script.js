var countdownEl = document.getElementById("countdown");
var startBtn = document.getElementById("start");
var title = document.getElementById("questionTitle");
var choices = document.getElementById("choices");
var answer = document.getElementById('answer');
var main1 = document.getElementById(".main1");
var submitbtn = document.getElementById("submit");
var endScreenEl = document.getElementById("endScreen");
var correct = document.getElementById('correct');
var incorrect = document.getElementById('incorrect');

startBtn.addEventListener("click", hideAll);

var questionsList = [
{
    title: "To color the text element css you would use what?",
    choices: ["Background Color", "Color", "Font-Decoration", "Jquery"],
    answer: "Color",
},

{
    title: "What does API stand for in relation to JavaScript?",
    choices: ["Application Programming Interface", "Access Parathesis Integer", "Any Progressive Interval", "Accessible Private Internship"],
    answer: "Application Programming Interface",
},

{
    title: "What does an Array do?",
    choices: ["Logs data input into the terminal based off the functionality of its prefixs", "A procedure or function that waits for an event to occur", "Retreives Data from a database", "Stores a fixed-sized collection of elements of the same data type"],
    answer: "Stores a fixed-sized collection of elements of the same data type",
},

{
    title: "How do you console log something?",
    choices: ["console=log", "logconsole", "console(log)", "console.log"],
    answer: "console.log",
},

{
    title: "What special character would you use as a prefix in CSS for an ID?",
    choices: ["#", ".", "&", "$"],
    answer: "#",
},
];

var secondsLeft = 120;

function time() {
    console.log("timefuctionused");
    var timeInterval = setInterval(function () {
    secondsLeft--; 
    countdownEl.textContent = secondsLeft;
    if(secondsLeft <= 0) {
    clearInterval(timeInterval);
    endGame();
    }
}, 1000);
}

function endGame () {
    console.log('Game Over');
    questionTitle.setAttribute('class','hide');
    choices.setAttribute('class','hide');
    endScreenEl.removeAttribute('class','hide');
}

var randomNumber = 0;

function getQuestion () {
    choices.innerHTML = "";
    var currentQuestion = questionsList[randomNumber];
    return currentQuestion;
  }


function buildQuestion (value) {
console.log(value)
var questionTitle = value.title;
var answers = value.choices;
var correct = value.answer;
title.innerText = questionTitle;
answers.forEach(element => {
    var answerEl = document.createElement('button');
    answerEl.innerText = element;
    answerEl.setAttribute('value', element);
    //add click event to check button value against current question correct answer value
    answerEl.onclick = checkAnswer;
    choices.appendChild(answerEl);
});
}

function checkAnswer () {
    if(this.value === questionsList[randomNumber].answer) {
        console.log('correct');
        randomNumber++
        correct.removeAttribute('class');
        setTimeout(function(){
            correct.setAttribute('class', 'hide')
        }, 1000)
    }
    else {
        console.log('WRONG');
        secondsLeft = secondsLeft-15;
        countdownEl.textContent = secondsLeft;
        incorrect.removeAttribute('class');
        setTimeout(function(){
            incorrect.setAttribute('class', 'hide')
        }, 1000)
    }
    if (questionsList.length > randomNumber) {
    buildQuestion(getQuestion());
    }
    else {
        endGame()
    }
}


function startQuiz () {
    time();
    buildQuestion(getQuestion());
}


function hideAll () {
var main1 = document.querySelector(".main1");
main1.style.display = "none";
startQuiz()
}

// WHEN I answer a question


// THEN I am presented with another question


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock


// WHEN all questions are answered or the timer reaches 0

// THEN the game is over

// WHEN the game is over
// THEN I can save my initials and my score

//questions to be answered

//id "endScreen" class "hide"
// id "submit" for the submit score button
// id "finalScore"
// id "choices"
// h2 id "questionTitle"
// id "questions" class= "hide"
// button id "start" class= "play"
// starting paragragh id= "text"
// mainscreen class= "start"
// main page class "main1"
// highscore button id="highscores"
// timer button id "timer"