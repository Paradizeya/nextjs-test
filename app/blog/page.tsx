import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import getPosts from "@/lib/getPosts";

export const metadata: Metadata = {
  title: "Blog | Create Next App",
};

type Props = {};

const Blog = async (props: Props) => {
  const posts = await getPosts();

  return (
    <>
      <h1>Blog page</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Blog;
