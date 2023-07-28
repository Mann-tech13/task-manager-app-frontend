import React, { useState } from "react";
import Layout from "../layout/Layout";
import TaskModal from "../components/modal/TaskModal";
import DataDisplay from "../components/data/DataDisplay";
import { useEffect } from "react";
import { getAllTasksAPI } from "../apis/TaskPlaning/TaskAPI";
import { useSelector } from "react-redux";

function TaskBoard() {
  const accessToken = useSelector((state) => state.accessToken.token);
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [APIResponseData, setAPIResponseData] = useState([]);
  const [updateDependency, setUpdateDependency] = useState(false)

  useEffect(() => {
    async function fetchData() {
      // let apiData = []
      const result = await getAllTasksAPI(accessToken);
      if(result?.status === 200){
        const priorityOrder = ["P1", "P2", "P3"];
        const sortByPriority = (a, b) => {
          const priorityA = priorityOrder.indexOf(a.priority);
          const priorityB = priorityOrder.indexOf(b.priority);
          return priorityA - priorityB;
        };
        let apiData = result?.data
        const sortedData = apiData.sort(sortByPriority)
        setAPIResponseData(sortedData);
      }
    }
    fetchData();
  }, [addTaskModal, accessToken, updateDependency]);

  return (
    <>
      <Layout>
        <div className="flex sm:flex-row flex-col gap-4 xl:justify-between sm:justify-start flex-wrap text-textDark xl:mt-5 sm:mt-28 mt-5">
          <DataDisplay
            isType="OPEN"
            data={APIResponseData}
            addTaskModal={setAddTaskModal}
            dependency={setUpdateDependency}
          />
          <DataDisplay isType="PROGRESS" data={APIResponseData} dependency={setUpdateDependency}/>
          <DataDisplay isType="RESOLVED" data={APIResponseData} dependency={setUpdateDependency}/>
        </div>
      </Layout>
      {addTaskModal && <TaskModal showModal={setAddTaskModal} isType="ADD"/>}
    </>
  );
}

export default TaskBoard;
