export function SmallHeader({
  children,
  white,
  className,
}: {
  children: React.ReactNode;
  white?: boolean;
  className?: string;
}) {
  return (
    <div className={className || ""}>
      <h2
        className={`text-3xl font-extrabold ${
          white ? `text-white` : `text-gray-900`
        } sm:text-4xl`}
      >
        {children}
      </h2>
    </div>
  );
}
