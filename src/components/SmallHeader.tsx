export function SmallHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className || ""}>
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
        {children}
      </h2>
    </div>
  );
}
