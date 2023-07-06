import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

export const useSignin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [link, setLink] = useState(null);
  const { dispatch } = useAuthContext();

  const signin = async (email, password) => {
    setIsLoading(true);
    setError(null);
    setLink(null);
    const response = await fetch("http://localhost:4000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
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
      setLink("/learn");
    }
  };
  return { signin, isLoading, error, link };
};
