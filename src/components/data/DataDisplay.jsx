import React from "react";
import { RightForwardSVG } from "../../assets/icons/icons";
import { updateTasksAPI } from "../../apis/TaskPlaning/TaskAPI";
// import rightForward from "../../assets/right-forward.svg";

function DataDisplay({ isType, data, addTaskModal }) {

  const handleTaskForwardStatus = async(taskId, data) => {
    data.category = isType === "OPEN" ? "PROGRESS" : "RESOLVED";
    await updateTasksAPI(taskId, data)
  }
  return (
    <div className="flex flex-col gap-4 max-w-[300px]">
      <div className="flex flex-row justify-between items-center">
        {isType === "OPEN" ? (
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
      <div className="grid grid-cols-1 gap-4">
        {data?.map((obj, i) => {
          return (
            <>
              {obj?.category === isType ? (
                <>
                  <div
                    key={i}
                    className="py-5 px-5 rounded-xl flex cursor-pointer flex-col gap-2 shadow-input-shadow bg-lightPrimary"
                  >
                    <div className="flex flex-row justify-between">
                      <p className="text-20-600">{obj?.title}</p>
                      <div onClick={() => handleTaskForwardStatus(obj?._id, obj)}><RightForwardSVG fill="#635fc7" /></div>
                      
                    </div>

                    <div className="flex flex-row justify-between items-center">
                      <p className="text-quad text-15-500 ">
                        {" "}
                        {obj?.projectName}
                      </p>
                      <p className="text-Penta text-15-500 ">
                        {obj?.priority}
                      </p>
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
