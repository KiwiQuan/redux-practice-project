import React, { useState } from "react";
import { Sidebar } from "@/layout/Sidebar";
import { Header } from "@/layout/Header";
import { Users } from "@/features/users/Users";
import { Posts } from "@/features/posts/Posts";

export function DashboardLayout() {
  const [activeTab, setActiveTab] = useState("users");
  return (
    <div className="flex min-h-screen">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col">
        <Header activeTab={activeTab} />
        <main className="p-6 bg-background flex-1">
          {activeTab === "users" ? <Users /> : <Posts />}
        </main>
      </div>
    </div>
  );
}
