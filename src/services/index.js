import API from "../config/api";
import { getToken } from '../utils/storage';

export const logon = (email, password) => API.post("/token", { email, password });

export const getUser = () => API.get("/person/me", { 
  headers: {
    Authorization: `Bearer ${getToken("token")}`,
  }
})