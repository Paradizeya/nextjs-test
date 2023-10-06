type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const useGetPost = async (id: number): Promise<Post> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  return response.json();
};

export default useGetPost;
