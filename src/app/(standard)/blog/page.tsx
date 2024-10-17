import { BlogArticle } from "@/components/BlogArticle";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Post } from "@/types/General";
import { client } from "../../../../sanity/lib/client";
import { SmallHeader } from "@/components/SmallHeader";
import { BlogPageState } from "@/components/BlogPageState";

export const dynamic = 'force-static'

export default async function page(props: any) {
  const POST_LIMIT = 40;
  const query = `*[_type == "post"] | order(_createdAt desc) [${0}..${POST_LIMIT}] {
      _id,
      title,
      slug,
      _updatedAt,
      mainImage{
        asset->{
          _id,
          url
        }
      }
    }
  `;

  const result: Post[] = await client.fetch(query, {}, { cache: "no-store" });
  return (
    <SectionWrapper>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SmallHeader>Explore Our Latest Blog Posts</SmallHeader>
            {/* <p className="mt-2 text-lg leading-8 text-gray-600">
              Explore Our Latest Blog Posts
            </p> */}
          </div>
          {/* old */}
          {/* <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogArticle key={index + "-" + post.id} post={post} />
            ))}
          </div> */}
          {/* new */}
          <BlogPageState initialState={result} limit={POST_LIMIT} finalId={result[result.length - 1]?._id} />
        </div>
      </div>
    </SectionWrapper>
  );
}
