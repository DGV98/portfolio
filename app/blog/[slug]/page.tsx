import ArticleNav from "@/components/ArticleNav";
import Banner from "@/components/Banner";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  try {
    const post = await import(`@/posts/${slug}.mdx`);
    const { default: Content, metadata } = post;
    return (
      metadata.isPublished && (
        <div className="mt-8 flex flex-col items-center gap-4 lg:gap-8">
          <Banner />
          <article className="mb-4 flex w-full max-w-5xl flex-col lg:flex-row lg:justify-around lg:gap-4">
            <div className="w-full max-w-3xl px-8 text-left">
              <Content />
            </div>
            <div className="flex w-auto px-8 py-4 lg:sticky lg:top-0 lg:h-screen lg:justify-center">
              <ArticleNav slug={slug} />
            </div>
          </article>
        </div>
      )
    );
  } catch {
    notFound();
  }
};

export default page;
