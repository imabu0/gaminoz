import React from "react";
import { useParams } from "react-router-dom";
import action from "./actionData.json"

const ActionGame = () => {
  const { name } = useParams();
  const a = action.find((a) => a.name === name);

  return (
    <div>
      <div className="w-[350px] md:w-[700px] lg:w-[950px] xl:w-[1250px] 2xl:w-[1440px] h-[700px] m-auto">
        <iframe className="w-full h-full" src={a.link} frameborder="0"></iframe>
      </div>
    </div>
  );
};

export default ActionGame;
