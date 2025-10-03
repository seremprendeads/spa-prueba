       // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate menu toggle
            menuToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });

        // Smooth scrolling for navigation links
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

        // Fade in animation on scroll
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

        // FAQ functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const faqItem = question.parentNode;
                const isActive = faqItem.classList.contains('active');
                
                // Close all FAQ items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                });
                
                // Open clicked item if it wasn't active
                if (!isActive) {
                    faqItem.classList.add('active');
                }
            });
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                navbar.style.boxShadow = '0 2px 30px rgba(232, 180, 214, 0.2)';
            } else {
                navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                navbar.style.boxShadow = '0 2px 20px rgba(232, 180, 214, 0.15)';
            }
        });

        // Gallery hover effects
        document.querySelectorAll('.gallery-item').forEach(item => {
            item.addEventListener('mouseenter', () => {
                item.style.transform = 'scale(1.05) rotate(2deg)';
            });
            
            item.addEventListener('mouseleave', () => {
                item.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Service cards hover animation
        document.querySelectorAll('.service-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                const icon = card.querySelector('.service-icon');
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            });
            
            card.addEventListener('mouseleave', () => {
                const icon = card.querySelector('.service-icon');
                icon.style.transform = 'scale(1) rotate(0deg)';
            });
        });

        // Add loading animation
        window.addEventListener('load', () => {
            document.body.classList.add('loaded');
        });
		
		// Gallery Animada - Autoplay Animation
const galleryImages = document.querySelectorAll('.gallery-animada img');
let currentIndex = 0;
let galleryInterval;

function startGalleryAutoplay() {
    galleryInterval = setInterval(() => {
        // Remover clase active de todas las imágenes
        galleryImages.forEach(img => img.classList.remove('active'));
        
        // Agregar clase active a la imagen actual
        galleryImages[currentIndex].classList.add('active');
        
        // Avanzar al siguiente índice
        currentIndex = (currentIndex + 1) % galleryImages.length;
    }, 2500); // Cambia cada 2.5 segundos
}

function stopGalleryAutoplay() {
    clearInterval(galleryInterval);
}

// Iniciar autoplay cuando la galería sea visible
const galleryAnimada = document.querySelector('.gallery-animada');
if (galleryAnimada) {
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startGalleryAutoplay();
            } else {
                stopGalleryAutoplay();
                // Limpiar todas las clases active cuando no esté visible
                galleryImages.forEach(img => img.classList.remove('active'));
                currentIndex = 0;
            }
        });
    }, { threshold: 0.3 });

    galleryObserver.observe(galleryAnimada);

    // Pausar autoplay al hacer hover y reanudar al salir
    galleryAnimada.addEventListener('mouseenter', stopGalleryAutoplay);
    galleryAnimada.addEventListener('mouseleave', () => {
        if (galleryAnimada.getBoundingClientRect().top < window.innerHeight && 
            galleryAnimada.getBoundingClientRect().bottom > 0) {
            startGalleryAutoplay();
        }
    });
	

}
