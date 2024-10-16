export function SmallHeader({
  children,
  white,
  className,
  noUnderline,
}: {
  children: React.ReactNode;
  white?: boolean;
  className?: string;
  noUnderline?: boolean;
}) {
  return (
    <div className={className || ""}>
      <h2
        className={`text-2xl md:text-3xl font-extrabold ${
          white ? `text-white` : `text-gray-900`
        } sm:text-4xl`}
      >
        {children}
      </h2>
      {!noUnderline && (
        <div className="h-1 max-w-[30%] w-full mt-5 bg-primary mb-6"></div>
      )}
    </div>
  );
}
