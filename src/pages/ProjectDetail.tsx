import { useState } from "react";
import { previewLabels, slideKinds, type Project, type ProjectImage } from "../data/projects";
import SlideVisual from "../components/SlideVisual";

const pad = (n: number) => String(n).padStart(2, "0");

function GalleryImage({ image }: { image: ProjectImage }) {
  return <figure className="flex flex-col gap-3">
    <img src={image.src} alt={image.alt} className="max-h-[520px] w-full rounded-xl bg-white object-contain" />
    <figcaption className="text-sm text-muted">{image.caption}</figcaption>
  </figure>;
}

function Slideshow({ images }: { images?: ProjectImage[] }) {
  const [active, setActive] = useState(0);
  const hasImages = Boolean(images?.length);
  const count = hasImages ? images!.length : slideKinds.length;
  const go = (step: number) => setActive((i) => (i + step + count) % count);
  return (
    <div className="flex flex-col gap-5 rounded-[20px] bg-surface px-4 py-5" role="region" aria-label="Project gallery">
      <div aria-live="polite">
        {hasImages ? <GalleryImage image={images![active]} /> : <SlideVisual kind={slideKinds[active]} />}
      </div>
      <div className="flex justify-between gap-2 rounded-[30px] bg-paper px-4 py-3 text-sm">
        <button type="button" onClick={() => go(-1)} className="cursor-pointer hover:opacity-60">← Previous</button>
        <p>{pad(active + 1)} / {pad(count)}</p>
        <button type="button" onClick={() => go(1)} className="cursor-pointer hover:opacity-60">Next →</button>
      </div>
      <p className="text-sm">Choose a slide</p>
      <div className="grid grid-cols-3 gap-3">
        {Array.from({ length: count }, (_, i) => (
          <button key={i} type="button" onClick={() => setActive(i)} aria-pressed={i === active}
            aria-label={`Show slide ${i + 1}: ${hasImages ? images![i].alt : previewLabels[slideKinds[i]]}`}
            className={`min-w-0 cursor-pointer overflow-hidden rounded-lg border-2 p-1 text-left ${i === active ? "border-ink" : "border-transparent hover:border-ink/40"}`}>
            {hasImages ? <img src={images![i].src} alt="" className="aspect-[4/3] w-full rounded bg-white object-contain" /> : <div className="text-[4px]"><SlideVisual kind={slideKinds[i]} /></div>}
            <span className="text-xs">{pad(i + 1)} {hasImages ? "Result" : previewLabels[slideKinds[i]]}</span>
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

      {project.cover ? <GalleryImage image={project.cover} /> : <SlideVisual kind={project.preview} />}

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
      <Slideshow key={project.slug} images={project.gallery} />

      <h2 className="text-[28px] font-medium md:text-4xl">Outcome &amp; reflection</h2>
      <p className="text-[17px]">{detail.outcome}</p>

      <section className="flex flex-col gap-4 bg-accent p-6">
        <h2 className="text-2xl font-medium">Explore the project files</h2>
        <div className="flex flex-wrap gap-x-[1.25em] text-sm md:text-lg">
          {detail.resources.map(({ label, href, download }) =>
            href ? (
              <a
                key={label}
                href={href}
                download={download || undefined}
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

      </section>

      <a href="#work" className="w-fit text-base hover:opacity-60">
        ← Back to all projects
      </a>
    </div>
  );
}