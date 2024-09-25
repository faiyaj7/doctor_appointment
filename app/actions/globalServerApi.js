"use server";
import {
  createBookingAppointment,
  deleteUserAppointment,
  getCategory,
  getDoctorBasedOnCategory,
  getDoctorDetailsBasedOnId,
  getDoctorList,
  getUsersBookingHistory,
} from "../_utils/GlobalApi";

export async function getCategories() {
  try {
    const response = await getCategory(); // Adjust to your API
    return response.data.data;
  } catch (error) {
    console.error("Error fetching :", error);
    return [];
  }
}

export async function getDoctors() {
  try {
    const response = await getDoctorList();
    return response.data.data; // Adjust to your API endpoint
  } catch (error) {
    console.error("Error fetching doctors:", error);
    return [];
  }
}

export async function getDoctorByCategory(category) {
  try {
    const response = await getDoctorBasedOnCategory(category);

    return response.data.data; // Adjust to your API endpoint
  } catch (error) {
    console.error("Error fetching in the server actions part:", error);
    return [];
  }
}

export async function getDoctorDetailsById(id) {
  try {
    const response = await getDoctorDetailsBasedOnId(id);

    return response.data.data; // Adjust to your API endpoint
  } catch (error) {
    console.error("Error fetching in the server actions part:", error);
    return [];
  }
}
export async function createAppointmentBooking(data) {
  try {
    const response = await createBookingAppointment(data);

    return response.data.data; // Adjust to your API endpoint
  } catch (error) {
    console.error("Error fetching in the server actions part:", error);
    return [];
  }
}
export async function getTheUserBookingHistory(email) {
  try {
    const response = await getUsersBookingHistory(email);

    return response.data.data; // Adjust to your API endpoint
  } catch (error) {
    console.error("Error fetching in the server actions part:", error);
    return [];
  }
}

export async function deleteCurrentUserAppointment(id) {
  try {
    const response = await deleteUserAppointment(id);

    return response.data.data; // Adjust to your API endpoint
  } catch (error) {
    console.error("Error fetching in the server actions part:", error);
    return [];
  }
}
