import React from 'react';
import { Bell, Calendar, HelpCircle } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6">
      <div className="flex items-center justify-between">
        <div className="flex-1"></div>
        <div className="flex items-center space-x-6">
          <Calendar className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
          <HelpCircle className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
          <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600" />
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">MICHAEL</div>
              <div className="text-sm text-gray-600">THOMPSEN</div>
            </div>
            <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">MT</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;