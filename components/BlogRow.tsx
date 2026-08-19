import { BlogPost } from "@/types";
import Link from "next/link";

const BlogRow = ({ post }: { post: BlogPost }) => {
  return (
    post.isPublished && (
      <Link
        className="border-border font-inter hover:bg-card-hover grid grid-cols-11 border-b-2 py-4"
        href={`/blog/${post.slug}`}
      >
        <div className="hidden lg:col-span-2 lg:flex lg:items-center">
          <h2 className="text-muted text-sm xl:text-base">
            {post.publishDate}
          </h2>
        </div>

        <div className="col-span-11 flex flex-col justify-center gap-1 lg:col-span-9">
          <h2 className="text-lg font-bold xl:text-2xl">{post.title}</h2>
          {post.description && (
            <p className="text-muted text-xs xl:text-sm">{post.description}</p>
          )}
        </div>
      </Link>
    )
  );
};

export default BlogRow;
