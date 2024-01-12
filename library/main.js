window.onload = function() { // можно также использовать window.addEventListener('load', (event) => {
    
    const burger = document.querySelector('[data-burger]');
    const header = document.querySelector('.header');
    
    burger?.addEventListener('click', () => {
        header.classList.toggle('nav--visible')
    });
};
