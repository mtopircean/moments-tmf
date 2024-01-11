import axios from "axios";

axios.defaults.baseURL = 'https://drf-720f24919634.herokuapp.com/' /*link form to your app url */
axios.defaults.headers.post['Content-Type'] = 'mutipart/form-data' /*Data handled by form*/
axios.defaults.withCredentials = true /*to handle cookies*/

export const axiosReq = axios.create();
export const axiosRes = axios.create();