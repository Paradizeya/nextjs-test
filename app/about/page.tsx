import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About | Create Next App",
};

type Props = {};

const page = (props: Props) => {
  return <div>About page</div>;
};

export default page;
