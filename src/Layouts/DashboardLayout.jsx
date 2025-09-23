import { Clock, ToolCase } from "lucide-react";
import React from "react";
import { Link, Outlet } from "react-router";
import UnderConstruction from "../Components/UnderConstruction/UnderConstruction";

export default function DashboardLayout() {
  return (
    <>
      {/* <UnderConstruction /> */}
      <Outlet />
    </>
  );
}
