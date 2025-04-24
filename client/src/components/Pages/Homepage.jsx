import React from "react";
import {Categories} from "../Category/Categories"
import FreeList from "../Games/FreeList";
import ActionList from "../Games/ActionList";
import AdventureList from "../Games/AdventureList";
import RaceList from "../Games/RaceList";

export const Homepage = () => {
  return (
    <div className="w-[350px] md:w-[700px] lg:w-[950px] xl:w-[1250px] 2xl:w-[1440px] m-auto">
      <Categories />
      <FreeList />
      <ActionList />
      <AdventureList />
      <RaceList />
    </div>
  );
};
