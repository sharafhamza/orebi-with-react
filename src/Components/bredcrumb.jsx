import React from "react";
import { Link } from "react-router-dom";

const Bredcrumb = () => {
  const product = window.location.pathname.split("/")[1];
  const cap = product.charAt(0).toUpperCase() + product.slice(1);

  return (
    <div className="py-20">
      <h1 className="text-5xl font-bold font-dm ">{cap}</h1>
      <p className="mt-2 text-menuColor font-dm">
        <Link to="/">Home ></Link> {cap} {}
      </p>
    </div>
  );
};

export default Bredcrumb;
