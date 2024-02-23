import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

const features = [
  {
    heading: "Deploy Your Private Ecosystem",
    text: "Create a secure and exclusive environment by inviting your professional services suppliers to join and add their consultants.",
  },
  {
    heading: "Find Consultants or Post Engagements",
    text: "Explore consultants within your network or post engagements to receive proposals from qualified professionals.",
  },
  {
    heading: "Seamlessly Engage and Transact",
    text: "Interact and transact directly with your approved suppliers for a seamless collaboration experience.",
  },
  {
    heading: "Create Contracts from Procurement Approved Templates",
    text: "Utilize our corporate-approved templates to effortlessly generate contracts that meet procurement standards.",
  },
  {
    heading: "Track Performance Insights",
    text: "Utilize our tracking and reporting features to gain actionable insights into consultant performance.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper>
      <div className="container mx-auto">
        <SmallHeader className="max-w-lg pb-8">
          How Indie Tech Works for Your Enterprise
        </SmallHeader>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-3 ">
            {features.map((feature, index) => {
              return (
                <div
                  key={"hiw-features-" + index}
                  className="block border-l-2 border-primary-main pl-4 "
                >
                  <p className="pb-1 font-bold ">
                    {feature.heading}. &nbsp;
                    <span className="font-normal ">{feature.text}</span>
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <img
              className=" w-100 md:h-full mx-auto md:mx-[unset] md:ml-auto "
              src="/undraw_financial_data.svg"
              alt="undraw_financial_data"
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
