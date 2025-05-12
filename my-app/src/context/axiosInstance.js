import axios from "axios";

// Creating axios instance with the deployed backend base URL
const axiosInstance = axios.create({
  baseURL: "https://fusioninvest-6hvf-git-main-vivekkk004s-projects.vercel.app/api",  // Deployed backend URL
  withCredentials: true,  // Allows cookies to be sent with the request (if needed)
});

export default axiosInstance;
