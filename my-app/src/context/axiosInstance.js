import axios from "axios";

// Creating axios instance with the deployed backend base URL
const axiosInstance = axios.create({
  baseURL: "https://fusioninvest-uot5.onrender.com",  // Deployed backend URL
  withCredentials: true,  // Allows cookies to be sent with the request (if needed)
});

export default axiosInstance;
