import axios from "axios";

export const getAllTasksAPI = async () => {
  console.log(process.env.REACT_APP_API);
  try {
    const response = await axios.get(process.env.REACT_APP_API + `t/getTasks`);
    return response;
  } catch (error) {
    return error;
  }
};

export const getTaskAPI = async (id) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API + `t/getTask/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};

export const addNewTaskAPI = async (values) => {
  try {
    const response = await axios.post(process.env.REACT_APP_API + `t/addTasks`, values);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateTasksAPI = async (id, values) => {
  try {
    const response = await axios.put(process.env.REACT_APP_API + `t/updateTask/${id}`, values);
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteTaskAPI = async (id) => {
  try {
    const response = await axios.delete(process.env.REACT_APP_API + `t/deleteTasks/${id}`);
    return response;
  } catch (error) {
    return error;
  }
};
