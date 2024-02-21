import { colors } from "@/theme";

export function SectionWrapper({
  children,
  grey,
  primary,
  noPadding,
}: {
  children: React.ReactNode;
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
