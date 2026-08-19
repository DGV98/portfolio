import { BlogSection } from "@/components/BlogSection";
import Banner from "@/components/Banner";
import { getPosts } from "@/lib/get-posts";

const page = async () => {
  const posts = await getPosts();
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
