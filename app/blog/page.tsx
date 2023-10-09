import styles from "./page.module.css";

import { Metadata } from "next";
import React from "react";
import SearchForm from "@/components/SearchForm";
import Posts from "@/components/Posts";

export const metadata: Metadata = {
  title: "Blog | Create Next App",
};

type Props = {};

const Blog = async (props: Props) => {
  return (
    <section className={styles.wrapper}>
      <h1>Blog page</h1>
      <SearchForm />
      <Posts />
    </section>
  );
};

export default Blog;
