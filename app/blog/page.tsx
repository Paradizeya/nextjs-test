import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import useGetPosts from "@/hooks/useGetPosts";

export const metadata: Metadata = {
  title: "Blog | Create Next App",
};

type Props = {};

const Page = async (props: Props) => {
  const posts = await useGetPosts();

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

export default Page;
