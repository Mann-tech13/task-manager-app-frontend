import axios from "axios";

export const getAllTasks = async () => {
  try {
    const response = await axios.get(process.env.REACT_APP_API + `t/getTasks`);
    return response;
  } catch (error) {
    return error
  }
};
