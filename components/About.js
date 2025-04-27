function About() {
    try {
        return (
            <section className="about" id="about" data-name="about-section">
                <div className="container">
                    <h2 className="about-title" data-name="about-title">About Me</h2>
                    <div className="about-content" data-name="about-content">
                        <div data-name="about-image-container">
                            <img 
                                src="images/about.png" 
                                alt="About" 
                                className="about-image"
                                data-name="about-image"
                            />
                        </div>
                        <div data-name="about-text-container">
                            <p className="about-text" data-name="about-description">
                                I'm a digital illustrator with over 8 years of experience in creating 
                                vibrant and engaging artwork. My journey began with traditional art, 
                                but I quickly fell in love with digital illustration and its endless 
                                possibilities.
                            </p>
                            <p className="about-text" data-name="about-description-2">
                                My work is characterized by bold colors, playful compositions, and 
                                attention to detail. I specialize in character design, editorial 
                                illustration, and brand storytelling through art.
                            </p>
                            <div className="grid grid-cols-3 gap-4 mt-8" data-name="stats-container">
                                <div className="about-stat" data-name="stat-experience">
                                    <div className="stat-number">8+</div>
                                    <div className="stat-label">Years Experience</div>
                                </div>
                                <div className="about-stat" data-name="stat-projects">
                                    <div className="stat-number">200+</div>
                                    <div className="stat-label">Projects</div>
                                </div>
                                <div className="about-stat" data-name="stat-clients">
                                    <div className="stat-number">50+</div>
                                    <div className="stat-label">Happy Clients</div>
                                </div>
                            </div>
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
