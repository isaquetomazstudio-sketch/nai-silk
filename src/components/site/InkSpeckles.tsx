export function InkSpeckles({ group = "hero" }: { group?: "hero" | "pillars" | "cta" }) {
  const common =
    "pointer-events-none absolute -z-10 text-primary/[0.14] dark:text-primary/[0.12]";

  if (group === "hero") {
    return (
      <>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${common} left-[2%] top-[18%] size-6 sm:left-[5%] sm:top-[22%] sm:size-9`}
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg
          viewBox="0 0 24 36"
          aria-hidden="true"
          className={`${common} left-[7%] top-[42%] size-4 text-ink/[0.14] dark:text-ink/[0.12] sm:left-[9%] sm:top-[48%] sm:size-5`}
          fill="currentColor"
        >
          <ellipse cx="12" cy="18" rx="9" ry="15" />
        </svg>
        <svg
          viewBox="0 0 32 32"
          aria-hidden="true"
          className={`${common} right-[10%] top-[6%] size-8 text-ink/[0.14] dark:text-ink/[0.12] sm:right-[16%] sm:size-11`}
          fill="currentColor"
        >
          <circle cx="10" cy="10" r="6" />
          <circle cx="24" cy="22" r="4" />
        </svg>
        <svg
          viewBox="0 0 40 12"
          aria-hidden="true"
          className={`${common} left-[12%] top-[78%] hidden size-12 sm:block sm:left-[18%]`}
          fill="currentColor"
        >
          <path d="M2 6c6-3 12 3 18 0s10-4 18 2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className={`${common} right-[4%] top-[55%] size-3 sm:right-[7%] sm:top-[60%] sm:size-4`}
          fill="currentColor"
        >
          <circle cx="8" cy="8" r="7" />
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
          className={`${common} left-[1%] top-[10%] size-5 sm:left-[3%] sm:size-6`}
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="9" />
        </svg>
        <svg
          viewBox="0 0 20 28"
          aria-hidden="true"
          className={`${common} right-[2%] top-[18%] size-4 text-ink/[0.14] dark:text-ink/[0.12] sm:right-[5%] sm:size-5`}
          fill="currentColor"
        >
          <ellipse cx="10" cy="14" rx="7" ry="11" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${common} left-[5%] top-[66%] size-3 sm:left-[7%] sm:top-[70%] sm:size-4`}
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="10" />
        </svg>
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`${common} right-[8%] top-[80%] size-6 hidden sm:block`}
          fill="currentColor"
        >
          <circle cx="12" cy="12" r="8" />
          <circle cx="20" cy="5" r="3" />
        </svg>
        <svg
          viewBox="0 0 28 12"
          aria-hidden="true"
          className={`${common} left-[42%] top-[90%] hidden size-10 sm:block`}
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
        className={`${common} left-[3%] top-[28%] size-6 sm:left-[5%] sm:size-8`}
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
      <svg
        viewBox="0 0 20 30"
        aria-hidden="true"
        className={`${common} left-[10%] top-[58%] size-4 text-ink/[0.14] dark:text-ink/[0.12] sm:left-[14%] sm:size-5`}
        fill="currentColor"
      >
        <ellipse cx="10" cy="15" rx="7" ry="12" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={`${common} right-[4%] top-[16%] size-5 sm:right-[8%] sm:top-[22%] sm:size-7`}
        fill="currentColor"
      >
        <circle cx="12" cy="12" r="9" />
        <circle cx="20" cy="5" r="3" />
      </svg>
      <svg
        viewBox="0 0 36 12"
        aria-hidden="true"
        className={`${common} right-[12%] top-[68%] hidden size-12 sm:block`}
        fill="currentColor"
      >
        <path d="M3 6c7-3 14 3 21 0s9-4 12 2" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    </>
  );
}
