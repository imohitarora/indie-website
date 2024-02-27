import { client } from "../../../sanity/lib/client";
import { BlogArticle } from "../BlogArticle";
import { Button } from "../Button";
import { SectionWrapper } from "../SectionWrapper";
import { SmallHeader } from "../SmallHeader";

async function getPosts() {
  const query = `*[_type == "post"] | order(_createdAt desc) [${0}..${3}] {
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
  const post = await client.fetch(query, {});
  return (post || []) as any[];
}

export async function BlogContent() {
  const posts = await getPosts();
  return (
    <SectionWrapper grey>
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <SmallHeader>From the blog</SmallHeader>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post, index) => (
              <BlogArticle key={index + "-" + post.id} post={post} />
            ))}
          </div>
          <div className="pt-20">
            <Button small href="/blog">
              View All Blog Posts
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
