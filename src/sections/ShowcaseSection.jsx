import { useState } from "react";

import TitleHeader from "../components/TitleHeader";

const projects = [
  {
    category: "Fullstack",
    title: "Bookstagram",
    description:
      "AI-powered publishing platform for creating, managing, and sharing book content with a modern user experience.",
    type: "Full stack development",
    purpose: "Personal Project",
    summary:
      "Bookstagram is a full-stack MERN application that helps users write, organize, and publish book ideas with AI support. The app includes secure user authentication, media uploads, and intelligent generation workflows powered by Google Gemini and Hugging Face APIs, making content creation faster and more engaging.",
    tech: ["React.js", "Node.js", "Express", "MongoDB Atlas", "JWT", "Gemini API", "Hugging Face", "Tailwind CSS", "Cloudinary"],
    liveUrl: "https://bookstagramfrontend.vercel.app/",
    githubUrl: "https://github.com/KhushiBhatt22/Bookstagram",
  },
  {
    category: "Frontend",
    title: "Solva Chemicals",
    description:
      "Global B2B chemical commerce site focused on product clarity, conversions, and seamless user engagement.",
    type: "Frontend development",
    purpose: "Business website",
    summary:
      "Solva Chemicals is a responsive B2B website built with React and Vite to present chemical products clearly and support lead generation. The site emphasizes strong conversion-focused UX, polished navigation, and performance-friendly design tailored for business buyers.",
    tech: ["React.js", "Vite", "Bluehost", "OpenAI Codex"],
    liveUrl: "https://solvachemicals.com/",
    githubUrl: "https://github.com/KhushiBhatt22/solva_chemicals",
  },
  {
    category: "Fullstack",
    title: "TripTo",
    description:
      "Travel planning platform designed to match users with destinations, payment support, and travel data workflows.",
    type: "Full stack development",
    purpose: "Personal Project",
    summary:
      "TripTo is a travel planning application designed to manage travel logic, payment handling, and user-driven trip recommendations. The project includes a PostgreSQL-backed data model, rule-based scoring logic, and Java/Spring Boot APIs built to serve travel and financial workflows efficiently.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Maven", "Stripe API"],
    liveUrl: "#",
    githubUrl: "https://github.com/KhushiBhatt22/TravelBuddy.git",
  },
  {
    category: "Fullstack",
    title: "SnapBid",
    description:
      "Full-stack auction platform with secure authentication, dynamic access control, and production deployment flows.",
    type: "Full stack development",
    purpose: "Personal Project",
    summary:
      "SnapBid is a full-stack auction platform built to support secure bidding, role-based access, and production-ready deployment. It includes JWT authentication, encrypted passwords, backend APIs, and a responsive frontend that adapts to authenticated and admin user states for a complete end-to-end SaaS experience.",
    tech: ["JavaScript", "React", "Node.js", "Express", "MongoDB Atlas", "JWT", "Vercel", "Render"],
    liveUrl: "https://snap-bid-app.vercel.app/about",
    githubUrl: "https://github.com/KhushiBhatt22/snap-bid-app.git",
  },
];

const AppShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="app-showcase">
      <div className="w-full">
        <TitleHeader title="Projects" sub="My Work" />

        <div className="project-scroll-wrapper">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-card-inner">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <button
                  type="button"
                  className="project-details-btn"
                  onClick={() => setSelectedProject(project)}
                >
                  View details <span>↗</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
            >
              ×
            </button>

            <h2>{selectedProject.title}</h2>

            <div className="project-modal-meta">
              {selectedProject.tech.map((item) => (
                <span key={`${selectedProject.title}-${item}`}>{item}</span>
              ))}
            </div>

            <div className="project-modal-grid">
              <div>
                <h3>Type</h3>
                <p>{selectedProject.type}</p>
              </div>
              <div>
                <h3>Purpose</h3>
                <p>{selectedProject.purpose}</p>
              </div>
              <div>
                <h3>GitHub Repository</h3>
                <a href={selectedProject.githubUrl} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </div>
              <div>
                <h3>Live Preview</h3>
                {selectedProject.liveUrl && selectedProject.liveUrl !== "#" ? (
                  <a href={selectedProject.liveUrl} target="_blank" rel="noreferrer">
                    Live
                  </a>
                ) : (
                  <p>Not available</p>
                )}
              </div>
            </div>

            <div className="project-summary">
              <h3>Summary</h3>
              <p>{selectedProject.summary}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AppShowcase;
