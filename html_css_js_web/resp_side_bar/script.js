const btn1 = document.querySelector(".button");

let activeIndex;

btn1.addEventListener('click', () => {
    document.body.classList.toggle("collapsed")
});




const current = window.location.href;

const allLinks = document.querySelectorAll('.sidebar-links a');

allLinks.forEach((elem) => {

    elem.addEventListener('click', function() {

        const hrefLinkClick = elem.href;

        allLinks.forEach ((link) => {

            if (link.href === hrefLinkClick) {

                link.classList.add('active');
            } else {

                link.classList.remove('active');
            }
        });

    })
});

