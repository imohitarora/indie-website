import { Post } from "@/types/General";
import { client } from "../../../../sanity/lib/client";
import { Button } from "../../Button";
import { SectionWrapper } from "../../SectionWrapper";
import { SmallHeader } from "../../SmallHeader";
import { BlogLatest } from "./BlogLatest";

async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) [${0}..${2}] {
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
  const post = await client.fetch(query, {}, { cache: "no-store" });
  return ((post || []) as Post[]) ?? [];
}

export async function BlogContent() {
  const posts = await getPosts();
  return (
    <SectionWrapper grey>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SmallHeader>From the blog</SmallHeader>
            <p className="mt-2 text-lg leading-8 text-gray-600">Learn how to grow your business with our expert advice.</p>
          </div>
          {posts.length > 0 ? (
            <>
              <BlogLatest posts={posts} />
              <div className="pt-20">
                <Button small href="/blog">
                  View All Blog Posts
                </Button>
              </div>
            </>
          ) : (
            <div className="flex justify-center">
              <div>
                <p className="text-center mt-32 md:mt-40 text-xl font-bold opacity-50 px-16">No blog posts yet, check back soon!</p>
                <hr className="mt-3 border-[2px] border-gray-200" />
              </div>
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
