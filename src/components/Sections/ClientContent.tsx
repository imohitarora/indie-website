import Link from "next/link";
import { Button } from "../Button";
import { Paragraph } from "../Paragraph";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

export function ClientContent() {
  return (
    <SectionWrapper primary>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <SmallHeader white className="h-24">
              Win better contracts
            </SmallHeader>
            <Paragraph>
              Explore cutting-edge consulting technology that effortlessly links
              incorporated consultants with their ideal engagements. Our
              platform epitomizes innovation and efficiency, streamlining the
              process for consultants to seamlessly connect with opportunities
              that perfectly align with their skills and ambitions.
            </Paragraph>
            {/* <Button href="/consultant">Learn more</Button> */}
            <Link href="/consultant">
              <p className="pt-5 font-bold hover:text-common-black">
                Learn more
              </p>
            </Link>
          </div>
          <div>
            <SmallHeader white className="h-24">
              Built for Enterprise. Loved by suppliers
            </SmallHeader>
            <Paragraph>
              For years, vendor management systems and procurement suites have
              fallen short. With no viable solution in sight, we took matters
              into our own hands to build the solution you&apos;ve been waiting
              for.
            </Paragraph>
            {/* <Button href="/enterprise">Learn more</Button> */}
            <Link href="/enterprise">
              <p className="pt-5 font-bold hover:text-common-black">
                Learn more
              </p>
            </Link>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
