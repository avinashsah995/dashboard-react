import React from 'react'
import { IoLogoEdge, IoSearchSharp } from "react-icons/io5";
import { FaConnectdevelop } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { BsBell } from "react-icons/bs";

import { headerNav } from '../constant/headerNavigation';
import { Avatar } from '@mui/material';
import avatar from '../assets/avatar.svg'
import Badge from '@mui/material/Badge';

const Header = () => {
  return (
    // main div
    <div className='w-full bg-white flex gap-6 py-1 pr-3 items-center'>

      {/* logo */}
      <div className='w-24 flex items-center justify-center'>
        <IoLogoEdge className='text-[#2780e6] w-10 h-10 cursor-pointer' />
      </div>

      {/* search */}
      <div className='flex-1 align-middle h-full w-full'>
        <div className='px-4 py-2 border border-solid border-[#2780e6] rounded-2xl flex gap-4 items-center'>
          <IoSearchSharp className='text-slate-500' />
          <input type="text" name="" placeholder='Search...' id="" className='outline-none w-full text-slate-500 text-xs' />
        </div>
      </div>

      {/* navigation */}
      <div className='flex gap-6'>
        {headerNav.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center gap-1 cursor-pointer">
              <Icon className="text-slate-500 w-4 h-4" />
              <p className="text-slate-500 text-[12px]">{item.label}</p>
            </div>
          );
        })}
        <hr className='h-auto w-[0.5px] bg-slate-400' />
        <div className="flex flex-col items-center gap-1 cursor-pointer">
          <FaConnectdevelop className="text-slate-500 w-4 h-4" />
          <p className="text-slate-500 text-[12px]">My Circle</p>
        </div>
        <div className='flex items-center'>
          <Avatar alt="Remy Sharp" src={avatar} />
          <FaCaretDown />
        </div>
        <Badge badgeContent={4} color="primary" className='flex items-center justify-center'>
          <BsBell />
        </Badge>
      </div>
    </div>
  )
}

export default Header
