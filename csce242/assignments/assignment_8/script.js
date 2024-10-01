const imagesArray = [
    { src: 'images/1.png', title:'birthday' , description: 'Its his birthday!'},
    { src: 'images/2.png', title: 'Clown', description:'Hes a clown now!'},
    { src: 'images/3.png', title:'rain', description:'Its raining! grab an umbrella'},
    { src: 'images/4.png', title:'read', description:'Enjoying the book!'},
    { src: 'images/5.png', title:'shovel', description: 'Has a shovel and is ready to work'},
    { src: 'images/6.png', title:'work', description: 'Has a laptop and is doing schoolwork'}
];

const displayImages = () => {
    const container = document.getElementById('image-container');
    imagesArray.forEach((image, index) => {
        const imageElement = document.createElement('img');
        imageElement.src = image.src;
        imageElement.alt = image.title;
        imageElement.classList.add('image');
        imageElement.addEventListener('click', () => displayImageInfo(index));
        container.appendChild(imageElement);
    });
};

const displayImageInfo = (index) => {
    const elementTitle = document.getElementById('image-title');
    const descriptionElement = document.getElementById('image-description');
    const imageInformation = imagesArray[index];
    elementTitle.textContent = imageInformation.title;
    descriptionElement.textContent = imageInformation;
}

window.onload = () => {
    displayImages();
}