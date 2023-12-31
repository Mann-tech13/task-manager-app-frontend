import React, { useState } from "react";
import Layout from "../layout/Layout";
import TaskModal from "../components/modal/TaskModal";
import DataDisplay from "../components/data/DataDisplay";
import { useEffect } from "react";
import { getAllTasksAPI } from "../apis/TaskPlaning/TaskAPI";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function TaskBoard() {
  const accessToken = useSelector((state) => state.accessToken.token);
  const navigate = useNavigate()
  const [addTaskModal, setAddTaskModal] = useState(false);
  const [APIResponseData, setAPIResponseData] = useState();
  const [updateDependency, setUpdateDependency] = useState(false)
  const [detailsModal, setDetailsModal] = useState(false)
  const [details, setDetails] = useState({})
  const [inheritType, setInheritType] = useState("")

  useEffect(() => {
    async function fetchData() {
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
    if(accessToken){
      fetchData();
    }
    else{
      navigate("/login")
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addTaskModal, accessToken, updateDependency]);

  return (
    <>
      <Layout>
        <div className="flex sm:flex-row flex-col gap-4 xl:justify-between sm:justify-start flex-wrap text-textDark xl:mt-5 sm:mt-28 mt-5">
          <DataDisplay
            isType="OPEN"
             detailsModal={setDetailsModal}
            data={APIResponseData}
            addTaskModal={setAddTaskModal}
            details={setDetails}
            dependency={setUpdateDependency}
            inheritType={setInheritType}
          />
          <DataDisplay isType="PROGRESS" data={APIResponseData} dependency={setUpdateDependency} detailsModal={setDetailsModal} details={setDetails} inheritType={setInheritType}/>
          <DataDisplay isType="RESOLVED" data={APIResponseData} dependency={setUpdateDependency} detailsModal={setDetailsModal} details={setDetails} inheritType={setInheritType}/>
        </div>
      </Layout>
      {addTaskModal && <TaskModal showModal={setAddTaskModal} isType="ADD" dependency={setUpdateDependency}/>}
      {detailsModal && (
        <TaskModal
          showModal={setDetailsModal}
          showDetails={true}
          isType={inheritType}
          data={details}
          dependency={setUpdateDependency}
        />
      )}
    </>
  );
}

export default TaskBoard;
