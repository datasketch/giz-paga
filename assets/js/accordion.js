'use strict'

const accordionParent = document.querySelector('.accordion');
const accordionButtons = document.querySelectorAll('.accordion_button');
const accordionImages = document.querySelectorAll('.accordion_image');
const accordionContents = document.querySelectorAll('.accordion_content');

accordionParent.addEventListener('click', function (e) {
    // select child element
    const button = e.target.closest('.accordion_button');

    // get id 
    const id = button.getAttribute('data-id');

    // show diferent button icon 
    if (accordionImages[id].src.match("/images/icons/open-acordion.svg")) {
        accordionImages[id].src = "/images/icons/close-acordion.svg";
        accordionImages[id].alt = "close accordion";
    } else {
        accordionImages[id].src = "/images/icons/open-acordion.svg";
        accordionImages[id].alt = "open accordion";
    }

    // show and close accordion content 'toggle' 
    accordionContents[id].classList.toggle('hidden');
})