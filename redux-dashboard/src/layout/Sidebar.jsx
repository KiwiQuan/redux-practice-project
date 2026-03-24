import React from "react";
import { Users as UsersIcon, FileText } from "lucide-react";
export function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 h-screen border-r bg-muted/40 p-4">
      <h2 className="text-lg font-semibold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-2">
        <button
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${activeTab === "users" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
          onClick={() => setActiveTab("users")}
        >
          <UsersIcon size={16} />
          Users
        </button>
        <button
          className={`flex items-center gap-2 px-3 py-2 rounded-md transition-colors ${activeTab === "posts" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
          onClick={() => setActiveTab("posts")}
        >
          <FileText size={16} />
          Posts
        </button>
      </nav>
    </aside>
  );
}
