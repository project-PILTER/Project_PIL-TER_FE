/*
  api 호출 시 사용할 axios 기본 설정
*/

import axios from "axios";

export const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api`,
  timeout: 3000,
  withCredentials: true,
});