"use client";
import { useEffect, useState } from "react";

export function Main() {
    const [isRecipeType, setIsRecipeType] = useState("brief");
    const [currentPage, setCurrentPage] = useState(0);
    const isImg = useState(["1", "2", "3", "4", "5", "6"])
    const [isImgCount, setisImgCount] = useState(0)

    const likeTypeUser = () => {
        setCurrentPage(0);
        setIsRecipeType("brief");
      };
      const likeTypeDocs = () => {
        setCurrentPage(0);
        setIsRecipeType("recipe_docs");
      };

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
    likeTypeUser, 
    likeTypeDocs
  };
}



