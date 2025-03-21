document.addEventListener('DOMContentLoaded', function() {
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('mouseenter', function() {
            this.querySelector('.dropdown-menu').style.display = 'block';
        });
        dropdown.addEventListener('mouseleave', function() {
            this.querySelector('.dropdown-menu').style.display = 'none';
        });
    });

    const elementsToZoom = document.querySelectorAll('.zoom-target');
    elementsToZoom.forEach(element => {
        element.classList.add('zoom-in');
    });

    // Funcionalidad para la flecha de subir
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});