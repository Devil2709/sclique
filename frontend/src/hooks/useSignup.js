import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [link, setLink] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, firstName, lastName, username) => {
    setIsLoading(true);
    setError(null);
    setLink(null);
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        username,
        avatarColor: randomColor,
      }),
    });
    const json = await response.json();
    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }
    if (response.ok) {
      localStorage.setItem("user", JSON.stringify(json));
      setIsLoading(false);
      dispatch({ type: "LOGIN", payload: json });
      setLink("/home");
      console.log("OK");
    }
  };

  return { signup, isLoading, error, link };
};
