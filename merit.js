
const select1 = document.getElementById('svenska');
const select2 = document.getElementById('engelska');
const select3 = document.getElementById('engelska2');
const select4 = document.getElementById('svenska2');
const select5 = document.getElementById('svenska3');
const select6 = document.getElementById('ma1c');
const select7 = document.getElementById('ma2c');
const select8 = document.getElementById('ma3c');
const select9 = document.getElementById('webb1');
const select10 = document.getElementById('webb2');
const select11 = document.getElementById('idrott');
const select12 = document.getElementById('fysik');
const select13 = document.getElementById('program');
const select14 = document.getElementById('dig');




function Calculate() {
    var value1 = select1.options[select1.selectedIndex].value;
    var value2 = select2.options[select2.selectedIndex].value;
    var value3 = select3.options[select3.selectedIndex].value;
    var value4 = select4.options[select4.selectedIndex].value;
    var value5 = select5.options[select5.selectedIndex].value;
    var value6 = select6.options[select6.selectedIndex].value;
    var value7 = select7.options[select7.selectedIndex].value;
    var value8 = select8.options[select8.selectedIndex].value;
    var value9 = select9.options[select9.selectedIndex].value;
    var value10 = select10.options[select10.selectedIndex].value;
    var value11 = select11.options[select11.selectedIndex].value;
    var value12 = select12.options[select12.selectedIndex].value;
    var value13 = select13.options[select13.selectedIndex].value;
    var value14 = select14.options[select14.selectedIndex].value;
    
    var preScore = (value1 * 100) + (value2 * 100) + (value3 * 100) + (value4 * 100) + (value5 * 
    100) + (value6 * 100) + (value7 * 100) + (value8 * 100) + (value9 * 100) + (value10 * 100) + 
    (value11 * 100) + (value12 * 150) + (value13 * 100) + (value14 * 100);

    var score = preScore/1450;
    document.getElementById("result").innerHTML = Math.round(score * 100) / 100;
};


document.getElementById("gradeSubmit").addEventListener("click", Calculate);

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