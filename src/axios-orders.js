import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://burgerbuilder-35f27-default-rtdb.firebaseio.com/",
});


export default axiosInstance;