import { notFound } from "next/navigation";
import React from "react";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  try {
    const post = await import(`@/posts/${slug}.mdx`);
    const { default: Content, metadata } = post;
    return (
      <article className="prose dark:prose-invert w-full max-w-3xl mx-auto">
        <div className="space-y-4">
          <h1>{metadata.title}</h1>
          <div>{metadata.publishDate}</div>
        </div>
        <Content />
      </article>
    );
  } catch {
    console.log(slug);
    notFound();
  }
};

export default page;
