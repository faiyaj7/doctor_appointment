"use client";
import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import BookingList from "./BookingList";
import { getTheUserBookingHistory } from "@/app/actions/globalServerApi";
import useUserInfo from "@/hooks/useUserInfo";
import { useEffect, useState } from "react";
const BookingHistory = () => {
  let user = useUserInfo();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchBookingList();
  }, [user?.email, fetchBookingList]);

  async function fetchBookingList(params) {
    if (user?.email) {
      const response = await getTheUserBookingHistory(user?.email);
      setData(response);
    }
  }
  const filterUserBooking = (type) => {
    return data?.filter((item) =>
      type == "upcoming"
        ? new Date(item.attributes.date) >= new Date()
        : new Date(item.attributes.date) <= new Date()
    );
  };
  return (
    <>
      {data?.length > 0 && (
        <div className="w-full">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="expired">Expired</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming">
              {data?.length > 0 && (
                <BookingList
                  bookingList={filterUserBooking("upcoming")}
                  expired={false}
                  handleFetching={fetchBookingList}
                />
              )}
            </TabsContent>
            <TabsContent value="expired">
              {data?.length && (
                <BookingList
                  bookingList={filterUserBooking("expired")}
                  expired={true}
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      )}
    </>
  );
};

export default BookingHistory;
