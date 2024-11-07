import { useState } from 'react'
import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import './index.css'

function Sidebar() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div  className="fixed left-0 h-80 w-44 mt-4 opacity-85
    flex flex-col
    bg-white text-white shadow-lg">
      <SideBarIcon  text={'Home'} />
      <SideBarIcon  text={'Notifications'} />
      <SideBarIcon  text={'Announcements'} />
      <SideBarIcon  text={'Events'} />
      <SideBarIcon  text={'News'} />
      <SideBarIcon  text={'E-notifications'} />
    </div>
       
    </>
  )
}

const SideBarIcon = ({  text  }) => (
  <div className="sidebar-icon group w-44">
    <span className='sidebar-tooltip '>
      {text}
    </span>
  </div>
);

export default Sidebar
