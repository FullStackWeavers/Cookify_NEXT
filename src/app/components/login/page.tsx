import React, { useState, useEffect } from "react";
import axios from "../../../axios_instance";

const checkBackendAuthentication = async (
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
) => {
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

const Login = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkBackendAuthentication(setIsAuthenticated);
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:8080/oauth2/authorization/google";
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("accessToken");

      if (token) {
        await axios.post("/api/auth/logout", null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }

      localStorage.removeItem("accessToken");
      setIsAuthenticated(false);
    } catch (error: any) {
      console.error("Error logging out:", error.message);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <p>Welcome! You are logged in.</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to continue.</p>
          <button onClick={handleLogin}>Login with Google</button>
        </div>
      )}
    </div>
  );
};

export default Login;
