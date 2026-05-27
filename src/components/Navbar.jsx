import {
  Bell,
  Menu,
  SearchIcon,
  User,
  X,
  Home,
  Settings,
  HelpCircle,
} from "lucide-react";
import React, { useState } from "react";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      {/* 
        FIX 1: "sticky top-0" must be on the nav itself. 
        "z-40" ensures it stays above page content but below the sidebar.
      */}
      <nav className="sticky top-0 z-50 w-full flex items-center justify-between px-4 py-3 bg-white border-b shadow-sm">
        {/* Menu Button */}
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-md transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Searchbar */}
        <div className="flex flex-1 items-center bg-gray-100 rounded-full mx-3 px-3 py-1.5">
          <SearchIcon className="w-4 h-4 text-gray-500 shrink-0" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent border-none outline-none text-sm ml-2 text-gray-800"
          />
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-1.5 shrink-0">
          <button className="relative p-1.5 text-gray-600">
            <Bell className="w-6 h-6" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
          </button>
          <button className="p-1.5 bg-gray-100 rounded-full">
            <User className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </nav>

      {/* --- Sidebar Overlay --- */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* --- Sidebar Panel --- */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b">
          <span className="font-bold text-lg text-gray-800">Menu</span>
          <button onClick={() => setIsSidebarOpen(false)} className="p-1.5">
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col p-4 gap-2">
          {/* Links */}
          <a
            href="#"
            className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <Home className="w-5 h-5" />
            <span className="font-medium">Home</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-3 p-3 text-gray-700 rounded-lg hover:bg-gray-100"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </a>
        </div>
      </aside>
    </>
  );
}
