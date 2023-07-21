import Post from "../components/PostList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";

const Posts = () => {
  
const { state } = useLocation();
  
  const fetchPosts = async () => {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${state.id}`)
    return data;
  };

  const posts = useQuery(["Posts"], fetchPosts);
 
  if (posts.isLoading) return <h1>Loading...</h1>;
  if (posts.isError) return <pre>{JSON.stringify(posts.error)}</pre>;
  return (
    <>
      <Post posts={posts.data} />
    </>
  );
};

export default Posts;
