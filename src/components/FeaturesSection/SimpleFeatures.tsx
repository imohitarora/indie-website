import { FeatureItem } from "./FeatureItem";
import { SectionWrapper } from "../SectionWrapper";

export function SimpleFeatures({
  featureItems,
  title,
  description,
}: {
  featureItems: {
    title: string;
    description: string;
  }[];
  title: string;
  description: string;
}) {
  return (
    <SectionWrapper>
      <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full mx-auto">
            <h1 className="text-5xl font-bold py-4">{title}</h1>
            <p className="pb-10">{description}</p>
          </div>
        </div>
        <div>
          {featureItems.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
