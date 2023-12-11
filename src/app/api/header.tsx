/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function header() {
  const [isFindShow, setIsFindShow] = useState(true);
  const [isHidden, setIsHidden] = useState(true);
  const currentPath = usePathname();

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

  return { isHidden, isFindShow, ClickBtn };
}
