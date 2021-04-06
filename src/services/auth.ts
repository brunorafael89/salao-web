export const TOKEN_KEY = "beauty-token";
export const setToken = (token: string) =>
  localStorage.setItem(TOKEN_KEY, token);
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const logout = () => localStorage.removeItem(TOKEN_KEY);