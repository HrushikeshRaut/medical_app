import axios from "axios";

const url1='http://192.168.0.102:3000';

export const getUsers = async()=>{
    console.log("data1");
    return await axios.get(`${url1}`);
}

export const resgisteradmin = async (body)=>{
    return await axios.post(`${url1}/register_admin`,body);
}