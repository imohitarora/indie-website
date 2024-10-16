import Link from "next/link";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { colors } from "@/theme";

export function ClientContent() {
  const boxClass =
    "flex flex-col z-20 justify-between bg-white min-h-[400px] border-[2px] border-primary p-8 rounded-lg hover:shadow-lg transform hover:-translate-y-[8px] transition-all duration-300 ease-in-out";

  return (
    // <SectionWrapper primary>
    <SectionWrapper grey>
      <div className="absolute z-10 top-5 left-10 lg:top-10 lg:left-24 ">
        <svg
          className="w-96 h-96  "
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fill={colors.primary.main}
            stroke={colors.primary.main}
            strokeWidth="2"
            fill="none"
            d="M48.9,-58.7C63.7,-45.8,76.3,-30.8,76.7,-15.5C77.1,-0.1,65.4,15.4,53.6,26.4C41.8,37.5,30.1,44,18.1,47.3C6.1,50.6,-6.2,50.8,-23.4,50.5C-40.6,50.3,-62.7,49.6,-74.5,38.5C-86.4,27.4,-88,5.8,-82.6,-12.8C-77.1,-31.3,-64.7,-46.8,-49.8,-59.7C-34.9,-72.6,-17.4,-82.8,-0.2,-82.6C17,-82.4,34.1,-71.6,48.9,-58.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute z-10 bottom-0 right-5 lg:bottom-10 lg:right-24 ">
        <svg
          className="w-96 h-96 g"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            // fill={colors.primary.main}
            stroke={colors.primary.main}
            strokeWidth="2"
            fill="none"
            d="M47.8,-60.5C60.3,-46.5,67.6,-29.9,71.2,-12.1C74.8,5.6,74.8,24.4,67.6,41.1C60.4,57.8,46,72.4,30.3,74C14.7,75.7,-2.3,64.4,-18.5,56.2C-34.7,48,-50.2,42.9,-60.7,31.6C-71.3,20.4,-77.1,2.9,-72.3,-10.7C-67.5,-24.3,-52.1,-34,-38.3,-47.8C-24.5,-61.6,-12.2,-79.3,2.7,-82.6C17.7,-85.8,35.3,-74.5,47.8,-60.5Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative grid grid-cols-1 z-30 lg:grid-cols-2 gap-10">
        <Link href="/consultant">
          <div className={boxClass}>
            <small className="font-bold text-primary ">Consultants</small>
            <SmallHeader>Win better contracts</SmallHeader>
            <Paragraph>
              Explore cutting-edge consulting technology that effortlessly links
              incorporated consultants with their ideal engagements. Our
              platform epitomizes innovation and efficiency, streamlining the
              process for consultants to seamlessly connect with opportunities
              that perfectly align with their skills and ambitions.
            </Paragraph>
            {/* <Button href="/consultant">Learn more</Button> */}
            <p className="pt-5 font-bold hover:text-common-black">
              Learn more
              <span className="text-primary pl-4" aria-hidden="true">
                &rarr;
              </span>
            </p>
          </div>
        </Link>
        <Link href="/enterprise">
          <div className={boxClass}>
            <small className="font-bold text-primary ">Enterprise</small>
            <SmallHeader>Built for Enterprise. Loved by suppliers</SmallHeader>
            <Paragraph>
              For years, vendor management systems and procurement suites have
              fallen short. With no viable solution in sight, we took matters
              into our own hands to build the solution you&apos;ve been waiting
              for.
            </Paragraph>
            {/* <Button href="/enterprise">Learn more</Button> */}
            <p className="pt-5 font-bold hover:text-common-black">
              Learn more
              <span className="text-primary pl-4" aria-hidden="true">
                &rarr;
              </span>
            </p>
          </div>
        </Link>
      </div>
    </SectionWrapper>
  );
}
