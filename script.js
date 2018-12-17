var h3 = document.querySelector("h3")

var color1btn = document.querySelectorAll("input")[0]

var color2btn = document.querySelectorAll("input")[1]

var color1 = document.querySelectorAll("input")[0].value

var color2 = document.querySelectorAll("input")[1].value

var body = document.querySelector("body")

function displayColorHexCodes(color1, color2) {
    h3.textContent=`${color1}, ${color2}`;
}

function updateColorValue(event) {
    if(event.target===color1btn){
        color1 = event.target.value
    } else if (event.target===color2btn) {
        color2 = event.target.value
    }
} 

function changeBackgroundColorDisplay(color1, color2) {
    body.style.background=`linear-gradient(to right, ${color1} , ${color2})`
}

function changeColor(event) {
    updateColorValue(event)
    changeBackgroundColorDisplay(color1, color2)
    displayColorHexCodes(color1, color2)
}

color1btn.addEventListener("change", changeColor)

color2btn.addEventListener("change", changeColor)

displayColorHexCodes(color1, color2);

