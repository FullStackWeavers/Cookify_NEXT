import axios from "axios";

const instance = axios.create({
  withCredentials: true, // CORS 설정
});

export default instance;
