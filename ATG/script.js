function popupfunc() {
    var pp = document.getElementById("ppup");
    pp.style.display = "flex";
}

function closing() {
    var closed = document.getElementById("ppup");
    closed.style.display = "none";
}

function shifting1() {
    var shift1 = document.getElementById("popupcreateaccount");
    var shift2 = document.getElementById("popupsigninaccount");
    shift1.style.display = "none";
    shift2.style.display = "flex";
}

function shifting2() {
    var shift1 = document.getElementById("popupcreateaccount");
    var shift2 = document.getElementById("popupsigninaccount");
    shift1.style.display = "flex";
    shift2.style.display = "none";
}

function popmobilefunc() {
    var pop = document.getElementById("popumobile");
    pop.style.display = "flex";
}

function closing1() {
    var closingmobile = document.getElementById("popumobile");
    closingmobile.style.display = "none";
}

function shifting3() {
    var shift1 = document.getElementById("create-popup-mobile-content");
    var shift2 = document.getElementById("signin-popup-mobile-content");
    shift1.style.display = "none";
    shift2.style.display = "flex";
}

function shifting4() {
    var shift1 = document.getElementById("create-popup-mobile-content");
    var shift2 = document.getElementById("signin-popup-mobile-content");
    shift1.style.display = "flex";
    shift2.style.display = "none";
}