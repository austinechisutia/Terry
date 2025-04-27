function Hero() {
    try {
        return (
            <section className="hero relative" data-name="hero-section">
                <ParticleEffect />
                <div className="container relative z-10">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2" data-name="hero-content">
                            <div className="text-sm mb-4" data-name="hero-label">Artist</div>
                            <h1 className="hero-title" data-name="hero-title">TERRY KAMAU</h1>
                            <p className="hero-subtitle" data-name="hero-description">
                            I'm a drummer and live streamer who brings the energy of live music straight to your screen. With every beat and every stream, I aim to create real-time experiences that are raw, powerful, and unforgettable. Whether it's live sessions, jam nights, or interactive streams, it’s all about sharing the rhythm and connecting with people through music.
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
                                src="images/hero.png" 
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
