// ==================== toggle icon navbar ===================
let menuIcon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x-circle')
    navbar.classList.toggle('active')
}
// current year extract and put into footer

let currentDate = new Date();
let currentyear = currentDate.getFullYear()
document.getElementById("current-year").textContent = currentyear;


// scroll section active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;                  // Current scroll position
        let offset = sec.offsetTop - 150;          // Section ke top se offset
        let height = sec.offsetHeight;             // Section ki height
        let id = sec.getAttribute('id');           // Section ka ID

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');  // Sabse pehle active hatao
                document.querySelector(`header nav a[href*="${id}"]`)?.classList.add('active');
            });
        }
    });

    // ==================== sticky navbar ===================
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100)

    // ==================== remove toggle icon and navbar when click navbar link(scroll) ===================
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active')
};


// ==================== scroll reveal ===================

ScrollReveal({
    reset: true,
    distance: '50px',
    duration: 2000,
    delay: 0
});
ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.homme-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.homme-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.homme-content p, .about-content', { origin: 'right' });


// ==================== typed js ===================
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'YouTuber', 'Blogger'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelAY: 100,
    loop: true

});