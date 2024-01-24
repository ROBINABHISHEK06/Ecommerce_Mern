import axios from "axios";

const BASE_URL = "https://ecommerce-mern-vmnv.vercel.app/api/";
const Token = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
  .currentUser?.accessToken;
console.log(Token);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${Token}` },
});
