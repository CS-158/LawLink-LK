import React from 'react';
import { Grid, Eye, Settings } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-700 text-white flex flex-col">
      <div className="p-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white rounded">
            <div className="w-full h-full flex items-center justify-center text-blue-700 font-bold">
              L
            </div>
          </div>
          <span className="text-xl font-bold">LawLink</span>
          <span className="text-sm">LK</span>
        </div>
      </div>

      <nav className="flex-1 px-4">
        <div className="space-y-2">
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg bg-blue-800">
            <Grid className="w-6 h-6" />
            <span>Dashboard</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <Eye className="w-6 h-6" />
            <span>View cases</span>
          </a>
          <a href="#" className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-blue-800">
            <Settings className="w-6 h-6" />
            <span>Settings</span>
          </a>
        </div>

        <div className="mt-8">
          <h2 className="px-4 text-sm font-semibold text-blue-200 uppercase">MY CASES</h2>
          <div className="mt-4 space-y-2">
            {['CASE NAME', 'CASE NAME', 'CASE NAME'].map((name, index) => (
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
}

export default Sidebar;