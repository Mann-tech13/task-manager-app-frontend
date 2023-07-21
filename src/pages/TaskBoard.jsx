import React, { useState } from "react";
import Layout from "../layout/Layout";
import TaskModal from "../components/modal/TaskModal";
import DataDisplay from "../components/data/DataDisplay";
import { useEffect } from "react";
import { getAllTasksAPI } from "../apis/TaskPlaning/TaskAPI";

function TaskBoard() {
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [APIResponseData, setAPIResponseData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // let apiData = []
      const result = await getAllTasksAPI();
      if(result?.status === 200){
        // const priorityOrder = ["P1", "P2", "P3"];
        // const sortByPriority = (a, b) => {
        //   const priorityA = priorityOrder.indexOf(a.priority);
        //   const priorityB = priorityOrder.indexOf(b.priority);
        //   return priorityA - priorityB;
        // };
        // apiData = result?.data
        // const sortedData = apiData.sort(sortByPriority)
        setAPIResponseData(result?.data);
      }
    }
    fetchData();
  }, [addTaskModal, APIResponseData]);

  return (
    <>
      <Layout>
        <div className="flex sm:flex-row flex-col gap-4 justify-between flex-wrap text-textDark mt-5 ">
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
