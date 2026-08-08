import Banner from "@/components/banner";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await import(`@/posts/${slug}.mdx`);
  const { default: Content, metadata } = post;
  try {
    return metadata.published ? (
      <article className="flex flex-col justify-center items-center mt-4">
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
