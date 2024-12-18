import { useEffect, useState } from 'react'
import axios from 'axios'
import useConversation from "../zustand/useConversation";
import toast from 'react-hot-toast';

const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConversation } = useConversation();
    useEffect(() => {
        const getMessages = async () => {
            try {
                setLoading(true);
                const res = await axios.get(`https://chat-app-7ln1.onrender.com/api/messages/${selectedConversation._id}`, { withCredentials: true })
                const data = res.data;
                if (res.data.error) {
                    throw new Error(res.data.error);
                }
                setMessages(data);
            } catch (error) {
                toast.error(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        if (selectedConversation?._id) getMessages();
    }, [selectedConversation?._id, setMessages])
    return { messages, loading };
}

export default useGetMessages;
