import React from "react";
import "../Styles/navbar.css";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="flex items-ceb  wnter mx-20">
        <span>
          <FormatAlignLeftIcon />
        </span>
        <span className=" font-medium text-[20px]">Hello Mad🖐️</span>
      </div>
      <div className="search-bar mr-32">
        <SearchIcon className="search-icon" />
        <input type="text" placeholder="Search here" />
      </div>
      <div className="bg-white rounded-lg">
        <div className="button">
          <button>
            <span>
              <FileUploadOutlinedIcon />
            </span>
            New Upload
          </button>
        </div>
      </div>
      <div className="flex  w-fit absolute right-4">
        <div className="side-buttons">
          <NotificationsOutlinedIcon/>
        </div>
        <div className="side-buttons">
          <SmsOutlinedIcon/>
        </div>
        <div className="side-buttons">
          <MonitorHeartOutlinedIcon/>
        </div>
        <div className="flex text-[12px] items-center">
          <div>
            <div className="font-bold mr-3">TheMad</div>
            <div>Designer</div>
          </div>
          <div className="w-10 "><img src="https://xsgames.co/randomusers/assets/avatars/male/29.jpg" className="rounded-lg" alt="" /></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
