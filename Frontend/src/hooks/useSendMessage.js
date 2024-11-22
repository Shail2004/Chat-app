import axios from "axios";
import { useState } from "react"
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
    const [loading, setLoading] = useState(false)
    const { messages, setMessages, selectedConversation } = useConversation();

    const sendMessage = async (message) => {
        setLoading(true);
        try {
            const res = await axios.post(`https://chat-app-7ln1.onrender.com/api/messages/send/${selectedConversation._id}`, { message }, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,  // Adding withCredentials
            });
            const data = res.data;
            if (data.error) throw new Error(data.error);

            setMessages([...messages, data]);
        } catch (error) {
            toast.error(error.message)
        }
        finally {
            setLoading(false);
        }
    }
    return { sendMessage, loading }
}

export default useSendMessage