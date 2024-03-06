import React, { useState } from "react";
import { FaCircleXmark } from "react-icons/fa6";

import { Brand, Category, Colors, Input, Price } from "../../DefaultExport";
const Sidebar = ({ handleChange }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className={` absolute lg:relative z-50 !h-screen !bg-white left-0 ${
        show ? "bottom-0 visible" : "-bottom-full hidden"
      } w-full flex pl-4 pt-4  lg:pt-0 lg:w-[18%] flex-col gap-6 transition-all`}
    >
      <FaCircleXmark
        className={`${
          show ? "top-0" : "-top-full"
        } fixed inline-block text-3xl text-black top-4 right-2 lg:hidden`}
        onClick={() => setShow((prev) => !prev)}
      />
      <Category handleChange={handleChange} />
      <Colors handleChange={handleChange} />
      <Brand handleChange={handleChange} />
      <Price handleChange={handleChange} />
    </div>
  );
};

export default Sidebar;
