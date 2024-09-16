//const count = document.getElementById("add-click");
//const random = document.getElementById("randomize");

let countClicks = 0;
random.onclick = () => {
    location.reload();
}


document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById("count");
    const clickCount = document.getElementById('click-count');
    let count = 0;

    section.addEventListener('click', () => {
        count++;
        clickCount.textContent = count;
    });
});

const slider = document.getElementById("myRange");
const image = document.getElementById("slider-image");
const container = document.querySelector(".three");

slider.oninput = function() {

    const containerWidth = container.offsetWidth;
    const imageWidth = image.offsetWidth;
    
    const maxMove = containerWidth - imageWidth;

    const leftPosition = ((this.value / 100) * 2 -1) * maxMove / 2;
    image.style.transform = `translateX(${leftPosition}px)`;
}

