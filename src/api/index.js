import axios from "axios";

const api = axios.create({
    baseURL: "http://35.238.72.79:8002" ,
    // baseURL: "http://localhost:8002" ,
});

export default api;