import TitleHeader from "../components/TitleHeader";

const skillGroups = [
  {
    title: "Languages & Databases",
    skills: [
      "JavaScript",
      "Python",
      "Java",
      "HTML",
      "CSS",
      "MongoDB Atlas",
      "PostgreSQL",
      "MySQL",
      "SQLite",
    ],
  },
  {
    title: "Frameworks & APIs",
    skills: [
      "Spring Boot",
      "Web API",
      "React.js",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "Microservices",
      "JWT",
      "OAuth 2.0",
    ],
  },{
    title: "AI & Development Tools",
    skills: [
      "Google Gemini",
      "Hugging Face",
      "OpenAI Codex",
      "AI-Assisted Development",
      "Prompt Engineering",
      "Figma",
    ],
  },
  {
    title: "Cloud & Tools",
    skills: [
      "AWS (Lambda, S3)",
      "Azure",
      "Docker",
      "Git/GitHub",
      "GitHub Actions",
      "Postman",
      "Jest & JUnit",
      "Maven",
      "JIRA",
          ],
        },
      ];

const TechStack = () => {
  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader title="Skills" sub="💡 My Core Stack" />

        <div
          className="skill-cards-grid"
          onWheel={(event) => {
            if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
              event.preventDefault();
              event.currentTarget.scrollLeft += event.deltaY;
            }
          }}
        >
          {skillGroups.map((group) => (
            <div key={group.title} className="skill-card">
              <div className="skill-card-header">
                <h3>{group.title}</h3>
              </div>

              <div className="skill-card-divider" />

              <div className="skill-pill-list">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
