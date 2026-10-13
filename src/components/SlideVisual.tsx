import { previewLabels, type PreviewKind } from "../data/projects";

// Figma "Image area / …" placeholders. Every size is in em (1em = 16px at full
// size) so thumbnails can reuse the same markup by lowering the font size.
const bars = [45, 80, 62, 110, 95, 130];

const excelRows = [
  "Date       Description       Amount",
  "01          Sample row        —",
  "02          Sample row        —",
  "03          Sample row        —",
];

export default function SlideVisual({ kind }: { kind: PreviewKind }) {
  return (
    <div className="flex w-full flex-col gap-[1em] overflow-hidden rounded-[0.875em] bg-surface p-[1.5em] leading-[1.35] text-ink">
      <p className="text-[0.75em]">{previewLabels[kind]} · SAMPLE IMAGE</p>

      {kind === "graph" && (
        <div className="flex items-end gap-[1em]" aria-hidden="true">
          {bars.map((h, i) => (
            <div
              key={i}
              className={`flex-1 ${i === bars.length - 1 ? "bg-accent" : "bg-ink"}`}
              style={{ height: `${h / 16}em` }}
            />
          ))}
        </div>
      )}

      {kind === "website" && (
        <div className="flex flex-col gap-[0.5em]">
          <p className="text-[1.5em] font-medium">BalanceEdge</p>
          <p className="text-[1em]">Your website screenshot goes here</p>
          <div className="bg-paper px-[1em] py-[1.5em]">
            <p className="text-[1.25em]">A clear view of the interface</p>
          </div>
        </div>
      )}

      {kind === "excel" && (
        <div className="flex flex-col gap-[0.5em] text-[0.75em] whitespace-pre-wrap">
          {excelRows.map((row) => (
            <p key={row}>{row}</p>
          ))}
        </div>
      )}

      <p className="text-[0.6875em]">
        Illustrative layout only — replace with an actual export or screenshot.
      </p>
    </div>
  );
}
