import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: import.meta.env.MODE === "deveopment" ? "http://localhost:5001/api" : "/",
    withCredentials: true,
})