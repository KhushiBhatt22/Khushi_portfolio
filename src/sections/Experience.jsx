import TitleHeader from "../components/TitleHeader";

const timelineEntries = [
  {
    type: "Experience", title: "Software Engineer Intern", organization: "Pletheon Technologies", location: "Canada", date: "Apr 2026 – Present",
    details: ["Built cloud data pipelines and a broker-facing CMS using Python, AWS Lambda, C#, Angular, PostgreSQL, and Azure."],
    skills: ["Python", "AWS Lambda", "C#", "Angular", "PostgreSQL", "Azure"],
  },
  {
    type: "Education", title: "Post-Baccalaureate Diploma in Computer Information Systems", organization: "Douglas College", location: "New Westminster, BC, Canada", date: "2024 – 2026",
    details: ["Major: Emerging Technology."], skills: ["Emerging Technology", "Computer Information Systems"],
  },
  {
    type: "Experience", title: "Quality Assurance Engineer", organization: "Blobstation Inc.", location: "Ahmedabad, Gujarat, India", date: "Jun 2023 – Jan 2024",
    details: ["Improved release confidence through automated functional, API, and integration testing, reducing production issues by 35%."],
    skills: ["Test Automation", "API Testing", "Integration Testing", "Quality Assurance"],
  },
  {
    type: "Experience", title: "Junior QA Engineer Intern", organization: "Blobstation Inc.", location: "Ahmedabad, Gujarat, India", date: "Jan 2023 – Apr 2023",
    details: ["Completed a quality assurance internship focused on testing and validating web application workflows."], skills: ["Quality Assurance", "Web Testing"],
  },
  {
    type: "Education", title: "Bachelor of Engineering in Information and Communication Technology", organization: "Gujarat Technological University", location: "India", date: "2019 – 2023",
    details: ["Completed an undergraduate engineering degree in Information and Communication Technology."], skills: ["Information & Communication Technology"],
  },
];

const Experience = () => (
  <section id="experience" className="flex-center section-padding xl:px-0">
    <div className="w-full h-full md:px-20 px-5">
      <TitleHeader title="Career Timeline" sub="My journey so far" />
      <div className="career-timeline mt-20">
        <div className="career-timeline-line" aria-hidden="true" />
        <div className="career-timeline-items">
          {timelineEntries.map((entry, index) => (
            <article key={`${entry.title}-${entry.date}`} className={`career-timeline-item ${index % 2 ? "is-right" : "is-left"}`}>
              <div className="career-timeline-marker" aria-hidden="true">{entry.type === "Education" ? "✦" : "●"}</div>
              <div className="career-card">
                <div className="career-card-topline">
                  <span className={`career-type ${entry.type === "Education" ? "education" : ""}`}>{entry.type}</span>
                  <span className="career-date">▣ {entry.date}</span>
                </div>
                <h2>{entry.title}</h2>
                <p className="career-organization">{entry.organization}</p>
                <p className="career-location">⌖ {entry.location}</p>
                <ul>{entry.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                <div className="career-skills">{entry.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
