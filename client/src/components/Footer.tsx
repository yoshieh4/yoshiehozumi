export function Footer() {
  return (
    <footer className="w-full px-6 sm:px-10 lg:px-14 py-8 flex items-center justify-between text-[13px] text-[var(--color-ink-muted)]">
      <span aria-hidden className="opacity-60">𓍊𓋼𓍊</span>
      <span>©{new Date().getFullYear()}</span>
    </footer>
  );
}
