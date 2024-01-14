window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
    
    const burger = document.querySelector('[data-burger]');
    const header = document.querySelector('.header');
    const slider = document.querySelector('.slider');
    const swipe__left = document.querySelector('.swipe__left')
    const swipe__right = document.querySelector('.swipe__right')
    const slider__buttons = document.querySelectorAll('.slider__button')
    
    
    burger?.addEventListener('click', () => {
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
    document.getElementsById('drop-menu').onmouseover = function(event) {
        let target = event.target;
        if (target.className == 'drop-menu') {
            let s  = target.getElementsByClassName('sub-menu');
            closeMenu();
            s[0].style.display = 'block';
        }
    }
    document.onmouseover=function (event) {
        let target = event.target;
        console.log(event.target);
        if (target.className!='drop-menu' && target.className!='sub-menu'){
            closeMenu();            
        };
    }
    function closeMenu() {
        let menu = document.getElementById('drop-menu');
        let subm = document.getElementsByClassName('sub-menu');
        for (let i=0; i <subm.length; i++) {
            subm[i].style.display= "none";
        }   
    }
}