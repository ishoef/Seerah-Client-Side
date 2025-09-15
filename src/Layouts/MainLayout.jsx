import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import { Analytics } from "@vercel/analytics/react";
import Footer from "../Components/Footer/Footer";


export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <Analytics />
    </div>
  );
}
