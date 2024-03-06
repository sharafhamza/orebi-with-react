import React from "react";

const DropDown = ({ DropDownref, className, children }) => {
  return (
    <div ref={DropDownref} className={`${className} z-10`}>
      {children}
    </div>
  );
};

export default DropDown;
