"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

type Props = {};

const DiscordButton = ({}: Props) => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/profile";

  return (
    <button onClick={() => signIn("discord", { callbackUrl })}>
      Sign in with Discord
    </button>
  );
};

export default DiscordButton;
