import axios from 'axios'
import ruta from './rutaNode'

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = ruta.ruta;

export default axiosInstance;