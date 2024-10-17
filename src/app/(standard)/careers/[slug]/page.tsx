import { BlogArticle } from "@/components/BlogArticle";
import { SectionWrapper } from "@/components/SectionWrapper";
import { client } from "../../../../../sanity/lib/client";
import { Job } from "@/types/General";
import { PortableText } from "@portabletext/react";
import { SmallHeader } from "@/components/SmallHeader";
import Link from "next/link";
import { SanityImage } from "../../../../components/SanityImage";
import { Button } from "@/components/Button";

export const dynamic = 'force-static'

export default async function page(context: any) {
  const slug = context.params.slug;

  const query = `*[_type == "job" && slug.current == $slug][0] {
      _id,
      role,
      sub_text,
      location,
      apply_link,
      body,
      slug,
      _publishedAt,
    }
  `;

  const job: Job = await client.fetch(query, { slug }, { cache: "no-store" });

  if (!job) {
    return (
      <SectionWrapper>
        {/* backbutton */}
        <Link
          href="/careers"
          className="hover:text-primary underline font-medium hover:no-underline cursor-pointer"
        >
          <span aria-hidden="true">←</span>
          {` Go Back`}
        </Link>
        {/* // 404 */}
        <div className="text-center mt-32 mb-32">
          <h1>404 - Page Not Found</h1>
          <p>The page you are looking for does not exist.</p>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper>
      {/* backbutton */}
      <Link
        href="/careers"
        className="hover:text-primary underline font-medium hover:no-underline cursor-pointer"
      >
        <span aria-hidden="true">←</span>
        {` Go Back`}
      </Link>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SmallHeader>{job.role}</SmallHeader>
            <p className="mt-2 text-base text-primary font-bold ">
              {" "}
              - {job.location}
            </p>
          </div>

          <div className="max-w-5xl mx-auto mt-10">
            <div className="blog-container">
              <PortableText
                value={job.body as any}
                components={{
                  types: {
                    image: SanityImage,
                  },
                }}
              />
            </div>
            {job.apply_link && (
              <div className="pt-16">
                <Button href={job.apply_link}>Apply Now</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
