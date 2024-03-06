import React from "react";

const Container = ({ children, className }) => {
  return (
    <div
      className={`px-3 ${className} 724:px-0 724:max-w-700 840:max-w-[820px] 940:max-w-920 lg:max-w-1000 1100:px-10 1440:max-w-1400 1640:max-w-container mx-auto`}
    >
      {children}
    </div>
  );
};

export default Container;
