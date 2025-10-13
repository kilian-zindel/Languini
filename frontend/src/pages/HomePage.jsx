import React from 'react'
import { Users, Check, MessageSquare } from 'lucide-react'
import { useState, useEffect } from 'react'
import Messages from '../components/Messages.jsx'
import Contact from '../components/Contact.jsx'
import { useChatStore } from '../store/useChatStore.js'
import { useAuthStore } from '../store/useAuthStore.js'
import SidebarSkeleton from '../components/skeletons/SidebarSkeleton.jsx'

const Placeholder = () => {
  return <div className="h-full flex items-center justify-center">
    <div className="flex flex-col gap-4 text-center">
      <div className="flex items-center justify-center bg-primary/10 size-16 rounded-xl mx-auto">
        <MessageSquare className="w-10 h-10 text-primary"/>
      </div>
      <h1 className="text-2xl font-bold mt-2">Welcome to Languini!</h1>
      <p className="text-base-content/70 text-sm">Select a conversation from the sidebar to start practicing</p>
    </div>
  </div>
}

const HomePage = () => {

  const { isUsersLoading } = useChatStore()
  const { onlineUsers } = useAuthStore() 
  const { users, selectedUser, getUsers } = useChatStore()

  const [onlineOnly, setOnlineOnly] = useState(false)

  useEffect(() => {
    console.log('MOUNT <HomePage />')
    getUsers() 
  }, []) // run run after mounting

  // const isOnline = (user) => {
    
  // }

  // run after rerender 
  useEffect(() => console.log("RENDER <HomePage />"))

  const handleCheckbox = () => {
    setOnlineOnly(!onlineOnly)
  }

  return (
    <div className="h-[calc(100vh-var(--spacing)*24)] container flex flex-row flex-grow max-w-5xl mx-auto mt-4">
      {/* Sidebar  */}

      { isUsersLoading 
      ? <SidebarSkeleton /> 
      : <div className="flex flex-col bg-base-200 flex-3 gap-2">
          {/* Contacts Heading */}
          <div className="flex flex-row items-center gap-1 p-4 pb-0">
            <Users size={20} />
            <h1 className="text-md font-semibold">Contacts</h1>
          </div>

          {/* Online Only CheckBox */}
          <label className="label cursor-pointer pl-4"> 
            <input type="checkbox"
              onClick={handleCheckbox}
              className="absolute opacity-0"
            />
            <div className={`relative w-4 h-4 border rounded-sm ${onlineOnly ? "bg-base-content" : "transparent"}`}>
              {onlineOnly && (
                <span className="absolute inset-0 flex items-center justify-center">
                  <Check className="text-base-200" size={16} strokeWidth={4} />
                </span>
              )}
            </div>
            <span className="font-medium text-xs tracking-tighter text-base-content">Show online only</span>
            <span className="font-medium text-xs tracking-tighter text-white/30">{`(${onlineUsers?.length - 1 || 0} online)`}</span>
          </label>

          {/* List of Contacts */}
          <div className="h-full overflow-scroll space-y-0 mt-6">
              { !isUsersLoading && users.map((user, i) => {
                const isOnline = onlineUsers.includes(`${user._id}`)
                if (!onlineOnly || (onlineOnly && (onlineOnly && isOnline)))
                  return <Contact key={i} user={user} isOnline={isOnline} /> 
              })}
          </div>
      </div>
      }

      {/* messages section */}
      <div className="bg-base-200 flex-9 p-4 flex flex-col">
        { !selectedUser && <Placeholder/>}
        { selectedUser && <Messages />}
      </div>
    </div>
  )
}

export default HomePage