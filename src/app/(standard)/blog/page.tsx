import { BlogArticle } from "@/components/BlogArticle";
import { SectionWrapper } from "@/components/SectionWrapper";
import { Post } from "@/types/General";
import { client } from "../../../../sanity/lib/client";
import { SmallHeader } from "@/components/SmallHeader";

export default async function page(props: any) {
  const query = `*[_type == "post"] | order(_createdAt desc) [${0}..${9}] {
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

  const posts: Post[] = await client.fetch(query, {});
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
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogArticle key={index + "-" + post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
