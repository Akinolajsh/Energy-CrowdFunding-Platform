import axios from "axios"

const url:string= "http://localhost:1000"
// const url:string= "https://2516-105-113-32-86.ngrok.io"
// 
export const createCampaign= async(data:string, userID:string)=>{
return await axios.post(`${url}/api/${userID}/create-beg`, data).then((res)=>{
    return res.data.data
})
}

export const getCampaign= async()=>{
return await axios.get(`${url}/api/view-beg`).then((res)=>{
    return res.data.data
})
}