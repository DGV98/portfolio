"use server";

import { getPosts } from "@/lib/get-posts";

export async function loadPosts() {
  return getPosts();
}
