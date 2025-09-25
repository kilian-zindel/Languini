import React from 'react'
import { Users, Check, MessageSquare, X } from 'lucide-react'
import { useState } from 'react'

/* TODO: 
- [ ] Load Real Contacts
- [ ] Profile Pic 
- [ ] Replace Languini Logo 
*/

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

const Contact = ({profilePic, fullName, isOnline}) => {
  return <div className="flex flex-row items-center gap-2"> 
    <div className="size-12 bg-base-300 rounded-full">
      {/* Profile Pic */}
    </div>
    <div className="">
      <h1 className="text-sm font-semibold tracking-tight max-w-120 text-nowrap overflow-clip">{fullName}</h1>
      <p className="text-xs font-light text-white/50">{isOnline ? "Online" : "Offline"}</p>
    </div>
  </div>
}

const Message = ({user, message, sent}) => {

  console.log(`MESSAGE ${user} ${message} ${sent}`)

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
        {`${sent.getHours()}:${sent.getMinutes()}`}
      </time>
    </div>
    <div className="chat-bubble text-white/80">{message}</div>
    {/* <div className="chat-footer opacity-50">Delivered</div> */}
  </div>
}

const Messages = ({profilePic, fullName, isOnline, handleX}) => {

  const date = new Date()

  const MESSAGES = [
    {user: false, message: "Hi hows is going?", sent: new Date(date.setMinutes(date.getMinutes() + 1))},
    {user: true, message: "good and you?", sent: new Date(date.setMinutes(date.getMinutes() + 1))},
    {user: false, message: "Just hangin in Inwood, watchin sum backetball", sent: new Date(date.setMinutes(date.getMinutes() + 1))},
    {user: true, message: "How so far...im in BK", sent: new Date(date.setMinutes(date.getMinutes() + 1))},
  ]

  return <div className="flex flex-col">
    {/* Header Section */}
    <div className="flex flex-row place-content-between">
      <Contact {...{profilePic, fullName, isOnline}} />
      <div className="cursor-pointer text-white/70" onClick={handleX}>
        <X />
      </div>
    </div>
    {/* Messages Section */}
    <div className="mt-8">
    { MESSAGES.map((message, index) => {
      return <Message key={index} {...message} />
      // <Message key={index} {...message} /> 
    })}
    </div>
  </div>
}

const HomePage = () => {

  const [onlineOnly, setOnlineOnly] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState(0) 
  // const [contact, setContact] = useState(null) 
  const [contact, setContact] = useState({profilePic: "", fullName: "Kilian Zindel", isOnline: true})

  const CONTACTS = [
    {profilePic: "", fullName: "Jane Doe", isOnline: false},
    {profilePic: "", fullName: "Emma Thompson", isOnline: true},
    {profilePic: "", fullName: "Olivia Miller", isOnline: false},
    {profilePic: "", fullName: "Jane Doe", isOnline: false},
    {profilePic: "", fullName: "Emma Thompson", isOnline: true},
    {profilePic: "", fullName: "Olivia Miller", isOnline: false},    
    {profilePic: "", fullName: "Jane Doe", isOnline: false},
    {profilePic: "", fullName: "Emma Thompson", isOnline: true},
    {profilePic: "", fullName: "Olivia Miller", isOnline: false},    
    {profilePic: "", fullName: "Jane Doe", isOnline: false},
    {profilePic: "", fullName: "Emma Thompson", isOnline: true},
    {profilePic: "", fullName: "Olivia Miller", isOnline: false},    
    {profilePic: "", fullName: "Jane Doe", isOnline: false},
    {profilePic: "", fullName: "Emma Thompson", isOnline: true},
    {profilePic: "", fullName: "Olivia Miller", isOnline: false},
  ]

  const handleX = () => {
    setContact(null)
  }

  const handleCheckbox = () => {
    setOnlineOnly(!onlineOnly)
  }

  return (
    <div className="h-[calc(100vh-var(--spacing)*24)] container flex flex-row flex-grow max-w-5xl mx-auto mt-4">
      {/* Sidebar  */}
      <div className="flex flex-col bg-base-200 flex-3 p-4 gap-2">

        {/* Contacts Heading */}
        <div className="flex flex-row items-center gap-1 ">
          <Users size={20} />
          <h1 className="text-md font-semibold">Contacts</h1>
        </div>

        {/* Online Only CheckBox */}
        <label className="label cursor-pointer"> 
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
          <span className="font-medium text-xs tracking-tighter text-white/30">{`(${onlineUsers} online)`}</span>
        </label>

        {/* List of Contacts */}
        <div className="h-full overflow-scroll space-y-4 mt-6">
            { CONTACTS.map((c, i) => {
              if (!onlineOnly || (onlineOnly && c.isOnline))
                return <Contact key={i} {...c} /> 
            })}
        </div>
      </div>

      {/* messages section */}
      <div className="bg-base-200 flex-9 p-4">
        { !contact && <Placeholder/>}
        { contact && <Messages handleX={handleX} {...contact} />}
      </div>
    </div>
  )
}

export default HomePage