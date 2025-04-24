import { useState } from "react";
import { Link } from "react-router-dom";

function Game(props) {
  const [play, setPlay] = useState(false);

  const mEnter = () => {
    setPlay(true);
  };

  const mLeave = () => {
    setPlay(false);
  };

  const handleClick = () => {
    setPlay(!play);
  };

  return (
    <div
      onMouseEnter={mEnter}
      onMouseLeave={mLeave}
      onClick={handleClick}
      className="w-[170px] h-[120px] md:w-[220px] md:h-[164px] rounded-[12px] relative cursor-pointer md:hover:border-[2px] md:border-[#e79e0d]"
    >
      <img
        src={props.img}
        loading="lazy"
        alt="thumbnail"
        className="rounded-[10px] w-[170px] h-[120px] md:w-[220px] md:h-[160px]"
      />
      <div
        className={`absolute pb-2 inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-end items-center transition-opacity duration-300 rounded-[10px] ${
          play ? "opacity-100" : "opacity-0"
        }`}
      >
        <div>
          <h1 className="text-[10px] font-medium md:text-[14px] uppercase">
            {props.title}
          </h1>
          <Link
            to={props.link}
            className="text-[12px] md:text-[16px] w-[150px] h-[30px] md:w-[200px] md:h-[40px] gradient flex items-center justify-center rounded-[10px]"
          >
            PLAY
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Game;
