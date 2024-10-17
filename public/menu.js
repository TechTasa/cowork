const toggleButton = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');
const contact = document.getElementById('navbar-contact');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('active');
    contact.classList.toggle('active');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        menu.classList.remove('active');
        contact.classList.remove('active');
    }
});