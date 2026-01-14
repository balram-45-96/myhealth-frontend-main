import axios from "axios";
import store from "@store/store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API_URL,
  timeout: 90000,
  headers: {
    "Content-Type": "application/json",
  },
  credentials: "include",
});
axiosInstance.interceptors.request.use(
  (config) => {
    const { token } = store.getState()?.auth;

    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accept-Language"] = "en-US";
    config.headers["x-path"] = `${window.location.pathname}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const url = new URL(window.location.href);
    const lastSegment = url.pathname
      .split("/")
      .filter((segment) => segment !== "")
      .pop();
    if (
      error.response &&
      error.response.status === 401 &&
      lastSegment !== "signin"
    ) {
      localStorage.clear();
      window.location.href = "/signin";
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
