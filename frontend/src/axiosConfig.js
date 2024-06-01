import axios from "axios";

const api = axios.create({
  baseURL: "https://project-final-rmn2.onrender.com/api",
});

export default api;
