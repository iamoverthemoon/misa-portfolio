import { useState } from "react";
import { previewLabels, slideKinds, type Project } from "../data/projects";
import SlideVisual from "../components/SlideVisual";

const pad = (n: number) => String(n).padStart(2, "0");

function Slideshow() {
  const [active, setActive] = useState(0);
  const count = slideKinds.length;
  const go = (step: number) => setActive((i) => (i + step + count) % count);

  return (
    <div className="flex flex-col gap-5 rounded-[20px] bg-surface px-4 py-5">
      <div className="text-base" aria-live="polite">
        <SlideVisual kind={slideKinds[active]} />
      </div>

      <div className="flex justify-between rounded-[30px] bg-paper px-4 py-3 text-sm leading-normal whitespace-nowrap">
        <button type="button" onClick={() => go(-1)} className="cursor-pointer hover:opacity-60">
          ← Previous
        </button>
        <p>
          {pad(active + 1)} / {pad(count)}
        </p>
        <button type="button" onClick={() => go(1)} className="cursor-pointer hover:opacity-60">
          Next →
        </button>
      </div>

      <p className="text-sm leading-normal">Choose a slide</p>

      <div className="flex items-start gap-3">
        {slideKinds.map((kind, i) => (
          <button
            key={kind}
            type="button"
            onClick={() => setActive(i)}
            aria-pressed={i === active}
            className={`flex min-w-0 flex-1 cursor-pointer flex-col items-start gap-2 overflow-hidden rounded-[10px] border-2 text-left ${
              i === active ? "border-ink" : "border-transparent hover:border-ink/40"
            }`}
          >
            {/* 1em ≈ 0.28–0.33 × the full slide, matching the Figma thumbnails */}
            <div className="w-full text-[4.46px] md:text-[5.1px]" aria-hidden="true">
              <SlideVisual kind={kind} />
            </div>
            <span className="text-sm leading-normal whitespace-nowrap">
              {pad(i + 1)} {previewLabels[kind]}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const { detail } = project;

  return (
    <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-6 pt-8 pb-10 leading-[1.35] md:px-20">
      <a href="#work" className="w-fit text-sm hover:opacity-60">
        ← Back to selected work
      </a>

      <p className="text-xs">{detail.eyebrow}</p>

      <h1 className="font-serif text-[46px] leading-[1.35] italic md:text-[86px]">
        {project.title}
      </h1>

      <p className="text-lg">
        {detail.subtitle[0]}
        <br />
        {detail.subtitle[1]}
      </p>

      <dl className="text-sm">
        {detail.facts.map(({ label, value }) => (
          <div key={label} className="whitespace-pre-wrap">
            <dt className="inline">{label}</dt>
            {"   "}
            <dd className="inline">{value}</dd>
          </div>
        ))}
      </dl>

      <SlideVisual kind={project.preview} />

      <section className="flex flex-col gap-4">
        <h2 className="text-[28px] font-medium md:text-4xl">The project</h2>
        <p className="text-[17px]">{detail.overview}</p>
        <h3 className="text-2xl font-medium">My contribution</h3>
        <p className="text-[17px]">{detail.contribution}</p>
      </section>

      <h2 className="text-[28px] font-medium md:text-4xl">Process &amp; key findings</h2>
      <div className="flex flex-col gap-[1.35em] text-[17px]">
        {detail.process.map((step) => (
          <p key={step.title}>
            {step.title}
            <br />
            {step.body}
          </p>
        ))}
      </div>

      <h2 className="text-[28px] font-medium md:text-4xl">Project gallery</h2>
      <p className="text-base">Show the work, then explain what the viewer should notice.</p>
      <Slideshow />

      <h2 className="text-[28px] font-medium md:text-4xl">Outcome &amp; reflection</h2>
      <p className="text-[17px]">{detail.outcome}</p>

      <section className="flex flex-col gap-4 bg-accent p-6">
        <h2 className="text-2xl font-medium">Explore the project files</h2>
        <div className="flex flex-wrap gap-x-[1.25em] text-sm md:text-lg">
          {detail.resources.map(({ label, href }) =>
            href ? (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-70"
              >
                {label}
              </a>
            ) : (
              <span key={label}>{label}</span>
            ),
          )}
        </div>
        <p className="text-xs">
          Sample resource labels — connect only the links relevant to this project.
        </p>
      </section>

      <a href="#work" className="w-fit text-base hover:opacity-60">
        ← Back to all projects
      </a>
    </div>
  );
}
