"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Path = () => {
  const path = usePathname();
  console.log(path);

  return path;
};

export default Path;
