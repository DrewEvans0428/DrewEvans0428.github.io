document.getElementById("btn-display").onclick = () => {
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const displayArea = document.getElementById("start-end-display");
    displayArea.innerHTML = "";
    const errorDisplay = document.getElementById("error-num-order");
    errorDisplay.innerHTML = "";    //clear out any previous errors
    const favMessageP = document.getElementById("fav-message");
    favMessageP.innerHTML = "";

    if(endNum < startNum) {
        errorDisplay.innerHTML = `${endNum} is less than ${startNum}.`
        return; //don't do anything else if you already have an error
    }

    for(let i=startNum; i <= endNum; i++){
        const li = document.createElement("li");
        li.innerHTML = i;
        displayArea.append(li);
        //attach event to onclick li
        li.onclick = () => {
            favMessageP.innerHTML = `You clicked ${i}.`
        }
    }
}

let count = 0;
let updateCount;
let resetButton;

//Loop through the numbers and display a count
//could be useful for loops assignment
document.querySelector("#btn-count").onclick = (event) => {
    //start the counter
    if(event.currentTarget.innerHTML.toLowerCase() == "start"){
        event.currentTarget.innerHTML = "Stop";

        updateCount = setInterval(()=>{
            count++;
            document.querySelector("#count-display").innerHTML = count;
        },500);
    }   
    //stop the counter
    else {
        event.currentTarget.innerHTML = "Start";
        clearInterval(updateCount)
    }

    document.querySelector("#reset-button").onclick = () => {
        count = 0;
        clearInterval(updateCount);
        document.querySelector("#btn-count").innerHTML = "start";
        document.querySelector("#count-display").innerHTML = "";
    }

}



document.querySelector("#btn-show-toys").onclick = (event) =>{
    const toys = ["legos", "action-figures", "lightsaber"];
    const descriptions = ["A fun brick by brick toy that involves innovation and plastic blocks", "Fun toys where you can spark imagination and do whatever you desire", "lightsabers are from star wars, have duels with your friends"];
    event.currentTarget.disabled = true;

    const ul = document.createElement("ul");
    document.getElementById("display-toys").append(ul);

    toys.forEach((toy, i)=>{
        const li = document.createElement("li");
        ul.append(li);
        //Sets li value equal to our array index
        li.innerHTML = `${i + 1}. ${toy}`;
    });

    document.getElementById("")
}
