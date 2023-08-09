const navBar = document.querySelector('.nav-bar'); 

const hamburgerIcon = document.querySelector('.hamgurger-icon');

const navItems = document.querySelectorAll('.nav-menu li');

hamburgerIcon.addEventListener('click', () => {

    navBar.classList.toggle('active');
    hamburgerIcon.classList.toggle('active');

})

navItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburgerIcon.classList.remove('active');
        navBar.classList.remove('active');
    })

});