import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { TypeWriter } from "../TypeWriter";

export function CenterBlock({
  title,
  description,
  subTitle,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
  subTitle?: string | React.ReactNode;
}) {
  return (
    <SectionWrapper grey>
      <div className="pt-12 pb-24 mx-auto max-w-2xl">
        <div className="max-w-2xl lg:mx-0 ">
          <SmallHeader>{title}</SmallHeader>
          {typeof subTitle === "string" ? (
            <p className={`text-3xl leading-10 text-gray-600`}>{subTitle}</p>
          ) : (
            subTitle
          )}
        </div>
        <div className="flex flex-col justify-end pb-6 ">
          <TypeWriter text={description} />
        </div>
        {children}
      </div>
    </SectionWrapper>
  );
}
