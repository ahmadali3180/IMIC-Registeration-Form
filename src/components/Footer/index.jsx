import React from "react";

function Footer() {
  return (
    <div className="items-center text-center w-full bg-gray-800 pt-4 px-2 sticky bottom-0">
      <div className="flex items-center justify-evenly px-6 pb-6 text-gray-500 text-xs sm:flex-col sm:items-start sm:text-left">
        <div className="flex gap-4 mx-auto flex-wrap">
          <p className="">
            Instagram:{" "}
            <a
              href="https://www.instagram.com/ravalbit"
              className="text-blue-400"
            >
              Ravalbit
            </a>
          </p>
          <p className="">
            Email:{" "}
            <a href="mailto: ravalbit@gmail.com" className="text-blue-400">
              ravalbit@gmail.com
            </a>
          </p>
          <p className="">
            Phone:{" "}
            <a href="tel:+923181817231" className="text-blue-400">
              +92-318-1817-231
            </a>
          </p>
        </div>
      </div>
      <div className="border border-gray-500"></div>
      <div className="py-2">
        <p className="text-[10px] font-medium text-gray-400">
          Designed and Developed by{" "}
          <span className="font-bold text-blue-400 text-[]10px">Ravalbit</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
