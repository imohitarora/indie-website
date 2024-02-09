import { colors } from "@/theme";
import { Footer } from "../Sections/Footer";
import { HeroPattern } from "../svgs/HeroPattern";
import { FeatureItem } from "./FeatureItem";

export function Features() {
  const Foo = [
    {
      title: "A CURATED MARKETPLACE",
      description: `Consultants easily establish their profile, rate, and availability. Hiring managers will quickly find the most suitable consultants for their engagements.`,
    },
    {
      title: "WE'VE SIMPLIFIED THE SELECTION PROCESS",
      description: `Consultants are directly involved with contract negotiations. Clients post their engagements to attract qualified candidates.`,
    },
    {
      title: "TRANSPARENT RATES",
      description: `Rates and margins will always be visible. Negotiations will be managed in a fair and professional manner. Welcome to the Future of Consulting.`,
    },
  ];

  return (
    <section className="relative">
      <div className="flex flex-col items-center px-5 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-3xl mx-auto prose text-left prose-blue">
          <div className="w-full mx-auto">
            <h1 className="text-5xl font-bold py-4">
              Welcome to the Future of Consulting.
            </h1>
            <p className="pb-10">
              Right. Say that again. No, no, George, look, it{`'`}s just an act,
              right? Okay, so 9:00 you{`'`}re strolling through the parking lot,
              you see us struggling.
            </p>
          </div>
        </div>
        <div>
          {Foo.map((item, index) => (
            <FeatureItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
