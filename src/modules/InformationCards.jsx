import React from 'react'
import CardTitle from '../components/CardTitle'
import { todayInfoData } from '../constant/todayInfoData'

const InformationCards = () => {
  return (
    <div className='py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-4 h-auto'>
      <CardTitle title={"Today's Information"} />
      <div className='flex flex-col gap-1 px-2'>
        {todayInfoData.map((item, index) => {
          return (
            <div key={index} className='flex gap-6 items-center'>
              <p className='text-[16px] font-medium text-[#2780e6]'>{item.num}</p>
              <p className='text-[16px] font-normal'>{item.label}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default InformationCards
