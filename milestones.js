// Timeline data
const timelineData = [
    { id: 1, date: "Nov 21, 2008", title: "Trust Registration", description: "Registered under the Trust Act 1882." },
    { id: 2, date: "May 11, 2009", title: "Orphan Home", description: "Established Arunodaya Orphan Home." },
    { id: 3, date: "May 28, 2010", title: "Income Tax Registration", description: "Registered under Section 12A." },
    { id: 4, date: "Aug 4, 2011", title: "Section 80G", description: "Registered under Section 80G." },
    { id: 5, date: "Feb 1, 2012", title: "Care Program", description: "Launched Care & Support Program." },
    { id: 6, date: "May 10, 2013", title: "FCRA Registration", description: "Registered under FCRA." },
    { id: 7, date: "May 7, 2014", title: "Shelter Home", description: "Constructed Shelter Home." },
    { id: 8, date: "Nov 1, 2015", title: "Best NGO Award", description: "Selected as Best NGO." },
    { id: 9, date: "Jun 1, 2016", title: "Skill Centre", description: "Established Skill Development Centre." },
    { id: 10, date: "2016", title: "PMKVY Project", description: "Initiated PMKVY Project." },
    { id: 11, date: "2017", title: "SC Corporation", description: "Implemented SC Corporation Project." },
    { id: 12, date: "2018", title: "DDU-GKY", description: "Launched DDU-GKY Project." },
    { id: 13, date: "2019", title: "CSR Project", description: "Urban Ultra Poor Program." },
    { id: 14, date: "2020", title: "COVID-19 Relief", description: "Distributed relief to 12,000 families." }
];

// Populate timeline events
const timelineEventsContainer = document.getElementById('timeline-events');
timelineData.forEach((event, index) => {
    const node = document.createElement('div');
    node.className = `timeline-node`;
    node.dataset.id = event.id;
    node.style.transitionDelay = `${index * 100}ms`;

    node.innerHTML = `
        <div class="timeline-marker">${event.id}</div>
        <div class="timeline-card">
            <div class="timeline-card-content">
                <div class="timeline-card-body">
                    <h3 class="timeline-date">${event.date}</h3>
                    <h4 class="timeline-title">${event.title}</h4>
                    <p class="timeline-description">${event.description}</p>
                </div>
            </div>
        </div>
    `;

    timelineEventsContainer.appendChild(node);
});

// Handle scroll buttons
document.querySelectorAll('.scroll-button').forEach(button => {
    button.addEventListener('click', () => {
        const direction = button.getAttribute('data-direction');
        const timelineContainer = document.getElementById('timeline-container');
        const scrollAmount = direction === 'left' ? -500 : 500;
        timelineContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});

// Draw curved path
function drawCurvedPath() {
    const svgElement = document.getElementById('timeline-svg');
    const timelineContent = document.querySelector('.timeline-content');
    const markers = document.querySelectorAll('.timeline-marker');

    if (markers.length < 2 || !svgElement) return;

    // Get the relative positions within the timeline content
    const timelineRect = timelineContent.getBoundingClientRect();
    
    const markerPositions = Array.from(markers).map(marker => {
        const rect = marker.getBoundingClientRect();
        return { 
            x: rect.left - timelineRect.left + rect.width / 2, 
            y: rect.top - timelineRect.top + rect.height / 2 
        };
    });

    let pathData = `M ${markerPositions[0].x} ${markerPositions[0].y}`;
    for (let i = 0; i < markerPositions.length - 1; i++) {
        const current = markerPositions[i];
        const next = markerPositions[i + 1];
        const midX = (current.x + next.x) / 2;
        pathData += ` C ${midX} ${current.y}, ${midX} ${next.y}, ${next.x} ${next.y}`;
    }

    const path = svgElement.querySelector('path');
    if (path) {
        path.setAttribute('d', pathData);
        path.style.animation = 'none';
        path.offsetHeight; // Trigger reflow
        path.style.animation = 'dash 3s cubic-bezier(0.4, 0, 0.2, 1) forwards';
    }
}

// Initial setup
window.addEventListener('DOMContentLoaded', () => {
    drawCurvedPath();
    document.querySelectorAll('.timeline-node').forEach(node => {
        node.classList.add('animate-fade-in');
    });
});

// Redraw path on resize
window.addEventListener('resize', () => {
    drawCurvedPath();
});