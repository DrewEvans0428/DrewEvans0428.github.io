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
        servicesSection.append(div);
        const h3 = document.createElement("h3");
        h3.innerHTML = service.service;
        div.append(h3);

        const img = document.createElement("img");
        img.src = service.img_name;

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

    });
}

showServices();