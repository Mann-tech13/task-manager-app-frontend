import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import {
  mockTasksToDo,
  mockTasksInProgress,
  mockTasksDone,
} from "../mock/MOCK_TASKS";
// import TaskModal from "../components/modal/TaskModal";
import TaskModal from "../components/modal/TaskModal";

function TaskBoard() {
  const [mockTaskTodo, setMockTaskTodo] = useState(mockTasksToDo);
  const [mockTaskProgress, setMockTaskProgress] = useState(mockTasksInProgress);
  const [mockTaskDone, setMockTaskDone] = useState(mockTasksDone);
  const [addTaskModal, setAddTaskModal] = useState(false)
  return (
    <>
    <Layout>
      <div className="grid grid-cols-3 text-textDark mt-5 ">
        <div className="flex flex-col gap-4 max-w-[300px]">
          <div className="flex flex-row justify-between items-center">
            <p> Todo</p>
            <p className="grid place-content-center bg-theme text-textPrimary rounded-full px-2 cursor-pointer" onClick={() => setAddTaskModal(true)}>+</p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {mockTaskTodo.map((data, i) => {
              return (
                <div
                  key={i}
                  className="py-5 px-5 rounded-xl w-full hover:opacity-60 flex cursor-pointer hover:scale-95 flex-col gap-2 shadow-input-shadow bg-lightPrimary"
                >
                  <p className="text-20-600">{data?.task}</p>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-quad text-15-500 ">
                      {" "}
                      {data?.projectName}
                    </p>
                    <p className="text-Penta text-15-500 ">{data?.priority}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[300px]">
          <p>In Progress</p>
          <div className="grid grid-cols-1 gap-4">
            {mockTaskProgress.map((data, i) => {
              return (
                <div
                  key={i}
                  className="py-5 px-5 rounded-xl hover:opacity-60 flex cursor-pointer hover:scale-95 flex-col gap-2 shadow-input-shadow bg-lightPrimary"
                >
                  <p className="text-20-600">{data?.task}</p>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-quad text-15-500 ">
                      {" "}
                      {data?.projectName}
                    </p>
                    <p className="text-Penta text-15-500 ">{data?.priority}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-4 max-w-[300px]">
          <p>Done</p>
          <div className="grid grid-cols-1 gap-4">
            {mockTaskDone.map((data, i) => {
              return (
                <div
                  key={i}
                  className="py-5 px-5 rounded-xl hover:opacity-60 flex cursor-pointer hover:scale-95 flex-col gap-2 shadow-input-shadow bg-lightPrimary"
                >
                  <p className="text-20-600">{data?.task}</p>
                  <div className="flex flex-row justify-between items-center">
                    <p className="text-quad text-15-500 ">
                      {" "}
                      {data?.projectName}
                    </p>
                  
                    <p className="text-Penta text-15-500 ">{data?.priority}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
    {
      addTaskModal && <TaskModal showModal={setAddTaskModal}/>
    }
    </>
  );
}

export default TaskBoard;
