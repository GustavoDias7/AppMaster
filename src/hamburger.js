function hamburger() {
    let navbar = document.querySelector('.navbar');
    let navbarHamburger = document.querySelector('.navbar-hamburger');
    let navbarClose = document.querySelector('.navbar-close');
    
    navbarHamburger.addEventListener('click', () => {
        navbar.classList.add('active-translate');
    });
    
    navbarClose.addEventListener('click', () => {
        navbar.classList.remove('active-translate');
    });
}

export default hamburger;