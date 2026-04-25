import { Link } from "wouter";

export function Header() {
  return (
    <header className="w-full px-6 md:px-10 py-6 flex items-center justify-between">
      <Link
        href="/"
        className="text-base md:text-lg font-medium tracking-tight"
      >
        Yoshie Hozumi
      </Link>
      <nav className="flex gap-6 text-sm md:text-base">
        <Link href="/">Work</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
}
