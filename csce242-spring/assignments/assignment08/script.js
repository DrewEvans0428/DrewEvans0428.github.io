
    const tasks = [];
    tasks["Crazy Clown"] = "images/clown.jpg";
    tasks["Happy Birthday"] = "images/birthday.jpg";
    tasks["It's Raining"] = "images/rain.jpg";
    tasks["Quiet Time"] = "images/read.jpg";
    tasks["Working Hard"] = "images/shovel.jpg";
    tasks["Work from Home"] = "images/work.jpg";
    const section = document.getElementById("items");
    let personImage = document.getElementById("person");


    for(let task in tasks){
        const h2 = document.createElement("h2");
        section.append(h2);
        h2.innerHTML = `${task}`;
        h2.onclick = () => {
            const popup = document.getElementById("popup");
            popup.style.display = "block";
            document.getElementById("popup").innerHTML = 
            `${task}`;
            personImage.src = `${tasks[task]}`;
        }
            
    };