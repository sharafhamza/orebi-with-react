import React from "react";
import { Header } from "../DefaultExport";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default RootLayout;
