import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-26395/us-central1/api", // api url
});
export default instance;
