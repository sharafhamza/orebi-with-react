import React from "react";

const Title = (props) => {
  return <props.as className={props.className}>{props.title}</props.as>;
};

export default Title;
