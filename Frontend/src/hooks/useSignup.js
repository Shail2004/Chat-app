import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext()

  const signup = async ({
    fullName,
    username,
    password,
    confirmPassword,
    gender,
  }) => {
    const success = handleInputErrors({
      fullName,
      username,
      password,
      confirmPassword,
      gender,
    });
    if (!success) return;
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:4000/api/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      });

      const data = res.data;
      toast.success("Signup successful!");

      //local storage
      localStorage.setItem("chat-user", JSON.stringify(data));
      setAuthUser(data);

    } catch (error) {
      if (error.response) {
        // The request was made, and the server responded with a status code outside the range of 2xx
        toast.error(error.response.data.message || "Signup failed");
      } else if (error.request) {
        // The request was made, but no response was received
        toast.error("No response from the server. Please try again later.");
      } else {
        // Something else happened in making the request that triggered an error
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

export default useSignup;

function handleInputErrors({
  fullName,
  username,
  password,
  confirmPassword,
  gender,
}) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }

  if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  return true;
}
