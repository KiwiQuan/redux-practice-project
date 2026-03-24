import React from "react";
export function Sidebar({ activeTab, setActiveTab }) {
  return (
    <aside className="w-64 h-screen border-r bg-muted/40 p-4">
      <h2 className="text-lg font-semibold mb-6">Dashboard</h2>

      <nav className="flex flex-col gap-2">
        <button
          className={`text-left px-3 py-2 rounded-md transition-colors ${activeTab === "users" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
          onClick={() => setActiveTab("users")}
        >
          Users
        </button>
        <button
          className={`text-left px-3 py-2 rounded-md transition-colors ${activeTab === "posts" ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}
          onClick={() => setActiveTab("posts")}
        >
          Posts
        </button>
      </nav>
    </aside>
  );
}
