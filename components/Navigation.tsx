"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
  navList: Array<{ name: string; href: string }>;
};

const Navigation = ({ navList }: Props) => {
  const pathname = usePathname();

  return (
    <>
      {navList.map((link) => {
        return (
          <Link
            key={link.href}
            className={pathname === link.href ? "active" : ""}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
    </>
  );
};

export default Navigation;
