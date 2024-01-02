import React from "react";

const CourseDetail = ({ course }) => {
  return (
    <div className="ml-16 flex">
      <div className="py-3 w-[350px] pl-3 flex items-center">
        <div className="w-12 mr-3">
            <img src={course.image} alt="" />
        </div>
        <div>
          <div className="font-semibold">{course.title}</div>
          <div className=" font-thin">{course.type}</div>
        </div>
      </div>
      <div className="py-3 w-[175px] pl-3 flex items-center font-semibold">
        {course.category}
      </div>
      <div className="py-3 w-[175px] pl-3 flex items-center font-semibold">
        {course.sale}
      </div>
      <div className="py-3 w-[175px] pl-3 flex items-center font-semibold">
        ⭐{course.rating}
      </div>
      <div className="py-3 w-[175px] pl-3 flex items-center font-semibold">
        {course.earning}
      </div>
      <div className="py-3 w-[100px] pl-3 flex items-center font-semibold">
        {course.visitor}
      </div>
    </div>
  );
};

export default CourseDetail;
