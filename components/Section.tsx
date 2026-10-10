import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  index: string;
  title: string;
  note?: string;
  children: ReactNode;
};

// Wide two-column band: sticky label on the left, content on the right.
export function Section({ id, index, title, note, children }: SectionProps) {
  return (
    <section
      id={id}
      className="grid gap-8 border-t border-line py-14 lg:grid-cols-12 lg:gap-10 lg:py-24"
    >
      <div className="lg:col-span-3">
        <div className="lg:sticky lg:top-24">
          <p className="font-mono text-xs text-faint">{index}</p>
          <h2 className="mt-2 text-2xl font-medium tracking-tight text-white">
            {title}
          </h2>
          {note && (
            <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-muted">
              {note}
            </p>
          )}
        </div>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </section>
  );
}

type RowProps = { period: string; title: string; org: string };

export function TimelineRow({ period, title, org }: RowProps) {
  return (
    <li className="grid gap-1 border-b border-line py-6 first:pt-0 sm:grid-cols-[1fr_1fr_auto] sm:items-baseline sm:gap-8">
      <p className="text-lg font-medium text-white">{title}</p>
      <p className="text-[15px] text-muted">{org}</p>
      <p className="font-mono text-xs text-faint">{period}</p>
    </li>
  );
}
