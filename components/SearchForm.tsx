"use client";

import styles from "./SearchForm.module.css";

import getSearchPost from "@/helpers/getSearchPosts";
import React, { useState } from "react";
import useSWR from "swr";

type Props = {};

const SearchForm = ({}: Props) => {
  const { mutate } = useSWR("posts");
  const [searchParam, setSearchParam] = useState("");

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const posts = await getSearchPost(searchParam);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="search"
        placeholder="search for..."
        onChange={(event) => {
          setSearchParam(event.target.value);
        }}
        className={styles.searchInput}
      />
      <input type="submit" className={styles.button} value="Search" />
    </form>
  );
};

export default SearchForm;
