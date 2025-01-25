import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const DropDown = ({label}) => {
  return (
    <div className='py-1 px-2 rounded-lg shadow-md bg-white flex justify-between items-center w-28 cursor-pointer'>
      <p className='text-xs font-normal'>{label}</p>
      <FaCaretDown className='text-xs' />
    </div>
  )
}

export default DropDown
