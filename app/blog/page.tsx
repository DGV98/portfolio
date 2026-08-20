import Banner from "@/components/Banner";
import { getPosts } from "@/lib/get-posts";
import BlogRow from "@/components/BlogRow";

const page = async () => {
  const posts = await getPosts();
  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-3xl flex-col items-start gap-4 px-6 py-8 lg:gap-8">
        <Banner />
        <div className="flex w-full flex-col gap-4">
          {posts && posts.map((post, i) => <BlogRow post={post} key={i} />)}
        </div>
      </div>
    </div>
  );
};

export default page;
