/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function footer() {
  const [isHidden, setIsHidden] = useState(true);
  const currentPath = usePathname();

  useEffect(() => {
    if (currentPath === "/start" || currentPath === "/mypage") {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }, [currentPath]);

  return { isHidden };
}
