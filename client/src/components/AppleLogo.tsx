type Props = { size?: number; className?: string };

export function AppleLogo({ size = 24, className }: Props) {
  return (
    <svg
      viewBox="0 0 24 28"
      width={size}
      height={size * (28 / 24)}
      aria-hidden
      className={className}
      fill="currentColor"
    >
      <path d="M19.6 21.5c-1 1.4-2 2.8-3.6 2.8-1.6 0-2-.9-3.8-.9-1.8 0-2.3.9-3.8.9-1.6 0-2.7-1.5-3.7-2.9C3 18.7 1.3 13.3 4 9.7c1.3-1.8 3.5-2.9 5.7-2.9 1.5 0 3 1 3.9 1 .9 0 2.7-1.2 4.5-1 .8 0 3 .3 4.5 2.4-.1.1-2.7 1.6-2.7 4.7 0 3.7 3.3 5 3.3 5-.1.1-.6 1.6-1.6 2.6zM13.6 5.3c.7-.9 1.3-2.1 1.1-3.3-1.1.1-2.4.7-3.2 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3.2-1.5z" />
    </svg>
  );
}
