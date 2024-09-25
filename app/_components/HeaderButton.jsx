"use client";
import { auth } from "@/lib/firebase/firebase";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { userLogOut } from "@/lib/firebase/auth";

import useUserInfo from "@/hooks/useUserInfo";
const HeaderButton = () => {
  const user = useUserInfo();
  // const [user, setUser] = useState();

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
  //     setUser(currentUser);
  //   });

  //   return () => {
  //     unsubscribe(); // Cleanup the listener on component unmount
  //   };
  // }, []);

  const loggingout = async () => {
    await userLogOut();
  };
  return (
    <>
      {user ? (
        <Popover>
          <PopoverTrigger>
            {user.photoURL ? (
              <Image
                src={user.photoURL}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <Image
                src={`https://ui-avatars.com/api/?background=48CFCB&name=${user.email}`}
                alt="profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
          </PopoverTrigger>
          <PopoverContent className="tracking-wide relative right-8 px-4 w-full cursor-pointer flex flex-col items-start ">
            <button className="hover:bg-slate-100 ">Profile</button>
            <Link
              href="/myProfile/booking-history"
              className="hover:bg-slate-100"
            >
              My Booking
            </Link>
            <button className="hover:bg-slate-100" onClick={loggingout}>
              Logout
            </button>
          </PopoverContent>
        </Popover>
      ) : (
        <Link
          className="bg-[#3FA2F6] text-white p-3 rounded-lg text-sm"
          href="/login"
        >
          Get Started
        </Link>
      )}
    </>
  );
};

export default HeaderButton;
