const doStuff = () =>{
    alert("Hello World");
};

const myButton = document.getElementById("btn-click");
const secondButton = document.getElementById("second-button");
const deleteButton = document.getElementById("delete-button");
const animateButton = document.getElementById("animate-button");
//myButton.onClick = doStuff;

myButton.onclick = () => {
    document.getElementById("message").innerHTML = "Hello Everyone!";
    document.getElementById("stuff").classList.add("special");
};

secondButton.onclick = () => {
    document.getElementById("message").innerHTML = "Goodbye Everyone!";
    document.getElementById("stuff").classList.remove("special");
};

deleteButton.onclick = () => {
    document.getElementById("stuff").classList.add("vanish");
};

animateButton.onclick = () => {
    document.getElementById("stuff").classList.add("animate")
}


//Showing data from an input field
/*document.getElementById("txt-first-name").onkeyup = () => {
    const textBox = document.getElementById("txt-first-name");
    document.getElementById("result").innerHTML = textBox.value;
}*/

document.getElementById("txt-first-name").onkeyup = (event) => {
    document.getElementById("result").innerHTML = event.target.value;
}


//Add a second button, called say goodbye
//when clicked change the text to goodbye everyone, and remove the special styles
