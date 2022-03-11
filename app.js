

/************* Menu Toggle */

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
//const homePage = document.querySelector('.home-page');
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


/*
hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        homePage.classList.remove('active');
        console.log('hamburger remove menu');
    }   else {
        hamburger.classList.add('active');
        nav.classList.add('active');
        homePage.classList.add('active');
        console.log('hamburger add menu');
    }

});     */

/*
html.addEventListener('click', (e) => {
    if (e.target !== hamburger && hamburger.classList.contains('active')) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
        homePage.classList.remove('active');
        console.log('window close menu');
    }   else {
        console.log('window click - do nothing');
    }
});     */

/*
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
    homePage.classList.toggle('active');
    console.log('menu selected');

    html.addEventListener('click', (e) => {
        if (e.target !== hamburger && hamburger.classList.contains('active')) {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
            homePage.classList.toggle('active');
            console.log('window close');
        }
    })

});     */


/******** hidden nav bar on scroll */

let newScrollPosition = 0;
let lastScrollPosition = 0;
// nameHero & hamburger already assigned variables above
const header = document.getElementById('header-menu');

window.addEventListener('scroll', e => {
    lastScrollPosition = window.scrollY;

    if (newScrollPosition < lastScrollPosition && lastScrollPosition > 50) {
        nameHero.classList.remove('slide-down');
        nameHero.classList.add('slide-up');
        nameHero.style.transition = "all .5s";  

        hamburger.classList.remove('slide-down');
        hamburger.classList.add('slide-up');
        hamburger.style.transition = "all .5s";  
      /*  header.classList.remove('slide-down');
        header.classList.add('slide-up');
        header.style.transition = "all .5s";    */
    }   else if (newScrollPosition > lastScrollPosition) {
        nameHero.classList.remove('slide-up');
        nameHero.classList.add('slide-down');
        nameHero.style.transition = "all .5s";  

        hamburger.classList.remove('slide-up');
        hamburger.classList.add('slide-down');
        hamburger.style.transition = "all .5s";  
      /*  header.classList.remove('slide-up');
        header.classList.add('slide-down');
        header.style.transition = "all .5s";    */
    }

    newScrollPosition = lastScrollPosition;
});