import { Link, useLocation } from "wouter";

export function Header() {
  const [location] = useLocation();
  const isAbout = location === "/about";

  return (
    <header className="w-full px-6 sm:px-10 lg:px-14">
      <div className="flex items-center justify-between py-6 md:py-8">
        <Link
          href="/"
          className="text-[22px] md:text-[28px] lg:text-[31px] leading-tight text-black no-underline flex items-center gap-2"
        >
          <span className="twirl" aria-hidden>🐽</span>
          <span>Yoshie Hozumi</span>
        </Link>
        <nav className="flex items-center gap-6 md:gap-10 text-[15px] md:text-[17px] text-black">
          <Link
            href="/"
            className={!isAbout ? "underline" : "no-underline"}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={isAbout ? "underline" : "no-underline"}
          >
            About
          </Link>
        </nav>
      </div>
      <hr className="border-[var(--color-rule)]" />
    </header>
  );
}
