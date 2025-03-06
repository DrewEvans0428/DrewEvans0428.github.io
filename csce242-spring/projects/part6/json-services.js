const getServices = async() => {
    const url = "https://drewevans0428.github.io/csce242-spring/projects/part6/luma.json";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};


const showServices = async() => {
    const services = await getServices();
    const servicesSection = document.getElementById("services-area");

    services.forEach((service)=>{
        const div = document.createElement("div");
        div.classList.add("service");
       
        const h2 = document.createElement("h2");
        h2.innerHTML = service.Name;
        div.append(h2);

        const img = document.createElement("img");
        img.src = service.img_name;
        div.append(img);

        const ul = document.createElement("ul");
        div.append(ul);

        //loop throught the stylists
      service.Stylists.forEach((Stylist) =>{
            const li = document.createElement("li");
            li.append(Stylist);
            ul.append(li);
        });

        const h4 = document.createElement("h4");
        h4.innerHTML = service.pricing;
        div.append(h4);

        const p = document.createElement("p");
        p.innerHTML = service.Description;
        div.append(p);

        servicesSection.appendChild(div);

    });
}

showServices();