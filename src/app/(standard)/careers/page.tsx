// import { JobListing } from "@/components/JobListing";
import { SectionWrapper } from "@/components/SectionWrapper";
// import { Job } from "@/types/General";
import { client } from "../../../../sanity/lib/client";
import { SmallHeader } from "@/components/SmallHeader";
import { Button } from "@/components/Button";
// import { CareersPageState } from "@/components/CareersPageState";

export type Job = {
  _id: number;
  title: string;
  _updatedAt: string;
  role: string;
  sub_text: string;
  location: string;
  apply_link: string;
  slug: {
    current: string;
  };
  body: unknown[];
};

function JobListing({ job }: { job: Job }) {
  return (
    <a
      href={`/careers/${job.slug.current}`}
      className="flex justify-between border-b-2 border-gray-200 p-1 sm:p-2 lg:p-3 group hover:bg-gray-50 transition-colors duration-200 ease-in-out"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{job.role}</h3>
        <p className="mt-2 text-base text-primary font-bold">
          {" "}
          - {job.location}
        </p>
        <p className="mt-2 text-base text-gray-500">{job.sub_text}</p>
      </div>
      <div className="text-4xl mt-6 ml-auto text-gray-500 group-hover:text-primary">
        →
      </div>
    </a>
  );
}

export default async function page(props: any) {
  const JOB_LIMIT = 40;
  const query = `*[_type == "job"] | order(_createdAt desc) [${0}..${JOB_LIMIT}] {
      _id,
      role,
      sub_text,
      location,
      apply_link,
      body,
      slug,
      _updatedAt,
    }
  `;

  const result: Job[] = await client.fetch(query, {}, { cache: "no-store" });
  return (
    <SectionWrapper>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SmallHeader>Explore Our Latest Job Openings</SmallHeader>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
            {result.map((job, index) => (
              <JobListing key={index + "-" + job._id} job={job} />
            ))}
          </div>
          {result.length === 0 && (
            <div className="text-center mt-16">
              <p className="text-lg text-gray-500">
                We currently do not have any job openings. Please check back
                later.
              </p>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
