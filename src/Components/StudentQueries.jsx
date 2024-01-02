import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const StudentQueries = () => {
  return (
    <div className="w-full pr-8">
      <div className="font-bold flex justify-between pb-4 pb-1 mb-4 border-b-2">
        <span>Student Queries</span>
        <span>
          <MoreVertIcon />
        </span>
      </div>
      <div>
        <div className="flex justify-between items-center py-4 text-[12px]">
          <div className=" w-12">
            <img
              src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              className="rounded"
              alt=""
            />
          </div>
          <div>
            <div className="font-bold">Machine Learning Bootcamp</div>
            <div>By James Board</div>
          </div>
          <div className="flex">
            <div className="m-2 px-2 py-1 bg-purple-100 text-purple-800 rounded ">
              <button className="py-1 w-[80px]">View</button>
            </div>
            <div className="m-2 px-2 py-1 bg-red-100 text-red-800 rounded ">
              <button className="px-4 py-1">Decline</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 text-[12px]">
          <div className=" w-12">
            <img
              src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              className="rounded"
              alt=""
            />
          </div>
          <div>
            <div className="font-bold">Machine Learning Bootcamp</div>
            <div>By James Board</div>
          </div>
          <div className="flex">
            <div className="m-2 px-2 py-1 bg-emerald-100 text-green-800 rounded ">
              <button className="py-1 w-[80px]">Approval</button>
            </div>
            <div className="m-2 px-2 py-1 bg-red-100 text-red-800 rounded ">
              <button className="px-4 py-1">Decline</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 text-[12px]">
          <div className=" w-12">
            <img
              src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              className="rounded"
              alt=""
            />
          </div>
          <div>
            <div className="font-bold">Machine Learning Bootcamp</div>
            <div>By James Board</div>
          </div>
          <div className="flex">
            <div className="m-2 px-2 py-1 bg-emerald-100 text-green-800 rounded ">
              <button className="py-1 w-[80px]">Approval</button>
            </div>
            <div className="m-2 px-2 py-1 bg-red-100 text-red-800 rounded ">
              <button className="px-4 py-1">Decline</button>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pt-4 text-[12px]">
          <div className=" w-12">
            <img
              src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              className="rounded"
              alt=""
            />
          </div>
          <div>
            <div className="font-bold">Machine Learning Bootcamp</div>
            <div>By James Board</div>
          </div>
          <div className="flex">
            <div className="m-2 px-2 py-1 bg-emerald-100 text-green-800 rounded ">
              <button className="py-1 w-[80px]">Approval</button>
            </div>
            <div className="m-2 px-2 py-1 bg-red-100 text-red-800 rounded ">
              <button className="px-4 py-1">Decline</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentQueries;
