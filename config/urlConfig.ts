const baseUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5050"
    : "http://meet-up-dev.com:5050";
const api = "/api";
const stage = "/v1";
export const url = baseUrl + api + stage;