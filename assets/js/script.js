var questions = [
    { 
        q: "Commonly used data types do NOT include: ", 
        a: [ "strings", "booleans", "alerts", "numbers" ],
        correctAns: "alerts" 
    },
    { 
        q: "The condition in an if / else statement is enclosed with ______.", 
        ans: [ "quotes", "curly brackets", "parenthesis", "square brackets" ],
        correctAns: "parenthesis" 
    },
    { 
        q: "Arrays in JavaScript can be used to store _____. ", 
        ans: [ "numbers and strings", "other arrays", "booleans", "all of the above" ], 
        correctAns: "all of the above"
    },
    { 
        q: "String values must be enclosed within ______ when being assigned to variables.", 
        ans: [ "commas", "curly brackets", "quotes", "parenthesis" ],
        correctAns: "quotes"
    },
    { 
        q: "A very useful tool used during development and debugging for printing content to the debugger is: ", 
        ans: [ "JavaScript", "terminal/bash", "for loops", "console.log" ],
        correctAns: "console.log" 
    }
];

var score = 0;

var startBtnEl = document.getElementById("startBtn");
var wrapperEl = document.getElementById("wrapper");
var answerEl = document.getElementById("answerBtn")

var startEvent = function(event) {
    wrapperEl.innerHTML = "";
    wrapperEl.className = "wrapDiv";
    for (var i = 0; i < questions.length; i++) {
        var currentQ = questions[i];

        var questionEl = document.createElement("h2");
        questionEl.innerHTML = questions[i].q;
        wrapperEl.appendChild(questionEl);

        var answersEl = document.createElement("ol");
        wrapperEl.appendChild(answersEl);

        for (var i = 0; i < currentQ.a.length; i++) {
            var answerEl = document.createElement("li");
            answerEl.innerHTML = "<button class='btn' id='answerBtn' onclick='checkAns()' value='" + currentQ.a[i] + "'>" + currentQ.a[i] + "</button>";
            answersEl.appendChild(answerEl);

            var choiceEl = document.getElementById("answerBtn");
            console.log(choiceEl);
        }

    }
};

var checkAns = function(click, answerEl) {
    console.log(answerEl.value);
};

startBtnEl.addEventListener("click", startEvent);