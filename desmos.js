var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });

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