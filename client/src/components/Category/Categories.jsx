import React from "react";
import categoryData from "./categoryData.json";
import Category from "./Category";
import { Link } from "react-router-dom";

export const Categories = () => {
  return (
    <div className="flex mt-5 gap-3">
      {categoryData.map((c) => (
        <Link to={c.link}>
          <Category icon={c.icon} title={c.title} />
        </Link>
      ))}
    </div>
  );
};
