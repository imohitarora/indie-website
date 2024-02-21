import React from "react";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

const contents = [
  {
    title: "Discuss",
    content:
      "We believe in open communication and collaboration. We start by discussing your goals, challenges, and requirements to gain a deep understanding of your business.",
  },
  {
    title: "Plan",
    content:
      "Our team will work closely with you to create a comprehensive plan that outlines the strategies and steps needed to achieve your objectives.",
  },
  {
    title: "Execute",
    content:
      "With the plan in place, we execute the strategies and implement the necessary solutions to drive your business forward.",
  },
  {
    title: "Knowledge Transfer",
    content:
      "We believe in empowering our clients with knowledge. We provide workshops, facilitation, and documentation to ensure a smooth transition of the project to your team.",
  },
];

export function OurProcess() {
  return (
    <SectionWrapper grey>
      <SmallHeader>Our Process</SmallHeader>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {contents.map((content, index) => {
          return (
            <div
              key={index}
              className="p-8 bg-white text-left border-[1px] border-gray-300 rounded"
            >
              <h3 className="text-2xl font-semibold mb-4">{content.title}</h3>
              <p className="text-gray-700">{content.content}</p>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
