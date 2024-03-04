"use client";

import { BlogArticle } from "@/components/BlogArticle";
import { fadeIn } from "@/lib/animation";
import { Post } from "@/types/General";
import { motion } from "framer-motion";

export function BlogLatest({ posts }: { posts: Post[] }) {
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {posts.map((post, index) => (
        <motion.div
          key={index + "-" + post._id}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={fadeIn({ delay: index * 0.3 })}
        >
          <BlogArticle post={post} />
        </motion.div>
      ))}
    </div>
  );
}
