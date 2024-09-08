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
        {data.map((doctor) => (
          <div
            className="border-2 border-gray-200 hover:border-blue-500 hover:shadow-md p-4 rounded-lg transition-all duration-300 flex items-start flex-col gap-1 hover:scale-95 "
            key={doctor.id}
          >
            <Image
              src={doctor.attributes.image.data.attributes.url}
              alt="doctor-image"
              width={300}
              height={300}
              className="h-[200px] w-full rounded-lg object-cover"
            />
            <h2 className="w-fit bg-blue-500 text-white p-2 rounded-2xl text-sm">
              {doctor.attributes.category.data?.attributes?.Name}
            </h2>
            <h1 className="font-bold block truncate">
              {doctor.attributes.name}
            </h1>
            <h2>{doctor.attributes.experience} years</h2>
            <h2 className=" w-full text-xs font-light block truncate">
              {doctor.attributes.address}
            </h2>
            <Link
              href={`/details/${doctor.id}`}
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
