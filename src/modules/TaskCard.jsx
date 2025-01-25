import React from 'react';
import CardTitle from '../components/CardTitle';
import ChangePill from '../components/ChangePill';
import { weeklyTaskData } from '../constant/weeklyTaskData';

const TaskCard = () => {
  return (
    <div className='py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-2'>
      {/* Card Header */}
      <div className='flex justify-between'>
        <CardTitle title={'Weekly Task'} />
        <ChangePill label={'Week 1'} />
      </div>

      {/* Task List */}
      <div className='flex flex-col gap-2'>
        {weeklyTaskData.map((task, index) => (
          <div
            key={index}
            className='py-2 px-3 rounded-sm shadow-md bg-white flex gap-4 justify-between'
          >
            {/* Day and Status */}
            <div className='flex gap-2 items-center'>
              <p className='text-[10px] font-bold'>{task.day}</p>
              <p
                className={`text-[10px] font-semibold ${task.status === 'P' ? 'text-green-500' : 'text-red-500'
                  }`}
              >
                {task.status}
              </p>
            </div>

            {/* Task Icons */}
            <div className='flex gap-2 flex-wrap items-start justify-start w-auto'>
              {task.tasks.map((TaskIcon, i) => (
                typeof TaskIcon === 'string' ? (
                  <div
                    key={i}
                    className='w-6 h-6 flex items-center justify-center bg-gray-300 text-xs rounded-full'
                  >
                    {TaskIcon}
                  </div>
                ) : (
                  <div
                    key={i}
                    className='w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full'
                  >
                    <TaskIcon className='text-white w-4 h-4' />
                  </div>
                )
              ))}
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskCard;
