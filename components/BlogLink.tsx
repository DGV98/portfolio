"use client";

import { ExternalLink } from "lucide-react";
import { useRouter } from "next/navigation";

const BlogLink = () => {
  const router = useRouter();

  const goToBlog = () => {
    router.push("/blog");
  };
  return (
    <div className="border-border group border-l-2 px-2">
      <button
        onClick={goToBlog}
        className="border-accent group-hover:border-foreground flex cursor-pointer items-center gap-2 rounded-lg border-2 px-2 py-1"
      >
        <h1 className="text-accent group-hover:text-foreground text-sm">
          Blog
        </h1>
        <ExternalLink className="text-accent group-hover:text-foreground h-4 w-4" />
      </button>
    </div>
  );
};

export default BlogLink;
