import React, { useState } from 'react';
import "../Styles/sidebar.css";
import logo from "../Images/logo.png";
import Element from "./Element";
import { SidebarData } from '../SidebarData';
import openingPoster from "../Images/openingPoster.jpg"
import CopyrightIcon from '@mui/icons-material/Copyright';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleElementClick = (title) => {
    setSelectedItem(title);
  };

  return (
    <>
      <div className='h-[1200px] w-[20vw] sidebar'>
        <div className='flex justify-center py-8'>
          <span><img src={logo} alt="" className='h-8 w-8 rounded-full'/></span>
          <span className='text-xl pl-2 text-white font-medium '>Skilify Admin</span>
        </div>
        <div className='mb-2 w-[15vw] mx-auto'>
          {SidebarData.map((val) => (
            <Element
              key={val.title}
              title={val.title}
              icon={val.icon}
              onClick={() => handleElementClick(val.title)}
              isSelected={selectedItem === val.title}
            />
          ))}
        </div>
        <div className='my-16 py-5 w-[15vw] mx-auto bg-white rounded-lg flex-col'>
          <div className='w-48 mx-auto py-2'><img src={openingPoster} alt="" /></div>
          <div className='button mx-auto'><button>Get Subscription</button></div>
          
        </div>
        <div className='text-white w-fit mx-auto'>
          <div className='font-bold '>Skilify Teacher Dashboard Admin</div>
          <div className='text-[16px]'><CopyrightIcon/><span> 2020 all rights reserved</span></div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

