import axios from "axios";

const url: string = "https://eco-fund-be.onrender.com";
//
export const createCampaign = async (data: string, userID: string) => {
  return await axios
    .post(`${url}/api/${userID}/create-beg`, data)
    .then((res) => {
      return res.data.data;
    });
};

export const getCampaign = async () => {
  return await axios.get(`${url}/api/view-beg`).then((res) => {
    return res.data.data;
  });
};
