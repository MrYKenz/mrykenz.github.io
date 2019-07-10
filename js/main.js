const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item'); // menu items as nodelist / array
const navItemCurrent = document.querySelector('.nav-item.current');

// opening menu
let showMenu = false; 

menuBtn.addEventListener('click', menuAppear); 
function menuAppear() {
    if(!showMenu) { // add to class name
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true; 
    } else { // remove from class name 
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false; 
    }
}

// toggling nav item for current page
let hovering = true;

navItems.forEach(item => item.addEventListener('mouseover', moveNav));
navItems.forEach(item => item.addEventListener('mouseout', moveBack));

function moveNav() {
    navItemCurrent.classList.remove('current');
}

function moveBack() {
    navItemCurrent.classList.add('current');
}