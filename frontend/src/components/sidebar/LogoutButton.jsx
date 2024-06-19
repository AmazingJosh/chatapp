import React from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hookes/useLogOut';


const LogoutButton = () => {
  const {logOut, loading} = useLogout()
  return (
    <div className='mt-auto'>
      {!loading? (
        <BiLogOut onClick={logOut} className='text-white w-6 h-6 cursor-pointer'/>

      ): (
        <span className="loading loading-spinner"></span>
      )}
    </div>
  )
}

export default LogoutButton
