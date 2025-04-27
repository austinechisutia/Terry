function Projects() {
    try {
        const projects = [
            {
                number: "01",
                title: "Production",
                description: "A series of playful illustrations showcasing the vibrant life of city dwellers",
                image: "images/urban-stories.png",
                tags: ["URBAN", "LIFESTYLE", "ILLUSTRATION"]
            },
            {
                number: "02",
                title: "Events",
                description: "An exploration of surreal digital artwork merging technology and imagination",
                image: "images/digital-dreams.png",
                tags: ["DIGITAL", "SURREAL"]
            },
            {
                number: "03",
                title: "Drumming",
                description: "A commissioned series of illustrations for a boutique coffee brand",
                image: "images/coffee-tales.png",
                tags: ["COMMERCIAL", "BRANDING"]
            }
        ];

        return (
            <section className="projects" data-name="projects-section">
                <div className="container">
                    <div className="projects-grid" data-name="projects-grid">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
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
