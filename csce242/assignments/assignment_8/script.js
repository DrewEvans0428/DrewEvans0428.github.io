const imagesArray = [
    { src: './images/birthday.jpg', title:'birthday' , description: 'Its his birthday!'},
    { src: './images/clown.jpg', title: 'Clown', description:'Hes a clown now!'},
    { src: './images/rain.jpg', title:'rain', description:'Its raining! grab an umbrella'},
    { src: './images/read.jpg', title:'read', description:'Enjoying the book!'},
    { src: './images/shovel.jpg', title:'shovel', description: 'Has a shovel and is ready to work'},
    { src: './images/work.jpg', title:'work', description: 'Has a laptop and is doing schoolwork'}
];

const displayImages = () => {
    const container = document.getElementById('image-container');

    container.innerHTML = '';
    imagesArray.forEach((image, index) => {
        const imageElement = document.createElement('img');
        imageElement.src = image.src;
        imageElement.alt = image.title;
        imageElement.classList.add('image');
        imageElement.style.width = '150px';
        imageElement.style.height = 'auto';
        imageElement.addEventListener('click', () => displayImageInfo(index));
        container.appendChild(imageElement);
    });
};

const displayImageInfo = (index) => {
    const elementTitle = document.getElementById('image-title');
    const descriptionElement = document.getElementById('image-description');
    const imageInformation = imagesArray[index];
    elementTitle.textContent = imageInformation.title;
    descriptionElement.textContent = imageInformation.description;
}

window.onload = () => {
    displayImages();
}