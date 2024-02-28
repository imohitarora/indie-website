"use client";

import { useEffect, useState } from "react";
import { BlogArticle } from "./BlogArticle";
import { Post } from "@/types/General";
import { client } from "../../sanity/lib/client";
import { Button } from "./Button";

export function BlogPageState({
  initialState,
  limit,
  finalId,
}: {
  initialState: Post[];
  limit: number;
  finalId: number;
}) {
  // const [allPostsLoaded, setAllPostsLoaded] = useState(false);
  const [posts, setPosts] = useState<Post[]>(initialState);
  // const [lastId, setLastId] = useState<number | null>(finalId);

  // async function fetchMore() {
  //   const query = `*[_type == "post"] && _id > $lastId | order(_createdAt desc) [${0}...${limit}] {
  //       _id,
  //       title,
  //       slug,
  //       _updatedAt,
  //       mainImage{
  //         asset->{
  //           _id,
  //           url
  //         }
  //       }
  //     }
  //   `;

  //   const result: Post[] = await client.fetch(query, { lastId });
  //   console.log({
  //     lastId,
  //     result,
  //   });
  //   if (result?.length > 0) {
  //     setLastId(result[result?.length - 1]?._id);
  //     setPosts([...result]);
  //   } else {
  //     setLastId(null);
  //   }
  //   return result;
  // }

  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post, index) => (
        <BlogArticle key={index + "-" + post._id} post={post} />
      ))}

      {/* {!allPostsLoaded && (
        <Button onClick={fetchMore} className="col-span-3 justify-self-center">
          load more
        </Button>
      )} */}
    </div>
  );
}
