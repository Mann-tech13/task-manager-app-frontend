import React from "react";
import { RightForwardSVG } from "../../assets/icons/icons";
// import rightForward from "../../assets/right-forward.svg";

function DataDisplay({ isType, data, addTaskModal }) {
  return (
    <div className="flex flex-col gap-4 max-w-[300px]">
      <div className="flex flex-row justify-between items-center">
        {isType === "TODO" ? (
          <>
            <p>Todo</p>
            <p
              className="grid place-content-center bg-theme text-textPrimary rounded-full px-2 cursor-pointer"
              onClick={() => addTaskModal(true)}
            >
              +
            </p>
          </>
        ) : isType === "PROGRESS" ? (
          <p>In Progress</p>
        ) : (
          <p>Done</p>
        )}{" "}
      </div>
      {console.log(data)}
      <div className="grid grid-cols-1 gap-4">
        {data.map((data, i) => {
          return (
            <div
              key={i}
              className="py-5 px-5 rounded-xl hover:opacity-60 flex cursor-pointer hover:scale-95 flex-col gap-2 shadow-input-shadow bg-lightPrimary"
            >
              <div className="flex flex-row justify-between">
                <p className="text-20-600">{data?.title}</p>
                {/* <img
                  src={rightForward}
                  alt="click to swipe"
                  className="w-fit"
                /> */}
              <RightForwardSVG fill="#635fc7"/>
              </div>

              <div className="flex flex-row justify-between items-center">
                <p className="text-quad text-15-500 "> {data?.projectName}</p>
                <p className="text-Penta text-15-500 ">{data?.priority}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DataDisplay;
