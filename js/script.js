let menu = document.querySelector(".menu-items");
let button = document.querySelector(".hamburger-button");
console.log(button)

function toggleClass() {
    document.body.classList.toggle("toggleCls");
}

button.addEventListener('click', toggleClass);




let header = document.querySelector('nav');

function toonMenu() {
    document.body.classList.toggle("toonMenu");
}

header.addEventListener('mouseenter', toonMenu);
header.addEventListener('mouseenter', toonMenu);





let MenuScroll = document.querySelector("nav");

window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        MenuScroll.style.top = "-100%";
    } else {
        MenuScroll.style.top = "0";
    }
});
