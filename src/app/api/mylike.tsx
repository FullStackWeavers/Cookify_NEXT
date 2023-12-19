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

export default function myLike() {
  const [isCount, setIsCount] = useState(0);
  const [isLikeRecipe, setIsLikeRecipe] = useState<Recipe[]>([]);

  const backendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

  useEffect(() => {
    axios
      .get(`${backendBaseURL}/heart/myRecipe`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })
      .then((response) => {
        setIsLikeRecipe(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  }, []);

  return { isCount, isLikeRecipe, backendBaseURL };
}
