import { ReactNode } from "react";
import SideBar from "./_components/sidebar";
import Navbar from "./_components/navbar";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-full">
      <div className="h-[80px] md:pl-60 fixed inset-y-0 w-full z-50">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-60 flex-col fixed inset-y-0">
        <SideBar />
      </div>
      <main className="md:pl-60">{children}</main>
    </div>
  );
};

export default DashboardLayout;
