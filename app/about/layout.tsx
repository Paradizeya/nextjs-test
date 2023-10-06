import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

const AboutLayout = ({ children }: Props) => {
  return (
    <div>
      <h1>About us</h1>
      <ul>
        <li>
          <Link href={"/about/team"}>Team</Link>
        </li>
        <li>
          <Link href={"/about/contacts"}>Contacts</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default AboutLayout;
