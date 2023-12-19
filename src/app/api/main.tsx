"use client";
import { useEffect, useState } from "react";
import SearchRecipeApi from "./searchrecipe";
import axios from "axios";

export function Main() {
  const [isRecipeType, setIsRecipeType] = useState("brief");
  const [isSearchName, setIsSearchName] = useState<string[]>([])
  const [currentPage, setCurrentPage] = useState(0);
  const isImg = useState(["1", "2", "3", "4", "5", "6"])
  const [isImgCount, setisImgCount] = useState(0)

  const api = SearchRecipeApi();

  const likeTypeUser = () => {
    setCurrentPage(0);
    setIsRecipeType("brief");
  };
  const likeTypeDocs = () => {
    setCurrentPage(0);
    setIsRecipeType("recipe_docs");
  };
  const likeTypeSearch = () => {
    setCurrentPage(0);
    setIsRecipeType("search"); 
    api.setName(isSearchName)
  };

  const recipeSearch = (e: { target: { value: any; }; }) => {
    setIsSearchName(e.target.value)
  }

  const search = (e: { key: string; }) => {
    if (e.key === 'Enter') {
      likeTypeSearch();
    }
  }

  const searchBtn = () => {
    likeTypeSearch();
  }

  useEffect(() => {
    setTimeout(() => {
      isImgCount == 5 ? setisImgCount(0) : setisImgCount(isImgCount + 1)
    }, 4000)
  }, [isImgCount])

  return {
    isImg,
    isImgCount,
    isRecipeType,
    currentPage,
    isSearchName,
    likeTypeUser,
    likeTypeDocs,
    setIsRecipeType,
    likeTypeSearch,
    search,
    recipeSearch,
    searchBtn,
  };
}



