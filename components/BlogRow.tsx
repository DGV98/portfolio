import { BlogPost } from "@/types";

const BlogRow = ({ post }: { post: BlogPost }) => {
  return (
    post.isPublished ?? (
      <div className="border-border font-inter flex border-b-2 p-4">
        <h2 className="text-bold text-left">{post.title}</h2>
        <h2 className="text-right">{post.publishDate}</h2>
      </div>
    )
  );
};

export default BlogRow;
