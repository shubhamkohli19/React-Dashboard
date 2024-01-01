import React from 'react';
import "../Styles/sidebar.css";
import logo from "../Images/logo.png";

const SideBar = () => {
  return (
    <>
        <div className='h-[100vh] w-[20vw] fixed sidebar'>
            <div className='flex justify-center my-8'>
                <span><img src={logo} alt="" className='h-8 w-8 rounded-full'/></span>
                <span className='text-xl pl-2 text-white font-medium '>Skilify Admin</span>
            </div>
            <div>
              
            </div>
        </div>
    </>
  )
}

export default SideBar