// PostContext.js
import React, { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [post, setPost] = useState(null);

  const updatePost = (newPost) => {
    setPost(newPost);
  };

  return (
    <PostContext.Provider value={{ post, updatePost }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  return useContext(PostContext);
};



export default PostContext;