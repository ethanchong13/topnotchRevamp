import React from "react";
import { socialMeida } from "../../constants";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-between sm:flex-row flex-col mt-16 px-16 bg-gray-800 sm:py-8 py-6">
      <div className="justify-center items-center flex ">
        <p className="text-white font-light text-[16px] ">
          Copyright © 2023 TOPNOTCH GROUP. All Rights Reserved
        </p>
      </div>
      <div className="flex flex-row justify-center items-center">
        {socialMeida.map((media, index) => {
          return (
            <a
              key={media.id}
              className={`${
                index !== socialMeida.length - 1 ? "mr-3" : "mr-0"
              } sm:mt-0 mt-4`}
              href={media.link}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={media.img}
                alt={media.id}
                className="w-[21px] h-[21px] object-contain cursor-pointer"
              />
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
