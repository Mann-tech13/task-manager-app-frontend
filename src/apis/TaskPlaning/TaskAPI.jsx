import axios from "axios";

export const getAllTasksAPI = async (accessToken) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API + `t/getTasks`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};

export const getTaskAPI = async (id, accessToken) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API + `t/getTask/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const addNewTaskAPI = async (values, accessToken) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + `t/addTasks`,
      values,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const updateTasksAPI = async (id, values, accessToken) => {
  try {
    const response = await axios.put(
      process.env.REACT_APP_API + `t/updateTask/${id}`,
      values,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteTaskAPI = async (id, accessToken) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API + `t/deleteTasks/${id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const deleteResolvedTasksAPI = async (accessToken) => {
  try {
    const response = await axios.delete(
      process.env.REACT_APP_API + `t/delete/resolved`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
