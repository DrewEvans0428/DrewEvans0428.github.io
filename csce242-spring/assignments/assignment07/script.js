document.getElementById("draw-stairs").onclick = () => {
    let addLadder = document.getElementById("ladder");
    let climbButton = document.getElementById("climb-stairs");
    let climber = document.getElementById("climber");

    //Displays the ladder after draw stairs is clicked
    addLadder.style.display = "block";
    

    //Used 7 to get exactly ten links since it came with 3 bars when defaulted
    for (let i=0; i < 7; i++){
        //Portia helped me construct this for loop
        let hr = document.createElement("hr");
        hr.classList.add("tread");
        addLadder.appendChild(hr);
    }

    climber.style.display = "block";
    climber.style.position = "absolute";
    //Got position numbers through trial and error
    climber.style.bottom = "100px";
    //climber.style.left = "auto";
    //climber.style.margin = "auto";
    climber.style.textAlign = "center"
    climber.src = "images/left.png";

    //Displays the climb button
    climbButton.style.display = "block";
}

document.getElementById("climb-stairs").onclick = () => {
    let step = 0;
    let topSteps = 5; // Got the 5 value based on the amount of steps that were taken. Used trial and error to calculate the value.
    let climber = document.getElementById("climber");

    let stepInterval = setInterval(() => {
        if (step < topSteps) {
            //Moves climber up 100 pixels, used parseInt to grab the value of the previous position
            climber.style.bottom = (parseInt(climber.style.bottom) + 75) + "px";

            //The modulus determines if it is an even or odd step, which determines the position
            if (step % 2 == 0) {
                climber.src = "images/right.png";
            }
            else {
                climber.src = "images/left.png";
            }
            //Increments the step
            step++;
        }
        //The 1000 is the interval time in milliseconds
    }, 1000);
}