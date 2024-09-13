//const count = document.getElementById("add-click");
//const random = document.getElementById("randomize");

let countClicks = 0;
random.onclick = () => {
    location.reload();
}

/*function refreshPage(){
    window.location.reload();
}*/

document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById("count");
    const clickCount = document.getElementById('click-count');
    let count = 0;

    section.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;
    });
});
