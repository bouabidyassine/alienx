// ===== Dark Mode Toggle =====
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.dataset.theme = 
        document.body.dataset.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('theme', document.body.dataset.theme);
});

// Set saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
document.body.dataset.theme = savedTheme;

// ===== 3D Gear Animation (Three.js) =====
const gearScene = new THREE.Scene();
const gearCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const gearRenderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
gearRenderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('gear-animation').appendChild(gearRenderer.domElement);

// Create gears
const gearGeometry = new THREE.CylinderGeometry(1, 1, 0.2, 32);
const gearMaterial = new THREE.MeshBasicMaterial({ color: 0x00a8e8, wireframe: true });
const gear = new THREE.Mesh(gearGeometry, gearMaterial);
gearScene.add(gear);

gearCamera.position.z = 5;

function animateGears() {
    requestAnimationFrame(animateGears);
    gear.rotation.x += 0.01;
    gear.rotation.y += 0.01;
    gearRenderer.render(gearScene, gearCamera);
}
animateGears();

// ===== Particle.js Background =====
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00a8e8" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: "#00a8e8", opacity: 0.4, width: 1 },
        move: { enable: true, speed: 2, direction: "none", random: true, straight: false }
    }
});

// ===== Typed.js Effect =====
const typed = new Typed('.multiple-text', {
    strings: ['Mechanical Engineer', 'CAD Specialist', 'Robotics Developer', 'Thermal Analyst'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
});

// ===== GSAP Animations =====
gsap.from(".home-content", { opacity: 0, y: 50, duration: 1.5, delay: 0.5 });
gsap.from(".engineer-avatar", { opacity: 0, x: 50, duration: 1.5, delay: 1 });
gsap.from(".theme-toggle", { opacity: 0, y: -50, duration: 1, delay: 1.5 });
