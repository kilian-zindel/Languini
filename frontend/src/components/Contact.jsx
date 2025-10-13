import React from 'react'
import { useState } from 'react'
import { useChatStore } from '../store/useChatStore.js'

const Contact = ({user, clickable=true, isOnline=false}) => {
  // console.log(`MOUNT <Contact user="${user.fullName}" />`)

  // const [ user, setUser ] = useState(contact) 
  const { selectedUser, setSelectedUser } = useChatStore()
  const { profilePic, fullName } = user
  const selected = (selectedUser === user && clickable)
  
  return <button 
    className={`flex flex-row w-full items-center gap-2 p-2 pl-4
        ${ selected ? "bg-base-300/30" : "bg-base-200"}`}
    disabled={!clickable || selected} 
    onClick={() => {
      setSelectedUser(user)
    }}> 
    <div className="size-12 bg-base-300 rounded-full">
        <img 
            src={profilePic || "/avatar.png"} 
            alt="Profile" 
            className="size-full object-cover rounded-full"
        />
    </div>
    <div className="text-left">
      <h1 className="text-sm font-semibold tracking-tight max-w-120 text-nowrap overflow-clip">{fullName}</h1>
      <p className="text-xs font-light text-white/50">{isOnline ? "Online" : "Offline"}</p>
    </div>
  </button>
}

export default Contact