import Link from "next/link";

export function Button({
  children,
  href,
  accent,
  className,
  small,
}: {
  children: React.ReactNode;
  href: string;
  accent?: boolean;
  className?: string;
  small?: boolean;
}) {
  const classes = accent
    ? `inline-block rounded border border-gray-900 border-2 hover:border-primary-main  font-medium hover:bg-transparent hover:text-primary-main focus:outline-none focus:ring active:text-primary-dark`
    : `inline-block rounded border border-primary-main bg-primary-main font-medium text-white hover:bg-transparent hover:text-primary-main focus:outline-none focus:ring active:text-primary-dark`;
  const sizeClasses = small
    ? "px-6 py-2 text-sm border-[1px]"
    : "px-12 py-3 text-sm font-medium border-2";

  if (href) {
    return (
      <Link
        href={href}
        className={classes + " " + sizeClasses + " " + className}
      >
        {children}
      </Link>
    );
  }
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
}
