import React, { useState } from "react";
import Layout from "../components/layout/Layout";
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
        <div className="grid md:grid-cols-3 grid-rows-3 text-textDark mt-5 ">
          <DataDisplay
            isType="OPEN"
            data={APIResponseData}
            addTaskModal={setAddTaskModal}
          />
          <DataDisplay isType="PROGRESS" data={APIResponseData} />
          <DataDisplay isType="RESOLVED" data={APIResponseData} />
        </div>
      </Layout>
      {addTaskModal && <TaskModal showModal={setAddTaskModal} isType="ADD"/>}
    </>
  );
}

export default TaskBoard;
