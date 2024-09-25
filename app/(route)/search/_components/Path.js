"use client";
import { usePathname } from "next/navigation";
import React from "react";

const Path = () => {
  const path = usePathname();

  return path;
};

export default Path;
