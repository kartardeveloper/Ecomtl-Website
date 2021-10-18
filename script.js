const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-nav');


function toggleMenu() {
    if(hamburgerMenu.classList.contains('hamburger-open')) {
        hamburgerMenu.classList.remove('hamburger-open');
        mobileNav.classList.remove('mobile-nav-open');
    } else{
        hamburgerMenu.classList.add('hamburger-open');
        mobileNav.classList.add('mobile-nav-open');
    }
}

hamburgerMenu.addEventListener('click' , toggleMenu);