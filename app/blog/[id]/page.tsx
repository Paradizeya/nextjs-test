import { Metadata } from "next";
import getPost from "@/helpers/getPost";
import getUser from "@/helpers/getUser";

type Props = {
  params: { id: number };
  searchParams: { userId: number };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await getPost(id);
  return {
    title: post.title,
  };
}

const Post = async ({ params: { id }, searchParams: { userId } }: Props) => {
  const postPromise = getPost(id);
  const userPromise = getUser(userId);

  const [post, user] = await Promise.all([postPromise, userPromise]);

  return (
    <article>
      <h2>{post.title}</h2>
      <h3>
        Post №{id} by <i>user: {user.username}</i>
      </h3>
      <p>{post.body}</p>
    </article>
  );
};

export default Post;
