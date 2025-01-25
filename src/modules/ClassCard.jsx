import React from 'react'
import CardTitle from '../components/CardTitle'
import { BarChart } from '@mui/x-charts/BarChart';

const ClassCard = () => {
  return (
    <div className="py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2">
      <div className='flex justify-between gap-2'>
        <CardTitle title={'Class Taken'} />
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#F29F58]`}></div>
            <p className='text-xs'>Classes</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#A8CD89]`}></div>
            <p className='text-xs'>Taken</p>
          </div>
        </div>
      </div>
      <div>
        <BarChart
          xAxis={[
            { scaleType: 'band', data: ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'] },
          ]}
          series={[
            {
              data: [9, 7, 8, 8, 9, 6, 9],
              color: '#F29F58',
            },
            {
              data: [8, 6, 7, 6, 9, 7, 8],
              color: '#A8CD89',
            },
          ]}
          height={200}
          margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
          responsive={true}
        />
      </div>
    </div>
  )
}

export default ClassCard
