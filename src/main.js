// ========== MOBILE MENU TOGGLE ==========
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navMenu.classList.toggle('left-0');
        navMenu.classList.toggle('-left-full');
        menuToggle.classList.toggle('active');
    });

    // Cerrar menú al hacer clic en un link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navMenu.classList.add('-left-full');
            navMenu.classList.remove('left-0');
            menuToggle.classList.remove('active');
        });
    });
}

// Slider de logos automático
const logoSlider = document.querySelector('.logo-slider');
if (logoSlider) {
    let scrollPosition = 0;
    const scrollSpeed = 0.5;
    
    const animateSlider = () => {
        scrollPosition += scrollSpeed;
        logoSlider.style.transform = `translateX(-${scrollPosition}px)`;
        
        if (scrollPosition >= logoSlider.scrollWidth / 2) {
            scrollPosition = 0;
        }
        
        requestAnimationFrame(animateSlider);
    };
    
    animateSlider();
}

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ========== FADE IN ON SCROLL ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// ========== FAQ ACCORDION ==========
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentNode;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const isActive = faqItem.classList.contains('active');
        
        // Cerrar todos los items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
            const answer = item.querySelector('.faq-answer');
            const icon = item.querySelector('.faq-icon');
            if (answer) answer.style.maxHeight = '0';
            if (icon) icon.style.transform = 'rotate(0deg)';
        });
        
        // Abrir el clickeado si no estaba activo
        if (!isActive) {
            faqItem.classList.add('active');
            if (faqAnswer) faqAnswer.style.maxHeight = '200px';
            const icon = question.querySelector('.faq-icon');
            if (icon) icon.style.transform = 'rotate(180deg)';
        }
    });
});

// ========== NAVBAR SCROLL EFFECT ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(232, 180, 214, 0.2)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(232, 180, 214, 0.15)';
        }
    }
});

// ========== GALLERY AUTOPLAY ==========
const galleryImages = document.querySelectorAll('.gallery-animada img');
let currentIndex = 0;
let galleryInterval;

function startGalleryAutoplay() {
    galleryInterval = setInterval(() => {
        galleryImages.forEach(img => img.classList.remove('active'));
        if (galleryImages[currentIndex]) {
            galleryImages[currentIndex].classList.add('active');
        }
        currentIndex = (currentIndex + 1) % galleryImages.length;
    }, 2500);
}

function stopGalleryAutoplay() {
    clearInterval(galleryInterval);
}

const galleryAnimada = document.querySelector('.gallery-animada');
if (galleryAnimada && galleryImages.length > 0) {
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startGalleryAutoplay();
            } else {
                stopGalleryAutoplay();
                galleryImages.forEach(img => img.classList.remove('active'));
                currentIndex = 0;
            }
        });
    }, { threshold: 0.3 });

    galleryObserver.observe(galleryAnimada);

    galleryAnimada.addEventListener('mouseenter', stopGalleryAutoplay);
    galleryAnimada.addEventListener('mouseleave', () => {
        const rect = galleryAnimada.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            startGalleryAutoplay();
        }
    });
}

// ========== SERVICE CARDS HOVER ==========
document.querySelectorAll('.service-card, .group').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.service-icon, [class*="w-16"], [class*="w-20"]');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(5deg)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.service-icon, [class*="w-16"], [class*="w-20"]');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ========== FIX BG-FIXED ON MOBILE ==========
if (window.innerWidth < 768) {
    document.querySelectorAll('[class*="bg-fixed"]').forEach(el => {
        el.classList.remove('bg-fixed');
        el.classList.add('bg-scroll');
    });
}

console.log('✅ CIRB Estética - Scripts cargados correctamente');