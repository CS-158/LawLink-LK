import React from 'react';
import { Grid, Eye, Settings } from 'lucide-react';
import logo from './hori.png'; // Import the logo

const Sidebar = () => {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-900 text-white h-full flex-shrink-0 rounded-tr-3xl rounded-br-3xl mr-0.5">
      {/* Logo and Brand Name */}
      <div className="p-6 flex items-center space-x-4">
      <a href='#'><img src={logo} alt="LawLink LK Logo"/></a>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 px-4">
        <div className="space-y-2">
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <Grid className="w-6 h-6" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-800">
            <Eye className="w-6 h-6" />
            <span>View Cases</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <Settings className="w-6 h-6" />
            <span>Settings</span>
          </a>
        </div>

        {/* Active Cases Section */}
        <div className="mt-8">
          <h2 className="px-4 text-sm font-semibold text-blue-200 uppercase">ACTIVE CASES</h2>
          <div className="mt-4 space-y-2">
            {['Smith vs. Johnson', 'Estate Planning', 'Corporate Merger'].map((name, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center space-x-3 px-4 py-2 rounded-lg hover:bg-blue-800"
              >
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span>{name}</span>
              </a>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;