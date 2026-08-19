"use client";

import { BlogPost } from "@/types";
import { useState, useEffect } from "react";
import { loadPosts } from "./actions";
import { BlogSection } from "@/components/BlogSection";
import Banner from "@/components/Banner";

const page = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    const getAllData = async () => {
      const data = await loadPosts();
      setPosts(data);
    };
    getAllData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center px-6 py-8">
      <Banner />
      <div className="w-full max-w-4xl">
        {posts && <BlogSection posts={posts} />}
      </div>
    </div>
  );
};

export default page;
