"use client";

import { SectionHeading } from "./SectionHeading";
import { useEffect, useState } from "react";
import { loadPosts } from "@/app/[slug]/actions";

export function BlogSection() {
  const [posts, setPosts] = useState([""]);
  useEffect(() => {
    const getAllData = async () => {
      const data = await loadPosts();
      setPosts(data);
    };
    getAllData();
  }, []);
  return (
    <section>
      <SectionHeading>Blog</SectionHeading>
      <div className="text-muted border-border grid grid-cols-4 gap-1 border-b-2 pb-2 text-sm font-semibold tracking-wider">
        <p className="col-span-3">TITLE</p>
        <p className="col-span-1 px-2">PUBLISHED</p>
        <div className="col-span-1"></div>
      </div>
      {/* {posts.map((pub, i) => (
        <BlogRow key={i} pub={pub} />
      ))} */}
    </section>
  );
}
