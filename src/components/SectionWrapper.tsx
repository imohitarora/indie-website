export function SectionWrapper({
  children,
  grey,
  noPadding,
}: {
  children: React.ReactNode;
  grey?: boolean;
  noPadding?: boolean;
}) {
  return (
    <section
      className={`
      ${grey ? "bg-gray-100" : "bg-white"} 
      relative
  `}
    >
      <div
        className={`${
          noPadding ? "py-8" : "py-24"
        } container mx-auto px-6 lg:px-8`}
      >
        {children}
      </div>
    </section>
  );
}
