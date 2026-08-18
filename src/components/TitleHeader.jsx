/**
 * TitleHeader Component
 * 
 * A reusable component that creates section headers with a subtitle badge and main title.
 * Used throughout the portfolio to display section titles like "Experience", "Skills", "Projects", etc.
 * 
 * Props:
 *   - title (string): The main heading text
 *   - sub (string): The subtitle/badge text displayed above the title
 */

const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      <div className="hero-badge">
        <p>{sub}</p>
      </div>
      <div>
        <h1 className="font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;
