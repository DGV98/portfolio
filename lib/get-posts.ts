import { readdir } from "fs/promises";
import path from "path";

export async function getPosts() {
  const dir = path.join(process.cwd(), "posts");
  const files = await readdir(dir);

  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}
