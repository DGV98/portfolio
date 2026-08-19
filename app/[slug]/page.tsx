import Banner from "@/components/Banner";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  try {
    const post = await import(`@/posts/${slug}.mdx`);
    const { default: Content, metadata } = post;
    return (
      metadata.isPublished && (
        <article className="mt-8 mb-16 flex flex-col items-center justify-center text-left">
          <Banner />
          <div className="max-w-4xl px-8">
            <Content />
          </div>
        </article>
      )
    );
  } catch {
    notFound();
  }
};

export default page;
