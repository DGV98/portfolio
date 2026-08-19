import { BlogPost } from "@/types";
import { readdir } from "fs/promises";
import path from "path";

export async function getPosts() {
  const dir = path.join(process.cwd(), "posts");
  const files = await readdir(dir);
  const postMetadata: BlogPost[] = [];
  for (const file of files) {
    try {
      const post = await import(`@/posts/${file}`);
      const { metadata } = post;
      postMetadata.push(metadata);
    } catch {
      continue;
    }
  }
  return postMetadata;
  // return files
  //   .filter((file) => file.endsWith(".mdx"))
  //   .map((file) => file.replace(/\.mdx$/, ""));
}
