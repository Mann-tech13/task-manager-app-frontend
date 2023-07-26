import axios from "axios";

export const registerAPI = async (values) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_API + `u/register`,
      values
    );
    return response;
  } catch (error) {
    return error;
  }
};

export const loginAPI = async (values) => {
    try {
      const response = await axios.post(
        process.env.REACT_APP_API + `u/login`,
        values
      );
      return response;
    } catch (error) {
      return error;
    }
  };
  