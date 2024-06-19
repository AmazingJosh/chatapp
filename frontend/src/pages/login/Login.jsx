import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hookes/uselogin'

const Login = () => {

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
const {loading, login} = useLogin()

const handleSubmit=async(e)=>{
 e.preventDefault()
  await login(username, password)
}


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
    <h1 className=" text-center text-[40px] font-bold text-gray-300">Login<span className='text-blue-500'>ChatApp</span>
</h1>
<form onSubmit={handleSubmit}>
 <div>
    <label className="label p-2 ">
        <span className='text-base label-text text-white'>Username</span>
    </label>
    <input type="text" placeholder='Enter Username'
     className='w-full input input-bordered h-10'
     value={username}
     onChange={(e)=>setUsername(e.target.value)}
     />
     
 </div>
 <div>
 <label className="label p-2">
        <span className='text-base label-text text-white'>Password</span>
    </label>
    <input type="password" placeholder='Enter Password'
     className='w-full input input-bordered h-10'
     value={password}
     onChange={(e)=>setPassword(e.target.value)}
     />

 </div>

 <Link to="/signup" className='text-sm hover:underline hover:text-white inline-block mt-2'>{"Don't"} have an account? Signup</Link>

 <button type='submit' className="btn btn-block btn-sm mt-2" disabled={loading}>
  {loading? <span className='loading loading-spinner'></span>: "Sign-in"}
 </button>


</form>
    </div>    
    </div>
  )
}

export default Login
