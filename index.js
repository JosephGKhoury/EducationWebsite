//side menu

var menubutton = document.getElementById("menubutton")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px"

menubutton.onclick = function() {
    if(sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "src/img/close.png";
    }
    else{
        sideNav.style.right = "-250px"
        menu.src = "src/img/ham.png"
    }
}

//animations 

const title = document.getElementById("heroTitle");
const strText = title.textContent;
const titleSplit = strText.split("");

title.textContent = "";

for (let i = 0; i < titleSplit.length; i++) {
    title.innerHTML += "<spann>" + titleSplit[i] + "</spann>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = title.querySelectorAll("spann")[char];
    span.classList.add("fade");
    char++;
    if (char === titleSplit.length) {
        complete();
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
