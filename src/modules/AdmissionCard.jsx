import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import CardTitle from '../components/CardTitle';

const AdmissionCard = () => {
  return (
    <div className="py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2 h-auto">
      <div className='flex justify-between gap-2'>
        <CardTitle title={"Admission Details"} />
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#074799]`}></div>
            <p className='text-xs'>Enquery</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#B1F0F7]`}></div>
            <p className='text-xs'>Follow</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#F72C5B]`}></div>
            <p className='text-xs'>Confirm</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#F29F58]`}></div>
            <p className='text-xs'>Admission</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#9EDF9C]`}></div>
            <p className='text-xs'>Final Student</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <BarChart
          xAxis={[
            { scaleType: 'band', data: ['VI', 'VII', 'VIII', 'IX', 'X', 'XI', 'XII', 'Class Avg'] },
          ]}
          series={[
            { data: [900, 990, 900, 990, 990, 800, 990, 990],
              color: '#074799'
             },
            { data: [900, 900, 900, 900, 900, 900, 900, 900],
              color: '#B1F0F7'
             },
            { data: [700, 700, 850, 650, 850, 800, 700, 700],
              color: '#F72C5B'
             },
            { data: [600, 600, 600, 800, 600, 800, 600, 600],
              color: '#F29F58'
             },
            { data: [600, 600, 600, 800, 600, 800, 600, 600],
              color: '#9EDF9C'
             },
          ]}
          // width={500}
          height={200}
          margin={{ top: 10, right: 20, bottom: 40, left: 40 }}
          responsive={true} 
        />
      </div>
    </div>
  );
};

export default AdmissionCard;
