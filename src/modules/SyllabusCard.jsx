import React from 'react'
import CardTitle from '../components/CardTitle'
import { LineChart } from '@mui/x-charts'

const SyllabusCard = () => {
  const xLabels = ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII'];
  const total = [20, 90, 80, 90, 65, 82, 60];
  const completed = [20, 70, 60, 75, null, null, null];

  return (
    <div className="py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2 h-auto">
      <div className='flex justify-between'>
        <CardTitle title={"Syllabus"} />
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#2E96FF]`}></div>
            <p className='text-xs'>Total</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#02B2AF]`}></div>
            <p className='text-xs'>Completed</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <LineChart
          // width="100%"
          height={150}
          series={[
            { data: completed, color: '#02B2AF' },
            { data: total, color: '#2E96FF' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
          disableAxisListener={false}
          responsive={true}
          margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
        />
      </div>
    </div>
  );
};

export default SyllabusCard;
