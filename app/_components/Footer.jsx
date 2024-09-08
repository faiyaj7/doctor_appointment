import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { FaFacebook, FaYoutube, FaInstagram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-slate-200 relative h-[90vh]">
      {/* divider */}
      <div className="custom-shape-divider-top-1724690380">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      {/* Footer Container */}
      <div className="flex items-center justify-center flex-col gap-10  absolute top-[50%] left[50%] -translate-y-[50%] w-full mt-20">
        {/* Logo */}
        {/* absolute bottom-[50%] left-[50%] -translate-x-[50%] */}
        <div className="flex items-center justify-center ">
          <Logo />
        </div>
        {/* paragraph */}
        {/* absolute bottom-[35%] left-[50%] -translate-x-[50%] */}
        <p className=" font-light w-1/2 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam vel
          rerum tempora neque minus, explicabo dignissimos sequi culpa delectus
          commodi?
        </p>
        {/* Menu */}
        {/* absolute bottom-[22%] left-[50%] -translate-x-[50%] */}
        <div className="grid grid-cols-3 lg:grid-cols-6 flex-col lg:flex-row gap-16  font-medium ">
          <Link href="/about" className="">
            About
          </Link>
          <Link href="/career">Career</Link>
          <Link href="/history">History</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/blogs">Blogs</Link>
        </div>
        {/*  absolute bottom-[10%] left-[50%] -translate-x-[50%] */}
        <div className="flex items-center justify-center gap-8 font-medium ">
          <Link href="/about" className="">
            <FaFacebook size={20} />
          </Link>
          <Link href="/career">
            <FaYoutube size={20} />
          </Link>
          <Link href="/history">
            <FaInstagram size={20} />
          </Link>
          <Link href="/services">
            <FaXTwitter size={20} />
          </Link>
          <Link href="/projects">
            <FaGithub size={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
