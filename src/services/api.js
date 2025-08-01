import axios from "axios"

const api = axios.create({
    baseURL: 'https://backend-portalturismo-9zcl.onrender.com/api'
})
export default api;