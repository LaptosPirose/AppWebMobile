document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll('.navbar-nav a');

    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSectionId = this.getAttribute('href');
            const targetSection = document.querySelector(targetSectionId);
            const targetSectionTop = targetSection.offsetTop;

            window.scrollTo({
                top: targetSectionTop,
                behavior:'smooth'
            });
        });
    });
});