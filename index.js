const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

$('.slider').slick({
    autoplay: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 600,
        settings:{
            slidesToShow: 1}
    }]
});