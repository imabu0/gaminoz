import React from "react";
import Game from "../Games/Game";
import race from "../Games/raceData.json"

const Racepage = () => {
  return (
    <div className="w-[350px] md:w-[700px] lg:w-[950px] xl:w-[1180px] 2xl:w-[1440px] m-auto mt-10">
      <div className="flex flex-col items-center">
        <img src="img/cat4.png" alt="icon" className="w-[48px] h-[48px]" />
        <h3 className="text-[28px]">Racing Games</h3>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 md:gap-0 md:gap-y-[15px] mt-10">
        {race.map((r) => (
          <div key={r.id}>
            <div className="flex flex-col gap-[10px]">
              <Game img={r.thumbnail} title={r.name} link={`/race/${r.id}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Racepage;
