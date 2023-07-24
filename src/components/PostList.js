import { useMutation, useQueryClient } from "@tanstack/react-query";
import Post from "./Post";
import { useState } from "react";
import axios from "axios";
import PostForm from "./PostForm";


const PostList = (props) => {
  const { posts } = props;
  const [newPosts, setNewPosts] = useState(posts);
  const queryClient =useQueryClient();
 
  const deletePost = useMutation( async(id) => {
   return await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then(() =>(setNewPosts(newPosts.filter(post => post.id !== id))));
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([["Posts"]]);
    }
  });
  
  const addPost = useMutation( async(post) => {
    console.log(post);
   return await axios.post('https://jsonplaceholder.typicode.com/posts', {
    title: post.title,
    body: post.body,
    userId: post.userId,
  })
  .then(() => setNewPosts([...newPosts, {
    userId: post.userId,
    id: newPosts.length + 1,
    title: post.title,
    body: post.body
  }]));
  
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries([["Posts"]]);
    }
  });

  return (
    <>
    <ul className="post-list">
      {newPosts &&
        newPosts.map((post) => (
          <Post
            key={`${post.userId}${post.id}`}
            className="post-card"
            post={post}
            deletePost={deletePost}
          />
        ))}
    </ul>
    <PostForm userId={posts[0].userId} addPost={addPost} />
    </>
  );
};

export default PostList;
