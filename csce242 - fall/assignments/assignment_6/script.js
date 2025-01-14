const slider = document.getElementById('slider');
const value = document.getElementById('value');
const sliderContainer = document.getElementById('slider-container');
const messageP = document.getElementById('color-value');
let mood = "";

//updates background
slider.addEventListener('input', function(){
    const r = slider.value;
    value.textContent = r;
    sliderContainer.style.backgroundColor = `rgb(${r}, 0, 0)`;

    if(r < 100){
        mood = "dark";
    }
    else if(r < 200){
        mood = "in between";
    }
    else{
        mood = "bright";
    }

    messageP.innerHTML = `${mood}`;
});

document.addEventListener('DOMContentLoaded', function (){
    const excercise1Btn = document.getElementById('excercise1');
    const excercise2Btn = document.getElementById('excercise2');
    const sliderExcerise = document.getElementById('slider-excercise');
    const imageSelector = document.getElementById('image-selector');
    const imageContainer = document.getElementById('image-container');

    //toggle excercises
    excercise1Btn.addEventListener('click', function () {
        sliderExcerise.style.display = 'block';
        imageSelector.style.display = 'none';
    });

    
    excercise2Btn.addEventListener('click', function () {
        sliderExcerise.style.display = 'none';
        imageSelector.style.display = 'block';
    });
    

    //Picture chooser
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function () {
            const size = button.id === 'small-pic' ? 200 : button.id === 'medium-pic' ? 400 : 600;
            imageContainer.innerHTML = `<img src="https://picsum.photos/${size}" alt="Random Image">`;
        });

    });

});
