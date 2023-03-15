import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    <div>
      <h1 className="font-bold text-4xl text-center">{post.title}</h1>
      <p>{post.body}</p>

      <Link
        to={`/post/${id}/edit`}
        className="underline border p-4 my-2 bg-cyan-300 mt-8 block w-[200px]"
      >
        Edit Post
      </Link>
    </div>
  );
};
