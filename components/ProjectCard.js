function ProjectCard({ number, title, description, image, tags }) {
    try {
        return (
            <div className="project-card" data-name="project-card">
                <div className="project-number" data-name="project-number">{number}</div>
                <img src={image} alt={title} className="project-image" data-name="project-image"/>
                <h3 className="project-title" data-name="project-title">{title}</h3>
                <p className="project-description" data-name="project-description">{description}</p>
                <div className="flex flex-wrap gap-2" data-name="project-tags">
                    {tags.map((tag, index) => (
                        <span key={index} className="tag" data-name={`project-tag-${index}`}>{tag}</span>
                    ))}
                </div>
            </div>
        );
    } catch (error) {
        reportError(error);
        return null;
    }
}
