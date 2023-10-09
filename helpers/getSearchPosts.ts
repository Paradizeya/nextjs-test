type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const getSearchPost = async (searchParam: string): Promise<Array<Post>> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${searchParam}`
  );
  return response.json();
};

export default getSearchPost;
