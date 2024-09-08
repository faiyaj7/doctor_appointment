"use client";
import { auth } from "@/lib/firebase/firebase";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/navigation";

const useUserInfo = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        console.log("no user found");
        router.push("/login");
      }
    });

    return () => {
      unsubscribe(); // Cleanup the listener on component unmount
    };
  }, []);

  return user;
};

export default useUserInfo;
