var links = document.getElementById("nav-links");
var burgerButton = document.querySelector(".fa");

function burgerMenu() {
    if (links.style.transform === "translateX(25rem)") {
        links.style.transform = "translateX(0)";
        burgerButton.classList.replace("fa-bars", "fa-plus");
        burgerButton.style.transform = "rotate(45deg)";

    } else {
        links.style.transform = "translateX(25rem)";
        burgerButton.classList.replace("fa-plus", "fa-bars");
        burgerButton.style.transform = "rotate(0deg)";
    }
}

navbarAdjust();
window.onresize = navbarAdjust;

function navbarAdjust() {
    if (window.innerWidth >= 800) {
        links.style.transform = "translateX(0)";
    }

    if (window.innerWidth <= 800) {
        links.style.transform = "translateX(25rem)";

        if (links.style.transform === "translateX(25rem)") {
            burgerButton.classList.replace("fa-plus", "fa-bars");
            burgerButton.style.transform = "rotate(0deg)";

        } else {
            burgerButton.classList.replace("fa-bars", "fa-plus");
            burgerButton.style.transform = "rotate(45deg)";
        }
    }
}
