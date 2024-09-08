import DoctorList from "@/app/_components/DoctorList";
import {
  getCategories,
  getDoctorByCategory,
} from "@/app/actions/globalServerApi";
import React from "react";

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    id: category.id,
  }));
}

const SearchCategory = async ({ params }) => {
  const data = await getDoctorByCategory(params.category);
  return (
    <div>
      <DoctorList
        data={data}
        heading={null}
        spanHeading={data[0].attributes.category.data.attributes.Name}
      />
    </div>
  );
};

export default SearchCategory;
