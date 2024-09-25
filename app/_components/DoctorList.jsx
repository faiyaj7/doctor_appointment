import React from "react";
import { getDoctors } from "../actions/globalServerApi";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DoctorList = async ({
  data = [],
  heading = "Popular",
  spanHeading = "Doctors",
}) => {
  data = data.length > 0 ? data : await getDoctors();

  return (
    <section className="w-3/4 mx-auto">
      <h1 className="text-5xl my-5 font-semibold">
        {heading} <span className="text-blue-500">{spanHeading}</span>
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
        {data.length > 0 &&
          data?.map((doctor) => (
            <div
              className="border-2 border-gray-200 hover:border-blue-500 hover:shadow-md p-4 rounded-lg transition-all duration-300 flex items-start flex-col gap-1 hover:scale-95 "
              key={doctor.documentId}
            >
              <Image
                src={doctor.image.url}
                alt="doctor-image"
                width={300}
                height={300}
                className="h-[200px] w-full rounded-lg object-cover"
              />
              <h2 className="w-fit bg-blue-500 text-white p-2 rounded-2xl text-sm">
                {doctor.category?.Name}
              </h2>
              <h1 className="font-bold block truncate">{doctor.name}</h1>
              <h2>{doctor.experience} years</h2>
              <h2 className=" w-full text-xs font-light block truncate">
                {doctor.address}
              </h2>
              <Link
                href={`/details/${doctor.documentId}`}
                className="w-full bg-white text-black border 
               border-blue-500 hover:bg-blue-500 hover:text-white
               p-2 rounded-lg text-center"
              >
                Book Now
              </Link>
            </div>
          ))}
      </div>
    </section>
  );
};

export default DoctorList;
