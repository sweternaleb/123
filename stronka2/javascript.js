function czas() {

    if (sessionStorage.getItem("sekunda") === null && sessionStorage.getItem("minuta") === null && sessionStorage.getItem("godzina") === null) {
        var czas = new Date();
        var sekunda = czas.getSeconds();
        if (sekunda < 10) {
            sekunda = "0" + sekunda;
        }
        var minuta = czas.getMinutes();
        if (minuta < 10) {
            minuta = "0" + minuta;
        }
        var godzina = czas.getHours();
        if (godzina < 10) {
            godzina = "0" + godzina;
        }
        sessionStorage.sekunda = sekunda;
        sessionStorage.minuta = minuta;
        sessionStorage.godzina = godzina;
    }
    document.getElementById("timersS").innerHTML = sessionStorage.godzina + ":" +sessionStorage.minuta + ":" +sessionStorage.sekunda;
}

function count_clicks() {
    localStorage.count = Number(localStorage.count) + 1;
    photolS();
}

function photolS() {
    if(localStorage.getItem("count") === null) {
        localStorage.setItem("count",1);
    }
    var numer = localStorage.count % 4 + 1;
    var plik = "<img src=\"obrazek" + numer + ".png\"/>";
    document.getElementById("coffee").innerHTML = plik;
}

function small() {
    var small1 = document.getElementsByClassName("kawa1")[0];
    small1.style.width = '60%';
    small1.style.height = '200px';
    var small1 = document.getElementsByClassName("kawa1")[1];
    small1.style.width = '60%';
    small1.style.height = '200px';
    var small1 = document.getElementsByClassName("kawa1")[2];
    small1.style.width = '60%';
    small1.style.height = '200px';
}
function big() {
    var small1 = document.getElementsByClassName("kawa1")[0];
    small1.style.width = '100%';
    small1.style.height = '350px';
    var small1 = document.getElementsByClassName("kawa1")[1];
    small1.style.width = '100%';
    small1.style.height = '350px';
    var small1 = document.getElementsByClassName("kawa1")[2];
    small1.style.width = '100%';
    small1.style.height = '350px';
}
function medium() {
    var small1 = document.getElementsByClassName("kawa1")[0];
    small1.style.width = '80%';
    small1.style.height = '270px';
    var small1 = document.getElementsByClassName("kawa1")[1];
    small1.style.width = '80%';
    small1.style.height = '270px';
    var small1 = document.getElementsByClassName("kawa1")[2];
    small1.style.width = '80%';
    small1.style.height = '270px';
}
var a = 0;
function appenTextbox() {
    if (a == 0) {
        var textbox = document.createElement('input');
        var br = document.createElement("br");
        var nick = document.createTextNode("Twoj nick: ");
        br.id = 'br';
        nick.id = 'nick';
        textbox.type = 'text';
        textbox.id = 'textbox';
        var form = document.getElementById('theForm');
        form.insertBefore(textbox, form.childNodes[7]);
        form.insertBefore(br, form.childNodes[7]);
        form.insertBefore(nick, form.childNodes[8]);
        a = a + 1;
    }
    
}
function removeTextbox() {
    document.getElementById("theForm").removeChild(document.getElementById('textbox'));
    document.getElementById("theForm").removeChild(document.getElementById('br'));
    document.getElementById("theForm").removeChild(document.getElementById('theForm').childNodes[7]);
    a = 0;
}

$(function () {
    $("#accordion").accordion();
});