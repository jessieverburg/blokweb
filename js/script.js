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


/* var lastScrollTop = 0;

menu-items = document.getElementsByClassName(".menu-items");
window.addEventListener("scroll", function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        menu-items.style.top =
    }
}) */

let MenuScroll = document.querySelector("nav");

window.addEventListener("scroll", function(){
    if(window.scrollY > 150) {
        MenuScroll.style.top = "-100%";
    } else {
        MenuScroll.style.top = "0";
    }
});
