import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authConfig } from "../configs/auth";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Profile",
};

type Props = {};

const Profile = async ({}: Props) => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && (
        <Image
          src={session.user.image}
          width={100}
          height={100}
          alt="pfp"
          priority
        />
      )}
      <h2>{session?.user?.email}</h2>
    </div>
  );
};

export default Profile;
