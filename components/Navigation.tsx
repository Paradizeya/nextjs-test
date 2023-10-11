"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSession, signOut } from "next-auth/react";

type Props = {
  navList: Array<{ name: string; href: string }>;
};

const Navigation = ({ navList }: Props) => {
  const pathname = usePathname();
  const session = useSession();

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
      {session?.data && (
        <Link
          href="/profile"
          className={pathname === "/profile" ? "active" : ""}
        >
          Profile
        </Link>
      )}
      {session?.data ? (
        <Link href="#" onClick={() => signOut({ callbackUrl: "/" })}>
          Sign Out
        </Link>
      ) : (
        <Link href="/api/auth/signin">Sign In</Link>
      )}
    </>
  );
};

export default Navigation;
