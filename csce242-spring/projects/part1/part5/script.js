document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger-menu");
    const navMenu = document.getElementById("main-nav");

    const checkScreenSize = () => {
        if (window.innerWidth >= 850){
            navMenu.style.display = "flex";
        }
        else{
            navMenu.style.display = "none";
        }
    }

    checkScreenSize();

    hamburger.addEventListener("click", () => {
        if (window.innerWidth < 850){
        if (navMenu.style.display == "none"){
            navMenu.style.display = "block";
        }
        else{
            navMenu.style.display = "none";
        }
    }
    });

    window.addEventListener("resize", checkScreenSize);
})