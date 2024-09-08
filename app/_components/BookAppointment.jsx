import React, { useEffect, useMemo, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays, Clock } from "lucide-react";
import useUserInfo from "@/hooks/useUserInfo";
import { createAppointmentBooking } from "../actions/globalServerApi";
import { toast } from "sonner";
import axios from "axios";

const BookAppointment = ({ doctorId }) => {
  const user = useUserInfo();
  const [date, setDate] = useState(new Date());
  const [timeSlot, setTimeSlot] = useState();
  const [SelectedTimeSlot, setSelectedTimeSlot] = useState();
  console.log(user);

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 10; i <= 12; i++) {
      timeList.push({ time: i + ":00 AM" });
      timeList.push({ time: i + ":30 AM" });
    }
    for (let i = 1; i <= 6; i++) {
      timeList.push({ time: i + ":00 PM" });
      timeList.push({ time: i + ":30 PM" });
    }
    setTimeSlot(timeList);
  };
  const isPastDay = (day) => {
    return day <= new Date();
  };

  const handleBookingAppointment = async () => {
    const data = {
      data: {
        username: user.displayName ?? user.email,
        email: user.email,
        date,
        time: SelectedTimeSlot,
        doctor: doctorId,
      },
    };

    const response = await createAppointmentBooking(data);
    const emailSent = await axios.post(
      "http://localhost:3000/api/send",
      data
    );
console.log(emailSent);

    if (response)
      toast("Booking Confirmation message have been sent to your email");
  };

  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Button>Book Appointment</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Book Appointment</DialogTitle>
          <DialogDescription>
            <div className="">
              {" "}
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Calendar */}
                <div className="flex flex-col gap-3">
                  <h2 className="flex items-center gap-2">
                    <CalendarDays className="h-5 w-5 text-primary" />
                    Select Days
                  </h2>
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                    disabled={isPastDay}
                  />
                </div>
                {/* Time Slot */}
                <div className="">
                  <h2 className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5 text-primary" />
                    Select Time Slot
                  </h2>
                  <div className="grid grid-cols-3 gap-2 border p-3 rounded-lg">
                    {timeSlot?.map((item) => (
                      <h2
                        key={item.time}
                        onClick={() => setSelectedTimeSlot(item.time)}
                        className={`${
                          SelectedTimeSlot === item.time &&
                          "bg-primary text-white"
                        } p-2 border rounded-full text-center cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300`}
                      >
                        {item.time}
                      </h2>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              variant="outline"
              className="border-red-500 text-red-500"
            >
              Close
            </Button>
          </DialogClose>
          <Button
            onClick={handleBookingAppointment}
            type="button"
            disabled={!(date && SelectedTimeSlot)}
          >
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BookAppointment;
