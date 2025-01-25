import React from 'react'
import CardTitle from '../components/CardTitle'
import { LineChart } from '@mui/x-charts'

const EmployeeLineCard = () => {
  const xLabels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const totaldata = [85, 85, 85, 85, 85, 85, 85, 85, 85, 85,
    85, 85, 85, 85, 85, 85, 85, 85, 85, 85,
    85, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85,
  ]
  const presentData = [75, 75, 75, 70, 75, 77, 77, 80, 75, 75,
    70, 70, 70, 20, 70, 70, 70, 70, 70, 80,
    70, 75, 76, 77, 77, 77, 77, 77, 77, 77, 77
  ]
  return (
    <div className="py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2 ">
      <div className='flex justify-between gap-2'>
        <CardTitle title={"Employee Preset Ratio (Monthly)"} />
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#B1F0F7]`}></div>
            <p className='text-xs'>Total</p>
          </div>
          <div className='flex gap-2 items-center'>
            <div className={`w-2 h-2 rounded-full bg-[#F29F58]`}></div>
            <p className='text-xs'>Present</p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <LineChart
          // width="100%"
          height={150}
          series={[
            { data: totaldata, color: '#B1F0F7' },
            { data: presentData, color: '#F29F58' },
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

export default EmployeeLineCard
