import { Post } from "@/types/General";
import Link from "next/link";

export function BlogArticle({ post }: { post: Post }) {
  return (
    <Link href={`/post/${post.slug.current}`}>
      <article className="group h-full bg-white hover:border-primary border-2 border-gray-200 hover:border-primary-main rounded-lg">
        <div>
          <img
            className="w-full h-48 object-cover rounded-lg bg-gray-100 group-hover:opacity-75 transition duration-150 ease-in-out sm:h-64 lg:w-full"
            src={post.mainImage?.asset?.url}
            alt={post.title + "main image"}
          />
        </div>
        <div className="flex max-w-xl flex-col items-start justify-between p-6 bg-white ">
          <div className="flex items-center gap-x-4 text-sm">
            <time
              dateTime={post._updatedAt}
              className="text-gray-600 pt-2"
              suppressHydrationWarning
            >
              {new Date(post._updatedAt).toLocaleDateString()}
            </time>
            {/* <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a> */}
          </div>
          <div className="relative">
            <h3 className="mt-3 h-[84px] text-lg font-semibold leading-6 text-gray-900 group-hover:text-primary-main">
              <span className="absolute inset-0" />
              {post.title}
            </h3>
            {/* <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
            {post.body}
          </p> */}
          </div>
          <div className="relative mt-8 flex items-center gap-x-4">
            {/* <img
          src={post.author.imageUrl}
          alt=""
          className="h-10 w-10 rounded-full bg-gray-50"
        />
        <div className="text-sm leading-6">
          <p className="font-semibold text-gray-900">
            <a href={post.author.href}>
              <span className="absolute inset-0" />
              {post.author.name}
            </a>
          </p>
          <p className="text-gray-600">{post.author.role}</p>
        </div> */}
          </div>

          <p className="text-sm mt-auto pt-6 font-semibold leading-6 text-primary-main cursor-pointer">
            Read Article <span aria-hidden="true">&rarr;</span>
          </p>
        </div>
      </article>
    </Link>
  );
}
