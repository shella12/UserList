import { useState } from "react";

const PostForm = (props) => {
  const { userId, addPost } = props;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const submitForm = () => {
    setTitle("");
    setBody("");
    addPost.mutate({ title, body, userId });
  };

  return (

      <div className="fieldset">
        <h1>Add a new post</h1>
        <form>
          <input
            className="fields"
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="fields"
            name="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
          <button type="button" onClick={() => submitForm()} className="btn">
            Add New Post
          </button>
        </form>
      </div>
  );
};

export default PostForm;
