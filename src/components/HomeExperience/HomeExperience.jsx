import  "./HomeExperience.scss";

const HomeExperience = () => {
  return (
    <div className="experience fade-in-up">
      {/* Experience & Education */}
      <section className="experience__section">
        <div className="experience__container">
          <h2 className="experience__subheader">Professional Experience</h2>
          <div className="experience__column">
            <div className="experience__exp-items">
              <div className="experience__exp-item">
                <h3 className="fade-in-left stagger-1">
                  Software Developer – Collective Interchange
                </h3>

                <p className="fade-in-left stagger-1">
                  Built and optimized the Newcomer Navigator NL platform using React, Next.js, and TypeScript, 
                  delivering scalable and responsive user interfaces.
                </p>

                <p className="fade-in-left stagger-1">
                  Developed reusable UI components and integrated APIs and third-party services to enhance 
                  application functionality and user experience.
                </p>

                <p className="fade-in-left stagger-1">
                  Improved application performance through debugging, optimization, and adherence to clean 
                  architecture principles.
                </p>

                <p className="fade-in-left stagger-1">
                  Collaborated in code reviews and Git-based workflows, contributing to maintainable and 
                  production-ready code.
                </p>

                <p className="fade-in-left stagger-1">
                  Maintained technical documentation to support team collaboration and long-term scalability.
                </p>
              </div>
              <div className="experience__exp-item">
                <h3 className="fade-in-left stagger-1">Software Developer – Vifta Technology Limited</h3>
                <p className="fade-in-left stagger-1">
                  Built and styled 10+ responsive pages using Next.js, MaterialUI and TypeScript,
                  ensuring consistent design and accessibility.
                </p>
                <p className="fade-in-left stagger-1">
                  Developed backend features, including file uploads and dynamic email templates,
                  with Node.js, TypeScript, and MongoDB.
                </p>
                <p className="fade-in-left stagger-1">
                  Enhanced SEO performance by improving metadata across multiple pages, boosting
                  search engine visibility.
                </p>
                <p className="fade-in-left stagger-1">
                  Integrated PostHog analytics across multiple components of the codebase, enabling
                  detailed tracking of user interactions and surfacing insights on the dashboard to
                  support data-driven decision making.
                </p>
                <p className="fade-in-left stagger-1">
                  Collaborated with cross-functional teams to refine specifications and implement
                  full-stack features aligned with business goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="experience__section">
          <div className="experience__volunteer">
            <h2 className="experience__subheader">Volunteer Experience</h2>
            <div className="experience__volunteer-items">
              <div className="experience__volunteer-item">
                <h3 className="fade-in-left stagger-1">
                  Mentor & Instructor Coordinator – TechNest Community
                </h3>

                <p className="fade-in-left stagger-1">
                  Support the growth of aspiring developers through structured mentorship and training programs.
                </p>

                <p className="fade-in-left stagger-1">
                  Coordinate instructors and contribute to curriculum planning to ensure effective learning delivery.
                </p>

                <p className="fade-in-left stagger-1">
                  Conduct interviews and evaluate prospective students to ensure they meet program requirements and are well-positioned for success.
                </p>

                <p className="fade-in-left stagger-1">
                  Mentor students in technical and career development, helping them build real-world skills.
                </p>

                <p className="fade-in-left stagger-1">
                  Facilitate communication between instructors, mentors, and students to maintain a smooth and impactful learning experience.
                </p>
              </div>

              <div className="experience__volunteer-item">
                <h3 className="fade-in-left stagger-1">
                  Video Editor – Da Refiner's Fire Drama Ministry
                </h3>

                <p className="fade-in-left stagger-1">
                  Create and edit engaging video content for platforms including YouTube, Instagram, and TikTok, 
                  helping reach and grow a broader digital audience.
                </p>

                <p className="fade-in-left stagger-1">
                  Transform raw footage into compelling visual stories using CapCut, applying dynamic cuts, 
                  transitions, and effects.
                </p>

                <p className="fade-in-left stagger-1">
                  Optimize content for multiple formats, from short-form vertical videos to long-form productions.
                </p>

                <p className="fade-in-left stagger-1">
                  Manage end-to-end production, from concept and editing to final delivery.
                </p>
              </div>
            </div>
          </div>
      </section>
      </div>
  )
}

export default HomeExperience