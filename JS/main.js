// public/assets/js/main.js

document.addEventListener('DOMContentLoaded', function() {
    // Exemple simple: faire apparaître le texte de la section hero avec un léger délai
    const heroTitle = document.querySelector('.hero-section h1');
    const heroSubtitle = document.querySelector('.hero-section p.lead');
    const heroBtn = document.querySelector('.hero-section .btn');

    if (heroTitle && heroSubtitle && heroBtn) {
        heroTitle.style.opacity = 0;
        heroSubtitle.style.opacity = 0;
        heroBtn.style.opacity = 0;

        setTimeout(() => {
            heroTitle.style.transition = 'opacity 1s ease-in-out';
            heroTitle.style.opacity = 1;
        }, 300);

        setTimeout(() => {
            heroSubtitle.style.transition = 'opacity 1s ease-in-out';
            heroSubtitle.style.opacity = 1;
        }, 800);

        setTimeout(() => {
            heroBtn.style.transition = 'opacity 1s ease-in-out';
            heroBtn.style.opacity = 1;
        }, 1300);
    }

    // Gestion du défilement fluide pour les liens de navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Optionnel: Ajouter une classe à la navbar au scroll pour un effet plus stylé
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) { // Si l'utilisateur a défilé de plus de 50px
                navbar.classList.add('scrolled'); // Ajoutez une classe 'scrolled'
            } else {
                navbar.classList.remove('scrolled'); // Sinon, retirez-la
            }
        });
    }
    // Ajoutez un style CSS pour .navbar.scrolled dans votre balise <style> si vous utilisez cet effet
    /*
        .navbar.scrolled {
            background-color: rgba(255, 255, 255, 0.95) !important;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
    */
});