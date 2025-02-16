const helloColumn = document.getElementById("hello-column");
const hello = document.getElementById("hello");

//hello function
const putHello = () => {
    const helloAdd = document.getElementById("hello");
    helloAdd.innerHTML = "hello";
}

helloColumn.addEventListener("click", () => putHello());

const imageColumn= document.getElementById("imageColumn");

const imageChange = () => {
    location.reload();
}

imageColumn.addEventListener("click", () => imageChange());