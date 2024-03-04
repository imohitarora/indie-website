import { colors } from "@/theme";

export function SectionWrapper({
  children,
  className,
  grey,
  primary,
  noPadding,
}: {
  children: React.ReactNode;
  className?: string;
  grey?: boolean;
  primary?: boolean;
  noPadding?: boolean;
}) {
  return (
    <section
      className={`
      ${
        grey
          ? "bg-gray-100"
          : primary
          ? "bg-primary-main text-white"
          : "bg-white"
      } 
      relative ${className}
  `}
    >
      <div
        className={`${
          noPadding ? "py-8" : "py-24"
        } container mx-auto px-2 sm:px-6 lg:px-8`}
      >
        {children}
      </div>
    </section>
  );
}
