import React from 'react'

const PanelCard = ({indexVal, num, label }) => {
  return (
    <div key={indexVal} className='flex gap-3 items-center'>
      <div className='w-7 h-7 border-[4px] border-solid border-[#ebebeb] rounded-full flex justify-center items-center'>
        <p className='text-[12px] font-medium text-[#2780e6]'>{num}</p>
      </div>
      <p className='text-[12px] font-medium'>{label}</p>
    </div>
  )
}

export default PanelCard
