import { createContext, useReducer } from "react";

export const PostsContext = createContext();

export const postsReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return {
        posts: action.payload,
      };
    case "CREATE":
      return {
        posts: [action.payload, ...state.posts],
      };

    default:
      return state;
  }
};

export const PostsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(postsReducer, {
    posts: null,
  });

  return (
    <PostsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </PostsContext.Provider>
  );
};
