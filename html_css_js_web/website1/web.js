
const menuBar = document.querySelector('.menu-bar');

const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu li')

menuBar.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    menuBar.classList.toggle('active');
})

menuItems.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('active');
        menuBar.classList.remove('active');

    })
})