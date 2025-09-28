import React from 'react'
import { Users, Check, MessageSquare, X, Image, Send } from 'lucide-react'
import Contact from '../components/Contact.jsx'
import { useState, useEffect } from 'react'
import { axiosInstance } from '../lib/axios.js'
import { getMessages } from '../../../backend/src/controllers/message.controller.js'

const Message = ({user, message, sent}) => {

  const hours = sent.getHours().toString().padStart(2, '0');
  const minutes = sent.getMinutes().toString().padStart(2, '0');

  return <div className={`chat ${user ? "chat-end" : "chat-start"}`}>
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img
          alt="Tailwind CSS chat bubble component"
          src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
        />
      </div>
    </div>
    <div className="chat-header">
      <time className="text-xs font-light text-white/50 mb-1">
        {`${hours}:${minutes}`}
      </time>
    </div>
    <div className="chat-bubble text-white/80">{message}</div>
    {/* <div className="chat-footer opacity-50">Delivered</div> */}
  </div>
}

const Messages = ({contact, handleX}) => {

  const {profilePic, fullName, isOnline=false} = contact

  const [loading, setLoading] = useState(true) 
  // const date = new Date(2025, 1, 1, 1, 6, 5, 0, 0)

  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getMessages = async () => {
      try {
        setLoading(true) 
        const res = await axiosInstance(`messages/${contact._id}`)
        setMessages(res.data)
        setLoading(false)
      } catch (error) {
        console.error("Error in Messages component > getMessages")
      }
    }
    getMessages() 
  }, [contact])

  const handleImageUpload = (e) => {
    const file = e.target.files[0] 
    if (file)
      console.log("SELECTED FILE", file.name)
  }

  const handleSendButton = async (e) => {
    if (message !== ""){
      setIsSending(true) 
      setMessages([...messages, {user: true, message: message, sent: new Date()}])
      setMessage("")
      
      // send message to via axios
      try {
        console.log(contact._id)
        const res = await axiosInstance.post(`messages/send/${contact._id}`, {
          text: message,
          image: null,
        })
      } catch (error) {
        console.error("Error in Messages component > handleSendButton", error)
      }
    }
  }

  return <>
    {/* Header Section */}
    <div className="flex flex-row place-content-between">
      <Contact contact={contact} clickable={false} />
      <div className="cursor-pointer text-white/70" onClick={handleX}>
        <X />
      </div>
    </div>
    {/* Messages Section */}
    <div className="mt-8 grow">
    { !loading && messages.map((message, index) => {
      return <Message key={index} {...message} />
      // <Message key={index} {...message} /> 
    })}
    </div>
    {/* Send Message Section */}
    <div className="w-full flex flex-row gap-2 items-center">
      <div className="grow p-2 rounded-2xl border-1 border-white/30 text-white/90">
        <input 
          type="text" 
          placeholder="Send a message..." 
          onChange={(e) => {setMessage(e.target.value)}}
          onKeyDown={(e) => {if (e.key === 'Enter') handleSendButton()}}
          value={message}
          className="w-full focus:ring-0 focus:outline-none"></input>
      </div>

      {/* Image Input */}
      <div className="bg-base-300 p-2 rounded-full">
        <input 
          type="file"
          id="imageUpload"
          onChange={handleImageUpload}
          className="hidden"
        />
        <label
          htmlFor="imageUpload"
          className=""
          title="Upload Image"
        >
          <Image />
        </label>
      </div>

      {/* Send Button */}
      <button 
        disabled={isSending}
        className="bg-base-300 rounded-full p-2"
        onClick={handleSendButton}>
        <Send />
      </button>

    </div>
  </>
}

export default Messages