import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

const ourTeam = {
  coreTeam: [
    {
      name: "Sophia G. Contreras Stone",
      title: "Founder, CEO",
      description: "Award-winning entrepreneur dedicated to transforming the consultant marketplace.",
      link: "https://www.linkedin.com/in/sophiagcstone/",
    },
    {
      name: "Mohit Arora",
      title: "CTO",
      description: "Experienced Software Architect passionate about innovative solutions and leadership.",
      link: "https://www.linkedin.com/in/mohitaroralive/",
    },
    {
      name: "Asif Lakhany",
      title: "Head Quant",
      description: "Quantitative expert with a passion for risk management and technology.",
      link: "https://www.linkedin.com/in/asif-lakhany-8668b64/",
    },
  ],
  advisoryTeam: [
    {
      name: "Juan Pujadas",
      title: "Enterprise Risk and Professional Services Advisory",
      description: "Experienced board member and advisor in finance and technology.",
      link: "https://www.linkedin.com/in/juan-pujadas-13364487/",
    },
    {
      name: "Neil Bartlett",
      title: "Risk Data and Technology Advisory",
      description: "Veteran in the finance industry with a focus on data analytics and risk management.",
      link: "https://www.linkedin.com/in/neiledwardbartlett/",
    },
    {
      name: "Leslie J. Anderson-Rutland, CTP, MBA",
      title: "Strategy and GTM Support Advisory",
      description: "Experienced Board Leader; Accomplished Finance, Treasury, Tech and Experience Leader.",
      link: "https://www.linkedin.com/in/lesliejanderson/",
    },
    {
      name: "Eva Cruz, PhD, MBA, FRM",
      title: "Quantitative Risk Advisory",
      description: "Expert in quantitative techniques and risk management practices in banking.",
      link: "https://www.linkedin.com/in/evabcruz/",
    },
  ],
};

function TeamMember({ name, title, description, link }: { name: string; title: string; description: string; link: string }) {
  return (
    <a className="flex flex-col border-l-2 pl-4 border-gray-200 hover:border-primary-main md:flex-row items-center justify-center md:justify-between mb-8" target="_blank" rel="noreferrer" href={link}>
      {/* <div className="md:w-1/3">
         <img
           src="sophia.jpg"
           alt="Sophia G. Contreras Stone"
           className="rounded-full h-40 w-40 mx-auto mb-4 md:mb-0"
         />
       </div> */}
      <div className="">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-primary-main font-bold">{title}</p>
        <p className="text-gray-700">{description}</p>
      </div>
    </a>
  );
}

export function OurTeam() {
  return (
    <SectionWrapper>
      <div className="p-8 grid lg:grid-cols-2 gap-10">
        <div className="">
          <SmallHeader>Meet The Team</SmallHeader>
          <p className="">
            <strong>Our Mission:</strong> Empower enterprises to manage consultants effortlessly, provide consulting firms with avenues for growth and collaboration, and elevate the careers of
            independent consultants through unparalleled opportunities.
          </p>
          <hr className="bg-grey-400 mb-4 mt-10" />
        </div>
        <div>
          <h2 className="text-2xl text-gray-400 pt-6 mb-4">Core Team</h2>
          {
            // Core Team
            ourTeam.coreTeam.map((teamMember, index) => (
              <TeamMember key={"coreTeam-" + index} name={teamMember.name} title={teamMember.title} description={teamMember.description} link={teamMember.link} />
            ))
          }
          <h2 className="text-2xl text-gray-400 pt-6 mb-4">Advisory Team</h2>
          {
            // Advisory Team
            ourTeam.advisoryTeam.map((teamMember, index) => (
              <TeamMember key={"advisoryTeam-" + index} name={teamMember.name} title={teamMember.title} description={teamMember.description} link={teamMember.link} />
            ))
          }
        </div>
      </div>
    </SectionWrapper>
  );
}
