import axios from "axios";

const api_key = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_DOMAIN,
  headers: {
    Authorization: `Bearer ${api_key}`,
  },
});

export const getCategory = () => axiosClient.get("categories?populate=*");

export const getDoctorList = () => axiosClient.get("doctors?populate=*");
export const getDoctorBasedOnCategory = (category) =>
  axiosClient.get(
    `doctors?filters[category][Name][$eq]=${category}&populate=*`
  );
export const getDoctorDetailsBasedOnId = (id) =>
  axiosClient.get(`doctors/${id}?populate=*`);

export const createBookingAppointment = (data) =>
  axiosClient.post(`appointments?populate=*`, data);

export const getUsersBookingHistory = (email) =>
  axiosClient.get(
    `/appointments?[filters][email][$eq]=${email}&populate[doctor][populate][image]=url`
  );

export const deleteUserAppointment = (id) =>
  axiosClient.delete(`/appointments/${id}`);
