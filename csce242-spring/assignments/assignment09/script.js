class Pizza {
    constructor(pizzaType, toppings, sauce, cheese, price, pic){
        this.pizzaType = pizzaType;
        this.toppings = toppings;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.pic = pic;
    }

    get item() {
        const pizzaSection = document.createElement("div");
        pizzaSection.classList.add("pizza");

        const heading = document.createElement("h3");
        heading.innerText = this.pizzaType;
        pizzaSection.appendChild(heading);
        pizzaSection.appendChild(this.picture(this.pic));

        pizzaSection.onclick = () => {
            this.showModal();
        };
        return pizzaSection;
    }

    picture(pic){
        const picItem = document.createElement("img");
        picItem.src = "images/" + pic;
        return picItem;
    }

    content(pizzaType, info){
        const p = document.createElement("p");
        p.innerHTML = `${pizzaType}: ${info}`;
        return p;
    }

    showModal(){
        const modal = document.getElementById("pizza-popup");
        const pizzaContent = document.getElementById("pizza-content");

        pizzaContent.innerHTML = "";

        const heading = document.createElement("h3");
        heading.innerText = this.pizzaType;
        pizzaContent.appendChild(heading);
        

        const img = this.picture(this.pic);
        pizzaContent.appendChild(img);

        pizzaContent.append(this.content("<strong>Toppings</strong>", this.toppings));
        pizzaContent.append(this.content("<strong>Sauce</strong>", this.sauce));
        pizzaContent.append(this.content("<strong>Cheese</strong>", this.cheese));
        pizzaContent.append(this.content("<strong>Price</strong>", this.price));

        modal.style.display = "block";


    }

   
}

window.onload = () => {
    let pizzas = [];
    let pizzaList = document.getElementById("pizzas-list");

    pizzas.push(new Pizza("Pepperoni", "pepperoni, basil", "Tomato/Marinara", "Mozzarella", "$8", "pep.jpg"));
    pizzas.push(new Pizza("Hawaiian", "Pineapple, Ham, Jalapenos", "Tomato Sauce", "Mozzarella", "$20.99", "hawaiian.jpg"));
    pizzas.push(new Pizza("Deluxe", "Pepperoni, Onions, Mushrooms, Peppers", "Tomato Sauce", "Provolone, Mozzarella", "$20.99", "deluxe.jpg"));
    pizzas.push(new Pizza("Spinach & Feta", "Onions, Spinach", "Alfredo Sauce", "Provolone, Feta, Asiago", "$20.99", "spin.jpg"));
    pizzas.push(new Pizza("Pacific Veggie", "Onions, Diced Tomatoes, Black Olives, Spinach, Mushrooms", "Tomato Sauce", "Provolone, Feta", "$20.99", "veggie.jpg"));

    for (let i in pizzas) {
        pizzaList.append(pizzas[i].item);
    }
};
