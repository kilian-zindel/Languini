import React from 'react'
// pages 
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
// components 
import Navbar from './components/Navbar'
import Loader from './components/Loader.jsx'
import { Toaster } from 'react-hot-toast'

import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore.js'
import { useEffect } from 'react'

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore() 

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  console.log({authUser})

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    )
  }

  return (
    <div>
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
      ></Toaster> */}
      <div className="flex-col h-screen">
        <Navbar />
        <div className="h-full">
          <Routes>
            <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} /> 
            <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} /> 
            {/* <Route path='/signup' element={<SignUpPage />} /> */}
            <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} /> 
            <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} /> 
            <Route path="/settings" element={<SettingsPage />} /> 
          </Routes>
        </div>
      </div>
      <Toaster />
    </div>
  )
}

export default App