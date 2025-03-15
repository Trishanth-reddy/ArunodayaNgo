function setupCounter(element) {
    let counter = 0
    const setCounter = (count) => {
      counter = count
      element.innerHTML = `count is ${counter}`
    }
    element.addEventListener('click', () => setCounter(counter + 1))
    setCounter(0)
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
//impact
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
//core team section
class TeamCarousel {
    constructor() {
        this.members = Array.from(document.querySelectorAll('.team-member'));
        this.positions = [
            { transform: 'translateX(-100%) scale(0.8)', zIndex: 1 },
            { transform: 'translateX(0) scale(1)', zIndex: 2 },
            { transform: 'translateX(100%) scale(0.8)', zIndex: 1 }
        ];
        
        this.currentCenter = 1;
        this.setupEventListeners();
        this.isAnimating = false;
    }

    setupEventListeners() {
        this.members.forEach((member, index) => {
            member.addEventListener('mouseenter', () => this.handleHover(index));
            member.addEventListener('click', () => this.handleMemberClick(index));
        });

        let startX = 0;
        let isDragging = false;

        document.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
        }, { passive: true });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            
            const currentX = e.touches[0].clientX;
            const diff = currentX - startX;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.moveLeft();
                } else {
                    this.moveRight();
                }
                isDragging = false;
            }
        }, { passive: true });

        document.addEventListener('touchend', () => {
            isDragging = false;
        }, { passive: true });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.moveLeft();
            } else if (e.key === 'ArrowRight') {
                this.moveRight();
            }
        });
    }

    handleHover(hoveredIndex) {
        if (this.isAnimating || hoveredIndex === this.currentCenter) return;

        this.isAnimating = true;

        if (hoveredIndex === (this.currentCenter + 1) % 3) {
            const leftIndex = (this.currentCenter - 1 + 3) % 3;
            this.members[leftIndex].style.transform = this.positions[2].transform;
            this.members[leftIndex].style.zIndex = this.positions[2].zIndex;

            this.members[this.currentCenter].style.transform = this.positions[0].transform;
            this.members[this.currentCenter].style.zIndex = this.positions[0].zIndex;

            this.members[hoveredIndex].style.transform = this.positions[1].transform;
            this.members[hoveredIndex].style.zIndex = this.positions[1].zIndex;

            this.currentCenter = hoveredIndex;
        }
        else if (hoveredIndex === (this.currentCenter - 1 + 3) % 3) {
            const rightIndex = (this.currentCenter + 1) % 3;
            this.members[rightIndex].style.transform = this.positions[0].transform;
            this.members[rightIndex].style.zIndex = this.positions[0].zIndex;

            this.members[this.currentCenter].style.transform = this.positions[2].transform;
            this.members[this.currentCenter].style.zIndex = this.positions[2].zIndex;

            this.members[hoveredIndex].style.transform = this.positions[1].transform;
            this.members[hoveredIndex].style.zIndex = this.positions[1].zIndex;

            this.currentCenter = hoveredIndex;
        }

        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    handleMemberClick(clickedIndex) {
        if (this.isAnimating || clickedIndex === this.currentCenter) return;
        
        const direction = clickedIndex < this.currentCenter ? 'left' : 'right';
        if (direction === 'left') {
            this.moveLeft();
        } else {
            this.moveRight();
        }
    }

    moveLeft() {
        if (this.isAnimating || this.currentCenter === 0) return;
        
        this.isAnimating = true;
        this.currentCenter--;
        this.updatePositions();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    moveRight() {
        if (this.isAnimating || this.currentCenter === 2) return;
        
        this.isAnimating = true;
        this.currentCenter++;
        this.updatePositions();
        
        setTimeout(() => {
            this.isAnimating = false;
        }, 500);
    }

    updatePositions() {
        this.members.forEach((member, index) => {
            const position = this.getPosition(index);
            member.style.transform = this.positions[position].transform;
            member.style.zIndex = this.positions[position].zIndex;
        });
    }

    getPosition(index) {
        return (index - this.currentCenter + 3) % 3;
    }
}

// Initialize the carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new TeamCarousel();
});
