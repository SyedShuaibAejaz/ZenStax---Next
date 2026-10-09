import Link from "next/link";
import styles from "./demo-site.module.css";

export const metadata = {
  title: "Sample Business Website Demo",
  description:
    "A sample website for a fictional interior design studio, built by ZenStax to show our approach to design, mobile layout, and enquiry flow.",
  alternates: { canonical: "/demos/business-website" },
};

const services = [
  {
    title: "Residential interiors",
    text: "Complete design for villas and apartments, from concept to final styling.",
  },
  {
    title: "Office and retail fit-out",
    text: "Workspaces and showrooms that reflect your brand and support daily operations.",
  },
  {
    title: "Space planning",
    text: "Practical layouts that make better use of the space you already have.",
  },
];

const projects = [
  { name: "Palm Residence", type: "Villa interior", tone: "toneOne" },
  { name: "Creek Studio Office", type: "Commercial fit-out", tone: "toneTwo" },
  { name: "Marina Penthouse", type: "Apartment interior", tone: "toneThree" },
];

const marqueeItems = [
  "Residential interiors",
  "Office fit-out",
  "Space planning",
  "Retail design",
  "Styling",
  "Project management",
];

export default function BusinessWebsiteDemo() {
  return (
    <div className={styles.site}>
      <div className={styles.notice}>
        <span>
          <strong>Demo website.</strong> Fictional business built by ZenStax to
          showcase our design and development work.
        </span>
        <Link href="/services/web-development">Back to ZenStax</Link>
      </div>

      <header className={styles.header}>
        <span className={styles.logo}>
          Sahara<span>Interiors</span>
        </span>
        <nav className={styles.nav} aria-label="Demo site navigation">
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact" className={styles.navCta}>
            Book a consultation
          </a>
        </nav>
      </header>

      <section className={styles.hero}>
        <div className={styles.blobOne} aria-hidden="true" />
        <div className={styles.blobTwo} aria-hidden="true" />

        <p
          className={`${styles.eyebrow} ${styles.rise}`}
          style={{ "--i": 0 }}
        >
          Interior design studio
        </p>
        <h1 className={styles.rise} style={{ "--i": 1 }}>
          Spaces designed to feel calm, <span>and work properly.</span>
        </h1>
        <p className={styles.rise} style={{ "--i": 2 }}>
          We design homes and workplaces that are beautiful to look at and easy
          to live and work in.
        </p>
        <div
          className={`${styles.heroActions} ${styles.rise}`}
          style={{ "--i": 3 }}
        >
          <a href="#contact" className={styles.primary}>
            Book a consultation
            <span aria-hidden="true">→</span>
          </a>
          <a href="#projects" className={styles.secondary}>
            View projects
          </a>
        </div>
      </section>

      <div className={styles.marquee} aria-hidden="true">
        <div className={styles.marqueeTrack}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>

      <section id="services" className={styles.section}>
        <p className={`${styles.eyebrow} ${styles.reveal}`}>What we do</p>
        <h2 className={styles.reveal}>
          Design services for homes and businesses.
        </h2>
        <div className={styles.cardGrid}>
          {services.map((item) => (
            <article key={item.title} className={`${styles.card} ${styles.reveal}`}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className={`${styles.section} ${styles.altSection}`}>
        <p className={`${styles.eyebrow} ${styles.reveal}`}>Selected work</p>
        <h2 className={styles.reveal}>Recent projects.</h2>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <article
              key={project.name}
              className={`${styles.project} ${styles.reveal}`}
            >
              <div className={styles.projectFrame}>
                <div
                  className={`${styles.projectImage} ${styles[project.tone]}`}
                />
              </div>
              <h3>{project.name}</h3>
              <p>{project.type}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <blockquote className={`${styles.quote} ${styles.reveal}`}>
          “They listened first, then designed. The result feels like us.”
          <cite>Sample client testimonial</cite>
        </blockquote>
      </section>

      <section id="contact" className={`${styles.section} ${styles.contact}`}>
        <div className={styles.reveal}>
          <p className={styles.eyebrow}>Get in touch</p>
          <h2>Tell us about your space.</h2>
          <p>
            Share a few details and we will arrange a consultation. This demo
            form shows the layout of a typical enquiry section.
          </p>
        </div>

        <form className={`${styles.form} ${styles.reveal}`}>
          <label>
            Name
            <input type="text" placeholder="Your name" readOnly />
          </label>
          <label>
            Phone or email
            <input type="text" placeholder="How should we contact you?" readOnly />
          </label>
          <label>
            Project type
            <input type="text" placeholder="Villa, apartment, office..." readOnly />
          </label>
          <button type="button">Send enquiry (demo)</button>
        </form>
      </section>

      <footer className={styles.footer}>
        <span>Sahara Interiors · Sample website</span>
        <Link href="/contact">Want a website like this? Contact ZenStax →</Link>
      </footer>
    </div>
  );
}
