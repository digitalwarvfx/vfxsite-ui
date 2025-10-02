// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.createElement('div');
mobileMenu.className = 'hidden md:hidden bg-gray-900 w-full absolute left-0 right-0 z-40';
mobileMenu.innerHTML = `
            <div class="px-6 py-4">
                <a href="#home" class="block hover:text-red-500 transition py-3 border-t border-gray-600">Home</a>
                <a href="#about" class="block hover:text-red-500 transition py-3 border-t border-gray-600">About</a>
                <a href="#services" class="block hover:text-red-500 transition py-3 border-t border-gray-600">Services</a>
                <a href="#showreel" class="block hover:text-red-500 transition py-3 border-t border-gray-600">Showreel</a>
                <a href="#contact" class="block hover:text-red-500 transition py-3 border-t border-gray-600 border-b">Contact</a>
            </div>
        `;
document.querySelector('nav').appendChild(mobileMenu);

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    
    // Toggle icon between hamburger and X
    const svg = mobileMenuButton.querySelector('svg');
    const isMenuOpen = !mobileMenu.classList.contains('hidden');
    
    if (isMenuOpen) {
        // Change to X icon
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>';
    } else {
        // Change to hamburger icon
        svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
            // Close mobile menu if open and reset icon
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const svg = mobileMenuButton.querySelector('svg');
                svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>';
            }
        }
    });
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    // Show/hide back to top button
    if (window.pageYOffset > 300) {
        backToTopButton.classList.remove('opacity-0', 'invisible');
        backToTopButton.classList.add('opacity-100', 'visible');
    } else {
        backToTopButton.classList.remove('opacity-100', 'visible');
        backToTopButton.classList.add('opacity-0', 'invisible');
    }

    // Change navbar style on scroll
    const nav = document.querySelector('nav');
    if (window.pageYOffset > 50) {
        nav.classList.add('py-2', 'shadow-lg');
    } else {
        nav.classList.remove('py-2', 'shadow-lg');
    }
});

// Parallax effect
window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax');
    const scrollPosition = window.pageYOffset;

    parallaxSections.forEach(section => {
        const speed = 0.5;
        const yPos = -(scrollPosition * speed) + 'px';
        section.style.backgroundPositionY = yPos;
    });
});
