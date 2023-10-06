type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const useGetPosts = async (): Promise<Array<Post>> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) throw Error("Unable to fetch Posts!");

  return response.json();
};

export default useGetPosts;
