import React from 'react';
import { Bell, Calendar, HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-blue-800 h-16 flex items-center justify-between px-6 shadow-sm rounded-tl-full rounded-bl-full mt-2 ml-1">
      {/* Left side (empty for now) */}
      <div className="flex-1"></div>

      {/* Right side: Icons and User Profile */}
      <div className="flex items-center space-x-6">
        {/* Calendar Icon */}
        <button className="p-2 hover:bg-blue-700 rounded-full transition-colors">
          <Calendar className="w-5 h-5 text-white" />
        </button>

        {/* Help Icon */}
        <button className="p-2 hover:bg-blue-700 rounded-full transition-colors">
          <HelpCircle className="w-5 h-5 text-white" />
        </button>

        {/* Notification Bell Icon */}
        <button className="p-2 hover:bg-blue-700 rounded-full transition-colors">
          <Bell className="w-5 h-5 text-white" />
        </button>

        {/* User Profile Section */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            {/* User Name */}
            <div className="text-sm font-medium text-white">MICHAEL</div>
            
            {/* Practice Area */}
            <div className="text-sm text-gray-300">THOMPSEN</div>
          </div>

          {/* User Avatar */}
          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-600">MT</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;