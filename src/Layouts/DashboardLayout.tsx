
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";


export default function DashboardLayout() {
  return (
    <div className="min-h-screen flex relative ">
      <Sidebar  />
      <div className="w-full">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
