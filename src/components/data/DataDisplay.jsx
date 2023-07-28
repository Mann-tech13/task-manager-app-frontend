import React, { useState } from "react";
import { LeftBackwardSVG, RightForwardSVG } from "../../assets/icons/icons";
import {
  deleteResolvedTasksAPI,
  getTaskAPI,
  updateTasksAPI,
} from "../../apis/TaskPlaning/TaskAPI";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import TaskModal from "../modal/TaskModal";
import { useSelector } from "react-redux";

// import rightForward from "../../assets/right-forward.svg";

function DataDisplay({ isType, data, addTaskModal, dependency }) {
  const accessToken = useSelector((state) => state.accessToken.token);
  const [details, setDetails] = useState({});
  const [detailsModal, setDetailsModal] = useState(false);

  const handleTaskForwardStatus = async (taskId, data, event) => {
    event.stopPropagation();
    data.category = isType === "OPEN" ? "PROGRESS" : "RESOLVED";
    await updateTasksAPI(taskId, data, accessToken);
    dependency((val) => !val)
  };
  const handleTaskBackwardStatus = async (taskId, data, event) => {
    event.stopPropagation();
    data.category = isType === "PROGRESS" ? "OPEN" : "PROGRESS";
    await updateTasksAPI(taskId, data, accessToken);
    dependency((val) => !val)
  };
  const handleDataDetailsClick = async (id) => {
    const result = await getTaskAPI(id, accessToken);
    if (result.status === 200) {
      setDetails(result?.data);
      setDetailsModal(true);
    }
  };
  const clearResolvedTask = async () => {
    await deleteResolvedTasksAPI(accessToken);
  };
  return (
    <div className="flex flex-col gap-4 md:w-[350px] w-full">
      <div className="flex flex-row justify-between items-center md:w-[350px]">
        {isType === "OPEN" ? (
          <>
            <p className="text-18-600">Todo</p>
            <p
              className="grid place-content-center bg-theme text-primary rounded-full px-2 cursor-pointer"
              onClick={() => addTaskModal(true)}
            >
              +
            </p>
          </>
        ) : isType === "PROGRESS" ? (
          <p className="text-18-600">In Progress</p>
        ) : (
          <>
            <p className="text-18-600">Done</p>
            <p
              className="text-linkLine text-12-500 underline cursor-pointer"
              onClick={clearResolvedTask}
            >
              Clear all
            </p>
          </>
        )}{" "}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {data?.length === 0 ? (
          <div className="text-18-600 mt-6 text-themeHover mb-6">NO TASK FOUND</div>
        ) : data?.length > 0 ? (
          data?.map((obj, i) => {
            return (
              <>
                {obj?.category === isType ? (
                  <>
                    <div
                      key={i}
                      className={`p-5 rounded-xl flex cursor-pointer h-[248px] flex-col justify-between shadow-input-shadow bg-primary ${
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
                        {isType !== "OPEN" ? (
                          <div
                            onClick={(event) =>
                              handleTaskBackwardStatus(obj?._id, obj, event)
                            }
                          >
                            <LeftBackwardSVG fill="#635fc7" />
                          </div>
                        ) : null}
                        <p
                          className={`text-20-600 ${
                            isType === "PROGRESS" ? "text-center" : "text-left"
                          } overflow-hidden max-h-[48px] overflow-ellipsis`}
                        >
                          {obj?.title}
                        </p>
                        {isType !== "RESOLVED" ? (
                          <div
                            onClick={(event) =>
                              handleTaskForwardStatus(obj?._id, obj, event)
                            }
                          >
                            <RightForwardSVG fill="#635fc7" />
                          </div>
                        ) : null}
                      </div>

                      <div className="my-4">
                        <p className="overflow-hidden  max-h-[98px] overflow-ellipsis">
                          {obj?.description}
                        </p>
                      </div>

                      <div className="flex flex-row justify-between items-center">
                        <p className="text-quad text-15-500 ">
                          {" "}
                          {obj?.projectName}
                        </p>
                        <p
                          className={`text-textDark text-15-500 p-1 rounded-full ${
                            isType === "OPEN"
                              ? "bg-theme"
                              : isType === "PROGRESS"
                              ? "bg-progressTheme"
                              : isType === "RESOLVED"
                              ? "bg-resolvedTheme"
                              : ""
                          }`}
                        >
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
          dependency={dependency}
        />
      )}
    </div>
  );
}

export default DataDisplay;
