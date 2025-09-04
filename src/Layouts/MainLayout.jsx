import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header/Header";

export default function MainLayout() {
  return (
    <div
      className="min-h-screen 
  bg-[#f9fafb] 
  [background-image:linear-gradient(to_right,rgba(229,231,235,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(229,231,235,0.3)_1px,transparent_1px)] 
  [background-size:20px_20px]"
    >
      <Header />
      <Outlet />
    </div>
  );
}
