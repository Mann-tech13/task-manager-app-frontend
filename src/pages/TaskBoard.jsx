import React, { useState } from "react";
import Layout from "../components/layout/Layout";
// import {
//   mockTasksToDo,
//   mockTasksInProgress,
//   mockTasksDone,
// } from "../mock/MOCK_TASKS";
// import TaskModal from "../components/modal/TaskModal";
import TaskModal from "../components/modal/TaskModal";
import DataDisplay from "../components/data/DataDisplay";
import { useEffect } from "react";
import { getAllTasksAPI } from "../apis/TaskPlaning/TaskAPI";

function TaskBoard() {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [APIResponseData, setAPIResponseData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await getAllTasksAPI();
      setAPIResponseData(result?.data);
    }
    fetchData();
  }, [addTaskModal, APIResponseData]);

  return (
    <>
      <Layout>
        <div className="grid grid-cols-3 text-textDark mt-5 ">
          <DataDisplay
            isType="OPEN"
            data={APIResponseData}
            addTaskModal={setAddTaskModal}
          />
          <DataDisplay isType="PROGRESS" data={APIResponseData} />
          <DataDisplay isType="RESOLVED" data={APIResponseData} />
        </div>
      </Layout>
      {addTaskModal && <TaskModal showModal={setAddTaskModal} />}
    </>
  );
}

export default TaskBoard;
