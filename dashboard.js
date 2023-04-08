
// sideMenu
var sidebar = document.getElementById("sidebar");
var gray = document.getElementById("redColor");
var white = document.getElementById("blueColor");
var hamMenu = document.getElementById("hamMenu");
var mainDash = document.getElementById("mainDash");
var exit = document.getElementById("exit");

gray.addEventListener("click", changeColorGray);
white.addEventListener("click", changeColorWhite);
hamMenu.addEventListener("click", closeMenu);

function changeColorGray() {
    document.body.style.background = "gray";
}

function changeColorWhite() {
    document.body.style.background = "white";
}

function closeMenu() {
    sidebar.style.display = "none";
    mainDash.style.position = 'absolute';
}


//clock
time = document.getElementById("time");


setInterval(clock, 1000);
function clock() {
    date = new Date();

    minutesNow = date.getMinutes();
    hoursNow = date.getHours();
    

    dateNow = hoursNow + ":" + minutesNow;

    hoursNow = (hoursNow < 10) ? "0" + hoursNow : hoursNow;
    minutesNow = (minutesNow < 10) ? "0" + minutesNow : minutesNow;


    document.getElementById("time").innerHTML = dateNow;

    if (minutesNow < 10) {
        document.getElementById("time").innerHTML = hoursNow + ":" + minutesNow;
    }
}


clock();

//close

//streak counter 

var days = 0;

setInterval(streak, 1000 * 60 * 60 * 24);
function streak() {
    localStorage.setItem("time", days);
    var cycles = parseInt(localStorage.getItem('time') ?? '0');
    localStorage.setItem('time', (cycles + 1).toString());
    console.log(cycles);
    days ++;
    document.getElementById("streakCount").innerHTML = localStorage.getItem("time") + " days";
    if (days == 1) {
        document.getElementById("streakCount").innerHTML = localStorage.getItem("time") + " day";
    }
}

window.onload = streak();

// background music

document.getElementById("playBtn").addEventListener("click", playMusic);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic);

function playMusic() {
    var music = document.getElementById("bgMusic");
    music.play();
    document.getElementById("pauseBtn").style.display = "inline-block";
    document.getElementById("playBtn").style.display = "none";
}

function pauseMusic() {
    var music = document.getElementById("bgMusic");
    music.pause();
    document.getElementById("pauseBtn").style.display = "none";
    document.getElementById("playBtn").style.display = "inline-block";
}

//quote generator

function changeQuote() {

    var quoteDisplay = document.getElementById("quote");

    var quotes = ["'one day at a time'", "'No pressure, no diamonds.'", "'Stay foolish stay hungry'", "'Try Again. Fail again. Fail better.'", "'Impossible is for the unwilling.'", "'Take the risk or lose the chance.'", "'He who is brave is free.'", "'Leave no stone unturned.'", "'Do it with passion or not at all.'", "'If you’re going through hell, keep going.'", "'Keep your chin up.'", "'Work hard. Stay humble.'", "'Go hard or go home.'"];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    quoteDisplay.innerHTML = randomQuote;
}

changeQuote();

//side Nav

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

//pop up 

var popup = document.getElementById("popup");
var yesBtn = document.getElementById("yesBtn");
var logOutBtn = document.getElementById("logOut");
var noBtn = document.getElementById("noBtn");
var navHome = document.getElementById("navHome");

logOutBtn.addEventListener("click", displayPopup);
navHome.addEventListener("click", displayPopup)
yesBtn.addEventListener("click", logout);
noBtn.addEventListener("click", removePopup);

function displayPopup() {
    popup.style.display = "block";
}

function logout() {
    window.location = "/index.html";
    popup.style.display = "none";
}

function removePopup() {
    popup.style.display = "none";
}








