import heroImage1 from '../assets/drum.png';
import heroImage2 from '../assets/hero-image-2.png';

const heroImages = [
    { id: 1, src: heroImage1, alt: 'Hero Image 1' },
    { id: 2, src: heroImage2, alt: 'Hero Image 2' }
  ];
  

function Hero() {
    try {
        return (
            <section className="hero relative" data-name="hero-section">
                <ParticleEffect />
                <div className="container relative z-10">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2" data-name="hero-content">
                            <div className="text-sm mb-4" data-name="hero-label">DRUMMER</div>
                            <h1 className="hero-title" data-name="hero-title">TERRYSON KAMAU</h1>
                            <p className="hero-subtitle" data-name="hero-description">
                                Creating playful and imaginative illustrations that bring stories to life and add color to everyday moments
                            </p>
                            <button className="learn-more-btn" data-name="learn-more-button">
                                LEARN MORE
                                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                                </svg>
                            </button>
                        </div>
                        <div className="w-1/2 hero-image-container" data-name="hero-image-container">
                            <img 
                                src={heroImage1}
                                alt="Hero" 
                                className="hero-image" 
                                data-name="hero-image"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
