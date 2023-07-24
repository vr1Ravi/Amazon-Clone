import axios from "axios";

const instance = axios.create({
  baseURl: "...", // api url
});
export default instance;
