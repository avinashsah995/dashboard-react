import React from 'react'
import CardTitle from '../components/CardTitle'
import { LineChart } from '@mui/x-charts'
import DropDown from '../components/DropDown';

const ContentLineCard = () => {
  const xLabels = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
    '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
    '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
  const mp3Data = [2, 2, 4, 2, 4, 3, 2, 4, 3, 2, 4, 2, 3, 2, 4, 3, 3, 4, 2, 3, 4, 3, 2, 4, 3, 2, 3, 2, 4, 3, 2]
  const mp4Data = [3, 4, 5, 5, 5, 4, 3, 5, 4, 3, 5, 3, 4, 3, 5, 4, 4, 5, 3, 4, 5, 4, 3, 5, 4, 3, 4, 3, 5, 4, 3]
  const html5Data = [4, 5, 6, 6, 6, 5, 4, 6, 5, 4, 6, 4, 5, 4, 6, 5, 5, 6, 4, 5, 6, 5, 4, 6, 5, 4, 5, 4, 6, 5, 4]
  const youtubeData = [5, 6, 7, 7, 7, 6, 5, 7, 6, 5, 7, 5, 6, 5, 7, 6, 6, 7, 5, 6, 7, 6, 5, 7, 6, 5, 6, 5, 7, 6, 5]
  const econtentData = [6, 7, 8, 8, 8, 7, 6, 8, 7, 6, 8, 6, 7, 6, 8, 7, 7, 8, 6, 7, 8, 7, 6, 8, 7, 6, 7, 6, 8, 7, 6]




  return (
    <div className='col-span-2 grid grid-cols-1 h-auto'>
      <div className="py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2 ">
        <div className='flex justify-between gap-2'>
          <CardTitle title={"Content Ussage"} />
          <div className='flex gap-4 items-center'>
            <div className='flex gap-2 items-center'>
              <div className={`w-2 h-2 rounded-full bg-[#9EDF9C]`}></div>
              <p className='text-xs'>E-Content</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className={`w-2 h-2 rounded-full bg-[#F72C5B]`}></div>
              <p className='text-xs'>Youtube</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className={`w-2 h-2 rounded-full bg-[#FF77B7]`}></div>
              <p className='text-xs'>HTML5</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className={`w-2 h-2 rounded-full bg-[#074799]`}></div>
              <p className='text-xs'>Mp4</p>
            </div>
            <div className='flex gap-2 items-center'>
              <div className={`w-2 h-2 rounded-full bg-[#B1F0F7]`}></div>
              <p className='text-xs'>Mp3</p>
            </div>
            <DropDown label={'Employee'} />
          </div>
        </div>
        <div className="w-full">
          <LineChart
            // width="100%"
            height={150}
            series={[
              { data: mp3Data, color: '#B1F0F7' },
              { data: mp4Data, color: '#074799' },
              { data: html5Data, color: '#FF77B7' },
              { data: youtubeData, color: '#F72C5B' },
              { data: econtentData, color: '#9EDF9C' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
            disableAxisListener={false}
            className="w-full"
            responsive={true}
            margin={{ top: 10, right: 20, bottom: 40, left: 40 }}

          />
        </div>
      </div>
    </div>
  )
}

export default ContentLineCard
