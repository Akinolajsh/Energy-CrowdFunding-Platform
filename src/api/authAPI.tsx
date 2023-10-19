import axios from "axios";

// const apiUrl: string = `https://ad40-105-113-108-231.ngrok.io`;
const apiUrl: string = `http://localhost:1000`;

export const registerAPI = async (data: any) => {
  try {
    return await axios.post(`${apiUrl}/api/register`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const verifyAPI = async (token: string) => {
  try {
    return await axios.get(`${apiUrl}/api/${token}/verify`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const signInAPI = async (data: any) => {
  try {
    return await axios.post(`${apiUrl}/api/sign-in`, data).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const resetPasswordAPI = async (data: any) => {
  try {
    return await axios
      .patch(`${apiUrl}/api/reset-user-password`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error: any) {
    console.log(error);
  }
};

export const changePasswordAPI = async (token: string, data: any) => {
  try {
    return await axios
      .post(`${apiUrl}/api/${token}/change-user-password`, data)
      .then((res: any) => {
        return res.data.data;
      });
  } catch (error) {
    console.log(error);
  }
};

export const viewOneAPI = async (_id: string) => {
  try {
    return await axios.get(`${apiUrl}/api/${_id}/one`).then((res: any) => {
      return res.data.data;
    });
  } catch (error: any) {
    console.log(error);
  }
};
