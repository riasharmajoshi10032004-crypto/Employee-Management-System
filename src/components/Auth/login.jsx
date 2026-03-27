import React, { useState } from 'react'

const Login = ({handlelogin}) => {
  const[email,setEmail]=useState("")
   const[password,setPassword]=useState("")

  const sumbithandler=(e)=>{
    e.preventDefault()
    handlelogin(email,password)
   
     setEmail("")
     setPassword("")

  }
  return (
    <div className='flex  h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded-xl' >
        <form className='flex flex-col items-center justify-center'
        onSubmit={(e)=>{
          
          sumbithandler(e)

        }}> 
           <input 
           value={email}
           onChange={(e)=>{setEmail(e.target.value)}}
           required className= '  outline-none border-2 border-emerald-600 py-4 px-5  bg-transparent text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter  Email'
           />
        <input
          value={password}
           onChange={(e)=>{setPassword(e.target.value)}}
         required className= '  outline-none border-2 border-emerald-600 py-4 px-5 bg-transparent  text-xl rounded-full mt-4 placeholder:text-gray-400' type="password" placeholder='Enter Password'
         />
        <button className= '  outline-none border-none mt-9 bg-emerald-700 py-4 px-28  text-xl rounded-full placeholder:text-white' >Log In</button>
          
        </form >
       

      </div>
  
  </div>
  )
}

export default Login
