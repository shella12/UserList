const Post = (props) => {
  const { post,deletePost } = props;


  return (
    <li className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button type="button" className="btn btn-red post-btn" onClick={() => deletePost.mutate(post.id)}>Delete Post</button>
    </li>
  );
};

export default Post;
