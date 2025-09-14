import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { useAuthStore } from '../store/useAuthStore';

const SignUpPage = () => {

  /* TODO: 
    - [ ] Disable Sign Up Button when isSigningUp
    - [ ] Write Validate Form Function 
  */

  const { signup, isSigningUp } = useAuthStore(); 

  const [isLoading, setIsLoading] = useState(false); 
    // initially true, until page checks auth 
    // NO, false because loading screen is handled in App.jsx?
    // only need loading while creating new user!
  const [showPassword, setShowPassword] = useState(false);

  // condense these refs into an object 
  const nameInputRef = useRef(null);
  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);

  const [formData, setFormData] = useState({
    // use "" for consistent datatype, makes it a "controlled component"
    'fullName': "",
    'email': "", 
    'password': "", 
  })

  const updateFormData = () => {
    // called when any form input changes
    // setFormData({
    //   'fullName': nameInputRef.current.value,
    //   'email': emailInputRef.current.value, 
    //   'password': passwordInputRef.current.value, 
    // })
  }

  useEffect(() => {
    // update DOM with new form data
      // nameInputRef.current.value = formData.name
      // emailInputRef.current.value = formData.email
      // passwordInputRef.current.value = formData.password
  }, [formData])

  const validateForm = () => {
    // validate user inputs i.e. missing input of password length etc 
    // update some error state, or alert error message? or highlight a DOM element
    // return True or False
  }

  const handleSubmit = (e) => {
    e.preventDefault(); 

    if (validateForm(e)) {
      // submit
    }
  }

  return (
    <div className="grid grid-cols-2 h-full"> 
      {/* Left Hand Side */}
      <div className="col-1 h-full bg-base-300 flex justify-center items-center">
        <div className="bg-base-200">
          <h1 className="text-4xl font-bold text-primary text-center">Create Account</h1>
          <p className="mt-2 text-lg text-base-content/70 text-center">Get started with your free account</p>
          
          {/* FIELD SET  */}
          <fieldset className="fieldset border-none rounded-box border w-full p-0">

            <label className="label mt-4">Full Name</label>
            <input type="text" className="input w-full" placeholder="John Doe" />

            <label className="label mt-4">Email</label>
            <input type="text" className="input w-full" placeholder="you@example.com" />

            <label className="label mt-4">Password</label>
            <input type="password" className="input w-full" placeholder="••••••••" />

            <input type="submit" className="btn btn-primary mt-4" value="Create Account"></input>

          </fieldset>


        </div>
      </div>

      {/* Right Hand Side */}
      <div className="col-2 h-full bg-base-200">
      </div>
    </div>
  )
}

export default SignUpPage