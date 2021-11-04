'use strict'

// ELEMENTS
const navMobile = document.querySelector('.nav-mobile');
const buttonMenu = document.querySelector('.menu-button');
const iconMenu = document.querySelector('.menu-icon');
const buttonDownload = document.querySelector('.button-download');
const buttonDownloadLink = document.querySelector('.button-download--link');

// EVENTS HANDLERS
buttonMenu.addEventListener('click', function(e) {
    // SHOW MENU BAR
    navMobile.classList.toggle('nav-mobile--active');
    // SHOW ICON TRANSITION
    iconMenu.classList.toggle('menu-icon--active');
})

buttonDownload.addEventListener('click', function(e) {
    buttonDownloadLink.classList.toggle('hidden');
})