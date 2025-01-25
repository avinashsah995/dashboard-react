import React from 'react'
import { LuCalendarClock } from "react-icons/lu";

const TimeCard = () => {
    return (
        <div className='w-48 py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-1 items-center'>
            <div className='flex gap-2'>
                <LuCalendarClock className="text-[#755dff] w-7 h-7" />
                <div>
                    <p className='text-[12px] font-medium text-[#2780e6]'>11:30 Am</p>
                    <p className='text-[12px] font-normal'>15 Oct 2024 / Wednesday</p>
                </div>
            </div>
            <div>
                <p className='text-[10px] text-slate-500'>Hindi Class / 11:40 Am-12:25 Pm</p>
            </div>
        </div>
    )
}

export default TimeCard
