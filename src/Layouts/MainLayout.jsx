import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";
import { Analytics } from "@vercel/analytics/react";


export default function MainLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Analytics />
    </div>
  );
}
