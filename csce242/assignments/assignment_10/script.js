const loadIceCreams = async () => {
    const url = 'https://portiaportia.github.io/json/ice-creams.json';

    try {
        const repsonse = await fetch(url);
        const data = await repsonse.json();

        const iceCreamOptions = document.getElementById('ice-cream-options');

        data.forEach(iceCream => {
            const iceCreamDiv = document.createElement('div');
            iceCreamDiv.classList.add('ice-cream-item');

            const img = document.createElement('img');
            img.src = `images/${iceCream.image}`;
            img.classList.add('ice-cream-image');

            const overlay = document.createElement('div');
            overlay.classList.add('ice-cream-name');
            overlay.innerText = iceCream.name;

            iceCreamDiv.appendChild(img);
            iceCreamDiv.appendChild(overlay);

            iceCreamOptions.appendChild(iceCreamDiv);
        });
    } catch (error) {
        console.error('Could not find your ice cream');
    }
};

window.onload = loadIceCreams;
