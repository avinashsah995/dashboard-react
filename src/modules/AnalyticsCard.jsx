import React from 'react'
import { analyticsData } from '../constant/analyticsData'

const AnalyticsCard = () => {
    return (
        <div className='py-2 px-4 rounded-sm shadow-md bg-white flex-1 flex items-center justify-between'>
            {analyticsData.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div key={index} className='flex gap-2'>
                        <div className='p-1 rounded-sm shadow-md bg-white'>
                        <Icon className="text-[#755dff] w-9 h-9" />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p className='text-[16px] font-medium text-[#2780e6]'>{item.number}</p>
                            <p className='text-[16px] font-normal'>{item.label}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AnalyticsCard
