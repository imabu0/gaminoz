import React from "react";
import { useParams } from "react-router-dom";
import free from "./freeData.json"

const FreeGame = () => {
  const { name } = useParams();
  const f = free.find((f) => f.name === name);

  return (
    <div>
      <div className="w-[350px] md:w-[700px] lg:w-[950px] xl:w-[1250px] 2xl:w-[1440px] h-[700px] m-auto">
        <iframe className="w-full h-full" src={f.link} frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default FreeGame;
