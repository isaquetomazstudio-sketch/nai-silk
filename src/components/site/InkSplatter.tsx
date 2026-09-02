export function InkSplatter({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path d="M96 12c18 4 22 24 34 34 13 11 34 9 42 24 8 15-6 32-4 49 2 16 16 32 8 45-9 14-31 8-47 14-15 6-27 22-43 20-16-2-24-20-37-30-13-9-32-11-38-26-6-14 8-30 9-46 1-15-11-31-3-44 8-14 29-11 44-19 15-8 26-25 35-21z" />
      <circle cx="176" cy="44" r="7" />
      <circle cx="26" cy="150" r="5" />
      <circle cx="160" cy="176" r="4" />
      <circle cx="44" cy="26" r="3" />
    </svg>
  );
}
