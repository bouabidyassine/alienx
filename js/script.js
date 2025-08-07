// Typed.js for typing animation
const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Digital Artist', 'Space Explorer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
});

// Sticky navbar on scroll
window.onscroll = () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    // Close mobile menu when scrolling
    navbar.classList.remove('active');
    menuToggle.classList.remove('active');
};

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(navLink => {
    navLink.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Scroll sections active link
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });
});

// Animate skill bars on scroll
const skillBars = document.querySelectorAll('.skill-per');

function animateSkillBars() {
    skillBars.forEach(skillBar => {
        const per = skillBar.getAttribute('per');
        skillBar.style.width = per;
    });
}

// Only animate when skills section is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

observer.observe(document.querySelector('.skills'));

// Scroll reveal animation
ScrollReveal().reveal('.home-content, .heading', { 
    origin: 'top', 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { 
    origin: 'bottom', 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content h1, .about-img', { 
    origin: 'left', 
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content p, .about-content', { 
    origin: 'right', 
    distance: '80px',
    duration: 2000,
    delay: 200
});

// UFO animation
const ufo = document.querySelector('.ufo');
let ufoPosition = 0;
let ufoDirection = 1;

function animateUFO() {
    ufoPosition += 0.5 * ufoDirection;
    ufo.style.transform = `translateX(${ufoPosition}px)`;
    
    if (ufoPosition > 30) {
        ufoDirection = -1;
    } else if (ufoPosition < -30) {
        ufoDirection = 1;
    }
    
    requestAnimationFrame(animateUFO);
}

animateUFO();

// Alien eye follow cursor
const alienHead = document.querySelector('.alien-head');
const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');

document.addEventListener('mousemove', (e) => {
    if (!alienHead) return;
    
    const alienRect = alienHead.getBoundingClientRect();
    const alienCenterX = alienRect.left + alienRect.width / 2;
    const alienCenterY = alienRect.top + alienRect.height / 2;
    
    const angle = Math.atan2(e.pageY - alienCenterY, e.pageX - alienCenterX);
    const distance = Math.min(15, Math.sqrt(Math.pow(e.pageX - alienCenterX, 2) + Math.pow(e.pageY - alienCenterY, 2)) / 20);
    
    const leftEyeX = Math.cos(angle) * distance;
    const leftEyeY = Math.sin(angle) * distance;
    
    const rightEyeX = Math.cos(angle) * distance;
    const rightEyeY = Math.sin(angle) * distance;
    
    leftEye.style.transform = `translate(${leftEyeX}px, ${leftEyeY}px)`;
    rightEye.style.transform = `translate(${rightEyeX}px, ${rightEyeY}px)`;
});