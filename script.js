var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body")
var random = document.querySelector("button");

function changeColor() {
    body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})`
    h3.textContent=body.style.background;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function randomizeColors(){
    var c = [];
    for(i=0; i<6; i++){
        c[i] = Math.round((Math.random()*255));
    }
    color1.value = rgbToHex(c[0], c[1], c[2])
    color2.value = rgbToHex(c[3], c[4], c[5])
    changeColor()    
}

random.addEventListener("click", randomizeColors)

color1.addEventListener("change", changeColor)

color2.addEventListener("change", changeColor)

changeColor()