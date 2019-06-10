// select DOM items for menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item') // menu items as nodelist / array

// opening menu
let showMenu = false; // initial state closed

menuBtn.addEventListener('click', menuAppear); // show menu when clicked
function menuAppear() {
    if(!showMenu) { // add to class name for CSS
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));
        showMenu = true; 
    } else { // remove from class name for CSS
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));
        showMenu = false; 
    }
}