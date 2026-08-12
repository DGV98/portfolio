import Banner from "@/components/Banner";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  try {
    const post = await import(`@/posts/${slug}.mdx`);
    const { default: Content, metadata } = post;
    return metadata.published ? (
      <article className="mt-4 flex flex-col items-center justify-center">
        <Banner />
        <div className="space-y-4">
          <h1>{metadata.title}</h1>
          <div>{metadata.publishDate}</div>
        </div>
        <Content />
      </article>
    ) : (
      <h1>Not Published</h1>
    );
  } catch {
    notFound();
  }
};

export default page;
