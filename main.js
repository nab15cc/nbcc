const Zeta = document.querySelector("#Zeta");
const btn = document.querySelector("#btn");

const openPatImg = "vest.gif";
const closePatImg = "pz1.jpg" ;

const openPatSound = new Audio("mau.mp3")
const closePatSound = new Audio("ahh.mp3")

btn.addEventListener ("mousedown", openPat);
btn.addEventListener ("mouseup", closePat);

function openPat() {
    Zeta.src = openPatImg;
    openPatSound.play();
    closePatSound.pause();
    
}

function closePat() {
    Zeta.src = closePatImg;
    closePatSound.play();
    openPatSound.pause();
    
}