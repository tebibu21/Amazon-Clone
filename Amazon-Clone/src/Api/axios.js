import axios from "axios"

const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-13cf4/us-central1/api",
  baseURL: "https://amazon-api-deploy-1-0arc.onrender.com",
});

export {axiosInstance};