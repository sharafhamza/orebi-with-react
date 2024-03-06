import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";

const Input = ({ title, name, handleChange, value, color }) => {
  const [colorClicked, setColorClicked] = useState(false);
  return (
    <label className="flex items-center gap-2 text-base cursor-pointer text-menuColor font-dm">
      {color ? (
        <>
          <span
            className={`w-6 h-6 rounded-full flex items-center justify-center`}
            style={{ backgroundColor: color }}
          >
            <input
              type="checkbox"
              onChange={handleChange}
              value={value}
              name={name}
              className="hidden w-4 h-4"
              onClick={() => setColorClicked((prev) => !prev)}
            />
            <FaCheck
              className={`text-white ${
                colorClicked ? "scale-100" : "scale-0"
              } transition-all delay-200`}
            />
          </span>
        </>
      ) : (
        <input
          type="checkbox"
          onChange={handleChange}
          value={value}
          name={name}
          className="w-4 h-4"
        />
      )}

      {title}
    </label>
  );
};

export default Input;
