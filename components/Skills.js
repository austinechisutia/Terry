function Skills() {
    try {
        const skills = [
            {
                name: "Digital Illustration",
                icon: (
                    <svg viewBox="0 0 24 24" className="skill-icon">
                        <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/>
                    </svg>
                ),
                description: "Creating vibrant digital artwork using industry-standard tools"
            },
            {
                name: "Character Design",
                icon: (
                    <svg viewBox="0 0 24 24" className="skill-icon">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                ),
                description: "Designing unique and memorable characters for various projects"
            },
            {
                name: "Brand Identity",
                icon: (
                    <svg viewBox="0 0 24 24" className="skill-icon">
                        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.7L19.05 8 12 11.3 4.95 8 12 4.7zm-8 10.6V9.4l8 3.3v8.3l-8-4zm10 4l8-4V9.4l-8 3.3v8.3z"/>
                    </svg>
                ),
                description: "Creating cohesive visual identities for brands"
            },
            {
                name: "Art Direction",
                icon: (
                    <svg viewBox="0 0 24 24" className="skill-icon">
                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V8z"/>
                    </svg>
                ),
                description: "Leading creative projects and maintaining visual consistency"
            }
        ];

        return (
            <section className="skills" id="skills" data-name="skills-section">
                <div className="container">
                    <h2 className="skills-title" data-name="skills-title">Skills</h2>
                    <div className="skills-grid" data-name="skills-grid">
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card" data-name={`skill-card-${index}`}>
                                {skill.icon}
                                <h3 className="skill-name" data-name={`skill-name-${index}`}>{skill.name}</h3>
                                <p className="skill-description" data-name={`skill-description-${index}`}>{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
