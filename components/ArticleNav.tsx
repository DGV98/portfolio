import { getPosts } from "@/lib/get-posts";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { profile } from "@/data/profile";

const ArticleNav = async ({ slug }: { slug: string }) => {
  const posts = await getPosts();
  return (
    <div className="flex flex-col">
      <h2 className="text-2xl font-semibold">Recent</h2>
      <ul className="border-border mb-2 border-b-2">
        {posts.map(
          (post, i) =>
            post.slug !== slug && (
              <li key={i} className="py-2 hover:underline">
                <Link href={post.slug}>{post.title}</Link>
              </li>
            ),
        )}
      </ul>
      <SocialLinks links={profile.socialLinks} />
    </div>
  );
};

export default ArticleNav;
