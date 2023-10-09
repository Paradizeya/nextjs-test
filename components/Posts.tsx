"use client";

import React from "react";
import useSWR from "swr";
import Link from "next/link";
import getPosts from "@/helpers/getPosts";

type Props = {};

const Posts = ({}: Props) => {
  const { data: posts, isLoading } = useSWR("posts", getPosts, {
    fallbackData: [],
  });

  return isLoading ? (
    <h3>Loading posts...</h3>
  ) : (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/blog/${post.id}?userId=${post.userId}`}>
              {post.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Posts;
