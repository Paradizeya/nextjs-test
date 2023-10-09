import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: Props) => {
  return (
    <>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href={"/about/team"}>Team</Link>
        </li>
        <li>
          <Link href={"/about/contacts"}>Contacts</Link>
        </li>
      </ul>
      <section>{children}</section>
    </>
  );
};

export default AboutLayout;
