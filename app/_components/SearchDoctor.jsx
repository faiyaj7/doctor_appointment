"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React, { useEffect, useState } from "react";
import { getCategory } from "../_utils/GlobalApi";
import Image from "next/image";
import Link from "next/link";
import { getCategories } from "../actions/globalServerApi";

const SearchDoctor = () => {
  const [doctorCategories, setDoctorCategories] = useState([]);
  useEffect(() => {
    getCategoryList();
  }, []);
  const getCategoryList = async () => {
    const response = await getCategories();
    //
    setDoctorCategories(response);
  };

  return (
    <section className="flex items-center justify-center w-full flex-col gap-5">
      {/* Heading */}
      <h1 className="text-5xl font-bold ">
        Search <span className="text-blue-500">Doctors</span>
      </h1>
      <p className="font-medium">
        Search your Doctor and Book Appointment in{" "}
        <span className="text-blue-500 text-2xl tracking-widest">O</span>ne
        Click
      </p>
      {/* User Input */}
      <div className="flex gap-5">
        <Input type="email" placeholder="Search Here" />
        <Button>Search</Button>
      </div>
      {/* Display list of Doctor Categories */}{" "}
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-3/4 place-items-center gap-5 ">
        {doctorCategories.length > 0 &&
          doctorCategories.slice(0, 6).map((item) => (
            <Link
              href={`/search/${item.Name}`}
              key={item.id}
              className="flex items-center justify-center flex-col bg-blue-50 hover:bg-blue-200 transition-all hover:scale-105 ease-in-out duration-300 p-5 rounded-lg w-full"
            >
              {item.Icon && (
                <Image src={item.Icon.url} alt="Icon" width={40} height={40} />
              )}
              <h6 className="text-nowrap font-medium text-sm">{item.Name}</h6>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default SearchDoctor;
