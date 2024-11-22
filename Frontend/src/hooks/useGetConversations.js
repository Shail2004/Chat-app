import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await axios.get("https://chat-app-7ln1.onrender.com/api/users/getUsers", { withCredentials: true });

                if (res.data.error) {
                    throw new Error(res.data.error);
                }
                setConversations(res.data);
            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.message || "Failed to fetch conversations");
                } else {
                    toast.error("An unexpected error occurred.");
                }
            } finally {
                setLoading(false);
            }
        }
        getConversations();
    }, []);

    return { loading, conversations };
}

export default useGetConversations