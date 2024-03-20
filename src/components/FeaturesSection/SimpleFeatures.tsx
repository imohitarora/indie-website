import { FeatureItem } from "./FeatureItem";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

export function SimpleFeatures({
  content,
  title,
  description,
}: {
  content: {
    title: string;
    description: string;
    icon: (props: { className: string }) => JSX.Element | any;
  }[];
  title: string;
  description: string;
}) {
  return (
    <div className="container mx-auto max-w-[1100px] pb-12">
      <div className="pb-14 border-t-2 border-gray-200 pt-6 ">
        <div className="max-w-2xl lg:mx-0 ">
          <SmallHeader>{title}</SmallHeader>
          <p className={`text-3xl leading-10 text-gray-600`}>{description}</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {content.map(({ title, description, icon }, index) => (
          <div
            key={"featureitem-" + index}
            className="pt-6 border-t-2 border-gray-200"
          >
            <div className="pb-4 flex content-between justify-between">
              <h4 className="font-bold text-lg">{title}</h4>
              {icon && icon({ className: "text-3xl text-primary-main" })}
            </div>
            <p className="max-w-[500px]">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
