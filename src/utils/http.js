import axios from 'axios'
import ruta from './rutaNode'

const axiosInstance = axios.create();


axiosInstance.defaults.baseURL = `http://localhost:${ruta}`;

let col = localStorage.getItem('colegio');
if (col) {
    if (col.length > 0) {
        let colegio = JSON.parse(col);
        axiosInstance.defaults.baseURL = colegio.url_colegio;
    }
}
export default axiosInstance;