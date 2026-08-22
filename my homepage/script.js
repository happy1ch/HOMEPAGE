// Add subtle parallax effect to background blobs
document.addEventListener('mousemove', (e) => {
    const blobs = document.querySelectorAll('.blob');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;

    blobs.forEach((blob, index) => {
        const speed = (index + 1) * 20;
        blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// Link card click effect
const cards = document.querySelectorAll('.link-card');
cards.forEach(card => {
    card.addEventListener('mousedown', () => {
        card.style.transform = 'scale(0.98) translateY(2px)';
    });
    card.addEventListener('mouseup', () => {
        card.style.transform = 'translateY(-4px)';
    });
});

// Fade in animation for elements
window.addEventListener('DOMContentLoaded', () => {
    const elements = [
        document.querySelector('.profile-section'),
        ...document.querySelectorAll('.link-card'),
        document.querySelector('.footer')
    ];

    elements.forEach((el, index) => {
        if (!el) return;
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
