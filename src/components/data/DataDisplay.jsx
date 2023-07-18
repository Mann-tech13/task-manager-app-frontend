import React from "react";
import { LeftBackwardSVG, RightForwardSVG } from "../../assets/icons/icons";
import { updateTasksAPI } from "../../apis/TaskPlaning/TaskAPI";
// import rightForward from "../../assets/right-forward.svg";

function DataDisplay({ isType, data, addTaskModal }) {
  const handleTaskForwardStatus = async (taskId, data, event) => {
    event.stopPropogation()
    data.category = isType === "OPEN" ? "PROGRESS" : "RESOLVED";
    await updateTasksAPI(taskId, data);
  };
  const handleTaskBackwardStatus = async (taskId, data, event) => {
    event.stopPropogation()
    data.category = isType === "PROGRESS" ? "OPEN" : "PROGRESS";
    await updateTasksAPI(taskId, data);
  };
  const handleDataDetailsClick = () => {
    console.log("Hello World!");
  }
  return (
    <div className="flex flex-col gap-4 max-w-[300px]">
      <div className="flex flex-row justify-between items-center">
        {isType === "OPEN" ? (
          <>
            <p className="text-18-600">Todo</p>
            <p
              className="grid place-content-center bg-theme text-textPrimary rounded-full px-2 cursor-pointer"
              onClick={() => addTaskModal(true)}
            >
              +
            </p>
          </>
        ) : isType === "PROGRESS" ? (
          <p className="text-18-600">In Progress</p>
        ) : (
          <p className="text-18-600">Done</p>
        )}{" "}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data?.map((obj, i) => {
          return (
            <>
              {obj?.category === isType ? (
                <>
                  <div
                    key={i}
                    className="p-5 rounded-xl flex cursor-pointer flex-col gap-2 shadow-input-shadow bg-lightPrimary"
                    onClick={() => handleDataDetailsClick()}
                  >
                    <div className="flex flex-row justify-between">
                      <div
                        onClick={(event) => handleTaskBackwardStatus(obj?._id, obj, event)}
                      >
                        {isType !== "OPEN" ? (
                          <LeftBackwardSVG fill="#635fc7" />
                        ) : null}
                      </div>
                      <p
                        className={`text-20-600 ${
                          isType === "PROGRESS" ? "text-center" : "text-left"
                        } overflow-hidden overflow-ellipsis`}
                      >
                        {obj?.title}
                      </p>
                      <div
                        onClick={(event) => handleTaskForwardStatus(obj?._id, obj, event)}
                      >
                        {isType !== "RESOLVED" ? (
                          <RightForwardSVG fill="#635fc7" />
                        ) : null}
                      </div>
                    </div>

                    <div className="flex flex-row justify-between items-center">
                      <p className="text-quad text-15-500 ">
                        {" "}
                        {obj?.projectName}
                      </p>
                      <p className="text-Penta text-15-500 ">{obj?.priority}</p>
                    </div>
                  </div>
                </>
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default DataDisplay;
