"use client";
import { getDoctors } from "@/app/actions/globalServerApi";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const DoctorSuggestion = ({ id }) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function doctorDetailsFetch() {
      const response = await getDoctors();
      setData(response);
    }
    doctorDetailsFetch();
  }, [id]);

  return (
    <div className="border">
      <h1 className="text-xl font-semibold my-4 px-10 tracking-wide">
        Suggestions
      </h1>
      <div className="flex items-center justify-center flex-col gap-5">
        {" "}
        {data
          ?.filter((data) => data.id !== Number(id))
          .map((item) => (
            <Link
              key={item.id}
              href={`/details/${item.documentId}`}
              className="flex items-center justify-around gap-5 px-10 hover:bg-slate-100"
            >
              <div className="w-1/2 h-[100px]">
                {item.image && (
                  <Image
                    src={item.image?.url}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
              <div className="">
                <h1 className="w-fit bg-blue-500 text-white p-2 rounded-2xl text-sm">
                  {item.category.Name}
                </h1>
                <h1>{item.name}</h1>
                <h1 className="text-sm">
                  {item.experience} years of Experience
                </h1>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DoctorSuggestion;
