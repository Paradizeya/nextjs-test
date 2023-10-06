import { Metadata } from "next";
import useGetPost from "@/hooks/useGetPost";

type Props = {
  params: { id: number };
};

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const post = await useGetPost(id);
  return {
    title: post.title,
  };
}

const Post = async ({ params: { id } }: Props) => {
  const post = await useGetPost(id);

  return (
    <article>
      <h2>{post.title}</h2>
      <h3>
        Post №{id} by <i>user: {post.userId}</i>
      </h3>
      <p>{post.body}</p>
    </article>
  );
};

export default Post;
