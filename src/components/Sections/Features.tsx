import { FaStamp } from "react-icons/fa";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";
import { FaListCheck, FaRankingStar } from "react-icons/fa6";

export function Features() {
  const features = [
    {
      heading: "Comprehensive Consultant Management",
      text: "Manage and engage consultants across all divisions with ease, from consulting companies to independent contractors.",
      icon: FaListCheck,
    },
    {
      heading: "Performance Tracking",
      text: "Gain a deep understanding of consultant performance through our robust tracking and reporting features.",
      icon: FaRankingStar,
    },
    {
      heading: "Engage with Approved Suppliers",
      text: "Post new engagements, interact, and transact seamlessly with your approved suppliers, using corporately-approved Statement of Work templates.",
      icon: FaStamp,
    },
  ];

  return (
    <SectionWrapper grey>
      <div id="features" className="max-w-lg text-left">
        <SmallHeader>Effortless Consultant Management Solutions</SmallHeader>

        {/* <p className="mt-4 pb-10">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur
          aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit
          consequuntur saepe laborum.
        </p> */}
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((item, index) => {
          return (
            <div
              key={"features-" + index}
              className="block rounded-lg border bg-white border-primary-main p-8 "
            >
              <item.icon className="h-9 w-9 text-primary-main" />

              <h2 className="mt-4 pb-4 text-xl font-bold ">{item.heading}</h2>

              <p className="mt-1 text-sm ">{item.text}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
