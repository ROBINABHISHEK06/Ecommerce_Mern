import axios from "axios";

const BASE_URL = "https://ecommerce-mern-9k3m.vercel.app/api/"
const Token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1NzZiZjBlNjJiYTMwODU1YmE4MWI5NSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwMjg4Njc1NCwiZXhwIjoxNzAzMTQ1OTU0fQ.K9BaMOl446S4xXRF13MsilGESUKifW5_XUB8u6Q9Tek"


export const publicRequest = axios.create({
    baseURL: BASE_URL,
  });
  
  export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${Token}` },
  });