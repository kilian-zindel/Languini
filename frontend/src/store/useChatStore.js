import { create } from 'zustand'
import { axiosInstance } from '../lib/axios'
import { toast } from 'react-hot-toast'
import axios from 'axios';

export const useChatStore = create((set) => ({
    messages: [],
    users: [],
    selectedUser: null,
    isUsersLoading: false,
    isMessagesLoading: false, 
    isMessageSending: false,

    getUsers: async () => {
        console.log("ChatStore: getUsers")
        set({ isUsersLoading: true });
        try {
            const res = await axiosInstance.get('messages/users')
            console.log("ChatStore: setUsers")
            set({ users: res.data })
        } catch (error) {
            console.error("Error in useChatStore > getUsers", error)
            toast.error(error.response.data.message)
        } finally {
            set({ isUsersLoading: false })
        }
    },

    getMessages: async (userId) => {
        console.log("ChatStore: getMessages")
        console.log("ChatStore: setIsMessaeLoading")

        set({ isMessagesLoading: true })
        try {
            const res = await axiosInstance.get(`/messages/${userId}`);
            console.log("ChatStore: setMessages")
            set({ messages: res.data });
        } catch (error) {
            toast.error("Error in useChatStore getMessages:", error.response.data.message);
        } finally {
            console.log("ChatStore: setIsMessaeLoading")
            set({ isMessagesLoading: false })
        } 
    },

    sendMessage: async (msg=null, img=null) => {
        // get current state
        const { selectedUser, messages } = get();
        if (!selectedUser) return; // safety check

        set({ isMessageSending: true })
        try {
            const res = await axiosInstance.post(
                // post message to DB 
                `messages/send/${selectedUser._id}`, 
                {
                    text: msg,
                    image: img, 
                }
            );
            set({ 
                messages: [res.data, ...messages] 
            });
        } catch (error) {
            console.error("Error in useChatStore sendMessage:", error)
        } finally {
            set({ isMessageSending: false })
        }
    },

    setSelectedUser: (user) => set({ selectedUser: user }),
}))


