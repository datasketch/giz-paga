'use strict'

// ELEMENTS
const navMobile = document.querySelector('.nav-mobile');
const buttonMenu = document.querySelector('.menu-button');
const iconMenu = document.querySelector('.menu-icon');
const overlay = document.querySelector('.overlay');
const observer = document.querySelector('.observer');
const btnUp = document.querySelector('.btn-up');

// FUNCTIONS
const menuToggle = () => {
    // SHOW MENU BAR
    navMobile.classList.toggle('nav-mobile--active');
    // SHOW ICON TRANSITION
    iconMenu.classList.toggle('menu-icon--active');
    // SHOW OVERLAY
    overlay.classList.toggle('overlay--active');
}

const bannerObserver = new IntersectionObserver((entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return btnUp.classList.add('btn-up--active');
    else btnUp.classList.remove('btn-up--active')
}, {
    root: null,
    threshold: 0
})
bannerObserver.observe(observer);

// EVENTS HANDLERS
buttonMenu.addEventListener('click', menuToggle);

overlay.addEventListener('click', menuToggle);

window.addEventListener('scroll', function (e) {
    if (e.isTrusted && navMobile.classList.contains('nav-mobile--active')) menuToggle();
})

window.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && navMobile.classList.contains('nav-mobile--active')) menuToggle();
})

btnUp.addEventListener('click', function(e) {
    window.scrollTo({top: 0, behavior: "smooth"})
})