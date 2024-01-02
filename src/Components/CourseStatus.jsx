import React from "react";
import "../Styles/courseStatus.css";
import { CourseData } from "../CourseData.js";
import CourseDetail from "./CourseDetail";

const CourseStatus = () => {
  return (
    <div className="courseStatus mt-16 text-[13px]">
      <div className="flex justify-between mx-16 mb-2">
        <div className="font-bold pl-3 text-[15px]">Course Status</div>
        <div className="flex text-[12px]">
          <div className="px-4 flex items-center">
            <div className="pr-2">Course Visit</div>
            <div className="h-[10px] w-[10px] border rounded-full bg-purple-900"></div>
          </div>
          <div className="px-4 flex items-center">
            <div className="pr-2">Course Sale</div>
            <div className="h-[10px] w-[10px] border rounded-full bg-orange-500"></div>
          </div>
          <div className="px-4 flex items-center">
            <div>This Month</div>
          </div>
        </div>
      </div>
      <div className="ml-16 flex font-bold bg-purple-50">
        <div className="py-3 w-[350px] pl-3">Name</div>
        <div className="py-3 w-[175px] pl-3">Category</div>
        <div className="py-3 w-[175px] pl-3">Sale</div>
        <div className="py-3 w-[175px] pl-3">Rating</div>
        <div className="py-3 w-[175px] pl-3">Earning</div>
        <div className="py-3 w-[100px] pl-3">Visitor</div>
      </div>
      <div>
        <div>
          {CourseData.map((course, index) => (
            <CourseDetail key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseStatus;
