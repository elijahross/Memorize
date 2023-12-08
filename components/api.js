import axios from "axios";

axios.defaults.headers.common["x-api-key"] = process.env.API_KEY;
const api = axios.create({
  baseURL: process.env.API_LINK,
  timeout: 3000,
});

export default api;
