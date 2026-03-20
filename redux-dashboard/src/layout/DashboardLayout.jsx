import React from "react";
import { Sidebar } from "@/layout/Sidebar";
import { Header } from "@/layout/Header";

export function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6 bg-background flex-1">{children}</main>
      </div>
    </div>
  );
}
