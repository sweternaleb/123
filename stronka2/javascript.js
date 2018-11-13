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
    document.getElementById("elo").innerHTML = sessionStorage.godzina + ":" +sessionStorage.minuta + ":" +sessionStorage.sekunda;
}

function count_clicks() {
    localStorage.count = Number(localStorage.count) + 1;
    photolS();
}

function photolS() {
    if(localStorage.getItem("count") === null) {
        localStorage.count = 1;
    }
    var numer = localStorage.count % 4 + 1;
    var plik = "<img src=\"obrazek" + numer + ".png\"/>";
    document.getElementById("coffee").innerHTML = plik;
}
