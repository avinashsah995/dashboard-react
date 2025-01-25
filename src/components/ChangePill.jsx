import React from 'react'
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";

const ChangePill = ({ label }) => {
    return (
        <div className='py-1 px-2 rounded-lg shadow-md bg-white flex justify-between items-center w-28'>
            <FaCaretLeft className='text-xs text-slate-400 cursor-pointer' />
            <p className='text-xs font-normal'>{label}</p>
            <FaCaretRight className='text-xs cursor-pointer' />
        </div>
    )
}

export default ChangePill
