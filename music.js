// music

document.getElementById("playBtn").addEventListener("click", playMusic1);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic1);

//music selection controls

document.getElementById("song1").addEventListener("click", playMusic2);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic2);

document.getElementById("song2").addEventListener("click", playMusic3);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic3);

document.getElementById("song3").addEventListener("click", playMusic4);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic4);

document.getElementById("song4").addEventListener("click", playMusic5);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic5);

document.getElementById("song5").addEventListener("click", playMusic6);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic6);

document.getElementById("song6").addEventListener("click", playMusic7);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic7);

document.getElementById("song7").addEventListener("click", playMusic8);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic8);

document.getElementById("song8").addEventListener("click", playMusic9);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic9);

document.getElementById("song9").addEventListener("click", playMusic10);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic10);

document.getElementById("song10").addEventListener("click", playMusic11);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic11);

document.getElementById("song11").addEventListener("click", playMusic12);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic12);

document.getElementById("song12").addEventListener("click", playMusic13);
document.getElementById("pauseBtn").addEventListener("click", pauseMusic13);

//music box
function playMusic1() {
    var music = document.getElementById("bgMusic");
    music.play();
}

function pauseMusic1() {
    var music = document.getElementById("bgMusic");
    music.pause();
}

//music selection
function playMusic2() {
    var music = document.getElementById("bgMusic1");
    music.play();
}

function pauseMusic2() {
    var music = document.getElementById("bgMusic1");
    music.pause();
}

function playMusic3() {
    var music = document.getElementById("bgMusic2");
    music.play();
}

function pauseMusic3() {
    var music = document.getElementById("bgMusic2");
    music.pause();
}

function playMusic4() {
    var music = document.getElementById("bgMusic3");
    music.play();
}

function pauseMusic4() {
    var music = document.getElementById("bgMusic3");
    music.pause();
}

function playMusic5() {
    var music = document.getElementById("bgMusic4");
    music.play();
}

function pauseMusic5() {
    var music = document.getElementById("bgMusic4");
    music.pause();
}

function playMusic6() {
    var music = document.getElementById("bgMusic5");
    music.play();
}

function pauseMusic6() {
    var music = document.getElementById("bgMusic5");
    music.pause();
}

function playMusic7() {
    var music = document.getElementById("bgMusic6");
    music.play();
}

function pauseMusic7() {
    var music = document.getElementById("bgMusic6");
    music.pause();
}

function playMusic8() {
    var music = document.getElementById("bgMusic7");
    music.play();
}

function pauseMusic8() {
    var music = document.getElementById("bgMusic7");
    music.pause();
}

function playMusic9() {
    var music = document.getElementById("bgMusic8");
    music.play();
}

function pauseMusic9() {
    var music = document.getElementById("bgMusic8");
    music.pause();
}

function playMusic10() {
    var music = document.getElementById("bgMusic9");
    music.play();
}

function pauseMusic10() {
    var music = document.getElementById("bgMusic9");
    music.pause();
}

function playMusic11() {
    var music = document.getElementById("bgMusic10");
    music.play();
}

function pauseMusic11() {
    var music = document.getElementById("bgMusic10");
    music.pause();
}

function playMusic12() {
    var music = document.getElementById("bgMusic11");
    music.play();
}

function pauseMusic12() {
    var music = document.getElementById("bgMusic11");
    music.pause();
}

function playMusic13() {
    var music = document.getElementById("bgMusic12");
    music.play();
}

function pauseMusic13() {
    var music = document.getElementById("bgMusic12");
    music.pause();
}

//image changer 

var song1 = document.getElementById("song1");
var img = document.getElementById("coverImg")
var musicTitle = document.getElementById("musicTitle");

function changeImg1() {
    img.src = "img/song1.jpg";
    musicTitle.innerHTML = "Lofi hiphop";
}

function changeImg2() {
    img.src = "img/song2.jpg";
    musicTitle.innerHTML = "Coffee break";
}

function changeImg3() {
    img.src = "img/song3.jpeg";
    musicTitle.innerHTML = "Focus mode";
}

function changeImg4() {
    img.src = "img/song4.jpg";
    musicTitle.innerHTML = "Lofi chill";
}

function changeImg5() {
    img.src = "img/song5.jpg";
    musicTitle.innerHTML = "Lofi coding";
}

function changeImg6() {
    img.src = "img/song6.png";
    musicTitle.innerHTML = "Chill break";
}

function changeImg7() {
    img.src = "img/song7.jpg";
    musicTitle.innerHTML = "Intense focus";
}

function changeImg8() {
    img.src = "img/song8.jpg";
    musicTitle.innerHTML = "Cold winter nights";
}

function changeImg9() {
    img.src = "img/song9.jpeg";
    musicTitle.innerHTML = "Spring vibes";
}

function changeImg10() {
    img.src = "img/song10.jpg";
    musicTitle.innerHTML = "late night thoughts";
}

function changeImg11() {
    img.src = "img/song11.jpg";
    musicTitle.innerHTML = "Lofi study";
}

function changeImg12() {
    img.src = "img/song12.jpg";
    musicTitle.innerHTML = "chill afternoon";
}

document.addEventListener("play", function(e) {
    var audios = document.getElementsByTagName("audio");
    for (var i = 0, len = audios.length; i < len; i++) {
        if (audios[i] != e.target) {
            audios[i].pause();
        }
    }
}, true);

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