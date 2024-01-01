import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Performance from "../Components/Performance";
import "../Styles/mainDashboard.css";

const MainDashboard = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <div>
          <Navbar />
          <Performance />
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
