function Projects() {
    try {
        const projects = [
            {
                number: "01",
                title: "Urban Stories",
                description: "A series of playful illustrations showcasing the vibrant life of city dwellers",
                image: "https://app.trickle.so/storage/public/images/usr_0907d21e50000001/2b916516-b860-4db3-86ba-01e67c528b2c.jpeg",
                tags: ["URBAN", "LIFESTYLE", "ILLUSTRATION"]
            },
            {
                number: "02",
                title: "Digital Dreams",
                description: "An exploration of surreal digital artwork merging technology and imagination",
                image: "https://app.trickle.so/storage/public/images/usr_0907d21e50000001/bfa34df9-318b-44b7-8cfb-c6fe715b29a3.jpeg",
                tags: ["DIGITAL", "SURREAL"]
            },
            {
                number: "03",
                title: "Coffee Tales",
                description: "A commissioned series of illustrations for a boutique coffee brand",
                image: "https://app.trickle.so/storage/public/images/usr_0907d21e50000001/58ed866d-4459-411e-9069-4f81ccd2dd3e.jpeg",
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
