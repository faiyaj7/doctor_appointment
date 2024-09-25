"use client";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { signInUser, signInWithGoogle } from "@/lib/firebase/auth";

import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import Image from "next/image";
const Login = () => {
  const user = useUserInfo();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [hidden, setHidden] = useState(true);
  const router = useRouter(); // Initialize useRouter

  // redirecting user to homepage if logged in.
  useEffect(() => {
    // Check if the user is already authenticated
    if (user) {
      router.back(); // Redirect to the previous page if authenticated
    }
  }, [user, router]);

  const signIn = async () => {
    const response = await signInUser(email, password);
  };
  const handleAuthWithGoogle = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };
  return (
    <div className="flex w-[75%] mx-auto items-center justify-around mt-16 ">
      {/* Left Part (Login email and password input) */}
      <div className="w-1/2">
        <Image
          src="/doctorGroup.jpg"
          alt="login-doctorImage"
          width={420}
          height={420}
          className="w-full rounded-2xl"
        />
      </div>
      {/* Right Part (Login email and password input) */}
      <div className="flex items-center justify-center flex-col gap-5">
        <h1 className="font-semibold tracking-wide text-6xl">Welcome Back!</h1>
        <h4 className=" text-sm">Please Enter your details</h4>
        {/* Email */}
        <Input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* Password */}
        <div className="relative w-full">
          <Input
            placeholder="password"
            type={hidden ? "password" : "text"}
            onChange={(e) => setPassword(e.target.value)}
          />
          {hidden ? (
            <FaEyeSlash
              className="absolute right-4 bottom-0 top-[50%] -translate-y-[50%] cursor-pointer"
              onClick={() => setHidden(false)}
            />
          ) : (
            <IoEyeSharp
              className="absolute right-4 bottom-0 top-[50%] -translate-y-[50%] cursor-pointer"
              onClick={() => setHidden(true)}
            />
          )}
        </div>

        <Button
          className="w-full bg-black text-white rounded-2xl hover:bg-black"
          onClick={signIn}
        >
          Log In
        </Button>

        {/* Google Signin Button  */}
        <div className="flex items-center justify-center relative w-full rounded-2xl ">
          <FcGoogle className="absolute left-[20%] lg:left-[30%] cursor-pointer" />
          <Button
            onClick={handleAuthWithGoogle}
            className="bg-slate-200 text-black w-full hover:bg-slate-300"
          >
            Log In With Google
          </Button>
        </div>

        {/* Don't have an account */}
        <Link
          href="/register"
          className="flex items-center justify-center mt-5"
        >
          Don&apos;t have an account? Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Login;
