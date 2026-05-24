import React, { useState } from "react";
import { Home, Users, GitMerge, Layout, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomBar() {
  // Set 'dashboard' as the default active tab
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("dashboard");

  // Array of navigation items to keep the JSX clean
  const navItems = [
    { id: "dashboard", label: "Dashboard", Icon: Home, Link: "/Dashboard" },
    { id: "customers", label: "Customers", Icon: Users },
    { id: "orders", label: "Orders", Icon: GitMerge }, // Closest match to the branching node icon
    { id: "reports", label: "Reports", Icon: Layout }, // Closest match to the split panel icon
    { id: "more", label: "More", Icon: MoreHorizontal },
  ];

  return (
    // Fixed to bottom, simulating mobile container bounds
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-md bg-white rounded-b-[40px] border-t border-gray-100 shadow-[0_-2px_10px_rgba(0,0,0,0.02)] pt-3 pb-2 px-6">
      {/* Navigation Icons Container */}
      <div className="flex justify-between items-center">
        {navItems.map(({ id, label, Icon }) => {
          const isActive = activeTab === id;

          return (
            <button
              key={id}
              onClick={() => {
                setActiveTab(id);
              }}
              className="flex flex-col items-center gap-1.5 focus:outline-none"
            >
              <Icon
                className={`w-6 h-6 transition-all duration-200 ${
                  isActive
                    ? "text-indigo-600 stroke-[2.5]"
                    : "text-slate-500 stroke-2"
                }`}
              />
              <span
                className={`text-[11px] transition-colors duration-200 ${
                  isActive
                    ? "text-indigo-600 font-semibold"
                    : "text-slate-500 font-medium"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>

      {/* iOS-style Home Indicator */}
    </div>
  );
}
