/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";

interface Recipe {
    recipeId: number;
    title: string;
    thumbnail: string;
    like: number;
}

export default function DocsRecipeApi() {
    const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const [isRecipe, setIsRecipe] = useState<Recipe[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
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
        axios
            .get(`${BackendBaseURL}/recipe/recipe_docs`, {
                headers: {
                    "Content-Type": "application/json",
                },
                params: { page: currentPage + 1 },
                withCredentials: true,
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

    useEffect(() => {
        axios
            .get(`${BackendBaseURL}/recipe/recipe_docs`, {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            })
            .then((response) => {
                setIsRecipe(response.data)
            })
            .catch((error) => {
                console.error("API 호출 중 오류 발생:", error);
            });
    }, []);

    return {
        handleScroll,
        loadMoreData,
        isRecipe,
        currentPage,
        loading,
        downContainerRef
    }
}
