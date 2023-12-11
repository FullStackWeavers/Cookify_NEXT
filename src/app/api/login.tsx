/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import axios from "../../axios_instance";

export const googleLogin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");

        if (token) {
          const response = await axios.get("/api/auth/user", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          setIsAuthenticated(response.status === 200);
        }
      } catch (error: any) {
        console.error("Error checking authentication:", error.message);
      }
    };

    fetchData();
  }, []);

  return isAuthenticated;
};

export const handleLogin = () => {
  window.location.href = "http://localhost:8080/oauth2/authorization/google";
};

export const handleLogout = () => {
  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      if (token) {
        await axios.post("/api/auth/logout", null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        localStorage.removeItem("accessToken");
      }
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  };

  return handleLogout;
};
