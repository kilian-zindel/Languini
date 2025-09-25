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

import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom'
import { useAuthStore } from './store/useAuthStore.js'
import { useThemeStore } from './store/useThemeStore.js'
import { useEffect } from 'react'

const App = () => {
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore() 
  const { theme } = useThemeStore();
  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  if (isCheckingAuth && !authUser) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <div data-theme={theme} 
        className="bg-base-100 w-screen min-h-screen flex flex-col">
        <Toaster />
        <Navbar />
        <div className="flex flex-col flex-grow mt-16">
          <Routes>
            <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />} /> 
            <Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} /> 
            <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to="/" />} /> 
            <Route path="/profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} /> 
          <Route path="/settings" element={<SettingsPage />} /> 
          </Routes>
        </div>
        <footer className="h-16"></footer>
      </div>
    </BrowserRouter>
  )
}

export default App