"use client";

import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useEffect } from "react";
import CancelAppointment from "./CancelAppointment";

const BookingList = ({ bookingList, expired, handleFetching }) => {
  return (
    <div className="w-3/4 mx-auto">
      {bookingList.length > 0 ? (
        <div className="flex flex-col items-center justify-center gap-4 ">
          {bookingList &&
            bookingList.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-around gap-8 border p-3 rounded-lg w-full m-3 shadow-md"
              >
                <Image
                  src={
                    item.attributes.doctor.data.attributes.image.data.attributes
                      .url
                  }
                  alt={"doctor-image"}
                  width={70}
                  height={70}
                  className="rounded-full h-[70px]  object-cover"
                />
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="flex justify-between items-center w-full">
                    <span className="text-2xl font-medium">
                      {item.attributes.doctor.data.attributes.name}
                    </span>
                    {!expired && (
                      <CancelAppointment
                        id={item.id}
                        handleFetching={handleFetching}
                      />
                    )}
                  </h2>
                  <h2 className="flex gap-2">
                    <MapPin className="text-blue-500" />
                    {item.attributes.doctor.data.attributes.address}
                  </h2>
                  <h2 className="flex gap-2">
                    <Calendar className="text-blue-500" />
                    {moment(item.attributes.date).format("DD-MMM-YYYY")}
                  </h2>
                  <h2 className="flex gap-2">
                    <Clock className="text-blue-500" />
                    Time Slot: {item.attributes.time}
                  </h2>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <h1 className="text-center text-5xl h-[60vh] flex items-center justify-center">
          No Appointment Added yet 😢.
        </h1>
      )}
    </div>
  );
};

export default BookingList;
