const h3 = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
const body = document.querySelector("body")
let random = document.querySelector("button");

const changeColor = () => {
    body.style.background=`linear-gradient(to right, ${color1.value} , ${color2.value})`
    h3.textContent=body.style.background;
}

const componentToHex = (c) => {
    let hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

const randomizeColors = () => {
    let c = [];
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