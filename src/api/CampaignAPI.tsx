import axios from "axios";

const url: string = "https://eco-fund-be.onrender.com";
//
export const createCampaign = async (data: string, userID: string) => {
  const config: any = {
    "content-type": "multipart/form-data",
  };
  return await axios
    .post(`${url}/api/${userID}/create-beg`, data, config)
    .then((res) => {
      console.log(res);
      return res.data.data;
    });
};

export const getCampaign = async () => {
  return await axios.get(`${url}/api/view-beg`).then((res) => {
    return res.data.data;
  });
};

export const getOneCampaign = async (projectID:string) => {
  return await axios.get(`${url}/api/${projectID}/view-one-beg`).then((res) => {
    return res.data.data;
  });
};

// export const getCampaign = async () => {
//   return await axios.get(`${url}/api/view-beg`).then((res) => {
//     return res.data.data;
//   });
// };
