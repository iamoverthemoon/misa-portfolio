import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const AUTO_ADVANCE_MS = 6000;

const capabilities = [
  {
    title: "Analyse data",
    body: "Clean, explore, and model data.",
    tools: "Python · R · SQL · Power BI",
  },
  {
    title: "Understand the business",
    body: "Research needs and translate findings into clear recommendations.",
    tools: "Requirements · Process analysis",
  },
  {
    title: "Build clear interfaces",
    body: "Create and test accessible web experiences.",
    tools: "HTML/CSS · Figma · UX testing",
  },
];

const experience = [
  "Administration & bookkeeping · PPS",
  "Accounting internship · ELTAX Accountants",
  "Treasurer · MQ Thai Society",
];

const pad = (n: number) => String(n).padStart(2, "0");

function SelectedWork() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const count = projects.length;
  const go = (step: number) => setActive((i) => (i + step + count) % count);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => setActive((i) => (i + 1) % count), AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [paused, count, active]);

  // The featured project leads; the rest keep their original order.
  const ordered = [projects[active], ...projects.filter((_, i) => i !== active)];

  return (
    <section
      id="work"
      className="flex scroll-mt-8 flex-col gap-4 pt-4 pb-8 md:gap-5 md:pt-6 md:pb-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <h2 className="text-[28px] leading-[1.25] font-medium whitespace-pre md:text-4xl">
        {"Selected work  ↗"}
      </h2>

      <div className="flex items-start gap-6" aria-live="polite">
        {ordered.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            featured={project === projects[active]}
            onSelect={() => setActive(projects.indexOf(project))}
          />
        ))}
      </div>

      <div className="flex gap-5 text-xs whitespace-nowrap text-ink md:text-sm">
        <button type="button" onClick={() => go(-1)} className="cursor-pointer hover:opacity-60">
          ← Previous
        </button>
        <p>
          {pad(active + 1)} / {pad(count)} · Auto preview
        </p>
        <button type="button" onClick={() => go(1)} className="cursor-pointer hover:opacity-60">
          Next →
        </button>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="mx-auto flex max-w-[1440px] flex-col px-6 py-8 leading-[1.25] md:px-20">
      <header className="flex items-center justify-between">
        <a href="#" className="font-serif text-4xl italic">
          misa.
        </a>
        <nav className="flex w-[130px] justify-between text-sm md:w-[300px]">
          <a href="#home" className="hover:opacity-60">Home</a>
          <a href="#work" className="hover:opacity-60">Work</a>
        </nav>
      </header>

      <main>
        {/* Introduction */}
        <section className="flex flex-col gap-3 pt-8 pb-7 md:gap-4 md:pt-9 md:pb-8">
          <p className="text-xs text-muted">HEMISA PINWEHA / SYDNEY, AUSTRALIA</p>
          <h1 className="text-[44px] leading-[1.05] font-medium tracking-[-0.03em] md:text-[76px]">
            Making complex things
            <br />
            <span className="font-serif font-normal italic">feel simple.</span>
          </h1>
          <p className="max-w-[900px] text-[15px] text-muted md:text-lg">
            I’m Misa — exploring data analytics, business analysis, and frontend design.
          </p>
        </section>

        <SelectedWork />

        <hr className="h-px border-0 bg-line" />

        {/* Capabilities */}
        <section className="flex flex-col gap-6 pt-10 pb-12">
          <p className="text-xs text-muted">WHAT I CAN DO</p>
          <div className="grid gap-8 md:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="flex flex-col gap-3">
                <h3 className="text-2xl font-medium">{item.title}</h3>
                <p className="text-base text-muted md:max-w-[380px]">
                  {item.body}
                  <br />
                  {item.tools}
                </p>
              </div>
            ))}
          </div>
        </section>

        <hr className="h-px border-0 bg-line" />

        {/* About and experience */}
        <section
          id="about"
          className="flex scroll-mt-8 flex-col gap-6 pt-14 pb-16 md:grid md:grid-cols-[600fr_624fr] md:gap-14 md:py-16"
        >
          <h2 className="font-serif text-[42px] leading-[1.25] md:text-[64px]">
            Analytical mind.
            <br />
            People-first approach.
          </h2>
          <div className="flex flex-col gap-6 md:gap-5">
            <p className="text-xl text-muted">
              I enjoy connecting technical work with real business needs. Alongside university,
              I’ve gained experience in bookkeeping and administration, taught dance, and served
              as Treasurer of MQ Thai Society.
            </p>
            <p className="text-xs text-muted">EDUCATION</p>
            <p className="text-base">
              Bachelor of Information Technology
              <br />
              Macquarie University · Expected completion July 2027
            </p>
            <p className="text-xs text-muted">EXPERIENCE</p>
            <ul className="text-base">
              {experience.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="flex scroll-mt-8 flex-col gap-6 rounded-[20px] bg-accent px-6 py-10 md:p-10"
        >
          <h2 className="font-serif text-[42px] leading-[1.25] italic md:text-[68px]">
            Have something in mind?
            <br />
            Let’s make it happen.
          </h2>
          <p className="text-base">
            Interested in data, business analysis, and frontend opportunities.
          </p>
          <a
            href="mailto:hemisa.pinweha@students.mq.edu.au"
            className="w-fit text-sm break-all hover:opacity-70 md:text-xl"
          >
            hemisa.pinweha@students.mq.edu.au
          </a>
          <a
            href="https://github.com/iamoverthemoon"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit text-sm hover:opacity-70"
          >
            GitHub / iamoverthemoon ↗
          </a>
        </section>
      </main>

      <footer className="pt-8">
        <p className="text-xs text-muted">© 2026 Hemisa Pinweha</p>
      </footer>
    </div>
  );
}
