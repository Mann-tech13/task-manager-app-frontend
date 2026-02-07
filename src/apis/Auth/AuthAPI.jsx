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
    console.log(process.env.REACT_APP_API + `u/login`);

    const response = await axios.post(
      process.env.REACT_APP_API + `u/login`,
      values
    );
    console.log(response);
    
    return response;
  } catch (error) {    
    return error;
  }
};

export const profileAPI = async (accessToken) => {
  try {
    const response = await axios.get(process.env.REACT_APP_API + `u/profile`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response;
  } catch (error) {
    return error;
  }
};
