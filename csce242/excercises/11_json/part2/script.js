const getBreweries = async() => {

    try {
        return (await fetch("https://api.openbrewerydb.org/breweries")).json();
        
    }catch(error){
        console.log(error);
    }
};

const showBreweries = async() => {
    const breweries = await getBreweries();

    breweries.foreach((brewery)=>{
        const section = document.createElement("section");
        section.classList.add("brewery");
        document.getElementById("breweries-section").append(section);

        const a = document.createElement("a");
        a.href = brewery.website_url;
        section.append(a);
        const h3 = document.createElement("h3");
        h3.innerHTML = brewery.name;
        a.append(h3);

        const p = document.createElement
    });
    
};

const getBrewerieSection = (brewerie) => {
    const section = document.createElement("section");
    section.classList.add("brewerie");

    const h3 = document.createElement("h3");
    h3.innerHTML = brewerie.name;
    section.append(h3);

    const p = document.createElement("p");


}