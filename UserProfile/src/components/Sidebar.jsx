import React from 'react';
import { LayoutGrid, PenSquare, MessageCircle, Settings } from 'lucide-react';


function Sidebar() {
  return (
    <div className="w-64 bg-blue-600 text-white min-h-screen p-6">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-12">
      <img src="../../src/lawlink.png" className="w-8 h-8" alt="LawLink Logo" />
      <h1 className="text-2xl font-bold">LawLink LK</h1>
      </div>

      {/* Navigation */}
      <nav className="space-y-6">
        <a href="#" className="flex items-center gap-3 text-lg">
          <LayoutGrid className="w-6 h-6" />
          Dashboared
        </a>
        <a href="#" className="flex items-center gap-3 text-lg">
          <PenSquare className="w-6 h-6" />
          Create post
        </a>
        <a href="#" className="flex items-center gap-3 text-lg">
          <MessageCircle className="w-6 h-6" />
          Ask lexbot
        </a>
        <a href="#" className="flex items-center gap-3 text-lg">
        <Settings className="w-6 h-6" />
          Settings
        </a>
      </nav>

      {/* My Cases */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">MY CASES</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            
            <span>CASE NAME</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-400"></div>
            <span>CASE NAME</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-400"></div>
            <span>CASE NAME</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;