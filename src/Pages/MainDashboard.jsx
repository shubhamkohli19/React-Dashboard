import React from "react";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Performance from "../Components/Performance";
import Sales from "../Components/Sales";
import "../Styles/mainDashboard.css";
import StudentQueries from "../Components/StudentQueries";

const MainDashboard = () => {
  return (
    <>
      <div className="app">
        <Sidebar />
        <div>
          <Navbar />
          <Performance />
          <div className="flex sales">
            <Sales />
            <StudentQueries />
          </div>
        </div>
      </div>
    </>
  );
};

export default MainDashboard;
