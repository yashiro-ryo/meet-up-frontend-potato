import axiosBase from "axios";
import { url } from "./urlConfig";

const axios = axiosBase.create({
  baseURL: url,
});

export default axios;
