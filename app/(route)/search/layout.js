import React from "react";
import CategoryList from "./_components/CategoryList";

const layout = ({ children }) => {
  return (
    <div className="grid grid-cols-4">
      <div className="hidden lg:block col-span-1">
        {/* List of Categories */}

        <CategoryList />
      </div>
      <div className="col-span-4 lg:col-span-3">{children}</div>
    </div>
  );
};

export default layout;
