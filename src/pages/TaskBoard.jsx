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
import { getAllTasks } from "../apis/TaskPlaning/TaskAPI";

function TaskBoard() {
  const [taskTodo, setTaskTodo] = useState([]);
  const [taskProgress, setTaskProgress] = useState([]);
  const [taskDone, setTaskDone] = useState([]);
  const [addTaskModal, setAddTaskModal] = useState(false)
  const [APIResponseData, setAPIResponseData] = useState([])

  useEffect(() => {
    async function fetchData(){
      const result = await getAllTasks()
      setAPIResponseData(result?.data)
    }
    fetchData()
  }, [])
  useEffect(() => {
    if(APIResponseData?.length > 0){
      APIResponseData.map((obj) => {
        if(obj?.category === "OPEN"){
          setTaskTodo([...taskTodo, obj])
        }
        else if(obj?.category === "PROGRESS"){
          setTaskProgress([...taskProgress, obj])
        }
        if(obj?.category === "RESOLVED"){
          setTaskDone([...taskDone, obj])
        }
      })
    }
  }, [APIResponseData])
  
  
  return (
    <>
    <Layout>
      <div className="grid grid-cols-3 text-textDark mt-5 ">
        <DataDisplay isType="TODO" data={taskTodo} addTaskModal={setAddTaskModal}/>
        <DataDisplay isType="PROGRESS" data={taskProgress}/>
        <DataDisplay isType="DONE" data={taskDone}/>
      </div>
    </Layout>
    {
      addTaskModal && <TaskModal showModal={setAddTaskModal}/>
    }
    </>
  );
}

export default TaskBoard;
