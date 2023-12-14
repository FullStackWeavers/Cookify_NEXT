/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import axios from "axios";

export function header() {
  const [isFindShow, setIsFindShow] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const [isSearchRecipe, setIsSearchRecipe] = useState<string[]>([])
  const currentPath = usePathname();

  const recipeSearch = (e: { target: { value: any; }; }) => {
    const name = [...isSearchRecipe]
    name[0] = e.target.value;
    setIsSearchRecipe(name)
  }

  const searchBtn = () => {
    console.log(isSearchRecipe);
    
    axios.get("http://localhost:8080/recipe/search", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
        params: {
          keyword: isSearchRecipe[0],
          page: 0,
        },
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });

  }

  const ClickBtn = () => {
    if (isFindShow === true) {
      setIsFindShow(false);
    } else {
      setIsFindShow(true);
    }
  };

  useEffect(() => {
    setIsFindShow(true);
    if (currentPath == "/start" || currentPath == "/mypage") {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, []);

  return { isHidden, isFindShow, ClickBtn, recipeSearch, searchBtn };
}
