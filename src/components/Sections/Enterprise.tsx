import { SectionWrapper } from "../SectionWrapper";

export function Enterprise() {
  return (
    <SectionWrapper>
      <h2 className="text-2xl font-bold mb-4">
        empowering you to find the expertise you need.
      </h2>
      <p className="text-lg mb-6">
        Indie Tech gives you the flexibility to scale your team with transparent
        margins that make sense.
      </p>
      {/* <div className="flex justify-center mb-6">
        <img
          src="undraw_organize_resume_utk5.svg"
          alt="Organize Resume"
          className="w-64 h-auto"
        />
      </div> */}
      <h3 className="text-2xl font-bold mb-4">
        transparent, innovative, insight-driven.
      </h3>
      <ul className="list-disc list-inside mb-6">
        <li className="mb-2">Receive proposals from relevant consultants</li>
        <li className="mb-2">
          Let us manage the details so you can put your energy into...
        </li>
        <li className="mb-2">Searching for ideal consultants</li>
        <li className="mb-2">Easily posting your engagements</li>
        <li className="mb-2">
          Better managing your budget through transparent pricing
        </li>
        <li className="mb-2">Allowing us to oversee the SOW for you...</li>
        <li className="mb-2">And much, much more...</li>
      </ul>
    </SectionWrapper>
  );
}
