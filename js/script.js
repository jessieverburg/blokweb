let menu = document.querySelector(".menu-items");
let button = document.querySelector(".hamburger-button");
console.log(button)

function toggleClass() {
    document.body.classList.toggle("toggleCls");
}

button.addEventListener('click', toggleClass);




let header = document.querySelector('header');

function toonMenu() {
    document.body.classList.toggle("toonMenu");
}

header.addEventListener('mouseenter', toonMenu);
header.addEventListener('mouseenter', toonMenu);
