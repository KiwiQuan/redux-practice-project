import React from "react";

export function Header({ activeTab }) {
  return (
    <header className="h-14 border-b flex items-center px-6 justify-between">
      <h1 className="text-lg font-semibold capitalize">{activeTab}</h1>
      <span className="text-sm text-muted-foreground">Welcome back</span>
    </header>
  );
}
