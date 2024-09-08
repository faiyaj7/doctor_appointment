import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { deleteCurrentUserAppointment } from "@/app/actions/globalServerApi";
import { toast } from "sonner";

const CancelAppointment = ({ id, handleFetching }) => {
  const handleDeleteAppointment = async () => {
    const response = await deleteCurrentUserAppointment(id);
    if (response) toast("Deleted your Appointment successfully.");
    handleFetching();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          variant="outline"
          className="border border-red-500 text-red-500"
        >
          Cancel Appointment
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteAppointment}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default CancelAppointment;
