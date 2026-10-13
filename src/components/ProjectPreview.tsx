import type { PreviewKind } from "../data/projects";
import graphAxes from "../assets/previews/graph-axes.svg";
import graphLine from "../assets/previews/graph-line.svg";
import websiteFrame from "../assets/previews/website-frame.svg";
import websiteDivider from "../assets/previews/website-divider.svg";
import websiteHeading from "../assets/previews/website-heading.svg";
import websiteText from "../assets/previews/website-text.svg";
import websiteButton from "../assets/previews/website-button.svg";
import websiteImage from "../assets/previews/website-image.svg";
import excelFrame from "../assets/previews/excel-frame.svg";
import excelHeader from "../assets/previews/excel-header.svg";
import excelGrid from "../assets/previews/excel-grid.svg";

// Each layer is positioned with the same percentage insets as the Figma frame,
// so the illustration scales with the card width.
type Layer = { src: string; inset: string; bleed?: string };

const layers: Record<PreviewKind, Layer[]> = {
  graph: [
    { src: graphAxes, inset: "17.86% 6.98% 17.86% 5.81%", bleed: "0 0 -0.56% -0.11%" },
    { src: graphLine, inset: "12.86% 8.43% 28.57% 7.27%", bleed: "-2.42% 0 -2.27% -0.16%" },
  ],
  website: [
    { src: websiteFrame, inset: "10.71% 4.65% 10.71% 5.23%", bleed: "-0.45% -0.22%" },
    { src: websiteDivider, inset: "24.29% 4.65% 75.71% 5.23%", bleed: "-0.5px 0" },
    { src: websiteHeading, inset: "34.29% 55.81% 60% 9.3%" },
    { src: websiteText, inset: "47.86% 61.63% 48.57% 9.3%" },
    { src: websiteButton, inset: "62.14% 73.26% 23.57% 9.3%" },
    { src: websiteImage, inset: "34.29% 9.88% 21.43% 52.33%" },
  ],
  excel: [
    { src: excelFrame, inset: "10.71% 4.65% 10.71% 5.23%", bleed: "-0.45% -0.22%" },
    { src: excelHeader, inset: "10.71% 4.65% 72.14% 5.23%" },
    { src: excelGrid, inset: "10.71% 4.65% 10.71% 5.23%" },
  ],
};

export default function ProjectPreview({ kind }: { kind: PreviewKind }) {
  return (
    <div className="flex w-full flex-col gap-2 overflow-hidden rounded-[10px] bg-paper px-2 py-3">
      <div className="relative h-[140px] w-full overflow-hidden" aria-hidden="true">
        {layers[kind].map(({ src, inset, bleed }) => (
          <div key={src} className="absolute" style={{ inset }}>
            <img
              alt=""
              src={src}
              className="absolute block size-full max-w-none"
              style={{ inset: bleed ?? 0 }}
            />
          </div>
        ))}
      </div>
      <p className="text-[10px] text-ink">SAMPLE PREVIEW · REPLACE WITH YOUR WORK</p>
    </div>
  );
}
