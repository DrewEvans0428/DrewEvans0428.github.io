document.getElementById("excercise2").onclick = () => {
    const bicycleExcercise = document.getElementById("bicycle-excercise");
    const colorExcercise = document.getElementById("color-excercise");

    //toggle
    bicycleExcercise.style.display = "none";
    colorExcercise.style.display = "inline-block";
}

document.getElementById("excercise1").onclick = () => {
    const bicycleExcercise = document.getElementById("bicycle-excercise");
    const colorExcercise = document.getElementById("color-excercise");

    bicycleExcercise.style.display = "inline-block";
    colorExcercise.style.display = "none";
}

document.getElementById("travel-text").oninput = () =>{
  const userInput = document.getElementById("travel-text").value;
  const scooter = document.getElementById("scooter-image");
  const car = document.getElementById("car-image");
  const bike = document.getElementById("bike-image");
  const skate = document.getElementById("skate-image");

  scooter.style.display = "none";
  car.style.display = "none";
  bike.style.display = "none";
  skate.style.display = "none";

  if(userInput == "bike"){
    bike.style.display = "inline";
  }
  else if(userInput == "scooter"){
    scooter.style.display = "inline";
  }
  else if(userInput == "car"){
    car.style.display = "inline";
  }
  else if(userInput == "skate"){
    skate.style.display = "inline";
  }
    
}

document.getElementsByClassName(".button").onclick = () => {
    const color = document.getElementsByClassName("button").value;
    const heart = document.getElementById("heart");
    const redButton = document.getElementById("red-button");
    const greenButton = document.getElementById("green-button");
    const blueButton = document.getElementById("blue-button");

    if(color == "red"){
        heart.style.backgroundcolor = "red";
    }
    else if(color == "green"){
        heart.style.color = "green";
    }
    else if(color == "blue"){
        heart.style.color = "blue";
    }
    else{
        heart.style.color = "white";
    }
}