/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Follow {
  follow4follow: Array<any>;
  followingCount: number;
  followingList: Array<any>;
}

export const myFollow = () => {
  const [isUserFollow, setIsUserFollow] = useState<Follow>({
    follow4follow: [],
    followingCount: 0,
    followingList: [],
  });

  const backendBaseURL = process.env.NEXT_PUBLIC_API_ENDPOINT;

  const followUser = (userId: any) => {
    axios
      .post(
        `${backendBaseURL}/follow/${userId}`,
        {},
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("API 호출 중 오류 발생:", error);
      });
  };

  useEffect(() => {
    const followData = () => {
      axios
        .get(`${backendBaseURL}/follow`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .then((response) => {
          setIsUserFollow(response.data);
        })
        .catch((error) => {
          console.error("API 호출 중 오류 발생:", error);
        });
    };

    followData();
  }, []);

  return { isUserFollow, backendBaseURL, followUser };
};
