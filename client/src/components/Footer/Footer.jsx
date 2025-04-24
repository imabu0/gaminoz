import React from "react";
import { Link } from "react-router-dom";
import categoryData from "../Category/categoryData.json";

export const Footer = () => {
  return (
    <footer className="px-[2%] py-[60px] mt-[80px] bg-[#1A1A1A] text-[16px] rounded-[20px] border-t-2 border-t-[#e79e0d]">
      <div className="flex flex-col justify-between items-center gap-3 font-normal">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center md:items-start justify-between w-full gap-4 md:gap-0">
          <img src="img/logo.png" alt="icon" className="w-[80px] h-[66.07px]" />
          <div>
            <h2 className="font-semibold text-[16px]">Category</h2>
            <div>
              {categoryData.map((c) => (
                <Link to={c.link}>
                  <h1 className="cursor-pointer text-[#c4c4c4] hover:underline transition-all">
                    {c.footer_title}
                  </h1>
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col">
            <h2 className="font-semibold text-[16px]">Links</h2>
            <Link
              to="/privacypage"
              className="cursor-pointer text-[#c4c4c4] hover:underline transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              to="/disclaimerpage"
              className="cursor-pointer text-[#c4c4c4] hover:underline transition-all"
            >
              Disclaimer
            </Link>
            <Link
              to="/termspage"
              className="cursor-pointer text-[#c4c4c4] hover:underline transition-all"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/contactpage"
              className="cursor-pointer text-[#c4c4c4] hover:underline transition-all"
            >
              Contact Us
            </Link>
          </div>
          <div>
            <h2 className="text-[14px] text-center">Follow us :</h2>
            <ul className="flex items-center gap-3 my-1">
              <li className="w-[40px] h-[40px] invert hover:invert-[80%] flex items-center justify-center rounded-[50%] border-[1px] border-[#000000]">
                <a href="https://www.facebook.com/Gaminoz.co">
                  <img
                    src="img/facebook.png"
                    alt="facebook icon"
                    className="w-[24px] h-[24px]"
                  />
                </a>
              </li>
              <li className="w-[40px] h-[40px] invert hover:invert-[80%] flex items-center justify-center rounded-[50%] border-[1px] border-[#000000]">
                <a href="https://www.instagram.com/gaminoz.co/">
                  <img
                    src="img/instagram.png"
                    alt="instagram icon"
                    className="w-[24px] h-[24px]"
                  />
                </a>
              </li>
              <li className="w-[40px] h-[40px] invert hover:invert-[80%] flex items-center justify-center rounded-[50%] border-[1px] border-[#000000]">
                <a href="https://www.youtube.com/@Gaminoz">
                  <img
                    src="img/youtube.png"
                    alt="youtube icon"
                    className="w-[24px] h-[24px]"
                  />
                </a>
              </li>
              <li className="w-[40px] h-[40px] invert hover:invert-[80%] flex items-center justify-center rounded-[50%] border-[1px] border-[#000000]">
                <a href="https://ar.pinterest.com/gaminozofficial/">
                  <img
                    src="img/pinterest.png"
                    alt="pinterest icon"
                    className="w-[24px] h-[24px]"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-4 pt-5 border-t-[.5px] border-t-[#c4c4c4] w-full text-center">
          <p>Copyright © 2024 Gaminoz</p>
        </div>
      </div>
    </footer>
  );
};
