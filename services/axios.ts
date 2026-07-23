/*
  api 호출 시 사용할 axios 기본 설정
*/

import { useAuthStore } from "@/stores/authStore";
import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 5000,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if(token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
})