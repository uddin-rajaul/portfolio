document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 700,
        easing: 'ease-out-quad',
        once: true,
        mirror: false,
    });

    // Initialize Typed.js for hero subtitle
    const typedSubtitleElement = document.getElementById('typed-subtitle-hero');
    if (typedSubtitleElement) {
        new Typed('#typed-subtitle-hero', {
            strings: [
                "Software Engineer.",
                "AI/ML Enthusiast.",
                "Backend Developer.",
                "Problem Solver."
            ],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            startDelay: 500,
            loop: true,
            smartBackspace: true,
            showCursor: true,
            cursorChar: '_',
        });
    }

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a.nav-link[href^="#"]');
    const navbarHeight = document.querySelector('nav').offsetHeight || 80; // Get navbar height or default

    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - navbarHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                    mobileMenu.classList.add('hidden');
                }
            }
        });
    });

    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

});
