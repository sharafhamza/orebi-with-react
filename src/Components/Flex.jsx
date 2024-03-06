import React from "react";

const Flex = ({ children, className, onClick }) => {
  return (
    <div onClick={onClick} className={`${className} items-center flex`}>
      {children}
    </div>
  );
};

export default Flex;
