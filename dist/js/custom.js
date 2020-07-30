"use strict"

let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function prevSlide() {
    showSlides(slideIndex -= 1);

}

/* Основная функция слайдера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let number_of = document.querySelector('.desktop_slider_number_of');

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";

    number_of.textContent = slideIndex + '/' + slides.length;

}


function openMenu() {
    let menu = document.querySelector(".header_menu_section_ul");
    menu.classList.toggle('active_element')
}

function openDrop() {
    let linksDrop = document.querySelector(".li_with_drop");
    let li = linksDrop.lastElementChild;
    li.classList.toggle('active_element');
}

function openSpoiler() {
    let spoilerDrop = document.querySelector('.post_container_responsive_spoiler');
    spoilerDrop.classList.toggle('active_element')
}
