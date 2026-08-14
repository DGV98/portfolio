"use client";

import { SectionHeading } from "./SectionHeading";
import BlogRow from "./BlogRow";
import { BlogPosts } from "@/types";

export function BlogSection({ posts }: BlogPosts) {
  return (
    <section>
      <SectionHeading>Blog</SectionHeading>
      <div className="text-muted border-border grid grid-cols-4 gap-1 border-b-2 pb-2 text-sm font-semibold tracking-wider">
        <p className="col-span-3">TITLE</p>
        <p className="col-span-1 px-2">PUBLISHED</p>
        <div className="col-span-1"></div>
      </div>
      {posts.map((post, i) => (
        <BlogRow post={post} key={i} />
      ))}
    </section>
  );
}
