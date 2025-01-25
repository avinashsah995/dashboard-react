import React from 'react'
import { sideBarNav } from '../constant/headerNavigation'

const SideBar = () => {
  return (
    <div className='h-full w-full py-4 px-2 flex flex-col gap-4 items-center'>
      {sideBarNav.map((item, index) => {
        const Icon = item.icon;
        return (
          <div key={index} className="flex flex-col items-center gap-1 justify-cente cursor-pointer">
            <Icon className="text-white w-5 h-5" />
            <p className="text-white text-[12px]">{item.label}</p>
          </div>
        );
      })}
    </div>
  )
}

export default SideBar
