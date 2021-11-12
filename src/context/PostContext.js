import { createContext } from 'react';

export const INITIAL_STATE = {
  postList: [],
};

const PostContext = createContext(INITIAL_STATE);

export default PostContext;
