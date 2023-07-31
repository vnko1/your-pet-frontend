import axios from "axios";
import { refreshToken } from "../../redux/auth/auth-operations";

const baseURL = "https://my-pet-app-8sz1.onrender.com";

export const axiosPublic = axios.create({
  baseURL,
});

export const axiosPrivate = axios.create({
  baseURL,
});

export const interceptor = (store) => {
  axiosPrivate.interceptors.request.use(
    async (config) => {
      const auth = store?.getState()?.auth;
      if (auth?.token) {
        const currentDate = new Date();
        const tokenLifeTime = new Date(auth.tokenLifeTime);

        if (currentDate >= tokenLifeTime) {
          await store.dispatch(refreshToken());
          if (config?.headers) {
            config.headers["Authorization"] = `Bearer ${
              store.getState().auth.token
            }`;
          }
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
