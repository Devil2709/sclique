import { useState } from "react";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [link, setLink] = useState(null);

  const signup = async (email, password, firstName, lastName, username) => {
    setIsLoading(true);
    setError(null);
    setLink(null);
    const response = await fetch("http://localhost:4000/api/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        firstName,
        lastName,
        username,
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
      setLink("/learn");
      console.log("OK");
    }
  };
  return { signup, isLoading, error, link };
};
