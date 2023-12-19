/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Recipe {
  recipeId: number;
  title: string;
  thumbnail: string;
}

export default function myRecipe() {
  const [isMyRecipe, setIsMyRecipe] = useState<Recipe[]>([]);

  const backendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

  useEffect(() => {
    axios
      .get(`${backendBaseURL}/recipe/myRecipe`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setIsMyRecipe(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);

  return { isMyRecipe, backendBaseURL };
}
