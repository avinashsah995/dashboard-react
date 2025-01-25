import React from 'react'
import CardTitle from '../components/CardTitle'
import DropDown from '../components/DropDown'
import { timetabledata } from '../constant/timeTableData'

const TimeTableCard = () => {
  return (
    <div className='py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2'>
      <div className='flex justify-between gap-4'>
        <CardTitle title={"Timetable"} />
        <DropDown label={'Faculty'} />
      </div>
      <div className='flex flex-col gap-2'>
        {timetabledata.map((item, index) => {
          return (
            <div key={index} className='py-2 px-3 rounded-sm shadow-md bg-white flex justify-between items-center gap-4'>
              <p className={`text-xs ${index % 2 !== 0 ? 'text-[#7BD3EA]' : ''}`}>{item.time}</p>
              <hr className='h-full w-[0.1px] bg-slate-500' />
              <p className={`text-xs ${index % 2 !== 0 ? 'text-[#7BD3EA]' : ''}`}>{item.class}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TimeTableCard
