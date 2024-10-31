import { useState } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogout = () => {
	const [loading, setLoading] = useState(false);
	const { setAuthUser } = useAuthContext();

	const logout = async () => {
		setLoading(true);
		try {
			const res = await axios.post("http://localhost:4000/api/auth/logout", {}, {
				headers: { "Content-Type": "application/json" },
			});

			const data = res.data;
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.removeItem("chat-user");
			setAuthUser(null);
		} catch (error) {
			if (error.response) {
				toast.error(error.response.data.message || "Logout failed");
			} else if (error.request) {
				toast.error("No response from the server. Please try again later.");
			} else {
				toast.error(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	return { loading, logout };
};

export default useLogout;
