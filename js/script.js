const header = document.querySelector(".header");
const mob_NavBtn = document.querySelector(".mobile-navbar-btn");

mob_NavBtn.addEventListener("click", ()=>toggleNavbar());

const toggleNavbar = () => {
    header.classList.toggle("active");
}