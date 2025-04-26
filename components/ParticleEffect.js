function ParticleEffect() {
    try {
        React.useEffect(() => {
            const particlesContainer = document.getElementById('particles-container');
            const numberOfParticles = 50;

            const createParticle = () => {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                // Random initial position
                particle.style.left = Math.random() * 100 + 'vw';
                particle.style.top = Math.random() * 100 + 'vh';
                
                // Random size between 3-8px
                const size = Math.random() * 5 + 3;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                // Random animation duration between 8-15s
                const duration = Math.random() * 7 + 8;
                particle.style.animation = `float ${duration}s linear infinite`;
                
                // Random delay
                particle.style.animationDelay = -Math.random() * 15 + 's';
                
                // Random particle type (different colors and effects)
                const particleType = Math.floor(Math.random() * 3);
                particle.classList.add(`particle-type-${particleType}`);
                
                particlesContainer.appendChild(particle);
                
                // Remove particle after animation
                setTimeout(() => {
                    particle.remove();
                }, duration * 1000);
            };

            // Create initial particles
            for (let i = 0; i < numberOfParticles; i++) {
                createParticle();
            }

            // Continuously create new particles
            const interval = setInterval(() => {
                createParticle();
            }, 300);

            return () => {
                clearInterval(interval);
                if (particlesContainer) {
                    particlesContainer.innerHTML = '';
                }
            };
        }, []);

        return (
            <div id="particles-container" className="particles-container" data-name="particles-container"></div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
