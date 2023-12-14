/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import axios from "../../axios_instance";

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
