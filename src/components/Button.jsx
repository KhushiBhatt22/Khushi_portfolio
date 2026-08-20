/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      href={id ? `#${id}` : undefined}
      onClick={(e) => {
        if (!id) return;

        e.preventDefault();

        const target = document.getElementById(id);

        if (target) {
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper group`} // Add base + extra class names and group for hover
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text text-white">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
