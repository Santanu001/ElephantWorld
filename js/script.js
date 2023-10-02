// const header = document.querySelector(".header");
// const mob_NavBtn = document.querySelector(".mobile-navbar-btn");

// mob_NavBtn.addEventListener("click", ()=>toggleNavbar());

// const toggleNavbar = () => {
//     header.classList.toggle("active");
// }

var header = document.querySelector(".header");
var mob_NavBtn = document.querySelector(".mobile-navbar-btn");

mob_NavBtn.addEventListener("click", toggleNavbar);

function toggleNavbar()  {
    header.classList.toggle("active");
}