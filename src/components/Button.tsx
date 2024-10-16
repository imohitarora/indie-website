import Link from "next/link";

export function Button({
  children,
  href,
  accent,
  onClick,
  className,
  target,
  small,
}: {
  children: React.ReactNode;
  href?: string;
  accent?: boolean;
  className?: string;
  target?: string;
  onClick?: () => void;
  small?: boolean;
}) {
  const classes = accent
    ? `inline-block rounded border border-gray-900 border-2 hover:border-primary font-bold hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary-dark`
    : `inline-block rounded border border-primary bg-primary font-bold text-white hover:bg-transparent hover:text-primary focus:outline-none focus:ring active:text-primary-dark`;
  const sizeClasses = small
    ? "px-4 md:px-6 py-2 text-sm border-[1px]"
    : "px-8 md:px-12 py-2 md:py-3 text-sm border-2";

  if (href) {
    return (
      <Link
        target={target}
        href={href}
        className={classes + " " + sizeClasses + " " + className}
      >
        {children}
      </Link>
    );
  }
  return (
    <button
      type="button"
      className={classes + " " + sizeClasses + " " + className}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
