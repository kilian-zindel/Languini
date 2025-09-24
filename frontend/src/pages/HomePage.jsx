import React from 'react'
import { Users, Check } from 'lucide-react'
import { useState } from 'react'

const Contact = ({profilePic, fullName, isOnline}) => {

  console.log(fullName)

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

const HomePage = () => {

  const [onlineOnly, setOnlineOnly] = useState(false)
  const [onlineUsers, setOnlineUsers] = useState(0) 

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

  const handleCheckbox = () => {
    setOnlineOnly(!onlineOnly)
  }

  return (
    <div className="h-[calc(100vh-var(--spacing)*24)] container flex flex-row flex-grow mx-auto mt-4">
      {/* contacts section  */}
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
            { CONTACTS.map((c) => {
              if (!onlineOnly || (onlineOnly && c.isOnline))
                return <Contact {...c} /> 
            })}
        </div>


      </div>
      {/* messages section */}
      <div className="bg-base-300 flex-9"></div>
    </div>
  )
}

export default HomePage