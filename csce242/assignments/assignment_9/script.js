class Bird {
    constructor(title, size, lifespan, food, habitat, interestingFact, pic){
        this.title = title;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.interestingFact = interestingFact;
        this.pic = pic;
    }

    get item(){
        const section = document.createElement("section");
        section.classList.add("bird");

        const h3 = document.createElement("h3");
        h3.innerHTML = this.title;
        section.append(h3);

        const birdImage = this.picture(this.pic);
        section.append(birdImage);

        section.onclick = () => {
            this.showModal();
        };

        return section;
    }

        picture(imageFile){
            const pic = document.createElement("img");
            pic.src = "images/" + imageFile;
            pic.alt=this.title;
            return pic;
        }

        paragraph(title, info) {
            const p = document.createElement("p");
            p.innerHTML = `<strong>${title}:</strong> ${info}`;
            return p;
        }

        showModal(){
            const modal = document.getElementById('birdModal');
            const modalContent = document.getElementById('modalContent');

            modalContent.innerHTML = '';

            const img = this.picture(this.pic);
            modalContent.appendChild(img);

            modalContent.append(this.paragraph("Size", this.size));
            modalContent.append(this.paragraph("Lifespam", this.lifespan));
            modalContent.append(this.paragraph("Food", this.food));
            modalContent.append(this.paragraph("Habitat", this.habitat));
            modalContent.append(this.paragraph("Intersting fact", this.interestingFact));

            modal.style.display = 'block';
        }
    }



const birds = [];

birds.push(new Bird("Cardinal", "8.7in - 9.25in", 3, "sunflower seeds", "woodland edges", "They are named after clergy", "cardinal.jpg"));
birds.push(new Bird("Hummningbird","3-6in", 5, "sugar water", "temperate and alpine mountain climates", "The number of times a hummingbird's wings beat is different from one species to another,and ranges from 720 to 5400 times per minute when hovering.", "hummingbird.jpg"
));
birds.push(new Bird("Eagle", "16-40in", "14-35 years", "Fish and small mammals", "mountains", "They have excellent eyesight and can detect prey up to two miles away.", "eagle.jpg"));
birds.push(new Bird("Vulture", "up to 3 feet 4 inches", "10-17 years", "Flesh of dead animals", "grasslands", "They can digest meat in any stage of decay and withstand diseases that would kill other creatures.", "vulture.jpg"));

birds.forEach((bird)=>{
    document.getElementById("bird-list").append(bird.item);
})