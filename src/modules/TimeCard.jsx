import React from 'react'
import { LuCalendarClock } from "react-icons/lu";

const TimeCard = () => {
    return (
        <div className='w-48 py-2 px-4 rounded-sm shadow-md bg-white lg:flex hidden flex-col gap-1 items-center'>
            <div className='flex gap-2'>
                <LuCalendarClock className="text-[#755dff] lg:w-7 lg:h-7 w-5 h-5" />
                <div>
                    <p className='lg:text-[12px] text-[10px] font-medium text-[#2780e6]'>11:30 Am</p>
                    <p className='lg:text-[12px] text-[10px] font-normal'>15 Oct 2024 / Wednesday</p>
                </div>
            </div>
            <div>
                <p className='lg:text-[10px] text-[8px] text-slate-500'>Hindi Class / 11:40 Am-12:25 Pm</p>
            </div>
        </div>
    )
}

export default TimeCard
