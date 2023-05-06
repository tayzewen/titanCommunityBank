const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");


    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active"); //Toggle nav

        //Animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        //Burger animation
        burger.classList.toggle("toggle");
    });

}

navSlide();



if (localStorage.user !== undefined) {
    document.getElementById("account-link").style.display = "block";
}