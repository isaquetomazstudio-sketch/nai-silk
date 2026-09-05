import type { ReactNode } from "react";

export function SectionTitle({
  kicker,
  title,
  description,
}: {
  kicker?: string;
  title: ReactNode;
  description?: ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {kicker && (
        <span className="font-type text-[0.7rem] uppercase tracking-[0.28em] text-primary">
          {kicker}
        </span>
      )}
      <h2 className="ink-press mt-2 break-words font-display text-3xl font-black uppercase leading-tight sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-3 text-muted-foreground">{description}</p>}
    </div>
  );
}
