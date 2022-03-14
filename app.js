

/************* Menu Toggle */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const nameHero = document.querySelector('.name-hero');
const main = document.querySelector('.main');
const body = document.querySelector('.body');
const navLinks = Array.from(document.querySelectorAll('.nav-link'));

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    main.classList.toggle('active');
    nameHero.classList.toggle('active');
    body.classList.toggle('active');
    console.log('menu toggled');

    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            hamburger.classList.remove('active');
            nav.classList.remove('active');
            main.classList.remove('active');
            nameHero.classList.remove('active');
            body.classList.remove('active');
        })
    }
}); 


/******** hidden nav bar on scroll */

let newScrollPosition = 0;
let lastScrollPosition = 0;
// nameHero & hamburger already assigned variables above
const header = document.getElementById('header-menu');

window.addEventListener('scroll', e => {
    lastScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition && lastScrollPosition > 20) {
        hamburger.classList.remove('slide-down');
        hamburger.classList.add('slide-up');
        hamburger.style.transition = "all .5s";  
    }   else if (newScrollPosition > lastScrollPosition) {
        hamburger.classList.remove('slide-up');
        hamburger.classList.add('slide-down');
        hamburger.style.transition = "all .5s";  
    }
    newScrollPosition = lastScrollPosition;
});
