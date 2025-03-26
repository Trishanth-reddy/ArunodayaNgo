function setupCounter(element) {
    let counter = 0;
    const setCounter = (count) => {
        counter = count;
        element.innerHTML = `count is ${counter}`;
    };
    element.addEventListener('click', () => setCounter(counter + 1));
    setCounter(0);
}

function initMap() {
    // Telangana Map
    var telanganaMap = L.map('map-telangana').setView([17.385, 78.4867], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(telanganaMap);
    L.marker([17.385, 78.4867]).addTo(telanganaMap).bindPopup('Telangana Location');

    // Andhra Pradesh Map
    var andhraMap = L.map('map-andhra').setView([16.3067, 80.4365], 10);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(andhraMap);
    L.marker([16.3067, 80.4365]).addTo(andhraMap).bindPopup('Andhra Pradesh Location');
}

document.addEventListener("DOMContentLoaded", initMap);

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carousel");
    const logos = Array.from(carousel.children);

    // Duplicate logos for seamless scrolling
    logos.forEach(logo => {
        const clone = logo.cloneNode(true);
        carousel.appendChild(clone);
    });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add active class to current navigation item
const navLinks = document.querySelectorAll('.at-nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Prevent image drag
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('dragstart', (e) => e.preventDefault());
});

// Add smooth reveal animation for cards on scroll
const cards = document.querySelectorAll('.at-card');
const revealCards = () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        const triggerBottom = window.innerHeight * 0.8;

        if (cardTop < triggerBottom) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
};

// Initialize cards
cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.5s ease';
});

// Listen for scroll
window.addEventListener('scroll', revealCards);
// Initial check
revealCards();

// Impact section
function focusImpactCard(card) {
    const cards = document.querySelectorAll('.impact-card');

    // Reset all cards
    cards.forEach(c => {
        c.style.transform = '';
        c.style.zIndex = '';
    });

    // Set the clicked card to be on top
    card.style.transform = 'translateY(-40px)';
    card.style.zIndex = '10';

    // Add click event to document to reset when clicking outside
    document.addEventListener('click', function resetCards(e) {
        if (!card.contains(e.target)) {
            card.style.transform = '';
            card.style.zIndex = '';
            document.removeEventListener('click', resetCards);
        }
    });
}

// Animate impact counters with Intersection Observer
document.addEventListener('DOMContentLoaded', () => {
    const impactSection = document.querySelector('.impact-section');
    
    function animateImpactCounters(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.impact-counter');
                const duration = 2000; // Animation duration in ms
                const steps = 60; // Number of steps
                const interval = duration / steps;

                counters.forEach(counter => {
                    const targetValue = +counter.getAttribute('data-target');
                    let currentValue = 0;
                    let incrementValue = targetValue / steps;

                    const counterInterval = setInterval(() => {
                        currentValue += incrementValue;
                        if (currentValue >= targetValue) {
                            counter.textContent = targetValue;
                            clearInterval(counterInterval);
                        } else {
                            counter.textContent = Math.floor(currentValue);
                        }
                    }, interval);
                });

                // Unobserve the section after animation to prevent repeated triggering
                observer.unobserve(entry.target);
            }
        });
    }

    if (impactSection) {
        const observer = new IntersectionObserver(animateImpactCounters, {
            root: null, // viewport
            threshold: 0.1 // trigger when 10% of the section is visible
        });

        observer.observe(impactSection);
    }
});