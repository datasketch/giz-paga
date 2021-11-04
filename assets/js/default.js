'use strict'

// ELEMENTS
const navMobile = document.querySelector('.nav-mobile');
const buttonMenu = document.querySelector('.menu-button');
const iconMenu = document.querySelector('.menu-icon');

// EVENTS HANDLERS
buttonMenu.addEventListener('click', function (e) {
    // SHOW MENU BAR
    navMobile.classList.toggle('nav-mobile--active');
    // SHOW ICON TRANSITION
    iconMenu.classList.toggle('menu-icon--active');
})