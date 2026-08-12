import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const BlogLink = () => {
  return (
    <div className="border-border flex items-center justify-center gap-2 border-l-2 px-3">
      <MoveUpRight className="text-accent h-5 w-5" />
      <Link
        href="/blog"
        className="text-muted hover:text-foreground text-sm font-bold"
      >
        Blog
      </Link>
    </div>
  );
};

export default BlogLink;
