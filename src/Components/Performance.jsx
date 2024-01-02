import React from "react";
import "../Styles/performance.css";
import graph from "../Images/graph.png";
import revenueGraph from "../Images/revenueGraph.jpg";
import visitorsGraph from "../Images/visitorsGraph.jpg";

const Performance = () => {
  return (
    <div className="h-fit performance">
      <div className="flex m-8 font-bold text-[22px] pl-10">
        <div className="flex pl-6 pr-4 py-2 my-auto impression">
          <div>
            <div>Impressions</div>
            <div>832</div>
          </div>
          <div className="w-32">
            <img src={graph} alt="" />
          </div>
        </div>
        <div className="flex pl-6 pr-4 py-2 my-auto impression">
          <div>
            <div>Audience</div>
            <div>832</div>
          </div>
          <div className="w-32">
            <img src={graph} alt="" />
          </div>
        </div>
        <div className="flex pl-6 pr-4 py-2 my-auto impression">
          <div>
            <div>Engagements</div>
            <div>832</div>
          </div>
          <div className="w-32">
            <img src={graph} alt="" />
          </div>
        </div>
        <div className="flex pl-6 pr-4 py-2 my-auto impression">
          <div>
            <div>Engaged Audience</div>
            <div>832</div>
          </div>
          <div className="w-32">
            <img src={graph} alt="" />
          </div>
        </div>
      </div>
      <div className="h-fit flex justify-evenly">
        <div className="w-[800px] ">
          <img src={revenueGraph} alt="" />
        </div>
        <div className="w-[251px] ">
          <img src={visitorsGraph} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Performance;
