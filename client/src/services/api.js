import axios from 'axios';

const api = axios.create({ baseURL: "http://localhost:8000" });

export async function signup({ name, nickname, email, password }){
  return api.post("/auth/signup", { name, nickname, email, password });
}

export async function login({ nicknameOrEmail, password }){
  return api.post("/auth/login", { nicknameOrEmail, password });
}