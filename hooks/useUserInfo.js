"use client";
import { auth } from "@/lib/firebase/firebase";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  // this useEffect is made to protect private routes
  // but issue is for public pages it redirects to login page.
  // so to solve it we will use below useEffect and in the component check in useEffect if user is null or not , if null redirect the user to /login (for private routes)

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //     } else {
  //
  //       router.push("/login");
  //     }
  //   });
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe(); // Cleanup the listener on component unmount
    };
  }, []);

  return user;
};

export default useUserInfo;
