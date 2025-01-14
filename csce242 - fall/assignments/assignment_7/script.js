document.getElementById('draw-button').addEventListener('click', drawStars);

function drawStars(){
    const amtStars = document.getElementById('amt-stars').value;
    const canvas = document.getElementById('canvas');
    const error = document.getElementById('error');
    const message = document.getElementById('message');

    canvas.innerHTML = '';
    error.textContent = '';
    message.style.display = 'none';

    if (amtStars <= 0){
        error.textContent = 'Number will not work, please enter a number with a value greater than 0.';
        return;
    }

    for (let i = 0; i < amtStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        star.style.left = `${Math.random() * (canvas.clientWidth - 20)}px`;
        star.style.top = `${Math.random() * (canvas.clientHeight - 20)}px`;

        star.addEventListener('click', function (event) {
            message.textContent = `Clicked on star number ${i + 1}`;
            message.style.display = 'block';
            message.style.left = `${event.pageXpx}`;
            message.style.right = `${event.pageXpx}`;
        });

        canvas.appendChild(star);
    }
}
