import React from 'react';
import CardTitle from '../components/CardTitle';
import { PieChart } from '@mui/x-charts';
import { ContentUsagedata } from '../constant/contentData';

const ContentPieCard = () => {
  const pieData = ContentUsagedata.map(item => ({
    id: item.id,
    value: item.value,
    label: item.label,
    color: item.color
  }));

  const sizing = {
    margin: { right: 5 },
    width: 200,
    height: 150,
    legend: { hidden: true },
  };

  return (
    <div className="py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2">
      <CardTitle title={'Content Usage'} />
      <div className="flex justify-between items-center gap-4">
        <div className="flex flex-col justify-center gap-1">
          {pieData.map((data, index) => {
            return (
              <div key={index} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full`} style={{ backgroundColor: data.color }}></div>
                <p className="text-[14px] text-gray-500">{data.label}</p>
              </div>
            )
          })}
        </div>
        <div>
          <PieChart
            series={[
              {
                data: pieData.map(({ value, label, color }) => ({
                  value,
                  label,
                  color,
                  legend: { hidden: true },
                })),
                innerRadius: 10
              },
            ]}
            {...sizing}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentPieCard;
