/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import {useRef, useState } from "react";
import axios from "axios";

interface RecipeSearch {
  recipeId: number;
  recipeDocsId: number;
  recipeTitle: string;
  recipeThumbnail: string;
  like: number;
}

export default function SearchRecipeApi() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipe, setIsRecipe] = useState<RecipeSearch[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isName, setIsName] = useState<string[]>([])
  const downContainerRef = useRef(null);

  const handleScroll = () => {
    const container = downContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      if (scrollHeight - scrollTop - clientHeight < 100 && !loading) {
        loadMoreData();
      }
    }
  };

  const loadMoreData = () => {
    setLoading(true);
    axios.get(`${BackendBaseURL}/recipe/search`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      params: {
        keyword: isName,
        page: currentPage,
      },
    })
      .then((response) => {
        const newData = response.data;
        if (newData.length == 20) {
          setIsRecipe(() => [...isRecipe, ...newData]);
          setCurrentPage(() => currentPage + 1);
        }
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const setName = async(e: string[]) => {
    setIsName(e)
    if(isName.length > 0){
     await axios.get(`${BackendBaseURL}/recipe/search`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        params: {
          keyword: "고추장",
          page: currentPage,
        },
      })
        .then((response) => {
          setIsRecipe(response.data);
          console.log(response.data);
          
        })
        .catch((error) => {
          console.error("API 호출 중 오류 발생:", error);
        });
    }
  }

  return {
    handleScroll,
    downContainerRef,
    isRecipe,
    setName
  }
}
