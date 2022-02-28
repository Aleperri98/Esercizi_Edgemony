const monster = document.getElementById("animation");
const container = document.getElementById("container");

const clickDown = document.getElementById("downBtn")
const clickUp = document.getElementById("upBtn");
const clickRight = document.getElementById("rightBtn");
const clickLeft = document.getElementById("leftBtn");

const backGround = document.getElementById("backGround")

// x left, y bottom

let x = 10;
let y = 10;

function showStop() {
    monster.src="sticker_21.gif";
}


function DOWN () {
    monster.style.top =  y + 10 + "px";
    monster.src="sticker_27.gif";
    setTimeout (showStop, 1000);
    y=y+10;
}

function UP () {
    monster.style.top = y - 10 + "px";
    monster.src="sticker_27.gif";
    setTimeout (showStop, 1000);
    y=y-10;
}

function RIGHT () {
    monster.style.left = x + 10 + "px";
    monster.src="sticker_27.gif";
    setTimeout (showStop, 1000);
    x=x+10;
}

function LEFT () {
    monster.style.left = x - 10 + "px";
    monster.src="sticker_27.gif";
    setTimeout (showStop, 1000);
    x=x-10;
}


clickDown.addEventListener("click", DOWN);
clickUp.addEventListener("click", UP);
clickRight.addEventListener("click", RIGHT)
clickLeft.addEventListener("click", LEFT);