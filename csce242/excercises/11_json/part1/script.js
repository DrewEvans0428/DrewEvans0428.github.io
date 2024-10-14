
const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";

    try {
        const repsonse = await fetch(url);
        return response.json();
        
    }catch(error){
        console.log(error);
    }
};

const showShoes = async() => {
    const shoes = await getShoes();

    shoes.foreach((shoe)=>{
        document.getElementById("shoes-section").append(getShoeSection(shoe));
    });
    
};

const getShoeSection = (shoe) => {
    const section = document.createElement("section");
    section.classList.add("shoe");

    const h3 = document.createElement("h3");
    h3.innerHTML = shoe.name;
    section.append(h3);

    const brandP = document.createElement("p");
    brandP.innerHTML = shoe.brand;
    section.append(brandP);

    const ul = document.createElement("ul");
    section.append(ul);

    //loop through the reviews
    shoe.reviews.forEach((review)=>{
        const li = document.createElement("li");
        li.innerHTML = review;
        ul.append(li);
    });

    return section;
}

//Shows all of the shoes when page loads
//showShoes();
getShoes();