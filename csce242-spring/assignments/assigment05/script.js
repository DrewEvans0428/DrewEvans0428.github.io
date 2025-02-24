const helloColumn = document.getElementById("hello-column");
let hello = document.getElementById("hello");

//hello function
const putHello = () => {
    let helloAdd = document.getElementById("hello");
    helloAdd.innerHTML = "hello";
}

helloColumn.addEventListener("click", () => putHello());

const imageColumn= document.getElementById("imageColumn");

const imageChange = () => {
    location.reload();
}

imageColumn.addEventListener("click", () => imageChange());