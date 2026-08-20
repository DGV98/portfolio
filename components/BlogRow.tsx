import { BlogPost } from "@/types";
import Link from "next/link";

const BlogRow = ({ post }: { post: BlogPost }) => {
  return (
    post.isPublished && (
      <Link
        className="border-border hover:bg-card-hover flex flex-col gap-2 border-b-2 py-4"
        href={`/blog/${post.slug}`}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-bold lg:text-2xl">{post.title}</h2>
          <h2 className="text-sm lg:text-base">{post.publishDate}</h2>
        </div>
        {post.description && (
          <p className="text-muted text-sm lg:text-base">{post.description}</p>
        )}
      </Link>
    )
  );
};

export default BlogRow;
