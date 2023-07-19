import React, { useState } from "react";
import { LeftBackwardSVG, RightForwardSVG } from "../../assets/icons/icons";
import { getTaskAPI, updateTasksAPI } from "../../apis/TaskPlaning/TaskAPI";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TaskModal from "../modal/TaskModal";

// import rightForward from "../../assets/right-forward.svg";

function DataDisplay({ isType, data, addTaskModal }) {
  const [details, setDetails] = useState({});
  const [detailsModal, setDetailsModal] = useState(false);

  const handleTaskForwardStatus = async (taskId, data, event) => {
    event.stopPropagation();
    data.category = isType === "OPEN" ? "PROGRESS" : "RESOLVED";
    await updateTasksAPI(taskId, data);
  };
  const handleTaskBackwardStatus = async (taskId, data, event) => {
    event.stopPropagation();
    data.category = isType === "PROGRESS" ? "OPEN" : "PROGRESS";
    await updateTasksAPI(taskId, data);
  };
  const handleDataDetailsClick = async (id) => {
    const result = await getTaskAPI(id);
    if (result.status === 200) {
      setDetails(result.data);
      setDetailsModal(true);
    }
  };
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
        {data?.length > 0 ? (
          data?.map((obj, i) => {
            return (
              <>
                {obj?.category === isType ? (
                  <>
                    <div
                      key={i}
                      className={`p-5 rounded-xl flex cursor-pointer flex-col gap-2 shadow-input-shadow bg-lightPrimary ${
                        isType === "OPEN"
                          ? "border-b-theme border-2"
                          : isType === "PROGRESS"
                          ? "border-b-progressTheme border-2"
                          : isType === "RESOLVED"
                          ? "border-b-resolvedTheme border-2"
                          : ""
                      }`}
                      onClick={() => handleDataDetailsClick(obj._id)}
                    >
                      <div className="flex flex-row justify-between">
                        <div
                          onClick={(event) =>
                            handleTaskBackwardStatus(obj?._id, obj, event)
                          }
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
                          onClick={(event) =>
                            handleTaskForwardStatus(obj?._id, obj, event)
                          }
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
                        <p className="text-Penta text-15-500 ">
                          {obj?.priority}
                        </p>
                      </div>
                    </div>
                  </>
                ) : null}
              </>
            );
          })
        ) : (
          <SkeletonTheme baseColor="#e0dff7" highlightColor="#bebbf0">
            <p>
              <Skeleton count={3} />
            </p>
          </SkeletonTheme>
        )}
      </div>
      {detailsModal && (
        <TaskModal
          showModal={setDetailsModal}
          showDetails={true}
          isType={isType}
          data={details}
        />
      )}
    </div>
  );
}

export default DataDisplay;
