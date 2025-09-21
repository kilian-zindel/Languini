import React from 'react'
import { toast } from 'react-hot-toast'
import { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore.js'
import { MessageSquare, Eye, EyeOff, Loader2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import AuthImagePattern from '../components/AuthImagePattern';

const LoginPage = () => {

  const { login, isLoggingIn } = useAuthStore(); 
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "", 
    password: "",
  })

  const validateInput = () => {
    if (formData.email.trim() === "") return toast.error("Email missing");
    if (formData.password.trim() === "") return toast.error("Password missing");
    return true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    if (validateInput()) await login(formData);
  }

  return (
    <div className="min-h-screen grid lg:grid-cols-2"> 
      {/* LEFT HAND SIDE */}
      <div className="h-full flex flex-col justify-center items-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">

          {/* LOGO AND HEADING */}
          <div className="text-center mb-8">
            <div className="flex flex-col gap-2 items-center group">
              {/* LOGO */}
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center
                group-hover:bg-primary/20 transition-colors">
                <MessageSquare className="size-6 text-primary" /> 
              </div>
              {/* HEADING  */}
              <h1 className="text-2xl text-primary font-bold mt-2">Welcome Back</h1>
              <p className="text-base-content opacity-60">Sign in to your account</p>
            </div>
          </div>

          {/* FORM  */}
          <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">

            {/* EMAIL INPUT */}
            <label className="label"><span className="label-text font-medium mt-4">Email</span></label>
            <label className="input input-bordered w-full flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input 
                type="text" 
                className="grow" 
                placeholder="you@example.com" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value})}
              />
            </label>

            {/* PASSWORD INPUT */}
            <label className="label"><span className="label-text font-medium mt-4">Password</span></label>
            <label className="input input-bordered w-full flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input 
                type={showPassword ? "text" : "password"}
                className="grow" 
                placeholder="••••••••" 
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value})}
              />
              <button type="button"
                className="h-4 w-4 opacity-70"
                onClick={() => setShowPassword(!showPassword)}>
                { !showPassword && <Eye size="16"/>}
                { showPassword && <EyeOff size="16"/>}
              </button>
            </label>

            {/* SUBMIT BUTTON  */}
            <button type="submit" 
              className="btn btn-primary w-full mt-4" 
              disabled={isLoggingIn}
              onClick={handleSubmit}>
                { isLoggingIn ? (
                  <><Loader2 className="size-5 animate-spin" />Loading...</>
                ) : (
                  <>Sign In</>
                ) }
            </button>
          </fieldset>
          </form>

          {/* LINK TO LOGIN PAGE */}
          <div className="text-center">
            <p className="text-base-content">
                <span className="opacity-60">Don't have an account?{" "}</span>
                <Link to="/signup" className="link link-primary">
                  Create account
                </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Hand Side */}
      <AuthImagePattern 
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  )
}

export default LoginPage