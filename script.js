const pi = 3.14;

function time(){
    var d = new Date();
    document.getElementById("time").innerHTML = d;
}

function bereken(){
    let diameter;
    diameter = document.getElementById("diameter").value;
    antwoord = diameter*diameter*pi*0.25
    document.getElementById("antwoord").innerHTML = antwoord;
}