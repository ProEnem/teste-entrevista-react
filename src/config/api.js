import axios from "axios";

const api = axios.create({
  baseURL: "https://staging.api.prodigioeducacao.com/v1",
  headers: { "X-Brand": "proenem" },
});

export default api;
