import { Metadata } from "next";
import { getServerSession } from "next-auth/next";
import { authConfig } from "../configs/auth";

export const metadata: Metadata = {
  title: "Profile",
};

type Props = {};

const Profile = async ({}: Props) => {
  const session = await getServerSession(authConfig);

  return (
    <div>
      <h1>Profile of {session?.user?.name}</h1>
      {session?.user?.image && <img src={session.user.image} alt="pfp" />}
      <h2>{session?.user?.email}</h2>
    </div>
  );
};

export default Profile;
