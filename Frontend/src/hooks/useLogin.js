import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext"

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async (username, password) => {
        const success = handleInputErrors({ username, password });
        if (!success) return;
        setLoading(true);
        try {
            const res = await axios.post("https://chat-app-7ln1.onrender.com/api/auth/login", {
                username,
                password,
            }, { withCredentials: true, });

            const data = res.data;
            if (data.error) {
                throw new Error(data.error);
            }

            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            if (error.response) {
                // The request was made, and the server responded with a status code outside the range of 2xx
                toast.error(error.response.data.message || "Login failed");
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
    }
    return { loading, login };
}
export default useLogin;

function handleInputErrors({ username, password }) {
    if (!username || !password) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}