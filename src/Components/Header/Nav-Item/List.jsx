import React from "react";

const List = ({ children, className }) => {
  return <ul className={`z-10 ${className}`}>{children}</ul>;
};

export default List;
