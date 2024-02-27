import { BlogArticle } from "@/components/BlogArticle";
import { SectionWrapper } from "@/components/SectionWrapper";
import { client } from "../../../../../sanity/lib/client";
import { Post } from "@/types/General";
import { PortableText } from "@portabletext/react";
import { SmallHeader } from "@/components/SmallHeader";
import Link from "next/link";

export default async function page(props: any) {
  const query = `*[_type == "post"] | order(_createdAt desc) [0] {
      _id,
      title,
      slug,
      body,
      _updatedAt,
      mainImage{
        asset->{
          _id,
          url
        }
      }
    }
  `;

  const post: Post = await client.fetch(query, {});
  return (
    <SectionWrapper>
      {/* backbutton */}
      <Link
        href="/blog"
        className="hover:text-primary-main underline font-medium hover:no-underline cursor-pointer"
      >
        <span aria-hidden="true">←</span>
        {` Go Back`}
      </Link>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <time
              dateTime={post._updatedAt}
              className="text-primary-main font-bold pb-4"
            >
              {new Date(post._updatedAt).toLocaleDateString()}
            </time>
            <SmallHeader>{post.title}</SmallHeader>
          </div>

          <div className="max-w-5xl mx-auto mt-10">
            <div>
              <img
                className="w-full mb-10 h-full rounded-lg "
                src={post.mainImage?.asset?.url}
                alt={post.title + "main image"}
              />
            </div>
            <PortableText value={post.body as any} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
