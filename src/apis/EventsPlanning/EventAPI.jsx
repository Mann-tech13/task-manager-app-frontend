import axios from "axios";

export const getAllEventsAPI = async (accessToken) => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_API + `c/getEvents`,
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

export const addNewEventAPI = async (accessToken, values) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + `c/addEvent`,
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

// export const updateEventAPI = async (id, values) => {
//   try {
//     const response = await axios.put(process.env.REACT_APP_API + `t/updateTask/${id}`, values);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };

// export const deleteEventAPI = async (id) => {
//   try {
//     const response = await axios.delete(process.env.REACT_APP_API + `t/deleteTasks/${id}`);
//     return response;
//   } catch (error) {
//     return error;
//   }
// };
