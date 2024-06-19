import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { Link } from 'react-router-dom'
import useSignUp from '../../hookes/useSignUp'

const SignUp = () => {
    
    const [input, setInput] =useState({
        fullname:"", username:"", password:"", confirmPassword:"", gender:""
    })
    const {signup, loading} = useSignUp()

    const handlecheckedBox =(gender)=>{
        setInput({...input, gender})
     }
       

    const handleSubmit= async(e)=>{
        e.preventDefault()
        await signup(input)

    }
 
  return (
    <div className='flex flex-col items-center justify-center min-w-96 m x-auto'>
<div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
    <h1 className=" text-center text-[40px] font-bold text-gray-300">SignUp<span className='text-blue-500'>ChatApp</span>
</h1>
   <form onSubmit={handleSubmit}>
 <div>
    <label className="label p-2 ">
        <span className='text-base label-tbext text -white'>ful l name</ span>
     </label>
    <input type="text"
 placeholder='John Doe' 
     className='w-full input input-bordered h-10'
     value={input.fullname}
     onChange={(e)=>setInput({...input, fullname:e.target.value})}
     />
 </div>
 <div>
    <label className="label p-2 ">
        <span className='text-base label-text text-white'>Username</span>
    </label>
    <input 
    type="text" 
    placeholder='Enter Username' 
    className='w-full input input-bordered h-10'
    value={input.username}
    onChange={(e)=>setInput({...input, username:e.target.value})}

    />
 </div>

 <div>
 <label className="label p-2">
        <span className='text-base label-text text-white'>Password</span>
    </label>
    <input type="password"
     placeholder='Enter Password' 
     className='w-full input input-bordered h-10'
     value = {input.password}
     onChange={(e)=>setInput({...input, password:e.target.value})}

     />

 </div>
 <div>
    <label className="label p-2 ">
        <span className='text-base label-text text-white'>confirm password</span>
    </label>
    <input type="text" 
    placeholder='confirm Username'
     className='w-full input input-bordered h-10'
     value={input.confirmPassword}
     onChange={(e)=>setInput({...input, confirmPassword:e.target.value})}

     />
 </div> 

 <GenderCheckBox onCheckboxChange={handlecheckedBox} selectedGender={input.gender}/>
 <Link to="/login" className='text-sm hover:underline hover:text-white inline-block mt-2'>Already have an account? Login</Link>

<div> 
    <button className='btn btn-block btn-sm mt-2 border border-slate-700' disabled={loading} type="submit">
        {loading? <span className='loading loading-spinner'></span> : "Sign Up"}
    </button>
    
    </div>
    </form>
</div>
</div>
  )
}

export default SignUp
