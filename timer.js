
var display = document.getElementById("timer");
var startTimer = document.getElementById("startTimer");
var pauseTimer = document.getElementById("pauseTimer");
var stopTimer = document.getElementById("stopTimer");
var minutesPrompt = document.getElementById("minutesPrompt");

var timePrompt = prompt("how many minutes do you want to study for?");
let timerSeconds = timePrompt * 60;
var isPaused = false;

function countDown() {
    display.innerHTML = timePrompt;
    const minutes = Math.floor(timerSeconds / 60);
    const seconds = timerSeconds % 60;
    timerSeconds --;
    display.innerHTML = minutes + ":" + seconds;
    if (timerSeconds < 9) {
        display.innerHTML = minutes + ":" + "0" + seconds;
    }
    if (timerSeconds < 0) {
        display.innerHTML = "Time over";
    }
    if (timerSeconds == 0) {
        window.location = "snake_game.html"
    }
    var music = document.getElementById("bgMusic");
    music.play();
}

stopTimer.addEventListener("click", manualFinish);

function manualFinish() {
    window.location.href = "snake_game.html";
}

pauseTimer.addEventListener("click", () => {
    clearInterval(Interval);
});

startTimer.addEventListener("click", () => {
    clearInterval(Interval);
    var Interval = setInterval(countDown, 1000);
});

countDown();

var Interval = setInterval(countDown, 1000);
//side menu

var menubutton = document.getElementById("menubutton")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px"

menubutton.onclick = function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "img/close.png";
    }
    else{
        sideNav.style.right = "-250px"
        menu.src = "img/ham.png"
    }
}