import TitleHeader from "../components/TitleHeader";

const Contact = () => (
  <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-0">
      <TitleHeader title="Let’s Connect" sub="Open to new opportunities" />
      <div className="contact-card mt-16">
        <div className="contact-map-pattern" aria-hidden="true" />
        <div className="contact-card-content">
          <div className="contact-icon" aria-hidden="true">✉</div>
          <p className="contact-intro">
            I’m actively seeking software engineering opportunities and would love to connect about ideas, roles, and collaborations. Please don't hesitate to reach out to me or simply say hello!
          </p>
          <div className="contact-detail">
            <h2>Email</h2>
            <a href="mailto:khushi.bhatt0405@gmail.com">khushi.bhatt0405@gmail.com</a>
          </div>
          <div className="contact-detail">
            <h2>Socials</h2>
            <div className="contact-social-links">
              <a href="https://www.linkedin.com/in/khushi-bhatt-1b49a0229/" target="_blank" rel="noreferrer" aria-label="Khushi Bhatt on LinkedIn">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5.1 3.5A2.1 2.1 0 1 1 1 3.5a2.1 2.1 0 0 1 4.1 0ZM1.4 8h3.5v11H1.4V8Zm5.7 0h3.4v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8V19h-3.5v-5c0-1.2 0-2.9-1.8-2.9s-2 1.4-2 2.8V19H7.1V8Z" /></svg>
              </a>
              <a href="https://github.com/KhushiBhatt22" target="_blank" rel="noreferrer" aria-label="Khushi Bhatt on GitHub">
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 1.5a10.5 10.5 0 0 0-3.3 20.5c.5.1.7-.2.7-.5v-2c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.4-1.1.7-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5A10.5 10.5 0 0 0 12 1.5Z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
