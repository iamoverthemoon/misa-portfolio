import type { Project } from "../data/projects";
import ProjectPreview from "./ProjectPreview";

type Props = {
  project: Project;
  featured: boolean;
  onSelect: () => void;
};

// Figma component "Project / Editorial". The featured card is the large accent
// card in the carousel and links to the case study; the others bring
// themselves to the front when clicked.
export default function ProjectCard({ project, featured, onSelect }: Props) {
  const content = (
    <>
      <ProjectPreview kind={project.preview} />
      <p className="text-xs text-muted">
        {project.number} / {project.category}
      </p>
      <p
        className={
          featured
            ? "text-[32px] font-medium text-ink md:text-[42px]"
            : "text-[26px] font-medium text-ink"
        }
      >
        {project.title}
        {featured && <span className="hidden md:inline"> ↗</span>}
      </p>
      <p className="text-base text-ink">{project.description}</p>
      <p className="text-xs text-muted">{project.tools}</p>
      <p className="text-sm text-ink">
        {project.event[0]}
        <br />
        {project.event[1]}
      </p>
    </>
  );

  // Side cards only appear from xl, where every title fits; break-words is a safety net
  // so a long word can never spill out of the card.
  const base =
    "flex min-w-0 flex-col items-start gap-[14px] rounded-2xl p-6 text-left leading-[1.25] break-words transition-[background-color,flex-grow] duration-500";

  if (featured) {
    return (
      <a
        href={`#/projects/${project.slug}`}
        className={`${base} w-full bg-accent hover:brightness-110 xl:flex-[600]`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`${base} hidden cursor-pointer bg-surface hover:brightness-110 xl:flex xl:flex-[314]`}
    >
      {content}
    </button>
  );
}
