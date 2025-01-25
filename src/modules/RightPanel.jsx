import React from 'react'
import PanelCard from '../components/PanelCard'
import { rightPaneldata } from '../constant/panelData'

const RightPanel = () => {
  return (
    <div className='py-2 px-4 rounded-sm shadow-md bg-white flex flex-col gap-4 w-full'>
      {rightPaneldata.map((item, index) => {
        return (
          <PanelCard indexVal={index} num={item.number} label={item.label} />
        )
      })}
    </div>
  )
}

export default RightPanel
