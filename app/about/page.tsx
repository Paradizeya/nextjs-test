import { Metadata } from "next";
import React from "react";
import Counter from "@/components/Counter";

export const metadata: Metadata = {
  title: "About | Create Next App",
};

type Props = {};

const Team = (props: Props) => {
  return (
    <>
      <h1>About page</h1>
      <Counter />
    </>
  );
};

export default Team;
