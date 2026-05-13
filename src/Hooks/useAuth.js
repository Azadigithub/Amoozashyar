import { useState, useEffect } from "react";
import { logoutUser } from "../API/auth";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("access");
    setIsAuthenticated(!!token);
  }, []);

  const logout = () => {
    logoutUser();
    setIsAuthenticated(false);
  };

  return { isAuthenticated, logout };
};