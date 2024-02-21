import { SectionWrapper } from "../SectionWrapper";

export function Consultants() {
  return (
    <SectionWrapper>
      <h2 className="text-2xl font-bold mb-4">Built with you in mind</h2>
      <p className="text-lg mb-6">
        Your valuable insights motivated us to design the most collaborative
        experience.
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
        <li className="mb-2">Automating your engagements</li>
        <li className="mb-2">Save time and energy while you experience...</li>
        <li className="mb-2">Transparent pricing</li>
        <li className="mb-2">Contracts that meet your skillset</li>
        <li className="mb-2">Direct access to clients</li>
        <li className="mb-2">
          Reduce stress about seeking your next engagement
        </li>
        <li className="mb-2">And much, much more...</li>
      </ul>
    </SectionWrapper>
  );
}
