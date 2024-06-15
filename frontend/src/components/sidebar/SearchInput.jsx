import React from 'react'
import { IoSearchSharp } from "react-icons/io5";


const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
        <input type="text" className='input input-bordered rounded-full'/>
        <button type="submit" className='btn btn-circle bg-sky-500 text-white'> <IoSearchSharp className="outline-none w-6 h-6"/>
</button>

    </form>

      
    
  )
}

export default SearchInput
