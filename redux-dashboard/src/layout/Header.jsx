import React from "react";

export function Header({ activeTab }) {
  return (
    <header className="h-14 border-b flex items-center px-6">
      <h1 className="text-lg font-semibold capitalize">{activeTab}</h1>
    </header>
  );
}
