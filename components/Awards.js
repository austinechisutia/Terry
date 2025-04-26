function Awards() {
    try {
        const awards = [
            {
                year: "2023",
                title: "Digital Artist of the Year",
                description: "Awarded by International Digital Art Association for exceptional contribution to digital illustration"
            },
            {
                year: "2022",
                title: "Best Editorial Illustration",
                description: "Winner of the Editorial Illustration Award for the 'Urban Stories' series"
            },
            {
                year: "2021",
                title: "Brand Innovation Award",
                description: "Recognized for innovative approach in brand identity illustration for Coffee Tales project"
            }
        ];

        return (
            <section className="awards" id="awards" data-name="awards-section">
                <div className="container">
                    <h2 className="awards-title" data-name="awards-title">Awards & Recognition</h2>
                    <div className="awards-list" data-name="awards-list">
                        {awards.map((award, index) => (
                            <div key={index} className="award-item" data-name={`award-item-${index}`}>
                                <div className="award-year" data-name={`award-year-${index}`}>{award.year}</div>
                                <h3 className="award-title" data-name={`award-title-${index}`}>{award.title}</h3>
                                <p className="award-description" data-name={`award-description-${index}`}>{award.description}</p>
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
