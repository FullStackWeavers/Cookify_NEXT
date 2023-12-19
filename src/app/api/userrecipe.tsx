/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useEffect, useRef, useState } from "react";
import axios from "axios";
import useWebSocket from "react-use-websocket";


interface Recipe {
  recipeId: number;
  title: string;
  thumbnail: string;
  like: number;
}

export default function UserRecipeApi() {
  const BackendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;
  const [isRecipe, setIsRecipe] = useState<Recipe[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const downContainerRef = useRef(null);
  const { sendJsonMessage } = useWebSocket(
    "ws://localhost:8080/push",
    {
      onMessage: (event) => {
        console.log("Received WebSocket Message:", event.data);
      },
    }
  );


  const likeBtn = async (recipeId: number, index: number) => {
    await axios
      .post(
        `${BackendBaseURL}/heart/${recipeId}`, {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        axios.get(`${BackendBaseURL}/heart/${recipeId}`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }).then((response) => {
          const data = [...isRecipe]
          data[index].like = response.data.heartCount
          setIsRecipe(data)
        }).catch((error) => {
          console.error("API 호출 중 오류 발생:", error);
        })
        const message = {
          category: "like",
          writer: response.data.memberName,
          receiver: response.data.recipeMemberName,
          recipeId: response.data.recipeId,
          title: response.data.recipeName,
        };
        sendJsonMessage(message);
  })
      .catch ((error) => {
    console.error("API 호출 중 오류 발생:", error);
  });
};

const likeNumber = async (recipeData: any) => {
  try {
    const likeRecipe = recipeData.map(async (value: any) => {
      const response = await axios.get(`${BackendBaseURL}/heart/${value.recipeId}`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const heartCount = response.data.heartCount;
      return { ...value, like: heartCount };
    });
    const recipe = await Promise.all(likeRecipe);
    setIsRecipe(recipe)
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
  }
};

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
    .get(`${BackendBaseURL}/recipe/brief`, {
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
    .get(`${BackendBaseURL}/recipe/brief`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
    .then((response) => {
      likeNumber(response.data)
    })
    .catch((error) => {
      console.error("API 호출 중 오류 발생:", error);
    });
}, []);

return {
  likeBtn,
  handleScroll,
  downContainerRef,
  isRecipe,
  currentPage,
  loading
}
}
