document.getElementById("draw-stairs").onclick = () => {
    let addLadder = document.getElementById("ladder");
    let climbButton = document.getElementById("climb-stairs");
    let climber = document.getElementById("climber");


    addLadder.style.display = "block";

    //Used 7 to get exactly ten links since it came with 3 bars when defaulted
    for (let i=0; i < 7; i++){
        let hr = document.createElement("hr");
        hr.classList.add("tread");
        addLadder.appendChild(hr);
    }

    climber.style.display = "block";
    climber.style.position = "absolute";
    //Got position numbers through trial and error
    climber.style.top = "700px";
    climber.style.left = "330px";
    climber.src = "images/left.png";

    climbButton.style.display = "block";
}

document.getElementById("climb-button").onclick = () => {

}