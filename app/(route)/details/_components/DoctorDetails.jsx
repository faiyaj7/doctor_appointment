"use client";
import BookAppointment from "@/app/_components/BookAppointment";
import { getDoctorDetailsById } from "@/app/actions/globalServerApi";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaRedhat, FaYoutube, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

const DoctorDetails = ({ id }) => {
  const [data, setData] = useState();
  useEffect(() => {
    async function doctorDetailsFetch() {
      const response = await getDoctorDetailsById(id);
      setData(response);
    }
    doctorDetailsFetch();
  }, [id]);
  //

  return (
    <>
      {data && (
        <div className="w-full flex items-start justify-center gap-4 flex-col">
          {data?.image && (
            <div className="w-[50%] h-[50%] aspect-square">
              <Image
                src={data?.image.url}
                alt={data?.name}
                width={1000}
                height={1000}
                className=" object-cover rounded-lg shadow-lg w-full h-full"
              />
            </div>
          )}
          <h1 className="text-6xl tracking-wide font-bold">{data.name}</h1>
          <div className="flex items-center gap-3 ">
            <FaRedhat size={20} />
            <h1 className="text-2xl">{data.experience} years of Experience</h1>
          </div>
          <div className="flex items-center gap-3">
            <FaLocationDot />
            <h1 className="text-xl">{data.address}</h1>
          </div>
          <div className="flex items-center justify-center gap-4">
            {" "}
            <h2 className="w-fit bg-blue-500 text-white p-2 rounded-2xl text-sm">
              {data.category.Name}
            </h2>
            <BookAppointment doctorId={id} />
          </div>
          <div className="flex items-center justify-start gap-5">
            <FaYoutube />
            <FaFacebook />
            <FaLinkedin />
            <FaXTwitter />
          </div>
          <div className="">
            <h1 className="text-4xl">About Me</h1>
            {data.about.map((item, index) => (
              <div className="w-3/4" key={index}>
                {item.children.map((child, childIndex) => (
                  <p key={childIndex}>{child.text}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default DoctorDetails;
