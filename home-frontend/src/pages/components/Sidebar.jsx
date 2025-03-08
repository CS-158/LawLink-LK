import React from "react";

function Sidebar() {
  return (
    <div className="w-64 bg-[#0022fc] text-white p-4">
      <h2 className="text-xl font-bold mb-6">LawLink LK</h2>
      <ul>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">Dashboard</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">Profile</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">Cases</a>
        </li>
        <li className="mb-2">
          <a href="#" className="hover:text-gray-300">Messages</a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;