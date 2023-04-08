let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map( button => {
    button.addEventListener("click", (e) => {
        switch(e.target.innerText){
            case "C":
                display.innerText = "";
                break;
            case "←":
                if (display.innerText){
                    display.innerText =display.innerText.slice(0, -1);
                }
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerHTML = "Syntax Error!"
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    })
})

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