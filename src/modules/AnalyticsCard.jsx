import React from 'react'
import { analyticsData } from '../constant/analyticsData'

const AnalyticsCard = () => {
    return (
        <div className='py-2 px-4 rounded-sm shadow-md bg-white flex-1 flex items-center justify-between'>
            {analyticsData.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className='flex gap-2 items-center'>
                        <div className='p-1 rounded-sm shadow-md bg-white'>
                        <Icon className="text-[#755dff] xl:w-9 xl:h-9 lg:w-5 lg:h-5 w-4 h-4 " />
                        </div>
                        <div className='flex flex-col justify-between '>
                            <p className='xl:text-[16px] text-[14px] font-medium text-[#2780e6]'>{item.number}</p>
                            <p className='xl:text-[16px] lg:text-[10px] font-normal lg:block hidden'>{item.label}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AnalyticsCard
