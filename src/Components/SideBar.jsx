import React, { useState } from 'react';
import "../Styles/sidebar.css";
import logo from "../Images/logo.png";
import Element from "./Element";
import { SidebarData } from '../SidebarData';

const SideBar = () => {
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleElementClick = (title) => {
    setSelectedItem(title);
    // Add any additional logic you may need on element click
  };

  return (
    <>
      <div className='h-[100vh] w-[20vw] fixed sidebar'>
        <div className='flex justify-center my-8'>
          <span><img src={logo} alt="" className='h-8 w-8 rounded-full'/></span>
          <span className='text-xl pl-2 text-white font-medium '>Skilify Admin</span>
        </div>
        <div className='h-[50vh] w-[15vw] mx-auto'>
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
      </div>
    </>
  );
}

export default SideBar;