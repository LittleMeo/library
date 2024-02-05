window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
    
    const burger = document.querySelector('.button-burger');
    const burgerOverlay = document.querySelector('.burger__overlay')
    const navLink = Array.from(document.querySelectorAll('.nav__link'))
    const header = document.querySelector('.header');
    const slider = document.querySelector('.slider');
    const swipe__left = document.querySelector('.swipe__left')
    const swipe__right = document.querySelector('.swipe__right')
    const slider__buttons = document.querySelectorAll('.slider__button-area')
    const navLinkCallback = (element) => {
        console.log('Meow', element)
        element.addEventListener('click', () => {
            header.classList.remove('nav--visible');
        });
    };

    navLink?.map(navLinkCallback);
    burger?.addEventListener('click', () => {
        header.classList.toggle('nav--visible');
    });
    
    burgerOverlay?.addEventListener('click', () => {
        header.classList.toggle('nav--visible');
    });
    
    slider.dataset.activeSlideNumber = 1;
    swipe__left?.addEventListener('click',() => {
        dataDown(slider)}); 
    swipe__right?.addEventListener('click',() => {
        dataUp(slider)}); 
    slider__buttons.forEach((element) => {
        element.addEventListener('click',() => {
            dataSet(slider,element.dataset.number)
        })
    })
    
    function dataUp(slider) {  
        if (slider.dataset.activeSlideNumber < 5) {
            slider.dataset.activeSlideNumber = ++slider.dataset.activeSlideNumber;
            
        }
    }

    function dataDown(slider) {
        if (slider.dataset.activeSlideNumber > 1) {
            slider.dataset.activeSlideNumber = --slider.dataset.activeSlideNumber;
            
        }
    }

    function dataSet(slider,number) {
        slider.dataset.activeSlideNumber = number; 
    }
}