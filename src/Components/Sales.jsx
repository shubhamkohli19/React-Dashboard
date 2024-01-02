import React from "react";
import "../Styles/sales.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import weeklySales from "../Images/weeklySales.jpg";
import totalSales from "../Images/totalSales.jpg";

const Sales = () => {
  return (
    <div className="flex sales">
      <div className="w-64 border border-black">
        <div className="flex justify-between mx-1">
          <span className="font-bold">Sale</span>
          <span>
            <MoreVertIcon />
          </span>
        </div>
        <div className="w-48 mx-auto py-4">
          <img src={totalSales} alt="" />
        </div>
        <div className="px-4 pb-2">
          <div className=" flex  justify-between">
            <span>Current Week</span>
            <span>2000</span>
            <span>+0.3%</span>
          </div>
          <div className="flex justify-between">
            <span>Last Week</span>
            <span>1500</span>
            <span>-0.3%</span>
          </div>
        </div>
      </div>
      <div className="w-[420px] border border-black">
        <div className="flex font-bold justify-between pl-1">
          <span>Weekly Sales Stats</span>
          <span>
            <MoreVertIcon />
          </span>
        </div>
        <div className="">
          <img src={weeklySales} alt="" />
        </div>
        <div className="flex justify-between text-[12px]">
          <div className="h-4 w-12">
            <img
              src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="font-bold">Adobe XD Part 01</div>
            <div>UI/UX Design</div>
          </div>
          <div>
            <div className="m-2 border border-black px-2 py-1">$20</div>
          </div>
        </div>
        <div className="flex justify-between text-[12px]">
          <div className="h-4 w-12">
            <img
              src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="font-bold">Adobe XD Part 01</div>
            <div>UI/UX Design</div>
          </div>
          <div>
            <div className="m-2 border border-black px-2 py-1">$20</div>
          </div>
        </div>
        <div className="flex justify-between text-[12px]">
          <div className="h-4 w-12">
            <img
              src="https://i.pinimg.com/originals/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg"
              alt=""
            />
          </div>
          <div>
            <div className="font-bold">Adobe XD Part 01</div>
            <div>UI/UX Design</div>
          </div>
          <div>
            <div className="m-2 border border-black px-2 py-1">$20</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
