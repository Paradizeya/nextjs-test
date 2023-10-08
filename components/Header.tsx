import React from "react";
import Navigation from "./Navigation";

type Props = {};

const paths = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
];

const Header = (props: Props) => {
  return (
    <header>
      <Navigation navList={paths} />
    </header>
  );
};

export default Header;
