import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Performance from "../Components/Performance";
import Sales from "../Components/Sales";
import "../Styles/mainDashboard.css";

const MainDashboard = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <div>
          <Navbar />
          <Performance />
          <Sales/>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
