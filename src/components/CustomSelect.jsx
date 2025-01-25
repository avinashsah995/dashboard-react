import React from 'react'
import { FaCaretDown } from "react-icons/fa";

const CustomSelect = ({label}) => {
  return (
    <div className='w-48 py-2 px-4 rounded-sm shadow-md bg-white flex justify-between cursor-pointer '>
      <p className='text-[14px] font-semibold text-slate-300'>{label}</p>
      <FaCaretDown className='text-slate-500' />
    </div>
  )
}

export default CustomSelect
