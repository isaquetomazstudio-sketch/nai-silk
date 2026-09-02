export function InkSpeckles({ group = "hero" }: { group?: "hero" | "pillars" | "cta" }) {
  const common =
    "pointer-events-none absolute -z-10 text-primary/10 dark:text-primary/[0.08]";

  if (group === "hero") {
    return (
      <>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${common} left-[3%] top-[18%] size-5 sm:left-[6%] sm:top-[22%] sm:size-7`}
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg
          viewBox="0 0 24 36"
          aria-hidden="true"
          className={`${common} left-[8%] top-[42%] size-3 sm:left-[10%] sm:top-[48%] sm:size-4`}
          fill="currentColor"
        >
          <ellipse cx="12" cy="18" rx="9" ry="15" />
        </svg>
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className={`${common} right-[12%] top-[8%] size-6 text-ink/10 dark:text-ink/10 sm:right-[18%] sm:size-8`}
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="6" />
          <circle cx="24" cy="22" r="4" />
        </svg>
        <svg
          viewBox="0 0 40 12"
          aria-hidden="true"
          className={`${common} left-[14%] top-[76%] hidden size-10 sm:block sm:left-[20%]`}
          fill="currentColor"
        >
          <path d="M2 6c6-3 12 3 18 0s10-4 18 2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      </>
    );
  }

  if (group === "pillars") {
    return (
      <>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${common} left-[2%] top-[12%] size-4 sm:left-[4%] sm:size-5`}
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
        <svg
          viewBox="0 0 20 28"
          aria-hidden="true"
          className={`${common} right-[4%] top-[20%] size-3 text-ink/10 dark:text-ink/10 sm:right-[6%] sm:size-4`}
          fill="currentColor"
        >
          <ellipse cx="10" cy="14" rx="7" ry="11" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${common} left-[6%] top-[68%] size-2 sm:left-[8%] sm:top-[72%] sm:size-3`}
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${common} right-[10%] top-[82%] size-5 hidden sm:block`}
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="8" />
          <circle cx="20" cy="5" r="3" />
        </svg>
        <svg
          viewBox="0 0 28 12"
          aria-hidden="true"
          className={`${common} left-[45%] top-[92%] hidden size-8 sm:block`}
          fill="currentColor"
        >
          <path d="M3 6c5-2 10 2 16 0s7-3 9 1" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </svg>
      </>
    );
  }

  // cta
  return (
    <>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`${common} left-[4%] top-[30%] size-5 sm:left-[6%] sm:size-7`}
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg
        viewBox="0 0 20 30"
        aria-hidden="true"
        className={`${common} left-[12%] top-[60%] size-3 text-ink/10 dark:text-ink/10 sm:left-[16%] sm:size-4`}
        fill="currentColor"
      >
        <ellipse cx="10" cy="15" rx="7" ry="12" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`${common} right-[6%] top-[18%] size-4 sm:right-[10%] sm:top-[24%] sm:size-6`}
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="20" cy="5" r="3" />
      </svg>
      <svg
        viewBox="0 0 36 12"
        aria-hidden="true"
        className={`${common} right-[15%] top-[70%] hidden size-10 sm:block`}
        fill="currentColor"
      >
        <path d="M3 6c7-3 14 3 21 0s9-4 12 2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </>
  );
}
