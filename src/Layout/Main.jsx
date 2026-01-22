import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../pages/ScrollToTop";

const Main = () => {
  return (
    <>
      <Navbar></Navbar>
      <ScrollToTop></ScrollToTop>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default Main;
