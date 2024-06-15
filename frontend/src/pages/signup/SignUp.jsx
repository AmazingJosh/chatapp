import React from 'react'
import GernderCheckBox from './GernderCheckBox'

const SignUp = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
<div className="w-full rounded-lg p-6 shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 ">
    <h1 className=" text-center text-[40px] font-bold text-gray-300">SignUp<span className='text-blue-500'>ChatApp</span>
</h1>
<form>
 <div>
    <label className="label p-2 ">
        <span className='text-base label-text text-white'>full name</span>
    </label>
    <input type="text" placeholder='John Doe' className='w-full input input-bordered h-10'/>
 </div>
 <div>
    <label className="label p-2 ">
        <span className='text-base label-text text-white'>Username</span>
    </label>
    <input type="text" placeholder='Enter Username' className='w-full input input-bordered h-10'/>
 </div>

 <div>
 <label className="label p-2">
        <span className='text-base label-text text-white'>Password</span>
    </label>
    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10'/>

 </div>
 <div>
    <label className="label p-2 ">
        <span className='text-base label-text text-white'>confirm password</span>
    </label>
    <input type="text" placeholder='confirm Username' className='w-full input input-bordered h-10'/>
 </div> 

 <GernderCheckBox/>
 <a href="#" className='text-sm hover:underline hover:text-white inline-block mt-2'>Already have an account?</a>

 <div className="btn btn-block btn-sm mt-2">Sign Up</div>
 


</form>
</div>
</div>
  )
}

export default SignUp
