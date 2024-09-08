import React from "react";
import DoctorDetails from "../_components/DoctorDetails";
import DoctorSuggestion from "../_components/DoctorSuggestion";

import { getDoctors } from "@/app/actions/globalServerApi";
export async function generateStaticParams() {
  const doctors = await getDoctors();

  return doctors.map((doctor) => ({
    id: doctor.id.toString(),
  }));
}

const DetailsById = ({ params }) => {
  return (
    <section className="px-5 lg:px-10 mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-4">
        <div className="col-span-3">
          <DoctorDetails id={params.id} />
        </div>
        <div className="col-span-1">
          <DoctorSuggestion id={params.id} />
        </div>
      </div>
    </section>
  );
};

export default DetailsById;
