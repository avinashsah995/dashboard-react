import React from 'react'
import CardTitle from '../components/CardTitle'
import { LineChart } from '@mui/x-charts'
import DropDown from '../components/DropDown';

const FeeCard = () => {
  const xLabels = ['2019', '2020', '2021', '2022', '2023', '2024', '2025'];
  const feeData = [60, 55, 52, 70, 55, 92, 92];
  const totalData = [50, 45, 42, 60, 45, 82, 82];
  const outstandingData = [20, 25, 22, 25, 25, 22, 32];
  return (
    <div className="py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2 h-auto">
      <div className='flex justify-between gap-2'>
        <CardTitle title={"Fee Details"} />
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#074799]`}></div>
            <p className='text-xs'>Total Fee</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#9EDF9C]`}></div>
            <p className='text-xs'>Total Collection</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#F72C5B]`}></div>
            <p className='text-xs'>Outstanding Fee</p>
          </div>
          <DropDown label={'Select Class'} />
        </div>
      </div>
      <div className="w-full">
        <LineChart
          height={150}
          series={[
            { data: feeData, color: '#074799' },
            { data: totalData, color: '#9EDF9C' },
            { data: outstandingData, color: '#F72C5B' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          disableAxisListener={false}
          className="w-full"
          responsive={true} 
          margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
        />
      </div>
    </div>
  )
}

export default FeeCard
