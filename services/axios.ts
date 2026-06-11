/*
  api 호출 시 사용할 axios 기본 설정
*/

import axios from "axios";

export const api = axios.create({
  baseURL: process.env.TEST_API_URL,
  timeout: 3000,
});