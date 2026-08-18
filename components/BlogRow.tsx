import { BlogPost } from "@/types";
import Link from "next/link";

const BlogRow = ({ post }: { post: BlogPost }) => {
  return (
    post.isPublished && (
      <Link
        className="border-border font-inter hover:bg-card-hover grid grid-cols-8 border-b-2 px-2 py-4"
        href={post.slug}
      >
        <div className="col-span-1 flex items-center">
          <h2 className="text-muted text-sm xl:text-base">
            {post.publishDate}
          </h2>
        </div>

        <div className="col-span-7 flex flex-col justify-center pl-4">
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
