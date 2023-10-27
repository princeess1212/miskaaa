function createFirework() {
    const fireworksContainer = document.getElementById('fireworks-container');
    const firework = document.createElement('div');
    firework.classList.add('firework');
    const xPos = Math.random() * window.innerWidth;
    const yPos = Math.random() * window.innerHeight;
    firework.style.left = xPos + 'px';
    firework.style.top = yPos + 'px';
    fireworksContainer.appendChild(firework);

    // Remove the firework element after the animation ends
    firework.addEventListener('animationiteration', () => {
        fireworksContainer.removeChild(firework);
    });
}

// Create fireworks at intervals
setInterval(createFirework, 1000);
