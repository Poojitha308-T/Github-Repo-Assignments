import axios from "axios";

const API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const AUTH_URL = "https://identitytoolkit.googleapis.com/v1";

export const signup = (email, password) =>
  axios.post(`${AUTH_URL}/accounts:signUp?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });

export const login = (email, password) =>
  axios.post(`${AUTH_URL}/accounts:signInWithPassword?key=${API_KEY}`, {
    email,
    password,
    returnSecureToken: true,
  });