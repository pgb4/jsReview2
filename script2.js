function moveCommand(direction) {
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "1 thing";
            break;
        case "backward":
            whatHappens = "2 thing";
            break;
        case "left":
            whatHappens="3 thing";
            break;
        case "right":
            whatHappens="4ting";
            break;
        default:
            whatHappens="nothing";
    }
    console.log(whatHappens)
}

