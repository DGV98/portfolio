import { getPosts } from "@/lib/get-posts";
import Link from "next/link";
import { SocialLinks } from "./SocialLinks";
import { profile } from "@/data/profile";

const ArticleNav = async ({ slug }: { slug: string }) => {
  const posts = await getPosts();
  return (
    <div>
      <ul>
        {posts.map(
          (post, i) =>
            post.slug !== slug && (
              <li key={i} className="py-2">
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
