"use client";

import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogLink = () => {
  const router = useRouter();

  const goToBlog = () => {
    router.push("/blog");
  };
  return (
    <div className="group">
      <button
        onClick={goToBlog}
        className="border-accent text-accent group-hover:border-foreground group-hover:text-foreground flex cursor-pointer items-center gap-2 rounded-lg border-2 px-2 py-1 text-sm"
      >
        Blog
        <ExternalLink className="h-4 w-4" />
      </button>
    </div>
  );
};

export default BlogLink;
