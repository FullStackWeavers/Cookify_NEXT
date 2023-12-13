/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import axios from "../../axios_instance";

export const googleLogin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = sessionStorage.getItem("isLogin");
        console.log(token);
        
        if (token) {
          const response = await axios.get(`${BackendBaseURL}/api/auth/user`, {
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
      console.log(token);
      

      if (token) {
        await axios.post("http://localhost:8080/api/auth/logout", {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        localStorage.removeItem("accessToken");
      }
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  };

  return handleLogout;
};
