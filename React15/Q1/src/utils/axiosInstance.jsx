import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_FIREBASE_DB_URL,
});

export default axiosInstance;